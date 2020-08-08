import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  UUID: any;
  /** The `JSON` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: any;
};

export type Auth0CreateOneWithoutAuthProviderInput = {
  create?: Maybe<Auth0CreateWithoutAuthProviderInput>;
  connect?: Maybe<Auth0WhereUniqueInput>;
};

export type Auth0CreateWithoutAuthProviderInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  idToken?: Maybe<Scalars['String']>;
};

export type Auth0UpdateOneWithoutAuthProviderInput = {
  create?: Maybe<Auth0CreateWithoutAuthProviderInput>;
  connect?: Maybe<Auth0WhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Auth0UpdateWithoutAuthProviderDataInput>;
  upsert?: Maybe<Auth0UpsertWithoutAuthProviderInput>;
};

export type Auth0UpdateWithoutAuthProviderDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  idToken?: Maybe<Scalars['String']>;
};

export type Auth0UpsertWithoutAuthProviderInput = {
  update: Auth0UpdateWithoutAuthProviderDataInput;
  create: Auth0CreateWithoutAuthProviderInput;
};

export type Auth0WhereInput = {
  id?: Maybe<UuidFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  authProviderId?: Maybe<StringFilter>;
  idToken?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<Auth0WhereInput>>;
  OR?: Maybe<Array<Auth0WhereInput>>;
  NOT?: Maybe<Array<Auth0WhereInput>>;
  authProvider?: Maybe<AuthProviderWhereInput>;
};

export type Auth0WhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type AuthProviderCreateOneWithoutUserInput = {
  create?: Maybe<AuthProviderCreateWithoutUserInput>;
  connect?: Maybe<AuthProviderWhereUniqueInput>;
};

export type AuthProviderCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  auth0?: Maybe<Auth0CreateOneWithoutAuthProviderInput>;
};

export type AuthProviderUpdateOneWithoutUserInput = {
  create?: Maybe<AuthProviderCreateWithoutUserInput>;
  connect?: Maybe<AuthProviderWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AuthProviderUpdateWithoutUserDataInput>;
  upsert?: Maybe<AuthProviderUpsertWithoutUserInput>;
};

export type AuthProviderUpdateWithoutUserDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  auth0?: Maybe<Auth0UpdateOneWithoutAuthProviderInput>;
};

export type AuthProviderUpsertWithoutUserInput = {
  update: AuthProviderUpdateWithoutUserDataInput;
  create: AuthProviderCreateWithoutUserInput;
};

export type AuthProviderWhereInput = {
  id?: Maybe<UuidFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
  AND?: Maybe<Array<AuthProviderWhereInput>>;
  OR?: Maybe<Array<AuthProviderWhereInput>>;
  NOT?: Maybe<Array<AuthProviderWhereInput>>;
  user?: Maybe<UserWhereInput>;
  auth0?: Maybe<Auth0WhereInput>;
};

export type AuthProviderWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type BooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<Scalars['Boolean']>;
};

export type BuyCreateManyWithoutCostInput = {
  create?: Maybe<Array<BuyCreateWithoutCostInput>>;
  connect?: Maybe<Array<BuyWhereUniqueInput>>;
};

export type BuyCreateManyWithoutPlayerInput = {
  create?: Maybe<Array<BuyCreateWithoutPlayerInput>>;
  connect?: Maybe<Array<BuyWhereUniqueInput>>;
};

export type BuyCreateWithoutCostInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  player?: Maybe<PlayerCreateOneWithoutBuysInput>;
};

export type BuyCreateWithoutPlayerInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  cost: CostCreateOneWithoutBuysInput;
};

export type BuyFilter = {
  every?: Maybe<BuyWhereInput>;
  some?: Maybe<BuyWhereInput>;
  none?: Maybe<BuyWhereInput>;
};

export type BuyScalarWhereInput = {
  id?: Maybe<UuidFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  costId?: Maybe<StringFilter>;
  playerId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<BuyScalarWhereInput>>;
  OR?: Maybe<Array<BuyScalarWhereInput>>;
  NOT?: Maybe<Array<BuyScalarWhereInput>>;
};

export type BuyUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BuyUpdateManyWithoutCostInput = {
  create?: Maybe<Array<BuyCreateWithoutCostInput>>;
  connect?: Maybe<Array<BuyWhereUniqueInput>>;
  set?: Maybe<Array<BuyWhereUniqueInput>>;
  disconnect?: Maybe<Array<BuyWhereUniqueInput>>;
  delete?: Maybe<Array<BuyWhereUniqueInput>>;
  update?: Maybe<Array<BuyUpdateWithWhereUniqueWithoutCostInput>>;
  updateMany?: Maybe<Array<BuyUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<BuyScalarWhereInput>>;
  upsert?: Maybe<Array<BuyUpsertWithWhereUniqueWithoutCostInput>>;
};

export type BuyUpdateManyWithoutPlayerInput = {
  create?: Maybe<Array<BuyCreateWithoutPlayerInput>>;
  connect?: Maybe<Array<BuyWhereUniqueInput>>;
  set?: Maybe<Array<BuyWhereUniqueInput>>;
  disconnect?: Maybe<Array<BuyWhereUniqueInput>>;
  delete?: Maybe<Array<BuyWhereUniqueInput>>;
  update?: Maybe<Array<BuyUpdateWithWhereUniqueWithoutPlayerInput>>;
  updateMany?: Maybe<Array<BuyUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<BuyScalarWhereInput>>;
  upsert?: Maybe<Array<BuyUpsertWithWhereUniqueWithoutPlayerInput>>;
};

export type BuyUpdateManyWithWhereNestedInput = {
  where: BuyScalarWhereInput;
  data: BuyUpdateManyDataInput;
};

export type BuyUpdateWithoutCostDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  player?: Maybe<PlayerUpdateOneWithoutBuysInput>;
};

export type BuyUpdateWithoutPlayerDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  cost?: Maybe<CostUpdateOneRequiredWithoutBuysInput>;
};

export type BuyUpdateWithWhereUniqueWithoutCostInput = {
  where: BuyWhereUniqueInput;
  data: BuyUpdateWithoutCostDataInput;
};

export type BuyUpdateWithWhereUniqueWithoutPlayerInput = {
  where: BuyWhereUniqueInput;
  data: BuyUpdateWithoutPlayerDataInput;
};

export type BuyUpsertWithWhereUniqueWithoutCostInput = {
  where: BuyWhereUniqueInput;
  update: BuyUpdateWithoutCostDataInput;
  create: BuyCreateWithoutCostInput;
};

export type BuyUpsertWithWhereUniqueWithoutPlayerInput = {
  where: BuyWhereUniqueInput;
  update: BuyUpdateWithoutPlayerDataInput;
  create: BuyCreateWithoutPlayerInput;
};

export type BuyWhereInput = {
  id?: Maybe<UuidFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  costId?: Maybe<StringFilter>;
  playerId?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<BuyWhereInput>>;
  OR?: Maybe<Array<BuyWhereInput>>;
  NOT?: Maybe<Array<BuyWhereInput>>;
  cost?: Maybe<CostWhereInput>;
  player?: Maybe<PlayerWhereInput>;
};

export type BuyWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ChipCreateManyWithoutTournamentInput = {
  create?: Maybe<Array<ChipCreateWithoutTournamentInput>>;
  connect?: Maybe<Array<ChipWhereUniqueInput>>;
};

export type ChipCreateWithoutTournamentInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  denom: Scalars['Int'];
  color: Scalars['String'];
  rimColor: Scalars['String'];
  textColor: Scalars['String'];
  qtyAvailable: Scalars['Int'];
};

export type ChipFilter = {
  every?: Maybe<ChipWhereInput>;
  some?: Maybe<ChipWhereInput>;
  none?: Maybe<ChipWhereInput>;
};

export type ChipScalarWhereInput = {
  id?: Maybe<UuidFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  tournamentId?: Maybe<StringFilter>;
  denom?: Maybe<IntFilter>;
  color?: Maybe<StringFilter>;
  rimColor?: Maybe<StringFilter>;
  textColor?: Maybe<StringFilter>;
  qtyAvailable?: Maybe<IntFilter>;
  AND?: Maybe<Array<ChipScalarWhereInput>>;
  OR?: Maybe<Array<ChipScalarWhereInput>>;
  NOT?: Maybe<Array<ChipScalarWhereInput>>;
};

export type ChipUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  denom?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  rimColor?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  qtyAvailable?: Maybe<Scalars['Int']>;
};

export type ChipUpdateManyWithoutTournamentInput = {
  create?: Maybe<Array<ChipCreateWithoutTournamentInput>>;
  connect?: Maybe<Array<ChipWhereUniqueInput>>;
  set?: Maybe<Array<ChipWhereUniqueInput>>;
  disconnect?: Maybe<Array<ChipWhereUniqueInput>>;
  delete?: Maybe<Array<ChipWhereUniqueInput>>;
  update?: Maybe<Array<ChipUpdateWithWhereUniqueWithoutTournamentInput>>;
  updateMany?: Maybe<Array<ChipUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<ChipScalarWhereInput>>;
  upsert?: Maybe<Array<ChipUpsertWithWhereUniqueWithoutTournamentInput>>;
};

export type ChipUpdateManyWithWhereNestedInput = {
  where: ChipScalarWhereInput;
  data: ChipUpdateManyDataInput;
};

export type ChipUpdateWithoutTournamentDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  denom?: Maybe<Scalars['Int']>;
  color?: Maybe<Scalars['String']>;
  rimColor?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  qtyAvailable?: Maybe<Scalars['Int']>;
};

export type ChipUpdateWithWhereUniqueWithoutTournamentInput = {
  where: ChipWhereUniqueInput;
  data: ChipUpdateWithoutTournamentDataInput;
};

export type ChipUpsertWithWhereUniqueWithoutTournamentInput = {
  where: ChipWhereUniqueInput;
  update: ChipUpdateWithoutTournamentDataInput;
  create: ChipCreateWithoutTournamentInput;
};

export type ChipWhereInput = {
  id?: Maybe<UuidFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  tournamentId?: Maybe<StringFilter>;
  denom?: Maybe<IntFilter>;
  color?: Maybe<StringFilter>;
  rimColor?: Maybe<StringFilter>;
  textColor?: Maybe<StringFilter>;
  qtyAvailable?: Maybe<IntFilter>;
  AND?: Maybe<Array<ChipWhereInput>>;
  OR?: Maybe<Array<ChipWhereInput>>;
  NOT?: Maybe<Array<ChipWhereInput>>;
  tournament?: Maybe<TournamentWhereInput>;
};

export type ChipWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type CostCreateManyWithoutTournamentInput = {
  create?: Maybe<Array<CostCreateWithoutTournamentInput>>;
  connect?: Maybe<Array<CostWhereUniqueInput>>;
};

export type CostCreateOneWithoutBuysInput = {
  create?: Maybe<CostCreateWithoutBuysInput>;
  connect?: Maybe<CostWhereUniqueInput>;
};

export type CostCreateWithoutBuysInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  costType: Scalars['String'];
  price: Scalars['Int'];
  chipStack: Scalars['Int'];
  tournament: TournamentCreateOneWithoutCostsInput;
};

export type CostCreateWithoutTournamentInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  costType: Scalars['String'];
  price: Scalars['Int'];
  chipStack: Scalars['Int'];
  buys?: Maybe<BuyCreateManyWithoutCostInput>;
};

export type CostFilter = {
  every?: Maybe<CostWhereInput>;
  some?: Maybe<CostWhereInput>;
  none?: Maybe<CostWhereInput>;
};

export type CostScalarWhereInput = {
  id?: Maybe<UuidFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  tournamentId?: Maybe<StringFilter>;
  costType?: Maybe<StringFilter>;
  price?: Maybe<IntFilter>;
  chipStack?: Maybe<IntFilter>;
  buys?: Maybe<BuyFilter>;
  AND?: Maybe<Array<CostScalarWhereInput>>;
  OR?: Maybe<Array<CostScalarWhereInput>>;
  NOT?: Maybe<Array<CostScalarWhereInput>>;
};

export type CostUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  costType?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  chipStack?: Maybe<Scalars['Int']>;
};

export type CostUpdateManyWithoutTournamentInput = {
  create?: Maybe<Array<CostCreateWithoutTournamentInput>>;
  connect?: Maybe<Array<CostWhereUniqueInput>>;
  set?: Maybe<Array<CostWhereUniqueInput>>;
  disconnect?: Maybe<Array<CostWhereUniqueInput>>;
  delete?: Maybe<Array<CostWhereUniqueInput>>;
  update?: Maybe<Array<CostUpdateWithWhereUniqueWithoutTournamentInput>>;
  updateMany?: Maybe<Array<CostUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<CostScalarWhereInput>>;
  upsert?: Maybe<Array<CostUpsertWithWhereUniqueWithoutTournamentInput>>;
};

export type CostUpdateManyWithWhereNestedInput = {
  where: CostScalarWhereInput;
  data: CostUpdateManyDataInput;
};

export type CostUpdateOneRequiredWithoutBuysInput = {
  create?: Maybe<CostCreateWithoutBuysInput>;
  connect?: Maybe<CostWhereUniqueInput>;
  update?: Maybe<CostUpdateWithoutBuysDataInput>;
  upsert?: Maybe<CostUpsertWithoutBuysInput>;
};

export type CostUpdateWithoutBuysDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  costType?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  chipStack?: Maybe<Scalars['Int']>;
  tournament?: Maybe<TournamentUpdateOneRequiredWithoutCostsInput>;
};

export type CostUpdateWithoutTournamentDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  costType?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  chipStack?: Maybe<Scalars['Int']>;
  buys?: Maybe<BuyUpdateManyWithoutCostInput>;
};

export type CostUpdateWithWhereUniqueWithoutTournamentInput = {
  where: CostWhereUniqueInput;
  data: CostUpdateWithoutTournamentDataInput;
};

export type CostUpsertWithoutBuysInput = {
  update: CostUpdateWithoutBuysDataInput;
  create: CostCreateWithoutBuysInput;
};

export type CostUpsertWithWhereUniqueWithoutTournamentInput = {
  where: CostWhereUniqueInput;
  update: CostUpdateWithoutTournamentDataInput;
  create: CostCreateWithoutTournamentInput;
};

export type CostWhereInput = {
  id?: Maybe<UuidFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  tournamentId?: Maybe<StringFilter>;
  costType?: Maybe<StringFilter>;
  price?: Maybe<IntFilter>;
  chipStack?: Maybe<IntFilter>;
  buys?: Maybe<BuyFilter>;
  AND?: Maybe<Array<CostWhereInput>>;
  OR?: Maybe<Array<CostWhereInput>>;
  NOT?: Maybe<Array<CostWhereInput>>;
  tournament?: Maybe<TournamentWhereInput>;
};

export type CostWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  bigRedButton?: Maybe<Scalars['String']>;
  createOneUser: User;
  deleteOneUser?: Maybe<User>;
  deleteManyUser: BatchPayload;
  updateOneUser?: Maybe<User>;
  updateManyUser: BatchPayload;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};

export type NullableStringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type PayoutLevelCreateManyWithoutTournamentInput = {
  create?: Maybe<Array<PayoutLevelCreateWithoutTournamentInput>>;
  connect?: Maybe<Array<PayoutLevelWhereUniqueInput>>;
};

export type PayoutLevelCreateWithoutTournamentInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  levelNumber: Scalars['Int'];
  payCount: Scalars['Int'];
  playerCount: Scalars['Int'];
};

export type PayoutLevelFilter = {
  every?: Maybe<PayoutLevelWhereInput>;
  some?: Maybe<PayoutLevelWhereInput>;
  none?: Maybe<PayoutLevelWhereInput>;
};

export type PayoutLevelScalarWhereInput = {
  id?: Maybe<UuidFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  tournamentId?: Maybe<StringFilter>;
  levelNumber?: Maybe<IntFilter>;
  payCount?: Maybe<IntFilter>;
  playerCount?: Maybe<IntFilter>;
  AND?: Maybe<Array<PayoutLevelScalarWhereInput>>;
  OR?: Maybe<Array<PayoutLevelScalarWhereInput>>;
  NOT?: Maybe<Array<PayoutLevelScalarWhereInput>>;
};

export type PayoutLevelUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  levelNumber?: Maybe<Scalars['Int']>;
  payCount?: Maybe<Scalars['Int']>;
  playerCount?: Maybe<Scalars['Int']>;
};

export type PayoutLevelUpdateManyWithoutTournamentInput = {
  create?: Maybe<Array<PayoutLevelCreateWithoutTournamentInput>>;
  connect?: Maybe<Array<PayoutLevelWhereUniqueInput>>;
  set?: Maybe<Array<PayoutLevelWhereUniqueInput>>;
  disconnect?: Maybe<Array<PayoutLevelWhereUniqueInput>>;
  delete?: Maybe<Array<PayoutLevelWhereUniqueInput>>;
  update?: Maybe<Array<PayoutLevelUpdateWithWhereUniqueWithoutTournamentInput>>;
  updateMany?: Maybe<Array<PayoutLevelUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<PayoutLevelScalarWhereInput>>;
  upsert?: Maybe<Array<PayoutLevelUpsertWithWhereUniqueWithoutTournamentInput>>;
};

export type PayoutLevelUpdateManyWithWhereNestedInput = {
  where: PayoutLevelScalarWhereInput;
  data: PayoutLevelUpdateManyDataInput;
};

export type PayoutLevelUpdateWithoutTournamentDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  levelNumber?: Maybe<Scalars['Int']>;
  payCount?: Maybe<Scalars['Int']>;
  playerCount?: Maybe<Scalars['Int']>;
};

export type PayoutLevelUpdateWithWhereUniqueWithoutTournamentInput = {
  where: PayoutLevelWhereUniqueInput;
  data: PayoutLevelUpdateWithoutTournamentDataInput;
};

export type PayoutLevelUpsertWithWhereUniqueWithoutTournamentInput = {
  where: PayoutLevelWhereUniqueInput;
  update: PayoutLevelUpdateWithoutTournamentDataInput;
  create: PayoutLevelCreateWithoutTournamentInput;
};

export type PayoutLevelWhereInput = {
  id?: Maybe<UuidFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  tournamentId?: Maybe<StringFilter>;
  levelNumber?: Maybe<IntFilter>;
  payCount?: Maybe<IntFilter>;
  playerCount?: Maybe<IntFilter>;
  AND?: Maybe<Array<PayoutLevelWhereInput>>;
  OR?: Maybe<Array<PayoutLevelWhereInput>>;
  NOT?: Maybe<Array<PayoutLevelWhereInput>>;
  tournament?: Maybe<TournamentWhereInput>;
};

export type PayoutLevelWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type PlayerCreateManyWithoutUserInput = {
  create?: Maybe<Array<PlayerCreateWithoutUserInput>>;
  connect?: Maybe<Array<PlayerWhereUniqueInput>>;
};

export type PlayerCreateOneWithoutBuysInput = {
  create?: Maybe<PlayerCreateWithoutBuysInput>;
  connect?: Maybe<PlayerWhereUniqueInput>;
};

export type PlayerCreateWithoutBuysInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  user: UserCreateOneWithoutPlayersInput;
};

export type PlayerCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  buys?: Maybe<BuyCreateManyWithoutPlayerInput>;
};

export type PlayerFilter = {
  every?: Maybe<PlayerWhereInput>;
  some?: Maybe<PlayerWhereInput>;
  none?: Maybe<PlayerWhereInput>;
};

export type PlayerScalarWhereInput = {
  id?: Maybe<UuidFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
  name?: Maybe<NullableStringFilter>;
  buys?: Maybe<BuyFilter>;
  AND?: Maybe<Array<PlayerScalarWhereInput>>;
  OR?: Maybe<Array<PlayerScalarWhereInput>>;
  NOT?: Maybe<Array<PlayerScalarWhereInput>>;
};

export type PlayerUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type PlayerUpdateManyWithoutUserInput = {
  create?: Maybe<Array<PlayerCreateWithoutUserInput>>;
  connect?: Maybe<Array<PlayerWhereUniqueInput>>;
  set?: Maybe<Array<PlayerWhereUniqueInput>>;
  disconnect?: Maybe<Array<PlayerWhereUniqueInput>>;
  delete?: Maybe<Array<PlayerWhereUniqueInput>>;
  update?: Maybe<Array<PlayerUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<PlayerUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<PlayerScalarWhereInput>>;
  upsert?: Maybe<Array<PlayerUpsertWithWhereUniqueWithoutUserInput>>;
};

export type PlayerUpdateManyWithWhereNestedInput = {
  where: PlayerScalarWhereInput;
  data: PlayerUpdateManyDataInput;
};

export type PlayerUpdateOneWithoutBuysInput = {
  create?: Maybe<PlayerCreateWithoutBuysInput>;
  connect?: Maybe<PlayerWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<PlayerUpdateWithoutBuysDataInput>;
  upsert?: Maybe<PlayerUpsertWithoutBuysInput>;
};

export type PlayerUpdateWithoutBuysDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  user?: Maybe<UserUpdateOneRequiredWithoutPlayersInput>;
};

export type PlayerUpdateWithoutUserDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  buys?: Maybe<BuyUpdateManyWithoutPlayerInput>;
};

export type PlayerUpdateWithWhereUniqueWithoutUserInput = {
  where: PlayerWhereUniqueInput;
  data: PlayerUpdateWithoutUserDataInput;
};

export type PlayerUpsertWithoutBuysInput = {
  update: PlayerUpdateWithoutBuysDataInput;
  create: PlayerCreateWithoutBuysInput;
};

export type PlayerUpsertWithWhereUniqueWithoutUserInput = {
  where: PlayerWhereUniqueInput;
  update: PlayerUpdateWithoutUserDataInput;
  create: PlayerCreateWithoutUserInput;
};

export type PlayerWhereInput = {
  id?: Maybe<UuidFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<StringFilter>;
  name?: Maybe<NullableStringFilter>;
  buys?: Maybe<BuyFilter>;
  AND?: Maybe<Array<PlayerWhereInput>>;
  OR?: Maybe<Array<PlayerWhereInput>>;
  NOT?: Maybe<Array<PlayerWhereInput>>;
  user?: Maybe<UserWhereInput>;
};

export type PlayerWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  allUsers?: Maybe<Array<User>>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};

export type SegmentCreateManyWithoutTournamentInput = {
  create?: Maybe<Array<SegmentCreateWithoutTournamentInput>>;
  connect?: Maybe<Array<SegmentWhereUniqueInput>>;
};

export type SegmentCreateWithoutTournamentInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  duration: Scalars['Int'];
  sBlind: Scalars['Int'];
  bBlind: Scalars['Int'];
  ante: Scalars['Int'];
  game: Scalars['String'];
};

export type SegmentFilter = {
  every?: Maybe<SegmentWhereInput>;
  some?: Maybe<SegmentWhereInput>;
  none?: Maybe<SegmentWhereInput>;
};

export type SegmentScalarWhereInput = {
  id?: Maybe<UuidFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  tournamentId?: Maybe<StringFilter>;
  duration?: Maybe<IntFilter>;
  sBlind?: Maybe<IntFilter>;
  bBlind?: Maybe<IntFilter>;
  ante?: Maybe<IntFilter>;
  game?: Maybe<StringFilter>;
  AND?: Maybe<Array<SegmentScalarWhereInput>>;
  OR?: Maybe<Array<SegmentScalarWhereInput>>;
  NOT?: Maybe<Array<SegmentScalarWhereInput>>;
};

export type SegmentUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  duration?: Maybe<Scalars['Int']>;
  sBlind?: Maybe<Scalars['Int']>;
  bBlind?: Maybe<Scalars['Int']>;
  ante?: Maybe<Scalars['Int']>;
  game?: Maybe<Scalars['String']>;
};

export type SegmentUpdateManyWithoutTournamentInput = {
  create?: Maybe<Array<SegmentCreateWithoutTournamentInput>>;
  connect?: Maybe<Array<SegmentWhereUniqueInput>>;
  set?: Maybe<Array<SegmentWhereUniqueInput>>;
  disconnect?: Maybe<Array<SegmentWhereUniqueInput>>;
  delete?: Maybe<Array<SegmentWhereUniqueInput>>;
  update?: Maybe<Array<SegmentUpdateWithWhereUniqueWithoutTournamentInput>>;
  updateMany?: Maybe<Array<SegmentUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<SegmentScalarWhereInput>>;
  upsert?: Maybe<Array<SegmentUpsertWithWhereUniqueWithoutTournamentInput>>;
};

export type SegmentUpdateManyWithWhereNestedInput = {
  where: SegmentScalarWhereInput;
  data: SegmentUpdateManyDataInput;
};

export type SegmentUpdateWithoutTournamentDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  duration?: Maybe<Scalars['Int']>;
  sBlind?: Maybe<Scalars['Int']>;
  bBlind?: Maybe<Scalars['Int']>;
  ante?: Maybe<Scalars['Int']>;
  game?: Maybe<Scalars['String']>;
};

export type SegmentUpdateWithWhereUniqueWithoutTournamentInput = {
  where: SegmentWhereUniqueInput;
  data: SegmentUpdateWithoutTournamentDataInput;
};

export type SegmentUpsertWithWhereUniqueWithoutTournamentInput = {
  where: SegmentWhereUniqueInput;
  update: SegmentUpdateWithoutTournamentDataInput;
  create: SegmentCreateWithoutTournamentInput;
};

export type SegmentWhereInput = {
  id?: Maybe<UuidFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  tournamentId?: Maybe<StringFilter>;
  duration?: Maybe<IntFilter>;
  sBlind?: Maybe<IntFilter>;
  bBlind?: Maybe<IntFilter>;
  ante?: Maybe<IntFilter>;
  game?: Maybe<StringFilter>;
  AND?: Maybe<Array<SegmentWhereInput>>;
  OR?: Maybe<Array<SegmentWhereInput>>;
  NOT?: Maybe<Array<SegmentWhereInput>>;
  tournament?: Maybe<TournamentWhereInput>;
};

export type SegmentWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type TimerCreateOneWithoutTournamentInput = {
  create?: Maybe<TimerCreateWithoutTournamentInput>;
  connect?: Maybe<TimerWhereUniqueInput>;
};

export type TimerCreateWithoutTournamentInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  active: Scalars['Boolean'];
  elapsed: Scalars['Int'];
  oneMinuteRemainingSpeech: Scalars['String'];
  playOneMinuteRemainingSound: Scalars['Boolean'];
  endOfRoundSpeech: Scalars['String'];
  playEndOfRoundSound: Scalars['Boolean'];
  backgroundColor: Scalars['String'];
};

export type TimerUpdateOneWithoutTournamentInput = {
  create?: Maybe<TimerCreateWithoutTournamentInput>;
  connect?: Maybe<TimerWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TimerUpdateWithoutTournamentDataInput>;
  upsert?: Maybe<TimerUpsertWithoutTournamentInput>;
};

export type TimerUpdateWithoutTournamentDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  active?: Maybe<Scalars['Boolean']>;
  elapsed?: Maybe<Scalars['Int']>;
  oneMinuteRemainingSpeech?: Maybe<Scalars['String']>;
  playOneMinuteRemainingSound?: Maybe<Scalars['Boolean']>;
  endOfRoundSpeech?: Maybe<Scalars['String']>;
  playEndOfRoundSound?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type TimerUpsertWithoutTournamentInput = {
  update: TimerUpdateWithoutTournamentDataInput;
  create: TimerCreateWithoutTournamentInput;
};

export type TimerWhereInput = {
  id?: Maybe<UuidFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  tournamentId?: Maybe<StringFilter>;
  active?: Maybe<BooleanFilter>;
  elapsed?: Maybe<IntFilter>;
  oneMinuteRemainingSpeech?: Maybe<StringFilter>;
  playOneMinuteRemainingSound?: Maybe<BooleanFilter>;
  endOfRoundSpeech?: Maybe<StringFilter>;
  playEndOfRoundSound?: Maybe<BooleanFilter>;
  backgroundColor?: Maybe<StringFilter>;
  AND?: Maybe<Array<TimerWhereInput>>;
  OR?: Maybe<Array<TimerWhereInput>>;
  NOT?: Maybe<Array<TimerWhereInput>>;
  tournament?: Maybe<TournamentWhereInput>;
};

export type TimerWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type TournamentCreateManyWithoutUserInput = {
  create?: Maybe<Array<TournamentCreateWithoutUserInput>>;
  connect?: Maybe<Array<TournamentWhereUniqueInput>>;
};

export type TournamentCreateOneWithoutCostsInput = {
  create?: Maybe<TournamentCreateWithoutCostsInput>;
  connect?: Maybe<TournamentWhereUniqueInput>;
};

export type TournamentCreateWithoutCostsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  subtitle: Scalars['String'];
  comments: Scalars['String'];
  game: Scalars['String'];
  user?: Maybe<UserCreateOneWithoutTournamentsInput>;
  segments?: Maybe<SegmentCreateManyWithoutTournamentInput>;
  chips?: Maybe<ChipCreateManyWithoutTournamentInput>;
  timer?: Maybe<TimerCreateOneWithoutTournamentInput>;
  payoutLevels?: Maybe<PayoutLevelCreateManyWithoutTournamentInput>;
};

export type TournamentCreateWithoutUserInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  subtitle: Scalars['String'];
  comments: Scalars['String'];
  game: Scalars['String'];
  segments?: Maybe<SegmentCreateManyWithoutTournamentInput>;
  chips?: Maybe<ChipCreateManyWithoutTournamentInput>;
  costs?: Maybe<CostCreateManyWithoutTournamentInput>;
  timer?: Maybe<TimerCreateOneWithoutTournamentInput>;
  payoutLevels?: Maybe<PayoutLevelCreateManyWithoutTournamentInput>;
};

export type TournamentFilter = {
  every?: Maybe<TournamentWhereInput>;
  some?: Maybe<TournamentWhereInput>;
  none?: Maybe<TournamentWhereInput>;
};

export type TournamentScalarWhereInput = {
  id?: Maybe<UuidFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<NullableStringFilter>;
  title?: Maybe<StringFilter>;
  subtitle?: Maybe<StringFilter>;
  comments?: Maybe<StringFilter>;
  game?: Maybe<StringFilter>;
  segments?: Maybe<SegmentFilter>;
  chips?: Maybe<ChipFilter>;
  costs?: Maybe<CostFilter>;
  payoutLevels?: Maybe<PayoutLevelFilter>;
  AND?: Maybe<Array<TournamentScalarWhereInput>>;
  OR?: Maybe<Array<TournamentScalarWhereInput>>;
  NOT?: Maybe<Array<TournamentScalarWhereInput>>;
};

export type TournamentUpdateManyDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  game?: Maybe<Scalars['String']>;
};

export type TournamentUpdateManyWithoutUserInput = {
  create?: Maybe<Array<TournamentCreateWithoutUserInput>>;
  connect?: Maybe<Array<TournamentWhereUniqueInput>>;
  set?: Maybe<Array<TournamentWhereUniqueInput>>;
  disconnect?: Maybe<Array<TournamentWhereUniqueInput>>;
  delete?: Maybe<Array<TournamentWhereUniqueInput>>;
  update?: Maybe<Array<TournamentUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<TournamentUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<TournamentScalarWhereInput>>;
  upsert?: Maybe<Array<TournamentUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TournamentUpdateManyWithWhereNestedInput = {
  where: TournamentScalarWhereInput;
  data: TournamentUpdateManyDataInput;
};

export type TournamentUpdateOneRequiredWithoutCostsInput = {
  create?: Maybe<TournamentCreateWithoutCostsInput>;
  connect?: Maybe<TournamentWhereUniqueInput>;
  update?: Maybe<TournamentUpdateWithoutCostsDataInput>;
  upsert?: Maybe<TournamentUpsertWithoutCostsInput>;
};

export type TournamentUpdateWithoutCostsDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  game?: Maybe<Scalars['String']>;
  user?: Maybe<UserUpdateOneWithoutTournamentsInput>;
  segments?: Maybe<SegmentUpdateManyWithoutTournamentInput>;
  chips?: Maybe<ChipUpdateManyWithoutTournamentInput>;
  timer?: Maybe<TimerUpdateOneWithoutTournamentInput>;
  payoutLevels?: Maybe<PayoutLevelUpdateManyWithoutTournamentInput>;
};

export type TournamentUpdateWithoutUserDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  game?: Maybe<Scalars['String']>;
  segments?: Maybe<SegmentUpdateManyWithoutTournamentInput>;
  chips?: Maybe<ChipUpdateManyWithoutTournamentInput>;
  costs?: Maybe<CostUpdateManyWithoutTournamentInput>;
  timer?: Maybe<TimerUpdateOneWithoutTournamentInput>;
  payoutLevels?: Maybe<PayoutLevelUpdateManyWithoutTournamentInput>;
};

export type TournamentUpdateWithWhereUniqueWithoutUserInput = {
  where: TournamentWhereUniqueInput;
  data: TournamentUpdateWithoutUserDataInput;
};

export type TournamentUpsertWithoutCostsInput = {
  update: TournamentUpdateWithoutCostsDataInput;
  create: TournamentCreateWithoutCostsInput;
};

export type TournamentUpsertWithWhereUniqueWithoutUserInput = {
  where: TournamentWhereUniqueInput;
  update: TournamentUpdateWithoutUserDataInput;
  create: TournamentCreateWithoutUserInput;
};

export type TournamentWhereInput = {
  id?: Maybe<UuidFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<NullableStringFilter>;
  title?: Maybe<StringFilter>;
  subtitle?: Maybe<StringFilter>;
  comments?: Maybe<StringFilter>;
  game?: Maybe<StringFilter>;
  segments?: Maybe<SegmentFilter>;
  chips?: Maybe<ChipFilter>;
  costs?: Maybe<CostFilter>;
  payoutLevels?: Maybe<PayoutLevelFilter>;
  AND?: Maybe<Array<TournamentWhereInput>>;
  OR?: Maybe<Array<TournamentWhereInput>>;
  NOT?: Maybe<Array<TournamentWhereInput>>;
  user?: Maybe<UserWhereInput>;
  timer?: Maybe<TimerWhereInput>;
};

export type TournamentWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type UserCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  credits?: Maybe<Scalars['Int']>;
  authProvider?: Maybe<AuthProviderCreateOneWithoutUserInput>;
  tournaments?: Maybe<TournamentCreateManyWithoutUserInput>;
  players?: Maybe<PlayerCreateManyWithoutUserInput>;
};

export type UserCreateOneWithoutPlayersInput = {
  create?: Maybe<UserCreateWithoutPlayersInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOneWithoutTournamentsInput = {
  create?: Maybe<UserCreateWithoutTournamentsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutPlayersInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  credits?: Maybe<Scalars['Int']>;
  authProvider?: Maybe<AuthProviderCreateOneWithoutUserInput>;
  tournaments?: Maybe<TournamentCreateManyWithoutUserInput>;
};

export type UserCreateWithoutTournamentsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  credits?: Maybe<Scalars['Int']>;
  authProvider?: Maybe<AuthProviderCreateOneWithoutUserInput>;
  players?: Maybe<PlayerCreateManyWithoutUserInput>;
};

export type UserUpdateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  credits?: Maybe<Scalars['Int']>;
  authProvider?: Maybe<AuthProviderUpdateOneWithoutUserInput>;
  tournaments?: Maybe<TournamentUpdateManyWithoutUserInput>;
  players?: Maybe<PlayerUpdateManyWithoutUserInput>;
};

export type UserUpdateManyMutationInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  credits?: Maybe<Scalars['Int']>;
};

export type UserUpdateOneRequiredWithoutPlayersInput = {
  create?: Maybe<UserCreateWithoutPlayersInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutPlayersDataInput>;
  upsert?: Maybe<UserUpsertWithoutPlayersInput>;
};

export type UserUpdateOneWithoutTournamentsInput = {
  create?: Maybe<UserCreateWithoutTournamentsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutTournamentsDataInput>;
  upsert?: Maybe<UserUpsertWithoutTournamentsInput>;
};

export type UserUpdateWithoutPlayersDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  credits?: Maybe<Scalars['Int']>;
  authProvider?: Maybe<AuthProviderUpdateOneWithoutUserInput>;
  tournaments?: Maybe<TournamentUpdateManyWithoutUserInput>;
};

export type UserUpdateWithoutTournamentsDataInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  credits?: Maybe<Scalars['Int']>;
  authProvider?: Maybe<AuthProviderUpdateOneWithoutUserInput>;
  players?: Maybe<PlayerUpdateManyWithoutUserInput>;
};

export type UserUpsertWithoutPlayersInput = {
  update: UserUpdateWithoutPlayersDataInput;
  create: UserCreateWithoutPlayersInput;
};

export type UserUpsertWithoutTournamentsInput = {
  update: UserUpdateWithoutTournamentsDataInput;
  create: UserCreateWithoutTournamentsInput;
};

export type UserWhereInput = {
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  name?: Maybe<StringFilter>;
  credits?: Maybe<IntFilter>;
  tournaments?: Maybe<TournamentFilter>;
  players?: Maybe<PlayerFilter>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  authProvider?: Maybe<AuthProviderWhereInput>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};


export type UuidFilter = {
  equals?: Maybe<Scalars['UUID']>;
  not?: Maybe<Scalars['UUID']>;
  in?: Maybe<Array<Scalars['UUID']>>;
  notIn?: Maybe<Array<Scalars['UUID']>>;
  lt?: Maybe<Scalars['UUID']>;
  lte?: Maybe<Scalars['UUID']>;
  gt?: Maybe<Scalars['UUID']>;
  gte?: Maybe<Scalars['UUID']>;
  contains?: Maybe<Scalars['UUID']>;
  startsWith?: Maybe<Scalars['UUID']>;
  endsWith?: Maybe<Scalars['UUID']>;
};

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = (
  { __typename?: 'Query' }
  & { allUsers?: Maybe<Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  )>> }
);


export const AllUsersDocument = gql`
    query AllUsers {
  allUsers {
    id
    name
  }
}
    `;

export function useAllUsersQuery(options: Omit<Urql.UseQueryArgs<AllUsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllUsersQuery>({ query: AllUsersDocument, ...options });
};