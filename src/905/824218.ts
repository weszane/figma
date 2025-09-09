import { oneLine } from 'common-tags';
import { collectLeftProperties, collectRightPropertiesWithType } from '../905/19248';
import { isComputedField } from '../905/52806';
import { isScalarField } from '../905/320277';
import { hasCursorProperties, isEmbedded } from '../905/552287';
import { areTypesCompatible, validateUniqueArgumentNames } from '../905/690753';
import { findItemByName, hasTypeProperty } from '../905/957591';
import { CustomError } from '../905/962682';

// Special fields configuration for root and file objects
const SPECIAL_OBJECT_FIELDS = new Map([['root', ['latestClipboardData', 'lastFrameSelection', 'userNotificationBell']], ['file', ['presenter']]]);

/**
 * Represents an object field definition in the schema
 * Original class name: $$p0
 */
export class ObjectFieldDefinition {
  fieldType = 'object';
  name: string;
  type: any;
  nullable: boolean;
  embedded: boolean;
  checkCanRead: Record<string, any> | undefined;
  shadowCheckCanRead: any;
  args: any[];
  filter: any;
  expectedMaxCount: number | undefined;
  orderBy: any;
  pagination: any;
  resolver: any;
  deprecated: boolean;
  typechecked: boolean;
  bannedFromViews: boolean;
  firstSeen: any;
  filterDef: any;
  permissionName: string | undefined;
  constructor(fieldConfig: any, firstSeenContext: any) {
    this.name = fieldConfig.name;
    this.type = fieldConfig.type;
    this.nullable = fieldConfig.nullable || false;
    this.deprecated = fieldConfig.deprecated;
    this.bannedFromViews = fieldConfig.bannedFromViews;
    this.typechecked = fieldConfig.typechecked === undefined || fieldConfig.typechecked;
    this.firstSeen = firstSeenContext;
    this.permissionName = fieldConfig.permissionName;
    if (isEmbedded(fieldConfig)) {
      this.embedded = true;
      this.args = [];
      this.checkCanRead = undefined;
    } else {
      this.embedded = false;
      this.args = fieldConfig.args || [];
      this.expectedMaxCount = fieldConfig.expectedMaxCount;
      this.filter = fieldConfig.filter ? parseFilterDefinition(fieldConfig.filter) : undefined;
      this.filterDef = fieldConfig.filter;
      this.checkCanRead = fieldConfig.checkCanRead || undefined;
      this.shadowCheckCanRead = fieldConfig.shadowCheckCanRead || undefined;
      this.pagination = fieldConfig.pagination;
      this.resolver = fieldConfig.resolver;
    }
    this.orderBy = this.parseOrderByConfig(fieldConfig.orderBy);
  }

  /**
   * Parse order by configuration
   * Original function: anonymous function in constructor
   */
  private parseOrderByConfig(orderByConfig: any): any {
    if (!orderByConfig) return undefined;
    if (orderByConfig === 'Unordered') return 'Unordered';
    return orderByConfig.map((item: any) => Array.isArray(item) ? item : [item, 'ASC']);
  }

  /**
   * Check if the field is nullable
   * Original method: isNullable
   */
  isNullable(): boolean {
    return this.nullable;
  }

  /**
   * Check if the field represents a list of objects
   * Original method: isList
   */
  isList(): boolean {
    return this.type.kind === 'objects';
  }

  /**
   * Get fields referenced in filter conditions
   * Original getter: filterFields
   */
  get filterFields(): Set<string> {
    const fields = new Set<string>();
    for (const {
      type,
      ref
    } of collectRightPropertiesWithType(this.filter)) {
      if (type === 'parent') {
        fields.add(ref);
      }
    }
    return fields;
  }

  /**
   * Get fields that this field depends on
   * Original getter: dependentFields
   */
  get dependentFields(): Set<string> {
    const fields = new Set<string>();
    if (this.orderBy && this.orderBy !== 'Unordered') {
      for (const [fieldName] of this.orderBy) {
        fields.add(fieldName);
      }
    }
    for (const fieldName of collectLeftProperties(this.filter)) {
      fields.add(fieldName);
    }
    return fields;
  }

