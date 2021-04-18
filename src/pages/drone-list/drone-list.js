import { getDroneList } from './drone-list.api';
import { mapDroneListFromApiToViewModel } from './drone-list.mappers';
import { addDroneCards } from './drone-list.components';
import { footer } from '../../common/components/footer';

getDroneList().then((dronesList) => {
    loadDroneList(dronesList); // Print the Drones List
    footer();
});

const loadDroneList = dronesList => {
    const viewModelPropertyList = mapDroneListFromApiToViewModel(dronesList); // Format the array received
    return viewModelPropertyList.map(drone => addDroneCards(drone)); // Print the array received
};