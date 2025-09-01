import { declare } from '@babel/helper-plugin-utils';
import * as t from '@babel/types';
export const Plugin = declare((_, opts) => {
  function hasBindingInScope(scope, name) {
		let current = scope;
		while (current) {
			if (current.hasBinding(name)) return true;
			current = current.parent;
		}
		return false;
	}
	let i  = 0
	return { visitor: { Program: {
		enter(path, s) {
			const state = s;
			state.requireInfo = new Map();
			path.traverse({ VariableDeclarator(innerPath) {
				const { node, scope } = innerPath;
				const { id, init } = node;
				if (t.isCallExpression(init) && t.isIdentifier(init.callee, { name: "require" }) && init.arguments.length === 1 && t.isStringLiteral(init.arguments[0]) && t.isIdentifier(id)) {
					const varName = id.name;
					const modulePath = init.arguments[0].value;
					const binding = scope.getBinding(varName);
					if (!binding) return;
					const info = {
						varName,
						modulePath,
						declaratorPath: innerPath,
						references: binding.referencePaths.slice(),
						memberProps: new Map(),
						nonMemberRefs: [],
						scope
					};
					for (const ref of info.references) {
						const { parentPath } = ref;
						if (parentPath && parentPath.isMemberExpression() && parentPath.node.object === ref.node) {
							const prop = parentPath.node.property;
							if (t.isIdentifier(prop)) {
								const propName = prop.name;
								if (!info.memberProps.has(propName)) info.memberProps.set(propName, []);
								info.memberProps.get(propName).push(parentPath);
							}
						} else info.nonMemberRefs.push(ref);
					}
					state.requireInfo.set(varName, info);
				}
			} });
		},
		exit(path, s) {
			const state = s;
			const declarations = [];
			for (const [varName, info] of state.requireInfo.entries()) {
				const { modulePath, memberProps, nonMemberRefs, declaratorPath } = info;
				const importSpecifiers = [];
				const propAliasMap = new Map();
				const defaultImportNeeded = nonMemberRefs.length > 0;
				for (const [propName, refPaths] of memberProps.entries()) {
					let alias = propName;
					let newProp
					if (path.getData(propName) || refPaths.some((refPath) => hasBindingInScope(refPath.scope, propName))) {
						const prefix = opts.prefix || "";
					
						// if (opts.filename && modulePath.indexOf(opts.filename) !== -1) {
						// 	const nameList = opts.names[opts.filename] || []
						// 	const index = nameList.findIndex(item => item === propName)
						// 	if (index !== -1) {
						// 		newProp = nameList[index + 1]
						// 		propAliasMap.set(newProp, true)
						// 	}
						// 	alias = path.scope.generateUidIdentifier(newProp).name;
						// } else {
						// }
						alias = path.scope.generateUidIdentifier(`${prefix}${propName}`).name;
				}
					propAliasMap.set(propName, alias);
					importSpecifiers.push(t.importSpecifier(t.identifier(alias === propName ? propName : alias), t.identifier(newProp || propName)));
					path.setData(propName, true);
				}
				let importDecl;
				if (defaultImportNeeded) importDecl = t.importDeclaration([t.importDefaultSpecifier(t.identifier(varName)), ...importSpecifiers], t.stringLiteral(modulePath));
				else if (importSpecifiers.length > 0) importDecl = t.importDeclaration(importSpecifiers, t.stringLiteral(modulePath));
				else importDecl = t.importDeclaration([t.importDefaultSpecifier(t.identifier(varName))], t.stringLiteral(modulePath));
				declarations.push(importDecl);
				for (const [propName, refPaths] of memberProps.entries()) {
					
					for (const refPath of refPaths) refPath.replaceWith(t.identifier(alias !== propName ? alias : propName));
				}
				if (declaratorPath.parentPath && declaratorPath.parentPath.isVariableDeclaration()) {
					const varDecl = declaratorPath.parentPath;
					varDecl.node.declarations = varDecl.node.declarations.filter((d) => d !== declaratorPath.node);
					if (varDecl.node.declarations.length === 0) varDecl.remove();
				}
			}
			path.node.body.unshift(...declarations);
		}
	} } };
});
export default Plugin;
