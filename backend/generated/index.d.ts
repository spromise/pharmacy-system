
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Medicine
 * 
 */
export type Medicine = $Result.DefaultSelection<Prisma.$MedicinePayload>
/**
 * Model InventoryCheck
 * 
 */
export type InventoryCheck = $Result.DefaultSelection<Prisma.$InventoryCheckPayload>
/**
 * Model InboundRecord
 * 
 */
export type InboundRecord = $Result.DefaultSelection<Prisma.$InboundRecordPayload>
/**
 * Model OutboundRecord
 * 
 */
export type OutboundRecord = $Result.DefaultSelection<Prisma.$OutboundRecordPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Medicines
 * const medicines = await prisma.medicine.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Medicines
   * const medicines = await prisma.medicine.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.medicine`: Exposes CRUD operations for the **Medicine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicines
    * const medicines = await prisma.medicine.findMany()
    * ```
    */
  get medicine(): Prisma.MedicineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryCheck`: Exposes CRUD operations for the **InventoryCheck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryChecks
    * const inventoryChecks = await prisma.inventoryCheck.findMany()
    * ```
    */
  get inventoryCheck(): Prisma.InventoryCheckDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inboundRecord`: Exposes CRUD operations for the **InboundRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InboundRecords
    * const inboundRecords = await prisma.inboundRecord.findMany()
    * ```
    */
  get inboundRecord(): Prisma.InboundRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outboundRecord`: Exposes CRUD operations for the **OutboundRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutboundRecords
    * const outboundRecords = await prisma.outboundRecord.findMany()
    * ```
    */
  get outboundRecord(): Prisma.OutboundRecordDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Medicine: 'Medicine',
    InventoryCheck: 'InventoryCheck',
    InboundRecord: 'InboundRecord',
    OutboundRecord: 'OutboundRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "medicine" | "inventoryCheck" | "inboundRecord" | "outboundRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Medicine: {
        payload: Prisma.$MedicinePayload<ExtArgs>
        fields: Prisma.MedicineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findFirst: {
            args: Prisma.MedicineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findMany: {
            args: Prisma.MedicineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          create: {
            args: Prisma.MedicineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          createMany: {
            args: Prisma.MedicineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MedicineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          update: {
            args: Prisma.MedicineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          deleteMany: {
            args: Prisma.MedicineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          aggregate: {
            args: Prisma.MedicineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicine>
          }
          groupBy: {
            args: Prisma.MedicineGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicineGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicineCountArgs<ExtArgs>
            result: $Utils.Optional<MedicineCountAggregateOutputType> | number
          }
        }
      }
      InventoryCheck: {
        payload: Prisma.$InventoryCheckPayload<ExtArgs>
        fields: Prisma.InventoryCheckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryCheckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCheckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryCheckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCheckPayload>
          }
          findFirst: {
            args: Prisma.InventoryCheckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCheckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryCheckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCheckPayload>
          }
          findMany: {
            args: Prisma.InventoryCheckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCheckPayload>[]
          }
          create: {
            args: Prisma.InventoryCheckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCheckPayload>
          }
          createMany: {
            args: Prisma.InventoryCheckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryCheckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCheckPayload>
          }
          update: {
            args: Prisma.InventoryCheckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCheckPayload>
          }
          deleteMany: {
            args: Prisma.InventoryCheckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryCheckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryCheckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryCheckPayload>
          }
          aggregate: {
            args: Prisma.InventoryCheckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryCheck>
          }
          groupBy: {
            args: Prisma.InventoryCheckGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryCheckGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCheckCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCheckCountAggregateOutputType> | number
          }
        }
      }
      InboundRecord: {
        payload: Prisma.$InboundRecordPayload<ExtArgs>
        fields: Prisma.InboundRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InboundRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InboundRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundRecordPayload>
          }
          findFirst: {
            args: Prisma.InboundRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InboundRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundRecordPayload>
          }
          findMany: {
            args: Prisma.InboundRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundRecordPayload>[]
          }
          create: {
            args: Prisma.InboundRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundRecordPayload>
          }
          createMany: {
            args: Prisma.InboundRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InboundRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundRecordPayload>
          }
          update: {
            args: Prisma.InboundRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundRecordPayload>
          }
          deleteMany: {
            args: Prisma.InboundRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InboundRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InboundRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundRecordPayload>
          }
          aggregate: {
            args: Prisma.InboundRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInboundRecord>
          }
          groupBy: {
            args: Prisma.InboundRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<InboundRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.InboundRecordCountArgs<ExtArgs>
            result: $Utils.Optional<InboundRecordCountAggregateOutputType> | number
          }
        }
      }
      OutboundRecord: {
        payload: Prisma.$OutboundRecordPayload<ExtArgs>
        fields: Prisma.OutboundRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutboundRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutboundRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundRecordPayload>
          }
          findFirst: {
            args: Prisma.OutboundRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutboundRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundRecordPayload>
          }
          findMany: {
            args: Prisma.OutboundRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundRecordPayload>[]
          }
          create: {
            args: Prisma.OutboundRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundRecordPayload>
          }
          createMany: {
            args: Prisma.OutboundRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OutboundRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundRecordPayload>
          }
          update: {
            args: Prisma.OutboundRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundRecordPayload>
          }
          deleteMany: {
            args: Prisma.OutboundRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutboundRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OutboundRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundRecordPayload>
          }
          aggregate: {
            args: Prisma.OutboundRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutboundRecord>
          }
          groupBy: {
            args: Prisma.OutboundRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutboundRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutboundRecordCountArgs<ExtArgs>
            result: $Utils.Optional<OutboundRecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    medicine?: MedicineOmit
    inventoryCheck?: InventoryCheckOmit
    inboundRecord?: InboundRecordOmit
    outboundRecord?: OutboundRecordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MedicineCountOutputType
   */

  export type MedicineCountOutputType = {
    inventoryChecks: number
    inboundRecords: number
    outboundRecords: number
  }

  export type MedicineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryChecks?: boolean | MedicineCountOutputTypeCountInventoryChecksArgs
    inboundRecords?: boolean | MedicineCountOutputTypeCountInboundRecordsArgs
    outboundRecords?: boolean | MedicineCountOutputTypeCountOutboundRecordsArgs
  }

  // Custom InputTypes
  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineCountOutputType
     */
    select?: MedicineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeCountInventoryChecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryCheckWhereInput
  }

  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeCountInboundRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InboundRecordWhereInput
  }

  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeCountOutboundRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutboundRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Medicine
   */

  export type AggregateMedicine = {
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  export type MedicineAvgAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
  }

  export type MedicineSumAggregateOutputType = {
    id: number | null
    price: number | null
    stock: number | null
  }

  export type MedicineMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    stock: number | null
  }

  export type MedicineMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    stock: number | null
  }

  export type MedicineCountAggregateOutputType = {
    id: number
    name: number
    price: number
    stock: number
    _all: number
  }


  export type MedicineAvgAggregateInputType = {
    id?: true
    price?: true
    stock?: true
  }

  export type MedicineSumAggregateInputType = {
    id?: true
    price?: true
    stock?: true
  }

  export type MedicineMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    stock?: true
  }

  export type MedicineMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    stock?: true
  }

  export type MedicineCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    stock?: true
    _all?: true
  }

  export type MedicineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicine to aggregate.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicines
    **/
    _count?: true | MedicineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineMaxAggregateInputType
  }

  export type GetMedicineAggregateType<T extends MedicineAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicine[P]>
      : GetScalarType<T[P], AggregateMedicine[P]>
  }




  export type MedicineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineWhereInput
    orderBy?: MedicineOrderByWithAggregationInput | MedicineOrderByWithAggregationInput[]
    by: MedicineScalarFieldEnum[] | MedicineScalarFieldEnum
    having?: MedicineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineCountAggregateInputType | true
    _avg?: MedicineAvgAggregateInputType
    _sum?: MedicineSumAggregateInputType
    _min?: MedicineMinAggregateInputType
    _max?: MedicineMaxAggregateInputType
  }

  export type MedicineGroupByOutputType = {
    id: number
    name: string
    price: number
    stock: number
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  type GetMedicineGroupByPayload<T extends MedicineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineGroupByOutputType[P]>
        }
      >
    >


  export type MedicineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    stock?: boolean
    inventoryChecks?: boolean | Medicine$inventoryChecksArgs<ExtArgs>
    inboundRecords?: boolean | Medicine$inboundRecordsArgs<ExtArgs>
    outboundRecords?: boolean | Medicine$outboundRecordsArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicine"]>



  export type MedicineSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    stock?: boolean
  }

  export type MedicineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "stock", ExtArgs["result"]["medicine"]>
  export type MedicineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryChecks?: boolean | Medicine$inventoryChecksArgs<ExtArgs>
    inboundRecords?: boolean | Medicine$inboundRecordsArgs<ExtArgs>
    outboundRecords?: boolean | Medicine$outboundRecordsArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MedicinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medicine"
    objects: {
      inventoryChecks: Prisma.$InventoryCheckPayload<ExtArgs>[]
      inboundRecords: Prisma.$InboundRecordPayload<ExtArgs>[]
      outboundRecords: Prisma.$OutboundRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      stock: number
    }, ExtArgs["result"]["medicine"]>
    composites: {}
  }

  type MedicineGetPayload<S extends boolean | null | undefined | MedicineDefaultArgs> = $Result.GetResult<Prisma.$MedicinePayload, S>

  type MedicineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicineCountAggregateInputType | true
    }

  export interface MedicineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medicine'], meta: { name: 'Medicine' } }
    /**
     * Find zero or one Medicine that matches the filter.
     * @param {MedicineFindUniqueArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicineFindUniqueArgs>(args: SelectSubset<T, MedicineFindUniqueArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medicine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicineFindUniqueOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicineFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicineFindFirstArgs>(args?: SelectSubset<T, MedicineFindFirstArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicineFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicineFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicines
     * const medicines = await prisma.medicine.findMany()
     * 
     * // Get first 10 Medicines
     * const medicines = await prisma.medicine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicineWithIdOnly = await prisma.medicine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicineFindManyArgs>(args?: SelectSubset<T, MedicineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medicine.
     * @param {MedicineCreateArgs} args - Arguments to create a Medicine.
     * @example
     * // Create one Medicine
     * const Medicine = await prisma.medicine.create({
     *   data: {
     *     // ... data to create a Medicine
     *   }
     * })
     * 
     */
    create<T extends MedicineCreateArgs>(args: SelectSubset<T, MedicineCreateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicines.
     * @param {MedicineCreateManyArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicineCreateManyArgs>(args?: SelectSubset<T, MedicineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Medicine.
     * @param {MedicineDeleteArgs} args - Arguments to delete one Medicine.
     * @example
     * // Delete one Medicine
     * const Medicine = await prisma.medicine.delete({
     *   where: {
     *     // ... filter to delete one Medicine
     *   }
     * })
     * 
     */
    delete<T extends MedicineDeleteArgs>(args: SelectSubset<T, MedicineDeleteArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medicine.
     * @param {MedicineUpdateArgs} args - Arguments to update one Medicine.
     * @example
     * // Update one Medicine
     * const medicine = await prisma.medicine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicineUpdateArgs>(args: SelectSubset<T, MedicineUpdateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicines.
     * @param {MedicineDeleteManyArgs} args - Arguments to filter Medicines to delete.
     * @example
     * // Delete a few Medicines
     * const { count } = await prisma.medicine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicineDeleteManyArgs>(args?: SelectSubset<T, MedicineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicineUpdateManyArgs>(args: SelectSubset<T, MedicineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medicine.
     * @param {MedicineUpsertArgs} args - Arguments to update or create a Medicine.
     * @example
     * // Update or create a Medicine
     * const medicine = await prisma.medicine.upsert({
     *   create: {
     *     // ... data to create a Medicine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicine we want to update
     *   }
     * })
     */
    upsert<T extends MedicineUpsertArgs>(args: SelectSubset<T, MedicineUpsertArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineCountArgs} args - Arguments to filter Medicines to count.
     * @example
     * // Count the number of Medicines
     * const count = await prisma.medicine.count({
     *   where: {
     *     // ... the filter for the Medicines we want to count
     *   }
     * })
    **/
    count<T extends MedicineCountArgs>(
      args?: Subset<T, MedicineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicineAggregateArgs>(args: Subset<T, MedicineAggregateArgs>): Prisma.PrismaPromise<GetMedicineAggregateType<T>>

    /**
     * Group by Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicineGroupByArgs['orderBy'] }
        : { orderBy?: MedicineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medicine model
   */
  readonly fields: MedicineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medicine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventoryChecks<T extends Medicine$inventoryChecksArgs<ExtArgs> = {}>(args?: Subset<T, Medicine$inventoryChecksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryCheckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inboundRecords<T extends Medicine$inboundRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Medicine$inboundRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboundRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outboundRecords<T extends Medicine$outboundRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Medicine$outboundRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutboundRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medicine model
   */
  interface MedicineFieldRefs {
    readonly id: FieldRef<"Medicine", 'Int'>
    readonly name: FieldRef<"Medicine", 'String'>
    readonly price: FieldRef<"Medicine", 'Float'>
    readonly stock: FieldRef<"Medicine", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Medicine findUnique
   */
  export type MedicineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findUniqueOrThrow
   */
  export type MedicineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findFirst
   */
  export type MedicineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findFirstOrThrow
   */
  export type MedicineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findMany
   */
  export type MedicineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicines to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine create
   */
  export type MedicineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The data needed to create a Medicine.
     */
    data: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
  }

  /**
   * Medicine createMany
   */
  export type MedicineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicine update
   */
  export type MedicineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The data needed to update a Medicine.
     */
    data: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
    /**
     * Choose, which Medicine to update.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine updateMany
   */
  export type MedicineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicines.
     */
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyInput>
    /**
     * Filter which Medicines to update
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to update.
     */
    limit?: number
  }

  /**
   * Medicine upsert
   */
  export type MedicineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The filter to search for the Medicine to update in case it exists.
     */
    where: MedicineWhereUniqueInput
    /**
     * In case the Medicine found by the `where` argument doesn't exist, create a new Medicine with this data.
     */
    create: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
    /**
     * In case the Medicine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
  }

  /**
   * Medicine delete
   */
  export type MedicineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter which Medicine to delete.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine deleteMany
   */
  export type MedicineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicines to delete
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to delete.
     */
    limit?: number
  }

  /**
   * Medicine.inventoryChecks
   */
  export type Medicine$inventoryChecksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCheck
     */
    select?: InventoryCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryCheck
     */
    omit?: InventoryCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCheckInclude<ExtArgs> | null
    where?: InventoryCheckWhereInput
    orderBy?: InventoryCheckOrderByWithRelationInput | InventoryCheckOrderByWithRelationInput[]
    cursor?: InventoryCheckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryCheckScalarFieldEnum | InventoryCheckScalarFieldEnum[]
  }

  /**
   * Medicine.inboundRecords
   */
  export type Medicine$inboundRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundRecord
     */
    select?: InboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundRecord
     */
    omit?: InboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundRecordInclude<ExtArgs> | null
    where?: InboundRecordWhereInput
    orderBy?: InboundRecordOrderByWithRelationInput | InboundRecordOrderByWithRelationInput[]
    cursor?: InboundRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InboundRecordScalarFieldEnum | InboundRecordScalarFieldEnum[]
  }

  /**
   * Medicine.outboundRecords
   */
  export type Medicine$outboundRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundRecord
     */
    select?: OutboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundRecord
     */
    omit?: OutboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundRecordInclude<ExtArgs> | null
    where?: OutboundRecordWhereInput
    orderBy?: OutboundRecordOrderByWithRelationInput | OutboundRecordOrderByWithRelationInput[]
    cursor?: OutboundRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutboundRecordScalarFieldEnum | OutboundRecordScalarFieldEnum[]
  }

  /**
   * Medicine without action
   */
  export type MedicineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
  }


  /**
   * Model InventoryCheck
   */

  export type AggregateInventoryCheck = {
    _count: InventoryCheckCountAggregateOutputType | null
    _avg: InventoryCheckAvgAggregateOutputType | null
    _sum: InventoryCheckSumAggregateOutputType | null
    _min: InventoryCheckMinAggregateOutputType | null
    _max: InventoryCheckMaxAggregateOutputType | null
  }

  export type InventoryCheckAvgAggregateOutputType = {
    id: number | null
    medicineId: number | null
    checkedStock: number | null
  }

  export type InventoryCheckSumAggregateOutputType = {
    id: number | null
    medicineId: number | null
    checkedStock: number | null
  }

  export type InventoryCheckMinAggregateOutputType = {
    id: number | null
    medicineId: number | null
    checkedStock: number | null
    checkDate: Date | null
  }

  export type InventoryCheckMaxAggregateOutputType = {
    id: number | null
    medicineId: number | null
    checkedStock: number | null
    checkDate: Date | null
  }

  export type InventoryCheckCountAggregateOutputType = {
    id: number
    medicineId: number
    checkedStock: number
    checkDate: number
    _all: number
  }


  export type InventoryCheckAvgAggregateInputType = {
    id?: true
    medicineId?: true
    checkedStock?: true
  }

  export type InventoryCheckSumAggregateInputType = {
    id?: true
    medicineId?: true
    checkedStock?: true
  }

  export type InventoryCheckMinAggregateInputType = {
    id?: true
    medicineId?: true
    checkedStock?: true
    checkDate?: true
  }

  export type InventoryCheckMaxAggregateInputType = {
    id?: true
    medicineId?: true
    checkedStock?: true
    checkDate?: true
  }

  export type InventoryCheckCountAggregateInputType = {
    id?: true
    medicineId?: true
    checkedStock?: true
    checkDate?: true
    _all?: true
  }

  export type InventoryCheckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryCheck to aggregate.
     */
    where?: InventoryCheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryChecks to fetch.
     */
    orderBy?: InventoryCheckOrderByWithRelationInput | InventoryCheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryCheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryChecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryChecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryChecks
    **/
    _count?: true | InventoryCheckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryCheckAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryCheckSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryCheckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryCheckMaxAggregateInputType
  }

  export type GetInventoryCheckAggregateType<T extends InventoryCheckAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryCheck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryCheck[P]>
      : GetScalarType<T[P], AggregateInventoryCheck[P]>
  }




  export type InventoryCheckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryCheckWhereInput
    orderBy?: InventoryCheckOrderByWithAggregationInput | InventoryCheckOrderByWithAggregationInput[]
    by: InventoryCheckScalarFieldEnum[] | InventoryCheckScalarFieldEnum
    having?: InventoryCheckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCheckCountAggregateInputType | true
    _avg?: InventoryCheckAvgAggregateInputType
    _sum?: InventoryCheckSumAggregateInputType
    _min?: InventoryCheckMinAggregateInputType
    _max?: InventoryCheckMaxAggregateInputType
  }

  export type InventoryCheckGroupByOutputType = {
    id: number
    medicineId: number
    checkedStock: number
    checkDate: Date
    _count: InventoryCheckCountAggregateOutputType | null
    _avg: InventoryCheckAvgAggregateOutputType | null
    _sum: InventoryCheckSumAggregateOutputType | null
    _min: InventoryCheckMinAggregateOutputType | null
    _max: InventoryCheckMaxAggregateOutputType | null
  }

  type GetInventoryCheckGroupByPayload<T extends InventoryCheckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryCheckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryCheckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryCheckGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryCheckGroupByOutputType[P]>
        }
      >
    >


  export type InventoryCheckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicineId?: boolean
    checkedStock?: boolean
    checkDate?: boolean
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryCheck"]>



  export type InventoryCheckSelectScalar = {
    id?: boolean
    medicineId?: boolean
    checkedStock?: boolean
    checkDate?: boolean
  }

  export type InventoryCheckOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "medicineId" | "checkedStock" | "checkDate", ExtArgs["result"]["inventoryCheck"]>
  export type InventoryCheckInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }

  export type $InventoryCheckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryCheck"
    objects: {
      medicine: Prisma.$MedicinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      medicineId: number
      checkedStock: number
      checkDate: Date
    }, ExtArgs["result"]["inventoryCheck"]>
    composites: {}
  }

  type InventoryCheckGetPayload<S extends boolean | null | undefined | InventoryCheckDefaultArgs> = $Result.GetResult<Prisma.$InventoryCheckPayload, S>

  type InventoryCheckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryCheckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCheckCountAggregateInputType | true
    }

  export interface InventoryCheckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryCheck'], meta: { name: 'InventoryCheck' } }
    /**
     * Find zero or one InventoryCheck that matches the filter.
     * @param {InventoryCheckFindUniqueArgs} args - Arguments to find a InventoryCheck
     * @example
     * // Get one InventoryCheck
     * const inventoryCheck = await prisma.inventoryCheck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryCheckFindUniqueArgs>(args: SelectSubset<T, InventoryCheckFindUniqueArgs<ExtArgs>>): Prisma__InventoryCheckClient<$Result.GetResult<Prisma.$InventoryCheckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryCheck that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryCheckFindUniqueOrThrowArgs} args - Arguments to find a InventoryCheck
     * @example
     * // Get one InventoryCheck
     * const inventoryCheck = await prisma.inventoryCheck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryCheckFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryCheckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryCheckClient<$Result.GetResult<Prisma.$InventoryCheckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryCheck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCheckFindFirstArgs} args - Arguments to find a InventoryCheck
     * @example
     * // Get one InventoryCheck
     * const inventoryCheck = await prisma.inventoryCheck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryCheckFindFirstArgs>(args?: SelectSubset<T, InventoryCheckFindFirstArgs<ExtArgs>>): Prisma__InventoryCheckClient<$Result.GetResult<Prisma.$InventoryCheckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryCheck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCheckFindFirstOrThrowArgs} args - Arguments to find a InventoryCheck
     * @example
     * // Get one InventoryCheck
     * const inventoryCheck = await prisma.inventoryCheck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryCheckFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryCheckFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryCheckClient<$Result.GetResult<Prisma.$InventoryCheckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryChecks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCheckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryChecks
     * const inventoryChecks = await prisma.inventoryCheck.findMany()
     * 
     * // Get first 10 InventoryChecks
     * const inventoryChecks = await prisma.inventoryCheck.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryCheckWithIdOnly = await prisma.inventoryCheck.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryCheckFindManyArgs>(args?: SelectSubset<T, InventoryCheckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryCheckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryCheck.
     * @param {InventoryCheckCreateArgs} args - Arguments to create a InventoryCheck.
     * @example
     * // Create one InventoryCheck
     * const InventoryCheck = await prisma.inventoryCheck.create({
     *   data: {
     *     // ... data to create a InventoryCheck
     *   }
     * })
     * 
     */
    create<T extends InventoryCheckCreateArgs>(args: SelectSubset<T, InventoryCheckCreateArgs<ExtArgs>>): Prisma__InventoryCheckClient<$Result.GetResult<Prisma.$InventoryCheckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryChecks.
     * @param {InventoryCheckCreateManyArgs} args - Arguments to create many InventoryChecks.
     * @example
     * // Create many InventoryChecks
     * const inventoryCheck = await prisma.inventoryCheck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCheckCreateManyArgs>(args?: SelectSubset<T, InventoryCheckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InventoryCheck.
     * @param {InventoryCheckDeleteArgs} args - Arguments to delete one InventoryCheck.
     * @example
     * // Delete one InventoryCheck
     * const InventoryCheck = await prisma.inventoryCheck.delete({
     *   where: {
     *     // ... filter to delete one InventoryCheck
     *   }
     * })
     * 
     */
    delete<T extends InventoryCheckDeleteArgs>(args: SelectSubset<T, InventoryCheckDeleteArgs<ExtArgs>>): Prisma__InventoryCheckClient<$Result.GetResult<Prisma.$InventoryCheckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryCheck.
     * @param {InventoryCheckUpdateArgs} args - Arguments to update one InventoryCheck.
     * @example
     * // Update one InventoryCheck
     * const inventoryCheck = await prisma.inventoryCheck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryCheckUpdateArgs>(args: SelectSubset<T, InventoryCheckUpdateArgs<ExtArgs>>): Prisma__InventoryCheckClient<$Result.GetResult<Prisma.$InventoryCheckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryChecks.
     * @param {InventoryCheckDeleteManyArgs} args - Arguments to filter InventoryChecks to delete.
     * @example
     * // Delete a few InventoryChecks
     * const { count } = await prisma.inventoryCheck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryCheckDeleteManyArgs>(args?: SelectSubset<T, InventoryCheckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryChecks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCheckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryChecks
     * const inventoryCheck = await prisma.inventoryCheck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryCheckUpdateManyArgs>(args: SelectSubset<T, InventoryCheckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryCheck.
     * @param {InventoryCheckUpsertArgs} args - Arguments to update or create a InventoryCheck.
     * @example
     * // Update or create a InventoryCheck
     * const inventoryCheck = await prisma.inventoryCheck.upsert({
     *   create: {
     *     // ... data to create a InventoryCheck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryCheck we want to update
     *   }
     * })
     */
    upsert<T extends InventoryCheckUpsertArgs>(args: SelectSubset<T, InventoryCheckUpsertArgs<ExtArgs>>): Prisma__InventoryCheckClient<$Result.GetResult<Prisma.$InventoryCheckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryChecks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCheckCountArgs} args - Arguments to filter InventoryChecks to count.
     * @example
     * // Count the number of InventoryChecks
     * const count = await prisma.inventoryCheck.count({
     *   where: {
     *     // ... the filter for the InventoryChecks we want to count
     *   }
     * })
    **/
    count<T extends InventoryCheckCountArgs>(
      args?: Subset<T, InventoryCheckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCheckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryCheck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCheckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryCheckAggregateArgs>(args: Subset<T, InventoryCheckAggregateArgs>): Prisma.PrismaPromise<GetInventoryCheckAggregateType<T>>

    /**
     * Group by InventoryCheck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCheckGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryCheckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryCheckGroupByArgs['orderBy'] }
        : { orderBy?: InventoryCheckGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryCheckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryCheckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryCheck model
   */
  readonly fields: InventoryCheckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryCheck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryCheckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicine<T extends MedicineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineDefaultArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryCheck model
   */
  interface InventoryCheckFieldRefs {
    readonly id: FieldRef<"InventoryCheck", 'Int'>
    readonly medicineId: FieldRef<"InventoryCheck", 'Int'>
    readonly checkedStock: FieldRef<"InventoryCheck", 'Int'>
    readonly checkDate: FieldRef<"InventoryCheck", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryCheck findUnique
   */
  export type InventoryCheckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCheck
     */
    select?: InventoryCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryCheck
     */
    omit?: InventoryCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCheckInclude<ExtArgs> | null
    /**
     * Filter, which InventoryCheck to fetch.
     */
    where: InventoryCheckWhereUniqueInput
  }

  /**
   * InventoryCheck findUniqueOrThrow
   */
  export type InventoryCheckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCheck
     */
    select?: InventoryCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryCheck
     */
    omit?: InventoryCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCheckInclude<ExtArgs> | null
    /**
     * Filter, which InventoryCheck to fetch.
     */
    where: InventoryCheckWhereUniqueInput
  }

  /**
   * InventoryCheck findFirst
   */
  export type InventoryCheckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCheck
     */
    select?: InventoryCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryCheck
     */
    omit?: InventoryCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCheckInclude<ExtArgs> | null
    /**
     * Filter, which InventoryCheck to fetch.
     */
    where?: InventoryCheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryChecks to fetch.
     */
    orderBy?: InventoryCheckOrderByWithRelationInput | InventoryCheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryChecks.
     */
    cursor?: InventoryCheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryChecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryChecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryChecks.
     */
    distinct?: InventoryCheckScalarFieldEnum | InventoryCheckScalarFieldEnum[]
  }

  /**
   * InventoryCheck findFirstOrThrow
   */
  export type InventoryCheckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCheck
     */
    select?: InventoryCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryCheck
     */
    omit?: InventoryCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCheckInclude<ExtArgs> | null
    /**
     * Filter, which InventoryCheck to fetch.
     */
    where?: InventoryCheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryChecks to fetch.
     */
    orderBy?: InventoryCheckOrderByWithRelationInput | InventoryCheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryChecks.
     */
    cursor?: InventoryCheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryChecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryChecks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryChecks.
     */
    distinct?: InventoryCheckScalarFieldEnum | InventoryCheckScalarFieldEnum[]
  }

  /**
   * InventoryCheck findMany
   */
  export type InventoryCheckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCheck
     */
    select?: InventoryCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryCheck
     */
    omit?: InventoryCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCheckInclude<ExtArgs> | null
    /**
     * Filter, which InventoryChecks to fetch.
     */
    where?: InventoryCheckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryChecks to fetch.
     */
    orderBy?: InventoryCheckOrderByWithRelationInput | InventoryCheckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryChecks.
     */
    cursor?: InventoryCheckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryChecks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryChecks.
     */
    skip?: number
    distinct?: InventoryCheckScalarFieldEnum | InventoryCheckScalarFieldEnum[]
  }

  /**
   * InventoryCheck create
   */
  export type InventoryCheckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCheck
     */
    select?: InventoryCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryCheck
     */
    omit?: InventoryCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCheckInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryCheck.
     */
    data: XOR<InventoryCheckCreateInput, InventoryCheckUncheckedCreateInput>
  }

  /**
   * InventoryCheck createMany
   */
  export type InventoryCheckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryChecks.
     */
    data: InventoryCheckCreateManyInput | InventoryCheckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryCheck update
   */
  export type InventoryCheckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCheck
     */
    select?: InventoryCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryCheck
     */
    omit?: InventoryCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCheckInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryCheck.
     */
    data: XOR<InventoryCheckUpdateInput, InventoryCheckUncheckedUpdateInput>
    /**
     * Choose, which InventoryCheck to update.
     */
    where: InventoryCheckWhereUniqueInput
  }

  /**
   * InventoryCheck updateMany
   */
  export type InventoryCheckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryChecks.
     */
    data: XOR<InventoryCheckUpdateManyMutationInput, InventoryCheckUncheckedUpdateManyInput>
    /**
     * Filter which InventoryChecks to update
     */
    where?: InventoryCheckWhereInput
    /**
     * Limit how many InventoryChecks to update.
     */
    limit?: number
  }

  /**
   * InventoryCheck upsert
   */
  export type InventoryCheckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCheck
     */
    select?: InventoryCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryCheck
     */
    omit?: InventoryCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCheckInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryCheck to update in case it exists.
     */
    where: InventoryCheckWhereUniqueInput
    /**
     * In case the InventoryCheck found by the `where` argument doesn't exist, create a new InventoryCheck with this data.
     */
    create: XOR<InventoryCheckCreateInput, InventoryCheckUncheckedCreateInput>
    /**
     * In case the InventoryCheck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryCheckUpdateInput, InventoryCheckUncheckedUpdateInput>
  }

  /**
   * InventoryCheck delete
   */
  export type InventoryCheckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCheck
     */
    select?: InventoryCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryCheck
     */
    omit?: InventoryCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCheckInclude<ExtArgs> | null
    /**
     * Filter which InventoryCheck to delete.
     */
    where: InventoryCheckWhereUniqueInput
  }

  /**
   * InventoryCheck deleteMany
   */
  export type InventoryCheckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryChecks to delete
     */
    where?: InventoryCheckWhereInput
    /**
     * Limit how many InventoryChecks to delete.
     */
    limit?: number
  }

  /**
   * InventoryCheck without action
   */
  export type InventoryCheckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCheck
     */
    select?: InventoryCheckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryCheck
     */
    omit?: InventoryCheckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryCheckInclude<ExtArgs> | null
  }


  /**
   * Model InboundRecord
   */

  export type AggregateInboundRecord = {
    _count: InboundRecordCountAggregateOutputType | null
    _avg: InboundRecordAvgAggregateOutputType | null
    _sum: InboundRecordSumAggregateOutputType | null
    _min: InboundRecordMinAggregateOutputType | null
    _max: InboundRecordMaxAggregateOutputType | null
  }

  export type InboundRecordAvgAggregateOutputType = {
    id: number | null
    medicineId: number | null
    quantity: number | null
  }

  export type InboundRecordSumAggregateOutputType = {
    id: number | null
    medicineId: number | null
    quantity: number | null
  }

  export type InboundRecordMinAggregateOutputType = {
    id: number | null
    medicineId: number | null
    quantity: number | null
    inboundDate: Date | null
  }

  export type InboundRecordMaxAggregateOutputType = {
    id: number | null
    medicineId: number | null
    quantity: number | null
    inboundDate: Date | null
  }

  export type InboundRecordCountAggregateOutputType = {
    id: number
    medicineId: number
    quantity: number
    inboundDate: number
    _all: number
  }


  export type InboundRecordAvgAggregateInputType = {
    id?: true
    medicineId?: true
    quantity?: true
  }

  export type InboundRecordSumAggregateInputType = {
    id?: true
    medicineId?: true
    quantity?: true
  }

  export type InboundRecordMinAggregateInputType = {
    id?: true
    medicineId?: true
    quantity?: true
    inboundDate?: true
  }

  export type InboundRecordMaxAggregateInputType = {
    id?: true
    medicineId?: true
    quantity?: true
    inboundDate?: true
  }

  export type InboundRecordCountAggregateInputType = {
    id?: true
    medicineId?: true
    quantity?: true
    inboundDate?: true
    _all?: true
  }

  export type InboundRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InboundRecord to aggregate.
     */
    where?: InboundRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboundRecords to fetch.
     */
    orderBy?: InboundRecordOrderByWithRelationInput | InboundRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InboundRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboundRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboundRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InboundRecords
    **/
    _count?: true | InboundRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InboundRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InboundRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InboundRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InboundRecordMaxAggregateInputType
  }

  export type GetInboundRecordAggregateType<T extends InboundRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateInboundRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInboundRecord[P]>
      : GetScalarType<T[P], AggregateInboundRecord[P]>
  }




  export type InboundRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InboundRecordWhereInput
    orderBy?: InboundRecordOrderByWithAggregationInput | InboundRecordOrderByWithAggregationInput[]
    by: InboundRecordScalarFieldEnum[] | InboundRecordScalarFieldEnum
    having?: InboundRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InboundRecordCountAggregateInputType | true
    _avg?: InboundRecordAvgAggregateInputType
    _sum?: InboundRecordSumAggregateInputType
    _min?: InboundRecordMinAggregateInputType
    _max?: InboundRecordMaxAggregateInputType
  }

  export type InboundRecordGroupByOutputType = {
    id: number
    medicineId: number
    quantity: number
    inboundDate: Date
    _count: InboundRecordCountAggregateOutputType | null
    _avg: InboundRecordAvgAggregateOutputType | null
    _sum: InboundRecordSumAggregateOutputType | null
    _min: InboundRecordMinAggregateOutputType | null
    _max: InboundRecordMaxAggregateOutputType | null
  }

  type GetInboundRecordGroupByPayload<T extends InboundRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InboundRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InboundRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InboundRecordGroupByOutputType[P]>
            : GetScalarType<T[P], InboundRecordGroupByOutputType[P]>
        }
      >
    >


  export type InboundRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicineId?: boolean
    quantity?: boolean
    inboundDate?: boolean
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inboundRecord"]>



  export type InboundRecordSelectScalar = {
    id?: boolean
    medicineId?: boolean
    quantity?: boolean
    inboundDate?: boolean
  }

  export type InboundRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "medicineId" | "quantity" | "inboundDate", ExtArgs["result"]["inboundRecord"]>
  export type InboundRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }

  export type $InboundRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InboundRecord"
    objects: {
      medicine: Prisma.$MedicinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      medicineId: number
      quantity: number
      inboundDate: Date
    }, ExtArgs["result"]["inboundRecord"]>
    composites: {}
  }

  type InboundRecordGetPayload<S extends boolean | null | undefined | InboundRecordDefaultArgs> = $Result.GetResult<Prisma.$InboundRecordPayload, S>

  type InboundRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InboundRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InboundRecordCountAggregateInputType | true
    }

  export interface InboundRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InboundRecord'], meta: { name: 'InboundRecord' } }
    /**
     * Find zero or one InboundRecord that matches the filter.
     * @param {InboundRecordFindUniqueArgs} args - Arguments to find a InboundRecord
     * @example
     * // Get one InboundRecord
     * const inboundRecord = await prisma.inboundRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InboundRecordFindUniqueArgs>(args: SelectSubset<T, InboundRecordFindUniqueArgs<ExtArgs>>): Prisma__InboundRecordClient<$Result.GetResult<Prisma.$InboundRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InboundRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InboundRecordFindUniqueOrThrowArgs} args - Arguments to find a InboundRecord
     * @example
     * // Get one InboundRecord
     * const inboundRecord = await prisma.inboundRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InboundRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, InboundRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InboundRecordClient<$Result.GetResult<Prisma.$InboundRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InboundRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundRecordFindFirstArgs} args - Arguments to find a InboundRecord
     * @example
     * // Get one InboundRecord
     * const inboundRecord = await prisma.inboundRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InboundRecordFindFirstArgs>(args?: SelectSubset<T, InboundRecordFindFirstArgs<ExtArgs>>): Prisma__InboundRecordClient<$Result.GetResult<Prisma.$InboundRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InboundRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundRecordFindFirstOrThrowArgs} args - Arguments to find a InboundRecord
     * @example
     * // Get one InboundRecord
     * const inboundRecord = await prisma.inboundRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InboundRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, InboundRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__InboundRecordClient<$Result.GetResult<Prisma.$InboundRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InboundRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InboundRecords
     * const inboundRecords = await prisma.inboundRecord.findMany()
     * 
     * // Get first 10 InboundRecords
     * const inboundRecords = await prisma.inboundRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inboundRecordWithIdOnly = await prisma.inboundRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InboundRecordFindManyArgs>(args?: SelectSubset<T, InboundRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboundRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InboundRecord.
     * @param {InboundRecordCreateArgs} args - Arguments to create a InboundRecord.
     * @example
     * // Create one InboundRecord
     * const InboundRecord = await prisma.inboundRecord.create({
     *   data: {
     *     // ... data to create a InboundRecord
     *   }
     * })
     * 
     */
    create<T extends InboundRecordCreateArgs>(args: SelectSubset<T, InboundRecordCreateArgs<ExtArgs>>): Prisma__InboundRecordClient<$Result.GetResult<Prisma.$InboundRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InboundRecords.
     * @param {InboundRecordCreateManyArgs} args - Arguments to create many InboundRecords.
     * @example
     * // Create many InboundRecords
     * const inboundRecord = await prisma.inboundRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InboundRecordCreateManyArgs>(args?: SelectSubset<T, InboundRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InboundRecord.
     * @param {InboundRecordDeleteArgs} args - Arguments to delete one InboundRecord.
     * @example
     * // Delete one InboundRecord
     * const InboundRecord = await prisma.inboundRecord.delete({
     *   where: {
     *     // ... filter to delete one InboundRecord
     *   }
     * })
     * 
     */
    delete<T extends InboundRecordDeleteArgs>(args: SelectSubset<T, InboundRecordDeleteArgs<ExtArgs>>): Prisma__InboundRecordClient<$Result.GetResult<Prisma.$InboundRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InboundRecord.
     * @param {InboundRecordUpdateArgs} args - Arguments to update one InboundRecord.
     * @example
     * // Update one InboundRecord
     * const inboundRecord = await prisma.inboundRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InboundRecordUpdateArgs>(args: SelectSubset<T, InboundRecordUpdateArgs<ExtArgs>>): Prisma__InboundRecordClient<$Result.GetResult<Prisma.$InboundRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InboundRecords.
     * @param {InboundRecordDeleteManyArgs} args - Arguments to filter InboundRecords to delete.
     * @example
     * // Delete a few InboundRecords
     * const { count } = await prisma.inboundRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InboundRecordDeleteManyArgs>(args?: SelectSubset<T, InboundRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InboundRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InboundRecords
     * const inboundRecord = await prisma.inboundRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InboundRecordUpdateManyArgs>(args: SelectSubset<T, InboundRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InboundRecord.
     * @param {InboundRecordUpsertArgs} args - Arguments to update or create a InboundRecord.
     * @example
     * // Update or create a InboundRecord
     * const inboundRecord = await prisma.inboundRecord.upsert({
     *   create: {
     *     // ... data to create a InboundRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InboundRecord we want to update
     *   }
     * })
     */
    upsert<T extends InboundRecordUpsertArgs>(args: SelectSubset<T, InboundRecordUpsertArgs<ExtArgs>>): Prisma__InboundRecordClient<$Result.GetResult<Prisma.$InboundRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InboundRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundRecordCountArgs} args - Arguments to filter InboundRecords to count.
     * @example
     * // Count the number of InboundRecords
     * const count = await prisma.inboundRecord.count({
     *   where: {
     *     // ... the filter for the InboundRecords we want to count
     *   }
     * })
    **/
    count<T extends InboundRecordCountArgs>(
      args?: Subset<T, InboundRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InboundRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InboundRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InboundRecordAggregateArgs>(args: Subset<T, InboundRecordAggregateArgs>): Prisma.PrismaPromise<GetInboundRecordAggregateType<T>>

    /**
     * Group by InboundRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InboundRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InboundRecordGroupByArgs['orderBy'] }
        : { orderBy?: InboundRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InboundRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInboundRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InboundRecord model
   */
  readonly fields: InboundRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InboundRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InboundRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicine<T extends MedicineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineDefaultArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InboundRecord model
   */
  interface InboundRecordFieldRefs {
    readonly id: FieldRef<"InboundRecord", 'Int'>
    readonly medicineId: FieldRef<"InboundRecord", 'Int'>
    readonly quantity: FieldRef<"InboundRecord", 'Int'>
    readonly inboundDate: FieldRef<"InboundRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InboundRecord findUnique
   */
  export type InboundRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundRecord
     */
    select?: InboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundRecord
     */
    omit?: InboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundRecordInclude<ExtArgs> | null
    /**
     * Filter, which InboundRecord to fetch.
     */
    where: InboundRecordWhereUniqueInput
  }

  /**
   * InboundRecord findUniqueOrThrow
   */
  export type InboundRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundRecord
     */
    select?: InboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundRecord
     */
    omit?: InboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundRecordInclude<ExtArgs> | null
    /**
     * Filter, which InboundRecord to fetch.
     */
    where: InboundRecordWhereUniqueInput
  }

  /**
   * InboundRecord findFirst
   */
  export type InboundRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundRecord
     */
    select?: InboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundRecord
     */
    omit?: InboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundRecordInclude<ExtArgs> | null
    /**
     * Filter, which InboundRecord to fetch.
     */
    where?: InboundRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboundRecords to fetch.
     */
    orderBy?: InboundRecordOrderByWithRelationInput | InboundRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InboundRecords.
     */
    cursor?: InboundRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboundRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboundRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InboundRecords.
     */
    distinct?: InboundRecordScalarFieldEnum | InboundRecordScalarFieldEnum[]
  }

  /**
   * InboundRecord findFirstOrThrow
   */
  export type InboundRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundRecord
     */
    select?: InboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundRecord
     */
    omit?: InboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundRecordInclude<ExtArgs> | null
    /**
     * Filter, which InboundRecord to fetch.
     */
    where?: InboundRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboundRecords to fetch.
     */
    orderBy?: InboundRecordOrderByWithRelationInput | InboundRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InboundRecords.
     */
    cursor?: InboundRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboundRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboundRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InboundRecords.
     */
    distinct?: InboundRecordScalarFieldEnum | InboundRecordScalarFieldEnum[]
  }

  /**
   * InboundRecord findMany
   */
  export type InboundRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundRecord
     */
    select?: InboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundRecord
     */
    omit?: InboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundRecordInclude<ExtArgs> | null
    /**
     * Filter, which InboundRecords to fetch.
     */
    where?: InboundRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboundRecords to fetch.
     */
    orderBy?: InboundRecordOrderByWithRelationInput | InboundRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InboundRecords.
     */
    cursor?: InboundRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboundRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboundRecords.
     */
    skip?: number
    distinct?: InboundRecordScalarFieldEnum | InboundRecordScalarFieldEnum[]
  }

  /**
   * InboundRecord create
   */
  export type InboundRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundRecord
     */
    select?: InboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundRecord
     */
    omit?: InboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a InboundRecord.
     */
    data: XOR<InboundRecordCreateInput, InboundRecordUncheckedCreateInput>
  }

  /**
   * InboundRecord createMany
   */
  export type InboundRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InboundRecords.
     */
    data: InboundRecordCreateManyInput | InboundRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InboundRecord update
   */
  export type InboundRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundRecord
     */
    select?: InboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundRecord
     */
    omit?: InboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a InboundRecord.
     */
    data: XOR<InboundRecordUpdateInput, InboundRecordUncheckedUpdateInput>
    /**
     * Choose, which InboundRecord to update.
     */
    where: InboundRecordWhereUniqueInput
  }

  /**
   * InboundRecord updateMany
   */
  export type InboundRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InboundRecords.
     */
    data: XOR<InboundRecordUpdateManyMutationInput, InboundRecordUncheckedUpdateManyInput>
    /**
     * Filter which InboundRecords to update
     */
    where?: InboundRecordWhereInput
    /**
     * Limit how many InboundRecords to update.
     */
    limit?: number
  }

  /**
   * InboundRecord upsert
   */
  export type InboundRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundRecord
     */
    select?: InboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundRecord
     */
    omit?: InboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the InboundRecord to update in case it exists.
     */
    where: InboundRecordWhereUniqueInput
    /**
     * In case the InboundRecord found by the `where` argument doesn't exist, create a new InboundRecord with this data.
     */
    create: XOR<InboundRecordCreateInput, InboundRecordUncheckedCreateInput>
    /**
     * In case the InboundRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InboundRecordUpdateInput, InboundRecordUncheckedUpdateInput>
  }

  /**
   * InboundRecord delete
   */
  export type InboundRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundRecord
     */
    select?: InboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundRecord
     */
    omit?: InboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundRecordInclude<ExtArgs> | null
    /**
     * Filter which InboundRecord to delete.
     */
    where: InboundRecordWhereUniqueInput
  }

  /**
   * InboundRecord deleteMany
   */
  export type InboundRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InboundRecords to delete
     */
    where?: InboundRecordWhereInput
    /**
     * Limit how many InboundRecords to delete.
     */
    limit?: number
  }

  /**
   * InboundRecord without action
   */
  export type InboundRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboundRecord
     */
    select?: InboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboundRecord
     */
    omit?: InboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundRecordInclude<ExtArgs> | null
  }


  /**
   * Model OutboundRecord
   */

  export type AggregateOutboundRecord = {
    _count: OutboundRecordCountAggregateOutputType | null
    _avg: OutboundRecordAvgAggregateOutputType | null
    _sum: OutboundRecordSumAggregateOutputType | null
    _min: OutboundRecordMinAggregateOutputType | null
    _max: OutboundRecordMaxAggregateOutputType | null
  }

  export type OutboundRecordAvgAggregateOutputType = {
    id: number | null
    medicineId: number | null
    quantity: number | null
  }

  export type OutboundRecordSumAggregateOutputType = {
    id: number | null
    medicineId: number | null
    quantity: number | null
  }

  export type OutboundRecordMinAggregateOutputType = {
    id: number | null
    medicineId: number | null
    quantity: number | null
    outboundDate: Date | null
  }

  export type OutboundRecordMaxAggregateOutputType = {
    id: number | null
    medicineId: number | null
    quantity: number | null
    outboundDate: Date | null
  }

  export type OutboundRecordCountAggregateOutputType = {
    id: number
    medicineId: number
    quantity: number
    outboundDate: number
    _all: number
  }


  export type OutboundRecordAvgAggregateInputType = {
    id?: true
    medicineId?: true
    quantity?: true
  }

  export type OutboundRecordSumAggregateInputType = {
    id?: true
    medicineId?: true
    quantity?: true
  }

  export type OutboundRecordMinAggregateInputType = {
    id?: true
    medicineId?: true
    quantity?: true
    outboundDate?: true
  }

  export type OutboundRecordMaxAggregateInputType = {
    id?: true
    medicineId?: true
    quantity?: true
    outboundDate?: true
  }

  export type OutboundRecordCountAggregateInputType = {
    id?: true
    medicineId?: true
    quantity?: true
    outboundDate?: true
    _all?: true
  }

  export type OutboundRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutboundRecord to aggregate.
     */
    where?: OutboundRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutboundRecords to fetch.
     */
    orderBy?: OutboundRecordOrderByWithRelationInput | OutboundRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutboundRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutboundRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutboundRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutboundRecords
    **/
    _count?: true | OutboundRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutboundRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutboundRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutboundRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutboundRecordMaxAggregateInputType
  }

  export type GetOutboundRecordAggregateType<T extends OutboundRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateOutboundRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutboundRecord[P]>
      : GetScalarType<T[P], AggregateOutboundRecord[P]>
  }




  export type OutboundRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutboundRecordWhereInput
    orderBy?: OutboundRecordOrderByWithAggregationInput | OutboundRecordOrderByWithAggregationInput[]
    by: OutboundRecordScalarFieldEnum[] | OutboundRecordScalarFieldEnum
    having?: OutboundRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutboundRecordCountAggregateInputType | true
    _avg?: OutboundRecordAvgAggregateInputType
    _sum?: OutboundRecordSumAggregateInputType
    _min?: OutboundRecordMinAggregateInputType
    _max?: OutboundRecordMaxAggregateInputType
  }

  export type OutboundRecordGroupByOutputType = {
    id: number
    medicineId: number
    quantity: number
    outboundDate: Date
    _count: OutboundRecordCountAggregateOutputType | null
    _avg: OutboundRecordAvgAggregateOutputType | null
    _sum: OutboundRecordSumAggregateOutputType | null
    _min: OutboundRecordMinAggregateOutputType | null
    _max: OutboundRecordMaxAggregateOutputType | null
  }

  type GetOutboundRecordGroupByPayload<T extends OutboundRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutboundRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutboundRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutboundRecordGroupByOutputType[P]>
            : GetScalarType<T[P], OutboundRecordGroupByOutputType[P]>
        }
      >
    >


  export type OutboundRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicineId?: boolean
    quantity?: boolean
    outboundDate?: boolean
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outboundRecord"]>



  export type OutboundRecordSelectScalar = {
    id?: boolean
    medicineId?: boolean
    quantity?: boolean
    outboundDate?: boolean
  }

  export type OutboundRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "medicineId" | "quantity" | "outboundDate", ExtArgs["result"]["outboundRecord"]>
  export type OutboundRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }

  export type $OutboundRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutboundRecord"
    objects: {
      medicine: Prisma.$MedicinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      medicineId: number
      quantity: number
      outboundDate: Date
    }, ExtArgs["result"]["outboundRecord"]>
    composites: {}
  }

  type OutboundRecordGetPayload<S extends boolean | null | undefined | OutboundRecordDefaultArgs> = $Result.GetResult<Prisma.$OutboundRecordPayload, S>

  type OutboundRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutboundRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutboundRecordCountAggregateInputType | true
    }

  export interface OutboundRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutboundRecord'], meta: { name: 'OutboundRecord' } }
    /**
     * Find zero or one OutboundRecord that matches the filter.
     * @param {OutboundRecordFindUniqueArgs} args - Arguments to find a OutboundRecord
     * @example
     * // Get one OutboundRecord
     * const outboundRecord = await prisma.outboundRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutboundRecordFindUniqueArgs>(args: SelectSubset<T, OutboundRecordFindUniqueArgs<ExtArgs>>): Prisma__OutboundRecordClient<$Result.GetResult<Prisma.$OutboundRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutboundRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutboundRecordFindUniqueOrThrowArgs} args - Arguments to find a OutboundRecord
     * @example
     * // Get one OutboundRecord
     * const outboundRecord = await prisma.outboundRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutboundRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, OutboundRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutboundRecordClient<$Result.GetResult<Prisma.$OutboundRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutboundRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboundRecordFindFirstArgs} args - Arguments to find a OutboundRecord
     * @example
     * // Get one OutboundRecord
     * const outboundRecord = await prisma.outboundRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutboundRecordFindFirstArgs>(args?: SelectSubset<T, OutboundRecordFindFirstArgs<ExtArgs>>): Prisma__OutboundRecordClient<$Result.GetResult<Prisma.$OutboundRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutboundRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboundRecordFindFirstOrThrowArgs} args - Arguments to find a OutboundRecord
     * @example
     * // Get one OutboundRecord
     * const outboundRecord = await prisma.outboundRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutboundRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, OutboundRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutboundRecordClient<$Result.GetResult<Prisma.$OutboundRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutboundRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboundRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutboundRecords
     * const outboundRecords = await prisma.outboundRecord.findMany()
     * 
     * // Get first 10 OutboundRecords
     * const outboundRecords = await prisma.outboundRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outboundRecordWithIdOnly = await prisma.outboundRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutboundRecordFindManyArgs>(args?: SelectSubset<T, OutboundRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutboundRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutboundRecord.
     * @param {OutboundRecordCreateArgs} args - Arguments to create a OutboundRecord.
     * @example
     * // Create one OutboundRecord
     * const OutboundRecord = await prisma.outboundRecord.create({
     *   data: {
     *     // ... data to create a OutboundRecord
     *   }
     * })
     * 
     */
    create<T extends OutboundRecordCreateArgs>(args: SelectSubset<T, OutboundRecordCreateArgs<ExtArgs>>): Prisma__OutboundRecordClient<$Result.GetResult<Prisma.$OutboundRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutboundRecords.
     * @param {OutboundRecordCreateManyArgs} args - Arguments to create many OutboundRecords.
     * @example
     * // Create many OutboundRecords
     * const outboundRecord = await prisma.outboundRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutboundRecordCreateManyArgs>(args?: SelectSubset<T, OutboundRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OutboundRecord.
     * @param {OutboundRecordDeleteArgs} args - Arguments to delete one OutboundRecord.
     * @example
     * // Delete one OutboundRecord
     * const OutboundRecord = await prisma.outboundRecord.delete({
     *   where: {
     *     // ... filter to delete one OutboundRecord
     *   }
     * })
     * 
     */
    delete<T extends OutboundRecordDeleteArgs>(args: SelectSubset<T, OutboundRecordDeleteArgs<ExtArgs>>): Prisma__OutboundRecordClient<$Result.GetResult<Prisma.$OutboundRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutboundRecord.
     * @param {OutboundRecordUpdateArgs} args - Arguments to update one OutboundRecord.
     * @example
     * // Update one OutboundRecord
     * const outboundRecord = await prisma.outboundRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutboundRecordUpdateArgs>(args: SelectSubset<T, OutboundRecordUpdateArgs<ExtArgs>>): Prisma__OutboundRecordClient<$Result.GetResult<Prisma.$OutboundRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutboundRecords.
     * @param {OutboundRecordDeleteManyArgs} args - Arguments to filter OutboundRecords to delete.
     * @example
     * // Delete a few OutboundRecords
     * const { count } = await prisma.outboundRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutboundRecordDeleteManyArgs>(args?: SelectSubset<T, OutboundRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutboundRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboundRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutboundRecords
     * const outboundRecord = await prisma.outboundRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutboundRecordUpdateManyArgs>(args: SelectSubset<T, OutboundRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OutboundRecord.
     * @param {OutboundRecordUpsertArgs} args - Arguments to update or create a OutboundRecord.
     * @example
     * // Update or create a OutboundRecord
     * const outboundRecord = await prisma.outboundRecord.upsert({
     *   create: {
     *     // ... data to create a OutboundRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutboundRecord we want to update
     *   }
     * })
     */
    upsert<T extends OutboundRecordUpsertArgs>(args: SelectSubset<T, OutboundRecordUpsertArgs<ExtArgs>>): Prisma__OutboundRecordClient<$Result.GetResult<Prisma.$OutboundRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutboundRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboundRecordCountArgs} args - Arguments to filter OutboundRecords to count.
     * @example
     * // Count the number of OutboundRecords
     * const count = await prisma.outboundRecord.count({
     *   where: {
     *     // ... the filter for the OutboundRecords we want to count
     *   }
     * })
    **/
    count<T extends OutboundRecordCountArgs>(
      args?: Subset<T, OutboundRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutboundRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutboundRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboundRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutboundRecordAggregateArgs>(args: Subset<T, OutboundRecordAggregateArgs>): Prisma.PrismaPromise<GetOutboundRecordAggregateType<T>>

    /**
     * Group by OutboundRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboundRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OutboundRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutboundRecordGroupByArgs['orderBy'] }
        : { orderBy?: OutboundRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OutboundRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutboundRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutboundRecord model
   */
  readonly fields: OutboundRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutboundRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutboundRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicine<T extends MedicineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineDefaultArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OutboundRecord model
   */
  interface OutboundRecordFieldRefs {
    readonly id: FieldRef<"OutboundRecord", 'Int'>
    readonly medicineId: FieldRef<"OutboundRecord", 'Int'>
    readonly quantity: FieldRef<"OutboundRecord", 'Int'>
    readonly outboundDate: FieldRef<"OutboundRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OutboundRecord findUnique
   */
  export type OutboundRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundRecord
     */
    select?: OutboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundRecord
     */
    omit?: OutboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundRecordInclude<ExtArgs> | null
    /**
     * Filter, which OutboundRecord to fetch.
     */
    where: OutboundRecordWhereUniqueInput
  }

  /**
   * OutboundRecord findUniqueOrThrow
   */
  export type OutboundRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundRecord
     */
    select?: OutboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundRecord
     */
    omit?: OutboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundRecordInclude<ExtArgs> | null
    /**
     * Filter, which OutboundRecord to fetch.
     */
    where: OutboundRecordWhereUniqueInput
  }

  /**
   * OutboundRecord findFirst
   */
  export type OutboundRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundRecord
     */
    select?: OutboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundRecord
     */
    omit?: OutboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundRecordInclude<ExtArgs> | null
    /**
     * Filter, which OutboundRecord to fetch.
     */
    where?: OutboundRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutboundRecords to fetch.
     */
    orderBy?: OutboundRecordOrderByWithRelationInput | OutboundRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutboundRecords.
     */
    cursor?: OutboundRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutboundRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutboundRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutboundRecords.
     */
    distinct?: OutboundRecordScalarFieldEnum | OutboundRecordScalarFieldEnum[]
  }

  /**
   * OutboundRecord findFirstOrThrow
   */
  export type OutboundRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundRecord
     */
    select?: OutboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundRecord
     */
    omit?: OutboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundRecordInclude<ExtArgs> | null
    /**
     * Filter, which OutboundRecord to fetch.
     */
    where?: OutboundRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutboundRecords to fetch.
     */
    orderBy?: OutboundRecordOrderByWithRelationInput | OutboundRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutboundRecords.
     */
    cursor?: OutboundRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutboundRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutboundRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutboundRecords.
     */
    distinct?: OutboundRecordScalarFieldEnum | OutboundRecordScalarFieldEnum[]
  }

  /**
   * OutboundRecord findMany
   */
  export type OutboundRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundRecord
     */
    select?: OutboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundRecord
     */
    omit?: OutboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundRecordInclude<ExtArgs> | null
    /**
     * Filter, which OutboundRecords to fetch.
     */
    where?: OutboundRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutboundRecords to fetch.
     */
    orderBy?: OutboundRecordOrderByWithRelationInput | OutboundRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutboundRecords.
     */
    cursor?: OutboundRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutboundRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutboundRecords.
     */
    skip?: number
    distinct?: OutboundRecordScalarFieldEnum | OutboundRecordScalarFieldEnum[]
  }

  /**
   * OutboundRecord create
   */
  export type OutboundRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundRecord
     */
    select?: OutboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundRecord
     */
    omit?: OutboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a OutboundRecord.
     */
    data: XOR<OutboundRecordCreateInput, OutboundRecordUncheckedCreateInput>
  }

  /**
   * OutboundRecord createMany
   */
  export type OutboundRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutboundRecords.
     */
    data: OutboundRecordCreateManyInput | OutboundRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutboundRecord update
   */
  export type OutboundRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundRecord
     */
    select?: OutboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundRecord
     */
    omit?: OutboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a OutboundRecord.
     */
    data: XOR<OutboundRecordUpdateInput, OutboundRecordUncheckedUpdateInput>
    /**
     * Choose, which OutboundRecord to update.
     */
    where: OutboundRecordWhereUniqueInput
  }

  /**
   * OutboundRecord updateMany
   */
  export type OutboundRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutboundRecords.
     */
    data: XOR<OutboundRecordUpdateManyMutationInput, OutboundRecordUncheckedUpdateManyInput>
    /**
     * Filter which OutboundRecords to update
     */
    where?: OutboundRecordWhereInput
    /**
     * Limit how many OutboundRecords to update.
     */
    limit?: number
  }

  /**
   * OutboundRecord upsert
   */
  export type OutboundRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundRecord
     */
    select?: OutboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundRecord
     */
    omit?: OutboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the OutboundRecord to update in case it exists.
     */
    where: OutboundRecordWhereUniqueInput
    /**
     * In case the OutboundRecord found by the `where` argument doesn't exist, create a new OutboundRecord with this data.
     */
    create: XOR<OutboundRecordCreateInput, OutboundRecordUncheckedCreateInput>
    /**
     * In case the OutboundRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutboundRecordUpdateInput, OutboundRecordUncheckedUpdateInput>
  }

  /**
   * OutboundRecord delete
   */
  export type OutboundRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundRecord
     */
    select?: OutboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundRecord
     */
    omit?: OutboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundRecordInclude<ExtArgs> | null
    /**
     * Filter which OutboundRecord to delete.
     */
    where: OutboundRecordWhereUniqueInput
  }

  /**
   * OutboundRecord deleteMany
   */
  export type OutboundRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutboundRecords to delete
     */
    where?: OutboundRecordWhereInput
    /**
     * Limit how many OutboundRecords to delete.
     */
    limit?: number
  }

  /**
   * OutboundRecord without action
   */
  export type OutboundRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboundRecord
     */
    select?: OutboundRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboundRecord
     */
    omit?: OutboundRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundRecordInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MedicineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    stock: 'stock'
  };

  export type MedicineScalarFieldEnum = (typeof MedicineScalarFieldEnum)[keyof typeof MedicineScalarFieldEnum]


  export const InventoryCheckScalarFieldEnum: {
    id: 'id',
    medicineId: 'medicineId',
    checkedStock: 'checkedStock',
    checkDate: 'checkDate'
  };

  export type InventoryCheckScalarFieldEnum = (typeof InventoryCheckScalarFieldEnum)[keyof typeof InventoryCheckScalarFieldEnum]


  export const InboundRecordScalarFieldEnum: {
    id: 'id',
    medicineId: 'medicineId',
    quantity: 'quantity',
    inboundDate: 'inboundDate'
  };

  export type InboundRecordScalarFieldEnum = (typeof InboundRecordScalarFieldEnum)[keyof typeof InboundRecordScalarFieldEnum]


  export const OutboundRecordScalarFieldEnum: {
    id: 'id',
    medicineId: 'medicineId',
    quantity: 'quantity',
    outboundDate: 'outboundDate'
  };

  export type OutboundRecordScalarFieldEnum = (typeof OutboundRecordScalarFieldEnum)[keyof typeof OutboundRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const MedicineOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type MedicineOrderByRelevanceFieldEnum = (typeof MedicineOrderByRelevanceFieldEnum)[keyof typeof MedicineOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type MedicineWhereInput = {
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    id?: IntFilter<"Medicine"> | number
    name?: StringFilter<"Medicine"> | string
    price?: FloatFilter<"Medicine"> | number
    stock?: IntFilter<"Medicine"> | number
    inventoryChecks?: InventoryCheckListRelationFilter
    inboundRecords?: InboundRecordListRelationFilter
    outboundRecords?: OutboundRecordListRelationFilter
  }

  export type MedicineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    inventoryChecks?: InventoryCheckOrderByRelationAggregateInput
    inboundRecords?: InboundRecordOrderByRelationAggregateInput
    outboundRecords?: OutboundRecordOrderByRelationAggregateInput
    _relevance?: MedicineOrderByRelevanceInput
  }

  export type MedicineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    name?: StringFilter<"Medicine"> | string
    price?: FloatFilter<"Medicine"> | number
    stock?: IntFilter<"Medicine"> | number
    inventoryChecks?: InventoryCheckListRelationFilter
    inboundRecords?: InboundRecordListRelationFilter
    outboundRecords?: OutboundRecordListRelationFilter
  }, "id">

  export type MedicineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    _count?: MedicineCountOrderByAggregateInput
    _avg?: MedicineAvgOrderByAggregateInput
    _max?: MedicineMaxOrderByAggregateInput
    _min?: MedicineMinOrderByAggregateInput
    _sum?: MedicineSumOrderByAggregateInput
  }

  export type MedicineScalarWhereWithAggregatesInput = {
    AND?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    OR?: MedicineScalarWhereWithAggregatesInput[]
    NOT?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Medicine"> | number
    name?: StringWithAggregatesFilter<"Medicine"> | string
    price?: FloatWithAggregatesFilter<"Medicine"> | number
    stock?: IntWithAggregatesFilter<"Medicine"> | number
  }

  export type InventoryCheckWhereInput = {
    AND?: InventoryCheckWhereInput | InventoryCheckWhereInput[]
    OR?: InventoryCheckWhereInput[]
    NOT?: InventoryCheckWhereInput | InventoryCheckWhereInput[]
    id?: IntFilter<"InventoryCheck"> | number
    medicineId?: IntFilter<"InventoryCheck"> | number
    checkedStock?: IntFilter<"InventoryCheck"> | number
    checkDate?: DateTimeFilter<"InventoryCheck"> | Date | string
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
  }

  export type InventoryCheckOrderByWithRelationInput = {
    id?: SortOrder
    medicineId?: SortOrder
    checkedStock?: SortOrder
    checkDate?: SortOrder
    medicine?: MedicineOrderByWithRelationInput
  }

  export type InventoryCheckWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InventoryCheckWhereInput | InventoryCheckWhereInput[]
    OR?: InventoryCheckWhereInput[]
    NOT?: InventoryCheckWhereInput | InventoryCheckWhereInput[]
    medicineId?: IntFilter<"InventoryCheck"> | number
    checkedStock?: IntFilter<"InventoryCheck"> | number
    checkDate?: DateTimeFilter<"InventoryCheck"> | Date | string
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
  }, "id">

  export type InventoryCheckOrderByWithAggregationInput = {
    id?: SortOrder
    medicineId?: SortOrder
    checkedStock?: SortOrder
    checkDate?: SortOrder
    _count?: InventoryCheckCountOrderByAggregateInput
    _avg?: InventoryCheckAvgOrderByAggregateInput
    _max?: InventoryCheckMaxOrderByAggregateInput
    _min?: InventoryCheckMinOrderByAggregateInput
    _sum?: InventoryCheckSumOrderByAggregateInput
  }

  export type InventoryCheckScalarWhereWithAggregatesInput = {
    AND?: InventoryCheckScalarWhereWithAggregatesInput | InventoryCheckScalarWhereWithAggregatesInput[]
    OR?: InventoryCheckScalarWhereWithAggregatesInput[]
    NOT?: InventoryCheckScalarWhereWithAggregatesInput | InventoryCheckScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InventoryCheck"> | number
    medicineId?: IntWithAggregatesFilter<"InventoryCheck"> | number
    checkedStock?: IntWithAggregatesFilter<"InventoryCheck"> | number
    checkDate?: DateTimeWithAggregatesFilter<"InventoryCheck"> | Date | string
  }

  export type InboundRecordWhereInput = {
    AND?: InboundRecordWhereInput | InboundRecordWhereInput[]
    OR?: InboundRecordWhereInput[]
    NOT?: InboundRecordWhereInput | InboundRecordWhereInput[]
    id?: IntFilter<"InboundRecord"> | number
    medicineId?: IntFilter<"InboundRecord"> | number
    quantity?: IntFilter<"InboundRecord"> | number
    inboundDate?: DateTimeFilter<"InboundRecord"> | Date | string
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
  }

  export type InboundRecordOrderByWithRelationInput = {
    id?: SortOrder
    medicineId?: SortOrder
    quantity?: SortOrder
    inboundDate?: SortOrder
    medicine?: MedicineOrderByWithRelationInput
  }

  export type InboundRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InboundRecordWhereInput | InboundRecordWhereInput[]
    OR?: InboundRecordWhereInput[]
    NOT?: InboundRecordWhereInput | InboundRecordWhereInput[]
    medicineId?: IntFilter<"InboundRecord"> | number
    quantity?: IntFilter<"InboundRecord"> | number
    inboundDate?: DateTimeFilter<"InboundRecord"> | Date | string
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
  }, "id">

  export type InboundRecordOrderByWithAggregationInput = {
    id?: SortOrder
    medicineId?: SortOrder
    quantity?: SortOrder
    inboundDate?: SortOrder
    _count?: InboundRecordCountOrderByAggregateInput
    _avg?: InboundRecordAvgOrderByAggregateInput
    _max?: InboundRecordMaxOrderByAggregateInput
    _min?: InboundRecordMinOrderByAggregateInput
    _sum?: InboundRecordSumOrderByAggregateInput
  }

  export type InboundRecordScalarWhereWithAggregatesInput = {
    AND?: InboundRecordScalarWhereWithAggregatesInput | InboundRecordScalarWhereWithAggregatesInput[]
    OR?: InboundRecordScalarWhereWithAggregatesInput[]
    NOT?: InboundRecordScalarWhereWithAggregatesInput | InboundRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InboundRecord"> | number
    medicineId?: IntWithAggregatesFilter<"InboundRecord"> | number
    quantity?: IntWithAggregatesFilter<"InboundRecord"> | number
    inboundDate?: DateTimeWithAggregatesFilter<"InboundRecord"> | Date | string
  }

  export type OutboundRecordWhereInput = {
    AND?: OutboundRecordWhereInput | OutboundRecordWhereInput[]
    OR?: OutboundRecordWhereInput[]
    NOT?: OutboundRecordWhereInput | OutboundRecordWhereInput[]
    id?: IntFilter<"OutboundRecord"> | number
    medicineId?: IntFilter<"OutboundRecord"> | number
    quantity?: IntFilter<"OutboundRecord"> | number
    outboundDate?: DateTimeFilter<"OutboundRecord"> | Date | string
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
  }

  export type OutboundRecordOrderByWithRelationInput = {
    id?: SortOrder
    medicineId?: SortOrder
    quantity?: SortOrder
    outboundDate?: SortOrder
    medicine?: MedicineOrderByWithRelationInput
  }

  export type OutboundRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OutboundRecordWhereInput | OutboundRecordWhereInput[]
    OR?: OutboundRecordWhereInput[]
    NOT?: OutboundRecordWhereInput | OutboundRecordWhereInput[]
    medicineId?: IntFilter<"OutboundRecord"> | number
    quantity?: IntFilter<"OutboundRecord"> | number
    outboundDate?: DateTimeFilter<"OutboundRecord"> | Date | string
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
  }, "id">

  export type OutboundRecordOrderByWithAggregationInput = {
    id?: SortOrder
    medicineId?: SortOrder
    quantity?: SortOrder
    outboundDate?: SortOrder
    _count?: OutboundRecordCountOrderByAggregateInput
    _avg?: OutboundRecordAvgOrderByAggregateInput
    _max?: OutboundRecordMaxOrderByAggregateInput
    _min?: OutboundRecordMinOrderByAggregateInput
    _sum?: OutboundRecordSumOrderByAggregateInput
  }

  export type OutboundRecordScalarWhereWithAggregatesInput = {
    AND?: OutboundRecordScalarWhereWithAggregatesInput | OutboundRecordScalarWhereWithAggregatesInput[]
    OR?: OutboundRecordScalarWhereWithAggregatesInput[]
    NOT?: OutboundRecordScalarWhereWithAggregatesInput | OutboundRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OutboundRecord"> | number
    medicineId?: IntWithAggregatesFilter<"OutboundRecord"> | number
    quantity?: IntWithAggregatesFilter<"OutboundRecord"> | number
    outboundDate?: DateTimeWithAggregatesFilter<"OutboundRecord"> | Date | string
  }

  export type MedicineCreateInput = {
    name: string
    price: number
    stock: number
    inventoryChecks?: InventoryCheckCreateNestedManyWithoutMedicineInput
    inboundRecords?: InboundRecordCreateNestedManyWithoutMedicineInput
    outboundRecords?: OutboundRecordCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    stock: number
    inventoryChecks?: InventoryCheckUncheckedCreateNestedManyWithoutMedicineInput
    inboundRecords?: InboundRecordUncheckedCreateNestedManyWithoutMedicineInput
    outboundRecords?: OutboundRecordUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    inventoryChecks?: InventoryCheckUpdateManyWithoutMedicineNestedInput
    inboundRecords?: InboundRecordUpdateManyWithoutMedicineNestedInput
    outboundRecords?: OutboundRecordUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    inventoryChecks?: InventoryCheckUncheckedUpdateManyWithoutMedicineNestedInput
    inboundRecords?: InboundRecordUncheckedUpdateManyWithoutMedicineNestedInput
    outboundRecords?: OutboundRecordUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineCreateManyInput = {
    id?: number
    name: string
    price: number
    stock: number
  }

  export type MedicineUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type MedicineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryCheckCreateInput = {
    checkedStock: number
    checkDate?: Date | string
    medicine: MedicineCreateNestedOneWithoutInventoryChecksInput
  }

  export type InventoryCheckUncheckedCreateInput = {
    id?: number
    medicineId: number
    checkedStock: number
    checkDate?: Date | string
  }

  export type InventoryCheckUpdateInput = {
    checkedStock?: IntFieldUpdateOperationsInput | number
    checkDate?: DateTimeFieldUpdateOperationsInput | Date | string
    medicine?: MedicineUpdateOneRequiredWithoutInventoryChecksNestedInput
  }

  export type InventoryCheckUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    checkedStock?: IntFieldUpdateOperationsInput | number
    checkDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCheckCreateManyInput = {
    id?: number
    medicineId: number
    checkedStock: number
    checkDate?: Date | string
  }

  export type InventoryCheckUpdateManyMutationInput = {
    checkedStock?: IntFieldUpdateOperationsInput | number
    checkDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCheckUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    checkedStock?: IntFieldUpdateOperationsInput | number
    checkDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundRecordCreateInput = {
    quantity: number
    inboundDate?: Date | string
    medicine: MedicineCreateNestedOneWithoutInboundRecordsInput
  }

  export type InboundRecordUncheckedCreateInput = {
    id?: number
    medicineId: number
    quantity: number
    inboundDate?: Date | string
  }

  export type InboundRecordUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    inboundDate?: DateTimeFieldUpdateOperationsInput | Date | string
    medicine?: MedicineUpdateOneRequiredWithoutInboundRecordsNestedInput
  }

  export type InboundRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    inboundDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundRecordCreateManyInput = {
    id?: number
    medicineId: number
    quantity: number
    inboundDate?: Date | string
  }

  export type InboundRecordUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    inboundDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    inboundDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutboundRecordCreateInput = {
    quantity: number
    outboundDate?: Date | string
    medicine: MedicineCreateNestedOneWithoutOutboundRecordsInput
  }

  export type OutboundRecordUncheckedCreateInput = {
    id?: number
    medicineId: number
    quantity: number
    outboundDate?: Date | string
  }

  export type OutboundRecordUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    outboundDate?: DateTimeFieldUpdateOperationsInput | Date | string
    medicine?: MedicineUpdateOneRequiredWithoutOutboundRecordsNestedInput
  }

  export type OutboundRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    outboundDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutboundRecordCreateManyInput = {
    id?: number
    medicineId: number
    quantity: number
    outboundDate?: Date | string
  }

  export type OutboundRecordUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    outboundDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutboundRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    outboundDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type InventoryCheckListRelationFilter = {
    every?: InventoryCheckWhereInput
    some?: InventoryCheckWhereInput
    none?: InventoryCheckWhereInput
  }

  export type InboundRecordListRelationFilter = {
    every?: InboundRecordWhereInput
    some?: InboundRecordWhereInput
    none?: InboundRecordWhereInput
  }

  export type OutboundRecordListRelationFilter = {
    every?: OutboundRecordWhereInput
    some?: OutboundRecordWhereInput
    none?: OutboundRecordWhereInput
  }

  export type InventoryCheckOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InboundRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutboundRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicineOrderByRelevanceInput = {
    fields: MedicineOrderByRelevanceFieldEnum | MedicineOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MedicineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type MedicineAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type MedicineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type MedicineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type MedicineSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MedicineScalarRelationFilter = {
    is?: MedicineWhereInput
    isNot?: MedicineWhereInput
  }

  export type InventoryCheckCountOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    checkedStock?: SortOrder
    checkDate?: SortOrder
  }

  export type InventoryCheckAvgOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    checkedStock?: SortOrder
  }

  export type InventoryCheckMaxOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    checkedStock?: SortOrder
    checkDate?: SortOrder
  }

  export type InventoryCheckMinOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    checkedStock?: SortOrder
    checkDate?: SortOrder
  }

  export type InventoryCheckSumOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    checkedStock?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type InboundRecordCountOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    quantity?: SortOrder
    inboundDate?: SortOrder
  }

  export type InboundRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    quantity?: SortOrder
  }

  export type InboundRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    quantity?: SortOrder
    inboundDate?: SortOrder
  }

  export type InboundRecordMinOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    quantity?: SortOrder
    inboundDate?: SortOrder
  }

  export type InboundRecordSumOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    quantity?: SortOrder
  }

  export type OutboundRecordCountOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    quantity?: SortOrder
    outboundDate?: SortOrder
  }

  export type OutboundRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    quantity?: SortOrder
  }

  export type OutboundRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    quantity?: SortOrder
    outboundDate?: SortOrder
  }

  export type OutboundRecordMinOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    quantity?: SortOrder
    outboundDate?: SortOrder
  }

  export type OutboundRecordSumOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    quantity?: SortOrder
  }

  export type InventoryCheckCreateNestedManyWithoutMedicineInput = {
    create?: XOR<InventoryCheckCreateWithoutMedicineInput, InventoryCheckUncheckedCreateWithoutMedicineInput> | InventoryCheckCreateWithoutMedicineInput[] | InventoryCheckUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: InventoryCheckCreateOrConnectWithoutMedicineInput | InventoryCheckCreateOrConnectWithoutMedicineInput[]
    createMany?: InventoryCheckCreateManyMedicineInputEnvelope
    connect?: InventoryCheckWhereUniqueInput | InventoryCheckWhereUniqueInput[]
  }

  export type InboundRecordCreateNestedManyWithoutMedicineInput = {
    create?: XOR<InboundRecordCreateWithoutMedicineInput, InboundRecordUncheckedCreateWithoutMedicineInput> | InboundRecordCreateWithoutMedicineInput[] | InboundRecordUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: InboundRecordCreateOrConnectWithoutMedicineInput | InboundRecordCreateOrConnectWithoutMedicineInput[]
    createMany?: InboundRecordCreateManyMedicineInputEnvelope
    connect?: InboundRecordWhereUniqueInput | InboundRecordWhereUniqueInput[]
  }

  export type OutboundRecordCreateNestedManyWithoutMedicineInput = {
    create?: XOR<OutboundRecordCreateWithoutMedicineInput, OutboundRecordUncheckedCreateWithoutMedicineInput> | OutboundRecordCreateWithoutMedicineInput[] | OutboundRecordUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: OutboundRecordCreateOrConnectWithoutMedicineInput | OutboundRecordCreateOrConnectWithoutMedicineInput[]
    createMany?: OutboundRecordCreateManyMedicineInputEnvelope
    connect?: OutboundRecordWhereUniqueInput | OutboundRecordWhereUniqueInput[]
  }

  export type InventoryCheckUncheckedCreateNestedManyWithoutMedicineInput = {
    create?: XOR<InventoryCheckCreateWithoutMedicineInput, InventoryCheckUncheckedCreateWithoutMedicineInput> | InventoryCheckCreateWithoutMedicineInput[] | InventoryCheckUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: InventoryCheckCreateOrConnectWithoutMedicineInput | InventoryCheckCreateOrConnectWithoutMedicineInput[]
    createMany?: InventoryCheckCreateManyMedicineInputEnvelope
    connect?: InventoryCheckWhereUniqueInput | InventoryCheckWhereUniqueInput[]
  }

  export type InboundRecordUncheckedCreateNestedManyWithoutMedicineInput = {
    create?: XOR<InboundRecordCreateWithoutMedicineInput, InboundRecordUncheckedCreateWithoutMedicineInput> | InboundRecordCreateWithoutMedicineInput[] | InboundRecordUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: InboundRecordCreateOrConnectWithoutMedicineInput | InboundRecordCreateOrConnectWithoutMedicineInput[]
    createMany?: InboundRecordCreateManyMedicineInputEnvelope
    connect?: InboundRecordWhereUniqueInput | InboundRecordWhereUniqueInput[]
  }

  export type OutboundRecordUncheckedCreateNestedManyWithoutMedicineInput = {
    create?: XOR<OutboundRecordCreateWithoutMedicineInput, OutboundRecordUncheckedCreateWithoutMedicineInput> | OutboundRecordCreateWithoutMedicineInput[] | OutboundRecordUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: OutboundRecordCreateOrConnectWithoutMedicineInput | OutboundRecordCreateOrConnectWithoutMedicineInput[]
    createMany?: OutboundRecordCreateManyMedicineInputEnvelope
    connect?: OutboundRecordWhereUniqueInput | OutboundRecordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InventoryCheckUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<InventoryCheckCreateWithoutMedicineInput, InventoryCheckUncheckedCreateWithoutMedicineInput> | InventoryCheckCreateWithoutMedicineInput[] | InventoryCheckUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: InventoryCheckCreateOrConnectWithoutMedicineInput | InventoryCheckCreateOrConnectWithoutMedicineInput[]
    upsert?: InventoryCheckUpsertWithWhereUniqueWithoutMedicineInput | InventoryCheckUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: InventoryCheckCreateManyMedicineInputEnvelope
    set?: InventoryCheckWhereUniqueInput | InventoryCheckWhereUniqueInput[]
    disconnect?: InventoryCheckWhereUniqueInput | InventoryCheckWhereUniqueInput[]
    delete?: InventoryCheckWhereUniqueInput | InventoryCheckWhereUniqueInput[]
    connect?: InventoryCheckWhereUniqueInput | InventoryCheckWhereUniqueInput[]
    update?: InventoryCheckUpdateWithWhereUniqueWithoutMedicineInput | InventoryCheckUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: InventoryCheckUpdateManyWithWhereWithoutMedicineInput | InventoryCheckUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: InventoryCheckScalarWhereInput | InventoryCheckScalarWhereInput[]
  }

  export type InboundRecordUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<InboundRecordCreateWithoutMedicineInput, InboundRecordUncheckedCreateWithoutMedicineInput> | InboundRecordCreateWithoutMedicineInput[] | InboundRecordUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: InboundRecordCreateOrConnectWithoutMedicineInput | InboundRecordCreateOrConnectWithoutMedicineInput[]
    upsert?: InboundRecordUpsertWithWhereUniqueWithoutMedicineInput | InboundRecordUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: InboundRecordCreateManyMedicineInputEnvelope
    set?: InboundRecordWhereUniqueInput | InboundRecordWhereUniqueInput[]
    disconnect?: InboundRecordWhereUniqueInput | InboundRecordWhereUniqueInput[]
    delete?: InboundRecordWhereUniqueInput | InboundRecordWhereUniqueInput[]
    connect?: InboundRecordWhereUniqueInput | InboundRecordWhereUniqueInput[]
    update?: InboundRecordUpdateWithWhereUniqueWithoutMedicineInput | InboundRecordUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: InboundRecordUpdateManyWithWhereWithoutMedicineInput | InboundRecordUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: InboundRecordScalarWhereInput | InboundRecordScalarWhereInput[]
  }

  export type OutboundRecordUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<OutboundRecordCreateWithoutMedicineInput, OutboundRecordUncheckedCreateWithoutMedicineInput> | OutboundRecordCreateWithoutMedicineInput[] | OutboundRecordUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: OutboundRecordCreateOrConnectWithoutMedicineInput | OutboundRecordCreateOrConnectWithoutMedicineInput[]
    upsert?: OutboundRecordUpsertWithWhereUniqueWithoutMedicineInput | OutboundRecordUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: OutboundRecordCreateManyMedicineInputEnvelope
    set?: OutboundRecordWhereUniqueInput | OutboundRecordWhereUniqueInput[]
    disconnect?: OutboundRecordWhereUniqueInput | OutboundRecordWhereUniqueInput[]
    delete?: OutboundRecordWhereUniqueInput | OutboundRecordWhereUniqueInput[]
    connect?: OutboundRecordWhereUniqueInput | OutboundRecordWhereUniqueInput[]
    update?: OutboundRecordUpdateWithWhereUniqueWithoutMedicineInput | OutboundRecordUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: OutboundRecordUpdateManyWithWhereWithoutMedicineInput | OutboundRecordUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: OutboundRecordScalarWhereInput | OutboundRecordScalarWhereInput[]
  }

  export type InventoryCheckUncheckedUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<InventoryCheckCreateWithoutMedicineInput, InventoryCheckUncheckedCreateWithoutMedicineInput> | InventoryCheckCreateWithoutMedicineInput[] | InventoryCheckUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: InventoryCheckCreateOrConnectWithoutMedicineInput | InventoryCheckCreateOrConnectWithoutMedicineInput[]
    upsert?: InventoryCheckUpsertWithWhereUniqueWithoutMedicineInput | InventoryCheckUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: InventoryCheckCreateManyMedicineInputEnvelope
    set?: InventoryCheckWhereUniqueInput | InventoryCheckWhereUniqueInput[]
    disconnect?: InventoryCheckWhereUniqueInput | InventoryCheckWhereUniqueInput[]
    delete?: InventoryCheckWhereUniqueInput | InventoryCheckWhereUniqueInput[]
    connect?: InventoryCheckWhereUniqueInput | InventoryCheckWhereUniqueInput[]
    update?: InventoryCheckUpdateWithWhereUniqueWithoutMedicineInput | InventoryCheckUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: InventoryCheckUpdateManyWithWhereWithoutMedicineInput | InventoryCheckUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: InventoryCheckScalarWhereInput | InventoryCheckScalarWhereInput[]
  }

  export type InboundRecordUncheckedUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<InboundRecordCreateWithoutMedicineInput, InboundRecordUncheckedCreateWithoutMedicineInput> | InboundRecordCreateWithoutMedicineInput[] | InboundRecordUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: InboundRecordCreateOrConnectWithoutMedicineInput | InboundRecordCreateOrConnectWithoutMedicineInput[]
    upsert?: InboundRecordUpsertWithWhereUniqueWithoutMedicineInput | InboundRecordUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: InboundRecordCreateManyMedicineInputEnvelope
    set?: InboundRecordWhereUniqueInput | InboundRecordWhereUniqueInput[]
    disconnect?: InboundRecordWhereUniqueInput | InboundRecordWhereUniqueInput[]
    delete?: InboundRecordWhereUniqueInput | InboundRecordWhereUniqueInput[]
    connect?: InboundRecordWhereUniqueInput | InboundRecordWhereUniqueInput[]
    update?: InboundRecordUpdateWithWhereUniqueWithoutMedicineInput | InboundRecordUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: InboundRecordUpdateManyWithWhereWithoutMedicineInput | InboundRecordUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: InboundRecordScalarWhereInput | InboundRecordScalarWhereInput[]
  }

  export type OutboundRecordUncheckedUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<OutboundRecordCreateWithoutMedicineInput, OutboundRecordUncheckedCreateWithoutMedicineInput> | OutboundRecordCreateWithoutMedicineInput[] | OutboundRecordUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: OutboundRecordCreateOrConnectWithoutMedicineInput | OutboundRecordCreateOrConnectWithoutMedicineInput[]
    upsert?: OutboundRecordUpsertWithWhereUniqueWithoutMedicineInput | OutboundRecordUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: OutboundRecordCreateManyMedicineInputEnvelope
    set?: OutboundRecordWhereUniqueInput | OutboundRecordWhereUniqueInput[]
    disconnect?: OutboundRecordWhereUniqueInput | OutboundRecordWhereUniqueInput[]
    delete?: OutboundRecordWhereUniqueInput | OutboundRecordWhereUniqueInput[]
    connect?: OutboundRecordWhereUniqueInput | OutboundRecordWhereUniqueInput[]
    update?: OutboundRecordUpdateWithWhereUniqueWithoutMedicineInput | OutboundRecordUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: OutboundRecordUpdateManyWithWhereWithoutMedicineInput | OutboundRecordUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: OutboundRecordScalarWhereInput | OutboundRecordScalarWhereInput[]
  }

  export type MedicineCreateNestedOneWithoutInventoryChecksInput = {
    create?: XOR<MedicineCreateWithoutInventoryChecksInput, MedicineUncheckedCreateWithoutInventoryChecksInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutInventoryChecksInput
    connect?: MedicineWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MedicineUpdateOneRequiredWithoutInventoryChecksNestedInput = {
    create?: XOR<MedicineCreateWithoutInventoryChecksInput, MedicineUncheckedCreateWithoutInventoryChecksInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutInventoryChecksInput
    upsert?: MedicineUpsertWithoutInventoryChecksInput
    connect?: MedicineWhereUniqueInput
    update?: XOR<XOR<MedicineUpdateToOneWithWhereWithoutInventoryChecksInput, MedicineUpdateWithoutInventoryChecksInput>, MedicineUncheckedUpdateWithoutInventoryChecksInput>
  }

  export type MedicineCreateNestedOneWithoutInboundRecordsInput = {
    create?: XOR<MedicineCreateWithoutInboundRecordsInput, MedicineUncheckedCreateWithoutInboundRecordsInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutInboundRecordsInput
    connect?: MedicineWhereUniqueInput
  }

  export type MedicineUpdateOneRequiredWithoutInboundRecordsNestedInput = {
    create?: XOR<MedicineCreateWithoutInboundRecordsInput, MedicineUncheckedCreateWithoutInboundRecordsInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutInboundRecordsInput
    upsert?: MedicineUpsertWithoutInboundRecordsInput
    connect?: MedicineWhereUniqueInput
    update?: XOR<XOR<MedicineUpdateToOneWithWhereWithoutInboundRecordsInput, MedicineUpdateWithoutInboundRecordsInput>, MedicineUncheckedUpdateWithoutInboundRecordsInput>
  }

  export type MedicineCreateNestedOneWithoutOutboundRecordsInput = {
    create?: XOR<MedicineCreateWithoutOutboundRecordsInput, MedicineUncheckedCreateWithoutOutboundRecordsInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutOutboundRecordsInput
    connect?: MedicineWhereUniqueInput
  }

  export type MedicineUpdateOneRequiredWithoutOutboundRecordsNestedInput = {
    create?: XOR<MedicineCreateWithoutOutboundRecordsInput, MedicineUncheckedCreateWithoutOutboundRecordsInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutOutboundRecordsInput
    upsert?: MedicineUpsertWithoutOutboundRecordsInput
    connect?: MedicineWhereUniqueInput
    update?: XOR<XOR<MedicineUpdateToOneWithWhereWithoutOutboundRecordsInput, MedicineUpdateWithoutOutboundRecordsInput>, MedicineUncheckedUpdateWithoutOutboundRecordsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type InventoryCheckCreateWithoutMedicineInput = {
    checkedStock: number
    checkDate?: Date | string
  }

  export type InventoryCheckUncheckedCreateWithoutMedicineInput = {
    id?: number
    checkedStock: number
    checkDate?: Date | string
  }

  export type InventoryCheckCreateOrConnectWithoutMedicineInput = {
    where: InventoryCheckWhereUniqueInput
    create: XOR<InventoryCheckCreateWithoutMedicineInput, InventoryCheckUncheckedCreateWithoutMedicineInput>
  }

  export type InventoryCheckCreateManyMedicineInputEnvelope = {
    data: InventoryCheckCreateManyMedicineInput | InventoryCheckCreateManyMedicineInput[]
    skipDuplicates?: boolean
  }

  export type InboundRecordCreateWithoutMedicineInput = {
    quantity: number
    inboundDate?: Date | string
  }

  export type InboundRecordUncheckedCreateWithoutMedicineInput = {
    id?: number
    quantity: number
    inboundDate?: Date | string
  }

  export type InboundRecordCreateOrConnectWithoutMedicineInput = {
    where: InboundRecordWhereUniqueInput
    create: XOR<InboundRecordCreateWithoutMedicineInput, InboundRecordUncheckedCreateWithoutMedicineInput>
  }

  export type InboundRecordCreateManyMedicineInputEnvelope = {
    data: InboundRecordCreateManyMedicineInput | InboundRecordCreateManyMedicineInput[]
    skipDuplicates?: boolean
  }

  export type OutboundRecordCreateWithoutMedicineInput = {
    quantity: number
    outboundDate?: Date | string
  }

  export type OutboundRecordUncheckedCreateWithoutMedicineInput = {
    id?: number
    quantity: number
    outboundDate?: Date | string
  }

  export type OutboundRecordCreateOrConnectWithoutMedicineInput = {
    where: OutboundRecordWhereUniqueInput
    create: XOR<OutboundRecordCreateWithoutMedicineInput, OutboundRecordUncheckedCreateWithoutMedicineInput>
  }

  export type OutboundRecordCreateManyMedicineInputEnvelope = {
    data: OutboundRecordCreateManyMedicineInput | OutboundRecordCreateManyMedicineInput[]
    skipDuplicates?: boolean
  }

  export type InventoryCheckUpsertWithWhereUniqueWithoutMedicineInput = {
    where: InventoryCheckWhereUniqueInput
    update: XOR<InventoryCheckUpdateWithoutMedicineInput, InventoryCheckUncheckedUpdateWithoutMedicineInput>
    create: XOR<InventoryCheckCreateWithoutMedicineInput, InventoryCheckUncheckedCreateWithoutMedicineInput>
  }

  export type InventoryCheckUpdateWithWhereUniqueWithoutMedicineInput = {
    where: InventoryCheckWhereUniqueInput
    data: XOR<InventoryCheckUpdateWithoutMedicineInput, InventoryCheckUncheckedUpdateWithoutMedicineInput>
  }

  export type InventoryCheckUpdateManyWithWhereWithoutMedicineInput = {
    where: InventoryCheckScalarWhereInput
    data: XOR<InventoryCheckUpdateManyMutationInput, InventoryCheckUncheckedUpdateManyWithoutMedicineInput>
  }

  export type InventoryCheckScalarWhereInput = {
    AND?: InventoryCheckScalarWhereInput | InventoryCheckScalarWhereInput[]
    OR?: InventoryCheckScalarWhereInput[]
    NOT?: InventoryCheckScalarWhereInput | InventoryCheckScalarWhereInput[]
    id?: IntFilter<"InventoryCheck"> | number
    medicineId?: IntFilter<"InventoryCheck"> | number
    checkedStock?: IntFilter<"InventoryCheck"> | number
    checkDate?: DateTimeFilter<"InventoryCheck"> | Date | string
  }

  export type InboundRecordUpsertWithWhereUniqueWithoutMedicineInput = {
    where: InboundRecordWhereUniqueInput
    update: XOR<InboundRecordUpdateWithoutMedicineInput, InboundRecordUncheckedUpdateWithoutMedicineInput>
    create: XOR<InboundRecordCreateWithoutMedicineInput, InboundRecordUncheckedCreateWithoutMedicineInput>
  }

  export type InboundRecordUpdateWithWhereUniqueWithoutMedicineInput = {
    where: InboundRecordWhereUniqueInput
    data: XOR<InboundRecordUpdateWithoutMedicineInput, InboundRecordUncheckedUpdateWithoutMedicineInput>
  }

  export type InboundRecordUpdateManyWithWhereWithoutMedicineInput = {
    where: InboundRecordScalarWhereInput
    data: XOR<InboundRecordUpdateManyMutationInput, InboundRecordUncheckedUpdateManyWithoutMedicineInput>
  }

  export type InboundRecordScalarWhereInput = {
    AND?: InboundRecordScalarWhereInput | InboundRecordScalarWhereInput[]
    OR?: InboundRecordScalarWhereInput[]
    NOT?: InboundRecordScalarWhereInput | InboundRecordScalarWhereInput[]
    id?: IntFilter<"InboundRecord"> | number
    medicineId?: IntFilter<"InboundRecord"> | number
    quantity?: IntFilter<"InboundRecord"> | number
    inboundDate?: DateTimeFilter<"InboundRecord"> | Date | string
  }

  export type OutboundRecordUpsertWithWhereUniqueWithoutMedicineInput = {
    where: OutboundRecordWhereUniqueInput
    update: XOR<OutboundRecordUpdateWithoutMedicineInput, OutboundRecordUncheckedUpdateWithoutMedicineInput>
    create: XOR<OutboundRecordCreateWithoutMedicineInput, OutboundRecordUncheckedCreateWithoutMedicineInput>
  }

  export type OutboundRecordUpdateWithWhereUniqueWithoutMedicineInput = {
    where: OutboundRecordWhereUniqueInput
    data: XOR<OutboundRecordUpdateWithoutMedicineInput, OutboundRecordUncheckedUpdateWithoutMedicineInput>
  }

  export type OutboundRecordUpdateManyWithWhereWithoutMedicineInput = {
    where: OutboundRecordScalarWhereInput
    data: XOR<OutboundRecordUpdateManyMutationInput, OutboundRecordUncheckedUpdateManyWithoutMedicineInput>
  }

  export type OutboundRecordScalarWhereInput = {
    AND?: OutboundRecordScalarWhereInput | OutboundRecordScalarWhereInput[]
    OR?: OutboundRecordScalarWhereInput[]
    NOT?: OutboundRecordScalarWhereInput | OutboundRecordScalarWhereInput[]
    id?: IntFilter<"OutboundRecord"> | number
    medicineId?: IntFilter<"OutboundRecord"> | number
    quantity?: IntFilter<"OutboundRecord"> | number
    outboundDate?: DateTimeFilter<"OutboundRecord"> | Date | string
  }

  export type MedicineCreateWithoutInventoryChecksInput = {
    name: string
    price: number
    stock: number
    inboundRecords?: InboundRecordCreateNestedManyWithoutMedicineInput
    outboundRecords?: OutboundRecordCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateWithoutInventoryChecksInput = {
    id?: number
    name: string
    price: number
    stock: number
    inboundRecords?: InboundRecordUncheckedCreateNestedManyWithoutMedicineInput
    outboundRecords?: OutboundRecordUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineCreateOrConnectWithoutInventoryChecksInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutInventoryChecksInput, MedicineUncheckedCreateWithoutInventoryChecksInput>
  }

  export type MedicineUpsertWithoutInventoryChecksInput = {
    update: XOR<MedicineUpdateWithoutInventoryChecksInput, MedicineUncheckedUpdateWithoutInventoryChecksInput>
    create: XOR<MedicineCreateWithoutInventoryChecksInput, MedicineUncheckedCreateWithoutInventoryChecksInput>
    where?: MedicineWhereInput
  }

  export type MedicineUpdateToOneWithWhereWithoutInventoryChecksInput = {
    where?: MedicineWhereInput
    data: XOR<MedicineUpdateWithoutInventoryChecksInput, MedicineUncheckedUpdateWithoutInventoryChecksInput>
  }

  export type MedicineUpdateWithoutInventoryChecksInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    inboundRecords?: InboundRecordUpdateManyWithoutMedicineNestedInput
    outboundRecords?: OutboundRecordUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateWithoutInventoryChecksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    inboundRecords?: InboundRecordUncheckedUpdateManyWithoutMedicineNestedInput
    outboundRecords?: OutboundRecordUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineCreateWithoutInboundRecordsInput = {
    name: string
    price: number
    stock: number
    inventoryChecks?: InventoryCheckCreateNestedManyWithoutMedicineInput
    outboundRecords?: OutboundRecordCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateWithoutInboundRecordsInput = {
    id?: number
    name: string
    price: number
    stock: number
    inventoryChecks?: InventoryCheckUncheckedCreateNestedManyWithoutMedicineInput
    outboundRecords?: OutboundRecordUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineCreateOrConnectWithoutInboundRecordsInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutInboundRecordsInput, MedicineUncheckedCreateWithoutInboundRecordsInput>
  }

  export type MedicineUpsertWithoutInboundRecordsInput = {
    update: XOR<MedicineUpdateWithoutInboundRecordsInput, MedicineUncheckedUpdateWithoutInboundRecordsInput>
    create: XOR<MedicineCreateWithoutInboundRecordsInput, MedicineUncheckedCreateWithoutInboundRecordsInput>
    where?: MedicineWhereInput
  }

  export type MedicineUpdateToOneWithWhereWithoutInboundRecordsInput = {
    where?: MedicineWhereInput
    data: XOR<MedicineUpdateWithoutInboundRecordsInput, MedicineUncheckedUpdateWithoutInboundRecordsInput>
  }

  export type MedicineUpdateWithoutInboundRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    inventoryChecks?: InventoryCheckUpdateManyWithoutMedicineNestedInput
    outboundRecords?: OutboundRecordUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateWithoutInboundRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    inventoryChecks?: InventoryCheckUncheckedUpdateManyWithoutMedicineNestedInput
    outboundRecords?: OutboundRecordUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineCreateWithoutOutboundRecordsInput = {
    name: string
    price: number
    stock: number
    inventoryChecks?: InventoryCheckCreateNestedManyWithoutMedicineInput
    inboundRecords?: InboundRecordCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateWithoutOutboundRecordsInput = {
    id?: number
    name: string
    price: number
    stock: number
    inventoryChecks?: InventoryCheckUncheckedCreateNestedManyWithoutMedicineInput
    inboundRecords?: InboundRecordUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineCreateOrConnectWithoutOutboundRecordsInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutOutboundRecordsInput, MedicineUncheckedCreateWithoutOutboundRecordsInput>
  }

  export type MedicineUpsertWithoutOutboundRecordsInput = {
    update: XOR<MedicineUpdateWithoutOutboundRecordsInput, MedicineUncheckedUpdateWithoutOutboundRecordsInput>
    create: XOR<MedicineCreateWithoutOutboundRecordsInput, MedicineUncheckedCreateWithoutOutboundRecordsInput>
    where?: MedicineWhereInput
  }

  export type MedicineUpdateToOneWithWhereWithoutOutboundRecordsInput = {
    where?: MedicineWhereInput
    data: XOR<MedicineUpdateWithoutOutboundRecordsInput, MedicineUncheckedUpdateWithoutOutboundRecordsInput>
  }

  export type MedicineUpdateWithoutOutboundRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    inventoryChecks?: InventoryCheckUpdateManyWithoutMedicineNestedInput
    inboundRecords?: InboundRecordUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateWithoutOutboundRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    inventoryChecks?: InventoryCheckUncheckedUpdateManyWithoutMedicineNestedInput
    inboundRecords?: InboundRecordUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type InventoryCheckCreateManyMedicineInput = {
    id?: number
    checkedStock: number
    checkDate?: Date | string
  }

  export type InboundRecordCreateManyMedicineInput = {
    id?: number
    quantity: number
    inboundDate?: Date | string
  }

  export type OutboundRecordCreateManyMedicineInput = {
    id?: number
    quantity: number
    outboundDate?: Date | string
  }

  export type InventoryCheckUpdateWithoutMedicineInput = {
    checkedStock?: IntFieldUpdateOperationsInput | number
    checkDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCheckUncheckedUpdateWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkedStock?: IntFieldUpdateOperationsInput | number
    checkDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCheckUncheckedUpdateManyWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkedStock?: IntFieldUpdateOperationsInput | number
    checkDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundRecordUpdateWithoutMedicineInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    inboundDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundRecordUncheckedUpdateWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    inboundDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboundRecordUncheckedUpdateManyWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    inboundDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutboundRecordUpdateWithoutMedicineInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    outboundDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutboundRecordUncheckedUpdateWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    outboundDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutboundRecordUncheckedUpdateManyWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    outboundDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}