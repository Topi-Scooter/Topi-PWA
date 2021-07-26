import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RideMetaData = {
  readOnlyFields: 'startedOn' | 'endedOn';
}

type ScooterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Ride {
  readonly id: string;
  readonly isActive: boolean;
  readonly rate: number;
  readonly startedOn?: string;
  readonly endedOn?: string;
  constructor(init: ModelInit<Ride, RideMetaData>);
  static copyOf(source: Ride, mutator: (draft: MutableModel<Ride, RideMetaData>) => MutableModel<Ride, RideMetaData> | void): Ride;
}

export declare class Scooter {
  readonly id: string;
  readonly isInUse: boolean;
  readonly isOnline: boolean;
  readonly isLocked: boolean;
  readonly batteryPercent: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Scooter, ScooterMetaData>);
  static copyOf(source: Scooter, mutator: (draft: MutableModel<Scooter, ScooterMetaData>) => MutableModel<Scooter, ScooterMetaData> | void): Scooter;
}

export declare class User {
  readonly id: string;
  readonly isRiding: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}