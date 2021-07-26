import { API, graphqlOperation } from 'aws-amplify';
import * as apiTypes from "../API"
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';


// queries
export async function getScooter(id: string) {
    const scooter = await API.graphql({ query: queries.getScooter, variables: {id: id}});
    return scooter;
}

export async function getAllScooter() {
    const scooters = await API.graphql({ query: queries.listScooters});
    return scooters;
}


// mutations
export async function createScooter(id: string) {
    const scooterDetails:apiTypes.CreateScooterInput = {
        id: id,
        isInUse: false,
        isLocked: false,
        isOnline: true,
        batteryPercent: 100, //get from partical api
    };
    const newScooter = await API.graphql(graphqlOperation(mutations.createScooter, { input: scooterDetails}));
    return newScooter;
}

async function startRide() {

}

async function endRide() {

}

async function lock() {

}

async function unlock() {

}

async function toggleLight() {

}


// subscriptions