  /**
   * Validate the field definition against the schema
   * Original method: validate
   */
  validate(schema: any, objectDefinition: any): void {
    this.validateObjectTypeExists(schema, objectDefinition);
    const usedArguments = new Set<string>();
    this.validateCanReadConfiguration(schema, objectDefinition, usedArguments);
    this.validateEmbeddedConfiguration(schema, objectDefinition);
    this.validateResolvability(objectDefinition);
    this.validateCanReadField(schema, objectDefinition);
    validateUniqueArgumentNames(`field '${this.name}' of object type '${objectDefinition.name}'`, this.args);
    this.validateFilterConditions(schema, objectDefinition, usedArguments);
    this.validateResolverConfiguration(schema, objectDefinition, usedArguments);
    this.validatePaginationConfiguration(schema, objectDefinition, usedArguments);
    this.validateAllArgumentsUsed(objectDefinition, usedArguments);
  }

  /**
   * Validate that the referenced object type exists
   * Original code: inline validation in validate method
   */
  private validateObjectTypeExists(schema: any, objectDefinition: any): void {
    if (!schema.objects.has(this.type.name)) {
      this.throwFieldError(objectDefinition, `refers to undefined object type '${this.type.name}'`);
    }
  }

  /**
   * Validate checkCanRead configuration
   * Original code: inline validation in validate method
   */
  private validateCanReadConfiguration(schema: any, objectDefinition: any, usedArguments: Set<string>): void {
    if (!this.checkCanRead) return;
    if (Object.keys(this.checkCanRead).length === 0) {
      this.throwFieldError(objectDefinition, 'uses checkCanRead attribute and it doesn\'t take any arguments. checkCanRead must take arguments such as { userId: fieldArg(\'userId\') } or { userId: session(\'userId\') }. This also means the corresponding canRead field must take these arguments as well.');
    }
    for (const [, argument] of Object.entries(this.checkCanRead)) {
      if (hasTypeProperty(argument)) {
        if (findItemByName(this.args, argument.ref) || findItemByName(schema.session.args, argument.ref)) {
          usedArguments.add(argument.ref);
        } else {
          this.throwFieldError(objectDefinition, `uses argument '${argument.ref}' in its checkCanRead call but does not declare it`);
        }
      }
    }
  }

  /**
   * Validate embedded field configuration
   * Original code: inline validation in validate method
   */
  private validateEmbeddedConfiguration(schema: any, objectDefinition: any): void {
    const referencedObject = schema.objectDef(this.type);
    if (this.embedded && !referencedObject.embedded && !referencedObject.def.computed) {
      this.throwFieldError(objectDefinition, `refers to object '${this.type.name}' as an embedded field, but object '${this.type.name}' is not marked as embedded or computed`);
    }
    if (referencedObject.embedded && !this.embedded) {
      this.throwFieldError(objectDefinition, `refers to embedded object type '${this.type.name}' without marking as embedded. Add embedded: true`);
    }
  }

  /**
   * Validate that the field is resolvable
   * Original code: inline validation in validate method
   */
  private validateResolvability(objectDefinition: any): void {
    if (!this.isResolvable(objectDefinition)) {
      this.throwFieldError(objectDefinition, 'does not contain a filter or resolver and is not embedded');
    }
  }

  /**
   * Validate canRead field configuration
   * Original code: inline validation in validate method
   */
  private validateCanReadField(schema: any, objectDefinition: any): void {
    if (!this.checkCanRead) return;
    const referencedObject = schema.objectDef(this.type);
    if (this.checkCanRead.fieldName || referencedObject.fields.has('canRead')) {
      // Field validation logic
    } else {
      this.throwFieldError(objectDefinition, `has checkCanRead set to true but '${referencedObject.name}' does not have a 'canRead' field`);
    }
    if (this.checkCanRead.fieldName) {
      const fieldName = this.checkCanRead.fieldName.toString();
      if (!referencedObject.fields.has(fieldName)) {
        this.throwFieldError(objectDefinition, `has checkCanRead set to true and with fieldName set to '${fieldName}' but '${referencedObject.name}' does not have a this field`);
      }
      const field = referencedObject.fields.get(fieldName);
      if (field.type.kind !== 'bool') {
        this.throwFieldError(objectDefinition, `has checkCanRead set to true and with fieldName set to '${fieldName}' but '${fieldName}' return type is not bool`);
      }
    }
  }

