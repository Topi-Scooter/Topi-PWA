/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRide = /* GraphQL */ `
  subscription OnCreateRide {
    onCreateRide {
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
        username
        email
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
export const onUpdateRide = /* GraphQL */ `
  subscription OnUpdateRide {
    onUpdateRide {
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
        username
        email
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
export const onDeleteRide = /* GraphQL */ `
  subscription OnDeleteRide {
    onDeleteRide {
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
        username
        email
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
      id
      username
      email
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
          username
          email
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
      id
      username
      email
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
          username
          email
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
      id
      username
      email
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
          username
          email
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
export const onCreateScooter = /* GraphQL */ `
  subscription OnCreateScooter {
    onCreateScooter {
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
export const onUpdateScooter = /* GraphQL */ `
  subscription OnUpdateScooter {
    onUpdateScooter {
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
export const onDeleteScooter = /* GraphQL */ `
  subscription OnDeleteScooter {
    onDeleteScooter {
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
