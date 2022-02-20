// Query builder (Typescript version >= 4.1.3 required)
/*
const queryResult = executeGiraffeql({
  // Start typing here to get hints
  
});
*/

export function executeGiraffeql<Key extends keyof Root>(
  query: GetQuery<Key>
): GetResponse<Key> {
  let data: any;
  return data;
}

// scaffolding
export type GetQuery<K extends keyof Root> = K extends never
  ? Partial<Record<K, Queryize<Root[keyof Root]>>>
  : Record<K, Queryize<Root[K]>>;

export type GetResponse<K extends keyof Root> = Responseize<Root[K]>;

export type GetType<T> = Responseize<Field<T, undefined>>;

type Primitive = string | number | boolean | undefined | null;

type Field<T, K> = {
  Type: T;
  Args: K;
};

type Responseize<T> = T extends Field<infer Type, infer Args>
  ? Type extends never
    ? never
    : Type extends (infer U)[]
    ? { [P in keyof U]: Responseize<U[P]> }[]
    : { [P in keyof Type]: Responseize<Type[P]> }
  : never;

type Queryize<T> = T extends Field<infer Type, infer Args>
  ? Type extends never
    ? never
    : Type extends Primitive
    ? Args extends undefined // Args is undefined
      ? LookupValue
      : Args extends [infer Arg]
      ? LookupValue | { __args: Arg } // Args is a tuple
      : { __args: Args }
    : Type extends (infer U)[]
    ? Queryize<Field<U, Args>>
    : Args extends undefined // Args is undefined
    ? { [P in keyof Type]?: Queryize<Type[P]> }
    : Args extends [infer Arg]
    ? { [P in keyof Type]?: Queryize<Type[P]> } & {
        __args?: Arg;
      }
    : { [P in keyof Type]?: Queryize<Type[P]> } & { __args: Args }
  : never;

type LookupValue = true;

type Edge<T> = {
  __typename: Field<string, undefined>;
  node: Field<T, undefined>;
  cursor: Field<string, undefined>;
};

export type FilterByField<T> = {
  eq?: T;
  neq?: T;
  gt?: T;
  lt?: T;
  in?: T[];
  nin?: T[];
  regex?: Scalars["regex"];
};

export type SortByField<T> = {
  field: T;
  desc: boolean;
};