  /**
   * Validate filter conditions
   * Original code: complex nested validation in validate method
   */
  private validateFilterConditions(schema: any, objectDefinition: any, usedArguments: Set<string>): void {
    const referencedObject = schema.objectDef(this.type);
    const validateFieldExists = (condition: any) => {
      const field = referencedObject.fields.get(condition.left);
      if (!field) {
        this.throwFilterError(objectDefinition, `refers to field '${condition.left}', which does not exist on object '${this.type.name}'`);
      }
      return field;
    };
    const validateArgumentOrParentField = (condition: any) => {
      if (hasTypeProperty(condition.right) && condition.right.type === 'field') {
        const argument = findItemByName(this.args, condition.right.ref);
        if (!argument) {
          this.throwFieldError(objectDefinition, `uses argument '${condition.right.ref}' in its filter but does not declare it`);
        }
        usedArguments.add(condition.right.ref);
        return argument;
      }
      if (hasTypeProperty(condition.right) && condition.right.type === 'parent') {
        const parentField = objectDefinition.fields.get(condition.right.ref);
        if (!parentField) {
          this.throwFieldError(objectDefinition, `refers to unknown parent field '${condition.right.ref}' in its filter`);
        }
        return parentField;
      }
      throw new CustomError(oneLine`
        Filter condition of '${this.name}' in object type ${objectDefinition.name} expects an argument or parent field,
        but is a ${typeof condition.right} with the value '${condition.right}'`);
    };
    const validateCondition = (condition: any): void => {
      if (!condition) return;
      switch (condition.type) {
        case 'binary':
          this.validateBinaryCondition(condition, objectDefinition, schema, validateFieldExists, validateArgumentOrParentField);
          break;
        case 'in':
          this.validateInCondition(condition, objectDefinition, schema, validateFieldExists, validateArgumentOrParentField);
          break;
        case 'or':
        case 'and':
          condition.expressions.forEach(validateCondition);
          break;
      }
    };
    validateCondition(this.filter);
  }

  /**
   * Validate binary filter conditions
   * Original code: case 'binary' in validateCondition function
   */
  private validateBinaryCondition(condition: any, objectDefinition: any, schema: any, validateFieldExists: Fn, validateArgumentOrParentField: Function): void {
    const leftField = validateFieldExists(condition);
    if (['list', 'map', 'object', 'objects'].includes(leftField.type.kind)) {
      throw new CustomError(oneLine`
        Cannot filter on field '${condition.left}' in object type '${objectDefinition.name}'. Filter on type
        '${leftField.type.kind}' is not supported.`);
    }
    if ((leftField.type.kind === 'date' || leftField.type.kind === 'datetime') && (condition.op === '=' || condition.op === '<>') && condition.right !== null) {
      throw new CustomError(oneLine`
        Cannot filter on field '${condition.left}' in object type '${objectDefinition.name}'. '${condition.op}' filter
        on type '${leftField.type.kind}' is not is not supported for non-null values.`);
    }
    if (isComputedField(leftField)) {
      throw new CustomError(oneLine`
        Cannot filter on field '${condition.left}' in object type '${objectDefinition.name}'. Filters on computed fields
        are not supported since filter conditions get translated directly to SQL queries and there are no
        column in the database corresponding directly to the computed field.`);
    }
    if (hasTypeProperty(condition.right)) {
      const rightField = validateArgumentOrParentField(condition);
      if (!areTypesCompatible(rightField.type, leftField.type) && !schema.legacyConfig.isTypeConversionExempted('filterArg', rightField.type.kind, leftField.type.kind, `${objectDefinition.name}.${this.name}.${condition.left}`)) {
        throw new CustomError(oneLine`
          Cannot filter on field '${condition.left}' in object type '${objectDefinition.name}' due to inconsistent type.
          LHS is a '${leftField.type.kind}' but RHS is a '${rightField.type.kind}'.
          In some cases, you may need to make an exemption for this in legacyConfigDef in the schema.
          Ask in #a-web-platform for help and see https://www.notion.so/figma/Livegraph-Support-Runbook-127b8b1f837c8055bb59d402ed958c2a?pvs=4#146b8b1f837c8082b07edd75a0b2177b.
        `);
      }
    } else if (condition.right !== null) {
      this.validateLiteralValue(condition, leftField, objectDefinition, schema);
    } else if (['>', '<', '>=', '<='].includes(condition.op)) {
      throw new CustomError(oneLine`
        Cannot filter on field '${condition.left}' in object type '${objectDefinition.name}'. '${condition.op}' filter
        on type '${leftField.type.kind}' is not is not supported for null values.`);
    }
  }

