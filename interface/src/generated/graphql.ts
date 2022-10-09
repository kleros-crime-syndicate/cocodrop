import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Airdrop = {
  __typename?: 'Airdrop';
  /** Id of the airdrop */
  airdropId: Scalars['BigInt'];
  /** Address of the donor */
  donor: Scalars['Bytes'];
  /** String of the airdropId */
  id: Scalars['ID'];
  /** Ipfs file containing the merkle drop */
  ipfs: Scalars['String'];
  /** How much amount was this airdrop created with */
  originalAmount: Scalars['BigInt'];
  /** Redeemers array */
  redeemers: Array<Redeemer>;
  /** Redemptions */
  redemptions: Array<Redemption>;
  /** How much token does this airdrop still contain */
  remainingAmount: Scalars['BigInt'];
  /** Address of the token the airdrop dispersed */
  token: Scalars['Bytes'];
};


export type AirdropRedeemersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Redeemer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Redeemer_Filter>;
};


export type AirdropRedemptionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Redemption_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Redemption_Filter>;
};

export type Airdrop_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  airdropId?: InputMaybe<Scalars['BigInt']>;
  airdropId_gt?: InputMaybe<Scalars['BigInt']>;
  airdropId_gte?: InputMaybe<Scalars['BigInt']>;
  airdropId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  airdropId_lt?: InputMaybe<Scalars['BigInt']>;
  airdropId_lte?: InputMaybe<Scalars['BigInt']>;
  airdropId_not?: InputMaybe<Scalars['BigInt']>;
  airdropId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  donor?: InputMaybe<Scalars['Bytes']>;
  donor_contains?: InputMaybe<Scalars['Bytes']>;
  donor_in?: InputMaybe<Array<Scalars['Bytes']>>;
  donor_not?: InputMaybe<Scalars['Bytes']>;
  donor_not_contains?: InputMaybe<Scalars['Bytes']>;
  donor_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  ipfs?: InputMaybe<Scalars['String']>;
  ipfs_contains?: InputMaybe<Scalars['String']>;
  ipfs_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfs_ends_with?: InputMaybe<Scalars['String']>;
  ipfs_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfs_gt?: InputMaybe<Scalars['String']>;
  ipfs_gte?: InputMaybe<Scalars['String']>;
  ipfs_in?: InputMaybe<Array<Scalars['String']>>;
  ipfs_lt?: InputMaybe<Scalars['String']>;
  ipfs_lte?: InputMaybe<Scalars['String']>;
  ipfs_not?: InputMaybe<Scalars['String']>;
  ipfs_not_contains?: InputMaybe<Scalars['String']>;
  ipfs_not_contains_nocase?: InputMaybe<Scalars['String']>;
  ipfs_not_ends_with?: InputMaybe<Scalars['String']>;
  ipfs_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  ipfs_not_in?: InputMaybe<Array<Scalars['String']>>;
  ipfs_not_starts_with?: InputMaybe<Scalars['String']>;
  ipfs_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  ipfs_starts_with?: InputMaybe<Scalars['String']>;
  ipfs_starts_with_nocase?: InputMaybe<Scalars['String']>;
  originalAmount?: InputMaybe<Scalars['BigInt']>;
  originalAmount_gt?: InputMaybe<Scalars['BigInt']>;
  originalAmount_gte?: InputMaybe<Scalars['BigInt']>;
  originalAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originalAmount_lt?: InputMaybe<Scalars['BigInt']>;
  originalAmount_lte?: InputMaybe<Scalars['BigInt']>;
  originalAmount_not?: InputMaybe<Scalars['BigInt']>;
  originalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  redeemers_?: InputMaybe<Redeemer_Filter>;
  redemptions_?: InputMaybe<Redemption_Filter>;
  remainingAmount?: InputMaybe<Scalars['BigInt']>;
  remainingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  remainingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  remainingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  remainingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  remainingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  remainingAmount_not?: InputMaybe<Scalars['BigInt']>;
  remainingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum Airdrop_OrderBy {
  AirdropId = 'airdropId',
  Donor = 'donor',
  Id = 'id',
  Ipfs = 'ipfs',
  OriginalAmount = 'originalAmount',
  Redeemers = 'redeemers',
  Redemptions = 'redemptions',
  RemainingAmount = 'remainingAmount',
  Token = 'token'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  airdrop?: Maybe<Airdrop>;
  airdrops: Array<Airdrop>;
  redeemer?: Maybe<Redeemer>;
  redeemers: Array<Redeemer>;
  redemption?: Maybe<Redemption>;
  redemptions: Array<Redemption>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAirdropArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAirdropsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Airdrop_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Airdrop_Filter>;
};


export type QueryRedeemerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRedeemersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Redeemer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Redeemer_Filter>;
};


export type QueryRedemptionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryRedemptionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Redemption_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Redemption_Filter>;
};

export type Redeemer = {
  __typename?: 'Redeemer';
  /** Airdrops this Redeemer took part in */
  airdrops: Array<Airdrop>;
  /** Address of the redeemer */
  id: Scalars['ID'];
  /** Redemptions by this user */
  redemptions: Array<Redemption>;
};


export type RedeemerAirdropsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Airdrop_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Airdrop_Filter>;
};


export type RedeemerRedemptionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Redemption_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Redemption_Filter>;
};

