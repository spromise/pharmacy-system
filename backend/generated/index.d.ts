
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
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model Prescription
 * 
 */
export type Prescription = $Result.DefaultSelection<Prisma.$PrescriptionPayload>
/**
 * Model PrescriptionDetail
 * 
 */
export type PrescriptionDetail = $Result.DefaultSelection<Prisma.$PrescriptionDetailPayload>
/**
 * Model Drug
 * 
 */
export type Drug = $Result.DefaultSelection<Prisma.$DrugPayload>
/**
 * Model Inventory
 * 
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>
/**
 * Model Inbound
 * 
 */
export type Inbound = $Result.DefaultSelection<Prisma.$InboundPayload>
/**
 * Model Outbound
 * 
 */
export type Outbound = $Result.DefaultSelection<Prisma.$OutboundPayload>
/**
 * Model PriceHistory
 * 
 */
export type PriceHistory = $Result.DefaultSelection<Prisma.$PriceHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  男: '男',
  女: '女'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const PrescriptionStatus: {
  有效: '有效',
  已作废: '已作废',
  已审核: '已审核'
};

export type PrescriptionStatus = (typeof PrescriptionStatus)[keyof typeof PrescriptionStatus]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type PrescriptionStatus = $Enums.PrescriptionStatus

export const PrescriptionStatus: typeof $Enums.PrescriptionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Patients
 * const patients = await prisma.patient.findMany()
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
   * // Fetch zero or more Patients
   * const patients = await prisma.patient.findMany()
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
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prescription`: Exposes CRUD operations for the **Prescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prescriptions
    * const prescriptions = await prisma.prescription.findMany()
    * ```
    */
  get prescription(): Prisma.PrescriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prescriptionDetail`: Exposes CRUD operations for the **PrescriptionDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrescriptionDetails
    * const prescriptionDetails = await prisma.prescriptionDetail.findMany()
    * ```
    */
  get prescriptionDetail(): Prisma.PrescriptionDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drug`: Exposes CRUD operations for the **Drug** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drugs
    * const drugs = await prisma.drug.findMany()
    * ```
    */
  get drug(): Prisma.DrugDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inbound`: Exposes CRUD operations for the **Inbound** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inbounds
    * const inbounds = await prisma.inbound.findMany()
    * ```
    */
  get inbound(): Prisma.InboundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outbound`: Exposes CRUD operations for the **Outbound** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outbounds
    * const outbounds = await prisma.outbound.findMany()
    * ```
    */
  get outbound(): Prisma.OutboundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.priceHistory`: Exposes CRUD operations for the **PriceHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceHistories
    * const priceHistories = await prisma.priceHistory.findMany()
    * ```
    */
  get priceHistory(): Prisma.PriceHistoryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Patient: 'Patient',
    Doctor: 'Doctor',
    Prescription: 'Prescription',
    PrescriptionDetail: 'PrescriptionDetail',
    Drug: 'Drug',
    Inventory: 'Inventory',
    Inbound: 'Inbound',
    Outbound: 'Outbound',
    PriceHistory: 'PriceHistory'
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
      modelProps: "patient" | "doctor" | "prescription" | "prescriptionDetail" | "drug" | "inventory" | "inbound" | "outbound" | "priceHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      Prescription: {
        payload: Prisma.$PrescriptionPayload<ExtArgs>
        fields: Prisma.PrescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrescriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrescriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findFirst: {
            args: Prisma.PrescriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrescriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findMany: {
            args: Prisma.PrescriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          create: {
            args: Prisma.PrescriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          createMany: {
            args: Prisma.PrescriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PrescriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          update: {
            args: Prisma.PrescriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          deleteMany: {
            args: Prisma.PrescriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrescriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PrescriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          aggregate: {
            args: Prisma.PrescriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrescription>
          }
          groupBy: {
            args: Prisma.PrescriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrescriptionCountArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionCountAggregateOutputType> | number
          }
        }
      }
      PrescriptionDetail: {
        payload: Prisma.$PrescriptionDetailPayload<ExtArgs>
        fields: Prisma.PrescriptionDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrescriptionDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrescriptionDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionDetailPayload>
          }
          findFirst: {
            args: Prisma.PrescriptionDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrescriptionDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionDetailPayload>
          }
          findMany: {
            args: Prisma.PrescriptionDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionDetailPayload>[]
          }
          create: {
            args: Prisma.PrescriptionDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionDetailPayload>
          }
          createMany: {
            args: Prisma.PrescriptionDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PrescriptionDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionDetailPayload>
          }
          update: {
            args: Prisma.PrescriptionDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionDetailPayload>
          }
          deleteMany: {
            args: Prisma.PrescriptionDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrescriptionDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PrescriptionDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionDetailPayload>
          }
          aggregate: {
            args: Prisma.PrescriptionDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrescriptionDetail>
          }
          groupBy: {
            args: Prisma.PrescriptionDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrescriptionDetailCountArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionDetailCountAggregateOutputType> | number
          }
        }
      }
      Drug: {
        payload: Prisma.$DrugPayload<ExtArgs>
        fields: Prisma.DrugFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrugFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrugPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrugFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrugPayload>
          }
          findFirst: {
            args: Prisma.DrugFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrugPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrugFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrugPayload>
          }
          findMany: {
            args: Prisma.DrugFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrugPayload>[]
          }
          create: {
            args: Prisma.DrugCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrugPayload>
          }
          createMany: {
            args: Prisma.DrugCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DrugDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrugPayload>
          }
          update: {
            args: Prisma.DrugUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrugPayload>
          }
          deleteMany: {
            args: Prisma.DrugDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrugUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DrugUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrugPayload>
          }
          aggregate: {
            args: Prisma.DrugAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrug>
          }
          groupBy: {
            args: Prisma.DrugGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrugGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrugCountArgs<ExtArgs>
            result: $Utils.Optional<DrugCountAggregateOutputType> | number
          }
        }
      }
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>
        fields: Prisma.InventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      Inbound: {
        payload: Prisma.$InboundPayload<ExtArgs>
        fields: Prisma.InboundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InboundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InboundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundPayload>
          }
          findFirst: {
            args: Prisma.InboundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InboundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundPayload>
          }
          findMany: {
            args: Prisma.InboundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundPayload>[]
          }
          create: {
            args: Prisma.InboundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundPayload>
          }
          createMany: {
            args: Prisma.InboundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InboundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundPayload>
          }
          update: {
            args: Prisma.InboundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundPayload>
          }
          deleteMany: {
            args: Prisma.InboundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InboundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InboundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboundPayload>
          }
          aggregate: {
            args: Prisma.InboundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInbound>
          }
          groupBy: {
            args: Prisma.InboundGroupByArgs<ExtArgs>
            result: $Utils.Optional<InboundGroupByOutputType>[]
          }
          count: {
            args: Prisma.InboundCountArgs<ExtArgs>
            result: $Utils.Optional<InboundCountAggregateOutputType> | number
          }
        }
      }
      Outbound: {
        payload: Prisma.$OutboundPayload<ExtArgs>
        fields: Prisma.OutboundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutboundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutboundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundPayload>
          }
          findFirst: {
            args: Prisma.OutboundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutboundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundPayload>
          }
          findMany: {
            args: Prisma.OutboundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundPayload>[]
          }
          create: {
            args: Prisma.OutboundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundPayload>
          }
          createMany: {
            args: Prisma.OutboundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OutboundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundPayload>
          }
          update: {
            args: Prisma.OutboundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundPayload>
          }
          deleteMany: {
            args: Prisma.OutboundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutboundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OutboundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboundPayload>
          }
          aggregate: {
            args: Prisma.OutboundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutbound>
          }
          groupBy: {
            args: Prisma.OutboundGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutboundGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutboundCountArgs<ExtArgs>
            result: $Utils.Optional<OutboundCountAggregateOutputType> | number
          }
        }
      }
      PriceHistory: {
        payload: Prisma.$PriceHistoryPayload<ExtArgs>
        fields: Prisma.PriceHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          findFirst: {
            args: Prisma.PriceHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          findMany: {
            args: Prisma.PriceHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>[]
          }
          create: {
            args: Prisma.PriceHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          createMany: {
            args: Prisma.PriceHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PriceHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          update: {
            args: Prisma.PriceHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PriceHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PriceHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceHistoryPayload>
          }
          aggregate: {
            args: Prisma.PriceHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceHistory>
          }
          groupBy: {
            args: Prisma.PriceHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PriceHistoryCountAggregateOutputType> | number
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
    patient?: PatientOmit
    doctor?: DoctorOmit
    prescription?: PrescriptionOmit
    prescriptionDetail?: PrescriptionDetailOmit
    drug?: DrugOmit
    inventory?: InventoryOmit
    inbound?: InboundOmit
    outbound?: OutboundOmit
    priceHistory?: PriceHistoryOmit
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
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    prescriptions: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescriptions?: boolean | PatientCountOutputTypeCountPrescriptionsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    prescriptions: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescriptions?: boolean | DoctorCountOutputTypeCountPrescriptionsArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }


  /**
   * Count Type PrescriptionCountOutputType
   */

  export type PrescriptionCountOutputType = {
    prescriptionDetails: number
    outbounds: number
  }

  export type PrescriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescriptionDetails?: boolean | PrescriptionCountOutputTypeCountPrescriptionDetailsArgs
    outbounds?: boolean | PrescriptionCountOutputTypeCountOutboundsArgs
  }

  // Custom InputTypes
  /**
   * PrescriptionCountOutputType without action
   */
  export type PrescriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionCountOutputType
     */
    select?: PrescriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrescriptionCountOutputType without action
   */
  export type PrescriptionCountOutputTypeCountPrescriptionDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionDetailWhereInput
  }

  /**
   * PrescriptionCountOutputType without action
   */
  export type PrescriptionCountOutputTypeCountOutboundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutboundWhereInput
  }


  /**
   * Count Type DrugCountOutputType
   */

  export type DrugCountOutputType = {
    inventories: number
    inbounds: number
    outbounds: number
    priceHistories: number
    prescriptionDetails: number
  }

  export type DrugCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventories?: boolean | DrugCountOutputTypeCountInventoriesArgs
    inbounds?: boolean | DrugCountOutputTypeCountInboundsArgs
    outbounds?: boolean | DrugCountOutputTypeCountOutboundsArgs
    priceHistories?: boolean | DrugCountOutputTypeCountPriceHistoriesArgs
    prescriptionDetails?: boolean | DrugCountOutputTypeCountPrescriptionDetailsArgs
  }

  // Custom InputTypes
  /**
   * DrugCountOutputType without action
   */
  export type DrugCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrugCountOutputType
     */
    select?: DrugCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DrugCountOutputType without action
   */
  export type DrugCountOutputTypeCountInventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }

  /**
   * DrugCountOutputType without action
   */
  export type DrugCountOutputTypeCountInboundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InboundWhereInput
  }

  /**
   * DrugCountOutputType without action
   */
  export type DrugCountOutputTypeCountOutboundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutboundWhereInput
  }

  /**
   * DrugCountOutputType without action
   */
  export type DrugCountOutputTypeCountPriceHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceHistoryWhereInput
  }

  /**
   * DrugCountOutputType without action
   */
  export type DrugCountOutputTypeCountPrescriptionDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionDetailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    visit_id: string | null
    name: string | null
    gender: $Enums.Gender | null
    contact: string | null
    first_visit_date: Date | null
    medical_history: string | null
  }

  export type PatientMaxAggregateOutputType = {
    visit_id: string | null
    name: string | null
    gender: $Enums.Gender | null
    contact: string | null
    first_visit_date: Date | null
    medical_history: string | null
  }

  export type PatientCountAggregateOutputType = {
    visit_id: number
    name: number
    gender: number
    contact: number
    first_visit_date: number
    medical_history: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    visit_id?: true
    name?: true
    gender?: true
    contact?: true
    first_visit_date?: true
    medical_history?: true
  }

  export type PatientMaxAggregateInputType = {
    visit_id?: true
    name?: true
    gender?: true
    contact?: true
    first_visit_date?: true
    medical_history?: true
  }

  export type PatientCountAggregateInputType = {
    visit_id?: true
    name?: true
    gender?: true
    contact?: true
    first_visit_date?: true
    medical_history?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    visit_id: string
    name: string
    gender: $Enums.Gender
    contact: string | null
    first_visit_date: Date
    medical_history: string | null
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    visit_id?: boolean
    name?: boolean
    gender?: boolean
    contact?: boolean
    first_visit_date?: boolean
    medical_history?: boolean
    prescriptions?: boolean | Patient$prescriptionsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>



  export type PatientSelectScalar = {
    visit_id?: boolean
    name?: boolean
    gender?: boolean
    contact?: boolean
    first_visit_date?: boolean
    medical_history?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"visit_id" | "name" | "gender" | "contact" | "first_visit_date" | "medical_history", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescriptions?: boolean | Patient$prescriptionsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      prescriptions: Prisma.$PrescriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      visit_id: string
      name: string
      gender: $Enums.Gender
      contact: string | null
      first_visit_date: Date
      medical_history: string | null
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `visit_id`
     * const patientWithVisit_idOnly = await prisma.patient.findMany({ select: { visit_id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prescriptions<T extends Patient$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly visit_id: FieldRef<"Patient", 'String'>
    readonly name: FieldRef<"Patient", 'String'>
    readonly gender: FieldRef<"Patient", 'Gender'>
    readonly contact: FieldRef<"Patient", 'String'>
    readonly first_visit_date: FieldRef<"Patient", 'DateTime'>
    readonly medical_history: FieldRef<"Patient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.prescriptions
   */
  export type Patient$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorAvgAggregateOutputType = {
    doctor_id: number | null
  }

  export type DoctorSumAggregateOutputType = {
    doctor_id: number | null
  }

  export type DoctorMinAggregateOutputType = {
    doctor_id: number | null
    name: string | null
    department: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    doctor_id: number | null
    name: string | null
    department: string | null
  }

  export type DoctorCountAggregateOutputType = {
    doctor_id: number
    name: number
    department: number
    _all: number
  }


  export type DoctorAvgAggregateInputType = {
    doctor_id?: true
  }

  export type DoctorSumAggregateInputType = {
    doctor_id?: true
  }

  export type DoctorMinAggregateInputType = {
    doctor_id?: true
    name?: true
    department?: true
  }

  export type DoctorMaxAggregateInputType = {
    doctor_id?: true
    name?: true
    department?: true
  }

  export type DoctorCountAggregateInputType = {
    doctor_id?: true
    name?: true
    department?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _avg?: DoctorAvgAggregateInputType
    _sum?: DoctorSumAggregateInputType
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    doctor_id: number
    name: string
    department: string
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    doctor_id?: boolean
    name?: boolean
    department?: boolean
    prescriptions?: boolean | Doctor$prescriptionsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>



  export type DoctorSelectScalar = {
    doctor_id?: boolean
    name?: boolean
    department?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"doctor_id" | "name" | "department", ExtArgs["result"]["doctor"]>
  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescriptions?: boolean | Doctor$prescriptionsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      prescriptions: Prisma.$PrescriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      doctor_id: number
      name: string
      department: string
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `doctor_id`
     * const doctorWithDoctor_idOnly = await prisma.doctor.findMany({ select: { doctor_id: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
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
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prescriptions<T extends Doctor$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Doctor model
   */
  interface DoctorFieldRefs {
    readonly doctor_id: FieldRef<"Doctor", 'Int'>
    readonly name: FieldRef<"Doctor", 'String'>
    readonly department: FieldRef<"Doctor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctor.prescriptions
   */
  export type Doctor$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
  }


  /**
   * Model Prescription
   */

  export type AggregatePrescription = {
    _count: PrescriptionCountAggregateOutputType | null
    _avg: PrescriptionAvgAggregateOutputType | null
    _sum: PrescriptionSumAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  export type PrescriptionAvgAggregateOutputType = {
    prescription_id: number | null
    doctor_id: number | null
    total_amount: number | null
  }

  export type PrescriptionSumAggregateOutputType = {
    prescription_id: number | null
    doctor_id: number | null
    total_amount: number | null
  }

  export type PrescriptionMinAggregateOutputType = {
    prescription_id: number | null
    patient_visit_id: string | null
    doctor_id: number | null
    create_time: Date | null
    status: $Enums.PrescriptionStatus | null
    diagnosis: string | null
    remarks: string | null
    total_amount: number | null
  }

  export type PrescriptionMaxAggregateOutputType = {
    prescription_id: number | null
    patient_visit_id: string | null
    doctor_id: number | null
    create_time: Date | null
    status: $Enums.PrescriptionStatus | null
    diagnosis: string | null
    remarks: string | null
    total_amount: number | null
  }

  export type PrescriptionCountAggregateOutputType = {
    prescription_id: number
    patient_visit_id: number
    doctor_id: number
    create_time: number
    status: number
    diagnosis: number
    remarks: number
    total_amount: number
    _all: number
  }


  export type PrescriptionAvgAggregateInputType = {
    prescription_id?: true
    doctor_id?: true
    total_amount?: true
  }

  export type PrescriptionSumAggregateInputType = {
    prescription_id?: true
    doctor_id?: true
    total_amount?: true
  }

  export type PrescriptionMinAggregateInputType = {
    prescription_id?: true
    patient_visit_id?: true
    doctor_id?: true
    create_time?: true
    status?: true
    diagnosis?: true
    remarks?: true
    total_amount?: true
  }

  export type PrescriptionMaxAggregateInputType = {
    prescription_id?: true
    patient_visit_id?: true
    doctor_id?: true
    create_time?: true
    status?: true
    diagnosis?: true
    remarks?: true
    total_amount?: true
  }

  export type PrescriptionCountAggregateInputType = {
    prescription_id?: true
    patient_visit_id?: true
    doctor_id?: true
    create_time?: true
    status?: true
    diagnosis?: true
    remarks?: true
    total_amount?: true
    _all?: true
  }

  export type PrescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescription to aggregate.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prescriptions
    **/
    _count?: true | PrescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrescriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrescriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrescriptionMaxAggregateInputType
  }

  export type GetPrescriptionAggregateType<T extends PrescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescription[P]>
      : GetScalarType<T[P], AggregatePrescription[P]>
  }




  export type PrescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithAggregationInput | PrescriptionOrderByWithAggregationInput[]
    by: PrescriptionScalarFieldEnum[] | PrescriptionScalarFieldEnum
    having?: PrescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrescriptionCountAggregateInputType | true
    _avg?: PrescriptionAvgAggregateInputType
    _sum?: PrescriptionSumAggregateInputType
    _min?: PrescriptionMinAggregateInputType
    _max?: PrescriptionMaxAggregateInputType
  }

  export type PrescriptionGroupByOutputType = {
    prescription_id: number
    patient_visit_id: string
    doctor_id: number
    create_time: Date
    status: $Enums.PrescriptionStatus
    diagnosis: string | null
    remarks: string | null
    total_amount: number
    _count: PrescriptionCountAggregateOutputType | null
    _avg: PrescriptionAvgAggregateOutputType | null
    _sum: PrescriptionSumAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  type GetPrescriptionGroupByPayload<T extends PrescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
        }
      >
    >


  export type PrescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prescription_id?: boolean
    patient_visit_id?: boolean
    doctor_id?: boolean
    create_time?: boolean
    status?: boolean
    diagnosis?: boolean
    remarks?: boolean
    total_amount?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    prescriptionDetails?: boolean | Prescription$prescriptionDetailsArgs<ExtArgs>
    outbounds?: boolean | Prescription$outboundsArgs<ExtArgs>
    _count?: boolean | PrescriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>



  export type PrescriptionSelectScalar = {
    prescription_id?: boolean
    patient_visit_id?: boolean
    doctor_id?: boolean
    create_time?: boolean
    status?: boolean
    diagnosis?: boolean
    remarks?: boolean
    total_amount?: boolean
  }

  export type PrescriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"prescription_id" | "patient_visit_id" | "doctor_id" | "create_time" | "status" | "diagnosis" | "remarks" | "total_amount", ExtArgs["result"]["prescription"]>
  export type PrescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    prescriptionDetails?: boolean | Prescription$prescriptionDetailsArgs<ExtArgs>
    outbounds?: boolean | Prescription$outboundsArgs<ExtArgs>
    _count?: boolean | PrescriptionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PrescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prescription"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
      prescriptionDetails: Prisma.$PrescriptionDetailPayload<ExtArgs>[]
      outbounds: Prisma.$OutboundPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      prescription_id: number
      patient_visit_id: string
      doctor_id: number
      create_time: Date
      status: $Enums.PrescriptionStatus
      diagnosis: string | null
      remarks: string | null
      total_amount: number
    }, ExtArgs["result"]["prescription"]>
    composites: {}
  }

  type PrescriptionGetPayload<S extends boolean | null | undefined | PrescriptionDefaultArgs> = $Result.GetResult<Prisma.$PrescriptionPayload, S>

  type PrescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrescriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrescriptionCountAggregateInputType | true
    }

  export interface PrescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prescription'], meta: { name: 'Prescription' } }
    /**
     * Find zero or one Prescription that matches the filter.
     * @param {PrescriptionFindUniqueArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrescriptionFindUniqueArgs>(args: SelectSubset<T, PrescriptionFindUniqueArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prescription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrescriptionFindUniqueOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrescriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PrescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrescriptionFindFirstArgs>(args?: SelectSubset<T, PrescriptionFindFirstArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrescriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PrescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prescriptions
     * const prescriptions = await prisma.prescription.findMany()
     * 
     * // Get first 10 Prescriptions
     * const prescriptions = await prisma.prescription.findMany({ take: 10 })
     * 
     * // Only select the `prescription_id`
     * const prescriptionWithPrescription_idOnly = await prisma.prescription.findMany({ select: { prescription_id: true } })
     * 
     */
    findMany<T extends PrescriptionFindManyArgs>(args?: SelectSubset<T, PrescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prescription.
     * @param {PrescriptionCreateArgs} args - Arguments to create a Prescription.
     * @example
     * // Create one Prescription
     * const Prescription = await prisma.prescription.create({
     *   data: {
     *     // ... data to create a Prescription
     *   }
     * })
     * 
     */
    create<T extends PrescriptionCreateArgs>(args: SelectSubset<T, PrescriptionCreateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prescriptions.
     * @param {PrescriptionCreateManyArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrescriptionCreateManyArgs>(args?: SelectSubset<T, PrescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Prescription.
     * @param {PrescriptionDeleteArgs} args - Arguments to delete one Prescription.
     * @example
     * // Delete one Prescription
     * const Prescription = await prisma.prescription.delete({
     *   where: {
     *     // ... filter to delete one Prescription
     *   }
     * })
     * 
     */
    delete<T extends PrescriptionDeleteArgs>(args: SelectSubset<T, PrescriptionDeleteArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prescription.
     * @param {PrescriptionUpdateArgs} args - Arguments to update one Prescription.
     * @example
     * // Update one Prescription
     * const prescription = await prisma.prescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrescriptionUpdateArgs>(args: SelectSubset<T, PrescriptionUpdateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prescriptions.
     * @param {PrescriptionDeleteManyArgs} args - Arguments to filter Prescriptions to delete.
     * @example
     * // Delete a few Prescriptions
     * const { count } = await prisma.prescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrescriptionDeleteManyArgs>(args?: SelectSubset<T, PrescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrescriptionUpdateManyArgs>(args: SelectSubset<T, PrescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prescription.
     * @param {PrescriptionUpsertArgs} args - Arguments to update or create a Prescription.
     * @example
     * // Update or create a Prescription
     * const prescription = await prisma.prescription.upsert({
     *   create: {
     *     // ... data to create a Prescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prescription we want to update
     *   }
     * })
     */
    upsert<T extends PrescriptionUpsertArgs>(args: SelectSubset<T, PrescriptionUpsertArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionCountArgs} args - Arguments to filter Prescriptions to count.
     * @example
     * // Count the number of Prescriptions
     * const count = await prisma.prescription.count({
     *   where: {
     *     // ... the filter for the Prescriptions we want to count
     *   }
     * })
    **/
    count<T extends PrescriptionCountArgs>(
      args?: Subset<T, PrescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrescriptionAggregateArgs>(args: Subset<T, PrescriptionAggregateArgs>): Prisma.PrismaPromise<GetPrescriptionAggregateType<T>>

    /**
     * Group by Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionGroupByArgs} args - Group by arguments.
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
      T extends PrescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrescriptionGroupByArgs['orderBy'] }
        : { orderBy?: PrescriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prescription model
   */
  readonly fields: PrescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prescriptionDetails<T extends Prescription$prescriptionDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Prescription$prescriptionDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outbounds<T extends Prescription$outboundsArgs<ExtArgs> = {}>(args?: Subset<T, Prescription$outboundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutboundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Prescription model
   */
  interface PrescriptionFieldRefs {
    readonly prescription_id: FieldRef<"Prescription", 'Int'>
    readonly patient_visit_id: FieldRef<"Prescription", 'String'>
    readonly doctor_id: FieldRef<"Prescription", 'Int'>
    readonly create_time: FieldRef<"Prescription", 'DateTime'>
    readonly status: FieldRef<"Prescription", 'PrescriptionStatus'>
    readonly diagnosis: FieldRef<"Prescription", 'String'>
    readonly remarks: FieldRef<"Prescription", 'String'>
    readonly total_amount: FieldRef<"Prescription", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Prescription findUnique
   */
  export type PrescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findUniqueOrThrow
   */
  export type PrescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findFirst
   */
  export type PrescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findFirstOrThrow
   */
  export type PrescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findMany
   */
  export type PrescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescriptions to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription create
   */
  export type PrescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Prescription.
     */
    data: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
  }

  /**
   * Prescription createMany
   */
  export type PrescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prescription update
   */
  export type PrescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Prescription.
     */
    data: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
    /**
     * Choose, which Prescription to update.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription updateMany
   */
  export type PrescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to update.
     */
    limit?: number
  }

  /**
   * Prescription upsert
   */
  export type PrescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Prescription to update in case it exists.
     */
    where: PrescriptionWhereUniqueInput
    /**
     * In case the Prescription found by the `where` argument doesn't exist, create a new Prescription with this data.
     */
    create: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
    /**
     * In case the Prescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
  }

  /**
   * Prescription delete
   */
  export type PrescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter which Prescription to delete.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription deleteMany
   */
  export type PrescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescriptions to delete
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to delete.
     */
    limit?: number
  }

  /**
   * Prescription.prescriptionDetails
   */
  export type Prescription$prescriptionDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionDetail
     */
    select?: PrescriptionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionDetail
     */
    omit?: PrescriptionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionDetailInclude<ExtArgs> | null
    where?: PrescriptionDetailWhereInput
    orderBy?: PrescriptionDetailOrderByWithRelationInput | PrescriptionDetailOrderByWithRelationInput[]
    cursor?: PrescriptionDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionDetailScalarFieldEnum | PrescriptionDetailScalarFieldEnum[]
  }

  /**
   * Prescription.outbounds
   */
  export type Prescription$outboundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbound
     */
    select?: OutboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbound
     */
    omit?: OutboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundInclude<ExtArgs> | null
    where?: OutboundWhereInput
    orderBy?: OutboundOrderByWithRelationInput | OutboundOrderByWithRelationInput[]
    cursor?: OutboundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutboundScalarFieldEnum | OutboundScalarFieldEnum[]
  }

  /**
   * Prescription without action
   */
  export type PrescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
  }


  /**
   * Model PrescriptionDetail
   */

  export type AggregatePrescriptionDetail = {
    _count: PrescriptionDetailCountAggregateOutputType | null
    _avg: PrescriptionDetailAvgAggregateOutputType | null
    _sum: PrescriptionDetailSumAggregateOutputType | null
    _min: PrescriptionDetailMinAggregateOutputType | null
    _max: PrescriptionDetailMaxAggregateOutputType | null
  }

  export type PrescriptionDetailAvgAggregateOutputType = {
    prescription_id: number | null
    unit_price: number | null
    quantity: number | null
  }

  export type PrescriptionDetailSumAggregateOutputType = {
    prescription_id: number | null
    unit_price: number | null
    quantity: number | null
  }

  export type PrescriptionDetailMinAggregateOutputType = {
    prescription_id: number | null
    drug_code: string | null
    drug_name: string | null
    unit_price: number | null
    quantity: number | null
    usage_instruction: string | null
  }

  export type PrescriptionDetailMaxAggregateOutputType = {
    prescription_id: number | null
    drug_code: string | null
    drug_name: string | null
    unit_price: number | null
    quantity: number | null
    usage_instruction: string | null
  }

  export type PrescriptionDetailCountAggregateOutputType = {
    prescription_id: number
    drug_code: number
    drug_name: number
    unit_price: number
    quantity: number
    usage_instruction: number
    _all: number
  }


  export type PrescriptionDetailAvgAggregateInputType = {
    prescription_id?: true
    unit_price?: true
    quantity?: true
  }

  export type PrescriptionDetailSumAggregateInputType = {
    prescription_id?: true
    unit_price?: true
    quantity?: true
  }

  export type PrescriptionDetailMinAggregateInputType = {
    prescription_id?: true
    drug_code?: true
    drug_name?: true
    unit_price?: true
    quantity?: true
    usage_instruction?: true
  }

  export type PrescriptionDetailMaxAggregateInputType = {
    prescription_id?: true
    drug_code?: true
    drug_name?: true
    unit_price?: true
    quantity?: true
    usage_instruction?: true
  }

  export type PrescriptionDetailCountAggregateInputType = {
    prescription_id?: true
    drug_code?: true
    drug_name?: true
    unit_price?: true
    quantity?: true
    usage_instruction?: true
    _all?: true
  }

  export type PrescriptionDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrescriptionDetail to aggregate.
     */
    where?: PrescriptionDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionDetails to fetch.
     */
    orderBy?: PrescriptionDetailOrderByWithRelationInput | PrescriptionDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrescriptionDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrescriptionDetails
    **/
    _count?: true | PrescriptionDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrescriptionDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrescriptionDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrescriptionDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrescriptionDetailMaxAggregateInputType
  }

  export type GetPrescriptionDetailAggregateType<T extends PrescriptionDetailAggregateArgs> = {
        [P in keyof T & keyof AggregatePrescriptionDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescriptionDetail[P]>
      : GetScalarType<T[P], AggregatePrescriptionDetail[P]>
  }




  export type PrescriptionDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionDetailWhereInput
    orderBy?: PrescriptionDetailOrderByWithAggregationInput | PrescriptionDetailOrderByWithAggregationInput[]
    by: PrescriptionDetailScalarFieldEnum[] | PrescriptionDetailScalarFieldEnum
    having?: PrescriptionDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrescriptionDetailCountAggregateInputType | true
    _avg?: PrescriptionDetailAvgAggregateInputType
    _sum?: PrescriptionDetailSumAggregateInputType
    _min?: PrescriptionDetailMinAggregateInputType
    _max?: PrescriptionDetailMaxAggregateInputType
  }

  export type PrescriptionDetailGroupByOutputType = {
    prescription_id: number
    drug_code: string
    drug_name: string
    unit_price: number
    quantity: number
    usage_instruction: string
    _count: PrescriptionDetailCountAggregateOutputType | null
    _avg: PrescriptionDetailAvgAggregateOutputType | null
    _sum: PrescriptionDetailSumAggregateOutputType | null
    _min: PrescriptionDetailMinAggregateOutputType | null
    _max: PrescriptionDetailMaxAggregateOutputType | null
  }

  type GetPrescriptionDetailGroupByPayload<T extends PrescriptionDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrescriptionDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrescriptionDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrescriptionDetailGroupByOutputType[P]>
            : GetScalarType<T[P], PrescriptionDetailGroupByOutputType[P]>
        }
      >
    >


  export type PrescriptionDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prescription_id?: boolean
    drug_code?: boolean
    drug_name?: boolean
    unit_price?: boolean
    quantity?: boolean
    usage_instruction?: boolean
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
    drug?: boolean | DrugDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescriptionDetail"]>



  export type PrescriptionDetailSelectScalar = {
    prescription_id?: boolean
    drug_code?: boolean
    drug_name?: boolean
    unit_price?: boolean
    quantity?: boolean
    usage_instruction?: boolean
  }

  export type PrescriptionDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"prescription_id" | "drug_code" | "drug_name" | "unit_price" | "quantity" | "usage_instruction", ExtArgs["result"]["prescriptionDetail"]>
  export type PrescriptionDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
    drug?: boolean | DrugDefaultArgs<ExtArgs>
  }

  export type $PrescriptionDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrescriptionDetail"
    objects: {
      prescription: Prisma.$PrescriptionPayload<ExtArgs>
      drug: Prisma.$DrugPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      prescription_id: number
      drug_code: string
      drug_name: string
      unit_price: number
      quantity: number
      usage_instruction: string
    }, ExtArgs["result"]["prescriptionDetail"]>
    composites: {}
  }

  type PrescriptionDetailGetPayload<S extends boolean | null | undefined | PrescriptionDetailDefaultArgs> = $Result.GetResult<Prisma.$PrescriptionDetailPayload, S>

  type PrescriptionDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrescriptionDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrescriptionDetailCountAggregateInputType | true
    }

  export interface PrescriptionDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrescriptionDetail'], meta: { name: 'PrescriptionDetail' } }
    /**
     * Find zero or one PrescriptionDetail that matches the filter.
     * @param {PrescriptionDetailFindUniqueArgs} args - Arguments to find a PrescriptionDetail
     * @example
     * // Get one PrescriptionDetail
     * const prescriptionDetail = await prisma.prescriptionDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrescriptionDetailFindUniqueArgs>(args: SelectSubset<T, PrescriptionDetailFindUniqueArgs<ExtArgs>>): Prisma__PrescriptionDetailClient<$Result.GetResult<Prisma.$PrescriptionDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrescriptionDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrescriptionDetailFindUniqueOrThrowArgs} args - Arguments to find a PrescriptionDetail
     * @example
     * // Get one PrescriptionDetail
     * const prescriptionDetail = await prisma.prescriptionDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrescriptionDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, PrescriptionDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrescriptionDetailClient<$Result.GetResult<Prisma.$PrescriptionDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrescriptionDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionDetailFindFirstArgs} args - Arguments to find a PrescriptionDetail
     * @example
     * // Get one PrescriptionDetail
     * const prescriptionDetail = await prisma.prescriptionDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrescriptionDetailFindFirstArgs>(args?: SelectSubset<T, PrescriptionDetailFindFirstArgs<ExtArgs>>): Prisma__PrescriptionDetailClient<$Result.GetResult<Prisma.$PrescriptionDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrescriptionDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionDetailFindFirstOrThrowArgs} args - Arguments to find a PrescriptionDetail
     * @example
     * // Get one PrescriptionDetail
     * const prescriptionDetail = await prisma.prescriptionDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrescriptionDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, PrescriptionDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrescriptionDetailClient<$Result.GetResult<Prisma.$PrescriptionDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrescriptionDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrescriptionDetails
     * const prescriptionDetails = await prisma.prescriptionDetail.findMany()
     * 
     * // Get first 10 PrescriptionDetails
     * const prescriptionDetails = await prisma.prescriptionDetail.findMany({ take: 10 })
     * 
     * // Only select the `prescription_id`
     * const prescriptionDetailWithPrescription_idOnly = await prisma.prescriptionDetail.findMany({ select: { prescription_id: true } })
     * 
     */
    findMany<T extends PrescriptionDetailFindManyArgs>(args?: SelectSubset<T, PrescriptionDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrescriptionDetail.
     * @param {PrescriptionDetailCreateArgs} args - Arguments to create a PrescriptionDetail.
     * @example
     * // Create one PrescriptionDetail
     * const PrescriptionDetail = await prisma.prescriptionDetail.create({
     *   data: {
     *     // ... data to create a PrescriptionDetail
     *   }
     * })
     * 
     */
    create<T extends PrescriptionDetailCreateArgs>(args: SelectSubset<T, PrescriptionDetailCreateArgs<ExtArgs>>): Prisma__PrescriptionDetailClient<$Result.GetResult<Prisma.$PrescriptionDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrescriptionDetails.
     * @param {PrescriptionDetailCreateManyArgs} args - Arguments to create many PrescriptionDetails.
     * @example
     * // Create many PrescriptionDetails
     * const prescriptionDetail = await prisma.prescriptionDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrescriptionDetailCreateManyArgs>(args?: SelectSubset<T, PrescriptionDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PrescriptionDetail.
     * @param {PrescriptionDetailDeleteArgs} args - Arguments to delete one PrescriptionDetail.
     * @example
     * // Delete one PrescriptionDetail
     * const PrescriptionDetail = await prisma.prescriptionDetail.delete({
     *   where: {
     *     // ... filter to delete one PrescriptionDetail
     *   }
     * })
     * 
     */
    delete<T extends PrescriptionDetailDeleteArgs>(args: SelectSubset<T, PrescriptionDetailDeleteArgs<ExtArgs>>): Prisma__PrescriptionDetailClient<$Result.GetResult<Prisma.$PrescriptionDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrescriptionDetail.
     * @param {PrescriptionDetailUpdateArgs} args - Arguments to update one PrescriptionDetail.
     * @example
     * // Update one PrescriptionDetail
     * const prescriptionDetail = await prisma.prescriptionDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrescriptionDetailUpdateArgs>(args: SelectSubset<T, PrescriptionDetailUpdateArgs<ExtArgs>>): Prisma__PrescriptionDetailClient<$Result.GetResult<Prisma.$PrescriptionDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrescriptionDetails.
     * @param {PrescriptionDetailDeleteManyArgs} args - Arguments to filter PrescriptionDetails to delete.
     * @example
     * // Delete a few PrescriptionDetails
     * const { count } = await prisma.prescriptionDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrescriptionDetailDeleteManyArgs>(args?: SelectSubset<T, PrescriptionDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrescriptionDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrescriptionDetails
     * const prescriptionDetail = await prisma.prescriptionDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrescriptionDetailUpdateManyArgs>(args: SelectSubset<T, PrescriptionDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PrescriptionDetail.
     * @param {PrescriptionDetailUpsertArgs} args - Arguments to update or create a PrescriptionDetail.
     * @example
     * // Update or create a PrescriptionDetail
     * const prescriptionDetail = await prisma.prescriptionDetail.upsert({
     *   create: {
     *     // ... data to create a PrescriptionDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrescriptionDetail we want to update
     *   }
     * })
     */
    upsert<T extends PrescriptionDetailUpsertArgs>(args: SelectSubset<T, PrescriptionDetailUpsertArgs<ExtArgs>>): Prisma__PrescriptionDetailClient<$Result.GetResult<Prisma.$PrescriptionDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrescriptionDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionDetailCountArgs} args - Arguments to filter PrescriptionDetails to count.
     * @example
     * // Count the number of PrescriptionDetails
     * const count = await prisma.prescriptionDetail.count({
     *   where: {
     *     // ... the filter for the PrescriptionDetails we want to count
     *   }
     * })
    **/
    count<T extends PrescriptionDetailCountArgs>(
      args?: Subset<T, PrescriptionDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrescriptionDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrescriptionDetailAggregateArgs>(args: Subset<T, PrescriptionDetailAggregateArgs>): Prisma.PrismaPromise<GetPrescriptionDetailAggregateType<T>>

    /**
     * Group by PrescriptionDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionDetailGroupByArgs} args - Group by arguments.
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
      T extends PrescriptionDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrescriptionDetailGroupByArgs['orderBy'] }
        : { orderBy?: PrescriptionDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrescriptionDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrescriptionDetail model
   */
  readonly fields: PrescriptionDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrescriptionDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrescriptionDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prescription<T extends PrescriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrescriptionDefaultArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    drug<T extends DrugDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DrugDefaultArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PrescriptionDetail model
   */
  interface PrescriptionDetailFieldRefs {
    readonly prescription_id: FieldRef<"PrescriptionDetail", 'Int'>
    readonly drug_code: FieldRef<"PrescriptionDetail", 'String'>
    readonly drug_name: FieldRef<"PrescriptionDetail", 'String'>
    readonly unit_price: FieldRef<"PrescriptionDetail", 'Float'>
    readonly quantity: FieldRef<"PrescriptionDetail", 'Int'>
    readonly usage_instruction: FieldRef<"PrescriptionDetail", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PrescriptionDetail findUnique
   */
  export type PrescriptionDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionDetail
     */
    select?: PrescriptionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionDetail
     */
    omit?: PrescriptionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionDetailInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionDetail to fetch.
     */
    where: PrescriptionDetailWhereUniqueInput
  }

  /**
   * PrescriptionDetail findUniqueOrThrow
   */
  export type PrescriptionDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionDetail
     */
    select?: PrescriptionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionDetail
     */
    omit?: PrescriptionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionDetailInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionDetail to fetch.
     */
    where: PrescriptionDetailWhereUniqueInput
  }

  /**
   * PrescriptionDetail findFirst
   */
  export type PrescriptionDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionDetail
     */
    select?: PrescriptionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionDetail
     */
    omit?: PrescriptionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionDetailInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionDetail to fetch.
     */
    where?: PrescriptionDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionDetails to fetch.
     */
    orderBy?: PrescriptionDetailOrderByWithRelationInput | PrescriptionDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrescriptionDetails.
     */
    cursor?: PrescriptionDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrescriptionDetails.
     */
    distinct?: PrescriptionDetailScalarFieldEnum | PrescriptionDetailScalarFieldEnum[]
  }

  /**
   * PrescriptionDetail findFirstOrThrow
   */
  export type PrescriptionDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionDetail
     */
    select?: PrescriptionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionDetail
     */
    omit?: PrescriptionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionDetailInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionDetail to fetch.
     */
    where?: PrescriptionDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionDetails to fetch.
     */
    orderBy?: PrescriptionDetailOrderByWithRelationInput | PrescriptionDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrescriptionDetails.
     */
    cursor?: PrescriptionDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrescriptionDetails.
     */
    distinct?: PrescriptionDetailScalarFieldEnum | PrescriptionDetailScalarFieldEnum[]
  }

  /**
   * PrescriptionDetail findMany
   */
  export type PrescriptionDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionDetail
     */
    select?: PrescriptionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionDetail
     */
    omit?: PrescriptionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionDetailInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionDetails to fetch.
     */
    where?: PrescriptionDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionDetails to fetch.
     */
    orderBy?: PrescriptionDetailOrderByWithRelationInput | PrescriptionDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrescriptionDetails.
     */
    cursor?: PrescriptionDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionDetails.
     */
    skip?: number
    distinct?: PrescriptionDetailScalarFieldEnum | PrescriptionDetailScalarFieldEnum[]
  }

  /**
   * PrescriptionDetail create
   */
  export type PrescriptionDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionDetail
     */
    select?: PrescriptionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionDetail
     */
    omit?: PrescriptionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a PrescriptionDetail.
     */
    data: XOR<PrescriptionDetailCreateInput, PrescriptionDetailUncheckedCreateInput>
  }

  /**
   * PrescriptionDetail createMany
   */
  export type PrescriptionDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrescriptionDetails.
     */
    data: PrescriptionDetailCreateManyInput | PrescriptionDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrescriptionDetail update
   */
  export type PrescriptionDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionDetail
     */
    select?: PrescriptionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionDetail
     */
    omit?: PrescriptionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a PrescriptionDetail.
     */
    data: XOR<PrescriptionDetailUpdateInput, PrescriptionDetailUncheckedUpdateInput>
    /**
     * Choose, which PrescriptionDetail to update.
     */
    where: PrescriptionDetailWhereUniqueInput
  }

  /**
   * PrescriptionDetail updateMany
   */
  export type PrescriptionDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrescriptionDetails.
     */
    data: XOR<PrescriptionDetailUpdateManyMutationInput, PrescriptionDetailUncheckedUpdateManyInput>
    /**
     * Filter which PrescriptionDetails to update
     */
    where?: PrescriptionDetailWhereInput
    /**
     * Limit how many PrescriptionDetails to update.
     */
    limit?: number
  }

  /**
   * PrescriptionDetail upsert
   */
  export type PrescriptionDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionDetail
     */
    select?: PrescriptionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionDetail
     */
    omit?: PrescriptionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the PrescriptionDetail to update in case it exists.
     */
    where: PrescriptionDetailWhereUniqueInput
    /**
     * In case the PrescriptionDetail found by the `where` argument doesn't exist, create a new PrescriptionDetail with this data.
     */
    create: XOR<PrescriptionDetailCreateInput, PrescriptionDetailUncheckedCreateInput>
    /**
     * In case the PrescriptionDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrescriptionDetailUpdateInput, PrescriptionDetailUncheckedUpdateInput>
  }

  /**
   * PrescriptionDetail delete
   */
  export type PrescriptionDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionDetail
     */
    select?: PrescriptionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionDetail
     */
    omit?: PrescriptionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionDetailInclude<ExtArgs> | null
    /**
     * Filter which PrescriptionDetail to delete.
     */
    where: PrescriptionDetailWhereUniqueInput
  }

  /**
   * PrescriptionDetail deleteMany
   */
  export type PrescriptionDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrescriptionDetails to delete
     */
    where?: PrescriptionDetailWhereInput
    /**
     * Limit how many PrescriptionDetails to delete.
     */
    limit?: number
  }

  /**
   * PrescriptionDetail without action
   */
  export type PrescriptionDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionDetail
     */
    select?: PrescriptionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionDetail
     */
    omit?: PrescriptionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionDetailInclude<ExtArgs> | null
  }


  /**
   * Model Drug
   */

  export type AggregateDrug = {
    _count: DrugCountAggregateOutputType | null
    _avg: DrugAvgAggregateOutputType | null
    _sum: DrugSumAggregateOutputType | null
    _min: DrugMinAggregateOutputType | null
    _max: DrugMaxAggregateOutputType | null
  }

  export type DrugAvgAggregateOutputType = {
    unit_price: number | null
  }

  export type DrugSumAggregateOutputType = {
    unit_price: number | null
  }

  export type DrugMinAggregateOutputType = {
    drug_code: string | null
    generic_name: string | null
    brand_name: string | null
    dosage_form: string | null
    specification: string | null
    manufacturer: string | null
    unit_price: number | null
  }

  export type DrugMaxAggregateOutputType = {
    drug_code: string | null
    generic_name: string | null
    brand_name: string | null
    dosage_form: string | null
    specification: string | null
    manufacturer: string | null
    unit_price: number | null
  }

  export type DrugCountAggregateOutputType = {
    drug_code: number
    generic_name: number
    brand_name: number
    dosage_form: number
    specification: number
    manufacturer: number
    unit_price: number
    _all: number
  }


  export type DrugAvgAggregateInputType = {
    unit_price?: true
  }

  export type DrugSumAggregateInputType = {
    unit_price?: true
  }

  export type DrugMinAggregateInputType = {
    drug_code?: true
    generic_name?: true
    brand_name?: true
    dosage_form?: true
    specification?: true
    manufacturer?: true
    unit_price?: true
  }

  export type DrugMaxAggregateInputType = {
    drug_code?: true
    generic_name?: true
    brand_name?: true
    dosage_form?: true
    specification?: true
    manufacturer?: true
    unit_price?: true
  }

  export type DrugCountAggregateInputType = {
    drug_code?: true
    generic_name?: true
    brand_name?: true
    dosage_form?: true
    specification?: true
    manufacturer?: true
    unit_price?: true
    _all?: true
  }

  export type DrugAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drug to aggregate.
     */
    where?: DrugWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drugs to fetch.
     */
    orderBy?: DrugOrderByWithRelationInput | DrugOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrugWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drugs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drugs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drugs
    **/
    _count?: true | DrugCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DrugAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DrugSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrugMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrugMaxAggregateInputType
  }

  export type GetDrugAggregateType<T extends DrugAggregateArgs> = {
        [P in keyof T & keyof AggregateDrug]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrug[P]>
      : GetScalarType<T[P], AggregateDrug[P]>
  }




  export type DrugGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrugWhereInput
    orderBy?: DrugOrderByWithAggregationInput | DrugOrderByWithAggregationInput[]
    by: DrugScalarFieldEnum[] | DrugScalarFieldEnum
    having?: DrugScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrugCountAggregateInputType | true
    _avg?: DrugAvgAggregateInputType
    _sum?: DrugSumAggregateInputType
    _min?: DrugMinAggregateInputType
    _max?: DrugMaxAggregateInputType
  }

  export type DrugGroupByOutputType = {
    drug_code: string
    generic_name: string
    brand_name: string | null
    dosage_form: string
    specification: string | null
    manufacturer: string | null
    unit_price: number | null
    _count: DrugCountAggregateOutputType | null
    _avg: DrugAvgAggregateOutputType | null
    _sum: DrugSumAggregateOutputType | null
    _min: DrugMinAggregateOutputType | null
    _max: DrugMaxAggregateOutputType | null
  }

  type GetDrugGroupByPayload<T extends DrugGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrugGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrugGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrugGroupByOutputType[P]>
            : GetScalarType<T[P], DrugGroupByOutputType[P]>
        }
      >
    >


  export type DrugSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    drug_code?: boolean
    generic_name?: boolean
    brand_name?: boolean
    dosage_form?: boolean
    specification?: boolean
    manufacturer?: boolean
    unit_price?: boolean
    inventories?: boolean | Drug$inventoriesArgs<ExtArgs>
    inbounds?: boolean | Drug$inboundsArgs<ExtArgs>
    outbounds?: boolean | Drug$outboundsArgs<ExtArgs>
    priceHistories?: boolean | Drug$priceHistoriesArgs<ExtArgs>
    prescriptionDetails?: boolean | Drug$prescriptionDetailsArgs<ExtArgs>
    _count?: boolean | DrugCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drug"]>



  export type DrugSelectScalar = {
    drug_code?: boolean
    generic_name?: boolean
    brand_name?: boolean
    dosage_form?: boolean
    specification?: boolean
    manufacturer?: boolean
    unit_price?: boolean
  }

  export type DrugOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"drug_code" | "generic_name" | "brand_name" | "dosage_form" | "specification" | "manufacturer" | "unit_price", ExtArgs["result"]["drug"]>
  export type DrugInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventories?: boolean | Drug$inventoriesArgs<ExtArgs>
    inbounds?: boolean | Drug$inboundsArgs<ExtArgs>
    outbounds?: boolean | Drug$outboundsArgs<ExtArgs>
    priceHistories?: boolean | Drug$priceHistoriesArgs<ExtArgs>
    prescriptionDetails?: boolean | Drug$prescriptionDetailsArgs<ExtArgs>
    _count?: boolean | DrugCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DrugPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Drug"
    objects: {
      inventories: Prisma.$InventoryPayload<ExtArgs>[]
      inbounds: Prisma.$InboundPayload<ExtArgs>[]
      outbounds: Prisma.$OutboundPayload<ExtArgs>[]
      priceHistories: Prisma.$PriceHistoryPayload<ExtArgs>[]
      prescriptionDetails: Prisma.$PrescriptionDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      drug_code: string
      generic_name: string
      brand_name: string | null
      dosage_form: string
      specification: string | null
      manufacturer: string | null
      unit_price: number | null
    }, ExtArgs["result"]["drug"]>
    composites: {}
  }

  type DrugGetPayload<S extends boolean | null | undefined | DrugDefaultArgs> = $Result.GetResult<Prisma.$DrugPayload, S>

  type DrugCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrugFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrugCountAggregateInputType | true
    }

  export interface DrugDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Drug'], meta: { name: 'Drug' } }
    /**
     * Find zero or one Drug that matches the filter.
     * @param {DrugFindUniqueArgs} args - Arguments to find a Drug
     * @example
     * // Get one Drug
     * const drug = await prisma.drug.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrugFindUniqueArgs>(args: SelectSubset<T, DrugFindUniqueArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Drug that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrugFindUniqueOrThrowArgs} args - Arguments to find a Drug
     * @example
     * // Get one Drug
     * const drug = await prisma.drug.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrugFindUniqueOrThrowArgs>(args: SelectSubset<T, DrugFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drug that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrugFindFirstArgs} args - Arguments to find a Drug
     * @example
     * // Get one Drug
     * const drug = await prisma.drug.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrugFindFirstArgs>(args?: SelectSubset<T, DrugFindFirstArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drug that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrugFindFirstOrThrowArgs} args - Arguments to find a Drug
     * @example
     * // Get one Drug
     * const drug = await prisma.drug.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrugFindFirstOrThrowArgs>(args?: SelectSubset<T, DrugFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drugs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrugFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drugs
     * const drugs = await prisma.drug.findMany()
     * 
     * // Get first 10 Drugs
     * const drugs = await prisma.drug.findMany({ take: 10 })
     * 
     * // Only select the `drug_code`
     * const drugWithDrug_codeOnly = await prisma.drug.findMany({ select: { drug_code: true } })
     * 
     */
    findMany<T extends DrugFindManyArgs>(args?: SelectSubset<T, DrugFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Drug.
     * @param {DrugCreateArgs} args - Arguments to create a Drug.
     * @example
     * // Create one Drug
     * const Drug = await prisma.drug.create({
     *   data: {
     *     // ... data to create a Drug
     *   }
     * })
     * 
     */
    create<T extends DrugCreateArgs>(args: SelectSubset<T, DrugCreateArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drugs.
     * @param {DrugCreateManyArgs} args - Arguments to create many Drugs.
     * @example
     * // Create many Drugs
     * const drug = await prisma.drug.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrugCreateManyArgs>(args?: SelectSubset<T, DrugCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Drug.
     * @param {DrugDeleteArgs} args - Arguments to delete one Drug.
     * @example
     * // Delete one Drug
     * const Drug = await prisma.drug.delete({
     *   where: {
     *     // ... filter to delete one Drug
     *   }
     * })
     * 
     */
    delete<T extends DrugDeleteArgs>(args: SelectSubset<T, DrugDeleteArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Drug.
     * @param {DrugUpdateArgs} args - Arguments to update one Drug.
     * @example
     * // Update one Drug
     * const drug = await prisma.drug.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrugUpdateArgs>(args: SelectSubset<T, DrugUpdateArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drugs.
     * @param {DrugDeleteManyArgs} args - Arguments to filter Drugs to delete.
     * @example
     * // Delete a few Drugs
     * const { count } = await prisma.drug.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrugDeleteManyArgs>(args?: SelectSubset<T, DrugDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drugs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrugUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drugs
     * const drug = await prisma.drug.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrugUpdateManyArgs>(args: SelectSubset<T, DrugUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Drug.
     * @param {DrugUpsertArgs} args - Arguments to update or create a Drug.
     * @example
     * // Update or create a Drug
     * const drug = await prisma.drug.upsert({
     *   create: {
     *     // ... data to create a Drug
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drug we want to update
     *   }
     * })
     */
    upsert<T extends DrugUpsertArgs>(args: SelectSubset<T, DrugUpsertArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drugs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrugCountArgs} args - Arguments to filter Drugs to count.
     * @example
     * // Count the number of Drugs
     * const count = await prisma.drug.count({
     *   where: {
     *     // ... the filter for the Drugs we want to count
     *   }
     * })
    **/
    count<T extends DrugCountArgs>(
      args?: Subset<T, DrugCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrugCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drug.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrugAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DrugAggregateArgs>(args: Subset<T, DrugAggregateArgs>): Prisma.PrismaPromise<GetDrugAggregateType<T>>

    /**
     * Group by Drug.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrugGroupByArgs} args - Group by arguments.
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
      T extends DrugGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrugGroupByArgs['orderBy'] }
        : { orderBy?: DrugGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DrugGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrugGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Drug model
   */
  readonly fields: DrugFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Drug.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrugClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventories<T extends Drug$inventoriesArgs<ExtArgs> = {}>(args?: Subset<T, Drug$inventoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inbounds<T extends Drug$inboundsArgs<ExtArgs> = {}>(args?: Subset<T, Drug$inboundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outbounds<T extends Drug$outboundsArgs<ExtArgs> = {}>(args?: Subset<T, Drug$outboundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutboundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    priceHistories<T extends Drug$priceHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, Drug$priceHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prescriptionDetails<T extends Drug$prescriptionDetailsArgs<ExtArgs> = {}>(args?: Subset<T, Drug$prescriptionDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Drug model
   */
  interface DrugFieldRefs {
    readonly drug_code: FieldRef<"Drug", 'String'>
    readonly generic_name: FieldRef<"Drug", 'String'>
    readonly brand_name: FieldRef<"Drug", 'String'>
    readonly dosage_form: FieldRef<"Drug", 'String'>
    readonly specification: FieldRef<"Drug", 'String'>
    readonly manufacturer: FieldRef<"Drug", 'String'>
    readonly unit_price: FieldRef<"Drug", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Drug findUnique
   */
  export type DrugFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrugInclude<ExtArgs> | null
    /**
     * Filter, which Drug to fetch.
     */
    where: DrugWhereUniqueInput
  }

  /**
   * Drug findUniqueOrThrow
   */
  export type DrugFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrugInclude<ExtArgs> | null
    /**
     * Filter, which Drug to fetch.
     */
    where: DrugWhereUniqueInput
  }

  /**
   * Drug findFirst
   */
  export type DrugFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrugInclude<ExtArgs> | null
    /**
     * Filter, which Drug to fetch.
     */
    where?: DrugWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drugs to fetch.
     */
    orderBy?: DrugOrderByWithRelationInput | DrugOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drugs.
     */
    cursor?: DrugWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drugs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drugs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drugs.
     */
    distinct?: DrugScalarFieldEnum | DrugScalarFieldEnum[]
  }

  /**
   * Drug findFirstOrThrow
   */
  export type DrugFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrugInclude<ExtArgs> | null
    /**
     * Filter, which Drug to fetch.
     */
    where?: DrugWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drugs to fetch.
     */
    orderBy?: DrugOrderByWithRelationInput | DrugOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drugs.
     */
    cursor?: DrugWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drugs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drugs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drugs.
     */
    distinct?: DrugScalarFieldEnum | DrugScalarFieldEnum[]
  }

  /**
   * Drug findMany
   */
  export type DrugFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrugInclude<ExtArgs> | null
    /**
     * Filter, which Drugs to fetch.
     */
    where?: DrugWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drugs to fetch.
     */
    orderBy?: DrugOrderByWithRelationInput | DrugOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drugs.
     */
    cursor?: DrugWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drugs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drugs.
     */
    skip?: number
    distinct?: DrugScalarFieldEnum | DrugScalarFieldEnum[]
  }

  /**
   * Drug create
   */
  export type DrugCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrugInclude<ExtArgs> | null
    /**
     * The data needed to create a Drug.
     */
    data: XOR<DrugCreateInput, DrugUncheckedCreateInput>
  }

  /**
   * Drug createMany
   */
  export type DrugCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drugs.
     */
    data: DrugCreateManyInput | DrugCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Drug update
   */
  export type DrugUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrugInclude<ExtArgs> | null
    /**
     * The data needed to update a Drug.
     */
    data: XOR<DrugUpdateInput, DrugUncheckedUpdateInput>
    /**
     * Choose, which Drug to update.
     */
    where: DrugWhereUniqueInput
  }

  /**
   * Drug updateMany
   */
  export type DrugUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drugs.
     */
    data: XOR<DrugUpdateManyMutationInput, DrugUncheckedUpdateManyInput>
    /**
     * Filter which Drugs to update
     */
    where?: DrugWhereInput
    /**
     * Limit how many Drugs to update.
     */
    limit?: number
  }

  /**
   * Drug upsert
   */
  export type DrugUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrugInclude<ExtArgs> | null
    /**
     * The filter to search for the Drug to update in case it exists.
     */
    where: DrugWhereUniqueInput
    /**
     * In case the Drug found by the `where` argument doesn't exist, create a new Drug with this data.
     */
    create: XOR<DrugCreateInput, DrugUncheckedCreateInput>
    /**
     * In case the Drug was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrugUpdateInput, DrugUncheckedUpdateInput>
  }

  /**
   * Drug delete
   */
  export type DrugDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrugInclude<ExtArgs> | null
    /**
     * Filter which Drug to delete.
     */
    where: DrugWhereUniqueInput
  }

  /**
   * Drug deleteMany
   */
  export type DrugDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drugs to delete
     */
    where?: DrugWhereInput
    /**
     * Limit how many Drugs to delete.
     */
    limit?: number
  }

  /**
   * Drug.inventories
   */
  export type Drug$inventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Drug.inbounds
   */
  export type Drug$inboundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbound
     */
    select?: InboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbound
     */
    omit?: InboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundInclude<ExtArgs> | null
    where?: InboundWhereInput
    orderBy?: InboundOrderByWithRelationInput | InboundOrderByWithRelationInput[]
    cursor?: InboundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InboundScalarFieldEnum | InboundScalarFieldEnum[]
  }

  /**
   * Drug.outbounds
   */
  export type Drug$outboundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbound
     */
    select?: OutboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbound
     */
    omit?: OutboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundInclude<ExtArgs> | null
    where?: OutboundWhereInput
    orderBy?: OutboundOrderByWithRelationInput | OutboundOrderByWithRelationInput[]
    cursor?: OutboundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutboundScalarFieldEnum | OutboundScalarFieldEnum[]
  }

  /**
   * Drug.priceHistories
   */
  export type Drug$priceHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    where?: PriceHistoryWhereInput
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    cursor?: PriceHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * Drug.prescriptionDetails
   */
  export type Drug$prescriptionDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionDetail
     */
    select?: PrescriptionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionDetail
     */
    omit?: PrescriptionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionDetailInclude<ExtArgs> | null
    where?: PrescriptionDetailWhereInput
    orderBy?: PrescriptionDetailOrderByWithRelationInput | PrescriptionDetailOrderByWithRelationInput[]
    cursor?: PrescriptionDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionDetailScalarFieldEnum | PrescriptionDetailScalarFieldEnum[]
  }

  /**
   * Drug without action
   */
  export type DrugDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Drug
     */
    select?: DrugSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Drug
     */
    omit?: DrugOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrugInclude<ExtArgs> | null
  }


  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    inventory_id: number | null
    stock_quantity: number | null
    alert_threshold: number | null
  }

  export type InventorySumAggregateOutputType = {
    inventory_id: number | null
    stock_quantity: number | null
    alert_threshold: number | null
  }

  export type InventoryMinAggregateOutputType = {
    inventory_id: number | null
    drug_code: string | null
    batch_number: string | null
    stock_quantity: number | null
    expiration_date: Date | null
    alert_threshold: number | null
    last_inbound_time: Date | null
    last_outbound_time: Date | null
  }

  export type InventoryMaxAggregateOutputType = {
    inventory_id: number | null
    drug_code: string | null
    batch_number: string | null
    stock_quantity: number | null
    expiration_date: Date | null
    alert_threshold: number | null
    last_inbound_time: Date | null
    last_outbound_time: Date | null
  }

  export type InventoryCountAggregateOutputType = {
    inventory_id: number
    drug_code: number
    batch_number: number
    stock_quantity: number
    expiration_date: number
    alert_threshold: number
    last_inbound_time: number
    last_outbound_time: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    inventory_id?: true
    stock_quantity?: true
    alert_threshold?: true
  }

  export type InventorySumAggregateInputType = {
    inventory_id?: true
    stock_quantity?: true
    alert_threshold?: true
  }

  export type InventoryMinAggregateInputType = {
    inventory_id?: true
    drug_code?: true
    batch_number?: true
    stock_quantity?: true
    expiration_date?: true
    alert_threshold?: true
    last_inbound_time?: true
    last_outbound_time?: true
  }

  export type InventoryMaxAggregateInputType = {
    inventory_id?: true
    drug_code?: true
    batch_number?: true
    stock_quantity?: true
    expiration_date?: true
    alert_threshold?: true
    last_inbound_time?: true
    last_outbound_time?: true
  }

  export type InventoryCountAggregateInputType = {
    inventory_id?: true
    drug_code?: true
    batch_number?: true
    stock_quantity?: true
    expiration_date?: true
    alert_threshold?: true
    last_inbound_time?: true
    last_outbound_time?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    inventory_id: number
    drug_code: string
    batch_number: string
    stock_quantity: number
    expiration_date: Date
    alert_threshold: number
    last_inbound_time: Date | null
    last_outbound_time: Date | null
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inventory_id?: boolean
    drug_code?: boolean
    batch_number?: boolean
    stock_quantity?: boolean
    expiration_date?: boolean
    alert_threshold?: boolean
    last_inbound_time?: boolean
    last_outbound_time?: boolean
    drug?: boolean | DrugDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>



  export type InventorySelectScalar = {
    inventory_id?: boolean
    drug_code?: boolean
    batch_number?: boolean
    stock_quantity?: boolean
    expiration_date?: boolean
    alert_threshold?: boolean
    last_inbound_time?: boolean
    last_outbound_time?: boolean
  }

  export type InventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"inventory_id" | "drug_code" | "batch_number" | "stock_quantity" | "expiration_date" | "alert_threshold" | "last_inbound_time" | "last_outbound_time", ExtArgs["result"]["inventory"]>
  export type InventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drug?: boolean | DrugDefaultArgs<ExtArgs>
  }

  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {
      drug: Prisma.$DrugPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      inventory_id: number
      drug_code: string
      batch_number: string
      stock_quantity: number
      expiration_date: Date
      alert_threshold: number
      last_inbound_time: Date | null
      last_outbound_time: Date | null
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryPayload, S>

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventory'], meta: { name: 'Inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `inventory_id`
     * const inventoryWithInventory_idOnly = await prisma.inventory.findMany({ select: { inventory_id: true } })
     * 
     */
    findMany<T extends InventoryFindManyArgs>(args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends InventoryCreateArgs>(args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCreateManyArgs>(args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends InventoryDeleteArgs>(args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryUpdateArgs>(args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDeleteManyArgs>(args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryUpdateManyArgs>(args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
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
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventory model
   */
  readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drug<T extends DrugDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DrugDefaultArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Inventory model
   */
  interface InventoryFieldRefs {
    readonly inventory_id: FieldRef<"Inventory", 'Int'>
    readonly drug_code: FieldRef<"Inventory", 'String'>
    readonly batch_number: FieldRef<"Inventory", 'String'>
    readonly stock_quantity: FieldRef<"Inventory", 'Int'>
    readonly expiration_date: FieldRef<"Inventory", 'DateTime'>
    readonly alert_threshold: FieldRef<"Inventory", 'Int'>
    readonly last_inbound_time: FieldRef<"Inventory", 'DateTime'>
    readonly last_outbound_time: FieldRef<"Inventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
  }

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to delete.
     */
    limit?: number
  }

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
  }


  /**
   * Model Inbound
   */

  export type AggregateInbound = {
    _count: InboundCountAggregateOutputType | null
    _avg: InboundAvgAggregateOutputType | null
    _sum: InboundSumAggregateOutputType | null
    _min: InboundMinAggregateOutputType | null
    _max: InboundMaxAggregateOutputType | null
  }

  export type InboundAvgAggregateOutputType = {
    inbound_id: number | null
    quantity: number | null
    operator_id: number | null
  }

  export type InboundSumAggregateOutputType = {
    inbound_id: number | null
    quantity: number | null
    operator_id: number | null
  }

  export type InboundMinAggregateOutputType = {
    inbound_id: number | null
    drug_code: string | null
    batch_number: string | null
    quantity: number | null
    inbound_time: Date | null
    operator_id: number | null
  }

  export type InboundMaxAggregateOutputType = {
    inbound_id: number | null
    drug_code: string | null
    batch_number: string | null
    quantity: number | null
    inbound_time: Date | null
    operator_id: number | null
  }

  export type InboundCountAggregateOutputType = {
    inbound_id: number
    drug_code: number
    batch_number: number
    quantity: number
    inbound_time: number
    operator_id: number
    _all: number
  }


  export type InboundAvgAggregateInputType = {
    inbound_id?: true
    quantity?: true
    operator_id?: true
  }

  export type InboundSumAggregateInputType = {
    inbound_id?: true
    quantity?: true
    operator_id?: true
  }

  export type InboundMinAggregateInputType = {
    inbound_id?: true
    drug_code?: true
    batch_number?: true
    quantity?: true
    inbound_time?: true
    operator_id?: true
  }

  export type InboundMaxAggregateInputType = {
    inbound_id?: true
    drug_code?: true
    batch_number?: true
    quantity?: true
    inbound_time?: true
    operator_id?: true
  }

  export type InboundCountAggregateInputType = {
    inbound_id?: true
    drug_code?: true
    batch_number?: true
    quantity?: true
    inbound_time?: true
    operator_id?: true
    _all?: true
  }

  export type InboundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inbound to aggregate.
     */
    where?: InboundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inbounds to fetch.
     */
    orderBy?: InboundOrderByWithRelationInput | InboundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InboundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inbounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inbounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inbounds
    **/
    _count?: true | InboundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InboundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InboundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InboundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InboundMaxAggregateInputType
  }

  export type GetInboundAggregateType<T extends InboundAggregateArgs> = {
        [P in keyof T & keyof AggregateInbound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInbound[P]>
      : GetScalarType<T[P], AggregateInbound[P]>
  }




  export type InboundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InboundWhereInput
    orderBy?: InboundOrderByWithAggregationInput | InboundOrderByWithAggregationInput[]
    by: InboundScalarFieldEnum[] | InboundScalarFieldEnum
    having?: InboundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InboundCountAggregateInputType | true
    _avg?: InboundAvgAggregateInputType
    _sum?: InboundSumAggregateInputType
    _min?: InboundMinAggregateInputType
    _max?: InboundMaxAggregateInputType
  }

  export type InboundGroupByOutputType = {
    inbound_id: number
    drug_code: string
    batch_number: string
    quantity: number
    inbound_time: Date
    operator_id: number | null
    _count: InboundCountAggregateOutputType | null
    _avg: InboundAvgAggregateOutputType | null
    _sum: InboundSumAggregateOutputType | null
    _min: InboundMinAggregateOutputType | null
    _max: InboundMaxAggregateOutputType | null
  }

  type GetInboundGroupByPayload<T extends InboundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InboundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InboundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InboundGroupByOutputType[P]>
            : GetScalarType<T[P], InboundGroupByOutputType[P]>
        }
      >
    >


  export type InboundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inbound_id?: boolean
    drug_code?: boolean
    batch_number?: boolean
    quantity?: boolean
    inbound_time?: boolean
    operator_id?: boolean
    drug?: boolean | DrugDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inbound"]>



  export type InboundSelectScalar = {
    inbound_id?: boolean
    drug_code?: boolean
    batch_number?: boolean
    quantity?: boolean
    inbound_time?: boolean
    operator_id?: boolean
  }

  export type InboundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"inbound_id" | "drug_code" | "batch_number" | "quantity" | "inbound_time" | "operator_id", ExtArgs["result"]["inbound"]>
  export type InboundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drug?: boolean | DrugDefaultArgs<ExtArgs>
  }

  export type $InboundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inbound"
    objects: {
      drug: Prisma.$DrugPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      inbound_id: number
      drug_code: string
      batch_number: string
      quantity: number
      inbound_time: Date
      operator_id: number | null
    }, ExtArgs["result"]["inbound"]>
    composites: {}
  }

  type InboundGetPayload<S extends boolean | null | undefined | InboundDefaultArgs> = $Result.GetResult<Prisma.$InboundPayload, S>

  type InboundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InboundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InboundCountAggregateInputType | true
    }

  export interface InboundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inbound'], meta: { name: 'Inbound' } }
    /**
     * Find zero or one Inbound that matches the filter.
     * @param {InboundFindUniqueArgs} args - Arguments to find a Inbound
     * @example
     * // Get one Inbound
     * const inbound = await prisma.inbound.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InboundFindUniqueArgs>(args: SelectSubset<T, InboundFindUniqueArgs<ExtArgs>>): Prisma__InboundClient<$Result.GetResult<Prisma.$InboundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inbound that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InboundFindUniqueOrThrowArgs} args - Arguments to find a Inbound
     * @example
     * // Get one Inbound
     * const inbound = await prisma.inbound.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InboundFindUniqueOrThrowArgs>(args: SelectSubset<T, InboundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InboundClient<$Result.GetResult<Prisma.$InboundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inbound that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundFindFirstArgs} args - Arguments to find a Inbound
     * @example
     * // Get one Inbound
     * const inbound = await prisma.inbound.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InboundFindFirstArgs>(args?: SelectSubset<T, InboundFindFirstArgs<ExtArgs>>): Prisma__InboundClient<$Result.GetResult<Prisma.$InboundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inbound that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundFindFirstOrThrowArgs} args - Arguments to find a Inbound
     * @example
     * // Get one Inbound
     * const inbound = await prisma.inbound.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InboundFindFirstOrThrowArgs>(args?: SelectSubset<T, InboundFindFirstOrThrowArgs<ExtArgs>>): Prisma__InboundClient<$Result.GetResult<Prisma.$InboundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inbounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inbounds
     * const inbounds = await prisma.inbound.findMany()
     * 
     * // Get first 10 Inbounds
     * const inbounds = await prisma.inbound.findMany({ take: 10 })
     * 
     * // Only select the `inbound_id`
     * const inboundWithInbound_idOnly = await prisma.inbound.findMany({ select: { inbound_id: true } })
     * 
     */
    findMany<T extends InboundFindManyArgs>(args?: SelectSubset<T, InboundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inbound.
     * @param {InboundCreateArgs} args - Arguments to create a Inbound.
     * @example
     * // Create one Inbound
     * const Inbound = await prisma.inbound.create({
     *   data: {
     *     // ... data to create a Inbound
     *   }
     * })
     * 
     */
    create<T extends InboundCreateArgs>(args: SelectSubset<T, InboundCreateArgs<ExtArgs>>): Prisma__InboundClient<$Result.GetResult<Prisma.$InboundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inbounds.
     * @param {InboundCreateManyArgs} args - Arguments to create many Inbounds.
     * @example
     * // Create many Inbounds
     * const inbound = await prisma.inbound.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InboundCreateManyArgs>(args?: SelectSubset<T, InboundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inbound.
     * @param {InboundDeleteArgs} args - Arguments to delete one Inbound.
     * @example
     * // Delete one Inbound
     * const Inbound = await prisma.inbound.delete({
     *   where: {
     *     // ... filter to delete one Inbound
     *   }
     * })
     * 
     */
    delete<T extends InboundDeleteArgs>(args: SelectSubset<T, InboundDeleteArgs<ExtArgs>>): Prisma__InboundClient<$Result.GetResult<Prisma.$InboundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inbound.
     * @param {InboundUpdateArgs} args - Arguments to update one Inbound.
     * @example
     * // Update one Inbound
     * const inbound = await prisma.inbound.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InboundUpdateArgs>(args: SelectSubset<T, InboundUpdateArgs<ExtArgs>>): Prisma__InboundClient<$Result.GetResult<Prisma.$InboundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inbounds.
     * @param {InboundDeleteManyArgs} args - Arguments to filter Inbounds to delete.
     * @example
     * // Delete a few Inbounds
     * const { count } = await prisma.inbound.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InboundDeleteManyArgs>(args?: SelectSubset<T, InboundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inbounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inbounds
     * const inbound = await prisma.inbound.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InboundUpdateManyArgs>(args: SelectSubset<T, InboundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inbound.
     * @param {InboundUpsertArgs} args - Arguments to update or create a Inbound.
     * @example
     * // Update or create a Inbound
     * const inbound = await prisma.inbound.upsert({
     *   create: {
     *     // ... data to create a Inbound
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inbound we want to update
     *   }
     * })
     */
    upsert<T extends InboundUpsertArgs>(args: SelectSubset<T, InboundUpsertArgs<ExtArgs>>): Prisma__InboundClient<$Result.GetResult<Prisma.$InboundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inbounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundCountArgs} args - Arguments to filter Inbounds to count.
     * @example
     * // Count the number of Inbounds
     * const count = await prisma.inbound.count({
     *   where: {
     *     // ... the filter for the Inbounds we want to count
     *   }
     * })
    **/
    count<T extends InboundCountArgs>(
      args?: Subset<T, InboundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InboundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inbound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InboundAggregateArgs>(args: Subset<T, InboundAggregateArgs>): Prisma.PrismaPromise<GetInboundAggregateType<T>>

    /**
     * Group by Inbound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboundGroupByArgs} args - Group by arguments.
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
      T extends InboundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InboundGroupByArgs['orderBy'] }
        : { orderBy?: InboundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InboundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInboundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inbound model
   */
  readonly fields: InboundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inbound.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InboundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drug<T extends DrugDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DrugDefaultArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Inbound model
   */
  interface InboundFieldRefs {
    readonly inbound_id: FieldRef<"Inbound", 'Int'>
    readonly drug_code: FieldRef<"Inbound", 'String'>
    readonly batch_number: FieldRef<"Inbound", 'String'>
    readonly quantity: FieldRef<"Inbound", 'Int'>
    readonly inbound_time: FieldRef<"Inbound", 'DateTime'>
    readonly operator_id: FieldRef<"Inbound", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Inbound findUnique
   */
  export type InboundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbound
     */
    select?: InboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbound
     */
    omit?: InboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundInclude<ExtArgs> | null
    /**
     * Filter, which Inbound to fetch.
     */
    where: InboundWhereUniqueInput
  }

  /**
   * Inbound findUniqueOrThrow
   */
  export type InboundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbound
     */
    select?: InboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbound
     */
    omit?: InboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundInclude<ExtArgs> | null
    /**
     * Filter, which Inbound to fetch.
     */
    where: InboundWhereUniqueInput
  }

  /**
   * Inbound findFirst
   */
  export type InboundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbound
     */
    select?: InboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbound
     */
    omit?: InboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundInclude<ExtArgs> | null
    /**
     * Filter, which Inbound to fetch.
     */
    where?: InboundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inbounds to fetch.
     */
    orderBy?: InboundOrderByWithRelationInput | InboundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inbounds.
     */
    cursor?: InboundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inbounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inbounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inbounds.
     */
    distinct?: InboundScalarFieldEnum | InboundScalarFieldEnum[]
  }

  /**
   * Inbound findFirstOrThrow
   */
  export type InboundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbound
     */
    select?: InboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbound
     */
    omit?: InboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundInclude<ExtArgs> | null
    /**
     * Filter, which Inbound to fetch.
     */
    where?: InboundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inbounds to fetch.
     */
    orderBy?: InboundOrderByWithRelationInput | InboundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inbounds.
     */
    cursor?: InboundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inbounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inbounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inbounds.
     */
    distinct?: InboundScalarFieldEnum | InboundScalarFieldEnum[]
  }

  /**
   * Inbound findMany
   */
  export type InboundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbound
     */
    select?: InboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbound
     */
    omit?: InboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundInclude<ExtArgs> | null
    /**
     * Filter, which Inbounds to fetch.
     */
    where?: InboundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inbounds to fetch.
     */
    orderBy?: InboundOrderByWithRelationInput | InboundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inbounds.
     */
    cursor?: InboundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inbounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inbounds.
     */
    skip?: number
    distinct?: InboundScalarFieldEnum | InboundScalarFieldEnum[]
  }

  /**
   * Inbound create
   */
  export type InboundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbound
     */
    select?: InboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbound
     */
    omit?: InboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundInclude<ExtArgs> | null
    /**
     * The data needed to create a Inbound.
     */
    data: XOR<InboundCreateInput, InboundUncheckedCreateInput>
  }

  /**
   * Inbound createMany
   */
  export type InboundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inbounds.
     */
    data: InboundCreateManyInput | InboundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inbound update
   */
  export type InboundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbound
     */
    select?: InboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbound
     */
    omit?: InboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundInclude<ExtArgs> | null
    /**
     * The data needed to update a Inbound.
     */
    data: XOR<InboundUpdateInput, InboundUncheckedUpdateInput>
    /**
     * Choose, which Inbound to update.
     */
    where: InboundWhereUniqueInput
  }

  /**
   * Inbound updateMany
   */
  export type InboundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inbounds.
     */
    data: XOR<InboundUpdateManyMutationInput, InboundUncheckedUpdateManyInput>
    /**
     * Filter which Inbounds to update
     */
    where?: InboundWhereInput
    /**
     * Limit how many Inbounds to update.
     */
    limit?: number
  }

  /**
   * Inbound upsert
   */
  export type InboundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbound
     */
    select?: InboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbound
     */
    omit?: InboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundInclude<ExtArgs> | null
    /**
     * The filter to search for the Inbound to update in case it exists.
     */
    where: InboundWhereUniqueInput
    /**
     * In case the Inbound found by the `where` argument doesn't exist, create a new Inbound with this data.
     */
    create: XOR<InboundCreateInput, InboundUncheckedCreateInput>
    /**
     * In case the Inbound was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InboundUpdateInput, InboundUncheckedUpdateInput>
  }

  /**
   * Inbound delete
   */
  export type InboundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbound
     */
    select?: InboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbound
     */
    omit?: InboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundInclude<ExtArgs> | null
    /**
     * Filter which Inbound to delete.
     */
    where: InboundWhereUniqueInput
  }

  /**
   * Inbound deleteMany
   */
  export type InboundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inbounds to delete
     */
    where?: InboundWhereInput
    /**
     * Limit how many Inbounds to delete.
     */
    limit?: number
  }

  /**
   * Inbound without action
   */
  export type InboundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inbound
     */
    select?: InboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inbound
     */
    omit?: InboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InboundInclude<ExtArgs> | null
  }


  /**
   * Model Outbound
   */

  export type AggregateOutbound = {
    _count: OutboundCountAggregateOutputType | null
    _avg: OutboundAvgAggregateOutputType | null
    _sum: OutboundSumAggregateOutputType | null
    _min: OutboundMinAggregateOutputType | null
    _max: OutboundMaxAggregateOutputType | null
  }

  export type OutboundAvgAggregateOutputType = {
    outbound_id: number | null
    quantity: number | null
    prescription_id: number | null
  }

  export type OutboundSumAggregateOutputType = {
    outbound_id: number | null
    quantity: number | null
    prescription_id: number | null
  }

  export type OutboundMinAggregateOutputType = {
    outbound_id: number | null
    drug_code: string | null
    batch_number: string | null
    quantity: number | null
    prescription_id: number | null
    outbound_type: string | null
    outbound_time: Date | null
  }

  export type OutboundMaxAggregateOutputType = {
    outbound_id: number | null
    drug_code: string | null
    batch_number: string | null
    quantity: number | null
    prescription_id: number | null
    outbound_type: string | null
    outbound_time: Date | null
  }

  export type OutboundCountAggregateOutputType = {
    outbound_id: number
    drug_code: number
    batch_number: number
    quantity: number
    prescription_id: number
    outbound_type: number
    outbound_time: number
    _all: number
  }


  export type OutboundAvgAggregateInputType = {
    outbound_id?: true
    quantity?: true
    prescription_id?: true
  }

  export type OutboundSumAggregateInputType = {
    outbound_id?: true
    quantity?: true
    prescription_id?: true
  }

  export type OutboundMinAggregateInputType = {
    outbound_id?: true
    drug_code?: true
    batch_number?: true
    quantity?: true
    prescription_id?: true
    outbound_type?: true
    outbound_time?: true
  }

  export type OutboundMaxAggregateInputType = {
    outbound_id?: true
    drug_code?: true
    batch_number?: true
    quantity?: true
    prescription_id?: true
    outbound_type?: true
    outbound_time?: true
  }

  export type OutboundCountAggregateInputType = {
    outbound_id?: true
    drug_code?: true
    batch_number?: true
    quantity?: true
    prescription_id?: true
    outbound_type?: true
    outbound_time?: true
    _all?: true
  }

  export type OutboundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outbound to aggregate.
     */
    where?: OutboundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outbounds to fetch.
     */
    orderBy?: OutboundOrderByWithRelationInput | OutboundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutboundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outbounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outbounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Outbounds
    **/
    _count?: true | OutboundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutboundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutboundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutboundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutboundMaxAggregateInputType
  }

  export type GetOutboundAggregateType<T extends OutboundAggregateArgs> = {
        [P in keyof T & keyof AggregateOutbound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutbound[P]>
      : GetScalarType<T[P], AggregateOutbound[P]>
  }




  export type OutboundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutboundWhereInput
    orderBy?: OutboundOrderByWithAggregationInput | OutboundOrderByWithAggregationInput[]
    by: OutboundScalarFieldEnum[] | OutboundScalarFieldEnum
    having?: OutboundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutboundCountAggregateInputType | true
    _avg?: OutboundAvgAggregateInputType
    _sum?: OutboundSumAggregateInputType
    _min?: OutboundMinAggregateInputType
    _max?: OutboundMaxAggregateInputType
  }

  export type OutboundGroupByOutputType = {
    outbound_id: number
    drug_code: string
    batch_number: string
    quantity: number
    prescription_id: number | null
    outbound_type: string
    outbound_time: Date
    _count: OutboundCountAggregateOutputType | null
    _avg: OutboundAvgAggregateOutputType | null
    _sum: OutboundSumAggregateOutputType | null
    _min: OutboundMinAggregateOutputType | null
    _max: OutboundMaxAggregateOutputType | null
  }

  type GetOutboundGroupByPayload<T extends OutboundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutboundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutboundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutboundGroupByOutputType[P]>
            : GetScalarType<T[P], OutboundGroupByOutputType[P]>
        }
      >
    >


  export type OutboundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    outbound_id?: boolean
    drug_code?: boolean
    batch_number?: boolean
    quantity?: boolean
    prescription_id?: boolean
    outbound_type?: boolean
    outbound_time?: boolean
    drug?: boolean | DrugDefaultArgs<ExtArgs>
    prescription?: boolean | Outbound$prescriptionArgs<ExtArgs>
  }, ExtArgs["result"]["outbound"]>



  export type OutboundSelectScalar = {
    outbound_id?: boolean
    drug_code?: boolean
    batch_number?: boolean
    quantity?: boolean
    prescription_id?: boolean
    outbound_type?: boolean
    outbound_time?: boolean
  }

  export type OutboundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"outbound_id" | "drug_code" | "batch_number" | "quantity" | "prescription_id" | "outbound_type" | "outbound_time", ExtArgs["result"]["outbound"]>
  export type OutboundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drug?: boolean | DrugDefaultArgs<ExtArgs>
    prescription?: boolean | Outbound$prescriptionArgs<ExtArgs>
  }

  export type $OutboundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Outbound"
    objects: {
      drug: Prisma.$DrugPayload<ExtArgs>
      prescription: Prisma.$PrescriptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      outbound_id: number
      drug_code: string
      batch_number: string
      quantity: number
      prescription_id: number | null
      outbound_type: string
      outbound_time: Date
    }, ExtArgs["result"]["outbound"]>
    composites: {}
  }

  type OutboundGetPayload<S extends boolean | null | undefined | OutboundDefaultArgs> = $Result.GetResult<Prisma.$OutboundPayload, S>

  type OutboundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutboundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutboundCountAggregateInputType | true
    }

  export interface OutboundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Outbound'], meta: { name: 'Outbound' } }
    /**
     * Find zero or one Outbound that matches the filter.
     * @param {OutboundFindUniqueArgs} args - Arguments to find a Outbound
     * @example
     * // Get one Outbound
     * const outbound = await prisma.outbound.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutboundFindUniqueArgs>(args: SelectSubset<T, OutboundFindUniqueArgs<ExtArgs>>): Prisma__OutboundClient<$Result.GetResult<Prisma.$OutboundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Outbound that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutboundFindUniqueOrThrowArgs} args - Arguments to find a Outbound
     * @example
     * // Get one Outbound
     * const outbound = await prisma.outbound.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutboundFindUniqueOrThrowArgs>(args: SelectSubset<T, OutboundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutboundClient<$Result.GetResult<Prisma.$OutboundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outbound that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboundFindFirstArgs} args - Arguments to find a Outbound
     * @example
     * // Get one Outbound
     * const outbound = await prisma.outbound.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutboundFindFirstArgs>(args?: SelectSubset<T, OutboundFindFirstArgs<ExtArgs>>): Prisma__OutboundClient<$Result.GetResult<Prisma.$OutboundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outbound that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboundFindFirstOrThrowArgs} args - Arguments to find a Outbound
     * @example
     * // Get one Outbound
     * const outbound = await prisma.outbound.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutboundFindFirstOrThrowArgs>(args?: SelectSubset<T, OutboundFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutboundClient<$Result.GetResult<Prisma.$OutboundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Outbounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outbounds
     * const outbounds = await prisma.outbound.findMany()
     * 
     * // Get first 10 Outbounds
     * const outbounds = await prisma.outbound.findMany({ take: 10 })
     * 
     * // Only select the `outbound_id`
     * const outboundWithOutbound_idOnly = await prisma.outbound.findMany({ select: { outbound_id: true } })
     * 
     */
    findMany<T extends OutboundFindManyArgs>(args?: SelectSubset<T, OutboundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutboundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Outbound.
     * @param {OutboundCreateArgs} args - Arguments to create a Outbound.
     * @example
     * // Create one Outbound
     * const Outbound = await prisma.outbound.create({
     *   data: {
     *     // ... data to create a Outbound
     *   }
     * })
     * 
     */
    create<T extends OutboundCreateArgs>(args: SelectSubset<T, OutboundCreateArgs<ExtArgs>>): Prisma__OutboundClient<$Result.GetResult<Prisma.$OutboundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Outbounds.
     * @param {OutboundCreateManyArgs} args - Arguments to create many Outbounds.
     * @example
     * // Create many Outbounds
     * const outbound = await prisma.outbound.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutboundCreateManyArgs>(args?: SelectSubset<T, OutboundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Outbound.
     * @param {OutboundDeleteArgs} args - Arguments to delete one Outbound.
     * @example
     * // Delete one Outbound
     * const Outbound = await prisma.outbound.delete({
     *   where: {
     *     // ... filter to delete one Outbound
     *   }
     * })
     * 
     */
    delete<T extends OutboundDeleteArgs>(args: SelectSubset<T, OutboundDeleteArgs<ExtArgs>>): Prisma__OutboundClient<$Result.GetResult<Prisma.$OutboundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Outbound.
     * @param {OutboundUpdateArgs} args - Arguments to update one Outbound.
     * @example
     * // Update one Outbound
     * const outbound = await prisma.outbound.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutboundUpdateArgs>(args: SelectSubset<T, OutboundUpdateArgs<ExtArgs>>): Prisma__OutboundClient<$Result.GetResult<Prisma.$OutboundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Outbounds.
     * @param {OutboundDeleteManyArgs} args - Arguments to filter Outbounds to delete.
     * @example
     * // Delete a few Outbounds
     * const { count } = await prisma.outbound.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutboundDeleteManyArgs>(args?: SelectSubset<T, OutboundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outbounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outbounds
     * const outbound = await prisma.outbound.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutboundUpdateManyArgs>(args: SelectSubset<T, OutboundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Outbound.
     * @param {OutboundUpsertArgs} args - Arguments to update or create a Outbound.
     * @example
     * // Update or create a Outbound
     * const outbound = await prisma.outbound.upsert({
     *   create: {
     *     // ... data to create a Outbound
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outbound we want to update
     *   }
     * })
     */
    upsert<T extends OutboundUpsertArgs>(args: SelectSubset<T, OutboundUpsertArgs<ExtArgs>>): Prisma__OutboundClient<$Result.GetResult<Prisma.$OutboundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Outbounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboundCountArgs} args - Arguments to filter Outbounds to count.
     * @example
     * // Count the number of Outbounds
     * const count = await prisma.outbound.count({
     *   where: {
     *     // ... the filter for the Outbounds we want to count
     *   }
     * })
    **/
    count<T extends OutboundCountArgs>(
      args?: Subset<T, OutboundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutboundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Outbound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutboundAggregateArgs>(args: Subset<T, OutboundAggregateArgs>): Prisma.PrismaPromise<GetOutboundAggregateType<T>>

    /**
     * Group by Outbound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboundGroupByArgs} args - Group by arguments.
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
      T extends OutboundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutboundGroupByArgs['orderBy'] }
        : { orderBy?: OutboundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutboundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutboundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Outbound model
   */
  readonly fields: OutboundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Outbound.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutboundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drug<T extends DrugDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DrugDefaultArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prescription<T extends Outbound$prescriptionArgs<ExtArgs> = {}>(args?: Subset<T, Outbound$prescriptionArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Outbound model
   */
  interface OutboundFieldRefs {
    readonly outbound_id: FieldRef<"Outbound", 'Int'>
    readonly drug_code: FieldRef<"Outbound", 'String'>
    readonly batch_number: FieldRef<"Outbound", 'String'>
    readonly quantity: FieldRef<"Outbound", 'Int'>
    readonly prescription_id: FieldRef<"Outbound", 'Int'>
    readonly outbound_type: FieldRef<"Outbound", 'String'>
    readonly outbound_time: FieldRef<"Outbound", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Outbound findUnique
   */
  export type OutboundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbound
     */
    select?: OutboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbound
     */
    omit?: OutboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundInclude<ExtArgs> | null
    /**
     * Filter, which Outbound to fetch.
     */
    where: OutboundWhereUniqueInput
  }

  /**
   * Outbound findUniqueOrThrow
   */
  export type OutboundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbound
     */
    select?: OutboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbound
     */
    omit?: OutboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundInclude<ExtArgs> | null
    /**
     * Filter, which Outbound to fetch.
     */
    where: OutboundWhereUniqueInput
  }

  /**
   * Outbound findFirst
   */
  export type OutboundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbound
     */
    select?: OutboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbound
     */
    omit?: OutboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundInclude<ExtArgs> | null
    /**
     * Filter, which Outbound to fetch.
     */
    where?: OutboundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outbounds to fetch.
     */
    orderBy?: OutboundOrderByWithRelationInput | OutboundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outbounds.
     */
    cursor?: OutboundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outbounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outbounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outbounds.
     */
    distinct?: OutboundScalarFieldEnum | OutboundScalarFieldEnum[]
  }

  /**
   * Outbound findFirstOrThrow
   */
  export type OutboundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbound
     */
    select?: OutboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbound
     */
    omit?: OutboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundInclude<ExtArgs> | null
    /**
     * Filter, which Outbound to fetch.
     */
    where?: OutboundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outbounds to fetch.
     */
    orderBy?: OutboundOrderByWithRelationInput | OutboundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outbounds.
     */
    cursor?: OutboundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outbounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outbounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outbounds.
     */
    distinct?: OutboundScalarFieldEnum | OutboundScalarFieldEnum[]
  }

  /**
   * Outbound findMany
   */
  export type OutboundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbound
     */
    select?: OutboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbound
     */
    omit?: OutboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundInclude<ExtArgs> | null
    /**
     * Filter, which Outbounds to fetch.
     */
    where?: OutboundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outbounds to fetch.
     */
    orderBy?: OutboundOrderByWithRelationInput | OutboundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Outbounds.
     */
    cursor?: OutboundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outbounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outbounds.
     */
    skip?: number
    distinct?: OutboundScalarFieldEnum | OutboundScalarFieldEnum[]
  }

  /**
   * Outbound create
   */
  export type OutboundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbound
     */
    select?: OutboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbound
     */
    omit?: OutboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundInclude<ExtArgs> | null
    /**
     * The data needed to create a Outbound.
     */
    data: XOR<OutboundCreateInput, OutboundUncheckedCreateInput>
  }

  /**
   * Outbound createMany
   */
  export type OutboundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Outbounds.
     */
    data: OutboundCreateManyInput | OutboundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Outbound update
   */
  export type OutboundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbound
     */
    select?: OutboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbound
     */
    omit?: OutboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundInclude<ExtArgs> | null
    /**
     * The data needed to update a Outbound.
     */
    data: XOR<OutboundUpdateInput, OutboundUncheckedUpdateInput>
    /**
     * Choose, which Outbound to update.
     */
    where: OutboundWhereUniqueInput
  }

  /**
   * Outbound updateMany
   */
  export type OutboundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Outbounds.
     */
    data: XOR<OutboundUpdateManyMutationInput, OutboundUncheckedUpdateManyInput>
    /**
     * Filter which Outbounds to update
     */
    where?: OutboundWhereInput
    /**
     * Limit how many Outbounds to update.
     */
    limit?: number
  }

  /**
   * Outbound upsert
   */
  export type OutboundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbound
     */
    select?: OutboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbound
     */
    omit?: OutboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundInclude<ExtArgs> | null
    /**
     * The filter to search for the Outbound to update in case it exists.
     */
    where: OutboundWhereUniqueInput
    /**
     * In case the Outbound found by the `where` argument doesn't exist, create a new Outbound with this data.
     */
    create: XOR<OutboundCreateInput, OutboundUncheckedCreateInput>
    /**
     * In case the Outbound was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutboundUpdateInput, OutboundUncheckedUpdateInput>
  }

  /**
   * Outbound delete
   */
  export type OutboundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbound
     */
    select?: OutboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbound
     */
    omit?: OutboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundInclude<ExtArgs> | null
    /**
     * Filter which Outbound to delete.
     */
    where: OutboundWhereUniqueInput
  }

  /**
   * Outbound deleteMany
   */
  export type OutboundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outbounds to delete
     */
    where?: OutboundWhereInput
    /**
     * Limit how many Outbounds to delete.
     */
    limit?: number
  }

  /**
   * Outbound.prescription
   */
  export type Outbound$prescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
  }

  /**
   * Outbound without action
   */
  export type OutboundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outbound
     */
    select?: OutboundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outbound
     */
    omit?: OutboundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutboundInclude<ExtArgs> | null
  }


  /**
   * Model PriceHistory
   */

  export type AggregatePriceHistory = {
    _count: PriceHistoryCountAggregateOutputType | null
    _avg: PriceHistoryAvgAggregateOutputType | null
    _sum: PriceHistorySumAggregateOutputType | null
    _min: PriceHistoryMinAggregateOutputType | null
    _max: PriceHistoryMaxAggregateOutputType | null
  }

  export type PriceHistoryAvgAggregateOutputType = {
    price_id: number | null
    old_price: number | null
    new_price: number | null
    operator_id: number | null
  }

  export type PriceHistorySumAggregateOutputType = {
    price_id: number | null
    old_price: number | null
    new_price: number | null
    operator_id: number | null
  }

  export type PriceHistoryMinAggregateOutputType = {
    price_id: number | null
    drug_code: string | null
    old_price: number | null
    new_price: number | null
    effective_date: Date | null
    operator_id: number | null
  }

  export type PriceHistoryMaxAggregateOutputType = {
    price_id: number | null
    drug_code: string | null
    old_price: number | null
    new_price: number | null
    effective_date: Date | null
    operator_id: number | null
  }

  export type PriceHistoryCountAggregateOutputType = {
    price_id: number
    drug_code: number
    old_price: number
    new_price: number
    effective_date: number
    operator_id: number
    _all: number
  }


  export type PriceHistoryAvgAggregateInputType = {
    price_id?: true
    old_price?: true
    new_price?: true
    operator_id?: true
  }

  export type PriceHistorySumAggregateInputType = {
    price_id?: true
    old_price?: true
    new_price?: true
    operator_id?: true
  }

  export type PriceHistoryMinAggregateInputType = {
    price_id?: true
    drug_code?: true
    old_price?: true
    new_price?: true
    effective_date?: true
    operator_id?: true
  }

  export type PriceHistoryMaxAggregateInputType = {
    price_id?: true
    drug_code?: true
    old_price?: true
    new_price?: true
    effective_date?: true
    operator_id?: true
  }

  export type PriceHistoryCountAggregateInputType = {
    price_id?: true
    drug_code?: true
    old_price?: true
    new_price?: true
    effective_date?: true
    operator_id?: true
    _all?: true
  }

  export type PriceHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceHistory to aggregate.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceHistories
    **/
    _count?: true | PriceHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceHistoryMaxAggregateInputType
  }

  export type GetPriceHistoryAggregateType<T extends PriceHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceHistory[P]>
      : GetScalarType<T[P], AggregatePriceHistory[P]>
  }




  export type PriceHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceHistoryWhereInput
    orderBy?: PriceHistoryOrderByWithAggregationInput | PriceHistoryOrderByWithAggregationInput[]
    by: PriceHistoryScalarFieldEnum[] | PriceHistoryScalarFieldEnum
    having?: PriceHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceHistoryCountAggregateInputType | true
    _avg?: PriceHistoryAvgAggregateInputType
    _sum?: PriceHistorySumAggregateInputType
    _min?: PriceHistoryMinAggregateInputType
    _max?: PriceHistoryMaxAggregateInputType
  }

  export type PriceHistoryGroupByOutputType = {
    price_id: number
    drug_code: string
    old_price: number | null
    new_price: number
    effective_date: Date
    operator_id: number | null
    _count: PriceHistoryCountAggregateOutputType | null
    _avg: PriceHistoryAvgAggregateOutputType | null
    _sum: PriceHistorySumAggregateOutputType | null
    _min: PriceHistoryMinAggregateOutputType | null
    _max: PriceHistoryMaxAggregateOutputType | null
  }

  type GetPriceHistoryGroupByPayload<T extends PriceHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PriceHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PriceHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    price_id?: boolean
    drug_code?: boolean
    old_price?: boolean
    new_price?: boolean
    effective_date?: boolean
    operator_id?: boolean
    drug?: boolean | DrugDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["priceHistory"]>



  export type PriceHistorySelectScalar = {
    price_id?: boolean
    drug_code?: boolean
    old_price?: boolean
    new_price?: boolean
    effective_date?: boolean
    operator_id?: boolean
  }

  export type PriceHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"price_id" | "drug_code" | "old_price" | "new_price" | "effective_date" | "operator_id", ExtArgs["result"]["priceHistory"]>
  export type PriceHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drug?: boolean | DrugDefaultArgs<ExtArgs>
  }

  export type $PriceHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceHistory"
    objects: {
      drug: Prisma.$DrugPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      price_id: number
      drug_code: string
      old_price: number | null
      new_price: number
      effective_date: Date
      operator_id: number | null
    }, ExtArgs["result"]["priceHistory"]>
    composites: {}
  }

  type PriceHistoryGetPayload<S extends boolean | null | undefined | PriceHistoryDefaultArgs> = $Result.GetResult<Prisma.$PriceHistoryPayload, S>

  type PriceHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PriceHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PriceHistoryCountAggregateInputType | true
    }

  export interface PriceHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceHistory'], meta: { name: 'PriceHistory' } }
    /**
     * Find zero or one PriceHistory that matches the filter.
     * @param {PriceHistoryFindUniqueArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceHistoryFindUniqueArgs>(args: SelectSubset<T, PriceHistoryFindUniqueArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PriceHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceHistoryFindUniqueOrThrowArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindFirstArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceHistoryFindFirstArgs>(args?: SelectSubset<T, PriceHistoryFindFirstArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindFirstOrThrowArgs} args - Arguments to find a PriceHistory
     * @example
     * // Get one PriceHistory
     * const priceHistory = await prisma.priceHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PriceHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceHistories
     * const priceHistories = await prisma.priceHistory.findMany()
     * 
     * // Get first 10 PriceHistories
     * const priceHistories = await prisma.priceHistory.findMany({ take: 10 })
     * 
     * // Only select the `price_id`
     * const priceHistoryWithPrice_idOnly = await prisma.priceHistory.findMany({ select: { price_id: true } })
     * 
     */
    findMany<T extends PriceHistoryFindManyArgs>(args?: SelectSubset<T, PriceHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PriceHistory.
     * @param {PriceHistoryCreateArgs} args - Arguments to create a PriceHistory.
     * @example
     * // Create one PriceHistory
     * const PriceHistory = await prisma.priceHistory.create({
     *   data: {
     *     // ... data to create a PriceHistory
     *   }
     * })
     * 
     */
    create<T extends PriceHistoryCreateArgs>(args: SelectSubset<T, PriceHistoryCreateArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PriceHistories.
     * @param {PriceHistoryCreateManyArgs} args - Arguments to create many PriceHistories.
     * @example
     * // Create many PriceHistories
     * const priceHistory = await prisma.priceHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceHistoryCreateManyArgs>(args?: SelectSubset<T, PriceHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PriceHistory.
     * @param {PriceHistoryDeleteArgs} args - Arguments to delete one PriceHistory.
     * @example
     * // Delete one PriceHistory
     * const PriceHistory = await prisma.priceHistory.delete({
     *   where: {
     *     // ... filter to delete one PriceHistory
     *   }
     * })
     * 
     */
    delete<T extends PriceHistoryDeleteArgs>(args: SelectSubset<T, PriceHistoryDeleteArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PriceHistory.
     * @param {PriceHistoryUpdateArgs} args - Arguments to update one PriceHistory.
     * @example
     * // Update one PriceHistory
     * const priceHistory = await prisma.priceHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceHistoryUpdateArgs>(args: SelectSubset<T, PriceHistoryUpdateArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PriceHistories.
     * @param {PriceHistoryDeleteManyArgs} args - Arguments to filter PriceHistories to delete.
     * @example
     * // Delete a few PriceHistories
     * const { count } = await prisma.priceHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceHistoryDeleteManyArgs>(args?: SelectSubset<T, PriceHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceHistories
     * const priceHistory = await prisma.priceHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceHistoryUpdateManyArgs>(args: SelectSubset<T, PriceHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PriceHistory.
     * @param {PriceHistoryUpsertArgs} args - Arguments to update or create a PriceHistory.
     * @example
     * // Update or create a PriceHistory
     * const priceHistory = await prisma.priceHistory.upsert({
     *   create: {
     *     // ... data to create a PriceHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceHistory we want to update
     *   }
     * })
     */
    upsert<T extends PriceHistoryUpsertArgs>(args: SelectSubset<T, PriceHistoryUpsertArgs<ExtArgs>>): Prisma__PriceHistoryClient<$Result.GetResult<Prisma.$PriceHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PriceHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryCountArgs} args - Arguments to filter PriceHistories to count.
     * @example
     * // Count the number of PriceHistories
     * const count = await prisma.priceHistory.count({
     *   where: {
     *     // ... the filter for the PriceHistories we want to count
     *   }
     * })
    **/
    count<T extends PriceHistoryCountArgs>(
      args?: Subset<T, PriceHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PriceHistoryAggregateArgs>(args: Subset<T, PriceHistoryAggregateArgs>): Prisma.PrismaPromise<GetPriceHistoryAggregateType<T>>

    /**
     * Group by PriceHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceHistoryGroupByArgs} args - Group by arguments.
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
      T extends PriceHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PriceHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PriceHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceHistory model
   */
  readonly fields: PriceHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drug<T extends DrugDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DrugDefaultArgs<ExtArgs>>): Prisma__DrugClient<$Result.GetResult<Prisma.$DrugPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PriceHistory model
   */
  interface PriceHistoryFieldRefs {
    readonly price_id: FieldRef<"PriceHistory", 'Int'>
    readonly drug_code: FieldRef<"PriceHistory", 'String'>
    readonly old_price: FieldRef<"PriceHistory", 'Float'>
    readonly new_price: FieldRef<"PriceHistory", 'Float'>
    readonly effective_date: FieldRef<"PriceHistory", 'DateTime'>
    readonly operator_id: FieldRef<"PriceHistory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PriceHistory findUnique
   */
  export type PriceHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory findUniqueOrThrow
   */
  export type PriceHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory findFirst
   */
  export type PriceHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceHistories.
     */
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * PriceHistory findFirstOrThrow
   */
  export type PriceHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistory to fetch.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceHistories.
     */
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * PriceHistory findMany
   */
  export type PriceHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PriceHistories to fetch.
     */
    where?: PriceHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceHistories to fetch.
     */
    orderBy?: PriceHistoryOrderByWithRelationInput | PriceHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceHistories.
     */
    cursor?: PriceHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceHistories.
     */
    skip?: number
    distinct?: PriceHistoryScalarFieldEnum | PriceHistoryScalarFieldEnum[]
  }

  /**
   * PriceHistory create
   */
  export type PriceHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PriceHistory.
     */
    data: XOR<PriceHistoryCreateInput, PriceHistoryUncheckedCreateInput>
  }

  /**
   * PriceHistory createMany
   */
  export type PriceHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceHistories.
     */
    data: PriceHistoryCreateManyInput | PriceHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceHistory update
   */
  export type PriceHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PriceHistory.
     */
    data: XOR<PriceHistoryUpdateInput, PriceHistoryUncheckedUpdateInput>
    /**
     * Choose, which PriceHistory to update.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory updateMany
   */
  export type PriceHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceHistories.
     */
    data: XOR<PriceHistoryUpdateManyMutationInput, PriceHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PriceHistories to update
     */
    where?: PriceHistoryWhereInput
    /**
     * Limit how many PriceHistories to update.
     */
    limit?: number
  }

  /**
   * PriceHistory upsert
   */
  export type PriceHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PriceHistory to update in case it exists.
     */
    where: PriceHistoryWhereUniqueInput
    /**
     * In case the PriceHistory found by the `where` argument doesn't exist, create a new PriceHistory with this data.
     */
    create: XOR<PriceHistoryCreateInput, PriceHistoryUncheckedCreateInput>
    /**
     * In case the PriceHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceHistoryUpdateInput, PriceHistoryUncheckedUpdateInput>
  }

  /**
   * PriceHistory delete
   */
  export type PriceHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
    /**
     * Filter which PriceHistory to delete.
     */
    where: PriceHistoryWhereUniqueInput
  }

  /**
   * PriceHistory deleteMany
   */
  export type PriceHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceHistories to delete
     */
    where?: PriceHistoryWhereInput
    /**
     * Limit how many PriceHistories to delete.
     */
    limit?: number
  }

  /**
   * PriceHistory without action
   */
  export type PriceHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceHistory
     */
    select?: PriceHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceHistory
     */
    omit?: PriceHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceHistoryInclude<ExtArgs> | null
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


  export const PatientScalarFieldEnum: {
    visit_id: 'visit_id',
    name: 'name',
    gender: 'gender',
    contact: 'contact',
    first_visit_date: 'first_visit_date',
    medical_history: 'medical_history'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    doctor_id: 'doctor_id',
    name: 'name',
    department: 'department'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const PrescriptionScalarFieldEnum: {
    prescription_id: 'prescription_id',
    patient_visit_id: 'patient_visit_id',
    doctor_id: 'doctor_id',
    create_time: 'create_time',
    status: 'status',
    diagnosis: 'diagnosis',
    remarks: 'remarks',
    total_amount: 'total_amount'
  };

  export type PrescriptionScalarFieldEnum = (typeof PrescriptionScalarFieldEnum)[keyof typeof PrescriptionScalarFieldEnum]


  export const PrescriptionDetailScalarFieldEnum: {
    prescription_id: 'prescription_id',
    drug_code: 'drug_code',
    drug_name: 'drug_name',
    unit_price: 'unit_price',
    quantity: 'quantity',
    usage_instruction: 'usage_instruction'
  };

  export type PrescriptionDetailScalarFieldEnum = (typeof PrescriptionDetailScalarFieldEnum)[keyof typeof PrescriptionDetailScalarFieldEnum]


  export const DrugScalarFieldEnum: {
    drug_code: 'drug_code',
    generic_name: 'generic_name',
    brand_name: 'brand_name',
    dosage_form: 'dosage_form',
    specification: 'specification',
    manufacturer: 'manufacturer',
    unit_price: 'unit_price'
  };

  export type DrugScalarFieldEnum = (typeof DrugScalarFieldEnum)[keyof typeof DrugScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    inventory_id: 'inventory_id',
    drug_code: 'drug_code',
    batch_number: 'batch_number',
    stock_quantity: 'stock_quantity',
    expiration_date: 'expiration_date',
    alert_threshold: 'alert_threshold',
    last_inbound_time: 'last_inbound_time',
    last_outbound_time: 'last_outbound_time'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const InboundScalarFieldEnum: {
    inbound_id: 'inbound_id',
    drug_code: 'drug_code',
    batch_number: 'batch_number',
    quantity: 'quantity',
    inbound_time: 'inbound_time',
    operator_id: 'operator_id'
  };

  export type InboundScalarFieldEnum = (typeof InboundScalarFieldEnum)[keyof typeof InboundScalarFieldEnum]


  export const OutboundScalarFieldEnum: {
    outbound_id: 'outbound_id',
    drug_code: 'drug_code',
    batch_number: 'batch_number',
    quantity: 'quantity',
    prescription_id: 'prescription_id',
    outbound_type: 'outbound_type',
    outbound_time: 'outbound_time'
  };

  export type OutboundScalarFieldEnum = (typeof OutboundScalarFieldEnum)[keyof typeof OutboundScalarFieldEnum]


  export const PriceHistoryScalarFieldEnum: {
    price_id: 'price_id',
    drug_code: 'drug_code',
    old_price: 'old_price',
    new_price: 'new_price',
    effective_date: 'effective_date',
    operator_id: 'operator_id'
  };

  export type PriceHistoryScalarFieldEnum = (typeof PriceHistoryScalarFieldEnum)[keyof typeof PriceHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const PatientOrderByRelevanceFieldEnum: {
    visit_id: 'visit_id',
    name: 'name',
    contact: 'contact',
    medical_history: 'medical_history'
  };

  export type PatientOrderByRelevanceFieldEnum = (typeof PatientOrderByRelevanceFieldEnum)[keyof typeof PatientOrderByRelevanceFieldEnum]


  export const DoctorOrderByRelevanceFieldEnum: {
    name: 'name',
    department: 'department'
  };

  export type DoctorOrderByRelevanceFieldEnum = (typeof DoctorOrderByRelevanceFieldEnum)[keyof typeof DoctorOrderByRelevanceFieldEnum]


  export const PrescriptionOrderByRelevanceFieldEnum: {
    patient_visit_id: 'patient_visit_id',
    diagnosis: 'diagnosis',
    remarks: 'remarks'
  };

  export type PrescriptionOrderByRelevanceFieldEnum = (typeof PrescriptionOrderByRelevanceFieldEnum)[keyof typeof PrescriptionOrderByRelevanceFieldEnum]


  export const PrescriptionDetailOrderByRelevanceFieldEnum: {
    drug_code: 'drug_code',
    drug_name: 'drug_name',
    usage_instruction: 'usage_instruction'
  };

  export type PrescriptionDetailOrderByRelevanceFieldEnum = (typeof PrescriptionDetailOrderByRelevanceFieldEnum)[keyof typeof PrescriptionDetailOrderByRelevanceFieldEnum]


  export const DrugOrderByRelevanceFieldEnum: {
    drug_code: 'drug_code',
    generic_name: 'generic_name',
    brand_name: 'brand_name',
    dosage_form: 'dosage_form',
    specification: 'specification',
    manufacturer: 'manufacturer'
  };

  export type DrugOrderByRelevanceFieldEnum = (typeof DrugOrderByRelevanceFieldEnum)[keyof typeof DrugOrderByRelevanceFieldEnum]


  export const InventoryOrderByRelevanceFieldEnum: {
    drug_code: 'drug_code',
    batch_number: 'batch_number'
  };

  export type InventoryOrderByRelevanceFieldEnum = (typeof InventoryOrderByRelevanceFieldEnum)[keyof typeof InventoryOrderByRelevanceFieldEnum]


  export const InboundOrderByRelevanceFieldEnum: {
    drug_code: 'drug_code',
    batch_number: 'batch_number'
  };

  export type InboundOrderByRelevanceFieldEnum = (typeof InboundOrderByRelevanceFieldEnum)[keyof typeof InboundOrderByRelevanceFieldEnum]


  export const OutboundOrderByRelevanceFieldEnum: {
    drug_code: 'drug_code',
    batch_number: 'batch_number',
    outbound_type: 'outbound_type'
  };

  export type OutboundOrderByRelevanceFieldEnum = (typeof OutboundOrderByRelevanceFieldEnum)[keyof typeof OutboundOrderByRelevanceFieldEnum]


  export const PriceHistoryOrderByRelevanceFieldEnum: {
    drug_code: 'drug_code'
  };

  export type PriceHistoryOrderByRelevanceFieldEnum = (typeof PriceHistoryOrderByRelevanceFieldEnum)[keyof typeof PriceHistoryOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'PrescriptionStatus'
   */
  export type EnumPrescriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrescriptionStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    visit_id?: StringFilter<"Patient"> | string
    name?: StringFilter<"Patient"> | string
    gender?: EnumGenderFilter<"Patient"> | $Enums.Gender
    contact?: StringNullableFilter<"Patient"> | string | null
    first_visit_date?: DateTimeFilter<"Patient"> | Date | string
    medical_history?: StringNullableFilter<"Patient"> | string | null
    prescriptions?: PrescriptionListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    visit_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    contact?: SortOrderInput | SortOrder
    first_visit_date?: SortOrder
    medical_history?: SortOrderInput | SortOrder
    prescriptions?: PrescriptionOrderByRelationAggregateInput
    _relevance?: PatientOrderByRelevanceInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    visit_id?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    name?: StringFilter<"Patient"> | string
    gender?: EnumGenderFilter<"Patient"> | $Enums.Gender
    contact?: StringNullableFilter<"Patient"> | string | null
    first_visit_date?: DateTimeFilter<"Patient"> | Date | string
    medical_history?: StringNullableFilter<"Patient"> | string | null
    prescriptions?: PrescriptionListRelationFilter
  }, "visit_id">

  export type PatientOrderByWithAggregationInput = {
    visit_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    contact?: SortOrderInput | SortOrder
    first_visit_date?: SortOrder
    medical_history?: SortOrderInput | SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    visit_id?: StringWithAggregatesFilter<"Patient"> | string
    name?: StringWithAggregatesFilter<"Patient"> | string
    gender?: EnumGenderWithAggregatesFilter<"Patient"> | $Enums.Gender
    contact?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    first_visit_date?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    medical_history?: StringNullableWithAggregatesFilter<"Patient"> | string | null
  }

  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    doctor_id?: IntFilter<"Doctor"> | number
    name?: StringFilter<"Doctor"> | string
    department?: StringFilter<"Doctor"> | string
    prescriptions?: PrescriptionListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    doctor_id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    prescriptions?: PrescriptionOrderByRelationAggregateInput
    _relevance?: DoctorOrderByRelevanceInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    doctor_id?: number
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    name?: StringFilter<"Doctor"> | string
    department?: StringFilter<"Doctor"> | string
    prescriptions?: PrescriptionListRelationFilter
  }, "doctor_id">

  export type DoctorOrderByWithAggregationInput = {
    doctor_id?: SortOrder
    name?: SortOrder
    department?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _avg?: DoctorAvgOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
    _sum?: DoctorSumOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    doctor_id?: IntWithAggregatesFilter<"Doctor"> | number
    name?: StringWithAggregatesFilter<"Doctor"> | string
    department?: StringWithAggregatesFilter<"Doctor"> | string
  }

  export type PrescriptionWhereInput = {
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    prescription_id?: IntFilter<"Prescription"> | number
    patient_visit_id?: StringFilter<"Prescription"> | string
    doctor_id?: IntFilter<"Prescription"> | number
    create_time?: DateTimeFilter<"Prescription"> | Date | string
    status?: EnumPrescriptionStatusFilter<"Prescription"> | $Enums.PrescriptionStatus
    diagnosis?: StringNullableFilter<"Prescription"> | string | null
    remarks?: StringNullableFilter<"Prescription"> | string | null
    total_amount?: FloatFilter<"Prescription"> | number
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    prescriptionDetails?: PrescriptionDetailListRelationFilter
    outbounds?: OutboundListRelationFilter
  }

  export type PrescriptionOrderByWithRelationInput = {
    prescription_id?: SortOrder
    patient_visit_id?: SortOrder
    doctor_id?: SortOrder
    create_time?: SortOrder
    status?: SortOrder
    diagnosis?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    total_amount?: SortOrder
    patient?: PatientOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
    prescriptionDetails?: PrescriptionDetailOrderByRelationAggregateInput
    outbounds?: OutboundOrderByRelationAggregateInput
    _relevance?: PrescriptionOrderByRelevanceInput
  }

  export type PrescriptionWhereUniqueInput = Prisma.AtLeast<{
    prescription_id?: number
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    patient_visit_id?: StringFilter<"Prescription"> | string
    doctor_id?: IntFilter<"Prescription"> | number
    create_time?: DateTimeFilter<"Prescription"> | Date | string
    status?: EnumPrescriptionStatusFilter<"Prescription"> | $Enums.PrescriptionStatus
    diagnosis?: StringNullableFilter<"Prescription"> | string | null
    remarks?: StringNullableFilter<"Prescription"> | string | null
    total_amount?: FloatFilter<"Prescription"> | number
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    prescriptionDetails?: PrescriptionDetailListRelationFilter
    outbounds?: OutboundListRelationFilter
  }, "prescription_id">

  export type PrescriptionOrderByWithAggregationInput = {
    prescription_id?: SortOrder
    patient_visit_id?: SortOrder
    doctor_id?: SortOrder
    create_time?: SortOrder
    status?: SortOrder
    diagnosis?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    total_amount?: SortOrder
    _count?: PrescriptionCountOrderByAggregateInput
    _avg?: PrescriptionAvgOrderByAggregateInput
    _max?: PrescriptionMaxOrderByAggregateInput
    _min?: PrescriptionMinOrderByAggregateInput
    _sum?: PrescriptionSumOrderByAggregateInput
  }

  export type PrescriptionScalarWhereWithAggregatesInput = {
    AND?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    OR?: PrescriptionScalarWhereWithAggregatesInput[]
    NOT?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    prescription_id?: IntWithAggregatesFilter<"Prescription"> | number
    patient_visit_id?: StringWithAggregatesFilter<"Prescription"> | string
    doctor_id?: IntWithAggregatesFilter<"Prescription"> | number
    create_time?: DateTimeWithAggregatesFilter<"Prescription"> | Date | string
    status?: EnumPrescriptionStatusWithAggregatesFilter<"Prescription"> | $Enums.PrescriptionStatus
    diagnosis?: StringNullableWithAggregatesFilter<"Prescription"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"Prescription"> | string | null
    total_amount?: FloatWithAggregatesFilter<"Prescription"> | number
  }

  export type PrescriptionDetailWhereInput = {
    AND?: PrescriptionDetailWhereInput | PrescriptionDetailWhereInput[]
    OR?: PrescriptionDetailWhereInput[]
    NOT?: PrescriptionDetailWhereInput | PrescriptionDetailWhereInput[]
    prescription_id?: IntFilter<"PrescriptionDetail"> | number
    drug_code?: StringFilter<"PrescriptionDetail"> | string
    drug_name?: StringFilter<"PrescriptionDetail"> | string
    unit_price?: FloatFilter<"PrescriptionDetail"> | number
    quantity?: IntFilter<"PrescriptionDetail"> | number
    usage_instruction?: StringFilter<"PrescriptionDetail"> | string
    prescription?: XOR<PrescriptionScalarRelationFilter, PrescriptionWhereInput>
    drug?: XOR<DrugScalarRelationFilter, DrugWhereInput>
  }

  export type PrescriptionDetailOrderByWithRelationInput = {
    prescription_id?: SortOrder
    drug_code?: SortOrder
    drug_name?: SortOrder
    unit_price?: SortOrder
    quantity?: SortOrder
    usage_instruction?: SortOrder
    prescription?: PrescriptionOrderByWithRelationInput
    drug?: DrugOrderByWithRelationInput
    _relevance?: PrescriptionDetailOrderByRelevanceInput
  }

  export type PrescriptionDetailWhereUniqueInput = Prisma.AtLeast<{
    prescription_id_drug_code?: PrescriptionDetailPrescription_idDrug_codeCompoundUniqueInput
    AND?: PrescriptionDetailWhereInput | PrescriptionDetailWhereInput[]
    OR?: PrescriptionDetailWhereInput[]
    NOT?: PrescriptionDetailWhereInput | PrescriptionDetailWhereInput[]
    prescription_id?: IntFilter<"PrescriptionDetail"> | number
    drug_code?: StringFilter<"PrescriptionDetail"> | string
    drug_name?: StringFilter<"PrescriptionDetail"> | string
    unit_price?: FloatFilter<"PrescriptionDetail"> | number
    quantity?: IntFilter<"PrescriptionDetail"> | number
    usage_instruction?: StringFilter<"PrescriptionDetail"> | string
    prescription?: XOR<PrescriptionScalarRelationFilter, PrescriptionWhereInput>
    drug?: XOR<DrugScalarRelationFilter, DrugWhereInput>
  }, "prescription_id_drug_code">

  export type PrescriptionDetailOrderByWithAggregationInput = {
    prescription_id?: SortOrder
    drug_code?: SortOrder
    drug_name?: SortOrder
    unit_price?: SortOrder
    quantity?: SortOrder
    usage_instruction?: SortOrder
    _count?: PrescriptionDetailCountOrderByAggregateInput
    _avg?: PrescriptionDetailAvgOrderByAggregateInput
    _max?: PrescriptionDetailMaxOrderByAggregateInput
    _min?: PrescriptionDetailMinOrderByAggregateInput
    _sum?: PrescriptionDetailSumOrderByAggregateInput
  }

  export type PrescriptionDetailScalarWhereWithAggregatesInput = {
    AND?: PrescriptionDetailScalarWhereWithAggregatesInput | PrescriptionDetailScalarWhereWithAggregatesInput[]
    OR?: PrescriptionDetailScalarWhereWithAggregatesInput[]
    NOT?: PrescriptionDetailScalarWhereWithAggregatesInput | PrescriptionDetailScalarWhereWithAggregatesInput[]
    prescription_id?: IntWithAggregatesFilter<"PrescriptionDetail"> | number
    drug_code?: StringWithAggregatesFilter<"PrescriptionDetail"> | string
    drug_name?: StringWithAggregatesFilter<"PrescriptionDetail"> | string
    unit_price?: FloatWithAggregatesFilter<"PrescriptionDetail"> | number
    quantity?: IntWithAggregatesFilter<"PrescriptionDetail"> | number
    usage_instruction?: StringWithAggregatesFilter<"PrescriptionDetail"> | string
  }

  export type DrugWhereInput = {
    AND?: DrugWhereInput | DrugWhereInput[]
    OR?: DrugWhereInput[]
    NOT?: DrugWhereInput | DrugWhereInput[]
    drug_code?: StringFilter<"Drug"> | string
    generic_name?: StringFilter<"Drug"> | string
    brand_name?: StringNullableFilter<"Drug"> | string | null
    dosage_form?: StringFilter<"Drug"> | string
    specification?: StringNullableFilter<"Drug"> | string | null
    manufacturer?: StringNullableFilter<"Drug"> | string | null
    unit_price?: FloatNullableFilter<"Drug"> | number | null
    inventories?: InventoryListRelationFilter
    inbounds?: InboundListRelationFilter
    outbounds?: OutboundListRelationFilter
    priceHistories?: PriceHistoryListRelationFilter
    prescriptionDetails?: PrescriptionDetailListRelationFilter
  }

  export type DrugOrderByWithRelationInput = {
    drug_code?: SortOrder
    generic_name?: SortOrder
    brand_name?: SortOrderInput | SortOrder
    dosage_form?: SortOrder
    specification?: SortOrderInput | SortOrder
    manufacturer?: SortOrderInput | SortOrder
    unit_price?: SortOrderInput | SortOrder
    inventories?: InventoryOrderByRelationAggregateInput
    inbounds?: InboundOrderByRelationAggregateInput
    outbounds?: OutboundOrderByRelationAggregateInput
    priceHistories?: PriceHistoryOrderByRelationAggregateInput
    prescriptionDetails?: PrescriptionDetailOrderByRelationAggregateInput
    _relevance?: DrugOrderByRelevanceInput
  }

  export type DrugWhereUniqueInput = Prisma.AtLeast<{
    drug_code?: string
    brand_name?: string
    AND?: DrugWhereInput | DrugWhereInput[]
    OR?: DrugWhereInput[]
    NOT?: DrugWhereInput | DrugWhereInput[]
    generic_name?: StringFilter<"Drug"> | string
    dosage_form?: StringFilter<"Drug"> | string
    specification?: StringNullableFilter<"Drug"> | string | null
    manufacturer?: StringNullableFilter<"Drug"> | string | null
    unit_price?: FloatNullableFilter<"Drug"> | number | null
    inventories?: InventoryListRelationFilter
    inbounds?: InboundListRelationFilter
    outbounds?: OutboundListRelationFilter
    priceHistories?: PriceHistoryListRelationFilter
    prescriptionDetails?: PrescriptionDetailListRelationFilter
  }, "drug_code" | "brand_name">

  export type DrugOrderByWithAggregationInput = {
    drug_code?: SortOrder
    generic_name?: SortOrder
    brand_name?: SortOrderInput | SortOrder
    dosage_form?: SortOrder
    specification?: SortOrderInput | SortOrder
    manufacturer?: SortOrderInput | SortOrder
    unit_price?: SortOrderInput | SortOrder
    _count?: DrugCountOrderByAggregateInput
    _avg?: DrugAvgOrderByAggregateInput
    _max?: DrugMaxOrderByAggregateInput
    _min?: DrugMinOrderByAggregateInput
    _sum?: DrugSumOrderByAggregateInput
  }

  export type DrugScalarWhereWithAggregatesInput = {
    AND?: DrugScalarWhereWithAggregatesInput | DrugScalarWhereWithAggregatesInput[]
    OR?: DrugScalarWhereWithAggregatesInput[]
    NOT?: DrugScalarWhereWithAggregatesInput | DrugScalarWhereWithAggregatesInput[]
    drug_code?: StringWithAggregatesFilter<"Drug"> | string
    generic_name?: StringWithAggregatesFilter<"Drug"> | string
    brand_name?: StringNullableWithAggregatesFilter<"Drug"> | string | null
    dosage_form?: StringWithAggregatesFilter<"Drug"> | string
    specification?: StringNullableWithAggregatesFilter<"Drug"> | string | null
    manufacturer?: StringNullableWithAggregatesFilter<"Drug"> | string | null
    unit_price?: FloatNullableWithAggregatesFilter<"Drug"> | number | null
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    inventory_id?: IntFilter<"Inventory"> | number
    drug_code?: StringFilter<"Inventory"> | string
    batch_number?: StringFilter<"Inventory"> | string
    stock_quantity?: IntFilter<"Inventory"> | number
    expiration_date?: DateTimeFilter<"Inventory"> | Date | string
    alert_threshold?: IntFilter<"Inventory"> | number
    last_inbound_time?: DateTimeNullableFilter<"Inventory"> | Date | string | null
    last_outbound_time?: DateTimeNullableFilter<"Inventory"> | Date | string | null
    drug?: XOR<DrugScalarRelationFilter, DrugWhereInput>
  }

  export type InventoryOrderByWithRelationInput = {
    inventory_id?: SortOrder
    drug_code?: SortOrder
    batch_number?: SortOrder
    stock_quantity?: SortOrder
    expiration_date?: SortOrder
    alert_threshold?: SortOrder
    last_inbound_time?: SortOrderInput | SortOrder
    last_outbound_time?: SortOrderInput | SortOrder
    drug?: DrugOrderByWithRelationInput
    _relevance?: InventoryOrderByRelevanceInput
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    inventory_id?: number
    drug_code_batch_number?: InventoryDrug_codeBatch_numberCompoundUniqueInput
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    drug_code?: StringFilter<"Inventory"> | string
    batch_number?: StringFilter<"Inventory"> | string
    stock_quantity?: IntFilter<"Inventory"> | number
    expiration_date?: DateTimeFilter<"Inventory"> | Date | string
    alert_threshold?: IntFilter<"Inventory"> | number
    last_inbound_time?: DateTimeNullableFilter<"Inventory"> | Date | string | null
    last_outbound_time?: DateTimeNullableFilter<"Inventory"> | Date | string | null
    drug?: XOR<DrugScalarRelationFilter, DrugWhereInput>
  }, "inventory_id" | "drug_code_batch_number">

  export type InventoryOrderByWithAggregationInput = {
    inventory_id?: SortOrder
    drug_code?: SortOrder
    batch_number?: SortOrder
    stock_quantity?: SortOrder
    expiration_date?: SortOrder
    alert_threshold?: SortOrder
    last_inbound_time?: SortOrderInput | SortOrder
    last_outbound_time?: SortOrderInput | SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    OR?: InventoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    inventory_id?: IntWithAggregatesFilter<"Inventory"> | number
    drug_code?: StringWithAggregatesFilter<"Inventory"> | string
    batch_number?: StringWithAggregatesFilter<"Inventory"> | string
    stock_quantity?: IntWithAggregatesFilter<"Inventory"> | number
    expiration_date?: DateTimeWithAggregatesFilter<"Inventory"> | Date | string
    alert_threshold?: IntWithAggregatesFilter<"Inventory"> | number
    last_inbound_time?: DateTimeNullableWithAggregatesFilter<"Inventory"> | Date | string | null
    last_outbound_time?: DateTimeNullableWithAggregatesFilter<"Inventory"> | Date | string | null
  }

  export type InboundWhereInput = {
    AND?: InboundWhereInput | InboundWhereInput[]
    OR?: InboundWhereInput[]
    NOT?: InboundWhereInput | InboundWhereInput[]
    inbound_id?: IntFilter<"Inbound"> | number
    drug_code?: StringFilter<"Inbound"> | string
    batch_number?: StringFilter<"Inbound"> | string
    quantity?: IntFilter<"Inbound"> | number
    inbound_time?: DateTimeFilter<"Inbound"> | Date | string
    operator_id?: IntNullableFilter<"Inbound"> | number | null
    drug?: XOR<DrugScalarRelationFilter, DrugWhereInput>
  }

  export type InboundOrderByWithRelationInput = {
    inbound_id?: SortOrder
    drug_code?: SortOrder
    batch_number?: SortOrder
    quantity?: SortOrder
    inbound_time?: SortOrder
    operator_id?: SortOrderInput | SortOrder
    drug?: DrugOrderByWithRelationInput
    _relevance?: InboundOrderByRelevanceInput
  }

  export type InboundWhereUniqueInput = Prisma.AtLeast<{
    inbound_id?: number
    AND?: InboundWhereInput | InboundWhereInput[]
    OR?: InboundWhereInput[]
    NOT?: InboundWhereInput | InboundWhereInput[]
    drug_code?: StringFilter<"Inbound"> | string
    batch_number?: StringFilter<"Inbound"> | string
    quantity?: IntFilter<"Inbound"> | number
    inbound_time?: DateTimeFilter<"Inbound"> | Date | string
    operator_id?: IntNullableFilter<"Inbound"> | number | null
    drug?: XOR<DrugScalarRelationFilter, DrugWhereInput>
  }, "inbound_id">

  export type InboundOrderByWithAggregationInput = {
    inbound_id?: SortOrder
    drug_code?: SortOrder
    batch_number?: SortOrder
    quantity?: SortOrder
    inbound_time?: SortOrder
    operator_id?: SortOrderInput | SortOrder
    _count?: InboundCountOrderByAggregateInput
    _avg?: InboundAvgOrderByAggregateInput
    _max?: InboundMaxOrderByAggregateInput
    _min?: InboundMinOrderByAggregateInput
    _sum?: InboundSumOrderByAggregateInput
  }

  export type InboundScalarWhereWithAggregatesInput = {
    AND?: InboundScalarWhereWithAggregatesInput | InboundScalarWhereWithAggregatesInput[]
    OR?: InboundScalarWhereWithAggregatesInput[]
    NOT?: InboundScalarWhereWithAggregatesInput | InboundScalarWhereWithAggregatesInput[]
    inbound_id?: IntWithAggregatesFilter<"Inbound"> | number
    drug_code?: StringWithAggregatesFilter<"Inbound"> | string
    batch_number?: StringWithAggregatesFilter<"Inbound"> | string
    quantity?: IntWithAggregatesFilter<"Inbound"> | number
    inbound_time?: DateTimeWithAggregatesFilter<"Inbound"> | Date | string
    operator_id?: IntNullableWithAggregatesFilter<"Inbound"> | number | null
  }

  export type OutboundWhereInput = {
    AND?: OutboundWhereInput | OutboundWhereInput[]
    OR?: OutboundWhereInput[]
    NOT?: OutboundWhereInput | OutboundWhereInput[]
    outbound_id?: IntFilter<"Outbound"> | number
    drug_code?: StringFilter<"Outbound"> | string
    batch_number?: StringFilter<"Outbound"> | string
    quantity?: IntFilter<"Outbound"> | number
    prescription_id?: IntNullableFilter<"Outbound"> | number | null
    outbound_type?: StringFilter<"Outbound"> | string
    outbound_time?: DateTimeFilter<"Outbound"> | Date | string
    drug?: XOR<DrugScalarRelationFilter, DrugWhereInput>
    prescription?: XOR<PrescriptionNullableScalarRelationFilter, PrescriptionWhereInput> | null
  }

  export type OutboundOrderByWithRelationInput = {
    outbound_id?: SortOrder
    drug_code?: SortOrder
    batch_number?: SortOrder
    quantity?: SortOrder
    prescription_id?: SortOrderInput | SortOrder
    outbound_type?: SortOrder
    outbound_time?: SortOrder
    drug?: DrugOrderByWithRelationInput
    prescription?: PrescriptionOrderByWithRelationInput
    _relevance?: OutboundOrderByRelevanceInput
  }

  export type OutboundWhereUniqueInput = Prisma.AtLeast<{
    outbound_id?: number
    AND?: OutboundWhereInput | OutboundWhereInput[]
    OR?: OutboundWhereInput[]
    NOT?: OutboundWhereInput | OutboundWhereInput[]
    drug_code?: StringFilter<"Outbound"> | string
    batch_number?: StringFilter<"Outbound"> | string
    quantity?: IntFilter<"Outbound"> | number
    prescription_id?: IntNullableFilter<"Outbound"> | number | null
    outbound_type?: StringFilter<"Outbound"> | string
    outbound_time?: DateTimeFilter<"Outbound"> | Date | string
    drug?: XOR<DrugScalarRelationFilter, DrugWhereInput>
    prescription?: XOR<PrescriptionNullableScalarRelationFilter, PrescriptionWhereInput> | null
  }, "outbound_id">

  export type OutboundOrderByWithAggregationInput = {
    outbound_id?: SortOrder
    drug_code?: SortOrder
    batch_number?: SortOrder
    quantity?: SortOrder
    prescription_id?: SortOrderInput | SortOrder
    outbound_type?: SortOrder
    outbound_time?: SortOrder
    _count?: OutboundCountOrderByAggregateInput
    _avg?: OutboundAvgOrderByAggregateInput
    _max?: OutboundMaxOrderByAggregateInput
    _min?: OutboundMinOrderByAggregateInput
    _sum?: OutboundSumOrderByAggregateInput
  }

  export type OutboundScalarWhereWithAggregatesInput = {
    AND?: OutboundScalarWhereWithAggregatesInput | OutboundScalarWhereWithAggregatesInput[]
    OR?: OutboundScalarWhereWithAggregatesInput[]
    NOT?: OutboundScalarWhereWithAggregatesInput | OutboundScalarWhereWithAggregatesInput[]
    outbound_id?: IntWithAggregatesFilter<"Outbound"> | number
    drug_code?: StringWithAggregatesFilter<"Outbound"> | string
    batch_number?: StringWithAggregatesFilter<"Outbound"> | string
    quantity?: IntWithAggregatesFilter<"Outbound"> | number
    prescription_id?: IntNullableWithAggregatesFilter<"Outbound"> | number | null
    outbound_type?: StringWithAggregatesFilter<"Outbound"> | string
    outbound_time?: DateTimeWithAggregatesFilter<"Outbound"> | Date | string
  }

  export type PriceHistoryWhereInput = {
    AND?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    OR?: PriceHistoryWhereInput[]
    NOT?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    price_id?: IntFilter<"PriceHistory"> | number
    drug_code?: StringFilter<"PriceHistory"> | string
    old_price?: FloatNullableFilter<"PriceHistory"> | number | null
    new_price?: FloatFilter<"PriceHistory"> | number
    effective_date?: DateTimeFilter<"PriceHistory"> | Date | string
    operator_id?: IntNullableFilter<"PriceHistory"> | number | null
    drug?: XOR<DrugScalarRelationFilter, DrugWhereInput>
  }

  export type PriceHistoryOrderByWithRelationInput = {
    price_id?: SortOrder
    drug_code?: SortOrder
    old_price?: SortOrderInput | SortOrder
    new_price?: SortOrder
    effective_date?: SortOrder
    operator_id?: SortOrderInput | SortOrder
    drug?: DrugOrderByWithRelationInput
    _relevance?: PriceHistoryOrderByRelevanceInput
  }

  export type PriceHistoryWhereUniqueInput = Prisma.AtLeast<{
    price_id?: number
    AND?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    OR?: PriceHistoryWhereInput[]
    NOT?: PriceHistoryWhereInput | PriceHistoryWhereInput[]
    drug_code?: StringFilter<"PriceHistory"> | string
    old_price?: FloatNullableFilter<"PriceHistory"> | number | null
    new_price?: FloatFilter<"PriceHistory"> | number
    effective_date?: DateTimeFilter<"PriceHistory"> | Date | string
    operator_id?: IntNullableFilter<"PriceHistory"> | number | null
    drug?: XOR<DrugScalarRelationFilter, DrugWhereInput>
  }, "price_id">

  export type PriceHistoryOrderByWithAggregationInput = {
    price_id?: SortOrder
    drug_code?: SortOrder
    old_price?: SortOrderInput | SortOrder
    new_price?: SortOrder
    effective_date?: SortOrder
    operator_id?: SortOrderInput | SortOrder
    _count?: PriceHistoryCountOrderByAggregateInput
    _avg?: PriceHistoryAvgOrderByAggregateInput
    _max?: PriceHistoryMaxOrderByAggregateInput
    _min?: PriceHistoryMinOrderByAggregateInput
    _sum?: PriceHistorySumOrderByAggregateInput
  }

  export type PriceHistoryScalarWhereWithAggregatesInput = {
    AND?: PriceHistoryScalarWhereWithAggregatesInput | PriceHistoryScalarWhereWithAggregatesInput[]
    OR?: PriceHistoryScalarWhereWithAggregatesInput[]
    NOT?: PriceHistoryScalarWhereWithAggregatesInput | PriceHistoryScalarWhereWithAggregatesInput[]
    price_id?: IntWithAggregatesFilter<"PriceHistory"> | number
    drug_code?: StringWithAggregatesFilter<"PriceHistory"> | string
    old_price?: FloatNullableWithAggregatesFilter<"PriceHistory"> | number | null
    new_price?: FloatWithAggregatesFilter<"PriceHistory"> | number
    effective_date?: DateTimeWithAggregatesFilter<"PriceHistory"> | Date | string
    operator_id?: IntNullableWithAggregatesFilter<"PriceHistory"> | number | null
  }

  export type PatientCreateInput = {
    visit_id: string
    name: string
    gender: $Enums.Gender
    contact?: string | null
    first_visit_date: Date | string
    medical_history?: string | null
    prescriptions?: PrescriptionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    visit_id: string
    name: string
    gender: $Enums.Gender
    contact?: string | null
    first_visit_date: Date | string
    medical_history?: string | null
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    first_visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    medical_history?: NullableStringFieldUpdateOperationsInput | string | null
    prescriptions?: PrescriptionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    first_visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    medical_history?: NullableStringFieldUpdateOperationsInput | string | null
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    visit_id: string
    name: string
    gender: $Enums.Gender
    contact?: string | null
    first_visit_date: Date | string
    medical_history?: string | null
  }

  export type PatientUpdateManyMutationInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    first_visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    medical_history?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PatientUncheckedUpdateManyInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    first_visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    medical_history?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoctorCreateInput = {
    name: string
    department: string
    prescriptions?: PrescriptionCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    doctor_id?: number
    name: string
    department: string
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    prescriptions?: PrescriptionUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    doctor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    doctor_id?: number
    name: string
    department: string
  }

  export type DoctorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    doctor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type PrescriptionCreateInput = {
    create_time?: Date | string
    status?: $Enums.PrescriptionStatus
    diagnosis?: string | null
    remarks?: string | null
    total_amount?: number
    patient: PatientCreateNestedOneWithoutPrescriptionsInput
    doctor: DoctorCreateNestedOneWithoutPrescriptionsInput
    prescriptionDetails?: PrescriptionDetailCreateNestedManyWithoutPrescriptionInput
    outbounds?: OutboundCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateInput = {
    prescription_id?: number
    patient_visit_id: string
    doctor_id: number
    create_time?: Date | string
    status?: $Enums.PrescriptionStatus
    diagnosis?: string | null
    remarks?: string | null
    total_amount?: number
    prescriptionDetails?: PrescriptionDetailUncheckedCreateNestedManyWithoutPrescriptionInput
    outbounds?: OutboundUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUpdateInput = {
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: FloatFieldUpdateOperationsInput | number
    patient?: PatientUpdateOneRequiredWithoutPrescriptionsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutPrescriptionsNestedInput
    prescriptionDetails?: PrescriptionDetailUpdateManyWithoutPrescriptionNestedInput
    outbounds?: OutboundUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateInput = {
    prescription_id?: IntFieldUpdateOperationsInput | number
    patient_visit_id?: StringFieldUpdateOperationsInput | string
    doctor_id?: IntFieldUpdateOperationsInput | number
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: FloatFieldUpdateOperationsInput | number
    prescriptionDetails?: PrescriptionDetailUncheckedUpdateManyWithoutPrescriptionNestedInput
    outbounds?: OutboundUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionCreateManyInput = {
    prescription_id?: number
    patient_visit_id: string
    doctor_id: number
    create_time?: Date | string
    status?: $Enums.PrescriptionStatus
    diagnosis?: string | null
    remarks?: string | null
    total_amount?: number
  }

  export type PrescriptionUpdateManyMutationInput = {
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: FloatFieldUpdateOperationsInput | number
  }

  export type PrescriptionUncheckedUpdateManyInput = {
    prescription_id?: IntFieldUpdateOperationsInput | number
    patient_visit_id?: StringFieldUpdateOperationsInput | string
    doctor_id?: IntFieldUpdateOperationsInput | number
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: FloatFieldUpdateOperationsInput | number
  }

  export type PrescriptionDetailCreateInput = {
    drug_name: string
    unit_price: number
    quantity?: number
    usage_instruction: string
    prescription: PrescriptionCreateNestedOneWithoutPrescriptionDetailsInput
    drug: DrugCreateNestedOneWithoutPrescriptionDetailsInput
  }

  export type PrescriptionDetailUncheckedCreateInput = {
    prescription_id: number
    drug_code: string
    drug_name: string
    unit_price: number
    quantity?: number
    usage_instruction: string
  }

  export type PrescriptionDetailUpdateInput = {
    drug_name?: StringFieldUpdateOperationsInput | string
    unit_price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    usage_instruction?: StringFieldUpdateOperationsInput | string
    prescription?: PrescriptionUpdateOneRequiredWithoutPrescriptionDetailsNestedInput
    drug?: DrugUpdateOneRequiredWithoutPrescriptionDetailsNestedInput
  }

  export type PrescriptionDetailUncheckedUpdateInput = {
    prescription_id?: IntFieldUpdateOperationsInput | number
    drug_code?: StringFieldUpdateOperationsInput | string
    drug_name?: StringFieldUpdateOperationsInput | string
    unit_price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    usage_instruction?: StringFieldUpdateOperationsInput | string
  }

  export type PrescriptionDetailCreateManyInput = {
    prescription_id: number
    drug_code: string
    drug_name: string
    unit_price: number
    quantity?: number
    usage_instruction: string
  }

  export type PrescriptionDetailUpdateManyMutationInput = {
    drug_name?: StringFieldUpdateOperationsInput | string
    unit_price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    usage_instruction?: StringFieldUpdateOperationsInput | string
  }

  export type PrescriptionDetailUncheckedUpdateManyInput = {
    prescription_id?: IntFieldUpdateOperationsInput | number
    drug_code?: StringFieldUpdateOperationsInput | string
    drug_name?: StringFieldUpdateOperationsInput | string
    unit_price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    usage_instruction?: StringFieldUpdateOperationsInput | string
  }

  export type DrugCreateInput = {
    drug_code: string
    generic_name: string
    brand_name?: string | null
    dosage_form: string
    specification?: string | null
    manufacturer?: string | null
    unit_price?: number | null
    inventories?: InventoryCreateNestedManyWithoutDrugInput
    inbounds?: InboundCreateNestedManyWithoutDrugInput
    outbounds?: OutboundCreateNestedManyWithoutDrugInput
    priceHistories?: PriceHistoryCreateNestedManyWithoutDrugInput
    prescriptionDetails?: PrescriptionDetailCreateNestedManyWithoutDrugInput
  }

  export type DrugUncheckedCreateInput = {
    drug_code: string
    generic_name: string
    brand_name?: string | null
    dosage_form: string
    specification?: string | null
    manufacturer?: string | null
    unit_price?: number | null
    inventories?: InventoryUncheckedCreateNestedManyWithoutDrugInput
    inbounds?: InboundUncheckedCreateNestedManyWithoutDrugInput
    outbounds?: OutboundUncheckedCreateNestedManyWithoutDrugInput
    priceHistories?: PriceHistoryUncheckedCreateNestedManyWithoutDrugInput
    prescriptionDetails?: PrescriptionDetailUncheckedCreateNestedManyWithoutDrugInput
  }

  export type DrugUpdateInput = {
    drug_code?: StringFieldUpdateOperationsInput | string
    generic_name?: StringFieldUpdateOperationsInput | string
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    dosage_form?: StringFieldUpdateOperationsInput | string
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
    inventories?: InventoryUpdateManyWithoutDrugNestedInput
    inbounds?: InboundUpdateManyWithoutDrugNestedInput
    outbounds?: OutboundUpdateManyWithoutDrugNestedInput
    priceHistories?: PriceHistoryUpdateManyWithoutDrugNestedInput
    prescriptionDetails?: PrescriptionDetailUpdateManyWithoutDrugNestedInput
  }

  export type DrugUncheckedUpdateInput = {
    drug_code?: StringFieldUpdateOperationsInput | string
    generic_name?: StringFieldUpdateOperationsInput | string
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    dosage_form?: StringFieldUpdateOperationsInput | string
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
    inventories?: InventoryUncheckedUpdateManyWithoutDrugNestedInput
    inbounds?: InboundUncheckedUpdateManyWithoutDrugNestedInput
    outbounds?: OutboundUncheckedUpdateManyWithoutDrugNestedInput
    priceHistories?: PriceHistoryUncheckedUpdateManyWithoutDrugNestedInput
    prescriptionDetails?: PrescriptionDetailUncheckedUpdateManyWithoutDrugNestedInput
  }

  export type DrugCreateManyInput = {
    drug_code: string
    generic_name: string
    brand_name?: string | null
    dosage_form: string
    specification?: string | null
    manufacturer?: string | null
    unit_price?: number | null
  }

  export type DrugUpdateManyMutationInput = {
    drug_code?: StringFieldUpdateOperationsInput | string
    generic_name?: StringFieldUpdateOperationsInput | string
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    dosage_form?: StringFieldUpdateOperationsInput | string
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type DrugUncheckedUpdateManyInput = {
    drug_code?: StringFieldUpdateOperationsInput | string
    generic_name?: StringFieldUpdateOperationsInput | string
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    dosage_form?: StringFieldUpdateOperationsInput | string
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type InventoryCreateInput = {
    batch_number: string
    stock_quantity?: number
    expiration_date: Date | string
    alert_threshold?: number
    last_inbound_time?: Date | string | null
    last_outbound_time?: Date | string | null
    drug: DrugCreateNestedOneWithoutInventoriesInput
  }

  export type InventoryUncheckedCreateInput = {
    inventory_id?: number
    drug_code: string
    batch_number: string
    stock_quantity?: number
    expiration_date: Date | string
    alert_threshold?: number
    last_inbound_time?: Date | string | null
    last_outbound_time?: Date | string | null
  }

  export type InventoryUpdateInput = {
    batch_number?: StringFieldUpdateOperationsInput | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    alert_threshold?: IntFieldUpdateOperationsInput | number
    last_inbound_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_outbound_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drug?: DrugUpdateOneRequiredWithoutInventoriesNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    inventory_id?: IntFieldUpdateOperationsInput | number
    drug_code?: StringFieldUpdateOperationsInput | string
    batch_number?: StringFieldUpdateOperationsInput | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    alert_threshold?: IntFieldUpdateOperationsInput | number
    last_inbound_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_outbound_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventoryCreateManyInput = {
    inventory_id?: number
    drug_code: string
    batch_number: string
    stock_quantity?: number
    expiration_date: Date | string
    alert_threshold?: number
    last_inbound_time?: Date | string | null
    last_outbound_time?: Date | string | null
  }

  export type InventoryUpdateManyMutationInput = {
    batch_number?: StringFieldUpdateOperationsInput | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    alert_threshold?: IntFieldUpdateOperationsInput | number
    last_inbound_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_outbound_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventoryUncheckedUpdateManyInput = {
    inventory_id?: IntFieldUpdateOperationsInput | number
    drug_code?: StringFieldUpdateOperationsInput | string
    batch_number?: StringFieldUpdateOperationsInput | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    alert_threshold?: IntFieldUpdateOperationsInput | number
    last_inbound_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_outbound_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InboundCreateInput = {
    batch_number: string
    quantity: number
    inbound_time?: Date | string
    operator_id?: number | null
    drug: DrugCreateNestedOneWithoutInboundsInput
  }

  export type InboundUncheckedCreateInput = {
    inbound_id?: number
    drug_code: string
    batch_number: string
    quantity: number
    inbound_time?: Date | string
    operator_id?: number | null
  }

  export type InboundUpdateInput = {
    batch_number?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    inbound_time?: DateTimeFieldUpdateOperationsInput | Date | string
    operator_id?: NullableIntFieldUpdateOperationsInput | number | null
    drug?: DrugUpdateOneRequiredWithoutInboundsNestedInput
  }

  export type InboundUncheckedUpdateInput = {
    inbound_id?: IntFieldUpdateOperationsInput | number
    drug_code?: StringFieldUpdateOperationsInput | string
    batch_number?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    inbound_time?: DateTimeFieldUpdateOperationsInput | Date | string
    operator_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InboundCreateManyInput = {
    inbound_id?: number
    drug_code: string
    batch_number: string
    quantity: number
    inbound_time?: Date | string
    operator_id?: number | null
  }

  export type InboundUpdateManyMutationInput = {
    batch_number?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    inbound_time?: DateTimeFieldUpdateOperationsInput | Date | string
    operator_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InboundUncheckedUpdateManyInput = {
    inbound_id?: IntFieldUpdateOperationsInput | number
    drug_code?: StringFieldUpdateOperationsInput | string
    batch_number?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    inbound_time?: DateTimeFieldUpdateOperationsInput | Date | string
    operator_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OutboundCreateInput = {
    batch_number: string
    quantity: number
    outbound_type: string
    outbound_time?: Date | string
    drug: DrugCreateNestedOneWithoutOutboundsInput
    prescription?: PrescriptionCreateNestedOneWithoutOutboundsInput
  }

  export type OutboundUncheckedCreateInput = {
    outbound_id?: number
    drug_code: string
    batch_number: string
    quantity: number
    prescription_id?: number | null
    outbound_type: string
    outbound_time?: Date | string
  }

  export type OutboundUpdateInput = {
    batch_number?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    outbound_type?: StringFieldUpdateOperationsInput | string
    outbound_time?: DateTimeFieldUpdateOperationsInput | Date | string
    drug?: DrugUpdateOneRequiredWithoutOutboundsNestedInput
    prescription?: PrescriptionUpdateOneWithoutOutboundsNestedInput
  }

  export type OutboundUncheckedUpdateInput = {
    outbound_id?: IntFieldUpdateOperationsInput | number
    drug_code?: StringFieldUpdateOperationsInput | string
    batch_number?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    prescription_id?: NullableIntFieldUpdateOperationsInput | number | null
    outbound_type?: StringFieldUpdateOperationsInput | string
    outbound_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutboundCreateManyInput = {
    outbound_id?: number
    drug_code: string
    batch_number: string
    quantity: number
    prescription_id?: number | null
    outbound_type: string
    outbound_time?: Date | string
  }

  export type OutboundUpdateManyMutationInput = {
    batch_number?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    outbound_type?: StringFieldUpdateOperationsInput | string
    outbound_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutboundUncheckedUpdateManyInput = {
    outbound_id?: IntFieldUpdateOperationsInput | number
    drug_code?: StringFieldUpdateOperationsInput | string
    batch_number?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    prescription_id?: NullableIntFieldUpdateOperationsInput | number | null
    outbound_type?: StringFieldUpdateOperationsInput | string
    outbound_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryCreateInput = {
    old_price?: number | null
    new_price: number
    effective_date: Date | string
    operator_id?: number | null
    drug: DrugCreateNestedOneWithoutPriceHistoriesInput
  }

  export type PriceHistoryUncheckedCreateInput = {
    price_id?: number
    drug_code: string
    old_price?: number | null
    new_price: number
    effective_date: Date | string
    operator_id?: number | null
  }

  export type PriceHistoryUpdateInput = {
    old_price?: NullableFloatFieldUpdateOperationsInput | number | null
    new_price?: FloatFieldUpdateOperationsInput | number
    effective_date?: DateTimeFieldUpdateOperationsInput | Date | string
    operator_id?: NullableIntFieldUpdateOperationsInput | number | null
    drug?: DrugUpdateOneRequiredWithoutPriceHistoriesNestedInput
  }

  export type PriceHistoryUncheckedUpdateInput = {
    price_id?: IntFieldUpdateOperationsInput | number
    drug_code?: StringFieldUpdateOperationsInput | string
    old_price?: NullableFloatFieldUpdateOperationsInput | number | null
    new_price?: FloatFieldUpdateOperationsInput | number
    effective_date?: DateTimeFieldUpdateOperationsInput | Date | string
    operator_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PriceHistoryCreateManyInput = {
    price_id?: number
    drug_code: string
    old_price?: number | null
    new_price: number
    effective_date: Date | string
    operator_id?: number | null
  }

  export type PriceHistoryUpdateManyMutationInput = {
    old_price?: NullableFloatFieldUpdateOperationsInput | number | null
    new_price?: FloatFieldUpdateOperationsInput | number
    effective_date?: DateTimeFieldUpdateOperationsInput | Date | string
    operator_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PriceHistoryUncheckedUpdateManyInput = {
    price_id?: IntFieldUpdateOperationsInput | number
    drug_code?: StringFieldUpdateOperationsInput | string
    old_price?: NullableFloatFieldUpdateOperationsInput | number | null
    new_price?: FloatFieldUpdateOperationsInput | number
    effective_date?: DateTimeFieldUpdateOperationsInput | Date | string
    operator_id?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type PrescriptionListRelationFilter = {
    every?: PrescriptionWhereInput
    some?: PrescriptionWhereInput
    none?: PrescriptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PrescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientOrderByRelevanceInput = {
    fields: PatientOrderByRelevanceFieldEnum | PatientOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PatientCountOrderByAggregateInput = {
    visit_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    contact?: SortOrder
    first_visit_date?: SortOrder
    medical_history?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    visit_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    contact?: SortOrder
    first_visit_date?: SortOrder
    medical_history?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    visit_id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    contact?: SortOrder
    first_visit_date?: SortOrder
    medical_history?: SortOrder
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

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type DoctorOrderByRelevanceInput = {
    fields: DoctorOrderByRelevanceFieldEnum | DoctorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DoctorCountOrderByAggregateInput = {
    doctor_id?: SortOrder
    name?: SortOrder
    department?: SortOrder
  }

  export type DoctorAvgOrderByAggregateInput = {
    doctor_id?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    doctor_id?: SortOrder
    name?: SortOrder
    department?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    doctor_id?: SortOrder
    name?: SortOrder
    department?: SortOrder
  }

  export type DoctorSumOrderByAggregateInput = {
    doctor_id?: SortOrder
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

  export type EnumPrescriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | EnumPrescriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrescriptionStatus[]
    notIn?: $Enums.PrescriptionStatus[]
    not?: NestedEnumPrescriptionStatusFilter<$PrismaModel> | $Enums.PrescriptionStatus
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

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type DoctorScalarRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type PrescriptionDetailListRelationFilter = {
    every?: PrescriptionDetailWhereInput
    some?: PrescriptionDetailWhereInput
    none?: PrescriptionDetailWhereInput
  }

  export type OutboundListRelationFilter = {
    every?: OutboundWhereInput
    some?: OutboundWhereInput
    none?: OutboundWhereInput
  }

  export type PrescriptionDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutboundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrescriptionOrderByRelevanceInput = {
    fields: PrescriptionOrderByRelevanceFieldEnum | PrescriptionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PrescriptionCountOrderByAggregateInput = {
    prescription_id?: SortOrder
    patient_visit_id?: SortOrder
    doctor_id?: SortOrder
    create_time?: SortOrder
    status?: SortOrder
    diagnosis?: SortOrder
    remarks?: SortOrder
    total_amount?: SortOrder
  }

  export type PrescriptionAvgOrderByAggregateInput = {
    prescription_id?: SortOrder
    doctor_id?: SortOrder
    total_amount?: SortOrder
  }

  export type PrescriptionMaxOrderByAggregateInput = {
    prescription_id?: SortOrder
    patient_visit_id?: SortOrder
    doctor_id?: SortOrder
    create_time?: SortOrder
    status?: SortOrder
    diagnosis?: SortOrder
    remarks?: SortOrder
    total_amount?: SortOrder
  }

  export type PrescriptionMinOrderByAggregateInput = {
    prescription_id?: SortOrder
    patient_visit_id?: SortOrder
    doctor_id?: SortOrder
    create_time?: SortOrder
    status?: SortOrder
    diagnosis?: SortOrder
    remarks?: SortOrder
    total_amount?: SortOrder
  }

  export type PrescriptionSumOrderByAggregateInput = {
    prescription_id?: SortOrder
    doctor_id?: SortOrder
    total_amount?: SortOrder
  }

  export type EnumPrescriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | EnumPrescriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrescriptionStatus[]
    notIn?: $Enums.PrescriptionStatus[]
    not?: NestedEnumPrescriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.PrescriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrescriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumPrescriptionStatusFilter<$PrismaModel>
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

  export type PrescriptionScalarRelationFilter = {
    is?: PrescriptionWhereInput
    isNot?: PrescriptionWhereInput
  }

  export type DrugScalarRelationFilter = {
    is?: DrugWhereInput
    isNot?: DrugWhereInput
  }

  export type PrescriptionDetailOrderByRelevanceInput = {
    fields: PrescriptionDetailOrderByRelevanceFieldEnum | PrescriptionDetailOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PrescriptionDetailPrescription_idDrug_codeCompoundUniqueInput = {
    prescription_id: number
    drug_code: string
  }

  export type PrescriptionDetailCountOrderByAggregateInput = {
    prescription_id?: SortOrder
    drug_code?: SortOrder
    drug_name?: SortOrder
    unit_price?: SortOrder
    quantity?: SortOrder
    usage_instruction?: SortOrder
  }

  export type PrescriptionDetailAvgOrderByAggregateInput = {
    prescription_id?: SortOrder
    unit_price?: SortOrder
    quantity?: SortOrder
  }

  export type PrescriptionDetailMaxOrderByAggregateInput = {
    prescription_id?: SortOrder
    drug_code?: SortOrder
    drug_name?: SortOrder
    unit_price?: SortOrder
    quantity?: SortOrder
    usage_instruction?: SortOrder
  }

  export type PrescriptionDetailMinOrderByAggregateInput = {
    prescription_id?: SortOrder
    drug_code?: SortOrder
    drug_name?: SortOrder
    unit_price?: SortOrder
    quantity?: SortOrder
    usage_instruction?: SortOrder
  }

  export type PrescriptionDetailSumOrderByAggregateInput = {
    prescription_id?: SortOrder
    unit_price?: SortOrder
    quantity?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type InventoryListRelationFilter = {
    every?: InventoryWhereInput
    some?: InventoryWhereInput
    none?: InventoryWhereInput
  }

  export type InboundListRelationFilter = {
    every?: InboundWhereInput
    some?: InboundWhereInput
    none?: InboundWhereInput
  }

  export type PriceHistoryListRelationFilter = {
    every?: PriceHistoryWhereInput
    some?: PriceHistoryWhereInput
    none?: PriceHistoryWhereInput
  }

  export type InventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InboundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PriceHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DrugOrderByRelevanceInput = {
    fields: DrugOrderByRelevanceFieldEnum | DrugOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DrugCountOrderByAggregateInput = {
    drug_code?: SortOrder
    generic_name?: SortOrder
    brand_name?: SortOrder
    dosage_form?: SortOrder
    specification?: SortOrder
    manufacturer?: SortOrder
    unit_price?: SortOrder
  }

  export type DrugAvgOrderByAggregateInput = {
    unit_price?: SortOrder
  }

  export type DrugMaxOrderByAggregateInput = {
    drug_code?: SortOrder
    generic_name?: SortOrder
    brand_name?: SortOrder
    dosage_form?: SortOrder
    specification?: SortOrder
    manufacturer?: SortOrder
    unit_price?: SortOrder
  }

  export type DrugMinOrderByAggregateInput = {
    drug_code?: SortOrder
    generic_name?: SortOrder
    brand_name?: SortOrder
    dosage_form?: SortOrder
    specification?: SortOrder
    manufacturer?: SortOrder
    unit_price?: SortOrder
  }

  export type DrugSumOrderByAggregateInput = {
    unit_price?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type InventoryOrderByRelevanceInput = {
    fields: InventoryOrderByRelevanceFieldEnum | InventoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InventoryDrug_codeBatch_numberCompoundUniqueInput = {
    drug_code: string
    batch_number: string
  }

  export type InventoryCountOrderByAggregateInput = {
    inventory_id?: SortOrder
    drug_code?: SortOrder
    batch_number?: SortOrder
    stock_quantity?: SortOrder
    expiration_date?: SortOrder
    alert_threshold?: SortOrder
    last_inbound_time?: SortOrder
    last_outbound_time?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    inventory_id?: SortOrder
    stock_quantity?: SortOrder
    alert_threshold?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    inventory_id?: SortOrder
    drug_code?: SortOrder
    batch_number?: SortOrder
    stock_quantity?: SortOrder
    expiration_date?: SortOrder
    alert_threshold?: SortOrder
    last_inbound_time?: SortOrder
    last_outbound_time?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    inventory_id?: SortOrder
    drug_code?: SortOrder
    batch_number?: SortOrder
    stock_quantity?: SortOrder
    expiration_date?: SortOrder
    alert_threshold?: SortOrder
    last_inbound_time?: SortOrder
    last_outbound_time?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    inventory_id?: SortOrder
    stock_quantity?: SortOrder
    alert_threshold?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type InboundOrderByRelevanceInput = {
    fields: InboundOrderByRelevanceFieldEnum | InboundOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InboundCountOrderByAggregateInput = {
    inbound_id?: SortOrder
    drug_code?: SortOrder
    batch_number?: SortOrder
    quantity?: SortOrder
    inbound_time?: SortOrder
    operator_id?: SortOrder
  }

  export type InboundAvgOrderByAggregateInput = {
    inbound_id?: SortOrder
    quantity?: SortOrder
    operator_id?: SortOrder
  }

  export type InboundMaxOrderByAggregateInput = {
    inbound_id?: SortOrder
    drug_code?: SortOrder
    batch_number?: SortOrder
    quantity?: SortOrder
    inbound_time?: SortOrder
    operator_id?: SortOrder
  }

  export type InboundMinOrderByAggregateInput = {
    inbound_id?: SortOrder
    drug_code?: SortOrder
    batch_number?: SortOrder
    quantity?: SortOrder
    inbound_time?: SortOrder
    operator_id?: SortOrder
  }

  export type InboundSumOrderByAggregateInput = {
    inbound_id?: SortOrder
    quantity?: SortOrder
    operator_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PrescriptionNullableScalarRelationFilter = {
    is?: PrescriptionWhereInput | null
    isNot?: PrescriptionWhereInput | null
  }

  export type OutboundOrderByRelevanceInput = {
    fields: OutboundOrderByRelevanceFieldEnum | OutboundOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OutboundCountOrderByAggregateInput = {
    outbound_id?: SortOrder
    drug_code?: SortOrder
    batch_number?: SortOrder
    quantity?: SortOrder
    prescription_id?: SortOrder
    outbound_type?: SortOrder
    outbound_time?: SortOrder
  }

  export type OutboundAvgOrderByAggregateInput = {
    outbound_id?: SortOrder
    quantity?: SortOrder
    prescription_id?: SortOrder
  }

  export type OutboundMaxOrderByAggregateInput = {
    outbound_id?: SortOrder
    drug_code?: SortOrder
    batch_number?: SortOrder
    quantity?: SortOrder
    prescription_id?: SortOrder
    outbound_type?: SortOrder
    outbound_time?: SortOrder
  }

  export type OutboundMinOrderByAggregateInput = {
    outbound_id?: SortOrder
    drug_code?: SortOrder
    batch_number?: SortOrder
    quantity?: SortOrder
    prescription_id?: SortOrder
    outbound_type?: SortOrder
    outbound_time?: SortOrder
  }

  export type OutboundSumOrderByAggregateInput = {
    outbound_id?: SortOrder
    quantity?: SortOrder
    prescription_id?: SortOrder
  }

  export type PriceHistoryOrderByRelevanceInput = {
    fields: PriceHistoryOrderByRelevanceFieldEnum | PriceHistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PriceHistoryCountOrderByAggregateInput = {
    price_id?: SortOrder
    drug_code?: SortOrder
    old_price?: SortOrder
    new_price?: SortOrder
    effective_date?: SortOrder
    operator_id?: SortOrder
  }

  export type PriceHistoryAvgOrderByAggregateInput = {
    price_id?: SortOrder
    old_price?: SortOrder
    new_price?: SortOrder
    operator_id?: SortOrder
  }

  export type PriceHistoryMaxOrderByAggregateInput = {
    price_id?: SortOrder
    drug_code?: SortOrder
    old_price?: SortOrder
    new_price?: SortOrder
    effective_date?: SortOrder
    operator_id?: SortOrder
  }

  export type PriceHistoryMinOrderByAggregateInput = {
    price_id?: SortOrder
    drug_code?: SortOrder
    old_price?: SortOrder
    new_price?: SortOrder
    effective_date?: SortOrder
    operator_id?: SortOrder
  }

  export type PriceHistorySumOrderByAggregateInput = {
    price_id?: SortOrder
    old_price?: SortOrder
    new_price?: SortOrder
    operator_id?: SortOrder
  }

  export type PrescriptionCreateNestedManyWithoutPatientInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PrescriptionUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPatientInput | PrescriptionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPatientInput | PrescriptionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPatientInput | PrescriptionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput> | PrescriptionCreateWithoutPatientInput[] | PrescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPatientInput | PrescriptionCreateOrConnectWithoutPatientInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutPatientInput | PrescriptionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PrescriptionCreateManyPatientInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutPatientInput | PrescriptionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutPatientInput | PrescriptionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type PrescriptionCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type PrescriptionUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutDoctorInput | PrescriptionUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutDoctorInput | PrescriptionUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutDoctorInput | PrescriptionUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PrescriptionUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput> | PrescriptionCreateWithoutDoctorInput[] | PrescriptionUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutDoctorInput | PrescriptionCreateOrConnectWithoutDoctorInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutDoctorInput | PrescriptionUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: PrescriptionCreateManyDoctorInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutDoctorInput | PrescriptionUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutDoctorInput | PrescriptionUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<PatientCreateWithoutPrescriptionsInput, PatientUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPrescriptionsInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<DoctorCreateWithoutPrescriptionsInput, DoctorUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutPrescriptionsInput
    connect?: DoctorWhereUniqueInput
  }

  export type PrescriptionDetailCreateNestedManyWithoutPrescriptionInput = {
    create?: XOR<PrescriptionDetailCreateWithoutPrescriptionInput, PrescriptionDetailUncheckedCreateWithoutPrescriptionInput> | PrescriptionDetailCreateWithoutPrescriptionInput[] | PrescriptionDetailUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: PrescriptionDetailCreateOrConnectWithoutPrescriptionInput | PrescriptionDetailCreateOrConnectWithoutPrescriptionInput[]
    createMany?: PrescriptionDetailCreateManyPrescriptionInputEnvelope
    connect?: PrescriptionDetailWhereUniqueInput | PrescriptionDetailWhereUniqueInput[]
  }

  export type OutboundCreateNestedManyWithoutPrescriptionInput = {
    create?: XOR<OutboundCreateWithoutPrescriptionInput, OutboundUncheckedCreateWithoutPrescriptionInput> | OutboundCreateWithoutPrescriptionInput[] | OutboundUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: OutboundCreateOrConnectWithoutPrescriptionInput | OutboundCreateOrConnectWithoutPrescriptionInput[]
    createMany?: OutboundCreateManyPrescriptionInputEnvelope
    connect?: OutboundWhereUniqueInput | OutboundWhereUniqueInput[]
  }

  export type PrescriptionDetailUncheckedCreateNestedManyWithoutPrescriptionInput = {
    create?: XOR<PrescriptionDetailCreateWithoutPrescriptionInput, PrescriptionDetailUncheckedCreateWithoutPrescriptionInput> | PrescriptionDetailCreateWithoutPrescriptionInput[] | PrescriptionDetailUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: PrescriptionDetailCreateOrConnectWithoutPrescriptionInput | PrescriptionDetailCreateOrConnectWithoutPrescriptionInput[]
    createMany?: PrescriptionDetailCreateManyPrescriptionInputEnvelope
    connect?: PrescriptionDetailWhereUniqueInput | PrescriptionDetailWhereUniqueInput[]
  }

  export type OutboundUncheckedCreateNestedManyWithoutPrescriptionInput = {
    create?: XOR<OutboundCreateWithoutPrescriptionInput, OutboundUncheckedCreateWithoutPrescriptionInput> | OutboundCreateWithoutPrescriptionInput[] | OutboundUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: OutboundCreateOrConnectWithoutPrescriptionInput | OutboundCreateOrConnectWithoutPrescriptionInput[]
    createMany?: OutboundCreateManyPrescriptionInputEnvelope
    connect?: OutboundWhereUniqueInput | OutboundWhereUniqueInput[]
  }

  export type EnumPrescriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.PrescriptionStatus
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PatientUpdateOneRequiredWithoutPrescriptionsNestedInput = {
    create?: XOR<PatientCreateWithoutPrescriptionsInput, PatientUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPrescriptionsInput
    upsert?: PatientUpsertWithoutPrescriptionsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutPrescriptionsInput, PatientUpdateWithoutPrescriptionsInput>, PatientUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type DoctorUpdateOneRequiredWithoutPrescriptionsNestedInput = {
    create?: XOR<DoctorCreateWithoutPrescriptionsInput, DoctorUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutPrescriptionsInput
    upsert?: DoctorUpsertWithoutPrescriptionsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutPrescriptionsInput, DoctorUpdateWithoutPrescriptionsInput>, DoctorUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type PrescriptionDetailUpdateManyWithoutPrescriptionNestedInput = {
    create?: XOR<PrescriptionDetailCreateWithoutPrescriptionInput, PrescriptionDetailUncheckedCreateWithoutPrescriptionInput> | PrescriptionDetailCreateWithoutPrescriptionInput[] | PrescriptionDetailUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: PrescriptionDetailCreateOrConnectWithoutPrescriptionInput | PrescriptionDetailCreateOrConnectWithoutPrescriptionInput[]
    upsert?: PrescriptionDetailUpsertWithWhereUniqueWithoutPrescriptionInput | PrescriptionDetailUpsertWithWhereUniqueWithoutPrescriptionInput[]
    createMany?: PrescriptionDetailCreateManyPrescriptionInputEnvelope
    set?: PrescriptionDetailWhereUniqueInput | PrescriptionDetailWhereUniqueInput[]
    disconnect?: PrescriptionDetailWhereUniqueInput | PrescriptionDetailWhereUniqueInput[]
    delete?: PrescriptionDetailWhereUniqueInput | PrescriptionDetailWhereUniqueInput[]
    connect?: PrescriptionDetailWhereUniqueInput | PrescriptionDetailWhereUniqueInput[]
    update?: PrescriptionDetailUpdateWithWhereUniqueWithoutPrescriptionInput | PrescriptionDetailUpdateWithWhereUniqueWithoutPrescriptionInput[]
    updateMany?: PrescriptionDetailUpdateManyWithWhereWithoutPrescriptionInput | PrescriptionDetailUpdateManyWithWhereWithoutPrescriptionInput[]
    deleteMany?: PrescriptionDetailScalarWhereInput | PrescriptionDetailScalarWhereInput[]
  }

  export type OutboundUpdateManyWithoutPrescriptionNestedInput = {
    create?: XOR<OutboundCreateWithoutPrescriptionInput, OutboundUncheckedCreateWithoutPrescriptionInput> | OutboundCreateWithoutPrescriptionInput[] | OutboundUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: OutboundCreateOrConnectWithoutPrescriptionInput | OutboundCreateOrConnectWithoutPrescriptionInput[]
    upsert?: OutboundUpsertWithWhereUniqueWithoutPrescriptionInput | OutboundUpsertWithWhereUniqueWithoutPrescriptionInput[]
    createMany?: OutboundCreateManyPrescriptionInputEnvelope
    set?: OutboundWhereUniqueInput | OutboundWhereUniqueInput[]
    disconnect?: OutboundWhereUniqueInput | OutboundWhereUniqueInput[]
    delete?: OutboundWhereUniqueInput | OutboundWhereUniqueInput[]
    connect?: OutboundWhereUniqueInput | OutboundWhereUniqueInput[]
    update?: OutboundUpdateWithWhereUniqueWithoutPrescriptionInput | OutboundUpdateWithWhereUniqueWithoutPrescriptionInput[]
    updateMany?: OutboundUpdateManyWithWhereWithoutPrescriptionInput | OutboundUpdateManyWithWhereWithoutPrescriptionInput[]
    deleteMany?: OutboundScalarWhereInput | OutboundScalarWhereInput[]
  }

  export type PrescriptionDetailUncheckedUpdateManyWithoutPrescriptionNestedInput = {
    create?: XOR<PrescriptionDetailCreateWithoutPrescriptionInput, PrescriptionDetailUncheckedCreateWithoutPrescriptionInput> | PrescriptionDetailCreateWithoutPrescriptionInput[] | PrescriptionDetailUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: PrescriptionDetailCreateOrConnectWithoutPrescriptionInput | PrescriptionDetailCreateOrConnectWithoutPrescriptionInput[]
    upsert?: PrescriptionDetailUpsertWithWhereUniqueWithoutPrescriptionInput | PrescriptionDetailUpsertWithWhereUniqueWithoutPrescriptionInput[]
    createMany?: PrescriptionDetailCreateManyPrescriptionInputEnvelope
    set?: PrescriptionDetailWhereUniqueInput | PrescriptionDetailWhereUniqueInput[]
    disconnect?: PrescriptionDetailWhereUniqueInput | PrescriptionDetailWhereUniqueInput[]
    delete?: PrescriptionDetailWhereUniqueInput | PrescriptionDetailWhereUniqueInput[]
    connect?: PrescriptionDetailWhereUniqueInput | PrescriptionDetailWhereUniqueInput[]
    update?: PrescriptionDetailUpdateWithWhereUniqueWithoutPrescriptionInput | PrescriptionDetailUpdateWithWhereUniqueWithoutPrescriptionInput[]
    updateMany?: PrescriptionDetailUpdateManyWithWhereWithoutPrescriptionInput | PrescriptionDetailUpdateManyWithWhereWithoutPrescriptionInput[]
    deleteMany?: PrescriptionDetailScalarWhereInput | PrescriptionDetailScalarWhereInput[]
  }

  export type OutboundUncheckedUpdateManyWithoutPrescriptionNestedInput = {
    create?: XOR<OutboundCreateWithoutPrescriptionInput, OutboundUncheckedCreateWithoutPrescriptionInput> | OutboundCreateWithoutPrescriptionInput[] | OutboundUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: OutboundCreateOrConnectWithoutPrescriptionInput | OutboundCreateOrConnectWithoutPrescriptionInput[]
    upsert?: OutboundUpsertWithWhereUniqueWithoutPrescriptionInput | OutboundUpsertWithWhereUniqueWithoutPrescriptionInput[]
    createMany?: OutboundCreateManyPrescriptionInputEnvelope
    set?: OutboundWhereUniqueInput | OutboundWhereUniqueInput[]
    disconnect?: OutboundWhereUniqueInput | OutboundWhereUniqueInput[]
    delete?: OutboundWhereUniqueInput | OutboundWhereUniqueInput[]
    connect?: OutboundWhereUniqueInput | OutboundWhereUniqueInput[]
    update?: OutboundUpdateWithWhereUniqueWithoutPrescriptionInput | OutboundUpdateWithWhereUniqueWithoutPrescriptionInput[]
    updateMany?: OutboundUpdateManyWithWhereWithoutPrescriptionInput | OutboundUpdateManyWithWhereWithoutPrescriptionInput[]
    deleteMany?: OutboundScalarWhereInput | OutboundScalarWhereInput[]
  }

  export type PrescriptionCreateNestedOneWithoutPrescriptionDetailsInput = {
    create?: XOR<PrescriptionCreateWithoutPrescriptionDetailsInput, PrescriptionUncheckedCreateWithoutPrescriptionDetailsInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPrescriptionDetailsInput
    connect?: PrescriptionWhereUniqueInput
  }

  export type DrugCreateNestedOneWithoutPrescriptionDetailsInput = {
    create?: XOR<DrugCreateWithoutPrescriptionDetailsInput, DrugUncheckedCreateWithoutPrescriptionDetailsInput>
    connectOrCreate?: DrugCreateOrConnectWithoutPrescriptionDetailsInput
    connect?: DrugWhereUniqueInput
  }

  export type PrescriptionUpdateOneRequiredWithoutPrescriptionDetailsNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPrescriptionDetailsInput, PrescriptionUncheckedCreateWithoutPrescriptionDetailsInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPrescriptionDetailsInput
    upsert?: PrescriptionUpsertWithoutPrescriptionDetailsInput
    connect?: PrescriptionWhereUniqueInput
    update?: XOR<XOR<PrescriptionUpdateToOneWithWhereWithoutPrescriptionDetailsInput, PrescriptionUpdateWithoutPrescriptionDetailsInput>, PrescriptionUncheckedUpdateWithoutPrescriptionDetailsInput>
  }

  export type DrugUpdateOneRequiredWithoutPrescriptionDetailsNestedInput = {
    create?: XOR<DrugCreateWithoutPrescriptionDetailsInput, DrugUncheckedCreateWithoutPrescriptionDetailsInput>
    connectOrCreate?: DrugCreateOrConnectWithoutPrescriptionDetailsInput
    upsert?: DrugUpsertWithoutPrescriptionDetailsInput
    connect?: DrugWhereUniqueInput
    update?: XOR<XOR<DrugUpdateToOneWithWhereWithoutPrescriptionDetailsInput, DrugUpdateWithoutPrescriptionDetailsInput>, DrugUncheckedUpdateWithoutPrescriptionDetailsInput>
  }

  export type InventoryCreateNestedManyWithoutDrugInput = {
    create?: XOR<InventoryCreateWithoutDrugInput, InventoryUncheckedCreateWithoutDrugInput> | InventoryCreateWithoutDrugInput[] | InventoryUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutDrugInput | InventoryCreateOrConnectWithoutDrugInput[]
    createMany?: InventoryCreateManyDrugInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type InboundCreateNestedManyWithoutDrugInput = {
    create?: XOR<InboundCreateWithoutDrugInput, InboundUncheckedCreateWithoutDrugInput> | InboundCreateWithoutDrugInput[] | InboundUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: InboundCreateOrConnectWithoutDrugInput | InboundCreateOrConnectWithoutDrugInput[]
    createMany?: InboundCreateManyDrugInputEnvelope
    connect?: InboundWhereUniqueInput | InboundWhereUniqueInput[]
  }

  export type OutboundCreateNestedManyWithoutDrugInput = {
    create?: XOR<OutboundCreateWithoutDrugInput, OutboundUncheckedCreateWithoutDrugInput> | OutboundCreateWithoutDrugInput[] | OutboundUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: OutboundCreateOrConnectWithoutDrugInput | OutboundCreateOrConnectWithoutDrugInput[]
    createMany?: OutboundCreateManyDrugInputEnvelope
    connect?: OutboundWhereUniqueInput | OutboundWhereUniqueInput[]
  }

  export type PriceHistoryCreateNestedManyWithoutDrugInput = {
    create?: XOR<PriceHistoryCreateWithoutDrugInput, PriceHistoryUncheckedCreateWithoutDrugInput> | PriceHistoryCreateWithoutDrugInput[] | PriceHistoryUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutDrugInput | PriceHistoryCreateOrConnectWithoutDrugInput[]
    createMany?: PriceHistoryCreateManyDrugInputEnvelope
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
  }

  export type PrescriptionDetailCreateNestedManyWithoutDrugInput = {
    create?: XOR<PrescriptionDetailCreateWithoutDrugInput, PrescriptionDetailUncheckedCreateWithoutDrugInput> | PrescriptionDetailCreateWithoutDrugInput[] | PrescriptionDetailUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: PrescriptionDetailCreateOrConnectWithoutDrugInput | PrescriptionDetailCreateOrConnectWithoutDrugInput[]
    createMany?: PrescriptionDetailCreateManyDrugInputEnvelope
    connect?: PrescriptionDetailWhereUniqueInput | PrescriptionDetailWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutDrugInput = {
    create?: XOR<InventoryCreateWithoutDrugInput, InventoryUncheckedCreateWithoutDrugInput> | InventoryCreateWithoutDrugInput[] | InventoryUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutDrugInput | InventoryCreateOrConnectWithoutDrugInput[]
    createMany?: InventoryCreateManyDrugInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type InboundUncheckedCreateNestedManyWithoutDrugInput = {
    create?: XOR<InboundCreateWithoutDrugInput, InboundUncheckedCreateWithoutDrugInput> | InboundCreateWithoutDrugInput[] | InboundUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: InboundCreateOrConnectWithoutDrugInput | InboundCreateOrConnectWithoutDrugInput[]
    createMany?: InboundCreateManyDrugInputEnvelope
    connect?: InboundWhereUniqueInput | InboundWhereUniqueInput[]
  }

  export type OutboundUncheckedCreateNestedManyWithoutDrugInput = {
    create?: XOR<OutboundCreateWithoutDrugInput, OutboundUncheckedCreateWithoutDrugInput> | OutboundCreateWithoutDrugInput[] | OutboundUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: OutboundCreateOrConnectWithoutDrugInput | OutboundCreateOrConnectWithoutDrugInput[]
    createMany?: OutboundCreateManyDrugInputEnvelope
    connect?: OutboundWhereUniqueInput | OutboundWhereUniqueInput[]
  }

  export type PriceHistoryUncheckedCreateNestedManyWithoutDrugInput = {
    create?: XOR<PriceHistoryCreateWithoutDrugInput, PriceHistoryUncheckedCreateWithoutDrugInput> | PriceHistoryCreateWithoutDrugInput[] | PriceHistoryUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutDrugInput | PriceHistoryCreateOrConnectWithoutDrugInput[]
    createMany?: PriceHistoryCreateManyDrugInputEnvelope
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
  }

  export type PrescriptionDetailUncheckedCreateNestedManyWithoutDrugInput = {
    create?: XOR<PrescriptionDetailCreateWithoutDrugInput, PrescriptionDetailUncheckedCreateWithoutDrugInput> | PrescriptionDetailCreateWithoutDrugInput[] | PrescriptionDetailUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: PrescriptionDetailCreateOrConnectWithoutDrugInput | PrescriptionDetailCreateOrConnectWithoutDrugInput[]
    createMany?: PrescriptionDetailCreateManyDrugInputEnvelope
    connect?: PrescriptionDetailWhereUniqueInput | PrescriptionDetailWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InventoryUpdateManyWithoutDrugNestedInput = {
    create?: XOR<InventoryCreateWithoutDrugInput, InventoryUncheckedCreateWithoutDrugInput> | InventoryCreateWithoutDrugInput[] | InventoryUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutDrugInput | InventoryCreateOrConnectWithoutDrugInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutDrugInput | InventoryUpsertWithWhereUniqueWithoutDrugInput[]
    createMany?: InventoryCreateManyDrugInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutDrugInput | InventoryUpdateWithWhereUniqueWithoutDrugInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutDrugInput | InventoryUpdateManyWithWhereWithoutDrugInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type InboundUpdateManyWithoutDrugNestedInput = {
    create?: XOR<InboundCreateWithoutDrugInput, InboundUncheckedCreateWithoutDrugInput> | InboundCreateWithoutDrugInput[] | InboundUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: InboundCreateOrConnectWithoutDrugInput | InboundCreateOrConnectWithoutDrugInput[]
    upsert?: InboundUpsertWithWhereUniqueWithoutDrugInput | InboundUpsertWithWhereUniqueWithoutDrugInput[]
    createMany?: InboundCreateManyDrugInputEnvelope
    set?: InboundWhereUniqueInput | InboundWhereUniqueInput[]
    disconnect?: InboundWhereUniqueInput | InboundWhereUniqueInput[]
    delete?: InboundWhereUniqueInput | InboundWhereUniqueInput[]
    connect?: InboundWhereUniqueInput | InboundWhereUniqueInput[]
    update?: InboundUpdateWithWhereUniqueWithoutDrugInput | InboundUpdateWithWhereUniqueWithoutDrugInput[]
    updateMany?: InboundUpdateManyWithWhereWithoutDrugInput | InboundUpdateManyWithWhereWithoutDrugInput[]
    deleteMany?: InboundScalarWhereInput | InboundScalarWhereInput[]
  }

  export type OutboundUpdateManyWithoutDrugNestedInput = {
    create?: XOR<OutboundCreateWithoutDrugInput, OutboundUncheckedCreateWithoutDrugInput> | OutboundCreateWithoutDrugInput[] | OutboundUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: OutboundCreateOrConnectWithoutDrugInput | OutboundCreateOrConnectWithoutDrugInput[]
    upsert?: OutboundUpsertWithWhereUniqueWithoutDrugInput | OutboundUpsertWithWhereUniqueWithoutDrugInput[]
    createMany?: OutboundCreateManyDrugInputEnvelope
    set?: OutboundWhereUniqueInput | OutboundWhereUniqueInput[]
    disconnect?: OutboundWhereUniqueInput | OutboundWhereUniqueInput[]
    delete?: OutboundWhereUniqueInput | OutboundWhereUniqueInput[]
    connect?: OutboundWhereUniqueInput | OutboundWhereUniqueInput[]
    update?: OutboundUpdateWithWhereUniqueWithoutDrugInput | OutboundUpdateWithWhereUniqueWithoutDrugInput[]
    updateMany?: OutboundUpdateManyWithWhereWithoutDrugInput | OutboundUpdateManyWithWhereWithoutDrugInput[]
    deleteMany?: OutboundScalarWhereInput | OutboundScalarWhereInput[]
  }

  export type PriceHistoryUpdateManyWithoutDrugNestedInput = {
    create?: XOR<PriceHistoryCreateWithoutDrugInput, PriceHistoryUncheckedCreateWithoutDrugInput> | PriceHistoryCreateWithoutDrugInput[] | PriceHistoryUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutDrugInput | PriceHistoryCreateOrConnectWithoutDrugInput[]
    upsert?: PriceHistoryUpsertWithWhereUniqueWithoutDrugInput | PriceHistoryUpsertWithWhereUniqueWithoutDrugInput[]
    createMany?: PriceHistoryCreateManyDrugInputEnvelope
    set?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    disconnect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    delete?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    update?: PriceHistoryUpdateWithWhereUniqueWithoutDrugInput | PriceHistoryUpdateWithWhereUniqueWithoutDrugInput[]
    updateMany?: PriceHistoryUpdateManyWithWhereWithoutDrugInput | PriceHistoryUpdateManyWithWhereWithoutDrugInput[]
    deleteMany?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
  }

  export type PrescriptionDetailUpdateManyWithoutDrugNestedInput = {
    create?: XOR<PrescriptionDetailCreateWithoutDrugInput, PrescriptionDetailUncheckedCreateWithoutDrugInput> | PrescriptionDetailCreateWithoutDrugInput[] | PrescriptionDetailUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: PrescriptionDetailCreateOrConnectWithoutDrugInput | PrescriptionDetailCreateOrConnectWithoutDrugInput[]
    upsert?: PrescriptionDetailUpsertWithWhereUniqueWithoutDrugInput | PrescriptionDetailUpsertWithWhereUniqueWithoutDrugInput[]
    createMany?: PrescriptionDetailCreateManyDrugInputEnvelope
    set?: PrescriptionDetailWhereUniqueInput | PrescriptionDetailWhereUniqueInput[]
    disconnect?: PrescriptionDetailWhereUniqueInput | PrescriptionDetailWhereUniqueInput[]
    delete?: PrescriptionDetailWhereUniqueInput | PrescriptionDetailWhereUniqueInput[]
    connect?: PrescriptionDetailWhereUniqueInput | PrescriptionDetailWhereUniqueInput[]
    update?: PrescriptionDetailUpdateWithWhereUniqueWithoutDrugInput | PrescriptionDetailUpdateWithWhereUniqueWithoutDrugInput[]
    updateMany?: PrescriptionDetailUpdateManyWithWhereWithoutDrugInput | PrescriptionDetailUpdateManyWithWhereWithoutDrugInput[]
    deleteMany?: PrescriptionDetailScalarWhereInput | PrescriptionDetailScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutDrugNestedInput = {
    create?: XOR<InventoryCreateWithoutDrugInput, InventoryUncheckedCreateWithoutDrugInput> | InventoryCreateWithoutDrugInput[] | InventoryUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutDrugInput | InventoryCreateOrConnectWithoutDrugInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutDrugInput | InventoryUpsertWithWhereUniqueWithoutDrugInput[]
    createMany?: InventoryCreateManyDrugInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutDrugInput | InventoryUpdateWithWhereUniqueWithoutDrugInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutDrugInput | InventoryUpdateManyWithWhereWithoutDrugInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type InboundUncheckedUpdateManyWithoutDrugNestedInput = {
    create?: XOR<InboundCreateWithoutDrugInput, InboundUncheckedCreateWithoutDrugInput> | InboundCreateWithoutDrugInput[] | InboundUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: InboundCreateOrConnectWithoutDrugInput | InboundCreateOrConnectWithoutDrugInput[]
    upsert?: InboundUpsertWithWhereUniqueWithoutDrugInput | InboundUpsertWithWhereUniqueWithoutDrugInput[]
    createMany?: InboundCreateManyDrugInputEnvelope
    set?: InboundWhereUniqueInput | InboundWhereUniqueInput[]
    disconnect?: InboundWhereUniqueInput | InboundWhereUniqueInput[]
    delete?: InboundWhereUniqueInput | InboundWhereUniqueInput[]
    connect?: InboundWhereUniqueInput | InboundWhereUniqueInput[]
    update?: InboundUpdateWithWhereUniqueWithoutDrugInput | InboundUpdateWithWhereUniqueWithoutDrugInput[]
    updateMany?: InboundUpdateManyWithWhereWithoutDrugInput | InboundUpdateManyWithWhereWithoutDrugInput[]
    deleteMany?: InboundScalarWhereInput | InboundScalarWhereInput[]
  }

  export type OutboundUncheckedUpdateManyWithoutDrugNestedInput = {
    create?: XOR<OutboundCreateWithoutDrugInput, OutboundUncheckedCreateWithoutDrugInput> | OutboundCreateWithoutDrugInput[] | OutboundUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: OutboundCreateOrConnectWithoutDrugInput | OutboundCreateOrConnectWithoutDrugInput[]
    upsert?: OutboundUpsertWithWhereUniqueWithoutDrugInput | OutboundUpsertWithWhereUniqueWithoutDrugInput[]
    createMany?: OutboundCreateManyDrugInputEnvelope
    set?: OutboundWhereUniqueInput | OutboundWhereUniqueInput[]
    disconnect?: OutboundWhereUniqueInput | OutboundWhereUniqueInput[]
    delete?: OutboundWhereUniqueInput | OutboundWhereUniqueInput[]
    connect?: OutboundWhereUniqueInput | OutboundWhereUniqueInput[]
    update?: OutboundUpdateWithWhereUniqueWithoutDrugInput | OutboundUpdateWithWhereUniqueWithoutDrugInput[]
    updateMany?: OutboundUpdateManyWithWhereWithoutDrugInput | OutboundUpdateManyWithWhereWithoutDrugInput[]
    deleteMany?: OutboundScalarWhereInput | OutboundScalarWhereInput[]
  }

  export type PriceHistoryUncheckedUpdateManyWithoutDrugNestedInput = {
    create?: XOR<PriceHistoryCreateWithoutDrugInput, PriceHistoryUncheckedCreateWithoutDrugInput> | PriceHistoryCreateWithoutDrugInput[] | PriceHistoryUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: PriceHistoryCreateOrConnectWithoutDrugInput | PriceHistoryCreateOrConnectWithoutDrugInput[]
    upsert?: PriceHistoryUpsertWithWhereUniqueWithoutDrugInput | PriceHistoryUpsertWithWhereUniqueWithoutDrugInput[]
    createMany?: PriceHistoryCreateManyDrugInputEnvelope
    set?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    disconnect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    delete?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    connect?: PriceHistoryWhereUniqueInput | PriceHistoryWhereUniqueInput[]
    update?: PriceHistoryUpdateWithWhereUniqueWithoutDrugInput | PriceHistoryUpdateWithWhereUniqueWithoutDrugInput[]
    updateMany?: PriceHistoryUpdateManyWithWhereWithoutDrugInput | PriceHistoryUpdateManyWithWhereWithoutDrugInput[]
    deleteMany?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
  }

  export type PrescriptionDetailUncheckedUpdateManyWithoutDrugNestedInput = {
    create?: XOR<PrescriptionDetailCreateWithoutDrugInput, PrescriptionDetailUncheckedCreateWithoutDrugInput> | PrescriptionDetailCreateWithoutDrugInput[] | PrescriptionDetailUncheckedCreateWithoutDrugInput[]
    connectOrCreate?: PrescriptionDetailCreateOrConnectWithoutDrugInput | PrescriptionDetailCreateOrConnectWithoutDrugInput[]
    upsert?: PrescriptionDetailUpsertWithWhereUniqueWithoutDrugInput | PrescriptionDetailUpsertWithWhereUniqueWithoutDrugInput[]
    createMany?: PrescriptionDetailCreateManyDrugInputEnvelope
    set?: PrescriptionDetailWhereUniqueInput | PrescriptionDetailWhereUniqueInput[]
    disconnect?: PrescriptionDetailWhereUniqueInput | PrescriptionDetailWhereUniqueInput[]
    delete?: PrescriptionDetailWhereUniqueInput | PrescriptionDetailWhereUniqueInput[]
    connect?: PrescriptionDetailWhereUniqueInput | PrescriptionDetailWhereUniqueInput[]
    update?: PrescriptionDetailUpdateWithWhereUniqueWithoutDrugInput | PrescriptionDetailUpdateWithWhereUniqueWithoutDrugInput[]
    updateMany?: PrescriptionDetailUpdateManyWithWhereWithoutDrugInput | PrescriptionDetailUpdateManyWithWhereWithoutDrugInput[]
    deleteMany?: PrescriptionDetailScalarWhereInput | PrescriptionDetailScalarWhereInput[]
  }

  export type DrugCreateNestedOneWithoutInventoriesInput = {
    create?: XOR<DrugCreateWithoutInventoriesInput, DrugUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: DrugCreateOrConnectWithoutInventoriesInput
    connect?: DrugWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DrugUpdateOneRequiredWithoutInventoriesNestedInput = {
    create?: XOR<DrugCreateWithoutInventoriesInput, DrugUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: DrugCreateOrConnectWithoutInventoriesInput
    upsert?: DrugUpsertWithoutInventoriesInput
    connect?: DrugWhereUniqueInput
    update?: XOR<XOR<DrugUpdateToOneWithWhereWithoutInventoriesInput, DrugUpdateWithoutInventoriesInput>, DrugUncheckedUpdateWithoutInventoriesInput>
  }

  export type DrugCreateNestedOneWithoutInboundsInput = {
    create?: XOR<DrugCreateWithoutInboundsInput, DrugUncheckedCreateWithoutInboundsInput>
    connectOrCreate?: DrugCreateOrConnectWithoutInboundsInput
    connect?: DrugWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DrugUpdateOneRequiredWithoutInboundsNestedInput = {
    create?: XOR<DrugCreateWithoutInboundsInput, DrugUncheckedCreateWithoutInboundsInput>
    connectOrCreate?: DrugCreateOrConnectWithoutInboundsInput
    upsert?: DrugUpsertWithoutInboundsInput
    connect?: DrugWhereUniqueInput
    update?: XOR<XOR<DrugUpdateToOneWithWhereWithoutInboundsInput, DrugUpdateWithoutInboundsInput>, DrugUncheckedUpdateWithoutInboundsInput>
  }

  export type DrugCreateNestedOneWithoutOutboundsInput = {
    create?: XOR<DrugCreateWithoutOutboundsInput, DrugUncheckedCreateWithoutOutboundsInput>
    connectOrCreate?: DrugCreateOrConnectWithoutOutboundsInput
    connect?: DrugWhereUniqueInput
  }

  export type PrescriptionCreateNestedOneWithoutOutboundsInput = {
    create?: XOR<PrescriptionCreateWithoutOutboundsInput, PrescriptionUncheckedCreateWithoutOutboundsInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutOutboundsInput
    connect?: PrescriptionWhereUniqueInput
  }

  export type DrugUpdateOneRequiredWithoutOutboundsNestedInput = {
    create?: XOR<DrugCreateWithoutOutboundsInput, DrugUncheckedCreateWithoutOutboundsInput>
    connectOrCreate?: DrugCreateOrConnectWithoutOutboundsInput
    upsert?: DrugUpsertWithoutOutboundsInput
    connect?: DrugWhereUniqueInput
    update?: XOR<XOR<DrugUpdateToOneWithWhereWithoutOutboundsInput, DrugUpdateWithoutOutboundsInput>, DrugUncheckedUpdateWithoutOutboundsInput>
  }

  export type PrescriptionUpdateOneWithoutOutboundsNestedInput = {
    create?: XOR<PrescriptionCreateWithoutOutboundsInput, PrescriptionUncheckedCreateWithoutOutboundsInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutOutboundsInput
    upsert?: PrescriptionUpsertWithoutOutboundsInput
    disconnect?: PrescriptionWhereInput | boolean
    delete?: PrescriptionWhereInput | boolean
    connect?: PrescriptionWhereUniqueInput
    update?: XOR<XOR<PrescriptionUpdateToOneWithWhereWithoutOutboundsInput, PrescriptionUpdateWithoutOutboundsInput>, PrescriptionUncheckedUpdateWithoutOutboundsInput>
  }

  export type DrugCreateNestedOneWithoutPriceHistoriesInput = {
    create?: XOR<DrugCreateWithoutPriceHistoriesInput, DrugUncheckedCreateWithoutPriceHistoriesInput>
    connectOrCreate?: DrugCreateOrConnectWithoutPriceHistoriesInput
    connect?: DrugWhereUniqueInput
  }

  export type DrugUpdateOneRequiredWithoutPriceHistoriesNestedInput = {
    create?: XOR<DrugCreateWithoutPriceHistoriesInput, DrugUncheckedCreateWithoutPriceHistoriesInput>
    connectOrCreate?: DrugCreateOrConnectWithoutPriceHistoriesInput
    upsert?: DrugUpsertWithoutPriceHistoriesInput
    connect?: DrugWhereUniqueInput
    update?: XOR<XOR<DrugUpdateToOneWithWhereWithoutPriceHistoriesInput, DrugUpdateWithoutPriceHistoriesInput>, DrugUncheckedUpdateWithoutPriceHistoriesInput>
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

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumPrescriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | EnumPrescriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrescriptionStatus[]
    notIn?: $Enums.PrescriptionStatus[]
    not?: NestedEnumPrescriptionStatusFilter<$PrismaModel> | $Enums.PrescriptionStatus
  }

  export type NestedEnumPrescriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrescriptionStatus | EnumPrescriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PrescriptionStatus[]
    notIn?: $Enums.PrescriptionStatus[]
    not?: NestedEnumPrescriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.PrescriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrescriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumPrescriptionStatusFilter<$PrismaModel>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PrescriptionCreateWithoutPatientInput = {
    create_time?: Date | string
    status?: $Enums.PrescriptionStatus
    diagnosis?: string | null
    remarks?: string | null
    total_amount?: number
    doctor: DoctorCreateNestedOneWithoutPrescriptionsInput
    prescriptionDetails?: PrescriptionDetailCreateNestedManyWithoutPrescriptionInput
    outbounds?: OutboundCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutPatientInput = {
    prescription_id?: number
    doctor_id: number
    create_time?: Date | string
    status?: $Enums.PrescriptionStatus
    diagnosis?: string | null
    remarks?: string | null
    total_amount?: number
    prescriptionDetails?: PrescriptionDetailUncheckedCreateNestedManyWithoutPrescriptionInput
    outbounds?: OutboundUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionCreateOrConnectWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput>
  }

  export type PrescriptionCreateManyPatientInputEnvelope = {
    data: PrescriptionCreateManyPatientInput | PrescriptionCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutPatientInput, PrescriptionUncheckedUpdateWithoutPatientInput>
    create: XOR<PrescriptionCreateWithoutPatientInput, PrescriptionUncheckedCreateWithoutPatientInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutPatientInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutPatientInput, PrescriptionUncheckedUpdateWithoutPatientInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutPatientInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutPatientInput>
  }

  export type PrescriptionScalarWhereInput = {
    AND?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    OR?: PrescriptionScalarWhereInput[]
    NOT?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    prescription_id?: IntFilter<"Prescription"> | number
    patient_visit_id?: StringFilter<"Prescription"> | string
    doctor_id?: IntFilter<"Prescription"> | number
    create_time?: DateTimeFilter<"Prescription"> | Date | string
    status?: EnumPrescriptionStatusFilter<"Prescription"> | $Enums.PrescriptionStatus
    diagnosis?: StringNullableFilter<"Prescription"> | string | null
    remarks?: StringNullableFilter<"Prescription"> | string | null
    total_amount?: FloatFilter<"Prescription"> | number
  }

  export type PrescriptionCreateWithoutDoctorInput = {
    create_time?: Date | string
    status?: $Enums.PrescriptionStatus
    diagnosis?: string | null
    remarks?: string | null
    total_amount?: number
    patient: PatientCreateNestedOneWithoutPrescriptionsInput
    prescriptionDetails?: PrescriptionDetailCreateNestedManyWithoutPrescriptionInput
    outbounds?: OutboundCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutDoctorInput = {
    prescription_id?: number
    patient_visit_id: string
    create_time?: Date | string
    status?: $Enums.PrescriptionStatus
    diagnosis?: string | null
    remarks?: string | null
    total_amount?: number
    prescriptionDetails?: PrescriptionDetailUncheckedCreateNestedManyWithoutPrescriptionInput
    outbounds?: OutboundUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionCreateOrConnectWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput>
  }

  export type PrescriptionCreateManyDoctorInputEnvelope = {
    data: PrescriptionCreateManyDoctorInput | PrescriptionCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutDoctorInput, PrescriptionUncheckedUpdateWithoutDoctorInput>
    create: XOR<PrescriptionCreateWithoutDoctorInput, PrescriptionUncheckedCreateWithoutDoctorInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutDoctorInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutDoctorInput, PrescriptionUncheckedUpdateWithoutDoctorInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutDoctorInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutDoctorInput>
  }

  export type PatientCreateWithoutPrescriptionsInput = {
    visit_id: string
    name: string
    gender: $Enums.Gender
    contact?: string | null
    first_visit_date: Date | string
    medical_history?: string | null
  }

  export type PatientUncheckedCreateWithoutPrescriptionsInput = {
    visit_id: string
    name: string
    gender: $Enums.Gender
    contact?: string | null
    first_visit_date: Date | string
    medical_history?: string | null
  }

  export type PatientCreateOrConnectWithoutPrescriptionsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutPrescriptionsInput, PatientUncheckedCreateWithoutPrescriptionsInput>
  }

  export type DoctorCreateWithoutPrescriptionsInput = {
    name: string
    department: string
  }

  export type DoctorUncheckedCreateWithoutPrescriptionsInput = {
    doctor_id?: number
    name: string
    department: string
  }

  export type DoctorCreateOrConnectWithoutPrescriptionsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutPrescriptionsInput, DoctorUncheckedCreateWithoutPrescriptionsInput>
  }

  export type PrescriptionDetailCreateWithoutPrescriptionInput = {
    drug_name: string
    unit_price: number
    quantity?: number
    usage_instruction: string
    drug: DrugCreateNestedOneWithoutPrescriptionDetailsInput
  }

  export type PrescriptionDetailUncheckedCreateWithoutPrescriptionInput = {
    drug_code: string
    drug_name: string
    unit_price: number
    quantity?: number
    usage_instruction: string
  }

  export type PrescriptionDetailCreateOrConnectWithoutPrescriptionInput = {
    where: PrescriptionDetailWhereUniqueInput
    create: XOR<PrescriptionDetailCreateWithoutPrescriptionInput, PrescriptionDetailUncheckedCreateWithoutPrescriptionInput>
  }

  export type PrescriptionDetailCreateManyPrescriptionInputEnvelope = {
    data: PrescriptionDetailCreateManyPrescriptionInput | PrescriptionDetailCreateManyPrescriptionInput[]
    skipDuplicates?: boolean
  }

  export type OutboundCreateWithoutPrescriptionInput = {
    batch_number: string
    quantity: number
    outbound_type: string
    outbound_time?: Date | string
    drug: DrugCreateNestedOneWithoutOutboundsInput
  }

  export type OutboundUncheckedCreateWithoutPrescriptionInput = {
    outbound_id?: number
    drug_code: string
    batch_number: string
    quantity: number
    outbound_type: string
    outbound_time?: Date | string
  }

  export type OutboundCreateOrConnectWithoutPrescriptionInput = {
    where: OutboundWhereUniqueInput
    create: XOR<OutboundCreateWithoutPrescriptionInput, OutboundUncheckedCreateWithoutPrescriptionInput>
  }

  export type OutboundCreateManyPrescriptionInputEnvelope = {
    data: OutboundCreateManyPrescriptionInput | OutboundCreateManyPrescriptionInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithoutPrescriptionsInput = {
    update: XOR<PatientUpdateWithoutPrescriptionsInput, PatientUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<PatientCreateWithoutPrescriptionsInput, PatientUncheckedCreateWithoutPrescriptionsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutPrescriptionsInput, PatientUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type PatientUpdateWithoutPrescriptionsInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    first_visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    medical_history?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PatientUncheckedUpdateWithoutPrescriptionsInput = {
    visit_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    first_visit_date?: DateTimeFieldUpdateOperationsInput | Date | string
    medical_history?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoctorUpsertWithoutPrescriptionsInput = {
    update: XOR<DoctorUpdateWithoutPrescriptionsInput, DoctorUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<DoctorCreateWithoutPrescriptionsInput, DoctorUncheckedCreateWithoutPrescriptionsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutPrescriptionsInput, DoctorUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type DoctorUpdateWithoutPrescriptionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateWithoutPrescriptionsInput = {
    doctor_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
  }

  export type PrescriptionDetailUpsertWithWhereUniqueWithoutPrescriptionInput = {
    where: PrescriptionDetailWhereUniqueInput
    update: XOR<PrescriptionDetailUpdateWithoutPrescriptionInput, PrescriptionDetailUncheckedUpdateWithoutPrescriptionInput>
    create: XOR<PrescriptionDetailCreateWithoutPrescriptionInput, PrescriptionDetailUncheckedCreateWithoutPrescriptionInput>
  }

  export type PrescriptionDetailUpdateWithWhereUniqueWithoutPrescriptionInput = {
    where: PrescriptionDetailWhereUniqueInput
    data: XOR<PrescriptionDetailUpdateWithoutPrescriptionInput, PrescriptionDetailUncheckedUpdateWithoutPrescriptionInput>
  }

  export type PrescriptionDetailUpdateManyWithWhereWithoutPrescriptionInput = {
    where: PrescriptionDetailScalarWhereInput
    data: XOR<PrescriptionDetailUpdateManyMutationInput, PrescriptionDetailUncheckedUpdateManyWithoutPrescriptionInput>
  }

  export type PrescriptionDetailScalarWhereInput = {
    AND?: PrescriptionDetailScalarWhereInput | PrescriptionDetailScalarWhereInput[]
    OR?: PrescriptionDetailScalarWhereInput[]
    NOT?: PrescriptionDetailScalarWhereInput | PrescriptionDetailScalarWhereInput[]
    prescription_id?: IntFilter<"PrescriptionDetail"> | number
    drug_code?: StringFilter<"PrescriptionDetail"> | string
    drug_name?: StringFilter<"PrescriptionDetail"> | string
    unit_price?: FloatFilter<"PrescriptionDetail"> | number
    quantity?: IntFilter<"PrescriptionDetail"> | number
    usage_instruction?: StringFilter<"PrescriptionDetail"> | string
  }

  export type OutboundUpsertWithWhereUniqueWithoutPrescriptionInput = {
    where: OutboundWhereUniqueInput
    update: XOR<OutboundUpdateWithoutPrescriptionInput, OutboundUncheckedUpdateWithoutPrescriptionInput>
    create: XOR<OutboundCreateWithoutPrescriptionInput, OutboundUncheckedCreateWithoutPrescriptionInput>
  }

  export type OutboundUpdateWithWhereUniqueWithoutPrescriptionInput = {
    where: OutboundWhereUniqueInput
    data: XOR<OutboundUpdateWithoutPrescriptionInput, OutboundUncheckedUpdateWithoutPrescriptionInput>
  }

  export type OutboundUpdateManyWithWhereWithoutPrescriptionInput = {
    where: OutboundScalarWhereInput
    data: XOR<OutboundUpdateManyMutationInput, OutboundUncheckedUpdateManyWithoutPrescriptionInput>
  }

  export type OutboundScalarWhereInput = {
    AND?: OutboundScalarWhereInput | OutboundScalarWhereInput[]
    OR?: OutboundScalarWhereInput[]
    NOT?: OutboundScalarWhereInput | OutboundScalarWhereInput[]
    outbound_id?: IntFilter<"Outbound"> | number
    drug_code?: StringFilter<"Outbound"> | string
    batch_number?: StringFilter<"Outbound"> | string
    quantity?: IntFilter<"Outbound"> | number
    prescription_id?: IntNullableFilter<"Outbound"> | number | null
    outbound_type?: StringFilter<"Outbound"> | string
    outbound_time?: DateTimeFilter<"Outbound"> | Date | string
  }

  export type PrescriptionCreateWithoutPrescriptionDetailsInput = {
    create_time?: Date | string
    status?: $Enums.PrescriptionStatus
    diagnosis?: string | null
    remarks?: string | null
    total_amount?: number
    patient: PatientCreateNestedOneWithoutPrescriptionsInput
    doctor: DoctorCreateNestedOneWithoutPrescriptionsInput
    outbounds?: OutboundCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutPrescriptionDetailsInput = {
    prescription_id?: number
    patient_visit_id: string
    doctor_id: number
    create_time?: Date | string
    status?: $Enums.PrescriptionStatus
    diagnosis?: string | null
    remarks?: string | null
    total_amount?: number
    outbounds?: OutboundUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionCreateOrConnectWithoutPrescriptionDetailsInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutPrescriptionDetailsInput, PrescriptionUncheckedCreateWithoutPrescriptionDetailsInput>
  }

  export type DrugCreateWithoutPrescriptionDetailsInput = {
    drug_code: string
    generic_name: string
    brand_name?: string | null
    dosage_form: string
    specification?: string | null
    manufacturer?: string | null
    unit_price?: number | null
    inventories?: InventoryCreateNestedManyWithoutDrugInput
    inbounds?: InboundCreateNestedManyWithoutDrugInput
    outbounds?: OutboundCreateNestedManyWithoutDrugInput
    priceHistories?: PriceHistoryCreateNestedManyWithoutDrugInput
  }

  export type DrugUncheckedCreateWithoutPrescriptionDetailsInput = {
    drug_code: string
    generic_name: string
    brand_name?: string | null
    dosage_form: string
    specification?: string | null
    manufacturer?: string | null
    unit_price?: number | null
    inventories?: InventoryUncheckedCreateNestedManyWithoutDrugInput
    inbounds?: InboundUncheckedCreateNestedManyWithoutDrugInput
    outbounds?: OutboundUncheckedCreateNestedManyWithoutDrugInput
    priceHistories?: PriceHistoryUncheckedCreateNestedManyWithoutDrugInput
  }

  export type DrugCreateOrConnectWithoutPrescriptionDetailsInput = {
    where: DrugWhereUniqueInput
    create: XOR<DrugCreateWithoutPrescriptionDetailsInput, DrugUncheckedCreateWithoutPrescriptionDetailsInput>
  }

  export type PrescriptionUpsertWithoutPrescriptionDetailsInput = {
    update: XOR<PrescriptionUpdateWithoutPrescriptionDetailsInput, PrescriptionUncheckedUpdateWithoutPrescriptionDetailsInput>
    create: XOR<PrescriptionCreateWithoutPrescriptionDetailsInput, PrescriptionUncheckedCreateWithoutPrescriptionDetailsInput>
    where?: PrescriptionWhereInput
  }

  export type PrescriptionUpdateToOneWithWhereWithoutPrescriptionDetailsInput = {
    where?: PrescriptionWhereInput
    data: XOR<PrescriptionUpdateWithoutPrescriptionDetailsInput, PrescriptionUncheckedUpdateWithoutPrescriptionDetailsInput>
  }

  export type PrescriptionUpdateWithoutPrescriptionDetailsInput = {
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: FloatFieldUpdateOperationsInput | number
    patient?: PatientUpdateOneRequiredWithoutPrescriptionsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutPrescriptionsNestedInput
    outbounds?: OutboundUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutPrescriptionDetailsInput = {
    prescription_id?: IntFieldUpdateOperationsInput | number
    patient_visit_id?: StringFieldUpdateOperationsInput | string
    doctor_id?: IntFieldUpdateOperationsInput | number
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: FloatFieldUpdateOperationsInput | number
    outbounds?: OutboundUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type DrugUpsertWithoutPrescriptionDetailsInput = {
    update: XOR<DrugUpdateWithoutPrescriptionDetailsInput, DrugUncheckedUpdateWithoutPrescriptionDetailsInput>
    create: XOR<DrugCreateWithoutPrescriptionDetailsInput, DrugUncheckedCreateWithoutPrescriptionDetailsInput>
    where?: DrugWhereInput
  }

  export type DrugUpdateToOneWithWhereWithoutPrescriptionDetailsInput = {
    where?: DrugWhereInput
    data: XOR<DrugUpdateWithoutPrescriptionDetailsInput, DrugUncheckedUpdateWithoutPrescriptionDetailsInput>
  }

  export type DrugUpdateWithoutPrescriptionDetailsInput = {
    drug_code?: StringFieldUpdateOperationsInput | string
    generic_name?: StringFieldUpdateOperationsInput | string
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    dosage_form?: StringFieldUpdateOperationsInput | string
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
    inventories?: InventoryUpdateManyWithoutDrugNestedInput
    inbounds?: InboundUpdateManyWithoutDrugNestedInput
    outbounds?: OutboundUpdateManyWithoutDrugNestedInput
    priceHistories?: PriceHistoryUpdateManyWithoutDrugNestedInput
  }

  export type DrugUncheckedUpdateWithoutPrescriptionDetailsInput = {
    drug_code?: StringFieldUpdateOperationsInput | string
    generic_name?: StringFieldUpdateOperationsInput | string
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    dosage_form?: StringFieldUpdateOperationsInput | string
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
    inventories?: InventoryUncheckedUpdateManyWithoutDrugNestedInput
    inbounds?: InboundUncheckedUpdateManyWithoutDrugNestedInput
    outbounds?: OutboundUncheckedUpdateManyWithoutDrugNestedInput
    priceHistories?: PriceHistoryUncheckedUpdateManyWithoutDrugNestedInput
  }

  export type InventoryCreateWithoutDrugInput = {
    batch_number: string
    stock_quantity?: number
    expiration_date: Date | string
    alert_threshold?: number
    last_inbound_time?: Date | string | null
    last_outbound_time?: Date | string | null
  }

  export type InventoryUncheckedCreateWithoutDrugInput = {
    inventory_id?: number
    batch_number: string
    stock_quantity?: number
    expiration_date: Date | string
    alert_threshold?: number
    last_inbound_time?: Date | string | null
    last_outbound_time?: Date | string | null
  }

  export type InventoryCreateOrConnectWithoutDrugInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutDrugInput, InventoryUncheckedCreateWithoutDrugInput>
  }

  export type InventoryCreateManyDrugInputEnvelope = {
    data: InventoryCreateManyDrugInput | InventoryCreateManyDrugInput[]
    skipDuplicates?: boolean
  }

  export type InboundCreateWithoutDrugInput = {
    batch_number: string
    quantity: number
    inbound_time?: Date | string
    operator_id?: number | null
  }

  export type InboundUncheckedCreateWithoutDrugInput = {
    inbound_id?: number
    batch_number: string
    quantity: number
    inbound_time?: Date | string
    operator_id?: number | null
  }

  export type InboundCreateOrConnectWithoutDrugInput = {
    where: InboundWhereUniqueInput
    create: XOR<InboundCreateWithoutDrugInput, InboundUncheckedCreateWithoutDrugInput>
  }

  export type InboundCreateManyDrugInputEnvelope = {
    data: InboundCreateManyDrugInput | InboundCreateManyDrugInput[]
    skipDuplicates?: boolean
  }

  export type OutboundCreateWithoutDrugInput = {
    batch_number: string
    quantity: number
    outbound_type: string
    outbound_time?: Date | string
    prescription?: PrescriptionCreateNestedOneWithoutOutboundsInput
  }

  export type OutboundUncheckedCreateWithoutDrugInput = {
    outbound_id?: number
    batch_number: string
    quantity: number
    prescription_id?: number | null
    outbound_type: string
    outbound_time?: Date | string
  }

  export type OutboundCreateOrConnectWithoutDrugInput = {
    where: OutboundWhereUniqueInput
    create: XOR<OutboundCreateWithoutDrugInput, OutboundUncheckedCreateWithoutDrugInput>
  }

  export type OutboundCreateManyDrugInputEnvelope = {
    data: OutboundCreateManyDrugInput | OutboundCreateManyDrugInput[]
    skipDuplicates?: boolean
  }

  export type PriceHistoryCreateWithoutDrugInput = {
    old_price?: number | null
    new_price: number
    effective_date: Date | string
    operator_id?: number | null
  }

  export type PriceHistoryUncheckedCreateWithoutDrugInput = {
    price_id?: number
    old_price?: number | null
    new_price: number
    effective_date: Date | string
    operator_id?: number | null
  }

  export type PriceHistoryCreateOrConnectWithoutDrugInput = {
    where: PriceHistoryWhereUniqueInput
    create: XOR<PriceHistoryCreateWithoutDrugInput, PriceHistoryUncheckedCreateWithoutDrugInput>
  }

  export type PriceHistoryCreateManyDrugInputEnvelope = {
    data: PriceHistoryCreateManyDrugInput | PriceHistoryCreateManyDrugInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionDetailCreateWithoutDrugInput = {
    drug_name: string
    unit_price: number
    quantity?: number
    usage_instruction: string
    prescription: PrescriptionCreateNestedOneWithoutPrescriptionDetailsInput
  }

  export type PrescriptionDetailUncheckedCreateWithoutDrugInput = {
    prescription_id: number
    drug_name: string
    unit_price: number
    quantity?: number
    usage_instruction: string
  }

  export type PrescriptionDetailCreateOrConnectWithoutDrugInput = {
    where: PrescriptionDetailWhereUniqueInput
    create: XOR<PrescriptionDetailCreateWithoutDrugInput, PrescriptionDetailUncheckedCreateWithoutDrugInput>
  }

  export type PrescriptionDetailCreateManyDrugInputEnvelope = {
    data: PrescriptionDetailCreateManyDrugInput | PrescriptionDetailCreateManyDrugInput[]
    skipDuplicates?: boolean
  }

  export type InventoryUpsertWithWhereUniqueWithoutDrugInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutDrugInput, InventoryUncheckedUpdateWithoutDrugInput>
    create: XOR<InventoryCreateWithoutDrugInput, InventoryUncheckedCreateWithoutDrugInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutDrugInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutDrugInput, InventoryUncheckedUpdateWithoutDrugInput>
  }

  export type InventoryUpdateManyWithWhereWithoutDrugInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutDrugInput>
  }

  export type InventoryScalarWhereInput = {
    AND?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    OR?: InventoryScalarWhereInput[]
    NOT?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    inventory_id?: IntFilter<"Inventory"> | number
    drug_code?: StringFilter<"Inventory"> | string
    batch_number?: StringFilter<"Inventory"> | string
    stock_quantity?: IntFilter<"Inventory"> | number
    expiration_date?: DateTimeFilter<"Inventory"> | Date | string
    alert_threshold?: IntFilter<"Inventory"> | number
    last_inbound_time?: DateTimeNullableFilter<"Inventory"> | Date | string | null
    last_outbound_time?: DateTimeNullableFilter<"Inventory"> | Date | string | null
  }

  export type InboundUpsertWithWhereUniqueWithoutDrugInput = {
    where: InboundWhereUniqueInput
    update: XOR<InboundUpdateWithoutDrugInput, InboundUncheckedUpdateWithoutDrugInput>
    create: XOR<InboundCreateWithoutDrugInput, InboundUncheckedCreateWithoutDrugInput>
  }

  export type InboundUpdateWithWhereUniqueWithoutDrugInput = {
    where: InboundWhereUniqueInput
    data: XOR<InboundUpdateWithoutDrugInput, InboundUncheckedUpdateWithoutDrugInput>
  }

  export type InboundUpdateManyWithWhereWithoutDrugInput = {
    where: InboundScalarWhereInput
    data: XOR<InboundUpdateManyMutationInput, InboundUncheckedUpdateManyWithoutDrugInput>
  }

  export type InboundScalarWhereInput = {
    AND?: InboundScalarWhereInput | InboundScalarWhereInput[]
    OR?: InboundScalarWhereInput[]
    NOT?: InboundScalarWhereInput | InboundScalarWhereInput[]
    inbound_id?: IntFilter<"Inbound"> | number
    drug_code?: StringFilter<"Inbound"> | string
    batch_number?: StringFilter<"Inbound"> | string
    quantity?: IntFilter<"Inbound"> | number
    inbound_time?: DateTimeFilter<"Inbound"> | Date | string
    operator_id?: IntNullableFilter<"Inbound"> | number | null
  }

  export type OutboundUpsertWithWhereUniqueWithoutDrugInput = {
    where: OutboundWhereUniqueInput
    update: XOR<OutboundUpdateWithoutDrugInput, OutboundUncheckedUpdateWithoutDrugInput>
    create: XOR<OutboundCreateWithoutDrugInput, OutboundUncheckedCreateWithoutDrugInput>
  }

  export type OutboundUpdateWithWhereUniqueWithoutDrugInput = {
    where: OutboundWhereUniqueInput
    data: XOR<OutboundUpdateWithoutDrugInput, OutboundUncheckedUpdateWithoutDrugInput>
  }

  export type OutboundUpdateManyWithWhereWithoutDrugInput = {
    where: OutboundScalarWhereInput
    data: XOR<OutboundUpdateManyMutationInput, OutboundUncheckedUpdateManyWithoutDrugInput>
  }

  export type PriceHistoryUpsertWithWhereUniqueWithoutDrugInput = {
    where: PriceHistoryWhereUniqueInput
    update: XOR<PriceHistoryUpdateWithoutDrugInput, PriceHistoryUncheckedUpdateWithoutDrugInput>
    create: XOR<PriceHistoryCreateWithoutDrugInput, PriceHistoryUncheckedCreateWithoutDrugInput>
  }

  export type PriceHistoryUpdateWithWhereUniqueWithoutDrugInput = {
    where: PriceHistoryWhereUniqueInput
    data: XOR<PriceHistoryUpdateWithoutDrugInput, PriceHistoryUncheckedUpdateWithoutDrugInput>
  }

  export type PriceHistoryUpdateManyWithWhereWithoutDrugInput = {
    where: PriceHistoryScalarWhereInput
    data: XOR<PriceHistoryUpdateManyMutationInput, PriceHistoryUncheckedUpdateManyWithoutDrugInput>
  }

  export type PriceHistoryScalarWhereInput = {
    AND?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
    OR?: PriceHistoryScalarWhereInput[]
    NOT?: PriceHistoryScalarWhereInput | PriceHistoryScalarWhereInput[]
    price_id?: IntFilter<"PriceHistory"> | number
    drug_code?: StringFilter<"PriceHistory"> | string
    old_price?: FloatNullableFilter<"PriceHistory"> | number | null
    new_price?: FloatFilter<"PriceHistory"> | number
    effective_date?: DateTimeFilter<"PriceHistory"> | Date | string
    operator_id?: IntNullableFilter<"PriceHistory"> | number | null
  }

  export type PrescriptionDetailUpsertWithWhereUniqueWithoutDrugInput = {
    where: PrescriptionDetailWhereUniqueInput
    update: XOR<PrescriptionDetailUpdateWithoutDrugInput, PrescriptionDetailUncheckedUpdateWithoutDrugInput>
    create: XOR<PrescriptionDetailCreateWithoutDrugInput, PrescriptionDetailUncheckedCreateWithoutDrugInput>
  }

  export type PrescriptionDetailUpdateWithWhereUniqueWithoutDrugInput = {
    where: PrescriptionDetailWhereUniqueInput
    data: XOR<PrescriptionDetailUpdateWithoutDrugInput, PrescriptionDetailUncheckedUpdateWithoutDrugInput>
  }

  export type PrescriptionDetailUpdateManyWithWhereWithoutDrugInput = {
    where: PrescriptionDetailScalarWhereInput
    data: XOR<PrescriptionDetailUpdateManyMutationInput, PrescriptionDetailUncheckedUpdateManyWithoutDrugInput>
  }

  export type DrugCreateWithoutInventoriesInput = {
    drug_code: string
    generic_name: string
    brand_name?: string | null
    dosage_form: string
    specification?: string | null
    manufacturer?: string | null
    unit_price?: number | null
    inbounds?: InboundCreateNestedManyWithoutDrugInput
    outbounds?: OutboundCreateNestedManyWithoutDrugInput
    priceHistories?: PriceHistoryCreateNestedManyWithoutDrugInput
    prescriptionDetails?: PrescriptionDetailCreateNestedManyWithoutDrugInput
  }

  export type DrugUncheckedCreateWithoutInventoriesInput = {
    drug_code: string
    generic_name: string
    brand_name?: string | null
    dosage_form: string
    specification?: string | null
    manufacturer?: string | null
    unit_price?: number | null
    inbounds?: InboundUncheckedCreateNestedManyWithoutDrugInput
    outbounds?: OutboundUncheckedCreateNestedManyWithoutDrugInput
    priceHistories?: PriceHistoryUncheckedCreateNestedManyWithoutDrugInput
    prescriptionDetails?: PrescriptionDetailUncheckedCreateNestedManyWithoutDrugInput
  }

  export type DrugCreateOrConnectWithoutInventoriesInput = {
    where: DrugWhereUniqueInput
    create: XOR<DrugCreateWithoutInventoriesInput, DrugUncheckedCreateWithoutInventoriesInput>
  }

  export type DrugUpsertWithoutInventoriesInput = {
    update: XOR<DrugUpdateWithoutInventoriesInput, DrugUncheckedUpdateWithoutInventoriesInput>
    create: XOR<DrugCreateWithoutInventoriesInput, DrugUncheckedCreateWithoutInventoriesInput>
    where?: DrugWhereInput
  }

  export type DrugUpdateToOneWithWhereWithoutInventoriesInput = {
    where?: DrugWhereInput
    data: XOR<DrugUpdateWithoutInventoriesInput, DrugUncheckedUpdateWithoutInventoriesInput>
  }

  export type DrugUpdateWithoutInventoriesInput = {
    drug_code?: StringFieldUpdateOperationsInput | string
    generic_name?: StringFieldUpdateOperationsInput | string
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    dosage_form?: StringFieldUpdateOperationsInput | string
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
    inbounds?: InboundUpdateManyWithoutDrugNestedInput
    outbounds?: OutboundUpdateManyWithoutDrugNestedInput
    priceHistories?: PriceHistoryUpdateManyWithoutDrugNestedInput
    prescriptionDetails?: PrescriptionDetailUpdateManyWithoutDrugNestedInput
  }

  export type DrugUncheckedUpdateWithoutInventoriesInput = {
    drug_code?: StringFieldUpdateOperationsInput | string
    generic_name?: StringFieldUpdateOperationsInput | string
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    dosage_form?: StringFieldUpdateOperationsInput | string
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
    inbounds?: InboundUncheckedUpdateManyWithoutDrugNestedInput
    outbounds?: OutboundUncheckedUpdateManyWithoutDrugNestedInput
    priceHistories?: PriceHistoryUncheckedUpdateManyWithoutDrugNestedInput
    prescriptionDetails?: PrescriptionDetailUncheckedUpdateManyWithoutDrugNestedInput
  }

  export type DrugCreateWithoutInboundsInput = {
    drug_code: string
    generic_name: string
    brand_name?: string | null
    dosage_form: string
    specification?: string | null
    manufacturer?: string | null
    unit_price?: number | null
    inventories?: InventoryCreateNestedManyWithoutDrugInput
    outbounds?: OutboundCreateNestedManyWithoutDrugInput
    priceHistories?: PriceHistoryCreateNestedManyWithoutDrugInput
    prescriptionDetails?: PrescriptionDetailCreateNestedManyWithoutDrugInput
  }

  export type DrugUncheckedCreateWithoutInboundsInput = {
    drug_code: string
    generic_name: string
    brand_name?: string | null
    dosage_form: string
    specification?: string | null
    manufacturer?: string | null
    unit_price?: number | null
    inventories?: InventoryUncheckedCreateNestedManyWithoutDrugInput
    outbounds?: OutboundUncheckedCreateNestedManyWithoutDrugInput
    priceHistories?: PriceHistoryUncheckedCreateNestedManyWithoutDrugInput
    prescriptionDetails?: PrescriptionDetailUncheckedCreateNestedManyWithoutDrugInput
  }

  export type DrugCreateOrConnectWithoutInboundsInput = {
    where: DrugWhereUniqueInput
    create: XOR<DrugCreateWithoutInboundsInput, DrugUncheckedCreateWithoutInboundsInput>
  }

  export type DrugUpsertWithoutInboundsInput = {
    update: XOR<DrugUpdateWithoutInboundsInput, DrugUncheckedUpdateWithoutInboundsInput>
    create: XOR<DrugCreateWithoutInboundsInput, DrugUncheckedCreateWithoutInboundsInput>
    where?: DrugWhereInput
  }

  export type DrugUpdateToOneWithWhereWithoutInboundsInput = {
    where?: DrugWhereInput
    data: XOR<DrugUpdateWithoutInboundsInput, DrugUncheckedUpdateWithoutInboundsInput>
  }

  export type DrugUpdateWithoutInboundsInput = {
    drug_code?: StringFieldUpdateOperationsInput | string
    generic_name?: StringFieldUpdateOperationsInput | string
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    dosage_form?: StringFieldUpdateOperationsInput | string
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
    inventories?: InventoryUpdateManyWithoutDrugNestedInput
    outbounds?: OutboundUpdateManyWithoutDrugNestedInput
    priceHistories?: PriceHistoryUpdateManyWithoutDrugNestedInput
    prescriptionDetails?: PrescriptionDetailUpdateManyWithoutDrugNestedInput
  }

  export type DrugUncheckedUpdateWithoutInboundsInput = {
    drug_code?: StringFieldUpdateOperationsInput | string
    generic_name?: StringFieldUpdateOperationsInput | string
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    dosage_form?: StringFieldUpdateOperationsInput | string
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
    inventories?: InventoryUncheckedUpdateManyWithoutDrugNestedInput
    outbounds?: OutboundUncheckedUpdateManyWithoutDrugNestedInput
    priceHistories?: PriceHistoryUncheckedUpdateManyWithoutDrugNestedInput
    prescriptionDetails?: PrescriptionDetailUncheckedUpdateManyWithoutDrugNestedInput
  }

  export type DrugCreateWithoutOutboundsInput = {
    drug_code: string
    generic_name: string
    brand_name?: string | null
    dosage_form: string
    specification?: string | null
    manufacturer?: string | null
    unit_price?: number | null
    inventories?: InventoryCreateNestedManyWithoutDrugInput
    inbounds?: InboundCreateNestedManyWithoutDrugInput
    priceHistories?: PriceHistoryCreateNestedManyWithoutDrugInput
    prescriptionDetails?: PrescriptionDetailCreateNestedManyWithoutDrugInput
  }

  export type DrugUncheckedCreateWithoutOutboundsInput = {
    drug_code: string
    generic_name: string
    brand_name?: string | null
    dosage_form: string
    specification?: string | null
    manufacturer?: string | null
    unit_price?: number | null
    inventories?: InventoryUncheckedCreateNestedManyWithoutDrugInput
    inbounds?: InboundUncheckedCreateNestedManyWithoutDrugInput
    priceHistories?: PriceHistoryUncheckedCreateNestedManyWithoutDrugInput
    prescriptionDetails?: PrescriptionDetailUncheckedCreateNestedManyWithoutDrugInput
  }

  export type DrugCreateOrConnectWithoutOutboundsInput = {
    where: DrugWhereUniqueInput
    create: XOR<DrugCreateWithoutOutboundsInput, DrugUncheckedCreateWithoutOutboundsInput>
  }

  export type PrescriptionCreateWithoutOutboundsInput = {
    create_time?: Date | string
    status?: $Enums.PrescriptionStatus
    diagnosis?: string | null
    remarks?: string | null
    total_amount?: number
    patient: PatientCreateNestedOneWithoutPrescriptionsInput
    doctor: DoctorCreateNestedOneWithoutPrescriptionsInput
    prescriptionDetails?: PrescriptionDetailCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutOutboundsInput = {
    prescription_id?: number
    patient_visit_id: string
    doctor_id: number
    create_time?: Date | string
    status?: $Enums.PrescriptionStatus
    diagnosis?: string | null
    remarks?: string | null
    total_amount?: number
    prescriptionDetails?: PrescriptionDetailUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionCreateOrConnectWithoutOutboundsInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutOutboundsInput, PrescriptionUncheckedCreateWithoutOutboundsInput>
  }

  export type DrugUpsertWithoutOutboundsInput = {
    update: XOR<DrugUpdateWithoutOutboundsInput, DrugUncheckedUpdateWithoutOutboundsInput>
    create: XOR<DrugCreateWithoutOutboundsInput, DrugUncheckedCreateWithoutOutboundsInput>
    where?: DrugWhereInput
  }

  export type DrugUpdateToOneWithWhereWithoutOutboundsInput = {
    where?: DrugWhereInput
    data: XOR<DrugUpdateWithoutOutboundsInput, DrugUncheckedUpdateWithoutOutboundsInput>
  }

  export type DrugUpdateWithoutOutboundsInput = {
    drug_code?: StringFieldUpdateOperationsInput | string
    generic_name?: StringFieldUpdateOperationsInput | string
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    dosage_form?: StringFieldUpdateOperationsInput | string
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
    inventories?: InventoryUpdateManyWithoutDrugNestedInput
    inbounds?: InboundUpdateManyWithoutDrugNestedInput
    priceHistories?: PriceHistoryUpdateManyWithoutDrugNestedInput
    prescriptionDetails?: PrescriptionDetailUpdateManyWithoutDrugNestedInput
  }

  export type DrugUncheckedUpdateWithoutOutboundsInput = {
    drug_code?: StringFieldUpdateOperationsInput | string
    generic_name?: StringFieldUpdateOperationsInput | string
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    dosage_form?: StringFieldUpdateOperationsInput | string
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
    inventories?: InventoryUncheckedUpdateManyWithoutDrugNestedInput
    inbounds?: InboundUncheckedUpdateManyWithoutDrugNestedInput
    priceHistories?: PriceHistoryUncheckedUpdateManyWithoutDrugNestedInput
    prescriptionDetails?: PrescriptionDetailUncheckedUpdateManyWithoutDrugNestedInput
  }

  export type PrescriptionUpsertWithoutOutboundsInput = {
    update: XOR<PrescriptionUpdateWithoutOutboundsInput, PrescriptionUncheckedUpdateWithoutOutboundsInput>
    create: XOR<PrescriptionCreateWithoutOutboundsInput, PrescriptionUncheckedCreateWithoutOutboundsInput>
    where?: PrescriptionWhereInput
  }

  export type PrescriptionUpdateToOneWithWhereWithoutOutboundsInput = {
    where?: PrescriptionWhereInput
    data: XOR<PrescriptionUpdateWithoutOutboundsInput, PrescriptionUncheckedUpdateWithoutOutboundsInput>
  }

  export type PrescriptionUpdateWithoutOutboundsInput = {
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: FloatFieldUpdateOperationsInput | number
    patient?: PatientUpdateOneRequiredWithoutPrescriptionsNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutPrescriptionsNestedInput
    prescriptionDetails?: PrescriptionDetailUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutOutboundsInput = {
    prescription_id?: IntFieldUpdateOperationsInput | number
    patient_visit_id?: StringFieldUpdateOperationsInput | string
    doctor_id?: IntFieldUpdateOperationsInput | number
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: FloatFieldUpdateOperationsInput | number
    prescriptionDetails?: PrescriptionDetailUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type DrugCreateWithoutPriceHistoriesInput = {
    drug_code: string
    generic_name: string
    brand_name?: string | null
    dosage_form: string
    specification?: string | null
    manufacturer?: string | null
    unit_price?: number | null
    inventories?: InventoryCreateNestedManyWithoutDrugInput
    inbounds?: InboundCreateNestedManyWithoutDrugInput
    outbounds?: OutboundCreateNestedManyWithoutDrugInput
    prescriptionDetails?: PrescriptionDetailCreateNestedManyWithoutDrugInput
  }

  export type DrugUncheckedCreateWithoutPriceHistoriesInput = {
    drug_code: string
    generic_name: string
    brand_name?: string | null
    dosage_form: string
    specification?: string | null
    manufacturer?: string | null
    unit_price?: number | null
    inventories?: InventoryUncheckedCreateNestedManyWithoutDrugInput
    inbounds?: InboundUncheckedCreateNestedManyWithoutDrugInput
    outbounds?: OutboundUncheckedCreateNestedManyWithoutDrugInput
    prescriptionDetails?: PrescriptionDetailUncheckedCreateNestedManyWithoutDrugInput
  }

  export type DrugCreateOrConnectWithoutPriceHistoriesInput = {
    where: DrugWhereUniqueInput
    create: XOR<DrugCreateWithoutPriceHistoriesInput, DrugUncheckedCreateWithoutPriceHistoriesInput>
  }

  export type DrugUpsertWithoutPriceHistoriesInput = {
    update: XOR<DrugUpdateWithoutPriceHistoriesInput, DrugUncheckedUpdateWithoutPriceHistoriesInput>
    create: XOR<DrugCreateWithoutPriceHistoriesInput, DrugUncheckedCreateWithoutPriceHistoriesInput>
    where?: DrugWhereInput
  }

  export type DrugUpdateToOneWithWhereWithoutPriceHistoriesInput = {
    where?: DrugWhereInput
    data: XOR<DrugUpdateWithoutPriceHistoriesInput, DrugUncheckedUpdateWithoutPriceHistoriesInput>
  }

  export type DrugUpdateWithoutPriceHistoriesInput = {
    drug_code?: StringFieldUpdateOperationsInput | string
    generic_name?: StringFieldUpdateOperationsInput | string
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    dosage_form?: StringFieldUpdateOperationsInput | string
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
    inventories?: InventoryUpdateManyWithoutDrugNestedInput
    inbounds?: InboundUpdateManyWithoutDrugNestedInput
    outbounds?: OutboundUpdateManyWithoutDrugNestedInput
    prescriptionDetails?: PrescriptionDetailUpdateManyWithoutDrugNestedInput
  }

  export type DrugUncheckedUpdateWithoutPriceHistoriesInput = {
    drug_code?: StringFieldUpdateOperationsInput | string
    generic_name?: StringFieldUpdateOperationsInput | string
    brand_name?: NullableStringFieldUpdateOperationsInput | string | null
    dosage_form?: StringFieldUpdateOperationsInput | string
    specification?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    unit_price?: NullableFloatFieldUpdateOperationsInput | number | null
    inventories?: InventoryUncheckedUpdateManyWithoutDrugNestedInput
    inbounds?: InboundUncheckedUpdateManyWithoutDrugNestedInput
    outbounds?: OutboundUncheckedUpdateManyWithoutDrugNestedInput
    prescriptionDetails?: PrescriptionDetailUncheckedUpdateManyWithoutDrugNestedInput
  }

  export type PrescriptionCreateManyPatientInput = {
    prescription_id?: number
    doctor_id: number
    create_time?: Date | string
    status?: $Enums.PrescriptionStatus
    diagnosis?: string | null
    remarks?: string | null
    total_amount?: number
  }

  export type PrescriptionUpdateWithoutPatientInput = {
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: FloatFieldUpdateOperationsInput | number
    doctor?: DoctorUpdateOneRequiredWithoutPrescriptionsNestedInput
    prescriptionDetails?: PrescriptionDetailUpdateManyWithoutPrescriptionNestedInput
    outbounds?: OutboundUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutPatientInput = {
    prescription_id?: IntFieldUpdateOperationsInput | number
    doctor_id?: IntFieldUpdateOperationsInput | number
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: FloatFieldUpdateOperationsInput | number
    prescriptionDetails?: PrescriptionDetailUncheckedUpdateManyWithoutPrescriptionNestedInput
    outbounds?: OutboundUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateManyWithoutPatientInput = {
    prescription_id?: IntFieldUpdateOperationsInput | number
    doctor_id?: IntFieldUpdateOperationsInput | number
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: FloatFieldUpdateOperationsInput | number
  }

  export type PrescriptionCreateManyDoctorInput = {
    prescription_id?: number
    patient_visit_id: string
    create_time?: Date | string
    status?: $Enums.PrescriptionStatus
    diagnosis?: string | null
    remarks?: string | null
    total_amount?: number
  }

  export type PrescriptionUpdateWithoutDoctorInput = {
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: FloatFieldUpdateOperationsInput | number
    patient?: PatientUpdateOneRequiredWithoutPrescriptionsNestedInput
    prescriptionDetails?: PrescriptionDetailUpdateManyWithoutPrescriptionNestedInput
    outbounds?: OutboundUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutDoctorInput = {
    prescription_id?: IntFieldUpdateOperationsInput | number
    patient_visit_id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: FloatFieldUpdateOperationsInput | number
    prescriptionDetails?: PrescriptionDetailUncheckedUpdateManyWithoutPrescriptionNestedInput
    outbounds?: OutboundUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateManyWithoutDoctorInput = {
    prescription_id?: IntFieldUpdateOperationsInput | number
    patient_visit_id?: StringFieldUpdateOperationsInput | string
    create_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPrescriptionStatusFieldUpdateOperationsInput | $Enums.PrescriptionStatus
    diagnosis?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    total_amount?: FloatFieldUpdateOperationsInput | number
  }

  export type PrescriptionDetailCreateManyPrescriptionInput = {
    drug_code: string
    drug_name: string
    unit_price: number
    quantity?: number
    usage_instruction: string
  }

  export type OutboundCreateManyPrescriptionInput = {
    outbound_id?: number
    drug_code: string
    batch_number: string
    quantity: number
    outbound_type: string
    outbound_time?: Date | string
  }

  export type PrescriptionDetailUpdateWithoutPrescriptionInput = {
    drug_name?: StringFieldUpdateOperationsInput | string
    unit_price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    usage_instruction?: StringFieldUpdateOperationsInput | string
    drug?: DrugUpdateOneRequiredWithoutPrescriptionDetailsNestedInput
  }

  export type PrescriptionDetailUncheckedUpdateWithoutPrescriptionInput = {
    drug_code?: StringFieldUpdateOperationsInput | string
    drug_name?: StringFieldUpdateOperationsInput | string
    unit_price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    usage_instruction?: StringFieldUpdateOperationsInput | string
  }

  export type PrescriptionDetailUncheckedUpdateManyWithoutPrescriptionInput = {
    drug_code?: StringFieldUpdateOperationsInput | string
    drug_name?: StringFieldUpdateOperationsInput | string
    unit_price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    usage_instruction?: StringFieldUpdateOperationsInput | string
  }

  export type OutboundUpdateWithoutPrescriptionInput = {
    batch_number?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    outbound_type?: StringFieldUpdateOperationsInput | string
    outbound_time?: DateTimeFieldUpdateOperationsInput | Date | string
    drug?: DrugUpdateOneRequiredWithoutOutboundsNestedInput
  }

  export type OutboundUncheckedUpdateWithoutPrescriptionInput = {
    outbound_id?: IntFieldUpdateOperationsInput | number
    drug_code?: StringFieldUpdateOperationsInput | string
    batch_number?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    outbound_type?: StringFieldUpdateOperationsInput | string
    outbound_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutboundUncheckedUpdateManyWithoutPrescriptionInput = {
    outbound_id?: IntFieldUpdateOperationsInput | number
    drug_code?: StringFieldUpdateOperationsInput | string
    batch_number?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    outbound_type?: StringFieldUpdateOperationsInput | string
    outbound_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateManyDrugInput = {
    inventory_id?: number
    batch_number: string
    stock_quantity?: number
    expiration_date: Date | string
    alert_threshold?: number
    last_inbound_time?: Date | string | null
    last_outbound_time?: Date | string | null
  }

  export type InboundCreateManyDrugInput = {
    inbound_id?: number
    batch_number: string
    quantity: number
    inbound_time?: Date | string
    operator_id?: number | null
  }

  export type OutboundCreateManyDrugInput = {
    outbound_id?: number
    batch_number: string
    quantity: number
    prescription_id?: number | null
    outbound_type: string
    outbound_time?: Date | string
  }

  export type PriceHistoryCreateManyDrugInput = {
    price_id?: number
    old_price?: number | null
    new_price: number
    effective_date: Date | string
    operator_id?: number | null
  }

  export type PrescriptionDetailCreateManyDrugInput = {
    prescription_id: number
    drug_name: string
    unit_price: number
    quantity?: number
    usage_instruction: string
  }

  export type InventoryUpdateWithoutDrugInput = {
    batch_number?: StringFieldUpdateOperationsInput | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    alert_threshold?: IntFieldUpdateOperationsInput | number
    last_inbound_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_outbound_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventoryUncheckedUpdateWithoutDrugInput = {
    inventory_id?: IntFieldUpdateOperationsInput | number
    batch_number?: StringFieldUpdateOperationsInput | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    alert_threshold?: IntFieldUpdateOperationsInput | number
    last_inbound_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_outbound_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventoryUncheckedUpdateManyWithoutDrugInput = {
    inventory_id?: IntFieldUpdateOperationsInput | number
    batch_number?: StringFieldUpdateOperationsInput | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    alert_threshold?: IntFieldUpdateOperationsInput | number
    last_inbound_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_outbound_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InboundUpdateWithoutDrugInput = {
    batch_number?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    inbound_time?: DateTimeFieldUpdateOperationsInput | Date | string
    operator_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InboundUncheckedUpdateWithoutDrugInput = {
    inbound_id?: IntFieldUpdateOperationsInput | number
    batch_number?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    inbound_time?: DateTimeFieldUpdateOperationsInput | Date | string
    operator_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type InboundUncheckedUpdateManyWithoutDrugInput = {
    inbound_id?: IntFieldUpdateOperationsInput | number
    batch_number?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    inbound_time?: DateTimeFieldUpdateOperationsInput | Date | string
    operator_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OutboundUpdateWithoutDrugInput = {
    batch_number?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    outbound_type?: StringFieldUpdateOperationsInput | string
    outbound_time?: DateTimeFieldUpdateOperationsInput | Date | string
    prescription?: PrescriptionUpdateOneWithoutOutboundsNestedInput
  }

  export type OutboundUncheckedUpdateWithoutDrugInput = {
    outbound_id?: IntFieldUpdateOperationsInput | number
    batch_number?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    prescription_id?: NullableIntFieldUpdateOperationsInput | number | null
    outbound_type?: StringFieldUpdateOperationsInput | string
    outbound_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutboundUncheckedUpdateManyWithoutDrugInput = {
    outbound_id?: IntFieldUpdateOperationsInput | number
    batch_number?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    prescription_id?: NullableIntFieldUpdateOperationsInput | number | null
    outbound_type?: StringFieldUpdateOperationsInput | string
    outbound_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceHistoryUpdateWithoutDrugInput = {
    old_price?: NullableFloatFieldUpdateOperationsInput | number | null
    new_price?: FloatFieldUpdateOperationsInput | number
    effective_date?: DateTimeFieldUpdateOperationsInput | Date | string
    operator_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PriceHistoryUncheckedUpdateWithoutDrugInput = {
    price_id?: IntFieldUpdateOperationsInput | number
    old_price?: NullableFloatFieldUpdateOperationsInput | number | null
    new_price?: FloatFieldUpdateOperationsInput | number
    effective_date?: DateTimeFieldUpdateOperationsInput | Date | string
    operator_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PriceHistoryUncheckedUpdateManyWithoutDrugInput = {
    price_id?: IntFieldUpdateOperationsInput | number
    old_price?: NullableFloatFieldUpdateOperationsInput | number | null
    new_price?: FloatFieldUpdateOperationsInput | number
    effective_date?: DateTimeFieldUpdateOperationsInput | Date | string
    operator_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PrescriptionDetailUpdateWithoutDrugInput = {
    drug_name?: StringFieldUpdateOperationsInput | string
    unit_price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    usage_instruction?: StringFieldUpdateOperationsInput | string
    prescription?: PrescriptionUpdateOneRequiredWithoutPrescriptionDetailsNestedInput
  }

  export type PrescriptionDetailUncheckedUpdateWithoutDrugInput = {
    prescription_id?: IntFieldUpdateOperationsInput | number
    drug_name?: StringFieldUpdateOperationsInput | string
    unit_price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    usage_instruction?: StringFieldUpdateOperationsInput | string
  }

  export type PrescriptionDetailUncheckedUpdateManyWithoutDrugInput = {
    prescription_id?: IntFieldUpdateOperationsInput | number
    drug_name?: StringFieldUpdateOperationsInput | string
    unit_price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    usage_instruction?: StringFieldUpdateOperationsInput | string
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