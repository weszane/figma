import { declare } from '@babel/helper-plugin-utils'
import * as t from '@babel/types'
import { check } from '.';

export default declare((_, opts) => {

  function handleRename(prop, oldId, expectedId, scope, replacements, bindingNames, defaultValue = null) {
    let newName = expectedId.name;

    if (bindingNames.includes(newName) || scope.getData(newName) || check(newName)) {
      newName = scope.generateUidIdentifier(newName).name
    }

    replacements.push({
      oldName: oldId.name,
      newName,
    });
    scope.setData(newName, true)

    if (defaultValue) {
      prop.value = t.assignmentPattern(t.identifier(newName), defaultValue);
    } else {
      prop.value = t.identifier(newName);
    }

    prop.shorthand = true;
  }

  function processObjectPattern(pattern, scope, replacements, bindingNames) {

    pattern.properties.forEach((prop) => {
      if (!t.isObjectProperty(prop) || !t.isIdentifier(prop.key)) return;

      const key = prop.key;

      if (t.isIdentifier(prop.value) && t.isIdentifier(prop.key)) {
        if (key.name !== prop.value.name) {
          handleRename(prop, prop.value, t.identifier(key.name), scope, replacements, bindingNames);
        }
      } else if (t.isAssignmentPattern(prop.value) && t.isIdentifier(prop.value.left)) {
        handleRename(prop, prop.value.left, t.identifier(key.name), scope, replacements, bindingNames, prop.value.right);
      } else if (t.isObjectPattern(prop.value)) {
        processObjectPattern(prop.value, scope, replacements, bindingNames);
      } else {

      }
    });
  }

  return {
    name: 'transform-deconstruct',
    visitor: {
      VariableDeclarator(path) {
        const { id } = path.node;
        if (!t.isObjectPattern(id)) return;

        const bindingNames = Object.keys(path.scope.bindings);
        const replacements = [];

        processObjectPattern(id, path.scope, replacements, bindingNames);

        for (const { oldName, newName } of replacements) {
          const binding = path.scope.getBinding(oldName);
          if (!binding) continue;

          for (const refPath of binding.referencePaths) {
            if (refPath.isIdentifier({ name: oldName })) {
              refPath.replaceWith(t.identifier(newName));
              if (t.isObjectProperty(refPath.parent)) {
                refPath.parent.shorthand = true
              }
            }
          }
        }
      },
    }

  }
})