  /**
   * Validate literal values in filter conditions
   * Original code: nested switch statement in binary condition validation
   */
  private validateLiteralValue(condition: any, leftField: any, objectDefinition: any, schema: any): void {
    switch (leftField.type.kind) {
      case 'int':
      case 'float':
        if (typeof condition.right !== 'number') {
          throw new CustomError(oneLine`
            Cannot filter on field '${condition.left}' in object type '${objectDefinition.name}' due to inconsistent type.
            LHS is a number but RHS is a '${typeof condition.right}'`);
        }
        break;
      case 'string':
      case 'bigint':
      case 'uuid':
        if (typeof condition.right !== 'string') {
          throw new CustomError(oneLine`
            Cannot filter on field '${condition.left}' in object type '${objectDefinition.name}' due to inconsistent type.
            LHS is a string but RHS is a '${typeof condition.right}'`);
        }
        break;
      case 'enum':
        if (typeof condition.right !== 'string') {
          throw new CustomError(oneLine`
            Cannot filter on field '${condition.left}' in object type '${objectDefinition.name}' due to inconsistent type.
            LHS is a string but RHS is a '${typeof condition.right}'`);
        }
        const enumDef = schema.enumDef(leftField.type);
        if (!enumDef.isValidValue(condition.right)) {
          throw new CustomError(oneLine`
            Cannot filter on field '${condition.left}' in object type '${objectDefinition.name}' due to invalid enum value '${condition.right}'.
            Expecting one of ${enumDef.values.join(', ')}`);
        }
        break;
      case 'bool':
        if (typeof condition.right !== 'boolean') {
          throw new CustomError(oneLine`
            Cannot filter on field '${condition.left}' in object type '${objectDefinition.name}' due to inconsistent type.
            LHS is a boolean but RHS is a '${typeof condition.right}'`);
        }
        break;
      case 'datetime':
      case 'date':
        if (!(condition.right instanceof Date)) {
          throw new CustomError(oneLine`
            Cannot filter on field '${condition.left}' in object type '${objectDefinition.name}' due to inconsistent type.
            LHS is a date but RHS is a '${typeof condition.right}'`);
        }
        break;
      default:
        throw new CustomError(oneLine`
          Filter on field '${condition.left}' in object type '${objectDefinition.name}' has unexpected type ${leftField.type.kind}`);
    }
  }

