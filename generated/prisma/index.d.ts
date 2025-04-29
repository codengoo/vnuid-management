
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
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model SessionCycle
 * 
 */
export type SessionCycle = $Result.DefaultSelection<Prisma.$SessionCyclePayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  Student: 'Student',
  Teacher: 'Teacher'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const RepeatType: {
  Weekly: 'Weekly'
};

export type RepeatType = (typeof RepeatType)[keyof typeof RepeatType]


export const AttendanceStatus: {
  Valid: 'Valid',
  Invalid: 'Invalid',
  Pending: 'Pending'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type RepeatType = $Enums.RepeatType

export const RepeatType: typeof $Enums.RepeatType

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

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
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionCycle`: Exposes CRUD operations for the **SessionCycle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionCycles
    * const sessionCycles = await prisma.sessionCycle.findMany()
    * ```
    */
  get sessionCycle(): Prisma.SessionCycleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Class: 'Class',
    Session: 'Session',
    SessionCycle: 'SessionCycle',
    Attendance: 'Attendance'
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
      modelProps: "user" | "class" | "session" | "sessionCycle" | "attendance"
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      SessionCycle: {
        payload: Prisma.$SessionCyclePayload<ExtArgs>
        fields: Prisma.SessionCycleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionCycleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCyclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionCycleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCyclePayload>
          }
          findFirst: {
            args: Prisma.SessionCycleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCyclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionCycleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCyclePayload>
          }
          findMany: {
            args: Prisma.SessionCycleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCyclePayload>[]
          }
          create: {
            args: Prisma.SessionCycleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCyclePayload>
          }
          createMany: {
            args: Prisma.SessionCycleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCycleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCyclePayload>[]
          }
          delete: {
            args: Prisma.SessionCycleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCyclePayload>
          }
          update: {
            args: Prisma.SessionCycleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCyclePayload>
          }
          deleteMany: {
            args: Prisma.SessionCycleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionCycleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionCycleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCyclePayload>[]
          }
          upsert: {
            args: Prisma.SessionCycleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionCyclePayload>
          }
          aggregate: {
            args: Prisma.SessionCycleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionCycle>
          }
          groupBy: {
            args: Prisma.SessionCycleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionCycleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCycleCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCycleCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
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
    class?: ClassOmit
    session?: SessionOmit
    sessionCycle?: SessionCycleOmit
    attendance?: AttendanceOmit
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
    host: number
    join: number
    attendances: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | UserCountOutputTypeCountHostArgs
    join?: boolean | UserCountOutputTypeCountJoinArgs
    attendances?: boolean | UserCountOutputTypeCountAttendancesArgs
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
  export type UserCountOutputTypeCountHostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJoinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    students: number
    session: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | ClassCountOutputTypeCountStudentsArgs
    session?: boolean | ClassCountOutputTypeCountSessionArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    SessionCycle: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SessionCycle?: boolean | SessionCountOutputTypeCountSessionCycleArgs
  }

  // Custom InputTypes
  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCountOutputType
     */
    select?: SessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountSessionCycleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionCycleWhereInput
  }


  /**
   * Count Type SessionCycleCountOutputType
   */

  export type SessionCycleCountOutputType = {
    Attendance: number
  }

  export type SessionCycleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Attendance?: boolean | SessionCycleCountOutputTypeCountAttendanceArgs
  }

  // Custom InputTypes
  /**
   * SessionCycleCountOutputType without action
   */
  export type SessionCycleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCycleCountOutputType
     */
    select?: SessionCycleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCycleCountOutputType without action
   */
  export type SessionCycleCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    sid: string | null
    gid: string | null
    password: string | null
    name: string | null
    dob: Date | null
    official_class: string | null
    authenticator: string | null
    biometric_key: string | null
    createdAt: Date | null
    updateAt: Date | null
    type: $Enums.UserType | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    sid: string | null
    gid: string | null
    password: string | null
    name: string | null
    dob: Date | null
    official_class: string | null
    authenticator: string | null
    biometric_key: string | null
    createdAt: Date | null
    updateAt: Date | null
    type: $Enums.UserType | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    sid: number
    gid: number
    password: number
    name: number
    dob: number
    official_class: number
    authenticator: number
    biometric_key: number
    createdAt: number
    updateAt: number
    type: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    sid?: true
    gid?: true
    password?: true
    name?: true
    dob?: true
    official_class?: true
    authenticator?: true
    biometric_key?: true
    createdAt?: true
    updateAt?: true
    type?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    sid?: true
    gid?: true
    password?: true
    name?: true
    dob?: true
    official_class?: true
    authenticator?: true
    biometric_key?: true
    createdAt?: true
    updateAt?: true
    type?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    sid?: true
    gid?: true
    password?: true
    name?: true
    dob?: true
    official_class?: true
    authenticator?: true
    biometric_key?: true
    createdAt?: true
    updateAt?: true
    type?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    sid: string
    gid: string
    password: string
    name: string
    dob: Date
    official_class: string
    authenticator: string
    biometric_key: string
    createdAt: Date
    updateAt: Date
    type: $Enums.UserType
    _count: UserCountAggregateOutputType | null
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
    id?: boolean
    email?: boolean
    sid?: boolean
    gid?: boolean
    password?: boolean
    name?: boolean
    dob?: boolean
    official_class?: boolean
    authenticator?: boolean
    biometric_key?: boolean
    createdAt?: boolean
    updateAt?: boolean
    type?: boolean
    host?: boolean | User$hostArgs<ExtArgs>
    join?: boolean | User$joinArgs<ExtArgs>
    attendances?: boolean | User$attendancesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    sid?: boolean
    gid?: boolean
    password?: boolean
    name?: boolean
    dob?: boolean
    official_class?: boolean
    authenticator?: boolean
    biometric_key?: boolean
    createdAt?: boolean
    updateAt?: boolean
    type?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    sid?: boolean
    gid?: boolean
    password?: boolean
    name?: boolean
    dob?: boolean
    official_class?: boolean
    authenticator?: boolean
    biometric_key?: boolean
    createdAt?: boolean
    updateAt?: boolean
    type?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    sid?: boolean
    gid?: boolean
    password?: boolean
    name?: boolean
    dob?: boolean
    official_class?: boolean
    authenticator?: boolean
    biometric_key?: boolean
    createdAt?: boolean
    updateAt?: boolean
    type?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "sid" | "gid" | "password" | "name" | "dob" | "official_class" | "authenticator" | "biometric_key" | "createdAt" | "updateAt" | "type", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | User$hostArgs<ExtArgs>
    join?: boolean | User$joinArgs<ExtArgs>
    attendances?: boolean | User$attendancesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      host: Prisma.$ClassPayload<ExtArgs>[]
      join: Prisma.$ClassPayload<ExtArgs>[]
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      sid: string
      gid: string
      password: string
      name: string
      dob: Date
      official_class: string
      authenticator: string
      biometric_key: string
      createdAt: Date
      updateAt: Date
      type: $Enums.UserType
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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    host<T extends User$hostArgs<ExtArgs> = {}>(args?: Subset<T, User$hostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    join<T extends User$joinArgs<ExtArgs> = {}>(args?: Subset<T, User$joinArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendances<T extends User$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, User$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly sid: FieldRef<"User", 'String'>
    readonly gid: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly dob: FieldRef<"User", 'DateTime'>
    readonly official_class: FieldRef<"User", 'String'>
    readonly authenticator: FieldRef<"User", 'String'>
    readonly biometric_key: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
    readonly type: FieldRef<"User", 'UserType'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User.host
   */
  export type User$hostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * User.join
   */
  export type User$joinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * User.attendances
   */
  export type User$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
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
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    openingDay: Date | null
    startTime: Date | null
    endTime: Date | null
    address: string | null
    teacherId: string | null
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    openingDay: Date | null
    startTime: Date | null
    endTime: Date | null
    address: string | null
    teacherId: string | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    code: number
    name: number
    openingDay: number
    startTime: number
    endTime: number
    address: number
    teacherId: number
    _all: number
  }


  export type ClassMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    openingDay?: true
    startTime?: true
    endTime?: true
    address?: true
    teacherId?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    openingDay?: true
    startTime?: true
    endTime?: true
    address?: true
    teacherId?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    openingDay?: true
    startTime?: true
    endTime?: true
    address?: true
    teacherId?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: string
    code: string
    name: string
    openingDay: Date
    startTime: Date
    endTime: Date
    address: string
    teacherId: string
    _count: ClassCountAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    openingDay?: boolean
    startTime?: boolean
    endTime?: boolean
    address?: boolean
    teacherId?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    students?: boolean | Class$studentsArgs<ExtArgs>
    session?: boolean | Class$sessionArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    openingDay?: boolean
    startTime?: boolean
    endTime?: boolean
    address?: boolean
    teacherId?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    openingDay?: boolean
    startTime?: boolean
    endTime?: boolean
    address?: boolean
    teacherId?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    openingDay?: boolean
    startTime?: boolean
    endTime?: boolean
    address?: boolean
    teacherId?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "openingDay" | "startTime" | "endTime" | "address" | "teacherId", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    students?: boolean | Class$studentsArgs<ExtArgs>
    session?: boolean | Class$sessionArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      teacher: Prisma.$UserPayload<ExtArgs>
      students: Prisma.$UserPayload<ExtArgs>[]
      session: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      openingDay: Date
      startTime: Date
      endTime: Date
      address: string
      teacherId: string
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes and returns the data updated in the database.
     * @param {ClassUpdateManyAndReturnArgs} args - Arguments to update many Classes.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
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
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends Class$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Class$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    session<T extends Class$sessionArgs<ExtArgs> = {}>(args?: Subset<T, Class$sessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'String'>
    readonly code: FieldRef<"Class", 'String'>
    readonly name: FieldRef<"Class", 'String'>
    readonly openingDay: FieldRef<"Class", 'DateTime'>
    readonly startTime: FieldRef<"Class", 'DateTime'>
    readonly endTime: FieldRef<"Class", 'DateTime'>
    readonly address: FieldRef<"Class", 'String'>
    readonly teacherId: FieldRef<"Class", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class updateManyAndReturn
   */
  export type ClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.students
   */
  export type Class$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Class.session
   */
  export type Class$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    duration: number | null
  }

  export type SessionSumAggregateOutputType = {
    duration: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    name: string | null
    start: Date | null
    duration: number | null
    repeat: $Enums.RepeatType | null
    classId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    start: Date | null
    duration: number | null
    repeat: $Enums.RepeatType | null
    classId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    name: number
    start: number
    duration: number
    repeat: number
    classId: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    duration?: true
  }

  export type SessionSumAggregateInputType = {
    duration?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    name?: true
    start?: true
    duration?: true
    repeat?: true
    classId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    name?: true
    start?: true
    duration?: true
    repeat?: true
    classId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    name?: true
    start?: true
    duration?: true
    repeat?: true
    classId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    name: string
    start: Date
    duration: number
    repeat: $Enums.RepeatType
    classId: string
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    start?: boolean
    duration?: boolean
    repeat?: boolean
    classId?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    SessionCycle?: boolean | Session$SessionCycleArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    start?: boolean
    duration?: boolean
    repeat?: boolean
    classId?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    start?: boolean
    duration?: boolean
    repeat?: boolean
    classId?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    name?: boolean
    start?: boolean
    duration?: boolean
    repeat?: boolean
    classId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "start" | "duration" | "repeat" | "classId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    SessionCycle?: boolean | Session$SessionCycleArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      SessionCycle: Prisma.$SessionCyclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      start: Date
      duration: number
      repeat: $Enums.RepeatType
      classId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    SessionCycle<T extends Session$SessionCycleArgs<ExtArgs> = {}>(args?: Subset<T, Session$SessionCycleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionCyclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly name: FieldRef<"Session", 'String'>
    readonly start: FieldRef<"Session", 'DateTime'>
    readonly duration: FieldRef<"Session", 'Int'>
    readonly repeat: FieldRef<"Session", 'RepeatType'>
    readonly classId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session.SessionCycle
   */
  export type Session$SessionCycleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCycle
     */
    select?: SessionCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCycle
     */
    omit?: SessionCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCycleInclude<ExtArgs> | null
    where?: SessionCycleWhereInput
    orderBy?: SessionCycleOrderByWithRelationInput | SessionCycleOrderByWithRelationInput[]
    cursor?: SessionCycleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionCycleScalarFieldEnum | SessionCycleScalarFieldEnum[]
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model SessionCycle
   */

  export type AggregateSessionCycle = {
    _count: SessionCycleCountAggregateOutputType | null
    _min: SessionCycleMinAggregateOutputType | null
    _max: SessionCycleMaxAggregateOutputType | null
  }

  export type SessionCycleMinAggregateOutputType = {
    id: string | null
    start: Date | null
    sessionId: string | null
  }

  export type SessionCycleMaxAggregateOutputType = {
    id: string | null
    start: Date | null
    sessionId: string | null
  }

  export type SessionCycleCountAggregateOutputType = {
    id: number
    start: number
    sessionId: number
    _all: number
  }


  export type SessionCycleMinAggregateInputType = {
    id?: true
    start?: true
    sessionId?: true
  }

  export type SessionCycleMaxAggregateInputType = {
    id?: true
    start?: true
    sessionId?: true
  }

  export type SessionCycleCountAggregateInputType = {
    id?: true
    start?: true
    sessionId?: true
    _all?: true
  }

  export type SessionCycleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionCycle to aggregate.
     */
    where?: SessionCycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionCycles to fetch.
     */
    orderBy?: SessionCycleOrderByWithRelationInput | SessionCycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionCycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionCycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionCycles
    **/
    _count?: true | SessionCycleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionCycleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionCycleMaxAggregateInputType
  }

  export type GetSessionCycleAggregateType<T extends SessionCycleAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionCycle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionCycle[P]>
      : GetScalarType<T[P], AggregateSessionCycle[P]>
  }




  export type SessionCycleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionCycleWhereInput
    orderBy?: SessionCycleOrderByWithAggregationInput | SessionCycleOrderByWithAggregationInput[]
    by: SessionCycleScalarFieldEnum[] | SessionCycleScalarFieldEnum
    having?: SessionCycleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCycleCountAggregateInputType | true
    _min?: SessionCycleMinAggregateInputType
    _max?: SessionCycleMaxAggregateInputType
  }

  export type SessionCycleGroupByOutputType = {
    id: string
    start: Date
    sessionId: string
    _count: SessionCycleCountAggregateOutputType | null
    _min: SessionCycleMinAggregateOutputType | null
    _max: SessionCycleMaxAggregateOutputType | null
  }

  type GetSessionCycleGroupByPayload<T extends SessionCycleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionCycleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionCycleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionCycleGroupByOutputType[P]>
            : GetScalarType<T[P], SessionCycleGroupByOutputType[P]>
        }
      >
    >


  export type SessionCycleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    sessionId?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    Attendance?: boolean | SessionCycle$AttendanceArgs<ExtArgs>
    _count?: boolean | SessionCycleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionCycle"]>

  export type SessionCycleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    sessionId?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionCycle"]>

  export type SessionCycleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    sessionId?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionCycle"]>

  export type SessionCycleSelectScalar = {
    id?: boolean
    start?: boolean
    sessionId?: boolean
  }

  export type SessionCycleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "start" | "sessionId", ExtArgs["result"]["sessionCycle"]>
  export type SessionCycleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    Attendance?: boolean | SessionCycle$AttendanceArgs<ExtArgs>
    _count?: boolean | SessionCycleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionCycleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type SessionCycleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }

  export type $SessionCyclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionCycle"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
      Attendance: Prisma.$AttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      start: Date
      sessionId: string
    }, ExtArgs["result"]["sessionCycle"]>
    composites: {}
  }

  type SessionCycleGetPayload<S extends boolean | null | undefined | SessionCycleDefaultArgs> = $Result.GetResult<Prisma.$SessionCyclePayload, S>

  type SessionCycleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionCycleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCycleCountAggregateInputType | true
    }

  export interface SessionCycleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionCycle'], meta: { name: 'SessionCycle' } }
    /**
     * Find zero or one SessionCycle that matches the filter.
     * @param {SessionCycleFindUniqueArgs} args - Arguments to find a SessionCycle
     * @example
     * // Get one SessionCycle
     * const sessionCycle = await prisma.sessionCycle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionCycleFindUniqueArgs>(args: SelectSubset<T, SessionCycleFindUniqueArgs<ExtArgs>>): Prisma__SessionCycleClient<$Result.GetResult<Prisma.$SessionCyclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionCycle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionCycleFindUniqueOrThrowArgs} args - Arguments to find a SessionCycle
     * @example
     * // Get one SessionCycle
     * const sessionCycle = await prisma.sessionCycle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionCycleFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionCycleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionCycleClient<$Result.GetResult<Prisma.$SessionCyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionCycle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCycleFindFirstArgs} args - Arguments to find a SessionCycle
     * @example
     * // Get one SessionCycle
     * const sessionCycle = await prisma.sessionCycle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionCycleFindFirstArgs>(args?: SelectSubset<T, SessionCycleFindFirstArgs<ExtArgs>>): Prisma__SessionCycleClient<$Result.GetResult<Prisma.$SessionCyclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionCycle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCycleFindFirstOrThrowArgs} args - Arguments to find a SessionCycle
     * @example
     * // Get one SessionCycle
     * const sessionCycle = await prisma.sessionCycle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionCycleFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionCycleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionCycleClient<$Result.GetResult<Prisma.$SessionCyclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionCycles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCycleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionCycles
     * const sessionCycles = await prisma.sessionCycle.findMany()
     * 
     * // Get first 10 SessionCycles
     * const sessionCycles = await prisma.sessionCycle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionCycleWithIdOnly = await prisma.sessionCycle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionCycleFindManyArgs>(args?: SelectSubset<T, SessionCycleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionCyclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionCycle.
     * @param {SessionCycleCreateArgs} args - Arguments to create a SessionCycle.
     * @example
     * // Create one SessionCycle
     * const SessionCycle = await prisma.sessionCycle.create({
     *   data: {
     *     // ... data to create a SessionCycle
     *   }
     * })
     * 
     */
    create<T extends SessionCycleCreateArgs>(args: SelectSubset<T, SessionCycleCreateArgs<ExtArgs>>): Prisma__SessionCycleClient<$Result.GetResult<Prisma.$SessionCyclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionCycles.
     * @param {SessionCycleCreateManyArgs} args - Arguments to create many SessionCycles.
     * @example
     * // Create many SessionCycles
     * const sessionCycle = await prisma.sessionCycle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCycleCreateManyArgs>(args?: SelectSubset<T, SessionCycleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionCycles and returns the data saved in the database.
     * @param {SessionCycleCreateManyAndReturnArgs} args - Arguments to create many SessionCycles.
     * @example
     * // Create many SessionCycles
     * const sessionCycle = await prisma.sessionCycle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionCycles and only return the `id`
     * const sessionCycleWithIdOnly = await prisma.sessionCycle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCycleCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCycleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionCyclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionCycle.
     * @param {SessionCycleDeleteArgs} args - Arguments to delete one SessionCycle.
     * @example
     * // Delete one SessionCycle
     * const SessionCycle = await prisma.sessionCycle.delete({
     *   where: {
     *     // ... filter to delete one SessionCycle
     *   }
     * })
     * 
     */
    delete<T extends SessionCycleDeleteArgs>(args: SelectSubset<T, SessionCycleDeleteArgs<ExtArgs>>): Prisma__SessionCycleClient<$Result.GetResult<Prisma.$SessionCyclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionCycle.
     * @param {SessionCycleUpdateArgs} args - Arguments to update one SessionCycle.
     * @example
     * // Update one SessionCycle
     * const sessionCycle = await prisma.sessionCycle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionCycleUpdateArgs>(args: SelectSubset<T, SessionCycleUpdateArgs<ExtArgs>>): Prisma__SessionCycleClient<$Result.GetResult<Prisma.$SessionCyclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionCycles.
     * @param {SessionCycleDeleteManyArgs} args - Arguments to filter SessionCycles to delete.
     * @example
     * // Delete a few SessionCycles
     * const { count } = await prisma.sessionCycle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionCycleDeleteManyArgs>(args?: SelectSubset<T, SessionCycleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionCycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCycleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionCycles
     * const sessionCycle = await prisma.sessionCycle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionCycleUpdateManyArgs>(args: SelectSubset<T, SessionCycleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionCycles and returns the data updated in the database.
     * @param {SessionCycleUpdateManyAndReturnArgs} args - Arguments to update many SessionCycles.
     * @example
     * // Update many SessionCycles
     * const sessionCycle = await prisma.sessionCycle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionCycles and only return the `id`
     * const sessionCycleWithIdOnly = await prisma.sessionCycle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionCycleUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionCycleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionCyclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionCycle.
     * @param {SessionCycleUpsertArgs} args - Arguments to update or create a SessionCycle.
     * @example
     * // Update or create a SessionCycle
     * const sessionCycle = await prisma.sessionCycle.upsert({
     *   create: {
     *     // ... data to create a SessionCycle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionCycle we want to update
     *   }
     * })
     */
    upsert<T extends SessionCycleUpsertArgs>(args: SelectSubset<T, SessionCycleUpsertArgs<ExtArgs>>): Prisma__SessionCycleClient<$Result.GetResult<Prisma.$SessionCyclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionCycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCycleCountArgs} args - Arguments to filter SessionCycles to count.
     * @example
     * // Count the number of SessionCycles
     * const count = await prisma.sessionCycle.count({
     *   where: {
     *     // ... the filter for the SessionCycles we want to count
     *   }
     * })
    **/
    count<T extends SessionCycleCountArgs>(
      args?: Subset<T, SessionCycleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCycleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionCycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCycleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionCycleAggregateArgs>(args: Subset<T, SessionCycleAggregateArgs>): Prisma.PrismaPromise<GetSessionCycleAggregateType<T>>

    /**
     * Group by SessionCycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCycleGroupByArgs} args - Group by arguments.
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
      T extends SessionCycleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionCycleGroupByArgs['orderBy'] }
        : { orderBy?: SessionCycleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionCycleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionCycleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionCycle model
   */
  readonly fields: SessionCycleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionCycle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionCycleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Attendance<T extends SessionCycle$AttendanceArgs<ExtArgs> = {}>(args?: Subset<T, SessionCycle$AttendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SessionCycle model
   */
  interface SessionCycleFieldRefs {
    readonly id: FieldRef<"SessionCycle", 'String'>
    readonly start: FieldRef<"SessionCycle", 'DateTime'>
    readonly sessionId: FieldRef<"SessionCycle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SessionCycle findUnique
   */
  export type SessionCycleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCycle
     */
    select?: SessionCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCycle
     */
    omit?: SessionCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCycleInclude<ExtArgs> | null
    /**
     * Filter, which SessionCycle to fetch.
     */
    where: SessionCycleWhereUniqueInput
  }

  /**
   * SessionCycle findUniqueOrThrow
   */
  export type SessionCycleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCycle
     */
    select?: SessionCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCycle
     */
    omit?: SessionCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCycleInclude<ExtArgs> | null
    /**
     * Filter, which SessionCycle to fetch.
     */
    where: SessionCycleWhereUniqueInput
  }

  /**
   * SessionCycle findFirst
   */
  export type SessionCycleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCycle
     */
    select?: SessionCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCycle
     */
    omit?: SessionCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCycleInclude<ExtArgs> | null
    /**
     * Filter, which SessionCycle to fetch.
     */
    where?: SessionCycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionCycles to fetch.
     */
    orderBy?: SessionCycleOrderByWithRelationInput | SessionCycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionCycles.
     */
    cursor?: SessionCycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionCycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionCycles.
     */
    distinct?: SessionCycleScalarFieldEnum | SessionCycleScalarFieldEnum[]
  }

  /**
   * SessionCycle findFirstOrThrow
   */
  export type SessionCycleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCycle
     */
    select?: SessionCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCycle
     */
    omit?: SessionCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCycleInclude<ExtArgs> | null
    /**
     * Filter, which SessionCycle to fetch.
     */
    where?: SessionCycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionCycles to fetch.
     */
    orderBy?: SessionCycleOrderByWithRelationInput | SessionCycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionCycles.
     */
    cursor?: SessionCycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionCycles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionCycles.
     */
    distinct?: SessionCycleScalarFieldEnum | SessionCycleScalarFieldEnum[]
  }

  /**
   * SessionCycle findMany
   */
  export type SessionCycleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCycle
     */
    select?: SessionCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCycle
     */
    omit?: SessionCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCycleInclude<ExtArgs> | null
    /**
     * Filter, which SessionCycles to fetch.
     */
    where?: SessionCycleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionCycles to fetch.
     */
    orderBy?: SessionCycleOrderByWithRelationInput | SessionCycleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionCycles.
     */
    cursor?: SessionCycleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionCycles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionCycles.
     */
    skip?: number
    distinct?: SessionCycleScalarFieldEnum | SessionCycleScalarFieldEnum[]
  }

  /**
   * SessionCycle create
   */
  export type SessionCycleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCycle
     */
    select?: SessionCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCycle
     */
    omit?: SessionCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCycleInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionCycle.
     */
    data: XOR<SessionCycleCreateInput, SessionCycleUncheckedCreateInput>
  }

  /**
   * SessionCycle createMany
   */
  export type SessionCycleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionCycles.
     */
    data: SessionCycleCreateManyInput | SessionCycleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionCycle createManyAndReturn
   */
  export type SessionCycleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCycle
     */
    select?: SessionCycleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCycle
     */
    omit?: SessionCycleOmit<ExtArgs> | null
    /**
     * The data used to create many SessionCycles.
     */
    data: SessionCycleCreateManyInput | SessionCycleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCycleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionCycle update
   */
  export type SessionCycleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCycle
     */
    select?: SessionCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCycle
     */
    omit?: SessionCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCycleInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionCycle.
     */
    data: XOR<SessionCycleUpdateInput, SessionCycleUncheckedUpdateInput>
    /**
     * Choose, which SessionCycle to update.
     */
    where: SessionCycleWhereUniqueInput
  }

  /**
   * SessionCycle updateMany
   */
  export type SessionCycleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionCycles.
     */
    data: XOR<SessionCycleUpdateManyMutationInput, SessionCycleUncheckedUpdateManyInput>
    /**
     * Filter which SessionCycles to update
     */
    where?: SessionCycleWhereInput
    /**
     * Limit how many SessionCycles to update.
     */
    limit?: number
  }

  /**
   * SessionCycle updateManyAndReturn
   */
  export type SessionCycleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCycle
     */
    select?: SessionCycleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCycle
     */
    omit?: SessionCycleOmit<ExtArgs> | null
    /**
     * The data used to update SessionCycles.
     */
    data: XOR<SessionCycleUpdateManyMutationInput, SessionCycleUncheckedUpdateManyInput>
    /**
     * Filter which SessionCycles to update
     */
    where?: SessionCycleWhereInput
    /**
     * Limit how many SessionCycles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCycleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionCycle upsert
   */
  export type SessionCycleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCycle
     */
    select?: SessionCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCycle
     */
    omit?: SessionCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCycleInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionCycle to update in case it exists.
     */
    where: SessionCycleWhereUniqueInput
    /**
     * In case the SessionCycle found by the `where` argument doesn't exist, create a new SessionCycle with this data.
     */
    create: XOR<SessionCycleCreateInput, SessionCycleUncheckedCreateInput>
    /**
     * In case the SessionCycle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionCycleUpdateInput, SessionCycleUncheckedUpdateInput>
  }

  /**
   * SessionCycle delete
   */
  export type SessionCycleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCycle
     */
    select?: SessionCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCycle
     */
    omit?: SessionCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCycleInclude<ExtArgs> | null
    /**
     * Filter which SessionCycle to delete.
     */
    where: SessionCycleWhereUniqueInput
  }

  /**
   * SessionCycle deleteMany
   */
  export type SessionCycleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionCycles to delete
     */
    where?: SessionCycleWhereInput
    /**
     * Limit how many SessionCycles to delete.
     */
    limit?: number
  }

  /**
   * SessionCycle.Attendance
   */
  export type SessionCycle$AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * SessionCycle without action
   */
  export type SessionCycleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCycle
     */
    select?: SessionCycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionCycle
     */
    omit?: SessionCycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionCycleInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    time: Date | null
    status: $Enums.AttendanceStatus | null
    deviceId: string | null
    attendantId: string | null
    sessionCycleId: string | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    time: Date | null
    status: $Enums.AttendanceStatus | null
    deviceId: string | null
    attendantId: string | null
    sessionCycleId: string | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    time: number
    status: number
    deviceId: number
    attendantId: number
    sessionCycleId: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    time?: true
    status?: true
    deviceId?: true
    attendantId?: true
    sessionCycleId?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    time?: true
    status?: true
    deviceId?: true
    attendantId?: true
    sessionCycleId?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    time?: true
    status?: true
    deviceId?: true
    attendantId?: true
    sessionCycleId?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    time: Date
    status: $Enums.AttendanceStatus
    deviceId: string
    attendantId: string
    sessionCycleId: string
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    status?: boolean
    deviceId?: boolean
    attendantId?: boolean
    sessionCycleId?: boolean
    attendant?: boolean | UserDefaultArgs<ExtArgs>
    sessionCycle?: boolean | SessionCycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    status?: boolean
    deviceId?: boolean
    attendantId?: boolean
    sessionCycleId?: boolean
    attendant?: boolean | UserDefaultArgs<ExtArgs>
    sessionCycle?: boolean | SessionCycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    status?: boolean
    deviceId?: boolean
    attendantId?: boolean
    sessionCycleId?: boolean
    attendant?: boolean | UserDefaultArgs<ExtArgs>
    sessionCycle?: boolean | SessionCycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    time?: boolean
    status?: boolean
    deviceId?: boolean
    attendantId?: boolean
    sessionCycleId?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "time" | "status" | "deviceId" | "attendantId" | "sessionCycleId", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendant?: boolean | UserDefaultArgs<ExtArgs>
    sessionCycle?: boolean | SessionCycleDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendant?: boolean | UserDefaultArgs<ExtArgs>
    sessionCycle?: boolean | SessionCycleDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendant?: boolean | UserDefaultArgs<ExtArgs>
    sessionCycle?: boolean | SessionCycleDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      attendant: Prisma.$UserPayload<ExtArgs>
      sessionCycle: Prisma.$SessionCyclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      time: Date
      status: $Enums.AttendanceStatus
      deviceId: string
      attendantId: string
      sessionCycleId: string
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendant<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessionCycle<T extends SessionCycleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionCycleDefaultArgs<ExtArgs>>): Prisma__SessionCycleClient<$Result.GetResult<Prisma.$SessionCyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly time: FieldRef<"Attendance", 'DateTime'>
    readonly status: FieldRef<"Attendance", 'AttendanceStatus'>
    readonly deviceId: FieldRef<"Attendance", 'String'>
    readonly attendantId: FieldRef<"Attendance", 'String'>
    readonly sessionCycleId: FieldRef<"Attendance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
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
    id: 'id',
    email: 'email',
    sid: 'sid',
    gid: 'gid',
    password: 'password',
    name: 'name',
    dob: 'dob',
    official_class: 'official_class',
    authenticator: 'authenticator',
    biometric_key: 'biometric_key',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    type: 'type'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    openingDay: 'openingDay',
    startTime: 'startTime',
    endTime: 'endTime',
    address: 'address',
    teacherId: 'teacherId'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    start: 'start',
    duration: 'duration',
    repeat: 'repeat',
    classId: 'classId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SessionCycleScalarFieldEnum: {
    id: 'id',
    start: 'start',
    sessionId: 'sessionId'
  };

  export type SessionCycleScalarFieldEnum = (typeof SessionCycleScalarFieldEnum)[keyof typeof SessionCycleScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    time: 'time',
    status: 'status',
    deviceId: 'deviceId',
    attendantId: 'attendantId',
    sessionCycleId: 'sessionCycleId'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'RepeatType'
   */
  export type EnumRepeatTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RepeatType'>
    


  /**
   * Reference to a field of type 'RepeatType[]'
   */
  export type ListEnumRepeatTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RepeatType[]'>
    


  /**
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'AttendanceStatus[]'
   */
  export type ListEnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    sid?: StringFilter<"User"> | string
    gid?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    dob?: DateTimeFilter<"User"> | Date | string
    official_class?: StringFilter<"User"> | string
    authenticator?: StringFilter<"User"> | string
    biometric_key?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    host?: ClassListRelationFilter
    join?: ClassListRelationFilter
    attendances?: AttendanceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    sid?: SortOrder
    gid?: SortOrder
    password?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    official_class?: SortOrder
    authenticator?: SortOrder
    biometric_key?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    type?: SortOrder
    host?: ClassOrderByRelationAggregateInput
    join?: ClassOrderByRelationAggregateInput
    attendances?: AttendanceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    sid?: string
    gid?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    dob?: DateTimeFilter<"User"> | Date | string
    official_class?: StringFilter<"User"> | string
    authenticator?: StringFilter<"User"> | string
    biometric_key?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    host?: ClassListRelationFilter
    join?: ClassListRelationFilter
    attendances?: AttendanceListRelationFilter
  }, "id" | "email" | "sid" | "gid">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    sid?: SortOrder
    gid?: SortOrder
    password?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    official_class?: SortOrder
    authenticator?: SortOrder
    biometric_key?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    type?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    sid?: StringWithAggregatesFilter<"User"> | string
    gid?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    dob?: DateTimeWithAggregatesFilter<"User"> | Date | string
    official_class?: StringWithAggregatesFilter<"User"> | string
    authenticator?: StringWithAggregatesFilter<"User"> | string
    biometric_key?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    type?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: StringFilter<"Class"> | string
    code?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    openingDay?: DateTimeFilter<"Class"> | Date | string
    startTime?: DateTimeFilter<"Class"> | Date | string
    endTime?: DateTimeFilter<"Class"> | Date | string
    address?: StringFilter<"Class"> | string
    teacherId?: StringFilter<"Class"> | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    students?: UserListRelationFilter
    session?: SessionListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    openingDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    address?: SortOrder
    teacherId?: SortOrder
    teacher?: UserOrderByWithRelationInput
    students?: UserOrderByRelationAggregateInput
    session?: SessionOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    code?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    openingDay?: DateTimeFilter<"Class"> | Date | string
    startTime?: DateTimeFilter<"Class"> | Date | string
    endTime?: DateTimeFilter<"Class"> | Date | string
    address?: StringFilter<"Class"> | string
    teacherId?: StringFilter<"Class"> | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    students?: UserListRelationFilter
    session?: SessionListRelationFilter
  }, "id">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    openingDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    address?: SortOrder
    teacherId?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Class"> | string
    code?: StringWithAggregatesFilter<"Class"> | string
    name?: StringWithAggregatesFilter<"Class"> | string
    openingDay?: DateTimeWithAggregatesFilter<"Class"> | Date | string
    startTime?: DateTimeWithAggregatesFilter<"Class"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Class"> | Date | string
    address?: StringWithAggregatesFilter<"Class"> | string
    teacherId?: StringWithAggregatesFilter<"Class"> | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    name?: StringFilter<"Session"> | string
    start?: DateTimeFilter<"Session"> | Date | string
    duration?: IntFilter<"Session"> | number
    repeat?: EnumRepeatTypeFilter<"Session"> | $Enums.RepeatType
    classId?: StringFilter<"Session"> | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    SessionCycle?: SessionCycleListRelationFilter
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    start?: SortOrder
    duration?: SortOrder
    repeat?: SortOrder
    classId?: SortOrder
    class?: ClassOrderByWithRelationInput
    SessionCycle?: SessionCycleOrderByRelationAggregateInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    name?: StringFilter<"Session"> | string
    start?: DateTimeFilter<"Session"> | Date | string
    duration?: IntFilter<"Session"> | number
    repeat?: EnumRepeatTypeFilter<"Session"> | $Enums.RepeatType
    classId?: StringFilter<"Session"> | string
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
    SessionCycle?: SessionCycleListRelationFilter
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    start?: SortOrder
    duration?: SortOrder
    repeat?: SortOrder
    classId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    name?: StringWithAggregatesFilter<"Session"> | string
    start?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    duration?: IntWithAggregatesFilter<"Session"> | number
    repeat?: EnumRepeatTypeWithAggregatesFilter<"Session"> | $Enums.RepeatType
    classId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type SessionCycleWhereInput = {
    AND?: SessionCycleWhereInput | SessionCycleWhereInput[]
    OR?: SessionCycleWhereInput[]
    NOT?: SessionCycleWhereInput | SessionCycleWhereInput[]
    id?: StringFilter<"SessionCycle"> | string
    start?: DateTimeFilter<"SessionCycle"> | Date | string
    sessionId?: StringFilter<"SessionCycle"> | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    Attendance?: AttendanceListRelationFilter
  }

  export type SessionCycleOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    sessionId?: SortOrder
    session?: SessionOrderByWithRelationInput
    Attendance?: AttendanceOrderByRelationAggregateInput
  }

  export type SessionCycleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionCycleWhereInput | SessionCycleWhereInput[]
    OR?: SessionCycleWhereInput[]
    NOT?: SessionCycleWhereInput | SessionCycleWhereInput[]
    start?: DateTimeFilter<"SessionCycle"> | Date | string
    sessionId?: StringFilter<"SessionCycle"> | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    Attendance?: AttendanceListRelationFilter
  }, "id">

  export type SessionCycleOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    sessionId?: SortOrder
    _count?: SessionCycleCountOrderByAggregateInput
    _max?: SessionCycleMaxOrderByAggregateInput
    _min?: SessionCycleMinOrderByAggregateInput
  }

  export type SessionCycleScalarWhereWithAggregatesInput = {
    AND?: SessionCycleScalarWhereWithAggregatesInput | SessionCycleScalarWhereWithAggregatesInput[]
    OR?: SessionCycleScalarWhereWithAggregatesInput[]
    NOT?: SessionCycleScalarWhereWithAggregatesInput | SessionCycleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionCycle"> | string
    start?: DateTimeWithAggregatesFilter<"SessionCycle"> | Date | string
    sessionId?: StringWithAggregatesFilter<"SessionCycle"> | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: StringFilter<"Attendance"> | string
    time?: DateTimeFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    deviceId?: StringFilter<"Attendance"> | string
    attendantId?: StringFilter<"Attendance"> | string
    sessionCycleId?: StringFilter<"Attendance"> | string
    attendant?: XOR<UserScalarRelationFilter, UserWhereInput>
    sessionCycle?: XOR<SessionCycleScalarRelationFilter, SessionCycleWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    time?: SortOrder
    status?: SortOrder
    deviceId?: SortOrder
    attendantId?: SortOrder
    sessionCycleId?: SortOrder
    attendant?: UserOrderByWithRelationInput
    sessionCycle?: SessionCycleOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    time?: DateTimeFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    deviceId?: StringFilter<"Attendance"> | string
    attendantId?: StringFilter<"Attendance"> | string
    sessionCycleId?: StringFilter<"Attendance"> | string
    attendant?: XOR<UserScalarRelationFilter, UserWhereInput>
    sessionCycle?: XOR<SessionCycleScalarRelationFilter, SessionCycleWhereInput>
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    time?: SortOrder
    status?: SortOrder
    deviceId?: SortOrder
    attendantId?: SortOrder
    sessionCycleId?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendance"> | string
    time?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusWithAggregatesFilter<"Attendance"> | $Enums.AttendanceStatus
    deviceId?: StringWithAggregatesFilter<"Attendance"> | string
    attendantId?: StringWithAggregatesFilter<"Attendance"> | string
    sessionCycleId?: StringWithAggregatesFilter<"Attendance"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    sid: string
    gid: string
    password: string
    name: string
    dob: Date | string
    official_class: string
    authenticator: string
    biometric_key: string
    createdAt?: Date | string
    updateAt?: Date | string
    type: $Enums.UserType
    host?: ClassCreateNestedManyWithoutTeacherInput
    join?: ClassCreateNestedManyWithoutStudentsInput
    attendances?: AttendanceCreateNestedManyWithoutAttendantInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    sid: string
    gid: string
    password: string
    name: string
    dob: Date | string
    official_class: string
    authenticator: string
    biometric_key: string
    createdAt?: Date | string
    updateAt?: Date | string
    type: $Enums.UserType
    host?: ClassUncheckedCreateNestedManyWithoutTeacherInput
    join?: ClassUncheckedCreateNestedManyWithoutStudentsInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutAttendantInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    official_class?: StringFieldUpdateOperationsInput | string
    authenticator?: StringFieldUpdateOperationsInput | string
    biometric_key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    host?: ClassUpdateManyWithoutTeacherNestedInput
    join?: ClassUpdateManyWithoutStudentsNestedInput
    attendances?: AttendanceUpdateManyWithoutAttendantNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    official_class?: StringFieldUpdateOperationsInput | string
    authenticator?: StringFieldUpdateOperationsInput | string
    biometric_key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    host?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
    join?: ClassUncheckedUpdateManyWithoutStudentsNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutAttendantNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    sid: string
    gid: string
    password: string
    name: string
    dob: Date | string
    official_class: string
    authenticator: string
    biometric_key: string
    createdAt?: Date | string
    updateAt?: Date | string
    type: $Enums.UserType
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    official_class?: StringFieldUpdateOperationsInput | string
    authenticator?: StringFieldUpdateOperationsInput | string
    biometric_key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    official_class?: StringFieldUpdateOperationsInput | string
    authenticator?: StringFieldUpdateOperationsInput | string
    biometric_key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
  }

  export type ClassCreateInput = {
    id?: string
    code: string
    name: string
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
    teacher: UserCreateNestedOneWithoutHostInput
    students?: UserCreateNestedManyWithoutJoinInput
    session?: SessionCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
    teacherId: string
    students?: UserUncheckedCreateNestedManyWithoutJoinInput
    session?: SessionUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    teacher?: UserUpdateOneRequiredWithoutHostNestedInput
    students?: UserUpdateManyWithoutJoinNestedInput
    session?: SessionUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    students?: UserUncheckedUpdateManyWithoutJoinNestedInput
    session?: SessionUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: string
    code: string
    name: string
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
    teacherId: string
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateInput = {
    id?: string
    name: string
    start: Date | string
    duration: number
    repeat: $Enums.RepeatType
    class: ClassCreateNestedOneWithoutSessionInput
    SessionCycle?: SessionCycleCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    name: string
    start: Date | string
    duration: number
    repeat: $Enums.RepeatType
    classId: string
    SessionCycle?: SessionCycleUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    repeat?: EnumRepeatTypeFieldUpdateOperationsInput | $Enums.RepeatType
    class?: ClassUpdateOneRequiredWithoutSessionNestedInput
    SessionCycle?: SessionCycleUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    repeat?: EnumRepeatTypeFieldUpdateOperationsInput | $Enums.RepeatType
    classId?: StringFieldUpdateOperationsInput | string
    SessionCycle?: SessionCycleUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    id?: string
    name: string
    start: Date | string
    duration: number
    repeat: $Enums.RepeatType
    classId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    repeat?: EnumRepeatTypeFieldUpdateOperationsInput | $Enums.RepeatType
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    repeat?: EnumRepeatTypeFieldUpdateOperationsInput | $Enums.RepeatType
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCycleCreateInput = {
    id?: string
    start: Date | string
    session: SessionCreateNestedOneWithoutSessionCycleInput
    Attendance?: AttendanceCreateNestedManyWithoutSessionCycleInput
  }

  export type SessionCycleUncheckedCreateInput = {
    id?: string
    start: Date | string
    sessionId: string
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutSessionCycleInput
  }

  export type SessionCycleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutSessionCycleNestedInput
    Attendance?: AttendanceUpdateManyWithoutSessionCycleNestedInput
  }

  export type SessionCycleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionId?: StringFieldUpdateOperationsInput | string
    Attendance?: AttendanceUncheckedUpdateManyWithoutSessionCycleNestedInput
  }

  export type SessionCycleCreateManyInput = {
    id?: string
    start: Date | string
    sessionId: string
  }

  export type SessionCycleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCycleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceCreateInput = {
    id?: string
    time: Date | string
    status: $Enums.AttendanceStatus
    deviceId: string
    attendant: UserCreateNestedOneWithoutAttendancesInput
    sessionCycle: SessionCycleCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    time: Date | string
    status: $Enums.AttendanceStatus
    deviceId: string
    attendantId: string
    sessionCycleId: string
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    deviceId?: StringFieldUpdateOperationsInput | string
    attendant?: UserUpdateOneRequiredWithoutAttendancesNestedInput
    sessionCycle?: SessionCycleUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    deviceId?: StringFieldUpdateOperationsInput | string
    attendantId?: StringFieldUpdateOperationsInput | string
    sessionCycleId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceCreateManyInput = {
    id?: string
    time: Date | string
    status: $Enums.AttendanceStatus
    deviceId: string
    attendantId: string
    sessionCycleId: string
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    deviceId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    deviceId?: StringFieldUpdateOperationsInput | string
    attendantId?: StringFieldUpdateOperationsInput | string
    sessionCycleId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    sid?: SortOrder
    gid?: SortOrder
    password?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    official_class?: SortOrder
    authenticator?: SortOrder
    biometric_key?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    type?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    sid?: SortOrder
    gid?: SortOrder
    password?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    official_class?: SortOrder
    authenticator?: SortOrder
    biometric_key?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    type?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    sid?: SortOrder
    gid?: SortOrder
    password?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    official_class?: SortOrder
    authenticator?: SortOrder
    biometric_key?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    type?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    openingDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    address?: SortOrder
    teacherId?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    openingDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    address?: SortOrder
    teacherId?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    openingDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    address?: SortOrder
    teacherId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumRepeatTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RepeatType | EnumRepeatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RepeatType[] | ListEnumRepeatTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RepeatType[] | ListEnumRepeatTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRepeatTypeFilter<$PrismaModel> | $Enums.RepeatType
  }

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type SessionCycleListRelationFilter = {
    every?: SessionCycleWhereInput
    some?: SessionCycleWhereInput
    none?: SessionCycleWhereInput
  }

  export type SessionCycleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    start?: SortOrder
    duration?: SortOrder
    repeat?: SortOrder
    classId?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    start?: SortOrder
    duration?: SortOrder
    repeat?: SortOrder
    classId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    start?: SortOrder
    duration?: SortOrder
    repeat?: SortOrder
    classId?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumRepeatTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RepeatType | EnumRepeatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RepeatType[] | ListEnumRepeatTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RepeatType[] | ListEnumRepeatTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRepeatTypeWithAggregatesFilter<$PrismaModel> | $Enums.RepeatType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRepeatTypeFilter<$PrismaModel>
    _max?: NestedEnumRepeatTypeFilter<$PrismaModel>
  }

  export type SessionScalarRelationFilter = {
    is?: SessionWhereInput
    isNot?: SessionWhereInput
  }

  export type SessionCycleCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    sessionId?: SortOrder
  }

  export type SessionCycleMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    sessionId?: SortOrder
  }

  export type SessionCycleMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    sessionId?: SortOrder
  }

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type SessionCycleScalarRelationFilter = {
    is?: SessionCycleWhereInput
    isNot?: SessionCycleWhereInput
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    status?: SortOrder
    deviceId?: SortOrder
    attendantId?: SortOrder
    sessionCycleId?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    status?: SortOrder
    deviceId?: SortOrder
    attendantId?: SortOrder
    sessionCycleId?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    status?: SortOrder
    deviceId?: SortOrder
    attendantId?: SortOrder
    sessionCycleId?: SortOrder
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type ClassCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassCreateNestedManyWithoutStudentsInput = {
    create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput> | ClassCreateWithoutStudentsInput[] | ClassUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput | ClassCreateOrConnectWithoutStudentsInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutAttendantInput = {
    create?: XOR<AttendanceCreateWithoutAttendantInput, AttendanceUncheckedCreateWithoutAttendantInput> | AttendanceCreateWithoutAttendantInput[] | AttendanceUncheckedCreateWithoutAttendantInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutAttendantInput | AttendanceCreateOrConnectWithoutAttendantInput[]
    createMany?: AttendanceCreateManyAttendantInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput> | ClassCreateWithoutStudentsInput[] | ClassUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput | ClassCreateOrConnectWithoutStudentsInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutAttendantInput = {
    create?: XOR<AttendanceCreateWithoutAttendantInput, AttendanceUncheckedCreateWithoutAttendantInput> | AttendanceCreateWithoutAttendantInput[] | AttendanceUncheckedCreateWithoutAttendantInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutAttendantInput | AttendanceCreateOrConnectWithoutAttendantInput[]
    createMany?: AttendanceCreateManyAttendantInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type ClassUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutTeacherInput | ClassUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutTeacherInput | ClassUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutTeacherInput | ClassUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type ClassUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput> | ClassCreateWithoutStudentsInput[] | ClassUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput | ClassCreateOrConnectWithoutStudentsInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutStudentsInput | ClassUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutStudentsInput | ClassUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutStudentsInput | ClassUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutAttendantNestedInput = {
    create?: XOR<AttendanceCreateWithoutAttendantInput, AttendanceUncheckedCreateWithoutAttendantInput> | AttendanceCreateWithoutAttendantInput[] | AttendanceUncheckedCreateWithoutAttendantInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutAttendantInput | AttendanceCreateOrConnectWithoutAttendantInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutAttendantInput | AttendanceUpsertWithWhereUniqueWithoutAttendantInput[]
    createMany?: AttendanceCreateManyAttendantInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutAttendantInput | AttendanceUpdateWithWhereUniqueWithoutAttendantInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutAttendantInput | AttendanceUpdateManyWithWhereWithoutAttendantInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutTeacherInput | ClassUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutTeacherInput | ClassUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutTeacherInput | ClassUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput> | ClassCreateWithoutStudentsInput[] | ClassUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput | ClassCreateOrConnectWithoutStudentsInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutStudentsInput | ClassUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutStudentsInput | ClassUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutStudentsInput | ClassUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutAttendantNestedInput = {
    create?: XOR<AttendanceCreateWithoutAttendantInput, AttendanceUncheckedCreateWithoutAttendantInput> | AttendanceCreateWithoutAttendantInput[] | AttendanceUncheckedCreateWithoutAttendantInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutAttendantInput | AttendanceCreateOrConnectWithoutAttendantInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutAttendantInput | AttendanceUpsertWithWhereUniqueWithoutAttendantInput[]
    createMany?: AttendanceCreateManyAttendantInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutAttendantInput | AttendanceUpdateWithWhereUniqueWithoutAttendantInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutAttendantInput | AttendanceUpdateManyWithWhereWithoutAttendantInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutHostInput = {
    create?: XOR<UserCreateWithoutHostInput, UserUncheckedCreateWithoutHostInput>
    connectOrCreate?: UserCreateOrConnectWithoutHostInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutJoinInput = {
    create?: XOR<UserCreateWithoutJoinInput, UserUncheckedCreateWithoutJoinInput> | UserCreateWithoutJoinInput[] | UserUncheckedCreateWithoutJoinInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJoinInput | UserCreateOrConnectWithoutJoinInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutClassInput = {
    create?: XOR<SessionCreateWithoutClassInput, SessionUncheckedCreateWithoutClassInput> | SessionCreateWithoutClassInput[] | SessionUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutClassInput | SessionCreateOrConnectWithoutClassInput[]
    createMany?: SessionCreateManyClassInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutJoinInput = {
    create?: XOR<UserCreateWithoutJoinInput, UserUncheckedCreateWithoutJoinInput> | UserCreateWithoutJoinInput[] | UserUncheckedCreateWithoutJoinInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJoinInput | UserCreateOrConnectWithoutJoinInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<SessionCreateWithoutClassInput, SessionUncheckedCreateWithoutClassInput> | SessionCreateWithoutClassInput[] | SessionUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutClassInput | SessionCreateOrConnectWithoutClassInput[]
    createMany?: SessionCreateManyClassInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutHostNestedInput = {
    create?: XOR<UserCreateWithoutHostInput, UserUncheckedCreateWithoutHostInput>
    connectOrCreate?: UserCreateOrConnectWithoutHostInput
    upsert?: UserUpsertWithoutHostInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHostInput, UserUpdateWithoutHostInput>, UserUncheckedUpdateWithoutHostInput>
  }

  export type UserUpdateManyWithoutJoinNestedInput = {
    create?: XOR<UserCreateWithoutJoinInput, UserUncheckedCreateWithoutJoinInput> | UserCreateWithoutJoinInput[] | UserUncheckedCreateWithoutJoinInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJoinInput | UserCreateOrConnectWithoutJoinInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutJoinInput | UserUpsertWithWhereUniqueWithoutJoinInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutJoinInput | UserUpdateWithWhereUniqueWithoutJoinInput[]
    updateMany?: UserUpdateManyWithWhereWithoutJoinInput | UserUpdateManyWithWhereWithoutJoinInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutClassNestedInput = {
    create?: XOR<SessionCreateWithoutClassInput, SessionUncheckedCreateWithoutClassInput> | SessionCreateWithoutClassInput[] | SessionUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutClassInput | SessionCreateOrConnectWithoutClassInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutClassInput | SessionUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: SessionCreateManyClassInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutClassInput | SessionUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutClassInput | SessionUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutJoinNestedInput = {
    create?: XOR<UserCreateWithoutJoinInput, UserUncheckedCreateWithoutJoinInput> | UserCreateWithoutJoinInput[] | UserUncheckedCreateWithoutJoinInput[]
    connectOrCreate?: UserCreateOrConnectWithoutJoinInput | UserCreateOrConnectWithoutJoinInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutJoinInput | UserUpsertWithWhereUniqueWithoutJoinInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutJoinInput | UserUpdateWithWhereUniqueWithoutJoinInput[]
    updateMany?: UserUpdateManyWithWhereWithoutJoinInput | UserUpdateManyWithWhereWithoutJoinInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<SessionCreateWithoutClassInput, SessionUncheckedCreateWithoutClassInput> | SessionCreateWithoutClassInput[] | SessionUncheckedCreateWithoutClassInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutClassInput | SessionCreateOrConnectWithoutClassInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutClassInput | SessionUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: SessionCreateManyClassInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutClassInput | SessionUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutClassInput | SessionUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ClassCreateNestedOneWithoutSessionInput = {
    create?: XOR<ClassCreateWithoutSessionInput, ClassUncheckedCreateWithoutSessionInput>
    connectOrCreate?: ClassCreateOrConnectWithoutSessionInput
    connect?: ClassWhereUniqueInput
  }

  export type SessionCycleCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionCycleCreateWithoutSessionInput, SessionCycleUncheckedCreateWithoutSessionInput> | SessionCycleCreateWithoutSessionInput[] | SessionCycleUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionCycleCreateOrConnectWithoutSessionInput | SessionCycleCreateOrConnectWithoutSessionInput[]
    createMany?: SessionCycleCreateManySessionInputEnvelope
    connect?: SessionCycleWhereUniqueInput | SessionCycleWhereUniqueInput[]
  }

  export type SessionCycleUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionCycleCreateWithoutSessionInput, SessionCycleUncheckedCreateWithoutSessionInput> | SessionCycleCreateWithoutSessionInput[] | SessionCycleUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionCycleCreateOrConnectWithoutSessionInput | SessionCycleCreateOrConnectWithoutSessionInput[]
    createMany?: SessionCycleCreateManySessionInputEnvelope
    connect?: SessionCycleWhereUniqueInput | SessionCycleWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRepeatTypeFieldUpdateOperationsInput = {
    set?: $Enums.RepeatType
  }

  export type ClassUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<ClassCreateWithoutSessionInput, ClassUncheckedCreateWithoutSessionInput>
    connectOrCreate?: ClassCreateOrConnectWithoutSessionInput
    upsert?: ClassUpsertWithoutSessionInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutSessionInput, ClassUpdateWithoutSessionInput>, ClassUncheckedUpdateWithoutSessionInput>
  }

  export type SessionCycleUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionCycleCreateWithoutSessionInput, SessionCycleUncheckedCreateWithoutSessionInput> | SessionCycleCreateWithoutSessionInput[] | SessionCycleUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionCycleCreateOrConnectWithoutSessionInput | SessionCycleCreateOrConnectWithoutSessionInput[]
    upsert?: SessionCycleUpsertWithWhereUniqueWithoutSessionInput | SessionCycleUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionCycleCreateManySessionInputEnvelope
    set?: SessionCycleWhereUniqueInput | SessionCycleWhereUniqueInput[]
    disconnect?: SessionCycleWhereUniqueInput | SessionCycleWhereUniqueInput[]
    delete?: SessionCycleWhereUniqueInput | SessionCycleWhereUniqueInput[]
    connect?: SessionCycleWhereUniqueInput | SessionCycleWhereUniqueInput[]
    update?: SessionCycleUpdateWithWhereUniqueWithoutSessionInput | SessionCycleUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionCycleUpdateManyWithWhereWithoutSessionInput | SessionCycleUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionCycleScalarWhereInput | SessionCycleScalarWhereInput[]
  }

  export type SessionCycleUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionCycleCreateWithoutSessionInput, SessionCycleUncheckedCreateWithoutSessionInput> | SessionCycleCreateWithoutSessionInput[] | SessionCycleUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionCycleCreateOrConnectWithoutSessionInput | SessionCycleCreateOrConnectWithoutSessionInput[]
    upsert?: SessionCycleUpsertWithWhereUniqueWithoutSessionInput | SessionCycleUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionCycleCreateManySessionInputEnvelope
    set?: SessionCycleWhereUniqueInput | SessionCycleWhereUniqueInput[]
    disconnect?: SessionCycleWhereUniqueInput | SessionCycleWhereUniqueInput[]
    delete?: SessionCycleWhereUniqueInput | SessionCycleWhereUniqueInput[]
    connect?: SessionCycleWhereUniqueInput | SessionCycleWhereUniqueInput[]
    update?: SessionCycleUpdateWithWhereUniqueWithoutSessionInput | SessionCycleUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionCycleUpdateManyWithWhereWithoutSessionInput | SessionCycleUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionCycleScalarWhereInput | SessionCycleScalarWhereInput[]
  }

  export type SessionCreateNestedOneWithoutSessionCycleInput = {
    create?: XOR<SessionCreateWithoutSessionCycleInput, SessionUncheckedCreateWithoutSessionCycleInput>
    connectOrCreate?: SessionCreateOrConnectWithoutSessionCycleInput
    connect?: SessionWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutSessionCycleInput = {
    create?: XOR<AttendanceCreateWithoutSessionCycleInput, AttendanceUncheckedCreateWithoutSessionCycleInput> | AttendanceCreateWithoutSessionCycleInput[] | AttendanceUncheckedCreateWithoutSessionCycleInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSessionCycleInput | AttendanceCreateOrConnectWithoutSessionCycleInput[]
    createMany?: AttendanceCreateManySessionCycleInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutSessionCycleInput = {
    create?: XOR<AttendanceCreateWithoutSessionCycleInput, AttendanceUncheckedCreateWithoutSessionCycleInput> | AttendanceCreateWithoutSessionCycleInput[] | AttendanceUncheckedCreateWithoutSessionCycleInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSessionCycleInput | AttendanceCreateOrConnectWithoutSessionCycleInput[]
    createMany?: AttendanceCreateManySessionCycleInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type SessionUpdateOneRequiredWithoutSessionCycleNestedInput = {
    create?: XOR<SessionCreateWithoutSessionCycleInput, SessionUncheckedCreateWithoutSessionCycleInput>
    connectOrCreate?: SessionCreateOrConnectWithoutSessionCycleInput
    upsert?: SessionUpsertWithoutSessionCycleInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutSessionCycleInput, SessionUpdateWithoutSessionCycleInput>, SessionUncheckedUpdateWithoutSessionCycleInput>
  }

  export type AttendanceUpdateManyWithoutSessionCycleNestedInput = {
    create?: XOR<AttendanceCreateWithoutSessionCycleInput, AttendanceUncheckedCreateWithoutSessionCycleInput> | AttendanceCreateWithoutSessionCycleInput[] | AttendanceUncheckedCreateWithoutSessionCycleInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSessionCycleInput | AttendanceCreateOrConnectWithoutSessionCycleInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutSessionCycleInput | AttendanceUpsertWithWhereUniqueWithoutSessionCycleInput[]
    createMany?: AttendanceCreateManySessionCycleInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutSessionCycleInput | AttendanceUpdateWithWhereUniqueWithoutSessionCycleInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutSessionCycleInput | AttendanceUpdateManyWithWhereWithoutSessionCycleInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutSessionCycleNestedInput = {
    create?: XOR<AttendanceCreateWithoutSessionCycleInput, AttendanceUncheckedCreateWithoutSessionCycleInput> | AttendanceCreateWithoutSessionCycleInput[] | AttendanceUncheckedCreateWithoutSessionCycleInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSessionCycleInput | AttendanceCreateOrConnectWithoutSessionCycleInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutSessionCycleInput | AttendanceUpsertWithWhereUniqueWithoutSessionCycleInput[]
    createMany?: AttendanceCreateManySessionCycleInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutSessionCycleInput | AttendanceUpdateWithWhereUniqueWithoutSessionCycleInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutSessionCycleInput | AttendanceUpdateManyWithWhereWithoutSessionCycleInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendancesInput
    connect?: UserWhereUniqueInput
  }

  export type SessionCycleCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<SessionCycleCreateWithoutAttendanceInput, SessionCycleUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: SessionCycleCreateOrConnectWithoutAttendanceInput
    connect?: SessionCycleWhereUniqueInput
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type UserUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendancesInput
    upsert?: UserUpsertWithoutAttendancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendancesInput, UserUpdateWithoutAttendancesInput>, UserUncheckedUpdateWithoutAttendancesInput>
  }

  export type SessionCycleUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<SessionCycleCreateWithoutAttendanceInput, SessionCycleUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: SessionCycleCreateOrConnectWithoutAttendanceInput
    upsert?: SessionCycleUpsertWithoutAttendanceInput
    connect?: SessionCycleWhereUniqueInput
    update?: XOR<XOR<SessionCycleUpdateToOneWithWhereWithoutAttendanceInput, SessionCycleUpdateWithoutAttendanceInput>, SessionCycleUncheckedUpdateWithoutAttendanceInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedEnumRepeatTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RepeatType | EnumRepeatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RepeatType[] | ListEnumRepeatTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RepeatType[] | ListEnumRepeatTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRepeatTypeFilter<$PrismaModel> | $Enums.RepeatType
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRepeatTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RepeatType | EnumRepeatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RepeatType[] | ListEnumRepeatTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RepeatType[] | ListEnumRepeatTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRepeatTypeWithAggregatesFilter<$PrismaModel> | $Enums.RepeatType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRepeatTypeFilter<$PrismaModel>
    _max?: NestedEnumRepeatTypeFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type ClassCreateWithoutTeacherInput = {
    id?: string
    code: string
    name: string
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
    students?: UserCreateNestedManyWithoutJoinInput
    session?: SessionCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutTeacherInput = {
    id?: string
    code: string
    name: string
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
    students?: UserUncheckedCreateNestedManyWithoutJoinInput
    session?: SessionUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutTeacherInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput>
  }

  export type ClassCreateManyTeacherInputEnvelope = {
    data: ClassCreateManyTeacherInput | ClassCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type ClassCreateWithoutStudentsInput = {
    id?: string
    code: string
    name: string
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
    teacher: UserCreateNestedOneWithoutHostInput
    session?: SessionCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutStudentsInput = {
    id?: string
    code: string
    name: string
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
    teacherId: string
    session?: SessionUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutStudentsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
  }

  export type AttendanceCreateWithoutAttendantInput = {
    id?: string
    time: Date | string
    status: $Enums.AttendanceStatus
    deviceId: string
    sessionCycle: SessionCycleCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutAttendantInput = {
    id?: string
    time: Date | string
    status: $Enums.AttendanceStatus
    deviceId: string
    sessionCycleId: string
  }

  export type AttendanceCreateOrConnectWithoutAttendantInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutAttendantInput, AttendanceUncheckedCreateWithoutAttendantInput>
  }

  export type AttendanceCreateManyAttendantInputEnvelope = {
    data: AttendanceCreateManyAttendantInput | AttendanceCreateManyAttendantInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithWhereUniqueWithoutTeacherInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutTeacherInput, ClassUncheckedUpdateWithoutTeacherInput>
    create: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutTeacherInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutTeacherInput, ClassUncheckedUpdateWithoutTeacherInput>
  }

  export type ClassUpdateManyWithWhereWithoutTeacherInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutTeacherInput>
  }

  export type ClassScalarWhereInput = {
    AND?: ClassScalarWhereInput | ClassScalarWhereInput[]
    OR?: ClassScalarWhereInput[]
    NOT?: ClassScalarWhereInput | ClassScalarWhereInput[]
    id?: StringFilter<"Class"> | string
    code?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    openingDay?: DateTimeFilter<"Class"> | Date | string
    startTime?: DateTimeFilter<"Class"> | Date | string
    endTime?: DateTimeFilter<"Class"> | Date | string
    address?: StringFilter<"Class"> | string
    teacherId?: StringFilter<"Class"> | string
  }

  export type ClassUpsertWithWhereUniqueWithoutStudentsInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutStudentsInput, ClassUncheckedUpdateWithoutStudentsInput>
    create: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutStudentsInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutStudentsInput, ClassUncheckedUpdateWithoutStudentsInput>
  }

  export type ClassUpdateManyWithWhereWithoutStudentsInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutStudentsInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutAttendantInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutAttendantInput, AttendanceUncheckedUpdateWithoutAttendantInput>
    create: XOR<AttendanceCreateWithoutAttendantInput, AttendanceUncheckedCreateWithoutAttendantInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutAttendantInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutAttendantInput, AttendanceUncheckedUpdateWithoutAttendantInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutAttendantInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutAttendantInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: StringFilter<"Attendance"> | string
    time?: DateTimeFilter<"Attendance"> | Date | string
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    deviceId?: StringFilter<"Attendance"> | string
    attendantId?: StringFilter<"Attendance"> | string
    sessionCycleId?: StringFilter<"Attendance"> | string
  }

  export type UserCreateWithoutHostInput = {
    id?: string
    email: string
    sid: string
    gid: string
    password: string
    name: string
    dob: Date | string
    official_class: string
    authenticator: string
    biometric_key: string
    createdAt?: Date | string
    updateAt?: Date | string
    type: $Enums.UserType
    join?: ClassCreateNestedManyWithoutStudentsInput
    attendances?: AttendanceCreateNestedManyWithoutAttendantInput
  }

  export type UserUncheckedCreateWithoutHostInput = {
    id?: string
    email: string
    sid: string
    gid: string
    password: string
    name: string
    dob: Date | string
    official_class: string
    authenticator: string
    biometric_key: string
    createdAt?: Date | string
    updateAt?: Date | string
    type: $Enums.UserType
    join?: ClassUncheckedCreateNestedManyWithoutStudentsInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutAttendantInput
  }

  export type UserCreateOrConnectWithoutHostInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHostInput, UserUncheckedCreateWithoutHostInput>
  }

  export type UserCreateWithoutJoinInput = {
    id?: string
    email: string
    sid: string
    gid: string
    password: string
    name: string
    dob: Date | string
    official_class: string
    authenticator: string
    biometric_key: string
    createdAt?: Date | string
    updateAt?: Date | string
    type: $Enums.UserType
    host?: ClassCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceCreateNestedManyWithoutAttendantInput
  }

  export type UserUncheckedCreateWithoutJoinInput = {
    id?: string
    email: string
    sid: string
    gid: string
    password: string
    name: string
    dob: Date | string
    official_class: string
    authenticator: string
    biometric_key: string
    createdAt?: Date | string
    updateAt?: Date | string
    type: $Enums.UserType
    host?: ClassUncheckedCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutAttendantInput
  }

  export type UserCreateOrConnectWithoutJoinInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJoinInput, UserUncheckedCreateWithoutJoinInput>
  }

  export type SessionCreateWithoutClassInput = {
    id?: string
    name: string
    start: Date | string
    duration: number
    repeat: $Enums.RepeatType
    SessionCycle?: SessionCycleCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutClassInput = {
    id?: string
    name: string
    start: Date | string
    duration: number
    repeat: $Enums.RepeatType
    SessionCycle?: SessionCycleUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutClassInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutClassInput, SessionUncheckedCreateWithoutClassInput>
  }

  export type SessionCreateManyClassInputEnvelope = {
    data: SessionCreateManyClassInput | SessionCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutHostInput = {
    update: XOR<UserUpdateWithoutHostInput, UserUncheckedUpdateWithoutHostInput>
    create: XOR<UserCreateWithoutHostInput, UserUncheckedCreateWithoutHostInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHostInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHostInput, UserUncheckedUpdateWithoutHostInput>
  }

  export type UserUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    official_class?: StringFieldUpdateOperationsInput | string
    authenticator?: StringFieldUpdateOperationsInput | string
    biometric_key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    join?: ClassUpdateManyWithoutStudentsNestedInput
    attendances?: AttendanceUpdateManyWithoutAttendantNestedInput
  }

  export type UserUncheckedUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    official_class?: StringFieldUpdateOperationsInput | string
    authenticator?: StringFieldUpdateOperationsInput | string
    biometric_key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    join?: ClassUncheckedUpdateManyWithoutStudentsNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutAttendantNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutJoinInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutJoinInput, UserUncheckedUpdateWithoutJoinInput>
    create: XOR<UserCreateWithoutJoinInput, UserUncheckedCreateWithoutJoinInput>
  }

  export type UserUpdateWithWhereUniqueWithoutJoinInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutJoinInput, UserUncheckedUpdateWithoutJoinInput>
  }

  export type UserUpdateManyWithWhereWithoutJoinInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutJoinInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    sid?: StringFilter<"User"> | string
    gid?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    dob?: DateTimeFilter<"User"> | Date | string
    official_class?: StringFilter<"User"> | string
    authenticator?: StringFilter<"User"> | string
    biometric_key?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
  }

  export type SessionUpsertWithWhereUniqueWithoutClassInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutClassInput, SessionUncheckedUpdateWithoutClassInput>
    create: XOR<SessionCreateWithoutClassInput, SessionUncheckedCreateWithoutClassInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutClassInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutClassInput, SessionUncheckedUpdateWithoutClassInput>
  }

  export type SessionUpdateManyWithWhereWithoutClassInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutClassInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    name?: StringFilter<"Session"> | string
    start?: DateTimeFilter<"Session"> | Date | string
    duration?: IntFilter<"Session"> | number
    repeat?: EnumRepeatTypeFilter<"Session"> | $Enums.RepeatType
    classId?: StringFilter<"Session"> | string
  }

  export type ClassCreateWithoutSessionInput = {
    id?: string
    code: string
    name: string
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
    teacher: UserCreateNestedOneWithoutHostInput
    students?: UserCreateNestedManyWithoutJoinInput
  }

  export type ClassUncheckedCreateWithoutSessionInput = {
    id?: string
    code: string
    name: string
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
    teacherId: string
    students?: UserUncheckedCreateNestedManyWithoutJoinInput
  }

  export type ClassCreateOrConnectWithoutSessionInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutSessionInput, ClassUncheckedCreateWithoutSessionInput>
  }

  export type SessionCycleCreateWithoutSessionInput = {
    id?: string
    start: Date | string
    Attendance?: AttendanceCreateNestedManyWithoutSessionCycleInput
  }

  export type SessionCycleUncheckedCreateWithoutSessionInput = {
    id?: string
    start: Date | string
    Attendance?: AttendanceUncheckedCreateNestedManyWithoutSessionCycleInput
  }

  export type SessionCycleCreateOrConnectWithoutSessionInput = {
    where: SessionCycleWhereUniqueInput
    create: XOR<SessionCycleCreateWithoutSessionInput, SessionCycleUncheckedCreateWithoutSessionInput>
  }

  export type SessionCycleCreateManySessionInputEnvelope = {
    data: SessionCycleCreateManySessionInput | SessionCycleCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithoutSessionInput = {
    update: XOR<ClassUpdateWithoutSessionInput, ClassUncheckedUpdateWithoutSessionInput>
    create: XOR<ClassCreateWithoutSessionInput, ClassUncheckedCreateWithoutSessionInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutSessionInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutSessionInput, ClassUncheckedUpdateWithoutSessionInput>
  }

  export type ClassUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    teacher?: UserUpdateOneRequiredWithoutHostNestedInput
    students?: UserUpdateManyWithoutJoinNestedInput
  }

  export type ClassUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    students?: UserUncheckedUpdateManyWithoutJoinNestedInput
  }

  export type SessionCycleUpsertWithWhereUniqueWithoutSessionInput = {
    where: SessionCycleWhereUniqueInput
    update: XOR<SessionCycleUpdateWithoutSessionInput, SessionCycleUncheckedUpdateWithoutSessionInput>
    create: XOR<SessionCycleCreateWithoutSessionInput, SessionCycleUncheckedCreateWithoutSessionInput>
  }

  export type SessionCycleUpdateWithWhereUniqueWithoutSessionInput = {
    where: SessionCycleWhereUniqueInput
    data: XOR<SessionCycleUpdateWithoutSessionInput, SessionCycleUncheckedUpdateWithoutSessionInput>
  }

  export type SessionCycleUpdateManyWithWhereWithoutSessionInput = {
    where: SessionCycleScalarWhereInput
    data: XOR<SessionCycleUpdateManyMutationInput, SessionCycleUncheckedUpdateManyWithoutSessionInput>
  }

  export type SessionCycleScalarWhereInput = {
    AND?: SessionCycleScalarWhereInput | SessionCycleScalarWhereInput[]
    OR?: SessionCycleScalarWhereInput[]
    NOT?: SessionCycleScalarWhereInput | SessionCycleScalarWhereInput[]
    id?: StringFilter<"SessionCycle"> | string
    start?: DateTimeFilter<"SessionCycle"> | Date | string
    sessionId?: StringFilter<"SessionCycle"> | string
  }

  export type SessionCreateWithoutSessionCycleInput = {
    id?: string
    name: string
    start: Date | string
    duration: number
    repeat: $Enums.RepeatType
    class: ClassCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutSessionCycleInput = {
    id?: string
    name: string
    start: Date | string
    duration: number
    repeat: $Enums.RepeatType
    classId: string
  }

  export type SessionCreateOrConnectWithoutSessionCycleInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutSessionCycleInput, SessionUncheckedCreateWithoutSessionCycleInput>
  }

  export type AttendanceCreateWithoutSessionCycleInput = {
    id?: string
    time: Date | string
    status: $Enums.AttendanceStatus
    deviceId: string
    attendant: UserCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutSessionCycleInput = {
    id?: string
    time: Date | string
    status: $Enums.AttendanceStatus
    deviceId: string
    attendantId: string
  }

  export type AttendanceCreateOrConnectWithoutSessionCycleInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutSessionCycleInput, AttendanceUncheckedCreateWithoutSessionCycleInput>
  }

  export type AttendanceCreateManySessionCycleInputEnvelope = {
    data: AttendanceCreateManySessionCycleInput | AttendanceCreateManySessionCycleInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithoutSessionCycleInput = {
    update: XOR<SessionUpdateWithoutSessionCycleInput, SessionUncheckedUpdateWithoutSessionCycleInput>
    create: XOR<SessionCreateWithoutSessionCycleInput, SessionUncheckedCreateWithoutSessionCycleInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutSessionCycleInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutSessionCycleInput, SessionUncheckedUpdateWithoutSessionCycleInput>
  }

  export type SessionUpdateWithoutSessionCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    repeat?: EnumRepeatTypeFieldUpdateOperationsInput | $Enums.RepeatType
    class?: ClassUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutSessionCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    repeat?: EnumRepeatTypeFieldUpdateOperationsInput | $Enums.RepeatType
    classId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUpsertWithWhereUniqueWithoutSessionCycleInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutSessionCycleInput, AttendanceUncheckedUpdateWithoutSessionCycleInput>
    create: XOR<AttendanceCreateWithoutSessionCycleInput, AttendanceUncheckedCreateWithoutSessionCycleInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutSessionCycleInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutSessionCycleInput, AttendanceUncheckedUpdateWithoutSessionCycleInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutSessionCycleInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutSessionCycleInput>
  }

  export type UserCreateWithoutAttendancesInput = {
    id?: string
    email: string
    sid: string
    gid: string
    password: string
    name: string
    dob: Date | string
    official_class: string
    authenticator: string
    biometric_key: string
    createdAt?: Date | string
    updateAt?: Date | string
    type: $Enums.UserType
    host?: ClassCreateNestedManyWithoutTeacherInput
    join?: ClassCreateNestedManyWithoutStudentsInput
  }

  export type UserUncheckedCreateWithoutAttendancesInput = {
    id?: string
    email: string
    sid: string
    gid: string
    password: string
    name: string
    dob: Date | string
    official_class: string
    authenticator: string
    biometric_key: string
    createdAt?: Date | string
    updateAt?: Date | string
    type: $Enums.UserType
    host?: ClassUncheckedCreateNestedManyWithoutTeacherInput
    join?: ClassUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type UserCreateOrConnectWithoutAttendancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
  }

  export type SessionCycleCreateWithoutAttendanceInput = {
    id?: string
    start: Date | string
    session: SessionCreateNestedOneWithoutSessionCycleInput
  }

  export type SessionCycleUncheckedCreateWithoutAttendanceInput = {
    id?: string
    start: Date | string
    sessionId: string
  }

  export type SessionCycleCreateOrConnectWithoutAttendanceInput = {
    where: SessionCycleWhereUniqueInput
    create: XOR<SessionCycleCreateWithoutAttendanceInput, SessionCycleUncheckedCreateWithoutAttendanceInput>
  }

  export type UserUpsertWithoutAttendancesInput = {
    update: XOR<UserUpdateWithoutAttendancesInput, UserUncheckedUpdateWithoutAttendancesInput>
    create: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendancesInput, UserUncheckedUpdateWithoutAttendancesInput>
  }

  export type UserUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    official_class?: StringFieldUpdateOperationsInput | string
    authenticator?: StringFieldUpdateOperationsInput | string
    biometric_key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    host?: ClassUpdateManyWithoutTeacherNestedInput
    join?: ClassUpdateManyWithoutStudentsNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    official_class?: StringFieldUpdateOperationsInput | string
    authenticator?: StringFieldUpdateOperationsInput | string
    biometric_key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    host?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
    join?: ClassUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type SessionCycleUpsertWithoutAttendanceInput = {
    update: XOR<SessionCycleUpdateWithoutAttendanceInput, SessionCycleUncheckedUpdateWithoutAttendanceInput>
    create: XOR<SessionCycleCreateWithoutAttendanceInput, SessionCycleUncheckedCreateWithoutAttendanceInput>
    where?: SessionCycleWhereInput
  }

  export type SessionCycleUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: SessionCycleWhereInput
    data: XOR<SessionCycleUpdateWithoutAttendanceInput, SessionCycleUncheckedUpdateWithoutAttendanceInput>
  }

  export type SessionCycleUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutSessionCycleNestedInput
  }

  export type SessionCycleUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionId?: StringFieldUpdateOperationsInput | string
  }

  export type ClassCreateManyTeacherInput = {
    id?: string
    code: string
    name: string
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
  }

  export type AttendanceCreateManyAttendantInput = {
    id?: string
    time: Date | string
    status: $Enums.AttendanceStatus
    deviceId: string
    sessionCycleId: string
  }

  export type ClassUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    students?: UserUpdateManyWithoutJoinNestedInput
    session?: SessionUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    students?: UserUncheckedUpdateManyWithoutJoinNestedInput
    session?: SessionUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type ClassUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    teacher?: UserUpdateOneRequiredWithoutHostNestedInput
    session?: SessionUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    session?: SessionUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUpdateWithoutAttendantInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    deviceId?: StringFieldUpdateOperationsInput | string
    sessionCycle?: SessionCycleUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutAttendantInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    deviceId?: StringFieldUpdateOperationsInput | string
    sessionCycleId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyWithoutAttendantInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    deviceId?: StringFieldUpdateOperationsInput | string
    sessionCycleId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyClassInput = {
    id?: string
    name: string
    start: Date | string
    duration: number
    repeat: $Enums.RepeatType
  }

  export type UserUpdateWithoutJoinInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    official_class?: StringFieldUpdateOperationsInput | string
    authenticator?: StringFieldUpdateOperationsInput | string
    biometric_key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    host?: ClassUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUpdateManyWithoutAttendantNestedInput
  }

  export type UserUncheckedUpdateWithoutJoinInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    official_class?: StringFieldUpdateOperationsInput | string
    authenticator?: StringFieldUpdateOperationsInput | string
    biometric_key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    host?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutAttendantNestedInput
  }

  export type UserUncheckedUpdateManyWithoutJoinInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    official_class?: StringFieldUpdateOperationsInput | string
    authenticator?: StringFieldUpdateOperationsInput | string
    biometric_key?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
  }

  export type SessionUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    repeat?: EnumRepeatTypeFieldUpdateOperationsInput | $Enums.RepeatType
    SessionCycle?: SessionCycleUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    repeat?: EnumRepeatTypeFieldUpdateOperationsInput | $Enums.RepeatType
    SessionCycle?: SessionCycleUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    repeat?: EnumRepeatTypeFieldUpdateOperationsInput | $Enums.RepeatType
  }

  export type SessionCycleCreateManySessionInput = {
    id?: string
    start: Date | string
  }

  export type SessionCycleUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    Attendance?: AttendanceUpdateManyWithoutSessionCycleNestedInput
  }

  export type SessionCycleUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    Attendance?: AttendanceUncheckedUpdateManyWithoutSessionCycleNestedInput
  }

  export type SessionCycleUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManySessionCycleInput = {
    id?: string
    time: Date | string
    status: $Enums.AttendanceStatus
    deviceId: string
    attendantId: string
  }

  export type AttendanceUpdateWithoutSessionCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    deviceId?: StringFieldUpdateOperationsInput | string
    attendant?: UserUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutSessionCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    deviceId?: StringFieldUpdateOperationsInput | string
    attendantId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyWithoutSessionCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    deviceId?: StringFieldUpdateOperationsInput | string
    attendantId?: StringFieldUpdateOperationsInput | string
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