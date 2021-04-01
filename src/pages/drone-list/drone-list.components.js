import { routes } from '../../core/router';
import { footer } from '../../common/components/footer';

// Print the Time
const getImage = drone => {
    const image = document.createElement('img');
    image.src = drone.image;
    return image;
};

// Print the Name 
const getName = drone => {
    const name = document.createElement('div');
    name.classList.add('details-container');
    name.classList.add('name');
    name.textContent = drone.name;
    return name;
};

// Print the Battery
const getBattery = drone => {
    const battery = document.createElement('div');
    battery.classList.add('details-container');
    battery.textContent = drone.batery;
    return battery;
};

// Print the Age
const getAge = drone => {
    const age = document.createElement('div');
    age.classList.add('details-container');
    age.textContent = drone.age;
    return age;
};

const navBotton = drone => {

    // Boton
    const navBotton = document.createElement('div');
    navBotton.classList.add('btn');
    navBotton.classList.add('submit-button');
    navBotton.textContent = 'See Reports';


    return navBotton;
};

// Print the Drone Card
const getDroneCard = drone => {
    // Var Declarations
    const name = getName(drone);
    const battery = getBattery(drone);
    const age = getAge(drone);
    const image = getImage(drone);

    const cardContainer = document.createElement('div');
    const photo = document.createElement('div');
    const description = document.createElement('div');
    const types = document.createElement('div');
    const details = document.createElement('div');
    const typeName = document.createElement('div');
    const typeBattery = document.createElement('div');
    const typeAge = document.createElement('div');
    const link = document.createElement('a');

    // Class Declarations
    cardContainer.classList.add('card-container');
    photo.classList.add('photo');
    description.classList.add('description-container');
    types.classList.add('types-container');
    details.classList.add('types-details');
    typeName.classList.add('details-container');
    typeBattery.classList.add('details-container');
    typeAge.classList.add('details-container');

    // Values Declarations

    typeName.textContent = 'Name: ';
    typeBattery.textContent = 'Battery: ';
    typeAge.textContent = 'Age: ';
    link.href = routes.droneReports(drone.id);

    // Print Children

    description.appendChild(types);
    description.appendChild(details);
    types.appendChild(typeName);
    types.appendChild(typeBattery);
    types.appendChild(typeAge);
    details.appendChild(name);
    details.appendChild(battery);
    details.appendChild(age);
    cardContainer.appendChild(photo);
    photo.appendChild(image);
    cardContainer.appendChild(description);
    cardContainer.appendChild(link);
    link.appendChild(navBotton(drone));

    return cardContainer;
};

// Export each Drone Card
export const addDroneCards = droneList => {
    // Take each drone of the list and get the data in a card 
    droneList.forEach(drone => {
        const card = getDroneCard(drone);
        const listElement = document.getElementById('drone-list');
        listElement.appendChild(card);
    });

    // print the footer
    const body = document.body;
    body.appendChild(footer());
};