  /**
   * Validate 'in' filter conditions
   * Original code: case 'in' in validateCondition function
   */
  private validateInCondition(condition: any, objectDefinition: any, schema: any, validateFieldExists: Fn, validateArgumentOrParentField: Function): void {
    const leftField = validateFieldExists(condition);
    if (['list', 'map', 'object', 'objects', 'date', 'datetime'].includes(leftField.type.kind)) {
      throw new CustomError(oneLine`
        Cannot filter on field '${condition.left}' in object type '${objectDefinition.name}'. Filter on type
        ${leftField.type.kind} is not supported.`);
    }
    if (hasTypeProperty(condition.right)) {
      const rightField = validateArgumentOrParentField(condition);
      if (rightField.type.kind !== 'list') {
        throw new CustomError(oneLine`
          Cannot filter on field '${condition.left}' in object type '${objectDefinition.name}' because
          argument ${condition.right.ref} has invalid type ${rightField.type.kind}`);
      }
      if (!areTypesCompatible(rightField.type.ofType, leftField.type)) {
        throw new CustomError(oneLine`
          Cannot filter on field '${condition.left}' in object type '${objectDefinition.name}' due to inconsistent type.
          LHS is a '${leftField.type.kind}' but RHS is a list of '${rightField.type.ofType.kind}'`);
      }
    } else if (condition.right.length > 0) {
      this.validateInLiteralValues(condition, leftField, objectDefinition, schema);
    }
  }

  /**
   * Validate literal values in 'in' filter conditions
   * Original code: nested validation in 'in' condition
   */
  private validateInLiteralValues(condition: any, leftField: any, objectDefinition: any, schema: any): void {
    switch (leftField.type.kind) {
      case 'int':
      case 'float':
        if (typeof condition.right[0] !== 'number') {
          throw new CustomError(oneLine`
            Cannot filter on field '${condition.left}' in object type '${objectDefinition.name}' due to inconsistent type.
            LHS is a number but RHS is a list of ${typeof condition.right[0]}`);
        }
        break;
      case 'string':
        if (typeof condition.right[0] !== 'string') {
          throw new CustomError(oneLine`
            Cannot filter on field '${condition.left}' in object type '${objectDefinition.name}' due to inconsistent type.
            LHS is a string but RHS is a list of ${typeof condition.right[0]}`);
        }
        break;
      case 'enum':
        if (typeof condition.right[0] !== 'string') {
          throw new CustomError(oneLine`
            Cannot filter on field '${condition.left}' in object type '${objectDefinition.name}' due to inconsistent type.
            LHS is a string but RHS is a list of ${typeof condition.right[0]}`);
        }
        const enumDef = schema.enumDef(leftField.type);
        for (const value of condition.right) {
          if (!enumDef.isValidValue(value)) {
            throw new CustomError(oneLine`
              Cannot filter on field '${condition.left}' in object type '${objectDefinition.name}' due to invalid enum value '${value}'.
              Expecting one of ${enumDef.values.join(', ')}`);
          }
        }
        break;
      case 'bool':
        if (typeof condition.right[0] !== 'boolean') {
          throw new CustomError(oneLine`
            Cannot filter on field '${condition.left}' in object type '${objectDefinition.name}' due to inconsistent type.
            LHS is a boolean but RHS is a list of ${typeof condition.right[0]}`);
        }
        break;
      default:
        throw new CustomError(oneLine`
          Filter on field '${condition.left}' in object type '${objectDefinition.name}' has unexpected type ${leftField.type.kind}`);
    }
  }

  /**
   * Validate resolver configuration
   * Original code: resolver validation in validate method
   */
  private validateResolverConfiguration(schema: any, objectDefinition: any, usedArguments: Set<string>): void {
    if (this.resolver?.type === 'HTTP') {
      this.validateHttpResolver(this.resolver, objectDefinition, usedArguments);
    }
    if (this.resolver?.type === 'Redis') {
      const isSpecialField = SPECIAL_OBJECT_FIELDS.has(objectDefinition.name) && SPECIAL_OBJECT_FIELDS.get(objectDefinition.name)!.includes(this.name);
      if (!this.nullable && !isSpecialField) {
        this.throwFieldError(objectDefinition, 'uses redis resolver and is non-nullable. Object fields powered by Redis resolvers must be nullable.');
      }
      this.validateRedisResolver(this.resolver, objectDefinition, usedArguments);
    }
    if (this.resolver?.type === 'Statsig') {
      this.validateStatsigResolver(this.resolver, objectDefinition, usedArguments);
    }
  }

