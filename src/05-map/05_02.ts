import {GovernmentBuildingType, HouseType} from "../02-objects/02_02";

export const getStreetsTitlesOfGovernmentsBuildings =
    (buildings: Array<GovernmentBuildingType>) => {
        return buildings.map(b => b.address.street.title)
    }

export const getStreetsTitlesOfHouses =
    (houses: Array<HouseType>) => {
        return houses.map(b => b.address.street.title)
    }

export function createMessages(houses: Array<HouseType>) {
    let callbackfn = (h: HouseType) => {
        return `Hello guys from ${h.address.street.title}`
    }

    return houses.map(callbackfn)
}