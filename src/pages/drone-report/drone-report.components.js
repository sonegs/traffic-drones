// Principal Var Declaration
const gridTable = document.getElementById('drone-report');

// Print the Time
const getTime = report => {
    const time = document.createElement('div');
    time.classList.add('data-container');
    time.textContent = report.time;
    return time;
};

// Print the Speed
const getSpeed = report => {
    const speed = document.createElement('div');
    speed.classList.add('data-container');
    speed.textContent = report.speed;
    return speed;
};

// Print the Longitude
const getLongitude = report => {
    const longitude = document.createElement('div');
    longitude.classList.add('data-container');
    longitude.textContent = report.longitude;
    return longitude;
};

// Print the Latitude
const getLatitude = report => {
    const latitude = document.createElement('div');
    latitude.classList.add('data-container');
    latitude.textContent = report.latitude;
    return latitude;
};

// Print the Traffic Conditions
const getTrafficConditions = report => {
    const trafficConditionsContainer = document.createElement('div');
    const trafficConditions = document.createElement('div');

    trafficConditionsContainer.classList.add('data-container');
    trafficConditionsContainer.classList.add('traffic-conditions-container');
    trafficConditions.textContent = report.traffic_conditions;

    // Check the value of the Traffic Condition to give his class
    if (trafficConditions.textContent == 'LIGHT') {
        trafficConditions.textContent = 'Light';
        trafficConditions.classList.add('traffic-light');
    } else if (trafficConditions.textContent == 'MODERATE') {
        // Change the MODERATE value to 'Medium'
        trafficConditions.textContent = 'Medium';
        trafficConditions.classList.add('traffic-moderate');
    } else {
        trafficConditions.textContent = 'Heavy';
        trafficConditions.classList.add('traffic-heavy');
    }
    trafficConditionsContainer.appendChild(trafficConditions);
    return trafficConditionsContainer;
};

// Export the values

export const setDroneValues = myDrone => {
    const name = document.getElementById('name');
    name.textContent = myDrone.name;
    const photo = document.getElementById('photo');
    photo.src = myDrone.image;
};

// Export the title row
export const setTitleRow = () => {
    // Var declarations
    const titleTime = document.createElement('div');
    const titleTrafficConditions = document.createElement('div');
    const titleLongitude = document.createElement('div');
    const titleLatitude = document.createElement('div');
    const titleSpeed = document.createElement('div');
    const row = document.createElement('div');

    // Class declarations
    row.classList.add('title-rows');
    titleTime.classList.add('title-type');
    titleTrafficConditions.classList.add('title-type');
    titleLongitude.classList.add('title-type');
    titleLatitude.classList.add('title-type');
    titleSpeed.classList.add('title-type');

    // Values declarations
    titleTime.textContent = 'Time';
    titleTrafficConditions.textContent = 'Traffic';
    titleLongitude.textContent = 'Longitude';
    titleLatitude.textContent = 'Latitude';
    titleSpeed.textContent = 'Speed';

    // Print Children
    gridTable.appendChild(row);
    row.appendChild(titleTime);
    row.appendChild(titleSpeed);
    row.appendChild(titleLongitude);
    row.appendChild(titleLatitude);
    row.appendChild(titleTrafficConditions);

};

export const setReportsValues = (report, rowCounter, rowGridCounter) => {

    // Var declarations
    const time = getTime(report);
    const speed = getSpeed(report);
    const latitude = getLatitude(report);
    const longitude = getLongitude(report);
    const trafficConditions = getTrafficConditions(report);
    const row = document.createElement('div');

    // Class declarations
    row.classList.add(`report${rowCounter}`);
    row.classList.add('rows');

    // Specifics Styles
    row.style.gridRowStart = `${rowGridCounter}`;
    row.style.gridRowEnd = `${rowGridCounter}`;

    // Print Childs
    gridTable.appendChild(row);
    row.appendChild(time);
    row.appendChild(speed);
    row.appendChild(latitude);
    row.appendChild(longitude);
    row.appendChild(trafficConditions);

};