  /**
   * Validate pagination configuration
   * Original code: pagination validation in validate method
   */
  private validatePaginationConfiguration(schema: any, objectDefinition: any, usedArguments: Set<string>): void {
    if (!this.pagination) return;
    const objectFields = schema.objects.get(this.type.name)?.fields;
    if (!objectFields) {
      this.throwFieldError(objectDefinition, '\'s object fields are not retrievable -- this shouldn\'t happen');
      return;
    }
    this.validatePaginationConfig(this.pagination, objectDefinition, usedArguments, objectFields);
  }

  /**
   * Validate that all declared arguments are used
   * Original code: final validation loop in validate method
   */
  private validateAllArgumentsUsed(objectDefinition: any, usedArguments: Set<string>): void {
    for (const argument of this.args) {
      if (!usedArguments.has(argument.name) && argument.name !== 'initialPageSize') {
        this.throwFieldError(objectDefinition, `declares argument '${argument.name}' but does not use it`);
      }
    }
  }

  /**
   * Validate HTTP resolver configuration
   * Original method: validateHttpResolver
   */
  validateHttpResolver(resolverConfig: Record<string, any>, objectDefinition: any, usedArguments: Set<string>): void {
    if (!resolverConfig.queryParams.userId || !hasTypeProperty(resolverConfig.queryParams.userId)) {
      this.throwFieldError(objectDefinition, `uses resolver and it doesn't define userId in its queryParams attribute.
        This is required. Please choose one of the following options and add to queryParams:
        1. If current userId comes from viewArgs, e.g. session('userId'):
           queryParams: { userId: fieldArg('userId') }
           and add an field arg to ${this.name} object field. When using it in views, fill the arg with session('userId').
        2. If current userId can come from parent object:
           queryParams: { userId: parent('the_user_id_field_name') }
        `);
    }
    const queryParams = Object.values(resolverConfig.queryParams || {}) as Record<string, any>[];
    for (const param of queryParams) {
      if (param && hasTypeProperty(param)) {
        if (param.type === 'field') {
          if (!findItemByName(this.args, param.ref)) {
            this.throwFieldError(objectDefinition, `uses argument ${param.ref}' in its resolver config but does not declare it`);
          }
          usedArguments.add(param.ref);
        } else if (param.type === 'parent') {
          if (!objectDefinition.fields.get(param.ref)) {
            this.throwFieldError(objectDefinition, `refers to unknown parent field '${param.ref}' in its resolver config`);
          }
        }
      }
    }
    if (resolverConfig.realtimePolicy.type === 'RedisPubsub') {
      for (const postfix of resolverConfig.realtimePolicy.channelPostfix || []) {
        if (hasTypeProperty(postfix)) {
          if (postfix.type === 'field') {
            if (!findItemByName(this.args, postfix.ref)) {
              this.throwFieldError(objectDefinition, `uses argument '${postfix.ref}' in its resolver config but does not declare it`);
            }
            usedArguments.add(postfix.ref);
          } else if (postfix.type === 'parent') {
            if (!objectDefinition.fields.get(postfix.ref)) {
              this.throwFieldError(objectDefinition, `refers to unknown parent field '${postfix.ref}' in its resolver config`);
            }
          }
        }
      }
    }
  }

  /**
   * Validate Redis resolver configuration
   * Original method: validateRedisResolver
   */
  validateRedisResolver(resolverConfig: any, objectDefinition: any, usedArguments: Set<string>): void {
    if (resolverConfig.keyPrefix.length === 0) {
      this.throwFieldError(objectDefinition, 'No key postfix defined in redis resolver config');
    }
    for (const postfix of resolverConfig.keyPostfix) {
      if (hasTypeProperty(postfix)) {
        if (postfix.type === 'field') {
          if (!findItemByName(this.args, postfix.ref)) {
            this.throwFieldError(objectDefinition, `uses argument '${postfix.ref}' in its resolver config but does not declare it`);
          }
          usedArguments.add(postfix.ref);
        } else if (postfix.type === 'parent') {
          if (!objectDefinition.fields.get(postfix.ref)) {
            this.throwFieldError(objectDefinition, `refers to unknown parent field '${postfix.ref}' in its resolver config`);
          }
        }
      }
    }
  }

