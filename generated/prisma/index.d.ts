
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
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model NFC
 * 
 */
export type NFC = $Result.DefaultSelection<Prisma.$NFCPayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model SessionAttendance
 * 
 */
export type SessionAttendance = $Result.DefaultSelection<Prisma.$SessionAttendancePayload>
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

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type RepeatType = $Enums.RepeatType

export const RepeatType: typeof $Enums.RepeatType

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
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.nFC`: Exposes CRUD operations for the **NFC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NFCS
    * const nFCS = await prisma.nFC.findMany()
    * ```
    */
  get nFC(): Prisma.NFCDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionAttendance`: Exposes CRUD operations for the **SessionAttendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionAttendances
    * const sessionAttendances = await prisma.sessionAttendance.findMany()
    * ```
    */
  get sessionAttendance(): Prisma.SessionAttendanceDelegate<ExtArgs, ClientOptions>;

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
    Profile: 'Profile',
    Session: 'Session',
    NFC: 'NFC',
    Subject: 'Subject',
    SessionAttendance: 'SessionAttendance',
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
      modelProps: "user" | "profile" | "session" | "nFC" | "subject" | "sessionAttendance" | "sessionCycle" | "attendance"
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
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
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
      NFC: {
        payload: Prisma.$NFCPayload<ExtArgs>
        fields: Prisma.NFCFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NFCFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NFCFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCPayload>
          }
          findFirst: {
            args: Prisma.NFCFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NFCFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCPayload>
          }
          findMany: {
            args: Prisma.NFCFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCPayload>[]
          }
          create: {
            args: Prisma.NFCCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCPayload>
          }
          createMany: {
            args: Prisma.NFCCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NFCCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCPayload>[]
          }
          delete: {
            args: Prisma.NFCDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCPayload>
          }
          update: {
            args: Prisma.NFCUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCPayload>
          }
          deleteMany: {
            args: Prisma.NFCDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NFCUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NFCUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCPayload>[]
          }
          upsert: {
            args: Prisma.NFCUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCPayload>
          }
          aggregate: {
            args: Prisma.NFCAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNFC>
          }
          groupBy: {
            args: Prisma.NFCGroupByArgs<ExtArgs>
            result: $Utils.Optional<NFCGroupByOutputType>[]
          }
          count: {
            args: Prisma.NFCCountArgs<ExtArgs>
            result: $Utils.Optional<NFCCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      SessionAttendance: {
        payload: Prisma.$SessionAttendancePayload<ExtArgs>
        fields: Prisma.SessionAttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionAttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionAttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionAttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionAttendancePayload>
          }
          findFirst: {
            args: Prisma.SessionAttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionAttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionAttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionAttendancePayload>
          }
          findMany: {
            args: Prisma.SessionAttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionAttendancePayload>[]
          }
          create: {
            args: Prisma.SessionAttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionAttendancePayload>
          }
          createMany: {
            args: Prisma.SessionAttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionAttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionAttendancePayload>[]
          }
          delete: {
            args: Prisma.SessionAttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionAttendancePayload>
          }
          update: {
            args: Prisma.SessionAttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionAttendancePayload>
          }
          deleteMany: {
            args: Prisma.SessionAttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionAttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionAttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionAttendancePayload>[]
          }
          upsert: {
            args: Prisma.SessionAttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionAttendancePayload>
          }
          aggregate: {
            args: Prisma.SessionAttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionAttendance>
          }
          groupBy: {
            args: Prisma.SessionAttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionAttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionAttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<SessionAttendanceCountAggregateOutputType> | number
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
    profile?: ProfileOmit
    session?: SessionOmit
    nFC?: NFCOmit
    subject?: SubjectOmit
    sessionAttendance?: SessionAttendanceOmit
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
    sessions: number
    nfcs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    nfcs?: boolean | UserCountOutputTypeCountNfcsArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNfcsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NFCWhereInput
  }


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    host: number
    join: number
    attendances: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | ProfileCountOutputTypeCountHostArgs
    join?: boolean | ProfileCountOutputTypeCountJoinArgs
    attendances?: boolean | ProfileCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountHostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountJoinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    students: number
    session: number
    sessionCycle: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | SubjectCountOutputTypeCountStudentsArgs
    session?: boolean | SubjectCountOutputTypeCountSessionArgs
    sessionCycle?: boolean | SubjectCountOutputTypeCountSessionCycleArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionAttendanceWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountSessionCycleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionCycleWhereInput
  }


  /**
   * Count Type SessionAttendanceCountOutputType
   */

  export type SessionAttendanceCountOutputType = {
    SessionCycle: number
  }

  export type SessionAttendanceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SessionCycle?: boolean | SessionAttendanceCountOutputTypeCountSessionCycleArgs
  }

  // Custom InputTypes
  /**
   * SessionAttendanceCountOutputType without action
   */
  export type SessionAttendanceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionAttendanceCountOutputType
     */
    select?: SessionAttendanceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionAttendanceCountOutputType without action
   */
  export type SessionAttendanceCountOutputTypeCountSessionCycleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionCycleWhereInput
  }


  /**
   * Count Type SessionCycleCountOutputType
   */

  export type SessionCycleCountOutputType = {
    attendances: number
  }

  export type SessionCycleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | SessionCycleCountOutputTypeCountAttendancesArgs
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
  export type SessionCycleCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    type: string | null
    authenticator: string | null
    biometric_key: string | null
    profile_id: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    sid: string | null
    gid: string | null
    password: string | null
    type: string | null
    authenticator: string | null
    biometric_key: string | null
    profile_id: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    sid: number
    gid: number
    password: number
    type: number
    authenticator: number
    biometric_key: number
    profile_id: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    sid?: true
    gid?: true
    password?: true
    type?: true
    authenticator?: true
    biometric_key?: true
    profile_id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    sid?: true
    gid?: true
    password?: true
    type?: true
    authenticator?: true
    biometric_key?: true
    profile_id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    sid?: true
    gid?: true
    password?: true
    type?: true
    authenticator?: true
    biometric_key?: true
    profile_id?: true
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
    password: string | null
    type: string
    authenticator: string | null
    biometric_key: string | null
    profile_id: string
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
    type?: boolean
    authenticator?: boolean
    biometric_key?: boolean
    profile_id?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    nfcs?: boolean | User$nfcsArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    sid?: boolean
    gid?: boolean
    password?: boolean
    type?: boolean
    authenticator?: boolean
    biometric_key?: boolean
    profile_id?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    sid?: boolean
    gid?: boolean
    password?: boolean
    type?: boolean
    authenticator?: boolean
    biometric_key?: boolean
    profile_id?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    sid?: boolean
    gid?: boolean
    password?: boolean
    type?: boolean
    authenticator?: boolean
    biometric_key?: boolean
    profile_id?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "sid" | "gid" | "password" | "type" | "authenticator" | "biometric_key" | "profile_id", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    nfcs?: boolean | User$nfcsArgs<ExtArgs>
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      nfcs: Prisma.$NFCPayload<ExtArgs>[]
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      sid: string
      gid: string
      password: string | null
      type: string
      authenticator: string | null
      biometric_key: string | null
      profile_id: string
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
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nfcs<T extends User$nfcsArgs<ExtArgs> = {}>(args?: Subset<T, User$nfcsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NFCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly type: FieldRef<"User", 'String'>
    readonly authenticator: FieldRef<"User", 'String'>
    readonly biometric_key: FieldRef<"User", 'String'>
    readonly profile_id: FieldRef<"User", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.nfcs
   */
  export type User$nfcsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFC
     */
    select?: NFCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFC
     */
    omit?: NFCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCInclude<ExtArgs> | null
    where?: NFCWhereInput
    orderBy?: NFCOrderByWithRelationInput | NFCOrderByWithRelationInput[]
    cursor?: NFCWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NFCScalarFieldEnum | NFCScalarFieldEnum[]
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
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    sid: string | null
    email: string | null
    name: string | null
    dob: Date | null
    official_class: string | null
    faceData: string | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    sid: string | null
    email: string | null
    name: string | null
    dob: Date | null
    official_class: string | null
    faceData: string | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    sid: number
    email: number
    name: number
    dob: number
    official_class: number
    faceData: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    sid?: true
    email?: true
    name?: true
    dob?: true
    official_class?: true
    faceData?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    sid?: true
    email?: true
    name?: true
    dob?: true
    official_class?: true
    faceData?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    sid?: true
    email?: true
    name?: true
    dob?: true
    official_class?: true
    faceData?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    sid: string
    email: string
    name: string
    dob: Date | null
    official_class: string
    faceData: string | null
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    email?: boolean
    name?: boolean
    dob?: boolean
    official_class?: boolean
    faceData?: boolean
    host?: boolean | Profile$hostArgs<ExtArgs>
    join?: boolean | Profile$joinArgs<ExtArgs>
    attendances?: boolean | Profile$attendancesArgs<ExtArgs>
    User?: boolean | Profile$UserArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    email?: boolean
    name?: boolean
    dob?: boolean
    official_class?: boolean
    faceData?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    email?: boolean
    name?: boolean
    dob?: boolean
    official_class?: boolean
    faceData?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    sid?: boolean
    email?: boolean
    name?: boolean
    dob?: boolean
    official_class?: boolean
    faceData?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sid" | "email" | "name" | "dob" | "official_class" | "faceData", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    host?: boolean | Profile$hostArgs<ExtArgs>
    join?: boolean | Profile$joinArgs<ExtArgs>
    attendances?: boolean | Profile$attendancesArgs<ExtArgs>
    User?: boolean | Profile$UserArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      host: Prisma.$SubjectPayload<ExtArgs>[]
      join: Prisma.$SubjectPayload<ExtArgs>[]
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sid: string
      email: string
      name: string
      dob: Date | null
      official_class: string
      faceData: string | null
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    host<T extends Profile$hostArgs<ExtArgs> = {}>(args?: Subset<T, Profile$hostArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    join<T extends Profile$joinArgs<ExtArgs> = {}>(args?: Subset<T, Profile$joinArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendances<T extends Profile$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Profile$UserArgs<ExtArgs> = {}>(args?: Subset<T, Profile$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly sid: FieldRef<"Profile", 'String'>
    readonly email: FieldRef<"Profile", 'String'>
    readonly name: FieldRef<"Profile", 'String'>
    readonly dob: FieldRef<"Profile", 'DateTime'>
    readonly official_class: FieldRef<"Profile", 'String'>
    readonly faceData: FieldRef<"Profile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.host
   */
  export type Profile$hostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Profile.join
   */
  export type Profile$joinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Profile.attendances
   */
  export type Profile$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Profile.User
   */
  export type Profile$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    device_id: string | null
    device_name: string | null
    user_id: string | null
    login_method: string | null
    saved_device: boolean | null
    created_at: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    device_id: string | null
    device_name: string | null
    user_id: string | null
    login_method: string | null
    saved_device: boolean | null
    created_at: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    device_id: number
    device_name: number
    user_id: number
    login_method: number
    saved_device: number
    created_at: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    device_id?: true
    device_name?: true
    user_id?: true
    login_method?: true
    saved_device?: true
    created_at?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    device_id?: true
    device_name?: true
    user_id?: true
    login_method?: true
    saved_device?: true
    created_at?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    device_id?: true
    device_name?: true
    user_id?: true
    login_method?: true
    saved_device?: true
    created_at?: true
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
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    device_id: string
    device_name: string
    user_id: string | null
    login_method: string
    saved_device: boolean
    created_at: Date
    _count: SessionCountAggregateOutputType | null
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
    device_id?: boolean
    device_name?: boolean
    user_id?: boolean
    login_method?: boolean
    saved_device?: boolean
    created_at?: boolean
    user?: boolean | Session$userArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    device_name?: boolean
    user_id?: boolean
    login_method?: boolean
    saved_device?: boolean
    created_at?: boolean
    user?: boolean | Session$userArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    device_name?: boolean
    user_id?: boolean
    login_method?: boolean
    saved_device?: boolean
    created_at?: boolean
    user?: boolean | Session$userArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    device_id?: boolean
    device_name?: boolean
    user_id?: boolean
    login_method?: boolean
    saved_device?: boolean
    created_at?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "device_id" | "device_name" | "user_id" | "login_method" | "saved_device" | "created_at", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Session$userArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Session$userArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Session$userArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      device_id: string
      device_name: string
      user_id: string | null
      login_method: string
      saved_device: boolean
      created_at: Date
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
    user<T extends Session$userArgs<ExtArgs> = {}>(args?: Subset<T, Session$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly device_id: FieldRef<"Session", 'String'>
    readonly device_name: FieldRef<"Session", 'String'>
    readonly user_id: FieldRef<"Session", 'String'>
    readonly login_method: FieldRef<"Session", 'String'>
    readonly saved_device: FieldRef<"Session", 'Boolean'>
    readonly created_at: FieldRef<"Session", 'DateTime'>
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
   * Session.user
   */
  export type Session$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model NFC
   */

  export type AggregateNFC = {
    _count: NFCCountAggregateOutputType | null
    _min: NFCMinAggregateOutputType | null
    _max: NFCMaxAggregateOutputType | null
  }

  export type NFCMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    active: boolean | null
    status: string | null
  }

  export type NFCMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    active: boolean | null
    status: string | null
  }

  export type NFCCountAggregateOutputType = {
    id: number
    user_id: number
    active: number
    status: number
    _all: number
  }


  export type NFCMinAggregateInputType = {
    id?: true
    user_id?: true
    active?: true
    status?: true
  }

  export type NFCMaxAggregateInputType = {
    id?: true
    user_id?: true
    active?: true
    status?: true
  }

  export type NFCCountAggregateInputType = {
    id?: true
    user_id?: true
    active?: true
    status?: true
    _all?: true
  }

  export type NFCAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NFC to aggregate.
     */
    where?: NFCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NFCS to fetch.
     */
    orderBy?: NFCOrderByWithRelationInput | NFCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NFCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NFCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NFCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NFCS
    **/
    _count?: true | NFCCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NFCMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NFCMaxAggregateInputType
  }

  export type GetNFCAggregateType<T extends NFCAggregateArgs> = {
        [P in keyof T & keyof AggregateNFC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNFC[P]>
      : GetScalarType<T[P], AggregateNFC[P]>
  }




  export type NFCGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NFCWhereInput
    orderBy?: NFCOrderByWithAggregationInput | NFCOrderByWithAggregationInput[]
    by: NFCScalarFieldEnum[] | NFCScalarFieldEnum
    having?: NFCScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NFCCountAggregateInputType | true
    _min?: NFCMinAggregateInputType
    _max?: NFCMaxAggregateInputType
  }

  export type NFCGroupByOutputType = {
    id: string
    user_id: string
    active: boolean
    status: string
    _count: NFCCountAggregateOutputType | null
    _min: NFCMinAggregateOutputType | null
    _max: NFCMaxAggregateOutputType | null
  }

  type GetNFCGroupByPayload<T extends NFCGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NFCGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NFCGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NFCGroupByOutputType[P]>
            : GetScalarType<T[P], NFCGroupByOutputType[P]>
        }
      >
    >


  export type NFCSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    active?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nFC"]>

  export type NFCSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    active?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nFC"]>

  export type NFCSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    active?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nFC"]>

  export type NFCSelectScalar = {
    id?: boolean
    user_id?: boolean
    active?: boolean
    status?: boolean
  }

  export type NFCOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "active" | "status", ExtArgs["result"]["nFC"]>
  export type NFCInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NFCIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NFCIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NFCPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NFC"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      active: boolean
      status: string
    }, ExtArgs["result"]["nFC"]>
    composites: {}
  }

  type NFCGetPayload<S extends boolean | null | undefined | NFCDefaultArgs> = $Result.GetResult<Prisma.$NFCPayload, S>

  type NFCCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NFCFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NFCCountAggregateInputType | true
    }

  export interface NFCDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NFC'], meta: { name: 'NFC' } }
    /**
     * Find zero or one NFC that matches the filter.
     * @param {NFCFindUniqueArgs} args - Arguments to find a NFC
     * @example
     * // Get one NFC
     * const nFC = await prisma.nFC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NFCFindUniqueArgs>(args: SelectSubset<T, NFCFindUniqueArgs<ExtArgs>>): Prisma__NFCClient<$Result.GetResult<Prisma.$NFCPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NFC that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NFCFindUniqueOrThrowArgs} args - Arguments to find a NFC
     * @example
     * // Get one NFC
     * const nFC = await prisma.nFC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NFCFindUniqueOrThrowArgs>(args: SelectSubset<T, NFCFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NFCClient<$Result.GetResult<Prisma.$NFCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NFC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFCFindFirstArgs} args - Arguments to find a NFC
     * @example
     * // Get one NFC
     * const nFC = await prisma.nFC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NFCFindFirstArgs>(args?: SelectSubset<T, NFCFindFirstArgs<ExtArgs>>): Prisma__NFCClient<$Result.GetResult<Prisma.$NFCPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NFC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFCFindFirstOrThrowArgs} args - Arguments to find a NFC
     * @example
     * // Get one NFC
     * const nFC = await prisma.nFC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NFCFindFirstOrThrowArgs>(args?: SelectSubset<T, NFCFindFirstOrThrowArgs<ExtArgs>>): Prisma__NFCClient<$Result.GetResult<Prisma.$NFCPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NFCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFCFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NFCS
     * const nFCS = await prisma.nFC.findMany()
     * 
     * // Get first 10 NFCS
     * const nFCS = await prisma.nFC.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nFCWithIdOnly = await prisma.nFC.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NFCFindManyArgs>(args?: SelectSubset<T, NFCFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NFCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NFC.
     * @param {NFCCreateArgs} args - Arguments to create a NFC.
     * @example
     * // Create one NFC
     * const NFC = await prisma.nFC.create({
     *   data: {
     *     // ... data to create a NFC
     *   }
     * })
     * 
     */
    create<T extends NFCCreateArgs>(args: SelectSubset<T, NFCCreateArgs<ExtArgs>>): Prisma__NFCClient<$Result.GetResult<Prisma.$NFCPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NFCS.
     * @param {NFCCreateManyArgs} args - Arguments to create many NFCS.
     * @example
     * // Create many NFCS
     * const nFC = await prisma.nFC.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NFCCreateManyArgs>(args?: SelectSubset<T, NFCCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NFCS and returns the data saved in the database.
     * @param {NFCCreateManyAndReturnArgs} args - Arguments to create many NFCS.
     * @example
     * // Create many NFCS
     * const nFC = await prisma.nFC.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NFCS and only return the `id`
     * const nFCWithIdOnly = await prisma.nFC.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NFCCreateManyAndReturnArgs>(args?: SelectSubset<T, NFCCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NFCPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NFC.
     * @param {NFCDeleteArgs} args - Arguments to delete one NFC.
     * @example
     * // Delete one NFC
     * const NFC = await prisma.nFC.delete({
     *   where: {
     *     // ... filter to delete one NFC
     *   }
     * })
     * 
     */
    delete<T extends NFCDeleteArgs>(args: SelectSubset<T, NFCDeleteArgs<ExtArgs>>): Prisma__NFCClient<$Result.GetResult<Prisma.$NFCPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NFC.
     * @param {NFCUpdateArgs} args - Arguments to update one NFC.
     * @example
     * // Update one NFC
     * const nFC = await prisma.nFC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NFCUpdateArgs>(args: SelectSubset<T, NFCUpdateArgs<ExtArgs>>): Prisma__NFCClient<$Result.GetResult<Prisma.$NFCPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NFCS.
     * @param {NFCDeleteManyArgs} args - Arguments to filter NFCS to delete.
     * @example
     * // Delete a few NFCS
     * const { count } = await prisma.nFC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NFCDeleteManyArgs>(args?: SelectSubset<T, NFCDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NFCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NFCS
     * const nFC = await prisma.nFC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NFCUpdateManyArgs>(args: SelectSubset<T, NFCUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NFCS and returns the data updated in the database.
     * @param {NFCUpdateManyAndReturnArgs} args - Arguments to update many NFCS.
     * @example
     * // Update many NFCS
     * const nFC = await prisma.nFC.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NFCS and only return the `id`
     * const nFCWithIdOnly = await prisma.nFC.updateManyAndReturn({
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
    updateManyAndReturn<T extends NFCUpdateManyAndReturnArgs>(args: SelectSubset<T, NFCUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NFCPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NFC.
     * @param {NFCUpsertArgs} args - Arguments to update or create a NFC.
     * @example
     * // Update or create a NFC
     * const nFC = await prisma.nFC.upsert({
     *   create: {
     *     // ... data to create a NFC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NFC we want to update
     *   }
     * })
     */
    upsert<T extends NFCUpsertArgs>(args: SelectSubset<T, NFCUpsertArgs<ExtArgs>>): Prisma__NFCClient<$Result.GetResult<Prisma.$NFCPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NFCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFCCountArgs} args - Arguments to filter NFCS to count.
     * @example
     * // Count the number of NFCS
     * const count = await prisma.nFC.count({
     *   where: {
     *     // ... the filter for the NFCS we want to count
     *   }
     * })
    **/
    count<T extends NFCCountArgs>(
      args?: Subset<T, NFCCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NFCCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NFC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NFCAggregateArgs>(args: Subset<T, NFCAggregateArgs>): Prisma.PrismaPromise<GetNFCAggregateType<T>>

    /**
     * Group by NFC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFCGroupByArgs} args - Group by arguments.
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
      T extends NFCGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NFCGroupByArgs['orderBy'] }
        : { orderBy?: NFCGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NFCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNFCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NFC model
   */
  readonly fields: NFCFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NFC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NFCClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the NFC model
   */
  interface NFCFieldRefs {
    readonly id: FieldRef<"NFC", 'String'>
    readonly user_id: FieldRef<"NFC", 'String'>
    readonly active: FieldRef<"NFC", 'Boolean'>
    readonly status: FieldRef<"NFC", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NFC findUnique
   */
  export type NFCFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFC
     */
    select?: NFCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFC
     */
    omit?: NFCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCInclude<ExtArgs> | null
    /**
     * Filter, which NFC to fetch.
     */
    where: NFCWhereUniqueInput
  }

  /**
   * NFC findUniqueOrThrow
   */
  export type NFCFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFC
     */
    select?: NFCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFC
     */
    omit?: NFCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCInclude<ExtArgs> | null
    /**
     * Filter, which NFC to fetch.
     */
    where: NFCWhereUniqueInput
  }

  /**
   * NFC findFirst
   */
  export type NFCFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFC
     */
    select?: NFCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFC
     */
    omit?: NFCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCInclude<ExtArgs> | null
    /**
     * Filter, which NFC to fetch.
     */
    where?: NFCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NFCS to fetch.
     */
    orderBy?: NFCOrderByWithRelationInput | NFCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NFCS.
     */
    cursor?: NFCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NFCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NFCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NFCS.
     */
    distinct?: NFCScalarFieldEnum | NFCScalarFieldEnum[]
  }

  /**
   * NFC findFirstOrThrow
   */
  export type NFCFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFC
     */
    select?: NFCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFC
     */
    omit?: NFCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCInclude<ExtArgs> | null
    /**
     * Filter, which NFC to fetch.
     */
    where?: NFCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NFCS to fetch.
     */
    orderBy?: NFCOrderByWithRelationInput | NFCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NFCS.
     */
    cursor?: NFCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NFCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NFCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NFCS.
     */
    distinct?: NFCScalarFieldEnum | NFCScalarFieldEnum[]
  }

  /**
   * NFC findMany
   */
  export type NFCFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFC
     */
    select?: NFCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFC
     */
    omit?: NFCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCInclude<ExtArgs> | null
    /**
     * Filter, which NFCS to fetch.
     */
    where?: NFCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NFCS to fetch.
     */
    orderBy?: NFCOrderByWithRelationInput | NFCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NFCS.
     */
    cursor?: NFCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NFCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NFCS.
     */
    skip?: number
    distinct?: NFCScalarFieldEnum | NFCScalarFieldEnum[]
  }

  /**
   * NFC create
   */
  export type NFCCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFC
     */
    select?: NFCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFC
     */
    omit?: NFCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCInclude<ExtArgs> | null
    /**
     * The data needed to create a NFC.
     */
    data: XOR<NFCCreateInput, NFCUncheckedCreateInput>
  }

  /**
   * NFC createMany
   */
  export type NFCCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NFCS.
     */
    data: NFCCreateManyInput | NFCCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NFC createManyAndReturn
   */
  export type NFCCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFC
     */
    select?: NFCSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NFC
     */
    omit?: NFCOmit<ExtArgs> | null
    /**
     * The data used to create many NFCS.
     */
    data: NFCCreateManyInput | NFCCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NFC update
   */
  export type NFCUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFC
     */
    select?: NFCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFC
     */
    omit?: NFCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCInclude<ExtArgs> | null
    /**
     * The data needed to update a NFC.
     */
    data: XOR<NFCUpdateInput, NFCUncheckedUpdateInput>
    /**
     * Choose, which NFC to update.
     */
    where: NFCWhereUniqueInput
  }

  /**
   * NFC updateMany
   */
  export type NFCUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NFCS.
     */
    data: XOR<NFCUpdateManyMutationInput, NFCUncheckedUpdateManyInput>
    /**
     * Filter which NFCS to update
     */
    where?: NFCWhereInput
    /**
     * Limit how many NFCS to update.
     */
    limit?: number
  }

  /**
   * NFC updateManyAndReturn
   */
  export type NFCUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFC
     */
    select?: NFCSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NFC
     */
    omit?: NFCOmit<ExtArgs> | null
    /**
     * The data used to update NFCS.
     */
    data: XOR<NFCUpdateManyMutationInput, NFCUncheckedUpdateManyInput>
    /**
     * Filter which NFCS to update
     */
    where?: NFCWhereInput
    /**
     * Limit how many NFCS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NFC upsert
   */
  export type NFCUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFC
     */
    select?: NFCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFC
     */
    omit?: NFCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCInclude<ExtArgs> | null
    /**
     * The filter to search for the NFC to update in case it exists.
     */
    where: NFCWhereUniqueInput
    /**
     * In case the NFC found by the `where` argument doesn't exist, create a new NFC with this data.
     */
    create: XOR<NFCCreateInput, NFCUncheckedCreateInput>
    /**
     * In case the NFC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NFCUpdateInput, NFCUncheckedUpdateInput>
  }

  /**
   * NFC delete
   */
  export type NFCDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFC
     */
    select?: NFCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFC
     */
    omit?: NFCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCInclude<ExtArgs> | null
    /**
     * Filter which NFC to delete.
     */
    where: NFCWhereUniqueInput
  }

  /**
   * NFC deleteMany
   */
  export type NFCDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NFCS to delete
     */
    where?: NFCWhereInput
    /**
     * Limit how many NFCS to delete.
     */
    limit?: number
  }

  /**
   * NFC without action
   */
  export type NFCDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFC
     */
    select?: NFCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFC
     */
    omit?: NFCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    openingDay: Date | null
    startTime: Date | null
    endTime: Date | null
    address: string | null
    teacherId: string | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    openingDay: Date | null
    startTime: Date | null
    endTime: Date | null
    address: string | null
    teacherId: string | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    code: number
    name: number
    description: number
    openingDay: number
    startTime: number
    endTime: number
    address: number
    teacherId: number
    _all: number
  }


  export type SubjectMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    openingDay?: true
    startTime?: true
    endTime?: true
    address?: true
    teacherId?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    openingDay?: true
    startTime?: true
    endTime?: true
    address?: true
    teacherId?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    openingDay?: true
    startTime?: true
    endTime?: true
    address?: true
    teacherId?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: string
    code: string
    name: string
    description: string | null
    openingDay: Date
    startTime: Date
    endTime: Date
    address: string
    teacherId: string
    _count: SubjectCountAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    openingDay?: boolean
    startTime?: boolean
    endTime?: boolean
    address?: boolean
    teacherId?: boolean
    teacher?: boolean | ProfileDefaultArgs<ExtArgs>
    students?: boolean | Subject$studentsArgs<ExtArgs>
    session?: boolean | Subject$sessionArgs<ExtArgs>
    sessionCycle?: boolean | Subject$sessionCycleArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    openingDay?: boolean
    startTime?: boolean
    endTime?: boolean
    address?: boolean
    teacherId?: boolean
    teacher?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    openingDay?: boolean
    startTime?: boolean
    endTime?: boolean
    address?: boolean
    teacherId?: boolean
    teacher?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    openingDay?: boolean
    startTime?: boolean
    endTime?: boolean
    address?: boolean
    teacherId?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "description" | "openingDay" | "startTime" | "endTime" | "address" | "teacherId", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | ProfileDefaultArgs<ExtArgs>
    students?: boolean | Subject$studentsArgs<ExtArgs>
    session?: boolean | Subject$sessionArgs<ExtArgs>
    sessionCycle?: boolean | Subject$sessionCycleArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      teacher: Prisma.$ProfilePayload<ExtArgs>
      students: Prisma.$ProfilePayload<ExtArgs>[]
      session: Prisma.$SessionAttendancePayload<ExtArgs>[]
      sessionCycle: Prisma.$SessionCyclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      description: string | null
      openingDay: Date
      startTime: Date
      endTime: Date
      address: string
      teacherId: string
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
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
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends Subject$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    session<T extends Subject$sessionArgs<ExtArgs> = {}>(args?: Subset<T, Subject$sessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessionCycle<T extends Subject$sessionCycleArgs<ExtArgs> = {}>(args?: Subset<T, Subject$sessionCycleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionCyclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'String'>
    readonly code: FieldRef<"Subject", 'String'>
    readonly name: FieldRef<"Subject", 'String'>
    readonly description: FieldRef<"Subject", 'String'>
    readonly openingDay: FieldRef<"Subject", 'DateTime'>
    readonly startTime: FieldRef<"Subject", 'DateTime'>
    readonly endTime: FieldRef<"Subject", 'DateTime'>
    readonly address: FieldRef<"Subject", 'String'>
    readonly teacherId: FieldRef<"Subject", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.students
   */
  export type Subject$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    cursor?: ProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Subject.session
   */
  export type Subject$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionAttendance
     */
    select?: SessionAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionAttendance
     */
    omit?: SessionAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionAttendanceInclude<ExtArgs> | null
    where?: SessionAttendanceWhereInput
    orderBy?: SessionAttendanceOrderByWithRelationInput | SessionAttendanceOrderByWithRelationInput[]
    cursor?: SessionAttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionAttendanceScalarFieldEnum | SessionAttendanceScalarFieldEnum[]
  }

  /**
   * Subject.sessionCycle
   */
  export type Subject$sessionCycleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model SessionAttendance
   */

  export type AggregateSessionAttendance = {
    _count: SessionAttendanceCountAggregateOutputType | null
    _avg: SessionAttendanceAvgAggregateOutputType | null
    _sum: SessionAttendanceSumAggregateOutputType | null
    _min: SessionAttendanceMinAggregateOutputType | null
    _max: SessionAttendanceMaxAggregateOutputType | null
  }

  export type SessionAttendanceAvgAggregateOutputType = {
    duration: number | null
  }

  export type SessionAttendanceSumAggregateOutputType = {
    duration: number | null
  }

  export type SessionAttendanceMinAggregateOutputType = {
    id: string | null
    name: string | null
    start: Date | null
    duration: number | null
    repeat: $Enums.RepeatType | null
    subjectId: string | null
  }

  export type SessionAttendanceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    start: Date | null
    duration: number | null
    repeat: $Enums.RepeatType | null
    subjectId: string | null
  }

  export type SessionAttendanceCountAggregateOutputType = {
    id: number
    name: number
    start: number
    duration: number
    repeat: number
    subjectId: number
    _all: number
  }


  export type SessionAttendanceAvgAggregateInputType = {
    duration?: true
  }

  export type SessionAttendanceSumAggregateInputType = {
    duration?: true
  }

  export type SessionAttendanceMinAggregateInputType = {
    id?: true
    name?: true
    start?: true
    duration?: true
    repeat?: true
    subjectId?: true
  }

  export type SessionAttendanceMaxAggregateInputType = {
    id?: true
    name?: true
    start?: true
    duration?: true
    repeat?: true
    subjectId?: true
  }

  export type SessionAttendanceCountAggregateInputType = {
    id?: true
    name?: true
    start?: true
    duration?: true
    repeat?: true
    subjectId?: true
    _all?: true
  }

  export type SessionAttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionAttendance to aggregate.
     */
    where?: SessionAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionAttendances to fetch.
     */
    orderBy?: SessionAttendanceOrderByWithRelationInput | SessionAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionAttendances
    **/
    _count?: true | SessionAttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionAttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionAttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionAttendanceMaxAggregateInputType
  }

  export type GetSessionAttendanceAggregateType<T extends SessionAttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionAttendance[P]>
      : GetScalarType<T[P], AggregateSessionAttendance[P]>
  }




  export type SessionAttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionAttendanceWhereInput
    orderBy?: SessionAttendanceOrderByWithAggregationInput | SessionAttendanceOrderByWithAggregationInput[]
    by: SessionAttendanceScalarFieldEnum[] | SessionAttendanceScalarFieldEnum
    having?: SessionAttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionAttendanceCountAggregateInputType | true
    _avg?: SessionAttendanceAvgAggregateInputType
    _sum?: SessionAttendanceSumAggregateInputType
    _min?: SessionAttendanceMinAggregateInputType
    _max?: SessionAttendanceMaxAggregateInputType
  }

  export type SessionAttendanceGroupByOutputType = {
    id: string
    name: string
    start: Date
    duration: number
    repeat: $Enums.RepeatType
    subjectId: string
    _count: SessionAttendanceCountAggregateOutputType | null
    _avg: SessionAttendanceAvgAggregateOutputType | null
    _sum: SessionAttendanceSumAggregateOutputType | null
    _min: SessionAttendanceMinAggregateOutputType | null
    _max: SessionAttendanceMaxAggregateOutputType | null
  }

  type GetSessionAttendanceGroupByPayload<T extends SessionAttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionAttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionAttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionAttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], SessionAttendanceGroupByOutputType[P]>
        }
      >
    >


  export type SessionAttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    start?: boolean
    duration?: boolean
    repeat?: boolean
    subjectId?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    SessionCycle?: boolean | SessionAttendance$SessionCycleArgs<ExtArgs>
    _count?: boolean | SessionAttendanceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionAttendance"]>

  export type SessionAttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    start?: boolean
    duration?: boolean
    repeat?: boolean
    subjectId?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionAttendance"]>

  export type SessionAttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    start?: boolean
    duration?: boolean
    repeat?: boolean
    subjectId?: boolean
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionAttendance"]>

  export type SessionAttendanceSelectScalar = {
    id?: boolean
    name?: boolean
    start?: boolean
    duration?: boolean
    repeat?: boolean
    subjectId?: boolean
  }

  export type SessionAttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "start" | "duration" | "repeat" | "subjectId", ExtArgs["result"]["sessionAttendance"]>
  export type SessionAttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    SessionCycle?: boolean | SessionAttendance$SessionCycleArgs<ExtArgs>
    _count?: boolean | SessionAttendanceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionAttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type SessionAttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $SessionAttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionAttendance"
    objects: {
      subject: Prisma.$SubjectPayload<ExtArgs>
      SessionCycle: Prisma.$SessionCyclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      start: Date
      duration: number
      repeat: $Enums.RepeatType
      subjectId: string
    }, ExtArgs["result"]["sessionAttendance"]>
    composites: {}
  }

  type SessionAttendanceGetPayload<S extends boolean | null | undefined | SessionAttendanceDefaultArgs> = $Result.GetResult<Prisma.$SessionAttendancePayload, S>

  type SessionAttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionAttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionAttendanceCountAggregateInputType | true
    }

  export interface SessionAttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionAttendance'], meta: { name: 'SessionAttendance' } }
    /**
     * Find zero or one SessionAttendance that matches the filter.
     * @param {SessionAttendanceFindUniqueArgs} args - Arguments to find a SessionAttendance
     * @example
     * // Get one SessionAttendance
     * const sessionAttendance = await prisma.sessionAttendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionAttendanceFindUniqueArgs>(args: SelectSubset<T, SessionAttendanceFindUniqueArgs<ExtArgs>>): Prisma__SessionAttendanceClient<$Result.GetResult<Prisma.$SessionAttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionAttendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionAttendanceFindUniqueOrThrowArgs} args - Arguments to find a SessionAttendance
     * @example
     * // Get one SessionAttendance
     * const sessionAttendance = await prisma.sessionAttendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionAttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionAttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionAttendanceClient<$Result.GetResult<Prisma.$SessionAttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionAttendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAttendanceFindFirstArgs} args - Arguments to find a SessionAttendance
     * @example
     * // Get one SessionAttendance
     * const sessionAttendance = await prisma.sessionAttendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionAttendanceFindFirstArgs>(args?: SelectSubset<T, SessionAttendanceFindFirstArgs<ExtArgs>>): Prisma__SessionAttendanceClient<$Result.GetResult<Prisma.$SessionAttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionAttendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAttendanceFindFirstOrThrowArgs} args - Arguments to find a SessionAttendance
     * @example
     * // Get one SessionAttendance
     * const sessionAttendance = await prisma.sessionAttendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionAttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionAttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionAttendanceClient<$Result.GetResult<Prisma.$SessionAttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionAttendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionAttendances
     * const sessionAttendances = await prisma.sessionAttendance.findMany()
     * 
     * // Get first 10 SessionAttendances
     * const sessionAttendances = await prisma.sessionAttendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionAttendanceWithIdOnly = await prisma.sessionAttendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionAttendanceFindManyArgs>(args?: SelectSubset<T, SessionAttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionAttendance.
     * @param {SessionAttendanceCreateArgs} args - Arguments to create a SessionAttendance.
     * @example
     * // Create one SessionAttendance
     * const SessionAttendance = await prisma.sessionAttendance.create({
     *   data: {
     *     // ... data to create a SessionAttendance
     *   }
     * })
     * 
     */
    create<T extends SessionAttendanceCreateArgs>(args: SelectSubset<T, SessionAttendanceCreateArgs<ExtArgs>>): Prisma__SessionAttendanceClient<$Result.GetResult<Prisma.$SessionAttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionAttendances.
     * @param {SessionAttendanceCreateManyArgs} args - Arguments to create many SessionAttendances.
     * @example
     * // Create many SessionAttendances
     * const sessionAttendance = await prisma.sessionAttendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionAttendanceCreateManyArgs>(args?: SelectSubset<T, SessionAttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionAttendances and returns the data saved in the database.
     * @param {SessionAttendanceCreateManyAndReturnArgs} args - Arguments to create many SessionAttendances.
     * @example
     * // Create many SessionAttendances
     * const sessionAttendance = await prisma.sessionAttendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionAttendances and only return the `id`
     * const sessionAttendanceWithIdOnly = await prisma.sessionAttendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionAttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionAttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionAttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionAttendance.
     * @param {SessionAttendanceDeleteArgs} args - Arguments to delete one SessionAttendance.
     * @example
     * // Delete one SessionAttendance
     * const SessionAttendance = await prisma.sessionAttendance.delete({
     *   where: {
     *     // ... filter to delete one SessionAttendance
     *   }
     * })
     * 
     */
    delete<T extends SessionAttendanceDeleteArgs>(args: SelectSubset<T, SessionAttendanceDeleteArgs<ExtArgs>>): Prisma__SessionAttendanceClient<$Result.GetResult<Prisma.$SessionAttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionAttendance.
     * @param {SessionAttendanceUpdateArgs} args - Arguments to update one SessionAttendance.
     * @example
     * // Update one SessionAttendance
     * const sessionAttendance = await prisma.sessionAttendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionAttendanceUpdateArgs>(args: SelectSubset<T, SessionAttendanceUpdateArgs<ExtArgs>>): Prisma__SessionAttendanceClient<$Result.GetResult<Prisma.$SessionAttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionAttendances.
     * @param {SessionAttendanceDeleteManyArgs} args - Arguments to filter SessionAttendances to delete.
     * @example
     * // Delete a few SessionAttendances
     * const { count } = await prisma.sessionAttendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionAttendanceDeleteManyArgs>(args?: SelectSubset<T, SessionAttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionAttendances
     * const sessionAttendance = await prisma.sessionAttendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionAttendanceUpdateManyArgs>(args: SelectSubset<T, SessionAttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionAttendances and returns the data updated in the database.
     * @param {SessionAttendanceUpdateManyAndReturnArgs} args - Arguments to update many SessionAttendances.
     * @example
     * // Update many SessionAttendances
     * const sessionAttendance = await prisma.sessionAttendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionAttendances and only return the `id`
     * const sessionAttendanceWithIdOnly = await prisma.sessionAttendance.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionAttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionAttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionAttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionAttendance.
     * @param {SessionAttendanceUpsertArgs} args - Arguments to update or create a SessionAttendance.
     * @example
     * // Update or create a SessionAttendance
     * const sessionAttendance = await prisma.sessionAttendance.upsert({
     *   create: {
     *     // ... data to create a SessionAttendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionAttendance we want to update
     *   }
     * })
     */
    upsert<T extends SessionAttendanceUpsertArgs>(args: SelectSubset<T, SessionAttendanceUpsertArgs<ExtArgs>>): Prisma__SessionAttendanceClient<$Result.GetResult<Prisma.$SessionAttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAttendanceCountArgs} args - Arguments to filter SessionAttendances to count.
     * @example
     * // Count the number of SessionAttendances
     * const count = await prisma.sessionAttendance.count({
     *   where: {
     *     // ... the filter for the SessionAttendances we want to count
     *   }
     * })
    **/
    count<T extends SessionAttendanceCountArgs>(
      args?: Subset<T, SessionAttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionAttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAttendanceAggregateArgs>(args: Subset<T, SessionAttendanceAggregateArgs>): Prisma.PrismaPromise<GetSessionAttendanceAggregateType<T>>

    /**
     * Group by SessionAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAttendanceGroupByArgs} args - Group by arguments.
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
      T extends SessionAttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionAttendanceGroupByArgs['orderBy'] }
        : { orderBy?: SessionAttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionAttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionAttendance model
   */
  readonly fields: SessionAttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionAttendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionAttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    SessionCycle<T extends SessionAttendance$SessionCycleArgs<ExtArgs> = {}>(args?: Subset<T, SessionAttendance$SessionCycleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionCyclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SessionAttendance model
   */
  interface SessionAttendanceFieldRefs {
    readonly id: FieldRef<"SessionAttendance", 'String'>
    readonly name: FieldRef<"SessionAttendance", 'String'>
    readonly start: FieldRef<"SessionAttendance", 'DateTime'>
    readonly duration: FieldRef<"SessionAttendance", 'Int'>
    readonly repeat: FieldRef<"SessionAttendance", 'RepeatType'>
    readonly subjectId: FieldRef<"SessionAttendance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SessionAttendance findUnique
   */
  export type SessionAttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionAttendance
     */
    select?: SessionAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionAttendance
     */
    omit?: SessionAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which SessionAttendance to fetch.
     */
    where: SessionAttendanceWhereUniqueInput
  }

  /**
   * SessionAttendance findUniqueOrThrow
   */
  export type SessionAttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionAttendance
     */
    select?: SessionAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionAttendance
     */
    omit?: SessionAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which SessionAttendance to fetch.
     */
    where: SessionAttendanceWhereUniqueInput
  }

  /**
   * SessionAttendance findFirst
   */
  export type SessionAttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionAttendance
     */
    select?: SessionAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionAttendance
     */
    omit?: SessionAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which SessionAttendance to fetch.
     */
    where?: SessionAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionAttendances to fetch.
     */
    orderBy?: SessionAttendanceOrderByWithRelationInput | SessionAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionAttendances.
     */
    cursor?: SessionAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionAttendances.
     */
    distinct?: SessionAttendanceScalarFieldEnum | SessionAttendanceScalarFieldEnum[]
  }

  /**
   * SessionAttendance findFirstOrThrow
   */
  export type SessionAttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionAttendance
     */
    select?: SessionAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionAttendance
     */
    omit?: SessionAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which SessionAttendance to fetch.
     */
    where?: SessionAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionAttendances to fetch.
     */
    orderBy?: SessionAttendanceOrderByWithRelationInput | SessionAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionAttendances.
     */
    cursor?: SessionAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionAttendances.
     */
    distinct?: SessionAttendanceScalarFieldEnum | SessionAttendanceScalarFieldEnum[]
  }

  /**
   * SessionAttendance findMany
   */
  export type SessionAttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionAttendance
     */
    select?: SessionAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionAttendance
     */
    omit?: SessionAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which SessionAttendances to fetch.
     */
    where?: SessionAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionAttendances to fetch.
     */
    orderBy?: SessionAttendanceOrderByWithRelationInput | SessionAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionAttendances.
     */
    cursor?: SessionAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionAttendances.
     */
    skip?: number
    distinct?: SessionAttendanceScalarFieldEnum | SessionAttendanceScalarFieldEnum[]
  }

  /**
   * SessionAttendance create
   */
  export type SessionAttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionAttendance
     */
    select?: SessionAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionAttendance
     */
    omit?: SessionAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionAttendance.
     */
    data: XOR<SessionAttendanceCreateInput, SessionAttendanceUncheckedCreateInput>
  }

  /**
   * SessionAttendance createMany
   */
  export type SessionAttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionAttendances.
     */
    data: SessionAttendanceCreateManyInput | SessionAttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionAttendance createManyAndReturn
   */
  export type SessionAttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionAttendance
     */
    select?: SessionAttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionAttendance
     */
    omit?: SessionAttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many SessionAttendances.
     */
    data: SessionAttendanceCreateManyInput | SessionAttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionAttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionAttendance update
   */
  export type SessionAttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionAttendance
     */
    select?: SessionAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionAttendance
     */
    omit?: SessionAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionAttendance.
     */
    data: XOR<SessionAttendanceUpdateInput, SessionAttendanceUncheckedUpdateInput>
    /**
     * Choose, which SessionAttendance to update.
     */
    where: SessionAttendanceWhereUniqueInput
  }

  /**
   * SessionAttendance updateMany
   */
  export type SessionAttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionAttendances.
     */
    data: XOR<SessionAttendanceUpdateManyMutationInput, SessionAttendanceUncheckedUpdateManyInput>
    /**
     * Filter which SessionAttendances to update
     */
    where?: SessionAttendanceWhereInput
    /**
     * Limit how many SessionAttendances to update.
     */
    limit?: number
  }

  /**
   * SessionAttendance updateManyAndReturn
   */
  export type SessionAttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionAttendance
     */
    select?: SessionAttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionAttendance
     */
    omit?: SessionAttendanceOmit<ExtArgs> | null
    /**
     * The data used to update SessionAttendances.
     */
    data: XOR<SessionAttendanceUpdateManyMutationInput, SessionAttendanceUncheckedUpdateManyInput>
    /**
     * Filter which SessionAttendances to update
     */
    where?: SessionAttendanceWhereInput
    /**
     * Limit how many SessionAttendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionAttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionAttendance upsert
   */
  export type SessionAttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionAttendance
     */
    select?: SessionAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionAttendance
     */
    omit?: SessionAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionAttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionAttendance to update in case it exists.
     */
    where: SessionAttendanceWhereUniqueInput
    /**
     * In case the SessionAttendance found by the `where` argument doesn't exist, create a new SessionAttendance with this data.
     */
    create: XOR<SessionAttendanceCreateInput, SessionAttendanceUncheckedCreateInput>
    /**
     * In case the SessionAttendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionAttendanceUpdateInput, SessionAttendanceUncheckedUpdateInput>
  }

  /**
   * SessionAttendance delete
   */
  export type SessionAttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionAttendance
     */
    select?: SessionAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionAttendance
     */
    omit?: SessionAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionAttendanceInclude<ExtArgs> | null
    /**
     * Filter which SessionAttendance to delete.
     */
    where: SessionAttendanceWhereUniqueInput
  }

  /**
   * SessionAttendance deleteMany
   */
  export type SessionAttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionAttendances to delete
     */
    where?: SessionAttendanceWhereInput
    /**
     * Limit how many SessionAttendances to delete.
     */
    limit?: number
  }

  /**
   * SessionAttendance.SessionCycle
   */
  export type SessionAttendance$SessionCycleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * SessionAttendance without action
   */
  export type SessionAttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionAttendance
     */
    select?: SessionAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionAttendance
     */
    omit?: SessionAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionAttendanceInclude<ExtArgs> | null
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
    subjectId: string | null
  }

  export type SessionCycleMaxAggregateOutputType = {
    id: string | null
    start: Date | null
    sessionId: string | null
    subjectId: string | null
  }

  export type SessionCycleCountAggregateOutputType = {
    id: number
    start: number
    sessionId: number
    subjectId: number
    _all: number
  }


  export type SessionCycleMinAggregateInputType = {
    id?: true
    start?: true
    sessionId?: true
    subjectId?: true
  }

  export type SessionCycleMaxAggregateInputType = {
    id?: true
    start?: true
    sessionId?: true
    subjectId?: true
  }

  export type SessionCycleCountAggregateInputType = {
    id?: true
    start?: true
    sessionId?: true
    subjectId?: true
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
    subjectId: string | null
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
    subjectId?: boolean
    session?: boolean | SessionAttendanceDefaultArgs<ExtArgs>
    subject?: boolean | SessionCycle$subjectArgs<ExtArgs>
    attendances?: boolean | SessionCycle$attendancesArgs<ExtArgs>
    _count?: boolean | SessionCycleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionCycle"]>

  export type SessionCycleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    sessionId?: boolean
    subjectId?: boolean
    session?: boolean | SessionAttendanceDefaultArgs<ExtArgs>
    subject?: boolean | SessionCycle$subjectArgs<ExtArgs>
  }, ExtArgs["result"]["sessionCycle"]>

  export type SessionCycleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    sessionId?: boolean
    subjectId?: boolean
    session?: boolean | SessionAttendanceDefaultArgs<ExtArgs>
    subject?: boolean | SessionCycle$subjectArgs<ExtArgs>
  }, ExtArgs["result"]["sessionCycle"]>

  export type SessionCycleSelectScalar = {
    id?: boolean
    start?: boolean
    sessionId?: boolean
    subjectId?: boolean
  }

  export type SessionCycleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "start" | "sessionId" | "subjectId", ExtArgs["result"]["sessionCycle"]>
  export type SessionCycleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionAttendanceDefaultArgs<ExtArgs>
    subject?: boolean | SessionCycle$subjectArgs<ExtArgs>
    attendances?: boolean | SessionCycle$attendancesArgs<ExtArgs>
    _count?: boolean | SessionCycleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionCycleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionAttendanceDefaultArgs<ExtArgs>
    subject?: boolean | SessionCycle$subjectArgs<ExtArgs>
  }
  export type SessionCycleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionAttendanceDefaultArgs<ExtArgs>
    subject?: boolean | SessionCycle$subjectArgs<ExtArgs>
  }

  export type $SessionCyclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionCycle"
    objects: {
      session: Prisma.$SessionAttendancePayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs> | null
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      start: Date
      sessionId: string
      subjectId: string | null
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
    session<T extends SessionAttendanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionAttendanceDefaultArgs<ExtArgs>>): Prisma__SessionAttendanceClient<$Result.GetResult<Prisma.$SessionAttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SessionCycle$subjectArgs<ExtArgs> = {}>(args?: Subset<T, SessionCycle$subjectArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    attendances<T extends SessionCycle$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, SessionCycle$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly subjectId: FieldRef<"SessionCycle", 'String'>
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
   * SessionCycle.subject
   */
  export type SessionCycle$subjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
  }

  /**
   * SessionCycle.attendances
   */
  export type SessionCycle$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    isVerified: boolean | null
    deviceId: string | null
    attendantId: string | null
    sessionCycleId: string | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    time: Date | null
    isVerified: boolean | null
    deviceId: string | null
    attendantId: string | null
    sessionCycleId: string | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    time: number
    isVerified: number
    deviceId: number
    attendantId: number
    sessionCycleId: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    time?: true
    isVerified?: true
    deviceId?: true
    attendantId?: true
    sessionCycleId?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    time?: true
    isVerified?: true
    deviceId?: true
    attendantId?: true
    sessionCycleId?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    time?: true
    isVerified?: true
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
    isVerified: boolean
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
    isVerified?: boolean
    deviceId?: boolean
    attendantId?: boolean
    sessionCycleId?: boolean
    attendant?: boolean | ProfileDefaultArgs<ExtArgs>
    sessionCycle?: boolean | SessionCycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    isVerified?: boolean
    deviceId?: boolean
    attendantId?: boolean
    sessionCycleId?: boolean
    attendant?: boolean | ProfileDefaultArgs<ExtArgs>
    sessionCycle?: boolean | SessionCycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    isVerified?: boolean
    deviceId?: boolean
    attendantId?: boolean
    sessionCycleId?: boolean
    attendant?: boolean | ProfileDefaultArgs<ExtArgs>
    sessionCycle?: boolean | SessionCycleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    time?: boolean
    isVerified?: boolean
    deviceId?: boolean
    attendantId?: boolean
    sessionCycleId?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "time" | "isVerified" | "deviceId" | "attendantId" | "sessionCycleId", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendant?: boolean | ProfileDefaultArgs<ExtArgs>
    sessionCycle?: boolean | SessionCycleDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendant?: boolean | ProfileDefaultArgs<ExtArgs>
    sessionCycle?: boolean | SessionCycleDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendant?: boolean | ProfileDefaultArgs<ExtArgs>
    sessionCycle?: boolean | SessionCycleDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      attendant: Prisma.$ProfilePayload<ExtArgs>
      sessionCycle: Prisma.$SessionCyclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      time: Date
      isVerified: boolean
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
    attendant<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly isVerified: FieldRef<"Attendance", 'Boolean'>
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
    type: 'type',
    authenticator: 'authenticator',
    biometric_key: 'biometric_key',
    profile_id: 'profile_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    sid: 'sid',
    email: 'email',
    name: 'name',
    dob: 'dob',
    official_class: 'official_class',
    faceData: 'faceData'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    device_id: 'device_id',
    device_name: 'device_name',
    user_id: 'user_id',
    login_method: 'login_method',
    saved_device: 'saved_device',
    created_at: 'created_at'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const NFCScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    active: 'active',
    status: 'status'
  };

  export type NFCScalarFieldEnum = (typeof NFCScalarFieldEnum)[keyof typeof NFCScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    openingDay: 'openingDay',
    startTime: 'startTime',
    endTime: 'endTime',
    address: 'address',
    teacherId: 'teacherId'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const SessionAttendanceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    start: 'start',
    duration: 'duration',
    repeat: 'repeat',
    subjectId: 'subjectId'
  };

  export type SessionAttendanceScalarFieldEnum = (typeof SessionAttendanceScalarFieldEnum)[keyof typeof SessionAttendanceScalarFieldEnum]


  export const SessionCycleScalarFieldEnum: {
    id: 'id',
    start: 'start',
    sessionId: 'sessionId',
    subjectId: 'subjectId'
  };

  export type SessionCycleScalarFieldEnum = (typeof SessionCycleScalarFieldEnum)[keyof typeof SessionCycleScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    time: 'time',
    isVerified: 'isVerified',
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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    password?: StringNullableFilter<"User"> | string | null
    type?: StringFilter<"User"> | string
    authenticator?: StringNullableFilter<"User"> | string | null
    biometric_key?: StringNullableFilter<"User"> | string | null
    profile_id?: StringFilter<"User"> | string
    sessions?: SessionListRelationFilter
    nfcs?: NFCListRelationFilter
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    sid?: SortOrder
    gid?: SortOrder
    password?: SortOrderInput | SortOrder
    type?: SortOrder
    authenticator?: SortOrderInput | SortOrder
    biometric_key?: SortOrderInput | SortOrder
    profile_id?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    nfcs?: NFCOrderByRelationAggregateInput
    profile?: ProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    sid?: string
    gid?: string
    profile_id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    type?: StringFilter<"User"> | string
    authenticator?: StringNullableFilter<"User"> | string | null
    biometric_key?: StringNullableFilter<"User"> | string | null
    sessions?: SessionListRelationFilter
    nfcs?: NFCListRelationFilter
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id" | "email" | "sid" | "gid" | "profile_id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    sid?: SortOrder
    gid?: SortOrder
    password?: SortOrderInput | SortOrder
    type?: SortOrder
    authenticator?: SortOrderInput | SortOrder
    biometric_key?: SortOrderInput | SortOrder
    profile_id?: SortOrder
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
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    type?: StringWithAggregatesFilter<"User"> | string
    authenticator?: StringNullableWithAggregatesFilter<"User"> | string | null
    biometric_key?: StringNullableWithAggregatesFilter<"User"> | string | null
    profile_id?: StringWithAggregatesFilter<"User"> | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    sid?: StringFilter<"Profile"> | string
    email?: StringFilter<"Profile"> | string
    name?: StringFilter<"Profile"> | string
    dob?: DateTimeNullableFilter<"Profile"> | Date | string | null
    official_class?: StringFilter<"Profile"> | string
    faceData?: StringNullableFilter<"Profile"> | string | null
    host?: SubjectListRelationFilter
    join?: SubjectListRelationFilter
    attendances?: AttendanceListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    sid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    dob?: SortOrderInput | SortOrder
    official_class?: SortOrder
    faceData?: SortOrderInput | SortOrder
    host?: SubjectOrderByRelationAggregateInput
    join?: SubjectOrderByRelationAggregateInput
    attendances?: AttendanceOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    sid?: StringFilter<"Profile"> | string
    email?: StringFilter<"Profile"> | string
    name?: StringFilter<"Profile"> | string
    dob?: DateTimeNullableFilter<"Profile"> | Date | string | null
    official_class?: StringFilter<"Profile"> | string
    faceData?: StringNullableFilter<"Profile"> | string | null
    host?: SubjectListRelationFilter
    join?: SubjectListRelationFilter
    attendances?: AttendanceListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    sid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    dob?: SortOrderInput | SortOrder
    official_class?: SortOrder
    faceData?: SortOrderInput | SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    sid?: StringWithAggregatesFilter<"Profile"> | string
    email?: StringWithAggregatesFilter<"Profile"> | string
    name?: StringWithAggregatesFilter<"Profile"> | string
    dob?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
    official_class?: StringWithAggregatesFilter<"Profile"> | string
    faceData?: StringNullableWithAggregatesFilter<"Profile"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    device_id?: StringFilter<"Session"> | string
    device_name?: StringFilter<"Session"> | string
    user_id?: StringNullableFilter<"Session"> | string | null
    login_method?: StringFilter<"Session"> | string
    saved_device?: BoolFilter<"Session"> | boolean
    created_at?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    device_id?: SortOrder
    device_name?: SortOrder
    user_id?: SortOrderInput | SortOrder
    login_method?: SortOrder
    saved_device?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    device_id?: StringFilter<"Session"> | string
    device_name?: StringFilter<"Session"> | string
    user_id?: StringNullableFilter<"Session"> | string | null
    login_method?: StringFilter<"Session"> | string
    saved_device?: BoolFilter<"Session"> | boolean
    created_at?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    device_id?: SortOrder
    device_name?: SortOrder
    user_id?: SortOrderInput | SortOrder
    login_method?: SortOrder
    saved_device?: SortOrder
    created_at?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    device_id?: StringWithAggregatesFilter<"Session"> | string
    device_name?: StringWithAggregatesFilter<"Session"> | string
    user_id?: StringNullableWithAggregatesFilter<"Session"> | string | null
    login_method?: StringWithAggregatesFilter<"Session"> | string
    saved_device?: BoolWithAggregatesFilter<"Session"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type NFCWhereInput = {
    AND?: NFCWhereInput | NFCWhereInput[]
    OR?: NFCWhereInput[]
    NOT?: NFCWhereInput | NFCWhereInput[]
    id?: StringFilter<"NFC"> | string
    user_id?: StringFilter<"NFC"> | string
    active?: BoolFilter<"NFC"> | boolean
    status?: StringFilter<"NFC"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NFCOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    active?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NFCWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NFCWhereInput | NFCWhereInput[]
    OR?: NFCWhereInput[]
    NOT?: NFCWhereInput | NFCWhereInput[]
    user_id?: StringFilter<"NFC"> | string
    active?: BoolFilter<"NFC"> | boolean
    status?: StringFilter<"NFC"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NFCOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    active?: SortOrder
    status?: SortOrder
    _count?: NFCCountOrderByAggregateInput
    _max?: NFCMaxOrderByAggregateInput
    _min?: NFCMinOrderByAggregateInput
  }

  export type NFCScalarWhereWithAggregatesInput = {
    AND?: NFCScalarWhereWithAggregatesInput | NFCScalarWhereWithAggregatesInput[]
    OR?: NFCScalarWhereWithAggregatesInput[]
    NOT?: NFCScalarWhereWithAggregatesInput | NFCScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NFC"> | string
    user_id?: StringWithAggregatesFilter<"NFC"> | string
    active?: BoolWithAggregatesFilter<"NFC"> | boolean
    status?: StringWithAggregatesFilter<"NFC"> | string
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: StringFilter<"Subject"> | string
    code?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    description?: StringNullableFilter<"Subject"> | string | null
    openingDay?: DateTimeFilter<"Subject"> | Date | string
    startTime?: DateTimeFilter<"Subject"> | Date | string
    endTime?: DateTimeFilter<"Subject"> | Date | string
    address?: StringFilter<"Subject"> | string
    teacherId?: StringFilter<"Subject"> | string
    teacher?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    students?: ProfileListRelationFilter
    session?: SessionAttendanceListRelationFilter
    sessionCycle?: SessionCycleListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    openingDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    address?: SortOrder
    teacherId?: SortOrder
    teacher?: ProfileOrderByWithRelationInput
    students?: ProfileOrderByRelationAggregateInput
    session?: SessionAttendanceOrderByRelationAggregateInput
    sessionCycle?: SessionCycleOrderByRelationAggregateInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    code?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    description?: StringNullableFilter<"Subject"> | string | null
    openingDay?: DateTimeFilter<"Subject"> | Date | string
    startTime?: DateTimeFilter<"Subject"> | Date | string
    endTime?: DateTimeFilter<"Subject"> | Date | string
    address?: StringFilter<"Subject"> | string
    teacherId?: StringFilter<"Subject"> | string
    teacher?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    students?: ProfileListRelationFilter
    session?: SessionAttendanceListRelationFilter
    sessionCycle?: SessionCycleListRelationFilter
  }, "id">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    openingDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    address?: SortOrder
    teacherId?: SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subject"> | string
    code?: StringWithAggregatesFilter<"Subject"> | string
    name?: StringWithAggregatesFilter<"Subject"> | string
    description?: StringNullableWithAggregatesFilter<"Subject"> | string | null
    openingDay?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
    startTime?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Subject"> | Date | string
    address?: StringWithAggregatesFilter<"Subject"> | string
    teacherId?: StringWithAggregatesFilter<"Subject"> | string
  }

  export type SessionAttendanceWhereInput = {
    AND?: SessionAttendanceWhereInput | SessionAttendanceWhereInput[]
    OR?: SessionAttendanceWhereInput[]
    NOT?: SessionAttendanceWhereInput | SessionAttendanceWhereInput[]
    id?: StringFilter<"SessionAttendance"> | string
    name?: StringFilter<"SessionAttendance"> | string
    start?: DateTimeFilter<"SessionAttendance"> | Date | string
    duration?: IntFilter<"SessionAttendance"> | number
    repeat?: EnumRepeatTypeFilter<"SessionAttendance"> | $Enums.RepeatType
    subjectId?: StringFilter<"SessionAttendance"> | string
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    SessionCycle?: SessionCycleListRelationFilter
  }

  export type SessionAttendanceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    start?: SortOrder
    duration?: SortOrder
    repeat?: SortOrder
    subjectId?: SortOrder
    subject?: SubjectOrderByWithRelationInput
    SessionCycle?: SessionCycleOrderByRelationAggregateInput
  }

  export type SessionAttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionAttendanceWhereInput | SessionAttendanceWhereInput[]
    OR?: SessionAttendanceWhereInput[]
    NOT?: SessionAttendanceWhereInput | SessionAttendanceWhereInput[]
    name?: StringFilter<"SessionAttendance"> | string
    start?: DateTimeFilter<"SessionAttendance"> | Date | string
    duration?: IntFilter<"SessionAttendance"> | number
    repeat?: EnumRepeatTypeFilter<"SessionAttendance"> | $Enums.RepeatType
    subjectId?: StringFilter<"SessionAttendance"> | string
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
    SessionCycle?: SessionCycleListRelationFilter
  }, "id">

  export type SessionAttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    start?: SortOrder
    duration?: SortOrder
    repeat?: SortOrder
    subjectId?: SortOrder
    _count?: SessionAttendanceCountOrderByAggregateInput
    _avg?: SessionAttendanceAvgOrderByAggregateInput
    _max?: SessionAttendanceMaxOrderByAggregateInput
    _min?: SessionAttendanceMinOrderByAggregateInput
    _sum?: SessionAttendanceSumOrderByAggregateInput
  }

  export type SessionAttendanceScalarWhereWithAggregatesInput = {
    AND?: SessionAttendanceScalarWhereWithAggregatesInput | SessionAttendanceScalarWhereWithAggregatesInput[]
    OR?: SessionAttendanceScalarWhereWithAggregatesInput[]
    NOT?: SessionAttendanceScalarWhereWithAggregatesInput | SessionAttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionAttendance"> | string
    name?: StringWithAggregatesFilter<"SessionAttendance"> | string
    start?: DateTimeWithAggregatesFilter<"SessionAttendance"> | Date | string
    duration?: IntWithAggregatesFilter<"SessionAttendance"> | number
    repeat?: EnumRepeatTypeWithAggregatesFilter<"SessionAttendance"> | $Enums.RepeatType
    subjectId?: StringWithAggregatesFilter<"SessionAttendance"> | string
  }

  export type SessionCycleWhereInput = {
    AND?: SessionCycleWhereInput | SessionCycleWhereInput[]
    OR?: SessionCycleWhereInput[]
    NOT?: SessionCycleWhereInput | SessionCycleWhereInput[]
    id?: StringFilter<"SessionCycle"> | string
    start?: DateTimeFilter<"SessionCycle"> | Date | string
    sessionId?: StringFilter<"SessionCycle"> | string
    subjectId?: StringNullableFilter<"SessionCycle"> | string | null
    session?: XOR<SessionAttendanceScalarRelationFilter, SessionAttendanceWhereInput>
    subject?: XOR<SubjectNullableScalarRelationFilter, SubjectWhereInput> | null
    attendances?: AttendanceListRelationFilter
  }

  export type SessionCycleOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    sessionId?: SortOrder
    subjectId?: SortOrderInput | SortOrder
    session?: SessionAttendanceOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
    attendances?: AttendanceOrderByRelationAggregateInput
  }

  export type SessionCycleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionCycleWhereInput | SessionCycleWhereInput[]
    OR?: SessionCycleWhereInput[]
    NOT?: SessionCycleWhereInput | SessionCycleWhereInput[]
    start?: DateTimeFilter<"SessionCycle"> | Date | string
    sessionId?: StringFilter<"SessionCycle"> | string
    subjectId?: StringNullableFilter<"SessionCycle"> | string | null
    session?: XOR<SessionAttendanceScalarRelationFilter, SessionAttendanceWhereInput>
    subject?: XOR<SubjectNullableScalarRelationFilter, SubjectWhereInput> | null
    attendances?: AttendanceListRelationFilter
  }, "id">

  export type SessionCycleOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    sessionId?: SortOrder
    subjectId?: SortOrderInput | SortOrder
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
    subjectId?: StringNullableWithAggregatesFilter<"SessionCycle"> | string | null
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: StringFilter<"Attendance"> | string
    time?: DateTimeFilter<"Attendance"> | Date | string
    isVerified?: BoolFilter<"Attendance"> | boolean
    deviceId?: StringFilter<"Attendance"> | string
    attendantId?: StringFilter<"Attendance"> | string
    sessionCycleId?: StringFilter<"Attendance"> | string
    attendant?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    sessionCycle?: XOR<SessionCycleScalarRelationFilter, SessionCycleWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    time?: SortOrder
    isVerified?: SortOrder
    deviceId?: SortOrder
    attendantId?: SortOrder
    sessionCycleId?: SortOrder
    attendant?: ProfileOrderByWithRelationInput
    sessionCycle?: SessionCycleOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    time?: DateTimeFilter<"Attendance"> | Date | string
    isVerified?: BoolFilter<"Attendance"> | boolean
    deviceId?: StringFilter<"Attendance"> | string
    attendantId?: StringFilter<"Attendance"> | string
    sessionCycleId?: StringFilter<"Attendance"> | string
    attendant?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    sessionCycle?: XOR<SessionCycleScalarRelationFilter, SessionCycleWhereInput>
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    time?: SortOrder
    isVerified?: SortOrder
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
    isVerified?: BoolWithAggregatesFilter<"Attendance"> | boolean
    deviceId?: StringWithAggregatesFilter<"Attendance"> | string
    attendantId?: StringWithAggregatesFilter<"Attendance"> | string
    sessionCycleId?: StringWithAggregatesFilter<"Attendance"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    sid: string
    gid: string
    password?: string | null
    type: string
    authenticator?: string | null
    biometric_key?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    nfcs?: NFCCreateNestedManyWithoutUserInput
    profile: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    sid: string
    gid: string
    password?: string | null
    type: string
    authenticator?: string | null
    biometric_key?: string | null
    profile_id: string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    nfcs?: NFCUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    authenticator?: NullableStringFieldUpdateOperationsInput | string | null
    biometric_key?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    nfcs?: NFCUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    authenticator?: NullableStringFieldUpdateOperationsInput | string | null
    biometric_key?: NullableStringFieldUpdateOperationsInput | string | null
    profile_id?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    nfcs?: NFCUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    sid: string
    gid: string
    password?: string | null
    type: string
    authenticator?: string | null
    biometric_key?: string | null
    profile_id: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    authenticator?: NullableStringFieldUpdateOperationsInput | string | null
    biometric_key?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    authenticator?: NullableStringFieldUpdateOperationsInput | string | null
    biometric_key?: NullableStringFieldUpdateOperationsInput | string | null
    profile_id?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileCreateInput = {
    id?: string
    sid: string
    email: string
    name: string
    dob?: Date | string | null
    official_class: string
    faceData?: string | null
    host?: SubjectCreateNestedManyWithoutTeacherInput
    join?: SubjectCreateNestedManyWithoutStudentsInput
    attendances?: AttendanceCreateNestedManyWithoutAttendantInput
    User?: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    sid: string
    email: string
    name: string
    dob?: Date | string | null
    official_class: string
    faceData?: string | null
    host?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    join?: SubjectUncheckedCreateNestedManyWithoutStudentsInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutAttendantInput
    User?: UserUncheckedCreateNestedOneWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    official_class?: StringFieldUpdateOperationsInput | string
    faceData?: NullableStringFieldUpdateOperationsInput | string | null
    host?: SubjectUpdateManyWithoutTeacherNestedInput
    join?: SubjectUpdateManyWithoutStudentsNestedInput
    attendances?: AttendanceUpdateManyWithoutAttendantNestedInput
    User?: UserUpdateOneWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    official_class?: StringFieldUpdateOperationsInput | string
    faceData?: NullableStringFieldUpdateOperationsInput | string | null
    host?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    join?: SubjectUncheckedUpdateManyWithoutStudentsNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutAttendantNestedInput
    User?: UserUncheckedUpdateOneWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    sid: string
    email: string
    name: string
    dob?: Date | string | null
    official_class: string
    faceData?: string | null
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    official_class?: StringFieldUpdateOperationsInput | string
    faceData?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    official_class?: StringFieldUpdateOperationsInput | string
    faceData?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    device_id: string
    device_name: string
    login_method: string
    saved_device: boolean
    created_at: Date | string
    user?: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    device_id: string
    device_name: string
    user_id?: string | null
    login_method: string
    saved_device: boolean
    created_at: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    device_id?: StringFieldUpdateOperationsInput | string
    device_name?: StringFieldUpdateOperationsInput | string
    login_method?: StringFieldUpdateOperationsInput | string
    saved_device?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    device_id?: StringFieldUpdateOperationsInput | string
    device_name?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    login_method?: StringFieldUpdateOperationsInput | string
    saved_device?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    device_id: string
    device_name: string
    user_id?: string | null
    login_method: string
    saved_device: boolean
    created_at: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    device_id?: StringFieldUpdateOperationsInput | string
    device_name?: StringFieldUpdateOperationsInput | string
    login_method?: StringFieldUpdateOperationsInput | string
    saved_device?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    device_id?: StringFieldUpdateOperationsInput | string
    device_name?: StringFieldUpdateOperationsInput | string
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    login_method?: StringFieldUpdateOperationsInput | string
    saved_device?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NFCCreateInput = {
    id?: string
    active: boolean
    status: string
    user: UserCreateNestedOneWithoutNfcsInput
  }

  export type NFCUncheckedCreateInput = {
    id?: string
    user_id: string
    active: boolean
    status: string
  }

  export type NFCUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutNfcsNestedInput
  }

  export type NFCUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type NFCCreateManyInput = {
    id?: string
    user_id: string
    active: boolean
    status: string
  }

  export type NFCUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type NFCUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectCreateInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
    teacher: ProfileCreateNestedOneWithoutHostInput
    students?: ProfileCreateNestedManyWithoutJoinInput
    session?: SessionAttendanceCreateNestedManyWithoutSubjectInput
    sessionCycle?: SessionCycleCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
    teacherId: string
    students?: ProfileUncheckedCreateNestedManyWithoutJoinInput
    session?: SessionAttendanceUncheckedCreateNestedManyWithoutSubjectInput
    sessionCycle?: SessionCycleUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    teacher?: ProfileUpdateOneRequiredWithoutHostNestedInput
    students?: ProfileUpdateManyWithoutJoinNestedInput
    session?: SessionAttendanceUpdateManyWithoutSubjectNestedInput
    sessionCycle?: SessionCycleUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    students?: ProfileUncheckedUpdateManyWithoutJoinNestedInput
    session?: SessionAttendanceUncheckedUpdateManyWithoutSubjectNestedInput
    sessionCycle?: SessionCycleUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
    teacherId: string
  }

  export type SubjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionAttendanceCreateInput = {
    id?: string
    name: string
    start: Date | string
    duration: number
    repeat: $Enums.RepeatType
    subject: SubjectCreateNestedOneWithoutSessionInput
    SessionCycle?: SessionCycleCreateNestedManyWithoutSessionInput
  }

  export type SessionAttendanceUncheckedCreateInput = {
    id?: string
    name: string
    start: Date | string
    duration: number
    repeat: $Enums.RepeatType
    subjectId: string
    SessionCycle?: SessionCycleUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionAttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    repeat?: EnumRepeatTypeFieldUpdateOperationsInput | $Enums.RepeatType
    subject?: SubjectUpdateOneRequiredWithoutSessionNestedInput
    SessionCycle?: SessionCycleUpdateManyWithoutSessionNestedInput
  }

  export type SessionAttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    repeat?: EnumRepeatTypeFieldUpdateOperationsInput | $Enums.RepeatType
    subjectId?: StringFieldUpdateOperationsInput | string
    SessionCycle?: SessionCycleUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionAttendanceCreateManyInput = {
    id?: string
    name: string
    start: Date | string
    duration: number
    repeat: $Enums.RepeatType
    subjectId: string
  }

  export type SessionAttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    repeat?: EnumRepeatTypeFieldUpdateOperationsInput | $Enums.RepeatType
  }

  export type SessionAttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    repeat?: EnumRepeatTypeFieldUpdateOperationsInput | $Enums.RepeatType
    subjectId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCycleCreateInput = {
    id?: string
    start: Date | string
    session: SessionAttendanceCreateNestedOneWithoutSessionCycleInput
    subject?: SubjectCreateNestedOneWithoutSessionCycleInput
    attendances?: AttendanceCreateNestedManyWithoutSessionCycleInput
  }

  export type SessionCycleUncheckedCreateInput = {
    id?: string
    start: Date | string
    sessionId: string
    subjectId?: string | null
    attendances?: AttendanceUncheckedCreateNestedManyWithoutSessionCycleInput
  }

  export type SessionCycleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionAttendanceUpdateOneRequiredWithoutSessionCycleNestedInput
    subject?: SubjectUpdateOneWithoutSessionCycleNestedInput
    attendances?: AttendanceUpdateManyWithoutSessionCycleNestedInput
  }

  export type SessionCycleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionId?: StringFieldUpdateOperationsInput | string
    subjectId?: NullableStringFieldUpdateOperationsInput | string | null
    attendances?: AttendanceUncheckedUpdateManyWithoutSessionCycleNestedInput
  }

  export type SessionCycleCreateManyInput = {
    id?: string
    start: Date | string
    sessionId: string
    subjectId?: string | null
  }

  export type SessionCycleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCycleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionId?: StringFieldUpdateOperationsInput | string
    subjectId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceCreateInput = {
    id?: string
    time: Date | string
    isVerified: boolean
    deviceId: string
    attendant: ProfileCreateNestedOneWithoutAttendancesInput
    sessionCycle: SessionCycleCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    time: Date | string
    isVerified: boolean
    deviceId: string
    attendantId: string
    sessionCycleId: string
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    deviceId?: StringFieldUpdateOperationsInput | string
    attendant?: ProfileUpdateOneRequiredWithoutAttendancesNestedInput
    sessionCycle?: SessionCycleUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    deviceId?: StringFieldUpdateOperationsInput | string
    attendantId?: StringFieldUpdateOperationsInput | string
    sessionCycleId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceCreateManyInput = {
    id?: string
    time: Date | string
    isVerified: boolean
    deviceId: string
    attendantId: string
    sessionCycleId: string
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    deviceId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type NFCListRelationFilter = {
    every?: NFCWhereInput
    some?: NFCWhereInput
    none?: NFCWhereInput
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NFCOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    sid?: SortOrder
    gid?: SortOrder
    password?: SortOrder
    type?: SortOrder
    authenticator?: SortOrder
    biometric_key?: SortOrder
    profile_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    sid?: SortOrder
    gid?: SortOrder
    password?: SortOrder
    type?: SortOrder
    authenticator?: SortOrder
    biometric_key?: SortOrder
    profile_id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    sid?: SortOrder
    gid?: SortOrder
    password?: SortOrder
    type?: SortOrder
    authenticator?: SortOrder
    biometric_key?: SortOrder
    profile_id?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SubjectListRelationFilter = {
    every?: SubjectWhereInput
    some?: SubjectWhereInput
    none?: SubjectWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    official_class?: SortOrder
    faceData?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    official_class?: SortOrder
    faceData?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    email?: SortOrder
    name?: SortOrder
    dob?: SortOrder
    official_class?: SortOrder
    faceData?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    device_name?: SortOrder
    user_id?: SortOrder
    login_method?: SortOrder
    saved_device?: SortOrder
    created_at?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    device_name?: SortOrder
    user_id?: SortOrder
    login_method?: SortOrder
    saved_device?: SortOrder
    created_at?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    device_name?: SortOrder
    user_id?: SortOrder
    login_method?: SortOrder
    saved_device?: SortOrder
    created_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NFCCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type NFCMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type NFCMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    active?: SortOrder
    status?: SortOrder
  }

  export type ProfileListRelationFilter = {
    every?: ProfileWhereInput
    some?: ProfileWhereInput
    none?: ProfileWhereInput
  }

  export type SessionAttendanceListRelationFilter = {
    every?: SessionAttendanceWhereInput
    some?: SessionAttendanceWhereInput
    none?: SessionAttendanceWhereInput
  }

  export type SessionCycleListRelationFilter = {
    every?: SessionCycleWhereInput
    some?: SessionCycleWhereInput
    none?: SessionCycleWhereInput
  }

  export type ProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionAttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionCycleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    openingDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    address?: SortOrder
    teacherId?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    openingDay?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    address?: SortOrder
    teacherId?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
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

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type SessionAttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    start?: SortOrder
    duration?: SortOrder
    repeat?: SortOrder
    subjectId?: SortOrder
  }

  export type SessionAttendanceAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type SessionAttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    start?: SortOrder
    duration?: SortOrder
    repeat?: SortOrder
    subjectId?: SortOrder
  }

  export type SessionAttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    start?: SortOrder
    duration?: SortOrder
    repeat?: SortOrder
    subjectId?: SortOrder
  }

  export type SessionAttendanceSumOrderByAggregateInput = {
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

  export type SessionAttendanceScalarRelationFilter = {
    is?: SessionAttendanceWhereInput
    isNot?: SessionAttendanceWhereInput
  }

  export type SubjectNullableScalarRelationFilter = {
    is?: SubjectWhereInput | null
    isNot?: SubjectWhereInput | null
  }

  export type SessionCycleCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    sessionId?: SortOrder
    subjectId?: SortOrder
  }

  export type SessionCycleMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    sessionId?: SortOrder
    subjectId?: SortOrder
  }

  export type SessionCycleMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    sessionId?: SortOrder
    subjectId?: SortOrder
  }

  export type SessionCycleScalarRelationFilter = {
    is?: SessionCycleWhereInput
    isNot?: SessionCycleWhereInput
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    isVerified?: SortOrder
    deviceId?: SortOrder
    attendantId?: SortOrder
    sessionCycleId?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    isVerified?: SortOrder
    deviceId?: SortOrder
    attendantId?: SortOrder
    sessionCycleId?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    isVerified?: SortOrder
    deviceId?: SortOrder
    attendantId?: SortOrder
    sessionCycleId?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NFCCreateNestedManyWithoutUserInput = {
    create?: XOR<NFCCreateWithoutUserInput, NFCUncheckedCreateWithoutUserInput> | NFCCreateWithoutUserInput[] | NFCUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NFCCreateOrConnectWithoutUserInput | NFCCreateOrConnectWithoutUserInput[]
    createMany?: NFCCreateManyUserInputEnvelope
    connect?: NFCWhereUniqueInput | NFCWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NFCUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NFCCreateWithoutUserInput, NFCUncheckedCreateWithoutUserInput> | NFCCreateWithoutUserInput[] | NFCUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NFCCreateOrConnectWithoutUserInput | NFCCreateOrConnectWithoutUserInput[]
    createMany?: NFCCreateManyUserInputEnvelope
    connect?: NFCWhereUniqueInput | NFCWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type NFCUpdateManyWithoutUserNestedInput = {
    create?: XOR<NFCCreateWithoutUserInput, NFCUncheckedCreateWithoutUserInput> | NFCCreateWithoutUserInput[] | NFCUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NFCCreateOrConnectWithoutUserInput | NFCCreateOrConnectWithoutUserInput[]
    upsert?: NFCUpsertWithWhereUniqueWithoutUserInput | NFCUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NFCCreateManyUserInputEnvelope
    set?: NFCWhereUniqueInput | NFCWhereUniqueInput[]
    disconnect?: NFCWhereUniqueInput | NFCWhereUniqueInput[]
    delete?: NFCWhereUniqueInput | NFCWhereUniqueInput[]
    connect?: NFCWhereUniqueInput | NFCWhereUniqueInput[]
    update?: NFCUpdateWithWhereUniqueWithoutUserInput | NFCUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NFCUpdateManyWithWhereWithoutUserInput | NFCUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NFCScalarWhereInput | NFCScalarWhereInput[]
  }

  export type ProfileUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type NFCUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NFCCreateWithoutUserInput, NFCUncheckedCreateWithoutUserInput> | NFCCreateWithoutUserInput[] | NFCUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NFCCreateOrConnectWithoutUserInput | NFCCreateOrConnectWithoutUserInput[]
    upsert?: NFCUpsertWithWhereUniqueWithoutUserInput | NFCUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NFCCreateManyUserInputEnvelope
    set?: NFCWhereUniqueInput | NFCWhereUniqueInput[]
    disconnect?: NFCWhereUniqueInput | NFCWhereUniqueInput[]
    delete?: NFCWhereUniqueInput | NFCWhereUniqueInput[]
    connect?: NFCWhereUniqueInput | NFCWhereUniqueInput[]
    update?: NFCUpdateWithWhereUniqueWithoutUserInput | NFCUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NFCUpdateManyWithWhereWithoutUserInput | NFCUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NFCScalarWhereInput | NFCScalarWhereInput[]
  }

  export type SubjectCreateNestedManyWithoutTeacherInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type SubjectCreateNestedManyWithoutStudentsInput = {
    create?: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput> | SubjectCreateWithoutStudentsInput[] | SubjectUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutStudentsInput | SubjectCreateOrConnectWithoutStudentsInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutAttendantInput = {
    create?: XOR<AttendanceCreateWithoutAttendantInput, AttendanceUncheckedCreateWithoutAttendantInput> | AttendanceCreateWithoutAttendantInput[] | AttendanceUncheckedCreateWithoutAttendantInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutAttendantInput | AttendanceCreateOrConnectWithoutAttendantInput[]
    createMany?: AttendanceCreateManyAttendantInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type SubjectUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type SubjectUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput> | SubjectCreateWithoutStudentsInput[] | SubjectUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutStudentsInput | SubjectCreateOrConnectWithoutStudentsInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutAttendantInput = {
    create?: XOR<AttendanceCreateWithoutAttendantInput, AttendanceUncheckedCreateWithoutAttendantInput> | AttendanceCreateWithoutAttendantInput[] | AttendanceUncheckedCreateWithoutAttendantInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutAttendantInput | AttendanceCreateOrConnectWithoutAttendantInput[]
    createMany?: AttendanceCreateManyAttendantInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SubjectUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutTeacherInput | SubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutTeacherInput | SubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutTeacherInput | SubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type SubjectUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput> | SubjectCreateWithoutStudentsInput[] | SubjectUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutStudentsInput | SubjectCreateOrConnectWithoutStudentsInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutStudentsInput | SubjectUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutStudentsInput | SubjectUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutStudentsInput | SubjectUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
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

  export type UserUpdateOneWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type SubjectUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput> | SubjectCreateWithoutTeacherInput[] | SubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherInput | SubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutTeacherInput | SubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: SubjectCreateManyTeacherInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutTeacherInput | SubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutTeacherInput | SubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type SubjectUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput> | SubjectCreateWithoutStudentsInput[] | SubjectUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutStudentsInput | SubjectCreateOrConnectWithoutStudentsInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutStudentsInput | SubjectUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutStudentsInput | SubjectUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutStudentsInput | SubjectUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
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

  export type UserUncheckedUpdateOneWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutNfcsInput = {
    create?: XOR<UserCreateWithoutNfcsInput, UserUncheckedCreateWithoutNfcsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNfcsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNfcsNestedInput = {
    create?: XOR<UserCreateWithoutNfcsInput, UserUncheckedCreateWithoutNfcsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNfcsInput
    upsert?: UserUpsertWithoutNfcsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNfcsInput, UserUpdateWithoutNfcsInput>, UserUncheckedUpdateWithoutNfcsInput>
  }

  export type ProfileCreateNestedOneWithoutHostInput = {
    create?: XOR<ProfileCreateWithoutHostInput, ProfileUncheckedCreateWithoutHostInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutHostInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileCreateNestedManyWithoutJoinInput = {
    create?: XOR<ProfileCreateWithoutJoinInput, ProfileUncheckedCreateWithoutJoinInput> | ProfileCreateWithoutJoinInput[] | ProfileUncheckedCreateWithoutJoinInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutJoinInput | ProfileCreateOrConnectWithoutJoinInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type SessionAttendanceCreateNestedManyWithoutSubjectInput = {
    create?: XOR<SessionAttendanceCreateWithoutSubjectInput, SessionAttendanceUncheckedCreateWithoutSubjectInput> | SessionAttendanceCreateWithoutSubjectInput[] | SessionAttendanceUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: SessionAttendanceCreateOrConnectWithoutSubjectInput | SessionAttendanceCreateOrConnectWithoutSubjectInput[]
    createMany?: SessionAttendanceCreateManySubjectInputEnvelope
    connect?: SessionAttendanceWhereUniqueInput | SessionAttendanceWhereUniqueInput[]
  }

  export type SessionCycleCreateNestedManyWithoutSubjectInput = {
    create?: XOR<SessionCycleCreateWithoutSubjectInput, SessionCycleUncheckedCreateWithoutSubjectInput> | SessionCycleCreateWithoutSubjectInput[] | SessionCycleUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: SessionCycleCreateOrConnectWithoutSubjectInput | SessionCycleCreateOrConnectWithoutSubjectInput[]
    createMany?: SessionCycleCreateManySubjectInputEnvelope
    connect?: SessionCycleWhereUniqueInput | SessionCycleWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedManyWithoutJoinInput = {
    create?: XOR<ProfileCreateWithoutJoinInput, ProfileUncheckedCreateWithoutJoinInput> | ProfileCreateWithoutJoinInput[] | ProfileUncheckedCreateWithoutJoinInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutJoinInput | ProfileCreateOrConnectWithoutJoinInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type SessionAttendanceUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<SessionAttendanceCreateWithoutSubjectInput, SessionAttendanceUncheckedCreateWithoutSubjectInput> | SessionAttendanceCreateWithoutSubjectInput[] | SessionAttendanceUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: SessionAttendanceCreateOrConnectWithoutSubjectInput | SessionAttendanceCreateOrConnectWithoutSubjectInput[]
    createMany?: SessionAttendanceCreateManySubjectInputEnvelope
    connect?: SessionAttendanceWhereUniqueInput | SessionAttendanceWhereUniqueInput[]
  }

  export type SessionCycleUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<SessionCycleCreateWithoutSubjectInput, SessionCycleUncheckedCreateWithoutSubjectInput> | SessionCycleCreateWithoutSubjectInput[] | SessionCycleUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: SessionCycleCreateOrConnectWithoutSubjectInput | SessionCycleCreateOrConnectWithoutSubjectInput[]
    createMany?: SessionCycleCreateManySubjectInputEnvelope
    connect?: SessionCycleWhereUniqueInput | SessionCycleWhereUniqueInput[]
  }

  export type ProfileUpdateOneRequiredWithoutHostNestedInput = {
    create?: XOR<ProfileCreateWithoutHostInput, ProfileUncheckedCreateWithoutHostInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutHostInput
    upsert?: ProfileUpsertWithoutHostInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutHostInput, ProfileUpdateWithoutHostInput>, ProfileUncheckedUpdateWithoutHostInput>
  }

  export type ProfileUpdateManyWithoutJoinNestedInput = {
    create?: XOR<ProfileCreateWithoutJoinInput, ProfileUncheckedCreateWithoutJoinInput> | ProfileCreateWithoutJoinInput[] | ProfileUncheckedCreateWithoutJoinInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutJoinInput | ProfileCreateOrConnectWithoutJoinInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutJoinInput | ProfileUpsertWithWhereUniqueWithoutJoinInput[]
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutJoinInput | ProfileUpdateWithWhereUniqueWithoutJoinInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutJoinInput | ProfileUpdateManyWithWhereWithoutJoinInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type SessionAttendanceUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<SessionAttendanceCreateWithoutSubjectInput, SessionAttendanceUncheckedCreateWithoutSubjectInput> | SessionAttendanceCreateWithoutSubjectInput[] | SessionAttendanceUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: SessionAttendanceCreateOrConnectWithoutSubjectInput | SessionAttendanceCreateOrConnectWithoutSubjectInput[]
    upsert?: SessionAttendanceUpsertWithWhereUniqueWithoutSubjectInput | SessionAttendanceUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: SessionAttendanceCreateManySubjectInputEnvelope
    set?: SessionAttendanceWhereUniqueInput | SessionAttendanceWhereUniqueInput[]
    disconnect?: SessionAttendanceWhereUniqueInput | SessionAttendanceWhereUniqueInput[]
    delete?: SessionAttendanceWhereUniqueInput | SessionAttendanceWhereUniqueInput[]
    connect?: SessionAttendanceWhereUniqueInput | SessionAttendanceWhereUniqueInput[]
    update?: SessionAttendanceUpdateWithWhereUniqueWithoutSubjectInput | SessionAttendanceUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: SessionAttendanceUpdateManyWithWhereWithoutSubjectInput | SessionAttendanceUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: SessionAttendanceScalarWhereInput | SessionAttendanceScalarWhereInput[]
  }

  export type SessionCycleUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<SessionCycleCreateWithoutSubjectInput, SessionCycleUncheckedCreateWithoutSubjectInput> | SessionCycleCreateWithoutSubjectInput[] | SessionCycleUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: SessionCycleCreateOrConnectWithoutSubjectInput | SessionCycleCreateOrConnectWithoutSubjectInput[]
    upsert?: SessionCycleUpsertWithWhereUniqueWithoutSubjectInput | SessionCycleUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: SessionCycleCreateManySubjectInputEnvelope
    set?: SessionCycleWhereUniqueInput | SessionCycleWhereUniqueInput[]
    disconnect?: SessionCycleWhereUniqueInput | SessionCycleWhereUniqueInput[]
    delete?: SessionCycleWhereUniqueInput | SessionCycleWhereUniqueInput[]
    connect?: SessionCycleWhereUniqueInput | SessionCycleWhereUniqueInput[]
    update?: SessionCycleUpdateWithWhereUniqueWithoutSubjectInput | SessionCycleUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: SessionCycleUpdateManyWithWhereWithoutSubjectInput | SessionCycleUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: SessionCycleScalarWhereInput | SessionCycleScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateManyWithoutJoinNestedInput = {
    create?: XOR<ProfileCreateWithoutJoinInput, ProfileUncheckedCreateWithoutJoinInput> | ProfileCreateWithoutJoinInput[] | ProfileUncheckedCreateWithoutJoinInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutJoinInput | ProfileCreateOrConnectWithoutJoinInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutJoinInput | ProfileUpsertWithWhereUniqueWithoutJoinInput[]
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutJoinInput | ProfileUpdateWithWhereUniqueWithoutJoinInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutJoinInput | ProfileUpdateManyWithWhereWithoutJoinInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type SessionAttendanceUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<SessionAttendanceCreateWithoutSubjectInput, SessionAttendanceUncheckedCreateWithoutSubjectInput> | SessionAttendanceCreateWithoutSubjectInput[] | SessionAttendanceUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: SessionAttendanceCreateOrConnectWithoutSubjectInput | SessionAttendanceCreateOrConnectWithoutSubjectInput[]
    upsert?: SessionAttendanceUpsertWithWhereUniqueWithoutSubjectInput | SessionAttendanceUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: SessionAttendanceCreateManySubjectInputEnvelope
    set?: SessionAttendanceWhereUniqueInput | SessionAttendanceWhereUniqueInput[]
    disconnect?: SessionAttendanceWhereUniqueInput | SessionAttendanceWhereUniqueInput[]
    delete?: SessionAttendanceWhereUniqueInput | SessionAttendanceWhereUniqueInput[]
    connect?: SessionAttendanceWhereUniqueInput | SessionAttendanceWhereUniqueInput[]
    update?: SessionAttendanceUpdateWithWhereUniqueWithoutSubjectInput | SessionAttendanceUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: SessionAttendanceUpdateManyWithWhereWithoutSubjectInput | SessionAttendanceUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: SessionAttendanceScalarWhereInput | SessionAttendanceScalarWhereInput[]
  }

  export type SessionCycleUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<SessionCycleCreateWithoutSubjectInput, SessionCycleUncheckedCreateWithoutSubjectInput> | SessionCycleCreateWithoutSubjectInput[] | SessionCycleUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: SessionCycleCreateOrConnectWithoutSubjectInput | SessionCycleCreateOrConnectWithoutSubjectInput[]
    upsert?: SessionCycleUpsertWithWhereUniqueWithoutSubjectInput | SessionCycleUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: SessionCycleCreateManySubjectInputEnvelope
    set?: SessionCycleWhereUniqueInput | SessionCycleWhereUniqueInput[]
    disconnect?: SessionCycleWhereUniqueInput | SessionCycleWhereUniqueInput[]
    delete?: SessionCycleWhereUniqueInput | SessionCycleWhereUniqueInput[]
    connect?: SessionCycleWhereUniqueInput | SessionCycleWhereUniqueInput[]
    update?: SessionCycleUpdateWithWhereUniqueWithoutSubjectInput | SessionCycleUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: SessionCycleUpdateManyWithWhereWithoutSubjectInput | SessionCycleUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: SessionCycleScalarWhereInput | SessionCycleScalarWhereInput[]
  }

  export type SubjectCreateNestedOneWithoutSessionInput = {
    create?: XOR<SubjectCreateWithoutSessionInput, SubjectUncheckedCreateWithoutSessionInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutSessionInput
    connect?: SubjectWhereUniqueInput
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

  export type SubjectUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<SubjectCreateWithoutSessionInput, SubjectUncheckedCreateWithoutSessionInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutSessionInput
    upsert?: SubjectUpsertWithoutSessionInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutSessionInput, SubjectUpdateWithoutSessionInput>, SubjectUncheckedUpdateWithoutSessionInput>
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

  export type SessionAttendanceCreateNestedOneWithoutSessionCycleInput = {
    create?: XOR<SessionAttendanceCreateWithoutSessionCycleInput, SessionAttendanceUncheckedCreateWithoutSessionCycleInput>
    connectOrCreate?: SessionAttendanceCreateOrConnectWithoutSessionCycleInput
    connect?: SessionAttendanceWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutSessionCycleInput = {
    create?: XOR<SubjectCreateWithoutSessionCycleInput, SubjectUncheckedCreateWithoutSessionCycleInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutSessionCycleInput
    connect?: SubjectWhereUniqueInput
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

  export type SessionAttendanceUpdateOneRequiredWithoutSessionCycleNestedInput = {
    create?: XOR<SessionAttendanceCreateWithoutSessionCycleInput, SessionAttendanceUncheckedCreateWithoutSessionCycleInput>
    connectOrCreate?: SessionAttendanceCreateOrConnectWithoutSessionCycleInput
    upsert?: SessionAttendanceUpsertWithoutSessionCycleInput
    connect?: SessionAttendanceWhereUniqueInput
    update?: XOR<XOR<SessionAttendanceUpdateToOneWithWhereWithoutSessionCycleInput, SessionAttendanceUpdateWithoutSessionCycleInput>, SessionAttendanceUncheckedUpdateWithoutSessionCycleInput>
  }

  export type SubjectUpdateOneWithoutSessionCycleNestedInput = {
    create?: XOR<SubjectCreateWithoutSessionCycleInput, SubjectUncheckedCreateWithoutSessionCycleInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutSessionCycleInput
    upsert?: SubjectUpsertWithoutSessionCycleInput
    disconnect?: SubjectWhereInput | boolean
    delete?: SubjectWhereInput | boolean
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutSessionCycleInput, SubjectUpdateWithoutSessionCycleInput>, SubjectUncheckedUpdateWithoutSessionCycleInput>
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

  export type ProfileCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<ProfileCreateWithoutAttendancesInput, ProfileUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAttendancesInput
    connect?: ProfileWhereUniqueInput
  }

  export type SessionCycleCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<SessionCycleCreateWithoutAttendancesInput, SessionCycleUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: SessionCycleCreateOrConnectWithoutAttendancesInput
    connect?: SessionCycleWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<ProfileCreateWithoutAttendancesInput, ProfileUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAttendancesInput
    upsert?: ProfileUpsertWithoutAttendancesInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutAttendancesInput, ProfileUpdateWithoutAttendancesInput>, ProfileUncheckedUpdateWithoutAttendancesInput>
  }

  export type SessionCycleUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<SessionCycleCreateWithoutAttendancesInput, SessionCycleUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: SessionCycleCreateOrConnectWithoutAttendancesInput
    upsert?: SessionCycleUpsertWithoutAttendancesInput
    connect?: SessionCycleWhereUniqueInput
    update?: XOR<XOR<SessionCycleUpdateToOneWithWhereWithoutAttendancesInput, SessionCycleUpdateWithoutAttendancesInput>, SessionCycleUncheckedUpdateWithoutAttendancesInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SessionCreateWithoutUserInput = {
    id?: string
    device_id: string
    device_name: string
    login_method: string
    saved_device: boolean
    created_at: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    device_id: string
    device_name: string
    login_method: string
    saved_device: boolean
    created_at: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NFCCreateWithoutUserInput = {
    id?: string
    active: boolean
    status: string
  }

  export type NFCUncheckedCreateWithoutUserInput = {
    id?: string
    active: boolean
    status: string
  }

  export type NFCCreateOrConnectWithoutUserInput = {
    where: NFCWhereUniqueInput
    create: XOR<NFCCreateWithoutUserInput, NFCUncheckedCreateWithoutUserInput>
  }

  export type NFCCreateManyUserInputEnvelope = {
    data: NFCCreateManyUserInput | NFCCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string
    sid: string
    email: string
    name: string
    dob?: Date | string | null
    official_class: string
    faceData?: string | null
    host?: SubjectCreateNestedManyWithoutTeacherInput
    join?: SubjectCreateNestedManyWithoutStudentsInput
    attendances?: AttendanceCreateNestedManyWithoutAttendantInput
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    sid: string
    email: string
    name: string
    dob?: Date | string | null
    official_class: string
    faceData?: string | null
    host?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    join?: SubjectUncheckedCreateNestedManyWithoutStudentsInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutAttendantInput
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    device_id?: StringFilter<"Session"> | string
    device_name?: StringFilter<"Session"> | string
    user_id?: StringNullableFilter<"Session"> | string | null
    login_method?: StringFilter<"Session"> | string
    saved_device?: BoolFilter<"Session"> | boolean
    created_at?: DateTimeFilter<"Session"> | Date | string
  }

  export type NFCUpsertWithWhereUniqueWithoutUserInput = {
    where: NFCWhereUniqueInput
    update: XOR<NFCUpdateWithoutUserInput, NFCUncheckedUpdateWithoutUserInput>
    create: XOR<NFCCreateWithoutUserInput, NFCUncheckedCreateWithoutUserInput>
  }

  export type NFCUpdateWithWhereUniqueWithoutUserInput = {
    where: NFCWhereUniqueInput
    data: XOR<NFCUpdateWithoutUserInput, NFCUncheckedUpdateWithoutUserInput>
  }

  export type NFCUpdateManyWithWhereWithoutUserInput = {
    where: NFCScalarWhereInput
    data: XOR<NFCUpdateManyMutationInput, NFCUncheckedUpdateManyWithoutUserInput>
  }

  export type NFCScalarWhereInput = {
    AND?: NFCScalarWhereInput | NFCScalarWhereInput[]
    OR?: NFCScalarWhereInput[]
    NOT?: NFCScalarWhereInput | NFCScalarWhereInput[]
    id?: StringFilter<"NFC"> | string
    user_id?: StringFilter<"NFC"> | string
    active?: BoolFilter<"NFC"> | boolean
    status?: StringFilter<"NFC"> | string
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    official_class?: StringFieldUpdateOperationsInput | string
    faceData?: NullableStringFieldUpdateOperationsInput | string | null
    host?: SubjectUpdateManyWithoutTeacherNestedInput
    join?: SubjectUpdateManyWithoutStudentsNestedInput
    attendances?: AttendanceUpdateManyWithoutAttendantNestedInput
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    official_class?: StringFieldUpdateOperationsInput | string
    faceData?: NullableStringFieldUpdateOperationsInput | string | null
    host?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    join?: SubjectUncheckedUpdateManyWithoutStudentsNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutAttendantNestedInput
  }

  export type SubjectCreateWithoutTeacherInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
    students?: ProfileCreateNestedManyWithoutJoinInput
    session?: SessionAttendanceCreateNestedManyWithoutSubjectInput
    sessionCycle?: SessionCycleCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutTeacherInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
    students?: ProfileUncheckedCreateNestedManyWithoutJoinInput
    session?: SessionAttendanceUncheckedCreateNestedManyWithoutSubjectInput
    sessionCycle?: SessionCycleUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutTeacherInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput>
  }

  export type SubjectCreateManyTeacherInputEnvelope = {
    data: SubjectCreateManyTeacherInput | SubjectCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type SubjectCreateWithoutStudentsInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
    teacher: ProfileCreateNestedOneWithoutHostInput
    session?: SessionAttendanceCreateNestedManyWithoutSubjectInput
    sessionCycle?: SessionCycleCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutStudentsInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
    teacherId: string
    session?: SessionAttendanceUncheckedCreateNestedManyWithoutSubjectInput
    sessionCycle?: SessionCycleUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutStudentsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput>
  }

  export type AttendanceCreateWithoutAttendantInput = {
    id?: string
    time: Date | string
    isVerified: boolean
    deviceId: string
    sessionCycle: SessionCycleCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutAttendantInput = {
    id?: string
    time: Date | string
    isVerified: boolean
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

  export type UserCreateWithoutProfileInput = {
    id?: string
    email: string
    sid: string
    gid: string
    password?: string | null
    type: string
    authenticator?: string | null
    biometric_key?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    nfcs?: NFCCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    sid: string
    gid: string
    password?: string | null
    type: string
    authenticator?: string | null
    biometric_key?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    nfcs?: NFCUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type SubjectUpsertWithWhereUniqueWithoutTeacherInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutTeacherInput, SubjectUncheckedUpdateWithoutTeacherInput>
    create: XOR<SubjectCreateWithoutTeacherInput, SubjectUncheckedCreateWithoutTeacherInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutTeacherInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutTeacherInput, SubjectUncheckedUpdateWithoutTeacherInput>
  }

  export type SubjectUpdateManyWithWhereWithoutTeacherInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutTeacherInput>
  }

  export type SubjectScalarWhereInput = {
    AND?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    OR?: SubjectScalarWhereInput[]
    NOT?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    id?: StringFilter<"Subject"> | string
    code?: StringFilter<"Subject"> | string
    name?: StringFilter<"Subject"> | string
    description?: StringNullableFilter<"Subject"> | string | null
    openingDay?: DateTimeFilter<"Subject"> | Date | string
    startTime?: DateTimeFilter<"Subject"> | Date | string
    endTime?: DateTimeFilter<"Subject"> | Date | string
    address?: StringFilter<"Subject"> | string
    teacherId?: StringFilter<"Subject"> | string
  }

  export type SubjectUpsertWithWhereUniqueWithoutStudentsInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutStudentsInput, SubjectUncheckedUpdateWithoutStudentsInput>
    create: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutStudentsInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutStudentsInput, SubjectUncheckedUpdateWithoutStudentsInput>
  }

  export type SubjectUpdateManyWithWhereWithoutStudentsInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutStudentsInput>
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
    isVerified?: BoolFilter<"Attendance"> | boolean
    deviceId?: StringFilter<"Attendance"> | string
    attendantId?: StringFilter<"Attendance"> | string
    sessionCycleId?: StringFilter<"Attendance"> | string
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    authenticator?: NullableStringFieldUpdateOperationsInput | string | null
    biometric_key?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    nfcs?: NFCUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    authenticator?: NullableStringFieldUpdateOperationsInput | string | null
    biometric_key?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    nfcs?: NFCUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    sid: string
    gid: string
    password?: string | null
    type: string
    authenticator?: string | null
    biometric_key?: string | null
    nfcs?: NFCCreateNestedManyWithoutUserInput
    profile: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    sid: string
    gid: string
    password?: string | null
    type: string
    authenticator?: string | null
    biometric_key?: string | null
    profile_id: string
    nfcs?: NFCUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    authenticator?: NullableStringFieldUpdateOperationsInput | string | null
    biometric_key?: NullableStringFieldUpdateOperationsInput | string | null
    nfcs?: NFCUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    authenticator?: NullableStringFieldUpdateOperationsInput | string | null
    biometric_key?: NullableStringFieldUpdateOperationsInput | string | null
    profile_id?: StringFieldUpdateOperationsInput | string
    nfcs?: NFCUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNfcsInput = {
    id?: string
    email: string
    sid: string
    gid: string
    password?: string | null
    type: string
    authenticator?: string | null
    biometric_key?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    profile: ProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNfcsInput = {
    id?: string
    email: string
    sid: string
    gid: string
    password?: string | null
    type: string
    authenticator?: string | null
    biometric_key?: string | null
    profile_id: string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNfcsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNfcsInput, UserUncheckedCreateWithoutNfcsInput>
  }

  export type UserUpsertWithoutNfcsInput = {
    update: XOR<UserUpdateWithoutNfcsInput, UserUncheckedUpdateWithoutNfcsInput>
    create: XOR<UserCreateWithoutNfcsInput, UserUncheckedCreateWithoutNfcsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNfcsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNfcsInput, UserUncheckedUpdateWithoutNfcsInput>
  }

  export type UserUpdateWithoutNfcsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    authenticator?: NullableStringFieldUpdateOperationsInput | string | null
    biometric_key?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNfcsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    authenticator?: NullableStringFieldUpdateOperationsInput | string | null
    biometric_key?: NullableStringFieldUpdateOperationsInput | string | null
    profile_id?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfileCreateWithoutHostInput = {
    id?: string
    sid: string
    email: string
    name: string
    dob?: Date | string | null
    official_class: string
    faceData?: string | null
    join?: SubjectCreateNestedManyWithoutStudentsInput
    attendances?: AttendanceCreateNestedManyWithoutAttendantInput
    User?: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutHostInput = {
    id?: string
    sid: string
    email: string
    name: string
    dob?: Date | string | null
    official_class: string
    faceData?: string | null
    join?: SubjectUncheckedCreateNestedManyWithoutStudentsInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutAttendantInput
    User?: UserUncheckedCreateNestedOneWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutHostInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutHostInput, ProfileUncheckedCreateWithoutHostInput>
  }

  export type ProfileCreateWithoutJoinInput = {
    id?: string
    sid: string
    email: string
    name: string
    dob?: Date | string | null
    official_class: string
    faceData?: string | null
    host?: SubjectCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceCreateNestedManyWithoutAttendantInput
    User?: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutJoinInput = {
    id?: string
    sid: string
    email: string
    name: string
    dob?: Date | string | null
    official_class: string
    faceData?: string | null
    host?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutAttendantInput
    User?: UserUncheckedCreateNestedOneWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutJoinInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutJoinInput, ProfileUncheckedCreateWithoutJoinInput>
  }

  export type SessionAttendanceCreateWithoutSubjectInput = {
    id?: string
    name: string
    start: Date | string
    duration: number
    repeat: $Enums.RepeatType
    SessionCycle?: SessionCycleCreateNestedManyWithoutSessionInput
  }

  export type SessionAttendanceUncheckedCreateWithoutSubjectInput = {
    id?: string
    name: string
    start: Date | string
    duration: number
    repeat: $Enums.RepeatType
    SessionCycle?: SessionCycleUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionAttendanceCreateOrConnectWithoutSubjectInput = {
    where: SessionAttendanceWhereUniqueInput
    create: XOR<SessionAttendanceCreateWithoutSubjectInput, SessionAttendanceUncheckedCreateWithoutSubjectInput>
  }

  export type SessionAttendanceCreateManySubjectInputEnvelope = {
    data: SessionAttendanceCreateManySubjectInput | SessionAttendanceCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type SessionCycleCreateWithoutSubjectInput = {
    id?: string
    start: Date | string
    session: SessionAttendanceCreateNestedOneWithoutSessionCycleInput
    attendances?: AttendanceCreateNestedManyWithoutSessionCycleInput
  }

  export type SessionCycleUncheckedCreateWithoutSubjectInput = {
    id?: string
    start: Date | string
    sessionId: string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutSessionCycleInput
  }

  export type SessionCycleCreateOrConnectWithoutSubjectInput = {
    where: SessionCycleWhereUniqueInput
    create: XOR<SessionCycleCreateWithoutSubjectInput, SessionCycleUncheckedCreateWithoutSubjectInput>
  }

  export type SessionCycleCreateManySubjectInputEnvelope = {
    data: SessionCycleCreateManySubjectInput | SessionCycleCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutHostInput = {
    update: XOR<ProfileUpdateWithoutHostInput, ProfileUncheckedUpdateWithoutHostInput>
    create: XOR<ProfileCreateWithoutHostInput, ProfileUncheckedCreateWithoutHostInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutHostInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutHostInput, ProfileUncheckedUpdateWithoutHostInput>
  }

  export type ProfileUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    official_class?: StringFieldUpdateOperationsInput | string
    faceData?: NullableStringFieldUpdateOperationsInput | string | null
    join?: SubjectUpdateManyWithoutStudentsNestedInput
    attendances?: AttendanceUpdateManyWithoutAttendantNestedInput
    User?: UserUpdateOneWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutHostInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    official_class?: StringFieldUpdateOperationsInput | string
    faceData?: NullableStringFieldUpdateOperationsInput | string | null
    join?: SubjectUncheckedUpdateManyWithoutStudentsNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutAttendantNestedInput
    User?: UserUncheckedUpdateOneWithoutProfileNestedInput
  }

  export type ProfileUpsertWithWhereUniqueWithoutJoinInput = {
    where: ProfileWhereUniqueInput
    update: XOR<ProfileUpdateWithoutJoinInput, ProfileUncheckedUpdateWithoutJoinInput>
    create: XOR<ProfileCreateWithoutJoinInput, ProfileUncheckedCreateWithoutJoinInput>
  }

  export type ProfileUpdateWithWhereUniqueWithoutJoinInput = {
    where: ProfileWhereUniqueInput
    data: XOR<ProfileUpdateWithoutJoinInput, ProfileUncheckedUpdateWithoutJoinInput>
  }

  export type ProfileUpdateManyWithWhereWithoutJoinInput = {
    where: ProfileScalarWhereInput
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyWithoutJoinInput>
  }

  export type ProfileScalarWhereInput = {
    AND?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    OR?: ProfileScalarWhereInput[]
    NOT?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    id?: StringFilter<"Profile"> | string
    sid?: StringFilter<"Profile"> | string
    email?: StringFilter<"Profile"> | string
    name?: StringFilter<"Profile"> | string
    dob?: DateTimeNullableFilter<"Profile"> | Date | string | null
    official_class?: StringFilter<"Profile"> | string
    faceData?: StringNullableFilter<"Profile"> | string | null
  }

  export type SessionAttendanceUpsertWithWhereUniqueWithoutSubjectInput = {
    where: SessionAttendanceWhereUniqueInput
    update: XOR<SessionAttendanceUpdateWithoutSubjectInput, SessionAttendanceUncheckedUpdateWithoutSubjectInput>
    create: XOR<SessionAttendanceCreateWithoutSubjectInput, SessionAttendanceUncheckedCreateWithoutSubjectInput>
  }

  export type SessionAttendanceUpdateWithWhereUniqueWithoutSubjectInput = {
    where: SessionAttendanceWhereUniqueInput
    data: XOR<SessionAttendanceUpdateWithoutSubjectInput, SessionAttendanceUncheckedUpdateWithoutSubjectInput>
  }

  export type SessionAttendanceUpdateManyWithWhereWithoutSubjectInput = {
    where: SessionAttendanceScalarWhereInput
    data: XOR<SessionAttendanceUpdateManyMutationInput, SessionAttendanceUncheckedUpdateManyWithoutSubjectInput>
  }

  export type SessionAttendanceScalarWhereInput = {
    AND?: SessionAttendanceScalarWhereInput | SessionAttendanceScalarWhereInput[]
    OR?: SessionAttendanceScalarWhereInput[]
    NOT?: SessionAttendanceScalarWhereInput | SessionAttendanceScalarWhereInput[]
    id?: StringFilter<"SessionAttendance"> | string
    name?: StringFilter<"SessionAttendance"> | string
    start?: DateTimeFilter<"SessionAttendance"> | Date | string
    duration?: IntFilter<"SessionAttendance"> | number
    repeat?: EnumRepeatTypeFilter<"SessionAttendance"> | $Enums.RepeatType
    subjectId?: StringFilter<"SessionAttendance"> | string
  }

  export type SessionCycleUpsertWithWhereUniqueWithoutSubjectInput = {
    where: SessionCycleWhereUniqueInput
    update: XOR<SessionCycleUpdateWithoutSubjectInput, SessionCycleUncheckedUpdateWithoutSubjectInput>
    create: XOR<SessionCycleCreateWithoutSubjectInput, SessionCycleUncheckedCreateWithoutSubjectInput>
  }

  export type SessionCycleUpdateWithWhereUniqueWithoutSubjectInput = {
    where: SessionCycleWhereUniqueInput
    data: XOR<SessionCycleUpdateWithoutSubjectInput, SessionCycleUncheckedUpdateWithoutSubjectInput>
  }

  export type SessionCycleUpdateManyWithWhereWithoutSubjectInput = {
    where: SessionCycleScalarWhereInput
    data: XOR<SessionCycleUpdateManyMutationInput, SessionCycleUncheckedUpdateManyWithoutSubjectInput>
  }

  export type SessionCycleScalarWhereInput = {
    AND?: SessionCycleScalarWhereInput | SessionCycleScalarWhereInput[]
    OR?: SessionCycleScalarWhereInput[]
    NOT?: SessionCycleScalarWhereInput | SessionCycleScalarWhereInput[]
    id?: StringFilter<"SessionCycle"> | string
    start?: DateTimeFilter<"SessionCycle"> | Date | string
    sessionId?: StringFilter<"SessionCycle"> | string
    subjectId?: StringNullableFilter<"SessionCycle"> | string | null
  }

  export type SubjectCreateWithoutSessionInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
    teacher: ProfileCreateNestedOneWithoutHostInput
    students?: ProfileCreateNestedManyWithoutJoinInput
    sessionCycle?: SessionCycleCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutSessionInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
    teacherId: string
    students?: ProfileUncheckedCreateNestedManyWithoutJoinInput
    sessionCycle?: SessionCycleUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutSessionInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutSessionInput, SubjectUncheckedCreateWithoutSessionInput>
  }

  export type SessionCycleCreateWithoutSessionInput = {
    id?: string
    start: Date | string
    subject?: SubjectCreateNestedOneWithoutSessionCycleInput
    attendances?: AttendanceCreateNestedManyWithoutSessionCycleInput
  }

  export type SessionCycleUncheckedCreateWithoutSessionInput = {
    id?: string
    start: Date | string
    subjectId?: string | null
    attendances?: AttendanceUncheckedCreateNestedManyWithoutSessionCycleInput
  }

  export type SessionCycleCreateOrConnectWithoutSessionInput = {
    where: SessionCycleWhereUniqueInput
    create: XOR<SessionCycleCreateWithoutSessionInput, SessionCycleUncheckedCreateWithoutSessionInput>
  }

  export type SessionCycleCreateManySessionInputEnvelope = {
    data: SessionCycleCreateManySessionInput | SessionCycleCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type SubjectUpsertWithoutSessionInput = {
    update: XOR<SubjectUpdateWithoutSessionInput, SubjectUncheckedUpdateWithoutSessionInput>
    create: XOR<SubjectCreateWithoutSessionInput, SubjectUncheckedCreateWithoutSessionInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutSessionInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutSessionInput, SubjectUncheckedUpdateWithoutSessionInput>
  }

  export type SubjectUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    teacher?: ProfileUpdateOneRequiredWithoutHostNestedInput
    students?: ProfileUpdateManyWithoutJoinNestedInput
    sessionCycle?: SessionCycleUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    students?: ProfileUncheckedUpdateManyWithoutJoinNestedInput
    sessionCycle?: SessionCycleUncheckedUpdateManyWithoutSubjectNestedInput
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

  export type SessionAttendanceCreateWithoutSessionCycleInput = {
    id?: string
    name: string
    start: Date | string
    duration: number
    repeat: $Enums.RepeatType
    subject: SubjectCreateNestedOneWithoutSessionInput
  }

  export type SessionAttendanceUncheckedCreateWithoutSessionCycleInput = {
    id?: string
    name: string
    start: Date | string
    duration: number
    repeat: $Enums.RepeatType
    subjectId: string
  }

  export type SessionAttendanceCreateOrConnectWithoutSessionCycleInput = {
    where: SessionAttendanceWhereUniqueInput
    create: XOR<SessionAttendanceCreateWithoutSessionCycleInput, SessionAttendanceUncheckedCreateWithoutSessionCycleInput>
  }

  export type SubjectCreateWithoutSessionCycleInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
    teacher: ProfileCreateNestedOneWithoutHostInput
    students?: ProfileCreateNestedManyWithoutJoinInput
    session?: SessionAttendanceCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutSessionCycleInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
    teacherId: string
    students?: ProfileUncheckedCreateNestedManyWithoutJoinInput
    session?: SessionAttendanceUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutSessionCycleInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutSessionCycleInput, SubjectUncheckedCreateWithoutSessionCycleInput>
  }

  export type AttendanceCreateWithoutSessionCycleInput = {
    id?: string
    time: Date | string
    isVerified: boolean
    deviceId: string
    attendant: ProfileCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateWithoutSessionCycleInput = {
    id?: string
    time: Date | string
    isVerified: boolean
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

  export type SessionAttendanceUpsertWithoutSessionCycleInput = {
    update: XOR<SessionAttendanceUpdateWithoutSessionCycleInput, SessionAttendanceUncheckedUpdateWithoutSessionCycleInput>
    create: XOR<SessionAttendanceCreateWithoutSessionCycleInput, SessionAttendanceUncheckedCreateWithoutSessionCycleInput>
    where?: SessionAttendanceWhereInput
  }

  export type SessionAttendanceUpdateToOneWithWhereWithoutSessionCycleInput = {
    where?: SessionAttendanceWhereInput
    data: XOR<SessionAttendanceUpdateWithoutSessionCycleInput, SessionAttendanceUncheckedUpdateWithoutSessionCycleInput>
  }

  export type SessionAttendanceUpdateWithoutSessionCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    repeat?: EnumRepeatTypeFieldUpdateOperationsInput | $Enums.RepeatType
    subject?: SubjectUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionAttendanceUncheckedUpdateWithoutSessionCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    repeat?: EnumRepeatTypeFieldUpdateOperationsInput | $Enums.RepeatType
    subjectId?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectUpsertWithoutSessionCycleInput = {
    update: XOR<SubjectUpdateWithoutSessionCycleInput, SubjectUncheckedUpdateWithoutSessionCycleInput>
    create: XOR<SubjectCreateWithoutSessionCycleInput, SubjectUncheckedCreateWithoutSessionCycleInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutSessionCycleInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutSessionCycleInput, SubjectUncheckedUpdateWithoutSessionCycleInput>
  }

  export type SubjectUpdateWithoutSessionCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    teacher?: ProfileUpdateOneRequiredWithoutHostNestedInput
    students?: ProfileUpdateManyWithoutJoinNestedInput
    session?: SessionAttendanceUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutSessionCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    students?: ProfileUncheckedUpdateManyWithoutJoinNestedInput
    session?: SessionAttendanceUncheckedUpdateManyWithoutSubjectNestedInput
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

  export type ProfileCreateWithoutAttendancesInput = {
    id?: string
    sid: string
    email: string
    name: string
    dob?: Date | string | null
    official_class: string
    faceData?: string | null
    host?: SubjectCreateNestedManyWithoutTeacherInput
    join?: SubjectCreateNestedManyWithoutStudentsInput
    User?: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutAttendancesInput = {
    id?: string
    sid: string
    email: string
    name: string
    dob?: Date | string | null
    official_class: string
    faceData?: string | null
    host?: SubjectUncheckedCreateNestedManyWithoutTeacherInput
    join?: SubjectUncheckedCreateNestedManyWithoutStudentsInput
    User?: UserUncheckedCreateNestedOneWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutAttendancesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutAttendancesInput, ProfileUncheckedCreateWithoutAttendancesInput>
  }

  export type SessionCycleCreateWithoutAttendancesInput = {
    id?: string
    start: Date | string
    session: SessionAttendanceCreateNestedOneWithoutSessionCycleInput
    subject?: SubjectCreateNestedOneWithoutSessionCycleInput
  }

  export type SessionCycleUncheckedCreateWithoutAttendancesInput = {
    id?: string
    start: Date | string
    sessionId: string
    subjectId?: string | null
  }

  export type SessionCycleCreateOrConnectWithoutAttendancesInput = {
    where: SessionCycleWhereUniqueInput
    create: XOR<SessionCycleCreateWithoutAttendancesInput, SessionCycleUncheckedCreateWithoutAttendancesInput>
  }

  export type ProfileUpsertWithoutAttendancesInput = {
    update: XOR<ProfileUpdateWithoutAttendancesInput, ProfileUncheckedUpdateWithoutAttendancesInput>
    create: XOR<ProfileCreateWithoutAttendancesInput, ProfileUncheckedCreateWithoutAttendancesInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutAttendancesInput, ProfileUncheckedUpdateWithoutAttendancesInput>
  }

  export type ProfileUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    official_class?: StringFieldUpdateOperationsInput | string
    faceData?: NullableStringFieldUpdateOperationsInput | string | null
    host?: SubjectUpdateManyWithoutTeacherNestedInput
    join?: SubjectUpdateManyWithoutStudentsNestedInput
    User?: UserUpdateOneWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    official_class?: StringFieldUpdateOperationsInput | string
    faceData?: NullableStringFieldUpdateOperationsInput | string | null
    host?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    join?: SubjectUncheckedUpdateManyWithoutStudentsNestedInput
    User?: UserUncheckedUpdateOneWithoutProfileNestedInput
  }

  export type SessionCycleUpsertWithoutAttendancesInput = {
    update: XOR<SessionCycleUpdateWithoutAttendancesInput, SessionCycleUncheckedUpdateWithoutAttendancesInput>
    create: XOR<SessionCycleCreateWithoutAttendancesInput, SessionCycleUncheckedCreateWithoutAttendancesInput>
    where?: SessionCycleWhereInput
  }

  export type SessionCycleUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: SessionCycleWhereInput
    data: XOR<SessionCycleUpdateWithoutAttendancesInput, SessionCycleUncheckedUpdateWithoutAttendancesInput>
  }

  export type SessionCycleUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionAttendanceUpdateOneRequiredWithoutSessionCycleNestedInput
    subject?: SubjectUpdateOneWithoutSessionCycleNestedInput
  }

  export type SessionCycleUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionId?: StringFieldUpdateOperationsInput | string
    subjectId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    device_id: string
    device_name: string
    login_method: string
    saved_device: boolean
    created_at: Date | string
  }

  export type NFCCreateManyUserInput = {
    id?: string
    active: boolean
    status: string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    device_id?: StringFieldUpdateOperationsInput | string
    device_name?: StringFieldUpdateOperationsInput | string
    login_method?: StringFieldUpdateOperationsInput | string
    saved_device?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    device_id?: StringFieldUpdateOperationsInput | string
    device_name?: StringFieldUpdateOperationsInput | string
    login_method?: StringFieldUpdateOperationsInput | string
    saved_device?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    device_id?: StringFieldUpdateOperationsInput | string
    device_name?: StringFieldUpdateOperationsInput | string
    login_method?: StringFieldUpdateOperationsInput | string
    saved_device?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NFCUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type NFCUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type NFCUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectCreateManyTeacherInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    openingDay: Date | string
    startTime: Date | string
    endTime: Date | string
    address: string
  }

  export type AttendanceCreateManyAttendantInput = {
    id?: string
    time: Date | string
    isVerified: boolean
    deviceId: string
    sessionCycleId: string
  }

  export type SubjectUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    students?: ProfileUpdateManyWithoutJoinNestedInput
    session?: SessionAttendanceUpdateManyWithoutSubjectNestedInput
    sessionCycle?: SessionCycleUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    students?: ProfileUncheckedUpdateManyWithoutJoinNestedInput
    session?: SessionAttendanceUncheckedUpdateManyWithoutSubjectNestedInput
    sessionCycle?: SessionCycleUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type SubjectUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    teacher?: ProfileUpdateOneRequiredWithoutHostNestedInput
    session?: SessionAttendanceUpdateManyWithoutSubjectNestedInput
    sessionCycle?: SessionCycleUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    session?: SessionAttendanceUncheckedUpdateManyWithoutSubjectNestedInput
    sessionCycle?: SessionCycleUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateManyWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    openingDay?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUpdateWithoutAttendantInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    deviceId?: StringFieldUpdateOperationsInput | string
    sessionCycle?: SessionCycleUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutAttendantInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    deviceId?: StringFieldUpdateOperationsInput | string
    sessionCycleId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyWithoutAttendantInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    deviceId?: StringFieldUpdateOperationsInput | string
    sessionCycleId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionAttendanceCreateManySubjectInput = {
    id?: string
    name: string
    start: Date | string
    duration: number
    repeat: $Enums.RepeatType
  }

  export type SessionCycleCreateManySubjectInput = {
    id?: string
    start: Date | string
    sessionId: string
  }

  export type ProfileUpdateWithoutJoinInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    official_class?: StringFieldUpdateOperationsInput | string
    faceData?: NullableStringFieldUpdateOperationsInput | string | null
    host?: SubjectUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUpdateManyWithoutAttendantNestedInput
    User?: UserUpdateOneWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutJoinInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    official_class?: StringFieldUpdateOperationsInput | string
    faceData?: NullableStringFieldUpdateOperationsInput | string | null
    host?: SubjectUncheckedUpdateManyWithoutTeacherNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutAttendantNestedInput
    User?: UserUncheckedUpdateOneWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateManyWithoutJoinInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    official_class?: StringFieldUpdateOperationsInput | string
    faceData?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionAttendanceUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    repeat?: EnumRepeatTypeFieldUpdateOperationsInput | $Enums.RepeatType
    SessionCycle?: SessionCycleUpdateManyWithoutSessionNestedInput
  }

  export type SessionAttendanceUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    repeat?: EnumRepeatTypeFieldUpdateOperationsInput | $Enums.RepeatType
    SessionCycle?: SessionCycleUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionAttendanceUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    repeat?: EnumRepeatTypeFieldUpdateOperationsInput | $Enums.RepeatType
  }

  export type SessionCycleUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionAttendanceUpdateOneRequiredWithoutSessionCycleNestedInput
    attendances?: AttendanceUpdateManyWithoutSessionCycleNestedInput
  }

  export type SessionCycleUncheckedUpdateWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionId?: StringFieldUpdateOperationsInput | string
    attendances?: AttendanceUncheckedUpdateManyWithoutSessionCycleNestedInput
  }

  export type SessionCycleUncheckedUpdateManyWithoutSubjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCycleCreateManySessionInput = {
    id?: string
    start: Date | string
    subjectId?: string | null
  }

  export type SessionCycleUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneWithoutSessionCycleNestedInput
    attendances?: AttendanceUpdateManyWithoutSessionCycleNestedInput
  }

  export type SessionCycleUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    subjectId?: NullableStringFieldUpdateOperationsInput | string | null
    attendances?: AttendanceUncheckedUpdateManyWithoutSessionCycleNestedInput
  }

  export type SessionCycleUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    subjectId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceCreateManySessionCycleInput = {
    id?: string
    time: Date | string
    isVerified: boolean
    deviceId: string
    attendantId: string
  }

  export type AttendanceUpdateWithoutSessionCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    deviceId?: StringFieldUpdateOperationsInput | string
    attendant?: ProfileUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutSessionCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    deviceId?: StringFieldUpdateOperationsInput | string
    attendantId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyWithoutSessionCycleInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
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