export type Redeemer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  airdrops?: InputMaybe<Array<Scalars['String']>>;
  airdrops_?: InputMaybe<Airdrop_Filter>;
  airdrops_contains?: InputMaybe<Array<Scalars['String']>>;
  airdrops_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  airdrops_not?: InputMaybe<Array<Scalars['String']>>;
  airdrops_not_contains?: InputMaybe<Array<Scalars['String']>>;
  airdrops_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  redemptions_?: InputMaybe<Redemption_Filter>;
};

export enum Redeemer_OrderBy {
  Airdrops = 'airdrops',
  Id = 'id',
  Redemptions = 'redemptions'
}

export type Redemption = {
  __typename?: 'Redemption';
  /** Reference to the airdrop */
  airdrop: Airdrop;
  /** The amount that was withdrawn */
  amount: Scalars['BigInt'];
  /** <airdropId>@<redeemerId> */
  id: Scalars['ID'];
  /** The recipient of the redemption */
  redeemer: Redeemer;
};

export type Redemption_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  airdrop?: InputMaybe<Scalars['String']>;
  airdrop_?: InputMaybe<Airdrop_Filter>;
  airdrop_contains?: InputMaybe<Scalars['String']>;
  airdrop_contains_nocase?: InputMaybe<Scalars['String']>;
  airdrop_ends_with?: InputMaybe<Scalars['String']>;
  airdrop_ends_with_nocase?: InputMaybe<Scalars['String']>;
  airdrop_gt?: InputMaybe<Scalars['String']>;
  airdrop_gte?: InputMaybe<Scalars['String']>;
  airdrop_in?: InputMaybe<Array<Scalars['String']>>;
  airdrop_lt?: InputMaybe<Scalars['String']>;
  airdrop_lte?: InputMaybe<Scalars['String']>;
  airdrop_not?: InputMaybe<Scalars['String']>;
  airdrop_not_contains?: InputMaybe<Scalars['String']>;
  airdrop_not_contains_nocase?: InputMaybe<Scalars['String']>;
  airdrop_not_ends_with?: InputMaybe<Scalars['String']>;
  airdrop_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  airdrop_not_in?: InputMaybe<Array<Scalars['String']>>;
  airdrop_not_starts_with?: InputMaybe<Scalars['String']>;
  airdrop_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  airdrop_starts_with?: InputMaybe<Scalars['String']>;
  airdrop_starts_with_nocase?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  redeemer?: InputMaybe<Scalars['String']>;
  redeemer_?: InputMaybe<Redeemer_Filter>;
  redeemer_contains?: InputMaybe<Scalars['String']>;
  redeemer_contains_nocase?: InputMaybe<Scalars['String']>;
  redeemer_ends_with?: InputMaybe<Scalars['String']>;
  redeemer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  redeemer_gt?: InputMaybe<Scalars['String']>;
  redeemer_gte?: InputMaybe<Scalars['String']>;
  redeemer_in?: InputMaybe<Array<Scalars['String']>>;
  redeemer_lt?: InputMaybe<Scalars['String']>;
  redeemer_lte?: InputMaybe<Scalars['String']>;
  redeemer_not?: InputMaybe<Scalars['String']>;
  redeemer_not_contains?: InputMaybe<Scalars['String']>;
  redeemer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  redeemer_not_ends_with?: InputMaybe<Scalars['String']>;
  redeemer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  redeemer_not_in?: InputMaybe<Array<Scalars['String']>>;
  redeemer_not_starts_with?: InputMaybe<Scalars['String']>;
  redeemer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  redeemer_starts_with?: InputMaybe<Scalars['String']>;
  redeemer_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Redemption_OrderBy {
  Airdrop = 'airdrop',
  Amount = 'amount',
  Id = 'id',
  Redeemer = 'redeemer'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  airdrop?: Maybe<Airdrop>;
  airdrops: Array<Airdrop>;
  redeemer?: Maybe<Redeemer>;
  redeemers: Array<Redeemer>;
  redemption?: Maybe<Redemption>;
  redemptions: Array<Redemption>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAirdropArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAirdropsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Airdrop_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Airdrop_Filter>;
};


export type SubscriptionRedeemerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRedeemersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Redeemer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Redeemer_Filter>;
};


export type SubscriptionRedemptionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionRedemptionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Redemption_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Redemption_Filter>;
};

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type AirdropsQueryVariables = Exact<{ [key: string]: never; }>;


export type AirdropsQuery = { __typename?: 'Query', airdrops: Array<{ __typename?: 'Airdrop', id: string, airdropId: any, donor: any, originalAmount: any, token: any, ipfs: string }> };

export type RedemptionQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RedemptionQuery = { __typename?: 'Query', redemption?: { __typename?: 'Redemption', id: string } | null };


export const AirdropsDocument = gql`
    query Airdrops {
  airdrops {
    id
    airdropId
    donor
    originalAmount
    token
    ipfs
  }
}
    `;
export const RedemptionDocument = gql`
    query Redemption($id: ID!) {
  redemption(id: $id) {
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Airdrops(variables?: AirdropsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AirdropsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AirdropsQuery>(AirdropsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Airdrops', 'query');
    },
    Redemption(variables: RedemptionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RedemptionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RedemptionQuery>(RedemptionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Redemption', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;