  /**
   * Validate Statsig resolver configuration
   * Original method: validateStatsigResolver
   */
  validateStatsigResolver(resolverConfig: any, objectDefinition: any, usedArguments: Set<string>): void {
    const ids = Object.entries(resolverConfig.statsigUser.customIDs ?? {}) as [string, any][];
    for (const [, customId] of ids) {
      if (hasTypeProperty(customId) && customId.type === 'field') {
        if (!findItemByName(this.args, customId.ref)) {
          this.throwFieldError(objectDefinition, `uses argument '${customId.ref}' in its resolver config but does not declare it`);
        }
        usedArguments.add(customId.ref);
      }
    }
  }

  /**
   * Validate pagination configuration details
   * Original method: validatePaginationConfig
   */
  validatePaginationConfig(paginationConfig: any, objectDefinition: any, usedArguments: Set<string>, objectFields: Map<string, any>): void {
    if (paginationConfig.firstPageSize && hasTypeProperty(paginationConfig.firstPageSize)) {
      const argument = findItemByName(this.args, paginationConfig.firstPageSize.ref);
      if (!argument) {
        this.throwFieldError(objectDefinition, `uses argument '${paginationConfig.firstPageSize.ref}' in its pagination config's firstPageSize but does not declare it`);
        return;
      }
      if (argument.type.kind !== 'int') {
        this.throwFieldError(objectDefinition, `uses argument '${paginationConfig.firstPageSize.ref}' in its pagination config's firstPageSize but it's not int type. It's ${argument.type.kind}`);
        return;
      }
      usedArguments.add(paginationConfig.firstPageSize.ref);
    }
    if (hasCursorProperties(paginationConfig)) {
      this.validateCursorPaginationConfig(paginationConfig, objectDefinition, usedArguments, objectFields);
    }
  }

  /**
   * Validate cursor pagination configuration
   * Original code: cursor pagination validation in validatePaginationConfig
   */
  private validateCursorPaginationConfig(paginationConfig: any, objectDefinition: any, usedArguments: Set<string>, objectFields: Map<string, any>): void {
    const objectTypeName = this.type.name;
    for (const [cursorName, fieldNames] of Object.entries(paginationConfig.cursorColumnSet)) {
      for (const fieldName of fieldNames) {
        const field = objectFields.get(fieldName);
        if (!field) {
          this.throwFieldError(objectDefinition, `uses '${cursorName}' -> '${fieldName}' in its pagination config's cursorColumnSet but it does not refer to valid field in ${this.type.name}`);
          return;
        }
        const isFileNameField = objectTypeName === 'File' && fieldName === 'name';
        const isDateTimeField = isScalarField(field) && field.type.kind === 'datetime';
        const isIntField = isScalarField(field) && (field.type.kind === 'int' || field.type.kind === 'bigint');
        if (!isFileNameField && !isDateTimeField && !isIntField) {
          this.throwFieldError(objectDefinition, `uses '${cursorName}' -> '${fieldName}' in its pagination config's cursorColumnSet but it is neither a datetime field in the '${this.type.name}' object or the 'File' object's name field or an int field`);
          return;
        }
      }
    }
    this.validateSelectedCursorColumn(paginationConfig, objectDefinition, usedArguments);
    this.validateSortOrder(paginationConfig, objectDefinition, usedArguments);
    this.validateIdColumn(paginationConfig, objectDefinition, objectFields);
  }

  /**
   * Validate selected cursor column configuration
   * Original code: selectedCursorColumn validation in cursor pagination
   */
  private validateSelectedCursorColumn(paginationConfig: any, objectDefinition: any, usedArguments: Set<string>): void {
    if (hasTypeProperty(paginationConfig.selectedCursorColumn)) {
      const argument = findItemByName(this.args, paginationConfig.selectedCursorColumn.ref);
      if (!argument) {
        this.throwFieldError(objectDefinition, `uses argument '${paginationConfig.selectedCursorColumn.ref}' in its pagination config's selectedCursorColumn but does not declare it`);
        return;
      }
      if (argument.type.kind !== 'string') {
        this.throwFieldError(objectDefinition, `uses argument '${paginationConfig.selectedCursorColumn.ref}' in its pagination config's selectedCursorColumn but it's not a string type. It's ${argument.type.kind}`);
        return;
      }
      usedArguments.add(paginationConfig.selectedCursorColumn.ref);
    } else if (!Object.keys(paginationConfig.cursorColumnSet).includes(paginationConfig.selectedCursorColumn)) {
      this.throwFieldError(objectDefinition, `uses '${paginationConfig.selectedCursorColumn}' in its pagination config's selectedCursorColumn but it does not refer to valid field in ${this.type.name}'s cursorColumnSet`);
    }
  }

