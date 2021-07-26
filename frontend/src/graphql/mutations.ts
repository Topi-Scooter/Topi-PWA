/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRide = /* GraphQL */ `
  mutation CreateRide(
    $input: CreateRideInput!
    $condition: ModelRideConditionInput
  ) {
    createRide(input: $input, condition: $condition) {
      id
      scooterId {
        id
        isInUse
        isOnline
        isLocked
        batteryPercent
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      isActive
      user {
        id
        isRiding
        rideHistory {
          id
          isActive
          rate
          _version
          _deleted
          _lastChangedAt
          startedOn
          endedOn
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      rate
      _version
      _deleted
      _lastChangedAt
      startedOn
      endedOn
      owner
    }
  }
`;
export const updateRide = /* GraphQL */ `
  mutation UpdateRide(
    $input: UpdateRideInput!
    $condition: ModelRideConditionInput
  ) {
    updateRide(input: $input, condition: $condition) {
      id
      scooterId {
        id
        isInUse
        isOnline
        isLocked
        batteryPercent
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      isActive
      user {
        id
        isRiding
        rideHistory {
          id
          isActive
          rate
          _version
          _deleted
          _lastChangedAt
          startedOn
          endedOn
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      rate
      _version
      _deleted
      _lastChangedAt
      startedOn
      endedOn
      owner
    }
  }
`;
export const deleteRide = /* GraphQL */ `
  mutation DeleteRide(
    $input: DeleteRideInput!
    $condition: ModelRideConditionInput
  ) {
    deleteRide(input: $input, condition: $condition) {
      id
      scooterId {
        id
        isInUse
        isOnline
        isLocked
        batteryPercent
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      isActive
      user {
        id
        isRiding
        rideHistory {
          id
          isActive
          rate
          _version
          _deleted
          _lastChangedAt
          startedOn
          endedOn
          owner
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      rate
      _version
      _deleted
      _lastChangedAt
      startedOn
      endedOn
      owner
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      isRiding
      rideHistory {
        id
        scooterId {
          id
          isInUse
          isOnline
          isLocked
          batteryPercent
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        isActive
        user {
          id
          isRiding
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        rate
        _version
        _deleted
        _lastChangedAt
        startedOn
        endedOn
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      isRiding
      rideHistory {
        id
        scooterId {
          id
          isInUse
          isOnline
          isLocked
          batteryPercent
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        isActive
        user {
          id
          isRiding
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        rate
        _version
        _deleted
        _lastChangedAt
        startedOn
        endedOn
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      isRiding
      rideHistory {
        id
        scooterId {
          id
          isInUse
          isOnline
          isLocked
          batteryPercent
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        isActive
        user {
          id
          isRiding
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        rate
        _version
        _deleted
        _lastChangedAt
        startedOn
        endedOn
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createScooter = /* GraphQL */ `
  mutation CreateScooter(
    $input: CreateScooterInput!
    $condition: ModelScooterConditionInput
  ) {
    createScooter(input: $input, condition: $condition) {
      id
      isInUse
      isOnline
      isLocked
      batteryPercent
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateScooter = /* GraphQL */ `
  mutation UpdateScooter(
    $input: UpdateScooterInput!
    $condition: ModelScooterConditionInput
  ) {
    updateScooter(input: $input, condition: $condition) {
      id
      isInUse
      isOnline
      isLocked
      batteryPercent
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteScooter = /* GraphQL */ `
  mutation DeleteScooter(
    $input: DeleteScooterInput!
    $condition: ModelScooterConditionInput
  ) {
    deleteScooter(input: $input, condition: $condition) {
      id
      isInUse
      isOnline
      isLocked
      batteryPercent
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
