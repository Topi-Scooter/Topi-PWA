/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRideInput = {
  id?: string | null,
  isActive: boolean,
  rate: number,
  _version?: number | null,
};

export type ModelRideConditionInput = {
  isActive?: ModelBooleanInput | null,
  rate?: ModelFloatInput | null,
  and?: Array< ModelRideConditionInput | null > | null,
  or?: Array< ModelRideConditionInput | null > | null,
  not?: ModelRideConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Ride = {
  __typename: "Ride",
  id: string,
  scooterId: Scooter,
  isActive: boolean,
  user: User,
  rate: number,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  startedOn: string,
  endedOn: string,
  owner?: string | null,
};

export type Scooter = {
  __typename: "Scooter",
  id: string,
  isInUse: boolean,
  isOnline: boolean,
  isLocked: boolean,
  batteryPercent: number,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  isRiding: boolean,
  rideHistory?:  Array<Ride > | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateRideInput = {
  id: string,
  isActive?: boolean | null,
  rate?: number | null,
  _version?: number | null,
};

export type DeleteRideInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  isRiding: boolean,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  isRiding?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  isRiding?: boolean | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateScooterInput = {
  id?: string | null,
  isInUse: boolean,
  isOnline: boolean,
  isLocked: boolean,
  batteryPercent: number,
  _version?: number | null,
};

export type ModelScooterConditionInput = {
  isInUse?: ModelBooleanInput | null,
  isOnline?: ModelBooleanInput | null,
  isLocked?: ModelBooleanInput | null,
  batteryPercent?: ModelFloatInput | null,
  and?: Array< ModelScooterConditionInput | null > | null,
  or?: Array< ModelScooterConditionInput | null > | null,
  not?: ModelScooterConditionInput | null,
};

export type UpdateScooterInput = {
  id: string,
  isInUse?: boolean | null,
  isOnline?: boolean | null,
  isLocked?: boolean | null,
  batteryPercent?: number | null,
  _version?: number | null,
};

export type DeleteScooterInput = {
  id: string,
  _version?: number | null,
};

export type ModelRideFilterInput = {
  id?: ModelIDInput | null,
  isActive?: ModelBooleanInput | null,
  rate?: ModelFloatInput | null,
  and?: Array< ModelRideFilterInput | null > | null,
  or?: Array< ModelRideFilterInput | null > | null,
  not?: ModelRideFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelRideConnection = {
  __typename: "ModelRideConnection",
  items?:  Array<Ride | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  isRiding?: ModelBooleanInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelScooterFilterInput = {
  id?: ModelIDInput | null,
  isInUse?: ModelBooleanInput | null,
  isOnline?: ModelBooleanInput | null,
  isLocked?: ModelBooleanInput | null,
  batteryPercent?: ModelFloatInput | null,
  and?: Array< ModelScooterFilterInput | null > | null,
  or?: Array< ModelScooterFilterInput | null > | null,
  not?: ModelScooterFilterInput | null,
};

export type ModelScooterConnection = {
  __typename: "ModelScooterConnection",
  items?:  Array<Scooter | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateRideMutationVariables = {
  input: CreateRideInput,
  condition?: ModelRideConditionInput | null,
};

export type CreateRideMutation = {
  createRide?:  {
    __typename: "Ride",
    id: string,
    scooterId:  {
      __typename: "Scooter",
      id: string,
      isInUse: boolean,
      isOnline: boolean,
      isLocked: boolean,
      batteryPercent: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    isActive: boolean,
    user:  {
      __typename: "User",
      id: string,
      isRiding: boolean,
      rideHistory?:  Array< {
        __typename: "Ride",
        id: string,
        isActive: boolean,
        rate: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        startedOn: string,
        endedOn: string,
        owner?: string | null,
      } > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    rate: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    startedOn: string,
    endedOn: string,
    owner?: string | null,
  } | null,
};

export type UpdateRideMutationVariables = {
  input: UpdateRideInput,
  condition?: ModelRideConditionInput | null,
};

export type UpdateRideMutation = {
  updateRide?:  {
    __typename: "Ride",
    id: string,
    scooterId:  {
      __typename: "Scooter",
      id: string,
      isInUse: boolean,
      isOnline: boolean,
      isLocked: boolean,
      batteryPercent: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    isActive: boolean,
    user:  {
      __typename: "User",
      id: string,
      isRiding: boolean,
      rideHistory?:  Array< {
        __typename: "Ride",
        id: string,
        isActive: boolean,
        rate: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        startedOn: string,
        endedOn: string,
        owner?: string | null,
      } > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    rate: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    startedOn: string,
    endedOn: string,
    owner?: string | null,
  } | null,
};

export type DeleteRideMutationVariables = {
  input: DeleteRideInput,
  condition?: ModelRideConditionInput | null,
};

export type DeleteRideMutation = {
  deleteRide?:  {
    __typename: "Ride",
    id: string,
    scooterId:  {
      __typename: "Scooter",
      id: string,
      isInUse: boolean,
      isOnline: boolean,
      isLocked: boolean,
      batteryPercent: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    isActive: boolean,
    user:  {
      __typename: "User",
      id: string,
      isRiding: boolean,
      rideHistory?:  Array< {
        __typename: "Ride",
        id: string,
        isActive: boolean,
        rate: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        startedOn: string,
        endedOn: string,
        owner?: string | null,
      } > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    rate: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    startedOn: string,
    endedOn: string,
    owner?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    isRiding: boolean,
    rideHistory?:  Array< {
      __typename: "Ride",
      id: string,
      scooterId:  {
        __typename: "Scooter",
        id: string,
        isInUse: boolean,
        isOnline: boolean,
        isLocked: boolean,
        batteryPercent: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      isActive: boolean,
      user:  {
        __typename: "User",
        id: string,
        isRiding: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      rate: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      startedOn: string,
      endedOn: string,
      owner?: string | null,
    } > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    isRiding: boolean,
    rideHistory?:  Array< {
      __typename: "Ride",
      id: string,
      scooterId:  {
        __typename: "Scooter",
        id: string,
        isInUse: boolean,
        isOnline: boolean,
        isLocked: boolean,
        batteryPercent: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      isActive: boolean,
      user:  {
        __typename: "User",
        id: string,
        isRiding: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      rate: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      startedOn: string,
      endedOn: string,
      owner?: string | null,
    } > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    isRiding: boolean,
    rideHistory?:  Array< {
      __typename: "Ride",
      id: string,
      scooterId:  {
        __typename: "Scooter",
        id: string,
        isInUse: boolean,
        isOnline: boolean,
        isLocked: boolean,
        batteryPercent: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      isActive: boolean,
      user:  {
        __typename: "User",
        id: string,
        isRiding: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      rate: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      startedOn: string,
      endedOn: string,
      owner?: string | null,
    } > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateScooterMutationVariables = {
  input: CreateScooterInput,
  condition?: ModelScooterConditionInput | null,
};

export type CreateScooterMutation = {
  createScooter?:  {
    __typename: "Scooter",
    id: string,
    isInUse: boolean,
    isOnline: boolean,
    isLocked: boolean,
    batteryPercent: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateScooterMutationVariables = {
  input: UpdateScooterInput,
  condition?: ModelScooterConditionInput | null,
};

export type UpdateScooterMutation = {
  updateScooter?:  {
    __typename: "Scooter",
    id: string,
    isInUse: boolean,
    isOnline: boolean,
    isLocked: boolean,
    batteryPercent: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteScooterMutationVariables = {
  input: DeleteScooterInput,
  condition?: ModelScooterConditionInput | null,
};

export type DeleteScooterMutation = {
  deleteScooter?:  {
    __typename: "Scooter",
    id: string,
    isInUse: boolean,
    isOnline: boolean,
    isLocked: boolean,
    batteryPercent: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type SyncRidesQueryVariables = {
  filter?: ModelRideFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRidesQuery = {
  syncRides?:  {
    __typename: "ModelRideConnection",
    items?:  Array< {
      __typename: "Ride",
      id: string,
      scooterId:  {
        __typename: "Scooter",
        id: string,
        isInUse: boolean,
        isOnline: boolean,
        isLocked: boolean,
        batteryPercent: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      isActive: boolean,
      user:  {
        __typename: "User",
        id: string,
        isRiding: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      rate: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      startedOn: string,
      endedOn: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetRideQueryVariables = {
  id: string,
};

export type GetRideQuery = {
  getRide?:  {
    __typename: "Ride",
    id: string,
    scooterId:  {
      __typename: "Scooter",
      id: string,
      isInUse: boolean,
      isOnline: boolean,
      isLocked: boolean,
      batteryPercent: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    isActive: boolean,
    user:  {
      __typename: "User",
      id: string,
      isRiding: boolean,
      rideHistory?:  Array< {
        __typename: "Ride",
        id: string,
        isActive: boolean,
        rate: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        startedOn: string,
        endedOn: string,
        owner?: string | null,
      } > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    rate: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    startedOn: string,
    endedOn: string,
    owner?: string | null,
  } | null,
};

export type ListRidesQueryVariables = {
  filter?: ModelRideFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRidesQuery = {
  listRides?:  {
    __typename: "ModelRideConnection",
    items?:  Array< {
      __typename: "Ride",
      id: string,
      scooterId:  {
        __typename: "Scooter",
        id: string,
        isInUse: boolean,
        isOnline: boolean,
        isLocked: boolean,
        batteryPercent: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      isActive: boolean,
      user:  {
        __typename: "User",
        id: string,
        isRiding: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      rate: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      startedOn: string,
      endedOn: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      isRiding: boolean,
      rideHistory?:  Array< {
        __typename: "Ride",
        id: string,
        isActive: boolean,
        rate: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        startedOn: string,
        endedOn: string,
        owner?: string | null,
      } > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    isRiding: boolean,
    rideHistory?:  Array< {
      __typename: "Ride",
      id: string,
      scooterId:  {
        __typename: "Scooter",
        id: string,
        isInUse: boolean,
        isOnline: boolean,
        isLocked: boolean,
        batteryPercent: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      isActive: boolean,
      user:  {
        __typename: "User",
        id: string,
        isRiding: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      rate: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      startedOn: string,
      endedOn: string,
      owner?: string | null,
    } > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      isRiding: boolean,
      rideHistory?:  Array< {
        __typename: "Ride",
        id: string,
        isActive: boolean,
        rate: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        startedOn: string,
        endedOn: string,
        owner?: string | null,
      } > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncScootersQueryVariables = {
  filter?: ModelScooterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncScootersQuery = {
  syncScooters?:  {
    __typename: "ModelScooterConnection",
    items?:  Array< {
      __typename: "Scooter",
      id: string,
      isInUse: boolean,
      isOnline: boolean,
      isLocked: boolean,
      batteryPercent: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetScooterQueryVariables = {
  id: string,
};

export type GetScooterQuery = {
  getScooter?:  {
    __typename: "Scooter",
    id: string,
    isInUse: boolean,
    isOnline: boolean,
    isLocked: boolean,
    batteryPercent: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListScootersQueryVariables = {
  filter?: ModelScooterFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListScootersQuery = {
  listScooters?:  {
    __typename: "ModelScooterConnection",
    items?:  Array< {
      __typename: "Scooter",
      id: string,
      isInUse: boolean,
      isOnline: boolean,
      isLocked: boolean,
      batteryPercent: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateRideSubscription = {
  onCreateRide?:  {
    __typename: "Ride",
    id: string,
    scooterId:  {
      __typename: "Scooter",
      id: string,
      isInUse: boolean,
      isOnline: boolean,
      isLocked: boolean,
      batteryPercent: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    isActive: boolean,
    user:  {
      __typename: "User",
      id: string,
      isRiding: boolean,
      rideHistory?:  Array< {
        __typename: "Ride",
        id: string,
        isActive: boolean,
        rate: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        startedOn: string,
        endedOn: string,
        owner?: string | null,
      } > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    rate: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    startedOn: string,
    endedOn: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateRideSubscription = {
  onUpdateRide?:  {
    __typename: "Ride",
    id: string,
    scooterId:  {
      __typename: "Scooter",
      id: string,
      isInUse: boolean,
      isOnline: boolean,
      isLocked: boolean,
      batteryPercent: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    isActive: boolean,
    user:  {
      __typename: "User",
      id: string,
      isRiding: boolean,
      rideHistory?:  Array< {
        __typename: "Ride",
        id: string,
        isActive: boolean,
        rate: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        startedOn: string,
        endedOn: string,
        owner?: string | null,
      } > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    rate: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    startedOn: string,
    endedOn: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteRideSubscription = {
  onDeleteRide?:  {
    __typename: "Ride",
    id: string,
    scooterId:  {
      __typename: "Scooter",
      id: string,
      isInUse: boolean,
      isOnline: boolean,
      isLocked: boolean,
      batteryPercent: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    isActive: boolean,
    user:  {
      __typename: "User",
      id: string,
      isRiding: boolean,
      rideHistory?:  Array< {
        __typename: "Ride",
        id: string,
        isActive: boolean,
        rate: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        startedOn: string,
        endedOn: string,
        owner?: string | null,
      } > | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    rate: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    startedOn: string,
    endedOn: string,
    owner?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner: string,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    isRiding: boolean,
    rideHistory?:  Array< {
      __typename: "Ride",
      id: string,
      scooterId:  {
        __typename: "Scooter",
        id: string,
        isInUse: boolean,
        isOnline: boolean,
        isLocked: boolean,
        batteryPercent: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      isActive: boolean,
      user:  {
        __typename: "User",
        id: string,
        isRiding: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      rate: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      startedOn: string,
      endedOn: string,
      owner?: string | null,
    } > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner: string,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    isRiding: boolean,
    rideHistory?:  Array< {
      __typename: "Ride",
      id: string,
      scooterId:  {
        __typename: "Scooter",
        id: string,
        isInUse: boolean,
        isOnline: boolean,
        isLocked: boolean,
        batteryPercent: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      isActive: boolean,
      user:  {
        __typename: "User",
        id: string,
        isRiding: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      rate: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      startedOn: string,
      endedOn: string,
      owner?: string | null,
    } > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner: string,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    isRiding: boolean,
    rideHistory?:  Array< {
      __typename: "Ride",
      id: string,
      scooterId:  {
        __typename: "Scooter",
        id: string,
        isInUse: boolean,
        isOnline: boolean,
        isLocked: boolean,
        batteryPercent: number,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      isActive: boolean,
      user:  {
        __typename: "User",
        id: string,
        isRiding: boolean,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      rate: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      startedOn: string,
      endedOn: string,
      owner?: string | null,
    } > | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateScooterSubscription = {
  onCreateScooter?:  {
    __typename: "Scooter",
    id: string,
    isInUse: boolean,
    isOnline: boolean,
    isLocked: boolean,
    batteryPercent: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateScooterSubscription = {
  onUpdateScooter?:  {
    __typename: "Scooter",
    id: string,
    isInUse: boolean,
    isOnline: boolean,
    isLocked: boolean,
    batteryPercent: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteScooterSubscription = {
  onDeleteScooter?:  {
    __typename: "Scooter",
    id: string,
    isInUse: boolean,
    isOnline: boolean,
    isLocked: boolean,
    batteryPercent: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