  /**
   * Validate sort order configuration
   * Original code: sortOrder validation in cursor pagination
   */
  private validateSortOrder(paginationConfig: any, objectDefinition: any, usedArguments: Set<string>): void {
    if (hasTypeProperty(paginationConfig.sortOrder)) {
      const argument = findItemByName(this.args, paginationConfig.sortOrder.ref);
      if (!argument) {
        this.throwFieldError(objectDefinition, `uses argument '${paginationConfig.sortOrder.ref}' in its pagination sort order config but does not declare it`);
      }
      if (argument.type.kind !== 'string') {
        this.throwFieldError(objectDefinition, `uses argument '${paginationConfig.sortOrder.ref}' in its pagination sort order config but it's not string type. It's ${argument.type.kind}`);
        return;
      }
      usedArguments.add(paginationConfig.sortOrder.ref);
    }
  }

  /**
   * Validate ID column configuration
   * Original code: idColumn validation in cursor pagination
   */
  private validateIdColumn(paginationConfig: any, objectDefinition: any, objectFields: Map<string, any>): void {
    if (paginationConfig.idColumn) {
      const field = objectFields.get(paginationConfig.idColumn);
      if (!field) {
        this.throwFieldError(objectDefinition, `uses '${paginationConfig.idColumn}' in its pagination config's idColumn but it does not refer to valid field in ${this.type.name}`);
        return;
      }
      if (!isScalarField(field)) {
        this.throwFieldError(objectDefinition, `uses '${paginationConfig.idColumn}' in its pagination config's idColumn, but it is not a scalar field.`);
      }
    }
  }

  /**
   * Throw a filter-specific error
   * Original method: throwFilterError
   */
  throwFilterError(objectDefinition: any, message: string): never {
    throw new CustomError(`filter condition of '${this.name}' of type '${this.type.name}' on '${objectDefinition.name}' ${message}`);
  }

  /**
   * Throw a field-specific error
   * Original method: throwFieldError
   */
  throwFieldError(objectDefinition: any, message: string): never {
    throw new CustomError(`field '${this.name}' of type '${this.type.name}' on '${objectDefinition.name}' ${message}`);
  }

  /**
   * Check if the field is resolvable
   * Original method: isResolvable
   */
  isResolvable(objectDefinition: any): boolean {
    return !!(this.filter || this.resolver || this.embedded && objectDefinition.name !== 'root');
  }
}

/**
 * Check if a field definition is an object field
 * Original function: $$m2
 */
export function isObjectField(fieldDefinition: any): boolean {
  return fieldDefinition.fieldType === 'object';
}

/**
 * Parse filter definition into structured format
 * Original function: $$h1
 */
export function parseFilterDefinition(filterConfig: any): any {
  if ('or' in filterConfig) {
    return {
      type: 'or',
      expressions: filterConfig.or.map(parseFilterDefinition)
    };
  }
  if ('and' in filterConfig) {
    return {
      type: 'and',
      expressions: filterConfig.and.map(parseFilterDefinition)
    };
  }
  const [left, operator, right] = filterConfig;
  return operator === 'in' ? {
    type: 'in',
    left,
    right
  } : {
    type: 'binary',
    left,
    op: operator,
    right
  };
}

// Legacy exports for backward compatibility
// Original exports: H1, dn, pO
export const H1 = ObjectFieldDefinition;
export const dn = parseFilterDefinition;
export const pO = isObjectField;