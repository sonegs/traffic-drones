import { getDroneList } from './drone-list.api';
import { mapDroneListFromApiToViewModel } from './drone-list.mappers';
import { addDroneCards } from './drone-list.helpers';

Promise.all([ // Get the promise data - the Drones List
    getDroneList(),
]).then((dronesList) => {
    loadDroneList(dronesList); // Print the Drones List
});

const loadDroneList = dronesList => {
    const viewModelPropertyList = mapDroneListFromApiToViewModel(dronesList); // Format the array received
    return viewModelPropertyList.map(drone => addDroneCards(drone)); // Print the array received
};