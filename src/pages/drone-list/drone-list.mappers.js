export const mapDroneListFromApiToViewModel = (droneList) => {
    return droneList.map(droneObject => mapDroneFromApiToViewModel(droneObject));
};

// Map the Drones List Array
const mapDroneFromApiToViewModel = (droneObject) => {
    return droneObject.map(drone => mapDroneOneToOne(drone));
};

// Map the properties of the Drone
const mapDroneOneToOne = (drone) => {
    return {
        id: drone.id,
        name: drone.name,
        batery: `${drone.batery} mA`,
        age: `${drone.age} ${getAgeWord(drone.age)}`, // Format the age value
        image: drone.image
    };
};
const getAgeWord = age => age > 1 ? 'Years' : 'Year';