/**All Scalar values*/ export type Scalars = {
  /**String value*/ string: string;
  /**True or False*/ boolean: boolean;
  /**Numeric value*/ number: number;
  /**Unknown value*/ unknown: unknown;
  /**Image URL Field*/ imageUrl: string;
  /**URL Field*/ url: string;
  /**UNIX Timestamp (Seconds since Epoch Time)*/ unixTimestamp: number;
  /**Date YYYY-MM-DD*/ date: string;
  /**ID Field*/ id: string;
  /**Regex Field*/ regex: RegExp;
  /**Valid JSON*/ json: unknown;
  /**Valid JSON as a string*/ jsonString: string;
  /**Enum stored as a separate key value*/ userRole:
    | "NONE"
    | "NORMAL"
    | "ADMIN"
    | "CUSTOM"
    | "MODERATOR";
  /**Enum stored as is*/ userPermission:
    | "A_A"
    | "user_x"
    | "user_get"
    | "user_getMultiple"
    | "user_update"
    | "user_create"
    | "user_delete"
    | "file_getMultiple";
  userSortByKey: "id" | "createdAt" | "updatedAt";
  userGroupByKey: undefined;
  apiKeySortByKey: "id" | "createdAt";
  apiKeyGroupByKey: undefined;
  fileSortByKey: "id" | "createdAt";
  fileGroupByKey: undefined;
  giraffeSpeciesSortByKey: "id" | "createdAt" | "updatedAt";
  giraffeSpeciesGroupByKey: undefined;
  giraffeSubspeciesSortByKey: "id" | "createdAt" | "updatedAt";
  giraffeSubspeciesGroupByKey: undefined;
  giraffeSortByKey: "id" | "createdAt" | "updatedAt";
  giraffeGroupByKey: undefined;
};
/**All Input types*/ export type InputTypes = {
  /**Input object for syncCurrentUser*/ syncCurrentUser: {
    email: Scalars["string"];
  };
  user: { id?: Scalars["id"] };
  userSortByObject: SortByField<Scalars["userSortByKey"]>;
  "userFilterByField/id": FilterByField<Scalars["id"]>;
  "userFilterByField/createdBy.name": FilterByField<Scalars["string"]>;
  "userFilterByField/isPublic": FilterByField<Scalars["boolean"]>;
  "userFilterByField/role": FilterByField<Scalars["userRole"]>;
  userFilterByObject: {
    id?: InputTypes["userFilterByField/id"];
    "createdBy.name"?: InputTypes["userFilterByField/createdBy.name"];
    isPublic?: InputTypes["userFilterByField/isPublic"];
    role?: InputTypes["userFilterByField/role"];
  };
  userPaginator: {
    first?: Scalars["number"];
    last?: Scalars["number"];
    after?: Scalars["string"];
    before?: Scalars["string"];
    sortBy?: InputTypes["userSortByObject"][];
    filterBy?: InputTypes["userFilterByObject"][];
    groupBy?: Scalars["userGroupByKey"][];
    search?: Scalars["string"];
  };
  createUser: {
    name: Scalars["string"];
    firebaseUid: Scalars["string"];
    email: Scalars["string"];
    password: Scalars["string"];
    avatar?: Scalars["string"] | null;
    role?: Scalars["userRole"];
    permissions?: Scalars["userPermission"][] | null;
    isPublic?: Scalars["boolean"];
  };
  updateUserFields: {
    name?: Scalars["string"];
    firebaseUid?: Scalars["string"];
    email?: Scalars["string"];
    password?: Scalars["string"];
    avatar?: Scalars["string"] | null;
    role?: Scalars["userRole"];
    permissions?: Scalars["userPermission"][] | null;
    isPublic?: Scalars["boolean"];
  };
  updateUser: {
    item: InputTypes["user"];
    fields: InputTypes["updateUserFields"];
  };
  apiKey: { id?: Scalars["id"] };
  apiKeySortByObject: SortByField<Scalars["apiKeySortByKey"]>;
  "apiKeyFilterByField/id": FilterByField<Scalars["id"]>;
  "apiKeyFilterByField/user.id": FilterByField<Scalars["id"]>;
  apiKeyFilterByObject: {
    id?: InputTypes["apiKeyFilterByField/id"];
    "user.id"?: InputTypes["apiKeyFilterByField/user.id"];
  };
  apiKeyPaginator: {
    first?: Scalars["number"];
    last?: Scalars["number"];
    after?: Scalars["string"];
    before?: Scalars["string"];
    sortBy?: InputTypes["apiKeySortByObject"][];
    filterBy?: InputTypes["apiKeyFilterByObject"][];
    groupBy?: Scalars["apiKeyGroupByKey"][];
    search?: Scalars["string"];
  };
  createApiKey: {
    name: Scalars["string"];
    user: InputTypes["user"];
    permissions?: Scalars["userPermission"][] | null;
  };
  updateApiKeyFields: {
    name?: Scalars["string"];
    user?: InputTypes["user"];
    permissions?: Scalars["userPermission"][] | null;
  };
  updateApiKey: {
    item: InputTypes["apiKey"];
    fields: InputTypes["updateApiKeyFields"];
  };
  /**Input object for getRepositoryReleases*/ getRepositoryReleases: {
    first: Scalars["number"];
  };
  file: { id?: Scalars["id"] };
  fileSortByObject: SortByField<Scalars["fileSortByKey"]>;
  "fileFilterByField/id": FilterByField<Scalars["id"]>;
  "fileFilterByField/createdBy.id": FilterByField<Scalars["id"]>;
  "fileFilterByField/parentKey": FilterByField<Scalars["string"]>;
  fileFilterByObject: {
    id?: InputTypes["fileFilterByField/id"];
    "createdBy.id"?: InputTypes["fileFilterByField/createdBy.id"];
    parentKey?: InputTypes["fileFilterByField/parentKey"];
  };
  filePaginator: {
    first?: Scalars["number"];
    last?: Scalars["number"];
    after?: Scalars["string"];
    before?: Scalars["string"];
    sortBy?: InputTypes["fileSortByObject"][];
    filterBy?: InputTypes["fileFilterByObject"][];
    groupBy?: Scalars["fileGroupByKey"][];
    search?: Scalars["string"];
  };
  createFile: {
    name: Scalars["string"];
    location: Scalars["string"];
    parentKey?: Scalars["string"] | null;
  };
  updateFileFields: { name?: Scalars["string"] };
  updateFile: {
    item: InputTypes["file"];
    fields: InputTypes["updateFileFields"];
  };
  giraffeSpecies: { id?: Scalars["id"] };
  giraffeSpeciesSortByObject: SortByField<Scalars["giraffeSpeciesSortByKey"]>;
  "giraffeSpeciesFilterByField/id": FilterByField<Scalars["id"]>;
  "giraffeSpeciesFilterByField/createdBy.id": FilterByField<Scalars["id"]>;
  giraffeSpeciesFilterByObject: {
    id?: InputTypes["giraffeSpeciesFilterByField/id"];
    "createdBy.id"?: InputTypes["giraffeSpeciesFilterByField/createdBy.id"];
  };
  giraffeSpeciesPaginator: {
    first?: Scalars["number"];
    last?: Scalars["number"];
    after?: Scalars["string"];
    before?: Scalars["string"];
    sortBy?: InputTypes["giraffeSpeciesSortByObject"][];
    filterBy?: InputTypes["giraffeSpeciesFilterByObject"][];
    groupBy?: Scalars["giraffeSpeciesGroupByKey"][];
    search?: Scalars["string"];
  };
  createGiraffeSpecies: {
    name: Scalars["string"];
    scientificName: Scalars["string"];
    avatar?: Scalars["string"] | null;
    description?: Scalars["string"] | null;
  };
  updateGiraffeSpeciesFields: {
    name?: Scalars["string"];
    scientificName?: Scalars["string"];
    avatar?: Scalars["string"] | null;
    description?: Scalars["string"] | null;
  };
  updateGiraffeSpecies: {
    item: InputTypes["giraffeSpecies"];
    fields: InputTypes["updateGiraffeSpeciesFields"];
  };
  giraffeSubspecies: { id?: Scalars["id"] };
  giraffeSubspeciesSortByObject: SortByField<
    Scalars["giraffeSubspeciesSortByKey"]
  >;
  "giraffeSubspeciesFilterByField/id": FilterByField<Scalars["id"]>;
  "giraffeSubspeciesFilterByField/createdBy.id": FilterByField<Scalars["id"]>;
  giraffeSubspeciesFilterByObject: {
    id?: InputTypes["giraffeSubspeciesFilterByField/id"];
    "createdBy.id"?: InputTypes["giraffeSubspeciesFilterByField/createdBy.id"];
  };
  giraffeSubspeciesPaginator: {
    first?: Scalars["number"];
    last?: Scalars["number"];
    after?: Scalars["string"];
    before?: Scalars["string"];
    sortBy?: InputTypes["giraffeSubspeciesSortByObject"][];
    filterBy?: InputTypes["giraffeSubspeciesFilterByObject"][];
    groupBy?: Scalars["giraffeSubspeciesGroupByKey"][];
    search?: Scalars["string"];
  };
  createGiraffeSubspecies: {
    species: InputTypes["giraffeSpecies"];
    name: Scalars["string"];
    scientificName: Scalars["string"];
    avatar?: Scalars["string"] | null;
    description?: Scalars["string"] | null;
  };
  updateGiraffeSubspeciesFields: {
    species?: InputTypes["giraffeSpecies"];
    name?: Scalars["string"];
    scientificName?: Scalars["string"];
    avatar?: Scalars["string"] | null;
    description?: Scalars["string"] | null;
  };
  updateGiraffeSubspecies: {
    item: InputTypes["giraffeSubspecies"];
    fields: InputTypes["updateGiraffeSubspeciesFields"];
  };
  giraffe: { id?: Scalars["id"] };
  giraffeSortByObject: SortByField<Scalars["giraffeSortByKey"]>;
  "giraffeFilterByField/id": FilterByField<Scalars["id"]>;
  "giraffeFilterByField/createdBy.id": FilterByField<Scalars["id"]>;
  giraffeFilterByObject: {
    id?: InputTypes["giraffeFilterByField/id"];
    "createdBy.id"?: InputTypes["giraffeFilterByField/createdBy.id"];
  };
  giraffePaginator: {
    first?: Scalars["number"];
    last?: Scalars["number"];
    after?: Scalars["string"];
    before?: Scalars["string"];
    sortBy?: InputTypes["giraffeSortByObject"][];
    filterBy?: InputTypes["giraffeFilterByObject"][];
    groupBy?: Scalars["giraffeGroupByKey"][];
    search?: Scalars["string"];
  };
  createGiraffe: {
    subspecies: InputTypes["giraffeSubspecies"];
    name: Scalars["string"];
    avatar?: Scalars["string"] | null;
    description?: Scalars["string"] | null;
  };
  updateGiraffeFields: {
    subspecies?: InputTypes["giraffeSubspecies"];
    name?: Scalars["string"];
    avatar?: Scalars["string"] | null;
    description?: Scalars["string"] | null;
  };
  updateGiraffe: {
    item: InputTypes["giraffe"];
    fields: InputTypes["updateGiraffeFields"];
  };
};
/**All main types*/ export type MainTypes = {
  paginatorInfo: { Typename: "paginatorInfo"; Type: GetType<PaginatorInfo> };
  userEdge: { Typename: "userEdge"; Type: GetType<UserEdge> };
  userPaginator: { Typename: "userPaginator"; Type: GetType<UserPaginator> };
  apiKeyEdge: { Typename: "apiKeyEdge"; Type: GetType<ApiKeyEdge> };
  apiKeyPaginator: {
    Typename: "apiKeyPaginator";
    Type: GetType<ApiKeyPaginator>;
  };
  fileEdge: { Typename: "fileEdge"; Type: GetType<FileEdge> };
  filePaginator: { Typename: "filePaginator"; Type: GetType<FilePaginator> };
  giraffeSpeciesEdge: {
    Typename: "giraffeSpeciesEdge";
    Type: GetType<GiraffeSpeciesEdge>;
  };
  giraffeSpeciesPaginator: {
    Typename: "giraffeSpeciesPaginator";
    Type: GetType<GiraffeSpeciesPaginator>;
  };
  giraffeSubspeciesEdge: {
    Typename: "giraffeSubspeciesEdge";
    Type: GetType<GiraffeSubspeciesEdge>;
  };
  giraffeSubspeciesPaginator: {
    Typename: "giraffeSubspeciesPaginator";
    Type: GetType<GiraffeSubspeciesPaginator>;
  };
  giraffeEdge: { Typename: "giraffeEdge"; Type: GetType<GiraffeEdge> };
  giraffePaginator: {
    Typename: "giraffePaginator";
    Type: GetType<GiraffePaginator>;
  };
  userRoleEnumPaginator: {
    Typename: "userRoleEnumPaginator";
    Type: GetType<UserRoleEnumPaginator>;
  };
  user: { Typename: "user"; Type: GetType<User> };
  apiKey: { Typename: "apiKey"; Type: GetType<ApiKey> };
  file: { Typename: "file"; Type: GetType<File> };
  giraffeSpecies: { Typename: "giraffeSpecies"; Type: GetType<GiraffeSpecies> };
  giraffeSubspecies: {
    Typename: "giraffeSubspecies";
    Type: GetType<GiraffeSubspecies>;
  };
  giraffe: { Typename: "giraffe"; Type: GetType<Giraffe> };
};
/**PaginatorInfo Type*/ export type PaginatorInfo = {
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  total: { Type: Scalars["number"]; Args: undefined };
  count: { Type: Scalars["number"]; Args: undefined };
  startCursor: { Type: Scalars["string"] | null; Args: undefined };
  endCursor: { Type: Scalars["string"] | null; Args: undefined };
};
export type UserEdge = Edge<User>;
/**Paginator*/ export type UserPaginator = {
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  paginatorInfo: { Type: PaginatorInfo; Args: undefined };
  edges: { Type: UserEdge[]; Args: undefined };
};
export type ApiKeyEdge = Edge<ApiKey>;
/**Paginator*/ export type ApiKeyPaginator = {
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  paginatorInfo: { Type: PaginatorInfo; Args: undefined };
  edges: { Type: ApiKeyEdge[]; Args: undefined };
};
export type FileEdge = Edge<File>;
/**Paginator*/ export type FilePaginator = {
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  paginatorInfo: { Type: PaginatorInfo; Args: undefined };
  edges: { Type: FileEdge[]; Args: undefined };
};
export type GiraffeSpeciesEdge = Edge<GiraffeSpecies>;
/**Paginator*/ export type GiraffeSpeciesPaginator = {
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  paginatorInfo: { Type: PaginatorInfo; Args: undefined };
  edges: { Type: GiraffeSpeciesEdge[]; Args: undefined };
};
export type GiraffeSubspeciesEdge = Edge<GiraffeSubspecies>;
/**Paginator*/ export type GiraffeSubspeciesPaginator = {
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  paginatorInfo: { Type: PaginatorInfo; Args: undefined };
  edges: { Type: GiraffeSubspeciesEdge[]; Args: undefined };
};
export type GiraffeEdge = Edge<Giraffe>;
/**Paginator*/ export type GiraffePaginator = {
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  paginatorInfo: { Type: PaginatorInfo; Args: undefined };
  edges: { Type: GiraffeEdge[]; Args: undefined };
};
/**EnumPaginator*/ export type UserRoleEnumPaginator = {
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  values: { Type: Scalars["userRole"][]; Args: undefined };
};
/**User type*/ export type User = {
  /**The unique ID of the field*/ id: { Type: Scalars["id"]; Args: undefined };
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  name: { Type: Scalars["string"]; Args: undefined };
  firebaseUid: { Type: never; Args: undefined };
  email: { Type: Scalars["string"]; Args: undefined };
  password: { Type: never; Args: undefined };
  avatar: { Type: Scalars["string"] | null; Args: undefined };
  role: { Type: Scalars["userRole"]; Args: undefined };
  permissions: { Type: Scalars["userPermission"][] | null; Args: undefined };
  allPermissions: { Type: Scalars["userPermission"][]; Args: undefined };
  isPublic: { Type: Scalars["boolean"]; Args: undefined };
  /**When the record was created*/ createdAt: {
    Type: Scalars["unixTimestamp"];
    Args: undefined;
  };
  /**When the record was last updated*/ updatedAt: {
    Type: Scalars["unixTimestamp"] | null;
    Args: undefined;
  };
  createdBy: { Type: User; Args: undefined };
};
/**Api key*/ export type ApiKey = {
  /**The unique ID of the field*/ id: { Type: Scalars["id"]; Args: undefined };
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  name: { Type: Scalars["string"]; Args: undefined };
  code: { Type: Scalars["string"]; Args: undefined };
  user: { Type: User; Args: undefined };
  permissions: { Type: Scalars["userPermission"][] | null; Args: undefined };
  /**When the record was created*/ createdAt: {
    Type: Scalars["unixTimestamp"];
    Args: undefined;
  };
  /**When the record was last updated*/ updatedAt: {
    Type: Scalars["unixTimestamp"] | null;
    Args: undefined;
  };
  createdBy: { Type: User; Args: undefined };
};
/**File*/ export type File = {
  /**The unique ID of the field*/ id: { Type: Scalars["id"]; Args: undefined };
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  name: { Type: Scalars["string"]; Args: undefined };
  size: { Type: Scalars["number"]; Args: undefined };
  location: { Type: Scalars["string"]; Args: undefined };
  contentType: { Type: Scalars["string"]; Args: undefined };
  signedUrl: { Type: Scalars["string"]; Args: undefined };
  parentKey: { Type: Scalars["string"] | null; Args: undefined };
  /**When the record was created*/ createdAt: {
    Type: Scalars["unixTimestamp"];
    Args: undefined;
  };
  /**When the record was last updated*/ updatedAt: {
    Type: Scalars["unixTimestamp"] | null;
    Args: undefined;
  };
  createdBy: { Type: User; Args: undefined };
};
/**GiraffeSpecies type*/ export type GiraffeSpecies = {
  /**The unique ID of the field*/ id: { Type: Scalars["id"]; Args: undefined };
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  name: { Type: Scalars["string"]; Args: undefined };
  scientificName: { Type: Scalars["string"]; Args: undefined };
  avatar: { Type: Scalars["string"] | null; Args: undefined };
  description: { Type: Scalars["string"] | null; Args: undefined };
  /**When the record was created*/ createdAt: {
    Type: Scalars["unixTimestamp"];
    Args: undefined;
  };
  /**When the record was last updated*/ updatedAt: {
    Type: Scalars["unixTimestamp"] | null;
    Args: undefined;
  };
  createdBy: { Type: User; Args: undefined };
};
/**GiraffeSubspecies type*/ export type GiraffeSubspecies = {
  /**The unique ID of the field*/ id: { Type: Scalars["id"]; Args: undefined };
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  species: { Type: GiraffeSpecies; Args: undefined };
  name: { Type: Scalars["string"]; Args: undefined };
  scientificName: { Type: Scalars["string"]; Args: undefined };
  avatar: { Type: Scalars["string"] | null; Args: undefined };
  description: { Type: Scalars["string"] | null; Args: undefined };
  /**When the record was created*/ createdAt: {
    Type: Scalars["unixTimestamp"];
    Args: undefined;
  };
  /**When the record was last updated*/ updatedAt: {
    Type: Scalars["unixTimestamp"] | null;
    Args: undefined;
  };
  createdBy: { Type: User; Args: undefined };
};
/**Giraffe type*/ export type Giraffe = {
  /**The unique ID of the field*/ id: { Type: Scalars["id"]; Args: undefined };
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  subspecies: { Type: GiraffeSubspecies; Args: undefined };
  name: { Type: Scalars["string"]; Args: undefined };
  avatar: { Type: Scalars["string"] | null; Args: undefined };
  description: { Type: Scalars["string"] | null; Args: undefined };
  /**When the record was created*/ createdAt: {
    Type: Scalars["unixTimestamp"];
    Args: undefined;
  };
  /**When the record was last updated*/ updatedAt: {
    Type: Scalars["unixTimestamp"] | null;
    Args: undefined;
  };
  createdBy: { Type: User; Args: undefined };
};
/**All Root resolvers*/ export type Root = {
  getUserRoleEnumPaginator: { Type: UserRoleEnumPaginator; Args: undefined };
  getCurrentUser: { Type: User; Args: undefined };
  syncCurrentUser: { Type: User; Args: InputTypes["syncCurrentUser"] };
  getUser: { Type: User; Args: InputTypes["user"] };
  getUserPaginator: { Type: UserPaginator; Args: InputTypes["userPaginator"] };
  deleteUser: { Type: User; Args: InputTypes["user"] };
  createUser: { Type: User; Args: InputTypes["createUser"] };
  updateUser: { Type: User; Args: InputTypes["updateUser"] };
  getApiKey: { Type: ApiKey; Args: InputTypes["apiKey"] };
  getApiKeyPaginator: {
    Type: ApiKeyPaginator;
    Args: InputTypes["apiKeyPaginator"];
  };
  deleteApiKey: { Type: ApiKey; Args: InputTypes["apiKey"] };
  createApiKey: { Type: ApiKey; Args: InputTypes["createApiKey"] };
  updateApiKey: { Type: ApiKey; Args: InputTypes["updateApiKey"] };
  getRepositoryReleases: {
    Type: Scalars["unknown"][];
    Args: InputTypes["getRepositoryReleases"];
  };
  getRepositoryLatestVersion: {
    Type: Scalars["unknown"] | null;
    Args: undefined;
  };
  getFile: { Type: File; Args: InputTypes["file"] };
  getFilePaginator: { Type: FilePaginator; Args: InputTypes["filePaginator"] };
  deleteFile: { Type: File; Args: InputTypes["file"] };
  createFile: { Type: File; Args: InputTypes["createFile"] };
  updateFile: { Type: File; Args: InputTypes["updateFile"] };
  executeAdminFunction: { Type: Scalars["unknown"]; Args: Scalars["string"] };
  getGiraffeSpecies: {
    Type: GiraffeSpecies;
    Args: InputTypes["giraffeSpecies"];
  };
  getGiraffeSpeciesPaginator: {
    Type: GiraffeSpeciesPaginator;
    Args: InputTypes["giraffeSpeciesPaginator"];
  };
  deleteGiraffeSpecies: {
    Type: GiraffeSpecies;
    Args: InputTypes["giraffeSpecies"];
  };
  createGiraffeSpecies: {
    Type: GiraffeSpecies;
    Args: InputTypes["createGiraffeSpecies"];
  };
  updateGiraffeSpecies: {
    Type: GiraffeSpecies;
    Args: InputTypes["updateGiraffeSpecies"];
  };
  getGiraffeSubspecies: {
    Type: GiraffeSubspecies;
    Args: InputTypes["giraffeSubspecies"];
  };
  getGiraffeSubspeciesPaginator: {
    Type: GiraffeSubspeciesPaginator;
    Args: InputTypes["giraffeSubspeciesPaginator"];
  };
  deleteGiraffeSubspecies: {
    Type: GiraffeSubspecies;
    Args: InputTypes["giraffeSubspecies"];
  };
  createGiraffeSubspecies: {
    Type: GiraffeSubspecies;
    Args: InputTypes["createGiraffeSubspecies"];
  };
  updateGiraffeSubspecies: {
    Type: GiraffeSubspecies;
    Args: InputTypes["updateGiraffeSubspecies"];
  };
  getGiraffe: { Type: Giraffe; Args: InputTypes["giraffe"] };
  getGiraffePaginator: {
    Type: GiraffePaginator;
    Args: InputTypes["giraffePaginator"];
  };
  deleteGiraffe: { Type: Giraffe; Args: InputTypes["giraffe"] };
  createGiraffe: { Type: Giraffe; Args: InputTypes["createGiraffe"] };
  updateGiraffe: { Type: Giraffe; Args: InputTypes["updateGiraffe"] };
};
