export const mapDroneListFromApiToViewModel = droneList => {
    return droneList.map(droneObject => mapDroneFromApiToViewModel(droneObject));
};

// Map the properties of the Drone
const mapDroneFromApiToViewModel = drone => {
    return {
        id: drone.id,
        name: drone.name,
        batery: `${drone.batery} mA`,
        age: `${drone.age} ${getAgeWord(drone.age)}`, // Format the age value
        image: drone.image
    };
};
const getAgeWord = age => age > 1 ? 'Years' : 'Year';