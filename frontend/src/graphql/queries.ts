/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncRides = /* GraphQL */ `
  query SyncRides(
    $filter: ModelRideFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRides(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        scooterId {
          id
          isInUse
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
      nextToken
      startedAt
    }
  }
`;
export const getRide = /* GraphQL */ `
  query GetRide($id: ID!) {
    getRide(id: $id) {
      id
      scooterId {
        id
        isInUse
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
export const listRides = /* GraphQL */ `
  query ListRides(
    $filter: ModelRideFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRides(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        scooterId {
          id
          isInUse
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      isRiding
      rideHistory {
        id
        scooterId {
          id
          isInUse
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncScooters = /* GraphQL */ `
  query SyncScooters(
    $filter: ModelScooterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncScooters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        isInUse
        isLocked
        batteryPercent
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getScooter = /* GraphQL */ `
  query GetScooter($id: ID!) {
    getScooter(id: $id) {
      id
      isInUse
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
export const listScooters = /* GraphQL */ `
  query ListScooters(
    $filter: ModelScooterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScooters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        isInUse
        isLocked
        batteryPercent
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
