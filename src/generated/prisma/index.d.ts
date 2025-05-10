
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserSettings
 * 
 */
export type UserSettings = $Result.DefaultSelection<Prisma.$UserSettingsPayload>
/**
 * Model Coin
 * 
 */
export type Coin = $Result.DefaultSelection<Prisma.$CoinPayload>
/**
 * Model PortfolioEntry
 * 
 */
export type PortfolioEntry = $Result.DefaultSelection<Prisma.$PortfolioEntryPayload>
/**
 * Model TrackRecord
 * 
 */
export type TrackRecord = $Result.DefaultSelection<Prisma.$TrackRecordPayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSettings`: Exposes CRUD operations for the **UserSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSettings
    * const userSettings = await prisma.userSettings.findMany()
    * ```
    */
  get userSettings(): Prisma.UserSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coin`: Exposes CRUD operations for the **Coin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coins
    * const coins = await prisma.coin.findMany()
    * ```
    */
  get coin(): Prisma.CoinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portfolioEntry`: Exposes CRUD operations for the **PortfolioEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortfolioEntries
    * const portfolioEntries = await prisma.portfolioEntry.findMany()
    * ```
    */
  get portfolioEntry(): Prisma.PortfolioEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trackRecord`: Exposes CRUD operations for the **TrackRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackRecords
    * const trackRecords = await prisma.trackRecord.findMany()
    * ```
    */
  get trackRecord(): Prisma.TrackRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    UserSettings: 'UserSettings',
    Coin: 'Coin',
    PortfolioEntry: 'PortfolioEntry',
    TrackRecord: 'TrackRecord',
    Alert: 'Alert'
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
      modelProps: "user" | "userSettings" | "coin" | "portfolioEntry" | "trackRecord" | "alert"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserSettings: {
        payload: Prisma.$UserSettingsPayload<ExtArgs>
        fields: Prisma.UserSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findFirst: {
            args: Prisma.UserSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findMany: {
            args: Prisma.UserSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          create: {
            args: Prisma.UserSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          createMany: {
            args: Prisma.UserSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          update: {
            args: Prisma.UserSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          deleteMany: {
            args: Prisma.UserSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          aggregate: {
            args: Prisma.UserSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSettings>
          }
          groupBy: {
            args: Prisma.UserSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsCountAggregateOutputType> | number
          }
        }
      }
      Coin: {
        payload: Prisma.$CoinPayload<ExtArgs>
        fields: Prisma.CoinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinPayload>
          }
          findFirst: {
            args: Prisma.CoinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinPayload>
          }
          findMany: {
            args: Prisma.CoinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinPayload>[]
          }
          create: {
            args: Prisma.CoinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinPayload>
          }
          createMany: {
            args: Prisma.CoinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CoinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinPayload>
          }
          update: {
            args: Prisma.CoinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinPayload>
          }
          deleteMany: {
            args: Prisma.CoinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CoinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoinPayload>
          }
          aggregate: {
            args: Prisma.CoinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoin>
          }
          groupBy: {
            args: Prisma.CoinGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoinGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoinCountArgs<ExtArgs>
            result: $Utils.Optional<CoinCountAggregateOutputType> | number
          }
        }
      }
      PortfolioEntry: {
        payload: Prisma.$PortfolioEntryPayload<ExtArgs>
        fields: Prisma.PortfolioEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioEntryPayload>
          }
          findFirst: {
            args: Prisma.PortfolioEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioEntryPayload>
          }
          findMany: {
            args: Prisma.PortfolioEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioEntryPayload>[]
          }
          create: {
            args: Prisma.PortfolioEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioEntryPayload>
          }
          createMany: {
            args: Prisma.PortfolioEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PortfolioEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioEntryPayload>
          }
          update: {
            args: Prisma.PortfolioEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioEntryPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PortfolioEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioEntryPayload>
          }
          aggregate: {
            args: Prisma.PortfolioEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolioEntry>
          }
          groupBy: {
            args: Prisma.PortfolioEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioEntryCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioEntryCountAggregateOutputType> | number
          }
        }
      }
      TrackRecord: {
        payload: Prisma.$TrackRecordPayload<ExtArgs>
        fields: Prisma.TrackRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackRecordPayload>
          }
          findFirst: {
            args: Prisma.TrackRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackRecordPayload>
          }
          findMany: {
            args: Prisma.TrackRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackRecordPayload>[]
          }
          create: {
            args: Prisma.TrackRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackRecordPayload>
          }
          createMany: {
            args: Prisma.TrackRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TrackRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackRecordPayload>
          }
          update: {
            args: Prisma.TrackRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackRecordPayload>
          }
          deleteMany: {
            args: Prisma.TrackRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrackRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackRecordPayload>
          }
          aggregate: {
            args: Prisma.TrackRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrackRecord>
          }
          groupBy: {
            args: Prisma.TrackRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackRecordCountArgs<ExtArgs>
            result: $Utils.Optional<TrackRecordCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
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
    user?: UserOmit
    userSettings?: UserSettingsOmit
    coin?: CoinOmit
    portfolioEntry?: PortfolioEntryOmit
    trackRecord?: TrackRecordOmit
    alert?: AlertOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    portfolio: number
    alerts: number
    records: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | UserCountOutputTypeCountPortfolioArgs
    alerts?: boolean | UserCountOutputTypeCountAlertsArgs
    records?: boolean | UserCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPortfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackRecordWhereInput
  }


  /**
   * Count Type CoinCountOutputType
   */

  export type CoinCountOutputType = {
    portfolio: number
    alerts: number
    records: number
  }

  export type CoinCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | CoinCountOutputTypeCountPortfolioArgs
    alerts?: boolean | CoinCountOutputTypeCountAlertsArgs
    records?: boolean | CoinCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes
  /**
   * CoinCountOutputType without action
   */
  export type CoinCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoinCountOutputType
     */
    select?: CoinCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoinCountOutputType without action
   */
  export type CoinCountOutputTypeCountPortfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioEntryWhereInput
  }

  /**
   * CoinCountOutputType without action
   */
  export type CoinCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }

  /**
   * CoinCountOutputType without action
   */
  export type CoinCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    email: string | null
    password: string | null
    displayName: string | null
    photoUrl: string | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    email: string | null
    password: string | null
    displayName: string | null
    photoUrl: string | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    email: number
    password: number
    displayName: number
    photoUrl: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    displayName?: true
    photoUrl?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    displayName?: true
    photoUrl?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    email?: true
    password?: true
    displayName?: true
    photoUrl?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    email: string
    password: string
    displayName: string | null
    photoUrl: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    password?: boolean
    displayName?: boolean
    photoUrl?: boolean
    settings?: boolean | User$settingsArgs<ExtArgs>
    portfolio?: boolean | User$portfolioArgs<ExtArgs>
    alerts?: boolean | User$alertsArgs<ExtArgs>
    records?: boolean | User$recordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    user_id?: boolean
    email?: boolean
    password?: boolean
    displayName?: boolean
    photoUrl?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "email" | "password" | "displayName" | "photoUrl", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    settings?: boolean | User$settingsArgs<ExtArgs>
    portfolio?: boolean | User$portfolioArgs<ExtArgs>
    alerts?: boolean | User$alertsArgs<ExtArgs>
    records?: boolean | User$recordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      settings: Prisma.$UserSettingsPayload<ExtArgs> | null
      portfolio: Prisma.$PortfolioEntryPayload<ExtArgs>[]
      alerts: Prisma.$AlertPayload<ExtArgs>[]
      records: Prisma.$TrackRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      email: string
      password: string
      displayName: string | null
      photoUrl: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    settings<T extends User$settingsArgs<ExtArgs> = {}>(args?: Subset<T, User$settingsArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    portfolio<T extends User$portfolioArgs<ExtArgs> = {}>(args?: Subset<T, User$portfolioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alerts<T extends User$alertsArgs<ExtArgs> = {}>(args?: Subset<T, User$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    records<T extends User$recordsArgs<ExtArgs> = {}>(args?: Subset<T, User$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly photoUrl: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.settings
   */
  export type User$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    where?: UserSettingsWhereInput
  }

  /**
   * User.portfolio
   */
  export type User$portfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioEntry
     */
    select?: PortfolioEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioEntry
     */
    omit?: PortfolioEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioEntryInclude<ExtArgs> | null
    where?: PortfolioEntryWhereInput
    orderBy?: PortfolioEntryOrderByWithRelationInput | PortfolioEntryOrderByWithRelationInput[]
    cursor?: PortfolioEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortfolioEntryScalarFieldEnum | PortfolioEntryScalarFieldEnum[]
  }

  /**
   * User.alerts
   */
  export type User$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * User.records
   */
  export type User$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackRecord
     */
    select?: TrackRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackRecord
     */
    omit?: TrackRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackRecordInclude<ExtArgs> | null
    where?: TrackRecordWhereInput
    orderBy?: TrackRecordOrderByWithRelationInput | TrackRecordOrderByWithRelationInput[]
    cursor?: TrackRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackRecordScalarFieldEnum | TrackRecordScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserSettings
   */

  export type AggregateUserSettings = {
    _count: UserSettingsCountAggregateOutputType | null
    _avg: UserSettingsAvgAggregateOutputType | null
    _sum: UserSettingsSumAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  export type UserSettingsAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserSettingsSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserSettingsMinAggregateOutputType = {
    user_id: number | null
    currency: string | null
    dark_mode: boolean | null
  }

  export type UserSettingsMaxAggregateOutputType = {
    user_id: number | null
    currency: string | null
    dark_mode: boolean | null
  }

  export type UserSettingsCountAggregateOutputType = {
    user_id: number
    currency: number
    dark_mode: number
    _all: number
  }


  export type UserSettingsAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSettingsSumAggregateInputType = {
    user_id?: true
  }

  export type UserSettingsMinAggregateInputType = {
    user_id?: true
    currency?: true
    dark_mode?: true
  }

  export type UserSettingsMaxAggregateInputType = {
    user_id?: true
    currency?: true
    dark_mode?: true
  }

  export type UserSettingsCountAggregateInputType = {
    user_id?: true
    currency?: true
    dark_mode?: true
    _all?: true
  }

  export type UserSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to aggregate.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSettings
    **/
    _count?: true | UserSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSettingsMaxAggregateInputType
  }

  export type GetUserSettingsAggregateType<T extends UserSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSettings[P]>
      : GetScalarType<T[P], AggregateUserSettings[P]>
  }




  export type UserSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSettingsWhereInput
    orderBy?: UserSettingsOrderByWithAggregationInput | UserSettingsOrderByWithAggregationInput[]
    by: UserSettingsScalarFieldEnum[] | UserSettingsScalarFieldEnum
    having?: UserSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSettingsCountAggregateInputType | true
    _avg?: UserSettingsAvgAggregateInputType
    _sum?: UserSettingsSumAggregateInputType
    _min?: UserSettingsMinAggregateInputType
    _max?: UserSettingsMaxAggregateInputType
  }

  export type UserSettingsGroupByOutputType = {
    user_id: number
    currency: string
    dark_mode: boolean
    _count: UserSettingsCountAggregateOutputType | null
    _avg: UserSettingsAvgAggregateOutputType | null
    _sum: UserSettingsSumAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  type GetUserSettingsGroupByPayload<T extends UserSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
        }
      >
    >


  export type UserSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    currency?: boolean
    dark_mode?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>



  export type UserSettingsSelectScalar = {
    user_id?: boolean
    currency?: boolean
    dark_mode?: boolean
  }

  export type UserSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "currency" | "dark_mode", ExtArgs["result"]["userSettings"]>
  export type UserSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      currency: string
      dark_mode: boolean
    }, ExtArgs["result"]["userSettings"]>
    composites: {}
  }

  type UserSettingsGetPayload<S extends boolean | null | undefined | UserSettingsDefaultArgs> = $Result.GetResult<Prisma.$UserSettingsPayload, S>

  type UserSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSettingsCountAggregateInputType | true
    }

  export interface UserSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSettings'], meta: { name: 'UserSettings' } }
    /**
     * Find zero or one UserSettings that matches the filter.
     * @param {UserSettingsFindUniqueArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSettingsFindUniqueArgs>(args: SelectSubset<T, UserSettingsFindUniqueArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSettingsFindUniqueOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSettingsFindFirstArgs>(args?: SelectSubset<T, UserSettingsFindFirstArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSettings
     * const userSettings = await prisma.userSettings.findMany()
     * 
     * // Get first 10 UserSettings
     * const userSettings = await prisma.userSettings.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userSettingsWithUser_idOnly = await prisma.userSettings.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserSettingsFindManyArgs>(args?: SelectSubset<T, UserSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSettings.
     * @param {UserSettingsCreateArgs} args - Arguments to create a UserSettings.
     * @example
     * // Create one UserSettings
     * const UserSettings = await prisma.userSettings.create({
     *   data: {
     *     // ... data to create a UserSettings
     *   }
     * })
     * 
     */
    create<T extends UserSettingsCreateArgs>(args: SelectSubset<T, UserSettingsCreateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSettings.
     * @param {UserSettingsCreateManyArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSettingsCreateManyArgs>(args?: SelectSubset<T, UserSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserSettings.
     * @param {UserSettingsDeleteArgs} args - Arguments to delete one UserSettings.
     * @example
     * // Delete one UserSettings
     * const UserSettings = await prisma.userSettings.delete({
     *   where: {
     *     // ... filter to delete one UserSettings
     *   }
     * })
     * 
     */
    delete<T extends UserSettingsDeleteArgs>(args: SelectSubset<T, UserSettingsDeleteArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSettings.
     * @param {UserSettingsUpdateArgs} args - Arguments to update one UserSettings.
     * @example
     * // Update one UserSettings
     * const userSettings = await prisma.userSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSettingsUpdateArgs>(args: SelectSubset<T, UserSettingsUpdateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSettings.
     * @param {UserSettingsDeleteManyArgs} args - Arguments to filter UserSettings to delete.
     * @example
     * // Delete a few UserSettings
     * const { count } = await prisma.userSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSettingsDeleteManyArgs>(args?: SelectSubset<T, UserSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSettingsUpdateManyArgs>(args: SelectSubset<T, UserSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserSettings.
     * @param {UserSettingsUpsertArgs} args - Arguments to update or create a UserSettings.
     * @example
     * // Update or create a UserSettings
     * const userSettings = await prisma.userSettings.upsert({
     *   create: {
     *     // ... data to create a UserSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSettings we want to update
     *   }
     * })
     */
    upsert<T extends UserSettingsUpsertArgs>(args: SelectSubset<T, UserSettingsUpsertArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsCountArgs} args - Arguments to filter UserSettings to count.
     * @example
     * // Count the number of UserSettings
     * const count = await prisma.userSettings.count({
     *   where: {
     *     // ... the filter for the UserSettings we want to count
     *   }
     * })
    **/
    count<T extends UserSettingsCountArgs>(
      args?: Subset<T, UserSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSettingsAggregateArgs>(args: Subset<T, UserSettingsAggregateArgs>): Prisma.PrismaPromise<GetUserSettingsAggregateType<T>>

    /**
     * Group by UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsGroupByArgs} args - Group by arguments.
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
      T extends UserSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSettingsGroupByArgs['orderBy'] }
        : { orderBy?: UserSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSettings model
   */
  readonly fields: UserSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSettings model
   */
  interface UserSettingsFieldRefs {
    readonly user_id: FieldRef<"UserSettings", 'Int'>
    readonly currency: FieldRef<"UserSettings", 'String'>
    readonly dark_mode: FieldRef<"UserSettings", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserSettings findUnique
   */
  export type UserSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findUniqueOrThrow
   */
  export type UserSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findFirst
   */
  export type UserSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findFirstOrThrow
   */
  export type UserSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findMany
   */
  export type UserSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings create
   */
  export type UserSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSettings.
     */
    data: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
  }

  /**
   * UserSettings createMany
   */
  export type UserSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSettings update
   */
  export type UserSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSettings.
     */
    data: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
    /**
     * Choose, which UserSettings to update.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings updateMany
   */
  export type UserSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
  }

  /**
   * UserSettings upsert
   */
  export type UserSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSettings to update in case it exists.
     */
    where: UserSettingsWhereUniqueInput
    /**
     * In case the UserSettings found by the `where` argument doesn't exist, create a new UserSettings with this data.
     */
    create: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
    /**
     * In case the UserSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
  }

  /**
   * UserSettings delete
   */
  export type UserSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter which UserSettings to delete.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings deleteMany
   */
  export type UserSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to delete
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to delete.
     */
    limit?: number
  }

  /**
   * UserSettings without action
   */
  export type UserSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
  }


  /**
   * Model Coin
   */

  export type AggregateCoin = {
    _count: CoinCountAggregateOutputType | null
    _avg: CoinAvgAggregateOutputType | null
    _sum: CoinSumAggregateOutputType | null
    _min: CoinMinAggregateOutputType | null
    _max: CoinMaxAggregateOutputType | null
  }

  export type CoinAvgAggregateOutputType = {
    coin_id: number | null
    cmc_rank: number | null
    price: number | null
    market_cap: number | null
    volume_24h: number | null
    percent_change_24h: number | null
    percent_change_7d: number | null
  }

  export type CoinSumAggregateOutputType = {
    coin_id: number | null
    cmc_rank: number | null
    price: number | null
    market_cap: number | null
    volume_24h: number | null
    percent_change_24h: number | null
    percent_change_7d: number | null
  }

  export type CoinMinAggregateOutputType = {
    coin_id: number | null
    name: string | null
    symbol: string | null
    slug: string | null
    cmc_rank: number | null
    price: number | null
    market_cap: number | null
    volume_24h: number | null
    percent_change_24h: number | null
    percent_change_7d: number | null
    last_updated: Date | null
  }

  export type CoinMaxAggregateOutputType = {
    coin_id: number | null
    name: string | null
    symbol: string | null
    slug: string | null
    cmc_rank: number | null
    price: number | null
    market_cap: number | null
    volume_24h: number | null
    percent_change_24h: number | null
    percent_change_7d: number | null
    last_updated: Date | null
  }

  export type CoinCountAggregateOutputType = {
    coin_id: number
    name: number
    symbol: number
    slug: number
    cmc_rank: number
    price: number
    market_cap: number
    volume_24h: number
    percent_change_24h: number
    percent_change_7d: number
    last_updated: number
    _all: number
  }


  export type CoinAvgAggregateInputType = {
    coin_id?: true
    cmc_rank?: true
    price?: true
    market_cap?: true
    volume_24h?: true
    percent_change_24h?: true
    percent_change_7d?: true
  }

  export type CoinSumAggregateInputType = {
    coin_id?: true
    cmc_rank?: true
    price?: true
    market_cap?: true
    volume_24h?: true
    percent_change_24h?: true
    percent_change_7d?: true
  }

  export type CoinMinAggregateInputType = {
    coin_id?: true
    name?: true
    symbol?: true
    slug?: true
    cmc_rank?: true
    price?: true
    market_cap?: true
    volume_24h?: true
    percent_change_24h?: true
    percent_change_7d?: true
    last_updated?: true
  }

  export type CoinMaxAggregateInputType = {
    coin_id?: true
    name?: true
    symbol?: true
    slug?: true
    cmc_rank?: true
    price?: true
    market_cap?: true
    volume_24h?: true
    percent_change_24h?: true
    percent_change_7d?: true
    last_updated?: true
  }

  export type CoinCountAggregateInputType = {
    coin_id?: true
    name?: true
    symbol?: true
    slug?: true
    cmc_rank?: true
    price?: true
    market_cap?: true
    volume_24h?: true
    percent_change_24h?: true
    percent_change_7d?: true
    last_updated?: true
    _all?: true
  }

  export type CoinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coin to aggregate.
     */
    where?: CoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coins to fetch.
     */
    orderBy?: CoinOrderByWithRelationInput | CoinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coins
    **/
    _count?: true | CoinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoinMaxAggregateInputType
  }

  export type GetCoinAggregateType<T extends CoinAggregateArgs> = {
        [P in keyof T & keyof AggregateCoin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoin[P]>
      : GetScalarType<T[P], AggregateCoin[P]>
  }




  export type CoinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoinWhereInput
    orderBy?: CoinOrderByWithAggregationInput | CoinOrderByWithAggregationInput[]
    by: CoinScalarFieldEnum[] | CoinScalarFieldEnum
    having?: CoinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoinCountAggregateInputType | true
    _avg?: CoinAvgAggregateInputType
    _sum?: CoinSumAggregateInputType
    _min?: CoinMinAggregateInputType
    _max?: CoinMaxAggregateInputType
  }

  export type CoinGroupByOutputType = {
    coin_id: number
    name: string
    symbol: string
    slug: string
    cmc_rank: number
    price: number
    market_cap: number
    volume_24h: number
    percent_change_24h: number
    percent_change_7d: number
    last_updated: Date
    _count: CoinCountAggregateOutputType | null
    _avg: CoinAvgAggregateOutputType | null
    _sum: CoinSumAggregateOutputType | null
    _min: CoinMinAggregateOutputType | null
    _max: CoinMaxAggregateOutputType | null
  }

  type GetCoinGroupByPayload<T extends CoinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoinGroupByOutputType[P]>
            : GetScalarType<T[P], CoinGroupByOutputType[P]>
        }
      >
    >


  export type CoinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    coin_id?: boolean
    name?: boolean
    symbol?: boolean
    slug?: boolean
    cmc_rank?: boolean
    price?: boolean
    market_cap?: boolean
    volume_24h?: boolean
    percent_change_24h?: boolean
    percent_change_7d?: boolean
    last_updated?: boolean
    portfolio?: boolean | Coin$portfolioArgs<ExtArgs>
    alerts?: boolean | Coin$alertsArgs<ExtArgs>
    records?: boolean | Coin$recordsArgs<ExtArgs>
    _count?: boolean | CoinCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coin"]>



  export type CoinSelectScalar = {
    coin_id?: boolean
    name?: boolean
    symbol?: boolean
    slug?: boolean
    cmc_rank?: boolean
    price?: boolean
    market_cap?: boolean
    volume_24h?: boolean
    percent_change_24h?: boolean
    percent_change_7d?: boolean
    last_updated?: boolean
  }

  export type CoinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"coin_id" | "name" | "symbol" | "slug" | "cmc_rank" | "price" | "market_cap" | "volume_24h" | "percent_change_24h" | "percent_change_7d" | "last_updated", ExtArgs["result"]["coin"]>
  export type CoinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | Coin$portfolioArgs<ExtArgs>
    alerts?: boolean | Coin$alertsArgs<ExtArgs>
    records?: boolean | Coin$recordsArgs<ExtArgs>
    _count?: boolean | CoinCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CoinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coin"
    objects: {
      portfolio: Prisma.$PortfolioEntryPayload<ExtArgs>[]
      alerts: Prisma.$AlertPayload<ExtArgs>[]
      records: Prisma.$TrackRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      coin_id: number
      name: string
      symbol: string
      slug: string
      cmc_rank: number
      price: number
      market_cap: number
      volume_24h: number
      percent_change_24h: number
      percent_change_7d: number
      last_updated: Date
    }, ExtArgs["result"]["coin"]>
    composites: {}
  }

  type CoinGetPayload<S extends boolean | null | undefined | CoinDefaultArgs> = $Result.GetResult<Prisma.$CoinPayload, S>

  type CoinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoinCountAggregateInputType | true
    }

  export interface CoinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coin'], meta: { name: 'Coin' } }
    /**
     * Find zero or one Coin that matches the filter.
     * @param {CoinFindUniqueArgs} args - Arguments to find a Coin
     * @example
     * // Get one Coin
     * const coin = await prisma.coin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoinFindUniqueArgs>(args: SelectSubset<T, CoinFindUniqueArgs<ExtArgs>>): Prisma__CoinClient<$Result.GetResult<Prisma.$CoinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoinFindUniqueOrThrowArgs} args - Arguments to find a Coin
     * @example
     * // Get one Coin
     * const coin = await prisma.coin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoinFindUniqueOrThrowArgs>(args: SelectSubset<T, CoinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoinClient<$Result.GetResult<Prisma.$CoinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinFindFirstArgs} args - Arguments to find a Coin
     * @example
     * // Get one Coin
     * const coin = await prisma.coin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoinFindFirstArgs>(args?: SelectSubset<T, CoinFindFirstArgs<ExtArgs>>): Prisma__CoinClient<$Result.GetResult<Prisma.$CoinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinFindFirstOrThrowArgs} args - Arguments to find a Coin
     * @example
     * // Get one Coin
     * const coin = await prisma.coin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoinFindFirstOrThrowArgs>(args?: SelectSubset<T, CoinFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoinClient<$Result.GetResult<Prisma.$CoinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coins
     * const coins = await prisma.coin.findMany()
     * 
     * // Get first 10 Coins
     * const coins = await prisma.coin.findMany({ take: 10 })
     * 
     * // Only select the `coin_id`
     * const coinWithCoin_idOnly = await prisma.coin.findMany({ select: { coin_id: true } })
     * 
     */
    findMany<T extends CoinFindManyArgs>(args?: SelectSubset<T, CoinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coin.
     * @param {CoinCreateArgs} args - Arguments to create a Coin.
     * @example
     * // Create one Coin
     * const Coin = await prisma.coin.create({
     *   data: {
     *     // ... data to create a Coin
     *   }
     * })
     * 
     */
    create<T extends CoinCreateArgs>(args: SelectSubset<T, CoinCreateArgs<ExtArgs>>): Prisma__CoinClient<$Result.GetResult<Prisma.$CoinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coins.
     * @param {CoinCreateManyArgs} args - Arguments to create many Coins.
     * @example
     * // Create many Coins
     * const coin = await prisma.coin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoinCreateManyArgs>(args?: SelectSubset<T, CoinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Coin.
     * @param {CoinDeleteArgs} args - Arguments to delete one Coin.
     * @example
     * // Delete one Coin
     * const Coin = await prisma.coin.delete({
     *   where: {
     *     // ... filter to delete one Coin
     *   }
     * })
     * 
     */
    delete<T extends CoinDeleteArgs>(args: SelectSubset<T, CoinDeleteArgs<ExtArgs>>): Prisma__CoinClient<$Result.GetResult<Prisma.$CoinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coin.
     * @param {CoinUpdateArgs} args - Arguments to update one Coin.
     * @example
     * // Update one Coin
     * const coin = await prisma.coin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoinUpdateArgs>(args: SelectSubset<T, CoinUpdateArgs<ExtArgs>>): Prisma__CoinClient<$Result.GetResult<Prisma.$CoinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coins.
     * @param {CoinDeleteManyArgs} args - Arguments to filter Coins to delete.
     * @example
     * // Delete a few Coins
     * const { count } = await prisma.coin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoinDeleteManyArgs>(args?: SelectSubset<T, CoinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coins
     * const coin = await prisma.coin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoinUpdateManyArgs>(args: SelectSubset<T, CoinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Coin.
     * @param {CoinUpsertArgs} args - Arguments to update or create a Coin.
     * @example
     * // Update or create a Coin
     * const coin = await prisma.coin.upsert({
     *   create: {
     *     // ... data to create a Coin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coin we want to update
     *   }
     * })
     */
    upsert<T extends CoinUpsertArgs>(args: SelectSubset<T, CoinUpsertArgs<ExtArgs>>): Prisma__CoinClient<$Result.GetResult<Prisma.$CoinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinCountArgs} args - Arguments to filter Coins to count.
     * @example
     * // Count the number of Coins
     * const count = await prisma.coin.count({
     *   where: {
     *     // ... the filter for the Coins we want to count
     *   }
     * })
    **/
    count<T extends CoinCountArgs>(
      args?: Subset<T, CoinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoinAggregateArgs>(args: Subset<T, CoinAggregateArgs>): Prisma.PrismaPromise<GetCoinAggregateType<T>>

    /**
     * Group by Coin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoinGroupByArgs} args - Group by arguments.
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
      T extends CoinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoinGroupByArgs['orderBy'] }
        : { orderBy?: CoinGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coin model
   */
  readonly fields: CoinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    portfolio<T extends Coin$portfolioArgs<ExtArgs> = {}>(args?: Subset<T, Coin$portfolioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alerts<T extends Coin$alertsArgs<ExtArgs> = {}>(args?: Subset<T, Coin$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    records<T extends Coin$recordsArgs<ExtArgs> = {}>(args?: Subset<T, Coin$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Coin model
   */
  interface CoinFieldRefs {
    readonly coin_id: FieldRef<"Coin", 'Int'>
    readonly name: FieldRef<"Coin", 'String'>
    readonly symbol: FieldRef<"Coin", 'String'>
    readonly slug: FieldRef<"Coin", 'String'>
    readonly cmc_rank: FieldRef<"Coin", 'Int'>
    readonly price: FieldRef<"Coin", 'Float'>
    readonly market_cap: FieldRef<"Coin", 'Float'>
    readonly volume_24h: FieldRef<"Coin", 'Float'>
    readonly percent_change_24h: FieldRef<"Coin", 'Float'>
    readonly percent_change_7d: FieldRef<"Coin", 'Float'>
    readonly last_updated: FieldRef<"Coin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Coin findUnique
   */
  export type CoinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coin
     */
    select?: CoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coin
     */
    omit?: CoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinInclude<ExtArgs> | null
    /**
     * Filter, which Coin to fetch.
     */
    where: CoinWhereUniqueInput
  }

  /**
   * Coin findUniqueOrThrow
   */
  export type CoinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coin
     */
    select?: CoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coin
     */
    omit?: CoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinInclude<ExtArgs> | null
    /**
     * Filter, which Coin to fetch.
     */
    where: CoinWhereUniqueInput
  }

  /**
   * Coin findFirst
   */
  export type CoinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coin
     */
    select?: CoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coin
     */
    omit?: CoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinInclude<ExtArgs> | null
    /**
     * Filter, which Coin to fetch.
     */
    where?: CoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coins to fetch.
     */
    orderBy?: CoinOrderByWithRelationInput | CoinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coins.
     */
    cursor?: CoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coins.
     */
    distinct?: CoinScalarFieldEnum | CoinScalarFieldEnum[]
  }

  /**
   * Coin findFirstOrThrow
   */
  export type CoinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coin
     */
    select?: CoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coin
     */
    omit?: CoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinInclude<ExtArgs> | null
    /**
     * Filter, which Coin to fetch.
     */
    where?: CoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coins to fetch.
     */
    orderBy?: CoinOrderByWithRelationInput | CoinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coins.
     */
    cursor?: CoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coins.
     */
    distinct?: CoinScalarFieldEnum | CoinScalarFieldEnum[]
  }

  /**
   * Coin findMany
   */
  export type CoinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coin
     */
    select?: CoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coin
     */
    omit?: CoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinInclude<ExtArgs> | null
    /**
     * Filter, which Coins to fetch.
     */
    where?: CoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coins to fetch.
     */
    orderBy?: CoinOrderByWithRelationInput | CoinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coins.
     */
    cursor?: CoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coins.
     */
    skip?: number
    distinct?: CoinScalarFieldEnum | CoinScalarFieldEnum[]
  }

  /**
   * Coin create
   */
  export type CoinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coin
     */
    select?: CoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coin
     */
    omit?: CoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinInclude<ExtArgs> | null
    /**
     * The data needed to create a Coin.
     */
    data: XOR<CoinCreateInput, CoinUncheckedCreateInput>
  }

  /**
   * Coin createMany
   */
  export type CoinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coins.
     */
    data: CoinCreateManyInput | CoinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coin update
   */
  export type CoinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coin
     */
    select?: CoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coin
     */
    omit?: CoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinInclude<ExtArgs> | null
    /**
     * The data needed to update a Coin.
     */
    data: XOR<CoinUpdateInput, CoinUncheckedUpdateInput>
    /**
     * Choose, which Coin to update.
     */
    where: CoinWhereUniqueInput
  }

  /**
   * Coin updateMany
   */
  export type CoinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coins.
     */
    data: XOR<CoinUpdateManyMutationInput, CoinUncheckedUpdateManyInput>
    /**
     * Filter which Coins to update
     */
    where?: CoinWhereInput
    /**
     * Limit how many Coins to update.
     */
    limit?: number
  }

  /**
   * Coin upsert
   */
  export type CoinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coin
     */
    select?: CoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coin
     */
    omit?: CoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinInclude<ExtArgs> | null
    /**
     * The filter to search for the Coin to update in case it exists.
     */
    where: CoinWhereUniqueInput
    /**
     * In case the Coin found by the `where` argument doesn't exist, create a new Coin with this data.
     */
    create: XOR<CoinCreateInput, CoinUncheckedCreateInput>
    /**
     * In case the Coin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoinUpdateInput, CoinUncheckedUpdateInput>
  }

  /**
   * Coin delete
   */
  export type CoinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coin
     */
    select?: CoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coin
     */
    omit?: CoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinInclude<ExtArgs> | null
    /**
     * Filter which Coin to delete.
     */
    where: CoinWhereUniqueInput
  }

  /**
   * Coin deleteMany
   */
  export type CoinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coins to delete
     */
    where?: CoinWhereInput
    /**
     * Limit how many Coins to delete.
     */
    limit?: number
  }

  /**
   * Coin.portfolio
   */
  export type Coin$portfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioEntry
     */
    select?: PortfolioEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioEntry
     */
    omit?: PortfolioEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioEntryInclude<ExtArgs> | null
    where?: PortfolioEntryWhereInput
    orderBy?: PortfolioEntryOrderByWithRelationInput | PortfolioEntryOrderByWithRelationInput[]
    cursor?: PortfolioEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortfolioEntryScalarFieldEnum | PortfolioEntryScalarFieldEnum[]
  }

  /**
   * Coin.alerts
   */
  export type Coin$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Coin.records
   */
  export type Coin$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackRecord
     */
    select?: TrackRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackRecord
     */
    omit?: TrackRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackRecordInclude<ExtArgs> | null
    where?: TrackRecordWhereInput
    orderBy?: TrackRecordOrderByWithRelationInput | TrackRecordOrderByWithRelationInput[]
    cursor?: TrackRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackRecordScalarFieldEnum | TrackRecordScalarFieldEnum[]
  }

  /**
   * Coin without action
   */
  export type CoinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coin
     */
    select?: CoinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coin
     */
    omit?: CoinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoinInclude<ExtArgs> | null
  }


  /**
   * Model PortfolioEntry
   */

  export type AggregatePortfolioEntry = {
    _count: PortfolioEntryCountAggregateOutputType | null
    _avg: PortfolioEntryAvgAggregateOutputType | null
    _sum: PortfolioEntrySumAggregateOutputType | null
    _min: PortfolioEntryMinAggregateOutputType | null
    _max: PortfolioEntryMaxAggregateOutputType | null
  }

  export type PortfolioEntryAvgAggregateOutputType = {
    entry_id: number | null
    amount: number | null
    user_id: number | null
    coin_id: number | null
  }

  export type PortfolioEntrySumAggregateOutputType = {
    entry_id: number | null
    amount: number | null
    user_id: number | null
    coin_id: number | null
  }

  export type PortfolioEntryMinAggregateOutputType = {
    entry_id: number | null
    amount: number | null
    user_id: number | null
    coin_id: number | null
  }

  export type PortfolioEntryMaxAggregateOutputType = {
    entry_id: number | null
    amount: number | null
    user_id: number | null
    coin_id: number | null
  }

  export type PortfolioEntryCountAggregateOutputType = {
    entry_id: number
    amount: number
    user_id: number
    coin_id: number
    _all: number
  }


  export type PortfolioEntryAvgAggregateInputType = {
    entry_id?: true
    amount?: true
    user_id?: true
    coin_id?: true
  }

  export type PortfolioEntrySumAggregateInputType = {
    entry_id?: true
    amount?: true
    user_id?: true
    coin_id?: true
  }

  export type PortfolioEntryMinAggregateInputType = {
    entry_id?: true
    amount?: true
    user_id?: true
    coin_id?: true
  }

  export type PortfolioEntryMaxAggregateInputType = {
    entry_id?: true
    amount?: true
    user_id?: true
    coin_id?: true
  }

  export type PortfolioEntryCountAggregateInputType = {
    entry_id?: true
    amount?: true
    user_id?: true
    coin_id?: true
    _all?: true
  }

  export type PortfolioEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioEntry to aggregate.
     */
    where?: PortfolioEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioEntries to fetch.
     */
    orderBy?: PortfolioEntryOrderByWithRelationInput | PortfolioEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortfolioEntries
    **/
    _count?: true | PortfolioEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioEntryMaxAggregateInputType
  }

  export type GetPortfolioEntryAggregateType<T extends PortfolioEntryAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolioEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolioEntry[P]>
      : GetScalarType<T[P], AggregatePortfolioEntry[P]>
  }




  export type PortfolioEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioEntryWhereInput
    orderBy?: PortfolioEntryOrderByWithAggregationInput | PortfolioEntryOrderByWithAggregationInput[]
    by: PortfolioEntryScalarFieldEnum[] | PortfolioEntryScalarFieldEnum
    having?: PortfolioEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioEntryCountAggregateInputType | true
    _avg?: PortfolioEntryAvgAggregateInputType
    _sum?: PortfolioEntrySumAggregateInputType
    _min?: PortfolioEntryMinAggregateInputType
    _max?: PortfolioEntryMaxAggregateInputType
  }

  export type PortfolioEntryGroupByOutputType = {
    entry_id: number
    amount: number
    user_id: number
    coin_id: number
    _count: PortfolioEntryCountAggregateOutputType | null
    _avg: PortfolioEntryAvgAggregateOutputType | null
    _sum: PortfolioEntrySumAggregateOutputType | null
    _min: PortfolioEntryMinAggregateOutputType | null
    _max: PortfolioEntryMaxAggregateOutputType | null
  }

  type GetPortfolioEntryGroupByPayload<T extends PortfolioEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioEntryGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioEntryGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    entry_id?: boolean
    amount?: boolean
    user_id?: boolean
    coin_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    coin?: boolean | CoinDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioEntry"]>



  export type PortfolioEntrySelectScalar = {
    entry_id?: boolean
    amount?: boolean
    user_id?: boolean
    coin_id?: boolean
  }

  export type PortfolioEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"entry_id" | "amount" | "user_id" | "coin_id", ExtArgs["result"]["portfolioEntry"]>
  export type PortfolioEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    coin?: boolean | CoinDefaultArgs<ExtArgs>
  }

  export type $PortfolioEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortfolioEntry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      coin: Prisma.$CoinPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      entry_id: number
      amount: number
      user_id: number
      coin_id: number
    }, ExtArgs["result"]["portfolioEntry"]>
    composites: {}
  }

  type PortfolioEntryGetPayload<S extends boolean | null | undefined | PortfolioEntryDefaultArgs> = $Result.GetResult<Prisma.$PortfolioEntryPayload, S>

  type PortfolioEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortfolioEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioEntryCountAggregateInputType | true
    }

  export interface PortfolioEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortfolioEntry'], meta: { name: 'PortfolioEntry' } }
    /**
     * Find zero or one PortfolioEntry that matches the filter.
     * @param {PortfolioEntryFindUniqueArgs} args - Arguments to find a PortfolioEntry
     * @example
     * // Get one PortfolioEntry
     * const portfolioEntry = await prisma.portfolioEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioEntryFindUniqueArgs>(args: SelectSubset<T, PortfolioEntryFindUniqueArgs<ExtArgs>>): Prisma__PortfolioEntryClient<$Result.GetResult<Prisma.$PortfolioEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PortfolioEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortfolioEntryFindUniqueOrThrowArgs} args - Arguments to find a PortfolioEntry
     * @example
     * // Get one PortfolioEntry
     * const portfolioEntry = await prisma.portfolioEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioEntryClient<$Result.GetResult<Prisma.$PortfolioEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortfolioEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioEntryFindFirstArgs} args - Arguments to find a PortfolioEntry
     * @example
     * // Get one PortfolioEntry
     * const portfolioEntry = await prisma.portfolioEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioEntryFindFirstArgs>(args?: SelectSubset<T, PortfolioEntryFindFirstArgs<ExtArgs>>): Prisma__PortfolioEntryClient<$Result.GetResult<Prisma.$PortfolioEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortfolioEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioEntryFindFirstOrThrowArgs} args - Arguments to find a PortfolioEntry
     * @example
     * // Get one PortfolioEntry
     * const portfolioEntry = await prisma.portfolioEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioEntryClient<$Result.GetResult<Prisma.$PortfolioEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PortfolioEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortfolioEntries
     * const portfolioEntries = await prisma.portfolioEntry.findMany()
     * 
     * // Get first 10 PortfolioEntries
     * const portfolioEntries = await prisma.portfolioEntry.findMany({ take: 10 })
     * 
     * // Only select the `entry_id`
     * const portfolioEntryWithEntry_idOnly = await prisma.portfolioEntry.findMany({ select: { entry_id: true } })
     * 
     */
    findMany<T extends PortfolioEntryFindManyArgs>(args?: SelectSubset<T, PortfolioEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PortfolioEntry.
     * @param {PortfolioEntryCreateArgs} args - Arguments to create a PortfolioEntry.
     * @example
     * // Create one PortfolioEntry
     * const PortfolioEntry = await prisma.portfolioEntry.create({
     *   data: {
     *     // ... data to create a PortfolioEntry
     *   }
     * })
     * 
     */
    create<T extends PortfolioEntryCreateArgs>(args: SelectSubset<T, PortfolioEntryCreateArgs<ExtArgs>>): Prisma__PortfolioEntryClient<$Result.GetResult<Prisma.$PortfolioEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PortfolioEntries.
     * @param {PortfolioEntryCreateManyArgs} args - Arguments to create many PortfolioEntries.
     * @example
     * // Create many PortfolioEntries
     * const portfolioEntry = await prisma.portfolioEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioEntryCreateManyArgs>(args?: SelectSubset<T, PortfolioEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PortfolioEntry.
     * @param {PortfolioEntryDeleteArgs} args - Arguments to delete one PortfolioEntry.
     * @example
     * // Delete one PortfolioEntry
     * const PortfolioEntry = await prisma.portfolioEntry.delete({
     *   where: {
     *     // ... filter to delete one PortfolioEntry
     *   }
     * })
     * 
     */
    delete<T extends PortfolioEntryDeleteArgs>(args: SelectSubset<T, PortfolioEntryDeleteArgs<ExtArgs>>): Prisma__PortfolioEntryClient<$Result.GetResult<Prisma.$PortfolioEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PortfolioEntry.
     * @param {PortfolioEntryUpdateArgs} args - Arguments to update one PortfolioEntry.
     * @example
     * // Update one PortfolioEntry
     * const portfolioEntry = await prisma.portfolioEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioEntryUpdateArgs>(args: SelectSubset<T, PortfolioEntryUpdateArgs<ExtArgs>>): Prisma__PortfolioEntryClient<$Result.GetResult<Prisma.$PortfolioEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PortfolioEntries.
     * @param {PortfolioEntryDeleteManyArgs} args - Arguments to filter PortfolioEntries to delete.
     * @example
     * // Delete a few PortfolioEntries
     * const { count } = await prisma.portfolioEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioEntryDeleteManyArgs>(args?: SelectSubset<T, PortfolioEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortfolioEntries
     * const portfolioEntry = await prisma.portfolioEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioEntryUpdateManyArgs>(args: SelectSubset<T, PortfolioEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PortfolioEntry.
     * @param {PortfolioEntryUpsertArgs} args - Arguments to update or create a PortfolioEntry.
     * @example
     * // Update or create a PortfolioEntry
     * const portfolioEntry = await prisma.portfolioEntry.upsert({
     *   create: {
     *     // ... data to create a PortfolioEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortfolioEntry we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioEntryUpsertArgs>(args: SelectSubset<T, PortfolioEntryUpsertArgs<ExtArgs>>): Prisma__PortfolioEntryClient<$Result.GetResult<Prisma.$PortfolioEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PortfolioEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioEntryCountArgs} args - Arguments to filter PortfolioEntries to count.
     * @example
     * // Count the number of PortfolioEntries
     * const count = await prisma.portfolioEntry.count({
     *   where: {
     *     // ... the filter for the PortfolioEntries we want to count
     *   }
     * })
    **/
    count<T extends PortfolioEntryCountArgs>(
      args?: Subset<T, PortfolioEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortfolioEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PortfolioEntryAggregateArgs>(args: Subset<T, PortfolioEntryAggregateArgs>): Prisma.PrismaPromise<GetPortfolioEntryAggregateType<T>>

    /**
     * Group by PortfolioEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioEntryGroupByArgs} args - Group by arguments.
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
      T extends PortfolioEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioEntryGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PortfolioEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortfolioEntry model
   */
  readonly fields: PortfolioEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortfolioEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coin<T extends CoinDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoinDefaultArgs<ExtArgs>>): Prisma__CoinClient<$Result.GetResult<Prisma.$CoinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PortfolioEntry model
   */
  interface PortfolioEntryFieldRefs {
    readonly entry_id: FieldRef<"PortfolioEntry", 'Int'>
    readonly amount: FieldRef<"PortfolioEntry", 'Float'>
    readonly user_id: FieldRef<"PortfolioEntry", 'Int'>
    readonly coin_id: FieldRef<"PortfolioEntry", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PortfolioEntry findUnique
   */
  export type PortfolioEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioEntry
     */
    select?: PortfolioEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioEntry
     */
    omit?: PortfolioEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioEntryInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioEntry to fetch.
     */
    where: PortfolioEntryWhereUniqueInput
  }

  /**
   * PortfolioEntry findUniqueOrThrow
   */
  export type PortfolioEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioEntry
     */
    select?: PortfolioEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioEntry
     */
    omit?: PortfolioEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioEntryInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioEntry to fetch.
     */
    where: PortfolioEntryWhereUniqueInput
  }

  /**
   * PortfolioEntry findFirst
   */
  export type PortfolioEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioEntry
     */
    select?: PortfolioEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioEntry
     */
    omit?: PortfolioEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioEntryInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioEntry to fetch.
     */
    where?: PortfolioEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioEntries to fetch.
     */
    orderBy?: PortfolioEntryOrderByWithRelationInput | PortfolioEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioEntries.
     */
    cursor?: PortfolioEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioEntries.
     */
    distinct?: PortfolioEntryScalarFieldEnum | PortfolioEntryScalarFieldEnum[]
  }

  /**
   * PortfolioEntry findFirstOrThrow
   */
  export type PortfolioEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioEntry
     */
    select?: PortfolioEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioEntry
     */
    omit?: PortfolioEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioEntryInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioEntry to fetch.
     */
    where?: PortfolioEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioEntries to fetch.
     */
    orderBy?: PortfolioEntryOrderByWithRelationInput | PortfolioEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioEntries.
     */
    cursor?: PortfolioEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioEntries.
     */
    distinct?: PortfolioEntryScalarFieldEnum | PortfolioEntryScalarFieldEnum[]
  }

  /**
   * PortfolioEntry findMany
   */
  export type PortfolioEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioEntry
     */
    select?: PortfolioEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioEntry
     */
    omit?: PortfolioEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioEntryInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioEntries to fetch.
     */
    where?: PortfolioEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioEntries to fetch.
     */
    orderBy?: PortfolioEntryOrderByWithRelationInput | PortfolioEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortfolioEntries.
     */
    cursor?: PortfolioEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioEntries.
     */
    skip?: number
    distinct?: PortfolioEntryScalarFieldEnum | PortfolioEntryScalarFieldEnum[]
  }

  /**
   * PortfolioEntry create
   */
  export type PortfolioEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioEntry
     */
    select?: PortfolioEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioEntry
     */
    omit?: PortfolioEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a PortfolioEntry.
     */
    data: XOR<PortfolioEntryCreateInput, PortfolioEntryUncheckedCreateInput>
  }

  /**
   * PortfolioEntry createMany
   */
  export type PortfolioEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortfolioEntries.
     */
    data: PortfolioEntryCreateManyInput | PortfolioEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortfolioEntry update
   */
  export type PortfolioEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioEntry
     */
    select?: PortfolioEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioEntry
     */
    omit?: PortfolioEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a PortfolioEntry.
     */
    data: XOR<PortfolioEntryUpdateInput, PortfolioEntryUncheckedUpdateInput>
    /**
     * Choose, which PortfolioEntry to update.
     */
    where: PortfolioEntryWhereUniqueInput
  }

  /**
   * PortfolioEntry updateMany
   */
  export type PortfolioEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortfolioEntries.
     */
    data: XOR<PortfolioEntryUpdateManyMutationInput, PortfolioEntryUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioEntries to update
     */
    where?: PortfolioEntryWhereInput
    /**
     * Limit how many PortfolioEntries to update.
     */
    limit?: number
  }

  /**
   * PortfolioEntry upsert
   */
  export type PortfolioEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioEntry
     */
    select?: PortfolioEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioEntry
     */
    omit?: PortfolioEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the PortfolioEntry to update in case it exists.
     */
    where: PortfolioEntryWhereUniqueInput
    /**
     * In case the PortfolioEntry found by the `where` argument doesn't exist, create a new PortfolioEntry with this data.
     */
    create: XOR<PortfolioEntryCreateInput, PortfolioEntryUncheckedCreateInput>
    /**
     * In case the PortfolioEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioEntryUpdateInput, PortfolioEntryUncheckedUpdateInput>
  }

  /**
   * PortfolioEntry delete
   */
  export type PortfolioEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioEntry
     */
    select?: PortfolioEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioEntry
     */
    omit?: PortfolioEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioEntryInclude<ExtArgs> | null
    /**
     * Filter which PortfolioEntry to delete.
     */
    where: PortfolioEntryWhereUniqueInput
  }

  /**
   * PortfolioEntry deleteMany
   */
  export type PortfolioEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioEntries to delete
     */
    where?: PortfolioEntryWhereInput
    /**
     * Limit how many PortfolioEntries to delete.
     */
    limit?: number
  }

  /**
   * PortfolioEntry without action
   */
  export type PortfolioEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioEntry
     */
    select?: PortfolioEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioEntry
     */
    omit?: PortfolioEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioEntryInclude<ExtArgs> | null
  }


  /**
   * Model TrackRecord
   */

  export type AggregateTrackRecord = {
    _count: TrackRecordCountAggregateOutputType | null
    _avg: TrackRecordAvgAggregateOutputType | null
    _sum: TrackRecordSumAggregateOutputType | null
    _min: TrackRecordMinAggregateOutputType | null
    _max: TrackRecordMaxAggregateOutputType | null
  }

  export type TrackRecordAvgAggregateOutputType = {
    track_record_id: number | null
    amount: number | null
    user_id: number | null
    coin_id: number | null
  }

  export type TrackRecordSumAggregateOutputType = {
    track_record_id: number | null
    amount: number | null
    user_id: number | null
    coin_id: number | null
  }

  export type TrackRecordMinAggregateOutputType = {
    track_record_id: number | null
    amount: number | null
    action: string | null
    datetime: Date | null
    user_id: number | null
    coin_id: number | null
  }

  export type TrackRecordMaxAggregateOutputType = {
    track_record_id: number | null
    amount: number | null
    action: string | null
    datetime: Date | null
    user_id: number | null
    coin_id: number | null
  }

  export type TrackRecordCountAggregateOutputType = {
    track_record_id: number
    amount: number
    action: number
    datetime: number
    user_id: number
    coin_id: number
    _all: number
  }


  export type TrackRecordAvgAggregateInputType = {
    track_record_id?: true
    amount?: true
    user_id?: true
    coin_id?: true
  }

  export type TrackRecordSumAggregateInputType = {
    track_record_id?: true
    amount?: true
    user_id?: true
    coin_id?: true
  }

  export type TrackRecordMinAggregateInputType = {
    track_record_id?: true
    amount?: true
    action?: true
    datetime?: true
    user_id?: true
    coin_id?: true
  }

  export type TrackRecordMaxAggregateInputType = {
    track_record_id?: true
    amount?: true
    action?: true
    datetime?: true
    user_id?: true
    coin_id?: true
  }

  export type TrackRecordCountAggregateInputType = {
    track_record_id?: true
    amount?: true
    action?: true
    datetime?: true
    user_id?: true
    coin_id?: true
    _all?: true
  }

  export type TrackRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackRecord to aggregate.
     */
    where?: TrackRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackRecords to fetch.
     */
    orderBy?: TrackRecordOrderByWithRelationInput | TrackRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackRecords
    **/
    _count?: true | TrackRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackRecordMaxAggregateInputType
  }

  export type GetTrackRecordAggregateType<T extends TrackRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackRecord[P]>
      : GetScalarType<T[P], AggregateTrackRecord[P]>
  }




  export type TrackRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackRecordWhereInput
    orderBy?: TrackRecordOrderByWithAggregationInput | TrackRecordOrderByWithAggregationInput[]
    by: TrackRecordScalarFieldEnum[] | TrackRecordScalarFieldEnum
    having?: TrackRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackRecordCountAggregateInputType | true
    _avg?: TrackRecordAvgAggregateInputType
    _sum?: TrackRecordSumAggregateInputType
    _min?: TrackRecordMinAggregateInputType
    _max?: TrackRecordMaxAggregateInputType
  }

  export type TrackRecordGroupByOutputType = {
    track_record_id: number
    amount: number
    action: string
    datetime: Date
    user_id: number
    coin_id: number
    _count: TrackRecordCountAggregateOutputType | null
    _avg: TrackRecordAvgAggregateOutputType | null
    _sum: TrackRecordSumAggregateOutputType | null
    _min: TrackRecordMinAggregateOutputType | null
    _max: TrackRecordMaxAggregateOutputType | null
  }

  type GetTrackRecordGroupByPayload<T extends TrackRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackRecordGroupByOutputType[P]>
            : GetScalarType<T[P], TrackRecordGroupByOutputType[P]>
        }
      >
    >


  export type TrackRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    track_record_id?: boolean
    amount?: boolean
    action?: boolean
    datetime?: boolean
    user_id?: boolean
    coin_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    coin?: boolean | CoinDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackRecord"]>



  export type TrackRecordSelectScalar = {
    track_record_id?: boolean
    amount?: boolean
    action?: boolean
    datetime?: boolean
    user_id?: boolean
    coin_id?: boolean
  }

  export type TrackRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"track_record_id" | "amount" | "action" | "datetime" | "user_id" | "coin_id", ExtArgs["result"]["trackRecord"]>
  export type TrackRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    coin?: boolean | CoinDefaultArgs<ExtArgs>
  }

  export type $TrackRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      coin: Prisma.$CoinPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      track_record_id: number
      amount: number
      action: string
      datetime: Date
      user_id: number
      coin_id: number
    }, ExtArgs["result"]["trackRecord"]>
    composites: {}
  }

  type TrackRecordGetPayload<S extends boolean | null | undefined | TrackRecordDefaultArgs> = $Result.GetResult<Prisma.$TrackRecordPayload, S>

  type TrackRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrackRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrackRecordCountAggregateInputType | true
    }

  export interface TrackRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackRecord'], meta: { name: 'TrackRecord' } }
    /**
     * Find zero or one TrackRecord that matches the filter.
     * @param {TrackRecordFindUniqueArgs} args - Arguments to find a TrackRecord
     * @example
     * // Get one TrackRecord
     * const trackRecord = await prisma.trackRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackRecordFindUniqueArgs>(args: SelectSubset<T, TrackRecordFindUniqueArgs<ExtArgs>>): Prisma__TrackRecordClient<$Result.GetResult<Prisma.$TrackRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrackRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrackRecordFindUniqueOrThrowArgs} args - Arguments to find a TrackRecord
     * @example
     * // Get one TrackRecord
     * const trackRecord = await prisma.trackRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackRecordClient<$Result.GetResult<Prisma.$TrackRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackRecordFindFirstArgs} args - Arguments to find a TrackRecord
     * @example
     * // Get one TrackRecord
     * const trackRecord = await prisma.trackRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackRecordFindFirstArgs>(args?: SelectSubset<T, TrackRecordFindFirstArgs<ExtArgs>>): Prisma__TrackRecordClient<$Result.GetResult<Prisma.$TrackRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackRecordFindFirstOrThrowArgs} args - Arguments to find a TrackRecord
     * @example
     * // Get one TrackRecord
     * const trackRecord = await prisma.trackRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackRecordClient<$Result.GetResult<Prisma.$TrackRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrackRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackRecords
     * const trackRecords = await prisma.trackRecord.findMany()
     * 
     * // Get first 10 TrackRecords
     * const trackRecords = await prisma.trackRecord.findMany({ take: 10 })
     * 
     * // Only select the `track_record_id`
     * const trackRecordWithTrack_record_idOnly = await prisma.trackRecord.findMany({ select: { track_record_id: true } })
     * 
     */
    findMany<T extends TrackRecordFindManyArgs>(args?: SelectSubset<T, TrackRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrackRecord.
     * @param {TrackRecordCreateArgs} args - Arguments to create a TrackRecord.
     * @example
     * // Create one TrackRecord
     * const TrackRecord = await prisma.trackRecord.create({
     *   data: {
     *     // ... data to create a TrackRecord
     *   }
     * })
     * 
     */
    create<T extends TrackRecordCreateArgs>(args: SelectSubset<T, TrackRecordCreateArgs<ExtArgs>>): Prisma__TrackRecordClient<$Result.GetResult<Prisma.$TrackRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrackRecords.
     * @param {TrackRecordCreateManyArgs} args - Arguments to create many TrackRecords.
     * @example
     * // Create many TrackRecords
     * const trackRecord = await prisma.trackRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackRecordCreateManyArgs>(args?: SelectSubset<T, TrackRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrackRecord.
     * @param {TrackRecordDeleteArgs} args - Arguments to delete one TrackRecord.
     * @example
     * // Delete one TrackRecord
     * const TrackRecord = await prisma.trackRecord.delete({
     *   where: {
     *     // ... filter to delete one TrackRecord
     *   }
     * })
     * 
     */
    delete<T extends TrackRecordDeleteArgs>(args: SelectSubset<T, TrackRecordDeleteArgs<ExtArgs>>): Prisma__TrackRecordClient<$Result.GetResult<Prisma.$TrackRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrackRecord.
     * @param {TrackRecordUpdateArgs} args - Arguments to update one TrackRecord.
     * @example
     * // Update one TrackRecord
     * const trackRecord = await prisma.trackRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackRecordUpdateArgs>(args: SelectSubset<T, TrackRecordUpdateArgs<ExtArgs>>): Prisma__TrackRecordClient<$Result.GetResult<Prisma.$TrackRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrackRecords.
     * @param {TrackRecordDeleteManyArgs} args - Arguments to filter TrackRecords to delete.
     * @example
     * // Delete a few TrackRecords
     * const { count } = await prisma.trackRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackRecordDeleteManyArgs>(args?: SelectSubset<T, TrackRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackRecords
     * const trackRecord = await prisma.trackRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackRecordUpdateManyArgs>(args: SelectSubset<T, TrackRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrackRecord.
     * @param {TrackRecordUpsertArgs} args - Arguments to update or create a TrackRecord.
     * @example
     * // Update or create a TrackRecord
     * const trackRecord = await prisma.trackRecord.upsert({
     *   create: {
     *     // ... data to create a TrackRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackRecord we want to update
     *   }
     * })
     */
    upsert<T extends TrackRecordUpsertArgs>(args: SelectSubset<T, TrackRecordUpsertArgs<ExtArgs>>): Prisma__TrackRecordClient<$Result.GetResult<Prisma.$TrackRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrackRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackRecordCountArgs} args - Arguments to filter TrackRecords to count.
     * @example
     * // Count the number of TrackRecords
     * const count = await prisma.trackRecord.count({
     *   where: {
     *     // ... the filter for the TrackRecords we want to count
     *   }
     * })
    **/
    count<T extends TrackRecordCountArgs>(
      args?: Subset<T, TrackRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackRecordAggregateArgs>(args: Subset<T, TrackRecordAggregateArgs>): Prisma.PrismaPromise<GetTrackRecordAggregateType<T>>

    /**
     * Group by TrackRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackRecordGroupByArgs} args - Group by arguments.
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
      T extends TrackRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackRecordGroupByArgs['orderBy'] }
        : { orderBy?: TrackRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrackRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackRecord model
   */
  readonly fields: TrackRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coin<T extends CoinDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoinDefaultArgs<ExtArgs>>): Prisma__CoinClient<$Result.GetResult<Prisma.$CoinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TrackRecord model
   */
  interface TrackRecordFieldRefs {
    readonly track_record_id: FieldRef<"TrackRecord", 'Int'>
    readonly amount: FieldRef<"TrackRecord", 'Float'>
    readonly action: FieldRef<"TrackRecord", 'String'>
    readonly datetime: FieldRef<"TrackRecord", 'DateTime'>
    readonly user_id: FieldRef<"TrackRecord", 'Int'>
    readonly coin_id: FieldRef<"TrackRecord", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TrackRecord findUnique
   */
  export type TrackRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackRecord
     */
    select?: TrackRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackRecord
     */
    omit?: TrackRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackRecordInclude<ExtArgs> | null
    /**
     * Filter, which TrackRecord to fetch.
     */
    where: TrackRecordWhereUniqueInput
  }

  /**
   * TrackRecord findUniqueOrThrow
   */
  export type TrackRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackRecord
     */
    select?: TrackRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackRecord
     */
    omit?: TrackRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackRecordInclude<ExtArgs> | null
    /**
     * Filter, which TrackRecord to fetch.
     */
    where: TrackRecordWhereUniqueInput
  }

  /**
   * TrackRecord findFirst
   */
  export type TrackRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackRecord
     */
    select?: TrackRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackRecord
     */
    omit?: TrackRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackRecordInclude<ExtArgs> | null
    /**
     * Filter, which TrackRecord to fetch.
     */
    where?: TrackRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackRecords to fetch.
     */
    orderBy?: TrackRecordOrderByWithRelationInput | TrackRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackRecords.
     */
    cursor?: TrackRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackRecords.
     */
    distinct?: TrackRecordScalarFieldEnum | TrackRecordScalarFieldEnum[]
  }

  /**
   * TrackRecord findFirstOrThrow
   */
  export type TrackRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackRecord
     */
    select?: TrackRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackRecord
     */
    omit?: TrackRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackRecordInclude<ExtArgs> | null
    /**
     * Filter, which TrackRecord to fetch.
     */
    where?: TrackRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackRecords to fetch.
     */
    orderBy?: TrackRecordOrderByWithRelationInput | TrackRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackRecords.
     */
    cursor?: TrackRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackRecords.
     */
    distinct?: TrackRecordScalarFieldEnum | TrackRecordScalarFieldEnum[]
  }

  /**
   * TrackRecord findMany
   */
  export type TrackRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackRecord
     */
    select?: TrackRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackRecord
     */
    omit?: TrackRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackRecordInclude<ExtArgs> | null
    /**
     * Filter, which TrackRecords to fetch.
     */
    where?: TrackRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackRecords to fetch.
     */
    orderBy?: TrackRecordOrderByWithRelationInput | TrackRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackRecords.
     */
    cursor?: TrackRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackRecords.
     */
    skip?: number
    distinct?: TrackRecordScalarFieldEnum | TrackRecordScalarFieldEnum[]
  }

  /**
   * TrackRecord create
   */
  export type TrackRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackRecord
     */
    select?: TrackRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackRecord
     */
    omit?: TrackRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a TrackRecord.
     */
    data: XOR<TrackRecordCreateInput, TrackRecordUncheckedCreateInput>
  }

  /**
   * TrackRecord createMany
   */
  export type TrackRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrackRecords.
     */
    data: TrackRecordCreateManyInput | TrackRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrackRecord update
   */
  export type TrackRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackRecord
     */
    select?: TrackRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackRecord
     */
    omit?: TrackRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a TrackRecord.
     */
    data: XOR<TrackRecordUpdateInput, TrackRecordUncheckedUpdateInput>
    /**
     * Choose, which TrackRecord to update.
     */
    where: TrackRecordWhereUniqueInput
  }

  /**
   * TrackRecord updateMany
   */
  export type TrackRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackRecords.
     */
    data: XOR<TrackRecordUpdateManyMutationInput, TrackRecordUncheckedUpdateManyInput>
    /**
     * Filter which TrackRecords to update
     */
    where?: TrackRecordWhereInput
    /**
     * Limit how many TrackRecords to update.
     */
    limit?: number
  }

  /**
   * TrackRecord upsert
   */
  export type TrackRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackRecord
     */
    select?: TrackRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackRecord
     */
    omit?: TrackRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the TrackRecord to update in case it exists.
     */
    where: TrackRecordWhereUniqueInput
    /**
     * In case the TrackRecord found by the `where` argument doesn't exist, create a new TrackRecord with this data.
     */
    create: XOR<TrackRecordCreateInput, TrackRecordUncheckedCreateInput>
    /**
     * In case the TrackRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackRecordUpdateInput, TrackRecordUncheckedUpdateInput>
  }

  /**
   * TrackRecord delete
   */
  export type TrackRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackRecord
     */
    select?: TrackRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackRecord
     */
    omit?: TrackRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackRecordInclude<ExtArgs> | null
    /**
     * Filter which TrackRecord to delete.
     */
    where: TrackRecordWhereUniqueInput
  }

  /**
   * TrackRecord deleteMany
   */
  export type TrackRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackRecords to delete
     */
    where?: TrackRecordWhereInput
    /**
     * Limit how many TrackRecords to delete.
     */
    limit?: number
  }

  /**
   * TrackRecord without action
   */
  export type TrackRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackRecord
     */
    select?: TrackRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackRecord
     */
    omit?: TrackRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackRecordInclude<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertAvgAggregateOutputType = {
    alert_id: number | null
    floor_price: number | null
    ceiling_price: number | null
    user_id: number | null
    coin_id: number | null
  }

  export type AlertSumAggregateOutputType = {
    alert_id: number | null
    floor_price: number | null
    ceiling_price: number | null
    user_id: number | null
    coin_id: number | null
  }

  export type AlertMinAggregateOutputType = {
    alert_id: number | null
    floor_price: number | null
    ceiling_price: number | null
    user_id: number | null
    coin_id: number | null
  }

  export type AlertMaxAggregateOutputType = {
    alert_id: number | null
    floor_price: number | null
    ceiling_price: number | null
    user_id: number | null
    coin_id: number | null
  }

  export type AlertCountAggregateOutputType = {
    alert_id: number
    floor_price: number
    ceiling_price: number
    user_id: number
    coin_id: number
    _all: number
  }


  export type AlertAvgAggregateInputType = {
    alert_id?: true
    floor_price?: true
    ceiling_price?: true
    user_id?: true
    coin_id?: true
  }

  export type AlertSumAggregateInputType = {
    alert_id?: true
    floor_price?: true
    ceiling_price?: true
    user_id?: true
    coin_id?: true
  }

  export type AlertMinAggregateInputType = {
    alert_id?: true
    floor_price?: true
    ceiling_price?: true
    user_id?: true
    coin_id?: true
  }

  export type AlertMaxAggregateInputType = {
    alert_id?: true
    floor_price?: true
    ceiling_price?: true
    user_id?: true
    coin_id?: true
  }

  export type AlertCountAggregateInputType = {
    alert_id?: true
    floor_price?: true
    ceiling_price?: true
    user_id?: true
    coin_id?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _avg?: AlertAvgAggregateInputType
    _sum?: AlertSumAggregateInputType
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    alert_id: number
    floor_price: number | null
    ceiling_price: number | null
    user_id: number
    coin_id: number
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    alert_id?: boolean
    floor_price?: boolean
    ceiling_price?: boolean
    user_id?: boolean
    coin_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    coin?: boolean | CoinDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>



  export type AlertSelectScalar = {
    alert_id?: boolean
    floor_price?: boolean
    ceiling_price?: boolean
    user_id?: boolean
    coin_id?: boolean
  }

  export type AlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"alert_id" | "floor_price" | "ceiling_price" | "user_id" | "coin_id", ExtArgs["result"]["alert"]>
  export type AlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    coin?: boolean | CoinDefaultArgs<ExtArgs>
  }

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      coin: Prisma.$CoinPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      alert_id: number
      floor_price: number | null
      ceiling_price: number | null
      user_id: number
      coin_id: number
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `alert_id`
     * const alertWithAlert_idOnly = await prisma.alert.findMany({ select: { alert_id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
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
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coin<T extends CoinDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoinDefaultArgs<ExtArgs>>): Prisma__CoinClient<$Result.GetResult<Prisma.$CoinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Alert model
   */
  interface AlertFieldRefs {
    readonly alert_id: FieldRef<"Alert", 'Int'>
    readonly floor_price: FieldRef<"Alert", 'Int'>
    readonly ceiling_price: FieldRef<"Alert", 'Int'>
    readonly user_id: FieldRef<"Alert", 'Int'>
    readonly coin_id: FieldRef<"Alert", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to delete.
     */
    limit?: number
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    email: 'email',
    password: 'password',
    displayName: 'displayName',
    photoUrl: 'photoUrl'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserSettingsScalarFieldEnum: {
    user_id: 'user_id',
    currency: 'currency',
    dark_mode: 'dark_mode'
  };

  export type UserSettingsScalarFieldEnum = (typeof UserSettingsScalarFieldEnum)[keyof typeof UserSettingsScalarFieldEnum]


  export const CoinScalarFieldEnum: {
    coin_id: 'coin_id',
    name: 'name',
    symbol: 'symbol',
    slug: 'slug',
    cmc_rank: 'cmc_rank',
    price: 'price',
    market_cap: 'market_cap',
    volume_24h: 'volume_24h',
    percent_change_24h: 'percent_change_24h',
    percent_change_7d: 'percent_change_7d',
    last_updated: 'last_updated'
  };

  export type CoinScalarFieldEnum = (typeof CoinScalarFieldEnum)[keyof typeof CoinScalarFieldEnum]


  export const PortfolioEntryScalarFieldEnum: {
    entry_id: 'entry_id',
    amount: 'amount',
    user_id: 'user_id',
    coin_id: 'coin_id'
  };

  export type PortfolioEntryScalarFieldEnum = (typeof PortfolioEntryScalarFieldEnum)[keyof typeof PortfolioEntryScalarFieldEnum]


  export const TrackRecordScalarFieldEnum: {
    track_record_id: 'track_record_id',
    amount: 'amount',
    action: 'action',
    datetime: 'datetime',
    user_id: 'user_id',
    coin_id: 'coin_id'
  };

  export type TrackRecordScalarFieldEnum = (typeof TrackRecordScalarFieldEnum)[keyof typeof TrackRecordScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    alert_id: 'alert_id',
    floor_price: 'floor_price',
    ceiling_price: 'ceiling_price',
    user_id: 'user_id',
    coin_id: 'coin_id'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


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


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    displayName: 'displayName',
    photoUrl: 'photoUrl'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const UserSettingsOrderByRelevanceFieldEnum: {
    currency: 'currency'
  };

  export type UserSettingsOrderByRelevanceFieldEnum = (typeof UserSettingsOrderByRelevanceFieldEnum)[keyof typeof UserSettingsOrderByRelevanceFieldEnum]


  export const CoinOrderByRelevanceFieldEnum: {
    name: 'name',
    symbol: 'symbol',
    slug: 'slug'
  };

  export type CoinOrderByRelevanceFieldEnum = (typeof CoinOrderByRelevanceFieldEnum)[keyof typeof CoinOrderByRelevanceFieldEnum]


  export const TrackRecordOrderByRelevanceFieldEnum: {
    action: 'action'
  };

  export type TrackRecordOrderByRelevanceFieldEnum = (typeof TrackRecordOrderByRelevanceFieldEnum)[keyof typeof TrackRecordOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    photoUrl?: StringNullableFilter<"User"> | string | null
    settings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
    portfolio?: PortfolioEntryListRelationFilter
    alerts?: AlertListRelationFilter
    records?: TrackRecordListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    settings?: UserSettingsOrderByWithRelationInput
    portfolio?: PortfolioEntryOrderByRelationAggregateInput
    alerts?: AlertOrderByRelationAggregateInput
    records?: TrackRecordOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    photoUrl?: StringNullableFilter<"User"> | string | null
    settings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
    portfolio?: PortfolioEntryListRelationFilter
    alerts?: AlertListRelationFilter
    records?: TrackRecordListRelationFilter
  }, "user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type UserSettingsWhereInput = {
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    user_id?: IntFilter<"UserSettings"> | number
    currency?: StringFilter<"UserSettings"> | string
    dark_mode?: BoolFilter<"UserSettings"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSettingsOrderByWithRelationInput = {
    user_id?: SortOrder
    currency?: SortOrder
    dark_mode?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: UserSettingsOrderByRelevanceInput
  }

  export type UserSettingsWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    currency?: StringFilter<"UserSettings"> | string
    dark_mode?: BoolFilter<"UserSettings"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "user_id">

  export type UserSettingsOrderByWithAggregationInput = {
    user_id?: SortOrder
    currency?: SortOrder
    dark_mode?: SortOrder
    _count?: UserSettingsCountOrderByAggregateInput
    _avg?: UserSettingsAvgOrderByAggregateInput
    _max?: UserSettingsMaxOrderByAggregateInput
    _min?: UserSettingsMinOrderByAggregateInput
    _sum?: UserSettingsSumOrderByAggregateInput
  }

  export type UserSettingsScalarWhereWithAggregatesInput = {
    AND?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    OR?: UserSettingsScalarWhereWithAggregatesInput[]
    NOT?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"UserSettings"> | number
    currency?: StringWithAggregatesFilter<"UserSettings"> | string
    dark_mode?: BoolWithAggregatesFilter<"UserSettings"> | boolean
  }

  export type CoinWhereInput = {
    AND?: CoinWhereInput | CoinWhereInput[]
    OR?: CoinWhereInput[]
    NOT?: CoinWhereInput | CoinWhereInput[]
    coin_id?: IntFilter<"Coin"> | number
    name?: StringFilter<"Coin"> | string
    symbol?: StringFilter<"Coin"> | string
    slug?: StringFilter<"Coin"> | string
    cmc_rank?: IntFilter<"Coin"> | number
    price?: FloatFilter<"Coin"> | number
    market_cap?: FloatFilter<"Coin"> | number
    volume_24h?: FloatFilter<"Coin"> | number
    percent_change_24h?: FloatFilter<"Coin"> | number
    percent_change_7d?: FloatFilter<"Coin"> | number
    last_updated?: DateTimeFilter<"Coin"> | Date | string
    portfolio?: PortfolioEntryListRelationFilter
    alerts?: AlertListRelationFilter
    records?: TrackRecordListRelationFilter
  }

  export type CoinOrderByWithRelationInput = {
    coin_id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    slug?: SortOrder
    cmc_rank?: SortOrder
    price?: SortOrder
    market_cap?: SortOrder
    volume_24h?: SortOrder
    percent_change_24h?: SortOrder
    percent_change_7d?: SortOrder
    last_updated?: SortOrder
    portfolio?: PortfolioEntryOrderByRelationAggregateInput
    alerts?: AlertOrderByRelationAggregateInput
    records?: TrackRecordOrderByRelationAggregateInput
    _relevance?: CoinOrderByRelevanceInput
  }

  export type CoinWhereUniqueInput = Prisma.AtLeast<{
    coin_id?: number
    symbol?: string
    AND?: CoinWhereInput | CoinWhereInput[]
    OR?: CoinWhereInput[]
    NOT?: CoinWhereInput | CoinWhereInput[]
    name?: StringFilter<"Coin"> | string
    slug?: StringFilter<"Coin"> | string
    cmc_rank?: IntFilter<"Coin"> | number
    price?: FloatFilter<"Coin"> | number
    market_cap?: FloatFilter<"Coin"> | number
    volume_24h?: FloatFilter<"Coin"> | number
    percent_change_24h?: FloatFilter<"Coin"> | number
    percent_change_7d?: FloatFilter<"Coin"> | number
    last_updated?: DateTimeFilter<"Coin"> | Date | string
    portfolio?: PortfolioEntryListRelationFilter
    alerts?: AlertListRelationFilter
    records?: TrackRecordListRelationFilter
  }, "coin_id" | "symbol">

  export type CoinOrderByWithAggregationInput = {
    coin_id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    slug?: SortOrder
    cmc_rank?: SortOrder
    price?: SortOrder
    market_cap?: SortOrder
    volume_24h?: SortOrder
    percent_change_24h?: SortOrder
    percent_change_7d?: SortOrder
    last_updated?: SortOrder
    _count?: CoinCountOrderByAggregateInput
    _avg?: CoinAvgOrderByAggregateInput
    _max?: CoinMaxOrderByAggregateInput
    _min?: CoinMinOrderByAggregateInput
    _sum?: CoinSumOrderByAggregateInput
  }

  export type CoinScalarWhereWithAggregatesInput = {
    AND?: CoinScalarWhereWithAggregatesInput | CoinScalarWhereWithAggregatesInput[]
    OR?: CoinScalarWhereWithAggregatesInput[]
    NOT?: CoinScalarWhereWithAggregatesInput | CoinScalarWhereWithAggregatesInput[]
    coin_id?: IntWithAggregatesFilter<"Coin"> | number
    name?: StringWithAggregatesFilter<"Coin"> | string
    symbol?: StringWithAggregatesFilter<"Coin"> | string
    slug?: StringWithAggregatesFilter<"Coin"> | string
    cmc_rank?: IntWithAggregatesFilter<"Coin"> | number
    price?: FloatWithAggregatesFilter<"Coin"> | number
    market_cap?: FloatWithAggregatesFilter<"Coin"> | number
    volume_24h?: FloatWithAggregatesFilter<"Coin"> | number
    percent_change_24h?: FloatWithAggregatesFilter<"Coin"> | number
    percent_change_7d?: FloatWithAggregatesFilter<"Coin"> | number
    last_updated?: DateTimeWithAggregatesFilter<"Coin"> | Date | string
  }

  export type PortfolioEntryWhereInput = {
    AND?: PortfolioEntryWhereInput | PortfolioEntryWhereInput[]
    OR?: PortfolioEntryWhereInput[]
    NOT?: PortfolioEntryWhereInput | PortfolioEntryWhereInput[]
    entry_id?: IntFilter<"PortfolioEntry"> | number
    amount?: FloatFilter<"PortfolioEntry"> | number
    user_id?: IntFilter<"PortfolioEntry"> | number
    coin_id?: IntFilter<"PortfolioEntry"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    coin?: XOR<CoinScalarRelationFilter, CoinWhereInput>
  }

  export type PortfolioEntryOrderByWithRelationInput = {
    entry_id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
    coin_id?: SortOrder
    user?: UserOrderByWithRelationInput
    coin?: CoinOrderByWithRelationInput
  }

  export type PortfolioEntryWhereUniqueInput = Prisma.AtLeast<{
    entry_id?: number
    user_id_coin_id?: PortfolioEntryUser_idCoin_idCompoundUniqueInput
    AND?: PortfolioEntryWhereInput | PortfolioEntryWhereInput[]
    OR?: PortfolioEntryWhereInput[]
    NOT?: PortfolioEntryWhereInput | PortfolioEntryWhereInput[]
    amount?: FloatFilter<"PortfolioEntry"> | number
    user_id?: IntFilter<"PortfolioEntry"> | number
    coin_id?: IntFilter<"PortfolioEntry"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    coin?: XOR<CoinScalarRelationFilter, CoinWhereInput>
  }, "entry_id" | "user_id_coin_id">

  export type PortfolioEntryOrderByWithAggregationInput = {
    entry_id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
    coin_id?: SortOrder
    _count?: PortfolioEntryCountOrderByAggregateInput
    _avg?: PortfolioEntryAvgOrderByAggregateInput
    _max?: PortfolioEntryMaxOrderByAggregateInput
    _min?: PortfolioEntryMinOrderByAggregateInput
    _sum?: PortfolioEntrySumOrderByAggregateInput
  }

  export type PortfolioEntryScalarWhereWithAggregatesInput = {
    AND?: PortfolioEntryScalarWhereWithAggregatesInput | PortfolioEntryScalarWhereWithAggregatesInput[]
    OR?: PortfolioEntryScalarWhereWithAggregatesInput[]
    NOT?: PortfolioEntryScalarWhereWithAggregatesInput | PortfolioEntryScalarWhereWithAggregatesInput[]
    entry_id?: IntWithAggregatesFilter<"PortfolioEntry"> | number
    amount?: FloatWithAggregatesFilter<"PortfolioEntry"> | number
    user_id?: IntWithAggregatesFilter<"PortfolioEntry"> | number
    coin_id?: IntWithAggregatesFilter<"PortfolioEntry"> | number
  }

  export type TrackRecordWhereInput = {
    AND?: TrackRecordWhereInput | TrackRecordWhereInput[]
    OR?: TrackRecordWhereInput[]
    NOT?: TrackRecordWhereInput | TrackRecordWhereInput[]
    track_record_id?: IntFilter<"TrackRecord"> | number
    amount?: FloatFilter<"TrackRecord"> | number
    action?: StringFilter<"TrackRecord"> | string
    datetime?: DateTimeFilter<"TrackRecord"> | Date | string
    user_id?: IntFilter<"TrackRecord"> | number
    coin_id?: IntFilter<"TrackRecord"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    coin?: XOR<CoinScalarRelationFilter, CoinWhereInput>
  }

  export type TrackRecordOrderByWithRelationInput = {
    track_record_id?: SortOrder
    amount?: SortOrder
    action?: SortOrder
    datetime?: SortOrder
    user_id?: SortOrder
    coin_id?: SortOrder
    user?: UserOrderByWithRelationInput
    coin?: CoinOrderByWithRelationInput
    _relevance?: TrackRecordOrderByRelevanceInput
  }

  export type TrackRecordWhereUniqueInput = Prisma.AtLeast<{
    track_record_id?: number
    AND?: TrackRecordWhereInput | TrackRecordWhereInput[]
    OR?: TrackRecordWhereInput[]
    NOT?: TrackRecordWhereInput | TrackRecordWhereInput[]
    amount?: FloatFilter<"TrackRecord"> | number
    action?: StringFilter<"TrackRecord"> | string
    datetime?: DateTimeFilter<"TrackRecord"> | Date | string
    user_id?: IntFilter<"TrackRecord"> | number
    coin_id?: IntFilter<"TrackRecord"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    coin?: XOR<CoinScalarRelationFilter, CoinWhereInput>
  }, "track_record_id">

  export type TrackRecordOrderByWithAggregationInput = {
    track_record_id?: SortOrder
    amount?: SortOrder
    action?: SortOrder
    datetime?: SortOrder
    user_id?: SortOrder
    coin_id?: SortOrder
    _count?: TrackRecordCountOrderByAggregateInput
    _avg?: TrackRecordAvgOrderByAggregateInput
    _max?: TrackRecordMaxOrderByAggregateInput
    _min?: TrackRecordMinOrderByAggregateInput
    _sum?: TrackRecordSumOrderByAggregateInput
  }

  export type TrackRecordScalarWhereWithAggregatesInput = {
    AND?: TrackRecordScalarWhereWithAggregatesInput | TrackRecordScalarWhereWithAggregatesInput[]
    OR?: TrackRecordScalarWhereWithAggregatesInput[]
    NOT?: TrackRecordScalarWhereWithAggregatesInput | TrackRecordScalarWhereWithAggregatesInput[]
    track_record_id?: IntWithAggregatesFilter<"TrackRecord"> | number
    amount?: FloatWithAggregatesFilter<"TrackRecord"> | number
    action?: StringWithAggregatesFilter<"TrackRecord"> | string
    datetime?: DateTimeWithAggregatesFilter<"TrackRecord"> | Date | string
    user_id?: IntWithAggregatesFilter<"TrackRecord"> | number
    coin_id?: IntWithAggregatesFilter<"TrackRecord"> | number
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    alert_id?: IntFilter<"Alert"> | number
    floor_price?: IntNullableFilter<"Alert"> | number | null
    ceiling_price?: IntNullableFilter<"Alert"> | number | null
    user_id?: IntFilter<"Alert"> | number
    coin_id?: IntFilter<"Alert"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    coin?: XOR<CoinScalarRelationFilter, CoinWhereInput>
  }

  export type AlertOrderByWithRelationInput = {
    alert_id?: SortOrder
    floor_price?: SortOrderInput | SortOrder
    ceiling_price?: SortOrderInput | SortOrder
    user_id?: SortOrder
    coin_id?: SortOrder
    user?: UserOrderByWithRelationInput
    coin?: CoinOrderByWithRelationInput
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    alert_id?: number
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    floor_price?: IntNullableFilter<"Alert"> | number | null
    ceiling_price?: IntNullableFilter<"Alert"> | number | null
    user_id?: IntFilter<"Alert"> | number
    coin_id?: IntFilter<"Alert"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    coin?: XOR<CoinScalarRelationFilter, CoinWhereInput>
  }, "alert_id">

  export type AlertOrderByWithAggregationInput = {
    alert_id?: SortOrder
    floor_price?: SortOrderInput | SortOrder
    ceiling_price?: SortOrderInput | SortOrder
    user_id?: SortOrder
    coin_id?: SortOrder
    _count?: AlertCountOrderByAggregateInput
    _avg?: AlertAvgOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
    _sum?: AlertSumOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    alert_id?: IntWithAggregatesFilter<"Alert"> | number
    floor_price?: IntNullableWithAggregatesFilter<"Alert"> | number | null
    ceiling_price?: IntNullableWithAggregatesFilter<"Alert"> | number | null
    user_id?: IntWithAggregatesFilter<"Alert"> | number
    coin_id?: IntWithAggregatesFilter<"Alert"> | number
  }

  export type UserCreateInput = {
    email: string
    password?: string
    displayName?: string | null
    photoUrl?: string | null
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    portfolio?: PortfolioEntryCreateNestedManyWithoutUserInput
    alerts?: AlertCreateNestedManyWithoutUserInput
    records?: TrackRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    email: string
    password?: string
    displayName?: string | null
    photoUrl?: string | null
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    portfolio?: PortfolioEntryUncheckedCreateNestedManyWithoutUserInput
    alerts?: AlertUncheckedCreateNestedManyWithoutUserInput
    records?: TrackRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    portfolio?: PortfolioEntryUpdateManyWithoutUserNestedInput
    alerts?: AlertUpdateManyWithoutUserNestedInput
    records?: TrackRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    portfolio?: PortfolioEntryUncheckedUpdateManyWithoutUserNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutUserNestedInput
    records?: TrackRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: number
    email: string
    password?: string
    displayName?: string | null
    photoUrl?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSettingsCreateInput = {
    currency?: string
    dark_mode?: boolean
    user: UserCreateNestedOneWithoutSettingsInput
  }

  export type UserSettingsUncheckedCreateInput = {
    user_id: number
    currency?: string
    dark_mode?: boolean
  }

  export type UserSettingsUpdateInput = {
    currency?: StringFieldUpdateOperationsInput | string
    dark_mode?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type UserSettingsUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dark_mode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSettingsCreateManyInput = {
    user_id: number
    currency?: string
    dark_mode?: boolean
  }

  export type UserSettingsUpdateManyMutationInput = {
    currency?: StringFieldUpdateOperationsInput | string
    dark_mode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSettingsUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    dark_mode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CoinCreateInput = {
    name: string
    symbol: string
    slug: string
    cmc_rank: number
    price: number
    market_cap: number
    volume_24h: number
    percent_change_24h: number
    percent_change_7d: number
    last_updated: Date | string
    portfolio?: PortfolioEntryCreateNestedManyWithoutCoinInput
    alerts?: AlertCreateNestedManyWithoutCoinInput
    records?: TrackRecordCreateNestedManyWithoutCoinInput
  }

  export type CoinUncheckedCreateInput = {
    coin_id?: number
    name: string
    symbol: string
    slug: string
    cmc_rank: number
    price: number
    market_cap: number
    volume_24h: number
    percent_change_24h: number
    percent_change_7d: number
    last_updated: Date | string
    portfolio?: PortfolioEntryUncheckedCreateNestedManyWithoutCoinInput
    alerts?: AlertUncheckedCreateNestedManyWithoutCoinInput
    records?: TrackRecordUncheckedCreateNestedManyWithoutCoinInput
  }

  export type CoinUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cmc_rank?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    market_cap?: FloatFieldUpdateOperationsInput | number
    volume_24h?: FloatFieldUpdateOperationsInput | number
    percent_change_24h?: FloatFieldUpdateOperationsInput | number
    percent_change_7d?: FloatFieldUpdateOperationsInput | number
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioEntryUpdateManyWithoutCoinNestedInput
    alerts?: AlertUpdateManyWithoutCoinNestedInput
    records?: TrackRecordUpdateManyWithoutCoinNestedInput
  }

  export type CoinUncheckedUpdateInput = {
    coin_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cmc_rank?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    market_cap?: FloatFieldUpdateOperationsInput | number
    volume_24h?: FloatFieldUpdateOperationsInput | number
    percent_change_24h?: FloatFieldUpdateOperationsInput | number
    percent_change_7d?: FloatFieldUpdateOperationsInput | number
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioEntryUncheckedUpdateManyWithoutCoinNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutCoinNestedInput
    records?: TrackRecordUncheckedUpdateManyWithoutCoinNestedInput
  }

  export type CoinCreateManyInput = {
    coin_id?: number
    name: string
    symbol: string
    slug: string
    cmc_rank: number
    price: number
    market_cap: number
    volume_24h: number
    percent_change_24h: number
    percent_change_7d: number
    last_updated: Date | string
  }

  export type CoinUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cmc_rank?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    market_cap?: FloatFieldUpdateOperationsInput | number
    volume_24h?: FloatFieldUpdateOperationsInput | number
    percent_change_24h?: FloatFieldUpdateOperationsInput | number
    percent_change_7d?: FloatFieldUpdateOperationsInput | number
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoinUncheckedUpdateManyInput = {
    coin_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cmc_rank?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    market_cap?: FloatFieldUpdateOperationsInput | number
    volume_24h?: FloatFieldUpdateOperationsInput | number
    percent_change_24h?: FloatFieldUpdateOperationsInput | number
    percent_change_7d?: FloatFieldUpdateOperationsInput | number
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioEntryCreateInput = {
    amount: number
    user: UserCreateNestedOneWithoutPortfolioInput
    coin: CoinCreateNestedOneWithoutPortfolioInput
  }

  export type PortfolioEntryUncheckedCreateInput = {
    entry_id?: number
    amount: number
    user_id: number
    coin_id: number
  }

  export type PortfolioEntryUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutPortfolioNestedInput
    coin?: CoinUpdateOneRequiredWithoutPortfolioNestedInput
  }

  export type PortfolioEntryUncheckedUpdateInput = {
    entry_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    coin_id?: IntFieldUpdateOperationsInput | number
  }

  export type PortfolioEntryCreateManyInput = {
    entry_id?: number
    amount: number
    user_id: number
    coin_id: number
  }

  export type PortfolioEntryUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
  }

  export type PortfolioEntryUncheckedUpdateManyInput = {
    entry_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    coin_id?: IntFieldUpdateOperationsInput | number
  }

  export type TrackRecordCreateInput = {
    amount: number
    action: string
    datetime?: Date | string
    user: UserCreateNestedOneWithoutRecordsInput
    coin: CoinCreateNestedOneWithoutRecordsInput
  }

  export type TrackRecordUncheckedCreateInput = {
    track_record_id?: number
    amount: number
    action: string
    datetime?: Date | string
    user_id: number
    coin_id: number
  }

  export type TrackRecordUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecordsNestedInput
    coin?: CoinUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type TrackRecordUncheckedUpdateInput = {
    track_record_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    coin_id?: IntFieldUpdateOperationsInput | number
  }

  export type TrackRecordCreateManyInput = {
    track_record_id?: number
    amount: number
    action: string
    datetime?: Date | string
    user_id: number
    coin_id: number
  }

  export type TrackRecordUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackRecordUncheckedUpdateManyInput = {
    track_record_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    coin_id?: IntFieldUpdateOperationsInput | number
  }

  export type AlertCreateInput = {
    floor_price?: number | null
    ceiling_price?: number | null
    user: UserCreateNestedOneWithoutAlertsInput
    coin: CoinCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateInput = {
    alert_id?: number
    floor_price?: number | null
    ceiling_price?: number | null
    user_id: number
    coin_id: number
  }

  export type AlertUpdateInput = {
    floor_price?: NullableIntFieldUpdateOperationsInput | number | null
    ceiling_price?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAlertsNestedInput
    coin?: CoinUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateInput = {
    alert_id?: IntFieldUpdateOperationsInput | number
    floor_price?: NullableIntFieldUpdateOperationsInput | number | null
    ceiling_price?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
    coin_id?: IntFieldUpdateOperationsInput | number
  }

  export type AlertCreateManyInput = {
    alert_id?: number
    floor_price?: number | null
    ceiling_price?: number | null
    user_id: number
    coin_id: number
  }

  export type AlertUpdateManyMutationInput = {
    floor_price?: NullableIntFieldUpdateOperationsInput | number | null
    ceiling_price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlertUncheckedUpdateManyInput = {
    alert_id?: IntFieldUpdateOperationsInput | number
    floor_price?: NullableIntFieldUpdateOperationsInput | number | null
    ceiling_price?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
    coin_id?: IntFieldUpdateOperationsInput | number
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

  export type UserSettingsNullableScalarRelationFilter = {
    is?: UserSettingsWhereInput | null
    isNot?: UserSettingsWhereInput | null
  }

  export type PortfolioEntryListRelationFilter = {
    every?: PortfolioEntryWhereInput
    some?: PortfolioEntryWhereInput
    none?: PortfolioEntryWhereInput
  }

  export type AlertListRelationFilter = {
    every?: AlertWhereInput
    some?: AlertWhereInput
    none?: AlertWhereInput
  }

  export type TrackRecordListRelationFilter = {
    every?: TrackRecordWhereInput
    some?: TrackRecordWhereInput
    none?: TrackRecordWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PortfolioEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    photoUrl?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    photoUrl?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    photoUrl?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserSettingsOrderByRelevanceInput = {
    fields: UserSettingsOrderByRelevanceFieldEnum | UserSettingsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserSettingsCountOrderByAggregateInput = {
    user_id?: SortOrder
    currency?: SortOrder
    dark_mode?: SortOrder
  }

  export type UserSettingsAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UserSettingsMaxOrderByAggregateInput = {
    user_id?: SortOrder
    currency?: SortOrder
    dark_mode?: SortOrder
  }

  export type UserSettingsMinOrderByAggregateInput = {
    user_id?: SortOrder
    currency?: SortOrder
    dark_mode?: SortOrder
  }

  export type UserSettingsSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type CoinOrderByRelevanceInput = {
    fields: CoinOrderByRelevanceFieldEnum | CoinOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CoinCountOrderByAggregateInput = {
    coin_id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    slug?: SortOrder
    cmc_rank?: SortOrder
    price?: SortOrder
    market_cap?: SortOrder
    volume_24h?: SortOrder
    percent_change_24h?: SortOrder
    percent_change_7d?: SortOrder
    last_updated?: SortOrder
  }

  export type CoinAvgOrderByAggregateInput = {
    coin_id?: SortOrder
    cmc_rank?: SortOrder
    price?: SortOrder
    market_cap?: SortOrder
    volume_24h?: SortOrder
    percent_change_24h?: SortOrder
    percent_change_7d?: SortOrder
  }

  export type CoinMaxOrderByAggregateInput = {
    coin_id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    slug?: SortOrder
    cmc_rank?: SortOrder
    price?: SortOrder
    market_cap?: SortOrder
    volume_24h?: SortOrder
    percent_change_24h?: SortOrder
    percent_change_7d?: SortOrder
    last_updated?: SortOrder
  }

  export type CoinMinOrderByAggregateInput = {
    coin_id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    slug?: SortOrder
    cmc_rank?: SortOrder
    price?: SortOrder
    market_cap?: SortOrder
    volume_24h?: SortOrder
    percent_change_24h?: SortOrder
    percent_change_7d?: SortOrder
    last_updated?: SortOrder
  }

  export type CoinSumOrderByAggregateInput = {
    coin_id?: SortOrder
    cmc_rank?: SortOrder
    price?: SortOrder
    market_cap?: SortOrder
    volume_24h?: SortOrder
    percent_change_24h?: SortOrder
    percent_change_7d?: SortOrder
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

  export type CoinScalarRelationFilter = {
    is?: CoinWhereInput
    isNot?: CoinWhereInput
  }

  export type PortfolioEntryUser_idCoin_idCompoundUniqueInput = {
    user_id: number
    coin_id: number
  }

  export type PortfolioEntryCountOrderByAggregateInput = {
    entry_id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
    coin_id?: SortOrder
  }

  export type PortfolioEntryAvgOrderByAggregateInput = {
    entry_id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
    coin_id?: SortOrder
  }

  export type PortfolioEntryMaxOrderByAggregateInput = {
    entry_id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
    coin_id?: SortOrder
  }

  export type PortfolioEntryMinOrderByAggregateInput = {
    entry_id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
    coin_id?: SortOrder
  }

  export type PortfolioEntrySumOrderByAggregateInput = {
    entry_id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
    coin_id?: SortOrder
  }

  export type TrackRecordOrderByRelevanceInput = {
    fields: TrackRecordOrderByRelevanceFieldEnum | TrackRecordOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TrackRecordCountOrderByAggregateInput = {
    track_record_id?: SortOrder
    amount?: SortOrder
    action?: SortOrder
    datetime?: SortOrder
    user_id?: SortOrder
    coin_id?: SortOrder
  }

  export type TrackRecordAvgOrderByAggregateInput = {
    track_record_id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
    coin_id?: SortOrder
  }

  export type TrackRecordMaxOrderByAggregateInput = {
    track_record_id?: SortOrder
    amount?: SortOrder
    action?: SortOrder
    datetime?: SortOrder
    user_id?: SortOrder
    coin_id?: SortOrder
  }

  export type TrackRecordMinOrderByAggregateInput = {
    track_record_id?: SortOrder
    amount?: SortOrder
    action?: SortOrder
    datetime?: SortOrder
    user_id?: SortOrder
    coin_id?: SortOrder
  }

  export type TrackRecordSumOrderByAggregateInput = {
    track_record_id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
    coin_id?: SortOrder
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

  export type AlertCountOrderByAggregateInput = {
    alert_id?: SortOrder
    floor_price?: SortOrder
    ceiling_price?: SortOrder
    user_id?: SortOrder
    coin_id?: SortOrder
  }

  export type AlertAvgOrderByAggregateInput = {
    alert_id?: SortOrder
    floor_price?: SortOrder
    ceiling_price?: SortOrder
    user_id?: SortOrder
    coin_id?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    alert_id?: SortOrder
    floor_price?: SortOrder
    ceiling_price?: SortOrder
    user_id?: SortOrder
    coin_id?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    alert_id?: SortOrder
    floor_price?: SortOrder
    ceiling_price?: SortOrder
    user_id?: SortOrder
    coin_id?: SortOrder
  }

  export type AlertSumOrderByAggregateInput = {
    alert_id?: SortOrder
    floor_price?: SortOrder
    ceiling_price?: SortOrder
    user_id?: SortOrder
    coin_id?: SortOrder
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

  export type UserSettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type PortfolioEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<PortfolioEntryCreateWithoutUserInput, PortfolioEntryUncheckedCreateWithoutUserInput> | PortfolioEntryCreateWithoutUserInput[] | PortfolioEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PortfolioEntryCreateOrConnectWithoutUserInput | PortfolioEntryCreateOrConnectWithoutUserInput[]
    createMany?: PortfolioEntryCreateManyUserInputEnvelope
    connect?: PortfolioEntryWhereUniqueInput | PortfolioEntryWhereUniqueInput[]
  }

  export type AlertCreateNestedManyWithoutUserInput = {
    create?: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput> | AlertCreateWithoutUserInput[] | AlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutUserInput | AlertCreateOrConnectWithoutUserInput[]
    createMany?: AlertCreateManyUserInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type TrackRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<TrackRecordCreateWithoutUserInput, TrackRecordUncheckedCreateWithoutUserInput> | TrackRecordCreateWithoutUserInput[] | TrackRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackRecordCreateOrConnectWithoutUserInput | TrackRecordCreateOrConnectWithoutUserInput[]
    createMany?: TrackRecordCreateManyUserInputEnvelope
    connect?: TrackRecordWhereUniqueInput | TrackRecordWhereUniqueInput[]
  }

  export type UserSettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type PortfolioEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PortfolioEntryCreateWithoutUserInput, PortfolioEntryUncheckedCreateWithoutUserInput> | PortfolioEntryCreateWithoutUserInput[] | PortfolioEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PortfolioEntryCreateOrConnectWithoutUserInput | PortfolioEntryCreateOrConnectWithoutUserInput[]
    createMany?: PortfolioEntryCreateManyUserInputEnvelope
    connect?: PortfolioEntryWhereUniqueInput | PortfolioEntryWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput> | AlertCreateWithoutUserInput[] | AlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutUserInput | AlertCreateOrConnectWithoutUserInput[]
    createMany?: AlertCreateManyUserInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type TrackRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TrackRecordCreateWithoutUserInput, TrackRecordUncheckedCreateWithoutUserInput> | TrackRecordCreateWithoutUserInput[] | TrackRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackRecordCreateOrConnectWithoutUserInput | TrackRecordCreateOrConnectWithoutUserInput[]
    createMany?: TrackRecordCreateManyUserInputEnvelope
    connect?: TrackRecordWhereUniqueInput | TrackRecordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserSettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type PortfolioEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<PortfolioEntryCreateWithoutUserInput, PortfolioEntryUncheckedCreateWithoutUserInput> | PortfolioEntryCreateWithoutUserInput[] | PortfolioEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PortfolioEntryCreateOrConnectWithoutUserInput | PortfolioEntryCreateOrConnectWithoutUserInput[]
    upsert?: PortfolioEntryUpsertWithWhereUniqueWithoutUserInput | PortfolioEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PortfolioEntryCreateManyUserInputEnvelope
    set?: PortfolioEntryWhereUniqueInput | PortfolioEntryWhereUniqueInput[]
    disconnect?: PortfolioEntryWhereUniqueInput | PortfolioEntryWhereUniqueInput[]
    delete?: PortfolioEntryWhereUniqueInput | PortfolioEntryWhereUniqueInput[]
    connect?: PortfolioEntryWhereUniqueInput | PortfolioEntryWhereUniqueInput[]
    update?: PortfolioEntryUpdateWithWhereUniqueWithoutUserInput | PortfolioEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PortfolioEntryUpdateManyWithWhereWithoutUserInput | PortfolioEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PortfolioEntryScalarWhereInput | PortfolioEntryScalarWhereInput[]
  }

  export type AlertUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput> | AlertCreateWithoutUserInput[] | AlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutUserInput | AlertCreateOrConnectWithoutUserInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutUserInput | AlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlertCreateManyUserInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutUserInput | AlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutUserInput | AlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type TrackRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<TrackRecordCreateWithoutUserInput, TrackRecordUncheckedCreateWithoutUserInput> | TrackRecordCreateWithoutUserInput[] | TrackRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackRecordCreateOrConnectWithoutUserInput | TrackRecordCreateOrConnectWithoutUserInput[]
    upsert?: TrackRecordUpsertWithWhereUniqueWithoutUserInput | TrackRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TrackRecordCreateManyUserInputEnvelope
    set?: TrackRecordWhereUniqueInput | TrackRecordWhereUniqueInput[]
    disconnect?: TrackRecordWhereUniqueInput | TrackRecordWhereUniqueInput[]
    delete?: TrackRecordWhereUniqueInput | TrackRecordWhereUniqueInput[]
    connect?: TrackRecordWhereUniqueInput | TrackRecordWhereUniqueInput[]
    update?: TrackRecordUpdateWithWhereUniqueWithoutUserInput | TrackRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TrackRecordUpdateManyWithWhereWithoutUserInput | TrackRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TrackRecordScalarWhereInput | TrackRecordScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserSettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type PortfolioEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PortfolioEntryCreateWithoutUserInput, PortfolioEntryUncheckedCreateWithoutUserInput> | PortfolioEntryCreateWithoutUserInput[] | PortfolioEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PortfolioEntryCreateOrConnectWithoutUserInput | PortfolioEntryCreateOrConnectWithoutUserInput[]
    upsert?: PortfolioEntryUpsertWithWhereUniqueWithoutUserInput | PortfolioEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PortfolioEntryCreateManyUserInputEnvelope
    set?: PortfolioEntryWhereUniqueInput | PortfolioEntryWhereUniqueInput[]
    disconnect?: PortfolioEntryWhereUniqueInput | PortfolioEntryWhereUniqueInput[]
    delete?: PortfolioEntryWhereUniqueInput | PortfolioEntryWhereUniqueInput[]
    connect?: PortfolioEntryWhereUniqueInput | PortfolioEntryWhereUniqueInput[]
    update?: PortfolioEntryUpdateWithWhereUniqueWithoutUserInput | PortfolioEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PortfolioEntryUpdateManyWithWhereWithoutUserInput | PortfolioEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PortfolioEntryScalarWhereInput | PortfolioEntryScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput> | AlertCreateWithoutUserInput[] | AlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutUserInput | AlertCreateOrConnectWithoutUserInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutUserInput | AlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlertCreateManyUserInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutUserInput | AlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutUserInput | AlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type TrackRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TrackRecordCreateWithoutUserInput, TrackRecordUncheckedCreateWithoutUserInput> | TrackRecordCreateWithoutUserInput[] | TrackRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TrackRecordCreateOrConnectWithoutUserInput | TrackRecordCreateOrConnectWithoutUserInput[]
    upsert?: TrackRecordUpsertWithWhereUniqueWithoutUserInput | TrackRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TrackRecordCreateManyUserInputEnvelope
    set?: TrackRecordWhereUniqueInput | TrackRecordWhereUniqueInput[]
    disconnect?: TrackRecordWhereUniqueInput | TrackRecordWhereUniqueInput[]
    delete?: TrackRecordWhereUniqueInput | TrackRecordWhereUniqueInput[]
    connect?: TrackRecordWhereUniqueInput | TrackRecordWhereUniqueInput[]
    update?: TrackRecordUpdateWithWhereUniqueWithoutUserInput | TrackRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TrackRecordUpdateManyWithWhereWithoutUserInput | TrackRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TrackRecordScalarWhereInput | TrackRecordScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSettingsInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    upsert?: UserUpsertWithoutSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettingsInput, UserUpdateWithoutSettingsInput>, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type PortfolioEntryCreateNestedManyWithoutCoinInput = {
    create?: XOR<PortfolioEntryCreateWithoutCoinInput, PortfolioEntryUncheckedCreateWithoutCoinInput> | PortfolioEntryCreateWithoutCoinInput[] | PortfolioEntryUncheckedCreateWithoutCoinInput[]
    connectOrCreate?: PortfolioEntryCreateOrConnectWithoutCoinInput | PortfolioEntryCreateOrConnectWithoutCoinInput[]
    createMany?: PortfolioEntryCreateManyCoinInputEnvelope
    connect?: PortfolioEntryWhereUniqueInput | PortfolioEntryWhereUniqueInput[]
  }

  export type AlertCreateNestedManyWithoutCoinInput = {
    create?: XOR<AlertCreateWithoutCoinInput, AlertUncheckedCreateWithoutCoinInput> | AlertCreateWithoutCoinInput[] | AlertUncheckedCreateWithoutCoinInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutCoinInput | AlertCreateOrConnectWithoutCoinInput[]
    createMany?: AlertCreateManyCoinInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type TrackRecordCreateNestedManyWithoutCoinInput = {
    create?: XOR<TrackRecordCreateWithoutCoinInput, TrackRecordUncheckedCreateWithoutCoinInput> | TrackRecordCreateWithoutCoinInput[] | TrackRecordUncheckedCreateWithoutCoinInput[]
    connectOrCreate?: TrackRecordCreateOrConnectWithoutCoinInput | TrackRecordCreateOrConnectWithoutCoinInput[]
    createMany?: TrackRecordCreateManyCoinInputEnvelope
    connect?: TrackRecordWhereUniqueInput | TrackRecordWhereUniqueInput[]
  }

  export type PortfolioEntryUncheckedCreateNestedManyWithoutCoinInput = {
    create?: XOR<PortfolioEntryCreateWithoutCoinInput, PortfolioEntryUncheckedCreateWithoutCoinInput> | PortfolioEntryCreateWithoutCoinInput[] | PortfolioEntryUncheckedCreateWithoutCoinInput[]
    connectOrCreate?: PortfolioEntryCreateOrConnectWithoutCoinInput | PortfolioEntryCreateOrConnectWithoutCoinInput[]
    createMany?: PortfolioEntryCreateManyCoinInputEnvelope
    connect?: PortfolioEntryWhereUniqueInput | PortfolioEntryWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutCoinInput = {
    create?: XOR<AlertCreateWithoutCoinInput, AlertUncheckedCreateWithoutCoinInput> | AlertCreateWithoutCoinInput[] | AlertUncheckedCreateWithoutCoinInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutCoinInput | AlertCreateOrConnectWithoutCoinInput[]
    createMany?: AlertCreateManyCoinInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type TrackRecordUncheckedCreateNestedManyWithoutCoinInput = {
    create?: XOR<TrackRecordCreateWithoutCoinInput, TrackRecordUncheckedCreateWithoutCoinInput> | TrackRecordCreateWithoutCoinInput[] | TrackRecordUncheckedCreateWithoutCoinInput[]
    connectOrCreate?: TrackRecordCreateOrConnectWithoutCoinInput | TrackRecordCreateOrConnectWithoutCoinInput[]
    createMany?: TrackRecordCreateManyCoinInputEnvelope
    connect?: TrackRecordWhereUniqueInput | TrackRecordWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PortfolioEntryUpdateManyWithoutCoinNestedInput = {
    create?: XOR<PortfolioEntryCreateWithoutCoinInput, PortfolioEntryUncheckedCreateWithoutCoinInput> | PortfolioEntryCreateWithoutCoinInput[] | PortfolioEntryUncheckedCreateWithoutCoinInput[]
    connectOrCreate?: PortfolioEntryCreateOrConnectWithoutCoinInput | PortfolioEntryCreateOrConnectWithoutCoinInput[]
    upsert?: PortfolioEntryUpsertWithWhereUniqueWithoutCoinInput | PortfolioEntryUpsertWithWhereUniqueWithoutCoinInput[]
    createMany?: PortfolioEntryCreateManyCoinInputEnvelope
    set?: PortfolioEntryWhereUniqueInput | PortfolioEntryWhereUniqueInput[]
    disconnect?: PortfolioEntryWhereUniqueInput | PortfolioEntryWhereUniqueInput[]
    delete?: PortfolioEntryWhereUniqueInput | PortfolioEntryWhereUniqueInput[]
    connect?: PortfolioEntryWhereUniqueInput | PortfolioEntryWhereUniqueInput[]
    update?: PortfolioEntryUpdateWithWhereUniqueWithoutCoinInput | PortfolioEntryUpdateWithWhereUniqueWithoutCoinInput[]
    updateMany?: PortfolioEntryUpdateManyWithWhereWithoutCoinInput | PortfolioEntryUpdateManyWithWhereWithoutCoinInput[]
    deleteMany?: PortfolioEntryScalarWhereInput | PortfolioEntryScalarWhereInput[]
  }

  export type AlertUpdateManyWithoutCoinNestedInput = {
    create?: XOR<AlertCreateWithoutCoinInput, AlertUncheckedCreateWithoutCoinInput> | AlertCreateWithoutCoinInput[] | AlertUncheckedCreateWithoutCoinInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutCoinInput | AlertCreateOrConnectWithoutCoinInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutCoinInput | AlertUpsertWithWhereUniqueWithoutCoinInput[]
    createMany?: AlertCreateManyCoinInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutCoinInput | AlertUpdateWithWhereUniqueWithoutCoinInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutCoinInput | AlertUpdateManyWithWhereWithoutCoinInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type TrackRecordUpdateManyWithoutCoinNestedInput = {
    create?: XOR<TrackRecordCreateWithoutCoinInput, TrackRecordUncheckedCreateWithoutCoinInput> | TrackRecordCreateWithoutCoinInput[] | TrackRecordUncheckedCreateWithoutCoinInput[]
    connectOrCreate?: TrackRecordCreateOrConnectWithoutCoinInput | TrackRecordCreateOrConnectWithoutCoinInput[]
    upsert?: TrackRecordUpsertWithWhereUniqueWithoutCoinInput | TrackRecordUpsertWithWhereUniqueWithoutCoinInput[]
    createMany?: TrackRecordCreateManyCoinInputEnvelope
    set?: TrackRecordWhereUniqueInput | TrackRecordWhereUniqueInput[]
    disconnect?: TrackRecordWhereUniqueInput | TrackRecordWhereUniqueInput[]
    delete?: TrackRecordWhereUniqueInput | TrackRecordWhereUniqueInput[]
    connect?: TrackRecordWhereUniqueInput | TrackRecordWhereUniqueInput[]
    update?: TrackRecordUpdateWithWhereUniqueWithoutCoinInput | TrackRecordUpdateWithWhereUniqueWithoutCoinInput[]
    updateMany?: TrackRecordUpdateManyWithWhereWithoutCoinInput | TrackRecordUpdateManyWithWhereWithoutCoinInput[]
    deleteMany?: TrackRecordScalarWhereInput | TrackRecordScalarWhereInput[]
  }

  export type PortfolioEntryUncheckedUpdateManyWithoutCoinNestedInput = {
    create?: XOR<PortfolioEntryCreateWithoutCoinInput, PortfolioEntryUncheckedCreateWithoutCoinInput> | PortfolioEntryCreateWithoutCoinInput[] | PortfolioEntryUncheckedCreateWithoutCoinInput[]
    connectOrCreate?: PortfolioEntryCreateOrConnectWithoutCoinInput | PortfolioEntryCreateOrConnectWithoutCoinInput[]
    upsert?: PortfolioEntryUpsertWithWhereUniqueWithoutCoinInput | PortfolioEntryUpsertWithWhereUniqueWithoutCoinInput[]
    createMany?: PortfolioEntryCreateManyCoinInputEnvelope
    set?: PortfolioEntryWhereUniqueInput | PortfolioEntryWhereUniqueInput[]
    disconnect?: PortfolioEntryWhereUniqueInput | PortfolioEntryWhereUniqueInput[]
    delete?: PortfolioEntryWhereUniqueInput | PortfolioEntryWhereUniqueInput[]
    connect?: PortfolioEntryWhereUniqueInput | PortfolioEntryWhereUniqueInput[]
    update?: PortfolioEntryUpdateWithWhereUniqueWithoutCoinInput | PortfolioEntryUpdateWithWhereUniqueWithoutCoinInput[]
    updateMany?: PortfolioEntryUpdateManyWithWhereWithoutCoinInput | PortfolioEntryUpdateManyWithWhereWithoutCoinInput[]
    deleteMany?: PortfolioEntryScalarWhereInput | PortfolioEntryScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutCoinNestedInput = {
    create?: XOR<AlertCreateWithoutCoinInput, AlertUncheckedCreateWithoutCoinInput> | AlertCreateWithoutCoinInput[] | AlertUncheckedCreateWithoutCoinInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutCoinInput | AlertCreateOrConnectWithoutCoinInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutCoinInput | AlertUpsertWithWhereUniqueWithoutCoinInput[]
    createMany?: AlertCreateManyCoinInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutCoinInput | AlertUpdateWithWhereUniqueWithoutCoinInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutCoinInput | AlertUpdateManyWithWhereWithoutCoinInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type TrackRecordUncheckedUpdateManyWithoutCoinNestedInput = {
    create?: XOR<TrackRecordCreateWithoutCoinInput, TrackRecordUncheckedCreateWithoutCoinInput> | TrackRecordCreateWithoutCoinInput[] | TrackRecordUncheckedCreateWithoutCoinInput[]
    connectOrCreate?: TrackRecordCreateOrConnectWithoutCoinInput | TrackRecordCreateOrConnectWithoutCoinInput[]
    upsert?: TrackRecordUpsertWithWhereUniqueWithoutCoinInput | TrackRecordUpsertWithWhereUniqueWithoutCoinInput[]
    createMany?: TrackRecordCreateManyCoinInputEnvelope
    set?: TrackRecordWhereUniqueInput | TrackRecordWhereUniqueInput[]
    disconnect?: TrackRecordWhereUniqueInput | TrackRecordWhereUniqueInput[]
    delete?: TrackRecordWhereUniqueInput | TrackRecordWhereUniqueInput[]
    connect?: TrackRecordWhereUniqueInput | TrackRecordWhereUniqueInput[]
    update?: TrackRecordUpdateWithWhereUniqueWithoutCoinInput | TrackRecordUpdateWithWhereUniqueWithoutCoinInput[]
    updateMany?: TrackRecordUpdateManyWithWhereWithoutCoinInput | TrackRecordUpdateManyWithWhereWithoutCoinInput[]
    deleteMany?: TrackRecordScalarWhereInput | TrackRecordScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPortfolioInput = {
    create?: XOR<UserCreateWithoutPortfolioInput, UserUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: UserCreateOrConnectWithoutPortfolioInput
    connect?: UserWhereUniqueInput
  }

  export type CoinCreateNestedOneWithoutPortfolioInput = {
    create?: XOR<CoinCreateWithoutPortfolioInput, CoinUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: CoinCreateOrConnectWithoutPortfolioInput
    connect?: CoinWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPortfolioNestedInput = {
    create?: XOR<UserCreateWithoutPortfolioInput, UserUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: UserCreateOrConnectWithoutPortfolioInput
    upsert?: UserUpsertWithoutPortfolioInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPortfolioInput, UserUpdateWithoutPortfolioInput>, UserUncheckedUpdateWithoutPortfolioInput>
  }

  export type CoinUpdateOneRequiredWithoutPortfolioNestedInput = {
    create?: XOR<CoinCreateWithoutPortfolioInput, CoinUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: CoinCreateOrConnectWithoutPortfolioInput
    upsert?: CoinUpsertWithoutPortfolioInput
    connect?: CoinWhereUniqueInput
    update?: XOR<XOR<CoinUpdateToOneWithWhereWithoutPortfolioInput, CoinUpdateWithoutPortfolioInput>, CoinUncheckedUpdateWithoutPortfolioInput>
  }

  export type UserCreateNestedOneWithoutRecordsInput = {
    create?: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type CoinCreateNestedOneWithoutRecordsInput = {
    create?: XOR<CoinCreateWithoutRecordsInput, CoinUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: CoinCreateOrConnectWithoutRecordsInput
    connect?: CoinWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecordsInput
    upsert?: UserUpsertWithoutRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecordsInput, UserUpdateWithoutRecordsInput>, UserUncheckedUpdateWithoutRecordsInput>
  }

  export type CoinUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<CoinCreateWithoutRecordsInput, CoinUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: CoinCreateOrConnectWithoutRecordsInput
    upsert?: CoinUpsertWithoutRecordsInput
    connect?: CoinWhereUniqueInput
    update?: XOR<XOR<CoinUpdateToOneWithWhereWithoutRecordsInput, CoinUpdateWithoutRecordsInput>, CoinUncheckedUpdateWithoutRecordsInput>
  }

  export type UserCreateNestedOneWithoutAlertsInput = {
    create?: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertsInput
    connect?: UserWhereUniqueInput
  }

  export type CoinCreateNestedOneWithoutAlertsInput = {
    create?: XOR<CoinCreateWithoutAlertsInput, CoinUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: CoinCreateOrConnectWithoutAlertsInput
    connect?: CoinWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertsInput
    upsert?: UserUpsertWithoutAlertsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAlertsInput, UserUpdateWithoutAlertsInput>, UserUncheckedUpdateWithoutAlertsInput>
  }

  export type CoinUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<CoinCreateWithoutAlertsInput, CoinUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: CoinCreateOrConnectWithoutAlertsInput
    upsert?: CoinUpsertWithoutAlertsInput
    connect?: CoinWhereUniqueInput
    update?: XOR<XOR<CoinUpdateToOneWithWhereWithoutAlertsInput, CoinUpdateWithoutAlertsInput>, CoinUncheckedUpdateWithoutAlertsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserSettingsCreateWithoutUserInput = {
    currency?: string
    dark_mode?: boolean
  }

  export type UserSettingsUncheckedCreateWithoutUserInput = {
    currency?: string
    dark_mode?: boolean
  }

  export type UserSettingsCreateOrConnectWithoutUserInput = {
    where: UserSettingsWhereUniqueInput
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
  }

  export type PortfolioEntryCreateWithoutUserInput = {
    amount: number
    coin: CoinCreateNestedOneWithoutPortfolioInput
  }

  export type PortfolioEntryUncheckedCreateWithoutUserInput = {
    entry_id?: number
    amount: number
    coin_id: number
  }

  export type PortfolioEntryCreateOrConnectWithoutUserInput = {
    where: PortfolioEntryWhereUniqueInput
    create: XOR<PortfolioEntryCreateWithoutUserInput, PortfolioEntryUncheckedCreateWithoutUserInput>
  }

  export type PortfolioEntryCreateManyUserInputEnvelope = {
    data: PortfolioEntryCreateManyUserInput | PortfolioEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AlertCreateWithoutUserInput = {
    floor_price?: number | null
    ceiling_price?: number | null
    coin: CoinCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateWithoutUserInput = {
    alert_id?: number
    floor_price?: number | null
    ceiling_price?: number | null
    coin_id: number
  }

  export type AlertCreateOrConnectWithoutUserInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput>
  }

  export type AlertCreateManyUserInputEnvelope = {
    data: AlertCreateManyUserInput | AlertCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TrackRecordCreateWithoutUserInput = {
    amount: number
    action: string
    datetime?: Date | string
    coin: CoinCreateNestedOneWithoutRecordsInput
  }

  export type TrackRecordUncheckedCreateWithoutUserInput = {
    track_record_id?: number
    amount: number
    action: string
    datetime?: Date | string
    coin_id: number
  }

  export type TrackRecordCreateOrConnectWithoutUserInput = {
    where: TrackRecordWhereUniqueInput
    create: XOR<TrackRecordCreateWithoutUserInput, TrackRecordUncheckedCreateWithoutUserInput>
  }

  export type TrackRecordCreateManyUserInputEnvelope = {
    data: TrackRecordCreateManyUserInput | TrackRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSettingsUpsertWithoutUserInput = {
    update: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    where?: UserSettingsWhereInput
  }

  export type UserSettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: UserSettingsWhereInput
    data: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserSettingsUpdateWithoutUserInput = {
    currency?: StringFieldUpdateOperationsInput | string
    dark_mode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserSettingsUncheckedUpdateWithoutUserInput = {
    currency?: StringFieldUpdateOperationsInput | string
    dark_mode?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PortfolioEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: PortfolioEntryWhereUniqueInput
    update: XOR<PortfolioEntryUpdateWithoutUserInput, PortfolioEntryUncheckedUpdateWithoutUserInput>
    create: XOR<PortfolioEntryCreateWithoutUserInput, PortfolioEntryUncheckedCreateWithoutUserInput>
  }

  export type PortfolioEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: PortfolioEntryWhereUniqueInput
    data: XOR<PortfolioEntryUpdateWithoutUserInput, PortfolioEntryUncheckedUpdateWithoutUserInput>
  }

  export type PortfolioEntryUpdateManyWithWhereWithoutUserInput = {
    where: PortfolioEntryScalarWhereInput
    data: XOR<PortfolioEntryUpdateManyMutationInput, PortfolioEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type PortfolioEntryScalarWhereInput = {
    AND?: PortfolioEntryScalarWhereInput | PortfolioEntryScalarWhereInput[]
    OR?: PortfolioEntryScalarWhereInput[]
    NOT?: PortfolioEntryScalarWhereInput | PortfolioEntryScalarWhereInput[]
    entry_id?: IntFilter<"PortfolioEntry"> | number
    amount?: FloatFilter<"PortfolioEntry"> | number
    user_id?: IntFilter<"PortfolioEntry"> | number
    coin_id?: IntFilter<"PortfolioEntry"> | number
  }

  export type AlertUpsertWithWhereUniqueWithoutUserInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutUserInput, AlertUncheckedUpdateWithoutUserInput>
    create: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutUserInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutUserInput, AlertUncheckedUpdateWithoutUserInput>
  }

  export type AlertUpdateManyWithWhereWithoutUserInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutUserInput>
  }

  export type AlertScalarWhereInput = {
    AND?: AlertScalarWhereInput | AlertScalarWhereInput[]
    OR?: AlertScalarWhereInput[]
    NOT?: AlertScalarWhereInput | AlertScalarWhereInput[]
    alert_id?: IntFilter<"Alert"> | number
    floor_price?: IntNullableFilter<"Alert"> | number | null
    ceiling_price?: IntNullableFilter<"Alert"> | number | null
    user_id?: IntFilter<"Alert"> | number
    coin_id?: IntFilter<"Alert"> | number
  }

  export type TrackRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: TrackRecordWhereUniqueInput
    update: XOR<TrackRecordUpdateWithoutUserInput, TrackRecordUncheckedUpdateWithoutUserInput>
    create: XOR<TrackRecordCreateWithoutUserInput, TrackRecordUncheckedCreateWithoutUserInput>
  }

  export type TrackRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: TrackRecordWhereUniqueInput
    data: XOR<TrackRecordUpdateWithoutUserInput, TrackRecordUncheckedUpdateWithoutUserInput>
  }

  export type TrackRecordUpdateManyWithWhereWithoutUserInput = {
    where: TrackRecordScalarWhereInput
    data: XOR<TrackRecordUpdateManyMutationInput, TrackRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type TrackRecordScalarWhereInput = {
    AND?: TrackRecordScalarWhereInput | TrackRecordScalarWhereInput[]
    OR?: TrackRecordScalarWhereInput[]
    NOT?: TrackRecordScalarWhereInput | TrackRecordScalarWhereInput[]
    track_record_id?: IntFilter<"TrackRecord"> | number
    amount?: FloatFilter<"TrackRecord"> | number
    action?: StringFilter<"TrackRecord"> | string
    datetime?: DateTimeFilter<"TrackRecord"> | Date | string
    user_id?: IntFilter<"TrackRecord"> | number
    coin_id?: IntFilter<"TrackRecord"> | number
  }

  export type UserCreateWithoutSettingsInput = {
    email: string
    password?: string
    displayName?: string | null
    photoUrl?: string | null
    portfolio?: PortfolioEntryCreateNestedManyWithoutUserInput
    alerts?: AlertCreateNestedManyWithoutUserInput
    records?: TrackRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSettingsInput = {
    user_id?: number
    email: string
    password?: string
    displayName?: string | null
    photoUrl?: string | null
    portfolio?: PortfolioEntryUncheckedCreateNestedManyWithoutUserInput
    alerts?: AlertUncheckedCreateNestedManyWithoutUserInput
    records?: TrackRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
  }

  export type UserUpsertWithoutSettingsInput = {
    update: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserUpdateWithoutSettingsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: PortfolioEntryUpdateManyWithoutUserNestedInput
    alerts?: AlertUpdateManyWithoutUserNestedInput
    records?: TrackRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettingsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio?: PortfolioEntryUncheckedUpdateManyWithoutUserNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutUserNestedInput
    records?: TrackRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PortfolioEntryCreateWithoutCoinInput = {
    amount: number
    user: UserCreateNestedOneWithoutPortfolioInput
  }

  export type PortfolioEntryUncheckedCreateWithoutCoinInput = {
    entry_id?: number
    amount: number
    user_id: number
  }

  export type PortfolioEntryCreateOrConnectWithoutCoinInput = {
    where: PortfolioEntryWhereUniqueInput
    create: XOR<PortfolioEntryCreateWithoutCoinInput, PortfolioEntryUncheckedCreateWithoutCoinInput>
  }

  export type PortfolioEntryCreateManyCoinInputEnvelope = {
    data: PortfolioEntryCreateManyCoinInput | PortfolioEntryCreateManyCoinInput[]
    skipDuplicates?: boolean
  }

  export type AlertCreateWithoutCoinInput = {
    floor_price?: number | null
    ceiling_price?: number | null
    user: UserCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateWithoutCoinInput = {
    alert_id?: number
    floor_price?: number | null
    ceiling_price?: number | null
    user_id: number
  }

  export type AlertCreateOrConnectWithoutCoinInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutCoinInput, AlertUncheckedCreateWithoutCoinInput>
  }

  export type AlertCreateManyCoinInputEnvelope = {
    data: AlertCreateManyCoinInput | AlertCreateManyCoinInput[]
    skipDuplicates?: boolean
  }

  export type TrackRecordCreateWithoutCoinInput = {
    amount: number
    action: string
    datetime?: Date | string
    user: UserCreateNestedOneWithoutRecordsInput
  }

  export type TrackRecordUncheckedCreateWithoutCoinInput = {
    track_record_id?: number
    amount: number
    action: string
    datetime?: Date | string
    user_id: number
  }

  export type TrackRecordCreateOrConnectWithoutCoinInput = {
    where: TrackRecordWhereUniqueInput
    create: XOR<TrackRecordCreateWithoutCoinInput, TrackRecordUncheckedCreateWithoutCoinInput>
  }

  export type TrackRecordCreateManyCoinInputEnvelope = {
    data: TrackRecordCreateManyCoinInput | TrackRecordCreateManyCoinInput[]
    skipDuplicates?: boolean
  }

  export type PortfolioEntryUpsertWithWhereUniqueWithoutCoinInput = {
    where: PortfolioEntryWhereUniqueInput
    update: XOR<PortfolioEntryUpdateWithoutCoinInput, PortfolioEntryUncheckedUpdateWithoutCoinInput>
    create: XOR<PortfolioEntryCreateWithoutCoinInput, PortfolioEntryUncheckedCreateWithoutCoinInput>
  }

  export type PortfolioEntryUpdateWithWhereUniqueWithoutCoinInput = {
    where: PortfolioEntryWhereUniqueInput
    data: XOR<PortfolioEntryUpdateWithoutCoinInput, PortfolioEntryUncheckedUpdateWithoutCoinInput>
  }

  export type PortfolioEntryUpdateManyWithWhereWithoutCoinInput = {
    where: PortfolioEntryScalarWhereInput
    data: XOR<PortfolioEntryUpdateManyMutationInput, PortfolioEntryUncheckedUpdateManyWithoutCoinInput>
  }

  export type AlertUpsertWithWhereUniqueWithoutCoinInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutCoinInput, AlertUncheckedUpdateWithoutCoinInput>
    create: XOR<AlertCreateWithoutCoinInput, AlertUncheckedCreateWithoutCoinInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutCoinInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutCoinInput, AlertUncheckedUpdateWithoutCoinInput>
  }

  export type AlertUpdateManyWithWhereWithoutCoinInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutCoinInput>
  }

  export type TrackRecordUpsertWithWhereUniqueWithoutCoinInput = {
    where: TrackRecordWhereUniqueInput
    update: XOR<TrackRecordUpdateWithoutCoinInput, TrackRecordUncheckedUpdateWithoutCoinInput>
    create: XOR<TrackRecordCreateWithoutCoinInput, TrackRecordUncheckedCreateWithoutCoinInput>
  }

  export type TrackRecordUpdateWithWhereUniqueWithoutCoinInput = {
    where: TrackRecordWhereUniqueInput
    data: XOR<TrackRecordUpdateWithoutCoinInput, TrackRecordUncheckedUpdateWithoutCoinInput>
  }

  export type TrackRecordUpdateManyWithWhereWithoutCoinInput = {
    where: TrackRecordScalarWhereInput
    data: XOR<TrackRecordUpdateManyMutationInput, TrackRecordUncheckedUpdateManyWithoutCoinInput>
  }

  export type UserCreateWithoutPortfolioInput = {
    email: string
    password?: string
    displayName?: string | null
    photoUrl?: string | null
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    alerts?: AlertCreateNestedManyWithoutUserInput
    records?: TrackRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPortfolioInput = {
    user_id?: number
    email: string
    password?: string
    displayName?: string | null
    photoUrl?: string | null
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    alerts?: AlertUncheckedCreateNestedManyWithoutUserInput
    records?: TrackRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPortfolioInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPortfolioInput, UserUncheckedCreateWithoutPortfolioInput>
  }

  export type CoinCreateWithoutPortfolioInput = {
    name: string
    symbol: string
    slug: string
    cmc_rank: number
    price: number
    market_cap: number
    volume_24h: number
    percent_change_24h: number
    percent_change_7d: number
    last_updated: Date | string
    alerts?: AlertCreateNestedManyWithoutCoinInput
    records?: TrackRecordCreateNestedManyWithoutCoinInput
  }

  export type CoinUncheckedCreateWithoutPortfolioInput = {
    coin_id?: number
    name: string
    symbol: string
    slug: string
    cmc_rank: number
    price: number
    market_cap: number
    volume_24h: number
    percent_change_24h: number
    percent_change_7d: number
    last_updated: Date | string
    alerts?: AlertUncheckedCreateNestedManyWithoutCoinInput
    records?: TrackRecordUncheckedCreateNestedManyWithoutCoinInput
  }

  export type CoinCreateOrConnectWithoutPortfolioInput = {
    where: CoinWhereUniqueInput
    create: XOR<CoinCreateWithoutPortfolioInput, CoinUncheckedCreateWithoutPortfolioInput>
  }

  export type UserUpsertWithoutPortfolioInput = {
    update: XOR<UserUpdateWithoutPortfolioInput, UserUncheckedUpdateWithoutPortfolioInput>
    create: XOR<UserCreateWithoutPortfolioInput, UserUncheckedCreateWithoutPortfolioInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPortfolioInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPortfolioInput, UserUncheckedUpdateWithoutPortfolioInput>
  }

  export type UserUpdateWithoutPortfolioInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    alerts?: AlertUpdateManyWithoutUserNestedInput
    records?: TrackRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPortfolioInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutUserNestedInput
    records?: TrackRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CoinUpsertWithoutPortfolioInput = {
    update: XOR<CoinUpdateWithoutPortfolioInput, CoinUncheckedUpdateWithoutPortfolioInput>
    create: XOR<CoinCreateWithoutPortfolioInput, CoinUncheckedCreateWithoutPortfolioInput>
    where?: CoinWhereInput
  }

  export type CoinUpdateToOneWithWhereWithoutPortfolioInput = {
    where?: CoinWhereInput
    data: XOR<CoinUpdateWithoutPortfolioInput, CoinUncheckedUpdateWithoutPortfolioInput>
  }

  export type CoinUpdateWithoutPortfolioInput = {
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cmc_rank?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    market_cap?: FloatFieldUpdateOperationsInput | number
    volume_24h?: FloatFieldUpdateOperationsInput | number
    percent_change_24h?: FloatFieldUpdateOperationsInput | number
    percent_change_7d?: FloatFieldUpdateOperationsInput | number
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUpdateManyWithoutCoinNestedInput
    records?: TrackRecordUpdateManyWithoutCoinNestedInput
  }

  export type CoinUncheckedUpdateWithoutPortfolioInput = {
    coin_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cmc_rank?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    market_cap?: FloatFieldUpdateOperationsInput | number
    volume_24h?: FloatFieldUpdateOperationsInput | number
    percent_change_24h?: FloatFieldUpdateOperationsInput | number
    percent_change_7d?: FloatFieldUpdateOperationsInput | number
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUncheckedUpdateManyWithoutCoinNestedInput
    records?: TrackRecordUncheckedUpdateManyWithoutCoinNestedInput
  }

  export type UserCreateWithoutRecordsInput = {
    email: string
    password?: string
    displayName?: string | null
    photoUrl?: string | null
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    portfolio?: PortfolioEntryCreateNestedManyWithoutUserInput
    alerts?: AlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecordsInput = {
    user_id?: number
    email: string
    password?: string
    displayName?: string | null
    photoUrl?: string | null
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    portfolio?: PortfolioEntryUncheckedCreateNestedManyWithoutUserInput
    alerts?: AlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
  }

  export type CoinCreateWithoutRecordsInput = {
    name: string
    symbol: string
    slug: string
    cmc_rank: number
    price: number
    market_cap: number
    volume_24h: number
    percent_change_24h: number
    percent_change_7d: number
    last_updated: Date | string
    portfolio?: PortfolioEntryCreateNestedManyWithoutCoinInput
    alerts?: AlertCreateNestedManyWithoutCoinInput
  }

  export type CoinUncheckedCreateWithoutRecordsInput = {
    coin_id?: number
    name: string
    symbol: string
    slug: string
    cmc_rank: number
    price: number
    market_cap: number
    volume_24h: number
    percent_change_24h: number
    percent_change_7d: number
    last_updated: Date | string
    portfolio?: PortfolioEntryUncheckedCreateNestedManyWithoutCoinInput
    alerts?: AlertUncheckedCreateNestedManyWithoutCoinInput
  }

  export type CoinCreateOrConnectWithoutRecordsInput = {
    where: CoinWhereUniqueInput
    create: XOR<CoinCreateWithoutRecordsInput, CoinUncheckedCreateWithoutRecordsInput>
  }

  export type UserUpsertWithoutRecordsInput = {
    update: XOR<UserUpdateWithoutRecordsInput, UserUncheckedUpdateWithoutRecordsInput>
    create: XOR<UserCreateWithoutRecordsInput, UserUncheckedCreateWithoutRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecordsInput, UserUncheckedUpdateWithoutRecordsInput>
  }

  export type UserUpdateWithoutRecordsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    portfolio?: PortfolioEntryUpdateManyWithoutUserNestedInput
    alerts?: AlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecordsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    portfolio?: PortfolioEntryUncheckedUpdateManyWithoutUserNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CoinUpsertWithoutRecordsInput = {
    update: XOR<CoinUpdateWithoutRecordsInput, CoinUncheckedUpdateWithoutRecordsInput>
    create: XOR<CoinCreateWithoutRecordsInput, CoinUncheckedCreateWithoutRecordsInput>
    where?: CoinWhereInput
  }

  export type CoinUpdateToOneWithWhereWithoutRecordsInput = {
    where?: CoinWhereInput
    data: XOR<CoinUpdateWithoutRecordsInput, CoinUncheckedUpdateWithoutRecordsInput>
  }

  export type CoinUpdateWithoutRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cmc_rank?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    market_cap?: FloatFieldUpdateOperationsInput | number
    volume_24h?: FloatFieldUpdateOperationsInput | number
    percent_change_24h?: FloatFieldUpdateOperationsInput | number
    percent_change_7d?: FloatFieldUpdateOperationsInput | number
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioEntryUpdateManyWithoutCoinNestedInput
    alerts?: AlertUpdateManyWithoutCoinNestedInput
  }

  export type CoinUncheckedUpdateWithoutRecordsInput = {
    coin_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cmc_rank?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    market_cap?: FloatFieldUpdateOperationsInput | number
    volume_24h?: FloatFieldUpdateOperationsInput | number
    percent_change_24h?: FloatFieldUpdateOperationsInput | number
    percent_change_7d?: FloatFieldUpdateOperationsInput | number
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioEntryUncheckedUpdateManyWithoutCoinNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutCoinNestedInput
  }

  export type UserCreateWithoutAlertsInput = {
    email: string
    password?: string
    displayName?: string | null
    photoUrl?: string | null
    settings?: UserSettingsCreateNestedOneWithoutUserInput
    portfolio?: PortfolioEntryCreateNestedManyWithoutUserInput
    records?: TrackRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAlertsInput = {
    user_id?: number
    email: string
    password?: string
    displayName?: string | null
    photoUrl?: string | null
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
    portfolio?: PortfolioEntryUncheckedCreateNestedManyWithoutUserInput
    records?: TrackRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAlertsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
  }

  export type CoinCreateWithoutAlertsInput = {
    name: string
    symbol: string
    slug: string
    cmc_rank: number
    price: number
    market_cap: number
    volume_24h: number
    percent_change_24h: number
    percent_change_7d: number
    last_updated: Date | string
    portfolio?: PortfolioEntryCreateNestedManyWithoutCoinInput
    records?: TrackRecordCreateNestedManyWithoutCoinInput
  }

  export type CoinUncheckedCreateWithoutAlertsInput = {
    coin_id?: number
    name: string
    symbol: string
    slug: string
    cmc_rank: number
    price: number
    market_cap: number
    volume_24h: number
    percent_change_24h: number
    percent_change_7d: number
    last_updated: Date | string
    portfolio?: PortfolioEntryUncheckedCreateNestedManyWithoutCoinInput
    records?: TrackRecordUncheckedCreateNestedManyWithoutCoinInput
  }

  export type CoinCreateOrConnectWithoutAlertsInput = {
    where: CoinWhereUniqueInput
    create: XOR<CoinCreateWithoutAlertsInput, CoinUncheckedCreateWithoutAlertsInput>
  }

  export type UserUpsertWithoutAlertsInput = {
    update: XOR<UserUpdateWithoutAlertsInput, UserUncheckedUpdateWithoutAlertsInput>
    create: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAlertsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAlertsInput, UserUncheckedUpdateWithoutAlertsInput>
  }

  export type UserUpdateWithoutAlertsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
    portfolio?: PortfolioEntryUpdateManyWithoutUserNestedInput
    records?: TrackRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAlertsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
    portfolio?: PortfolioEntryUncheckedUpdateManyWithoutUserNestedInput
    records?: TrackRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CoinUpsertWithoutAlertsInput = {
    update: XOR<CoinUpdateWithoutAlertsInput, CoinUncheckedUpdateWithoutAlertsInput>
    create: XOR<CoinCreateWithoutAlertsInput, CoinUncheckedCreateWithoutAlertsInput>
    where?: CoinWhereInput
  }

  export type CoinUpdateToOneWithWhereWithoutAlertsInput = {
    where?: CoinWhereInput
    data: XOR<CoinUpdateWithoutAlertsInput, CoinUncheckedUpdateWithoutAlertsInput>
  }

  export type CoinUpdateWithoutAlertsInput = {
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cmc_rank?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    market_cap?: FloatFieldUpdateOperationsInput | number
    volume_24h?: FloatFieldUpdateOperationsInput | number
    percent_change_24h?: FloatFieldUpdateOperationsInput | number
    percent_change_7d?: FloatFieldUpdateOperationsInput | number
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioEntryUpdateManyWithoutCoinNestedInput
    records?: TrackRecordUpdateManyWithoutCoinNestedInput
  }

  export type CoinUncheckedUpdateWithoutAlertsInput = {
    coin_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cmc_rank?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    market_cap?: FloatFieldUpdateOperationsInput | number
    volume_24h?: FloatFieldUpdateOperationsInput | number
    percent_change_24h?: FloatFieldUpdateOperationsInput | number
    percent_change_7d?: FloatFieldUpdateOperationsInput | number
    last_updated?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioEntryUncheckedUpdateManyWithoutCoinNestedInput
    records?: TrackRecordUncheckedUpdateManyWithoutCoinNestedInput
  }

  export type PortfolioEntryCreateManyUserInput = {
    entry_id?: number
    amount: number
    coin_id: number
  }

  export type AlertCreateManyUserInput = {
    alert_id?: number
    floor_price?: number | null
    ceiling_price?: number | null
    coin_id: number
  }

  export type TrackRecordCreateManyUserInput = {
    track_record_id?: number
    amount: number
    action: string
    datetime?: Date | string
    coin_id: number
  }

  export type PortfolioEntryUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    coin?: CoinUpdateOneRequiredWithoutPortfolioNestedInput
  }

  export type PortfolioEntryUncheckedUpdateWithoutUserInput = {
    entry_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    coin_id?: IntFieldUpdateOperationsInput | number
  }

  export type PortfolioEntryUncheckedUpdateManyWithoutUserInput = {
    entry_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    coin_id?: IntFieldUpdateOperationsInput | number
  }

  export type AlertUpdateWithoutUserInput = {
    floor_price?: NullableIntFieldUpdateOperationsInput | number | null
    ceiling_price?: NullableIntFieldUpdateOperationsInput | number | null
    coin?: CoinUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateWithoutUserInput = {
    alert_id?: IntFieldUpdateOperationsInput | number
    floor_price?: NullableIntFieldUpdateOperationsInput | number | null
    ceiling_price?: NullableIntFieldUpdateOperationsInput | number | null
    coin_id?: IntFieldUpdateOperationsInput | number
  }

  export type AlertUncheckedUpdateManyWithoutUserInput = {
    alert_id?: IntFieldUpdateOperationsInput | number
    floor_price?: NullableIntFieldUpdateOperationsInput | number | null
    ceiling_price?: NullableIntFieldUpdateOperationsInput | number | null
    coin_id?: IntFieldUpdateOperationsInput | number
  }

  export type TrackRecordUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    coin?: CoinUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type TrackRecordUncheckedUpdateWithoutUserInput = {
    track_record_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    coin_id?: IntFieldUpdateOperationsInput | number
  }

  export type TrackRecordUncheckedUpdateManyWithoutUserInput = {
    track_record_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    coin_id?: IntFieldUpdateOperationsInput | number
  }

  export type PortfolioEntryCreateManyCoinInput = {
    entry_id?: number
    amount: number
    user_id: number
  }

  export type AlertCreateManyCoinInput = {
    alert_id?: number
    floor_price?: number | null
    ceiling_price?: number | null
    user_id: number
  }

  export type TrackRecordCreateManyCoinInput = {
    track_record_id?: number
    amount: number
    action: string
    datetime?: Date | string
    user_id: number
  }

  export type PortfolioEntryUpdateWithoutCoinInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutPortfolioNestedInput
  }

  export type PortfolioEntryUncheckedUpdateWithoutCoinInput = {
    entry_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type PortfolioEntryUncheckedUpdateManyWithoutCoinInput = {
    entry_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type AlertUpdateWithoutCoinInput = {
    floor_price?: NullableIntFieldUpdateOperationsInput | number | null
    ceiling_price?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateWithoutCoinInput = {
    alert_id?: IntFieldUpdateOperationsInput | number
    floor_price?: NullableIntFieldUpdateOperationsInput | number | null
    ceiling_price?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type AlertUncheckedUpdateManyWithoutCoinInput = {
    alert_id?: IntFieldUpdateOperationsInput | number
    floor_price?: NullableIntFieldUpdateOperationsInput | number | null
    ceiling_price?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type TrackRecordUpdateWithoutCoinInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type TrackRecordUncheckedUpdateWithoutCoinInput = {
    track_record_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type TrackRecordUncheckedUpdateManyWithoutCoinInput = {
    track_record_id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
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