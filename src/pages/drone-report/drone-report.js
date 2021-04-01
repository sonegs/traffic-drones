import { getDronesReports } from './drone-report.api';
import { getDrone } from '../drone-list/drone-list.api';
import { history } from '../../core/router/history';
import { mapDroneReportFromApiToVM } from './drone-report.mappers';
import { setReportsValues, setDroneValues, setTitleRow } from './drone-report.components';

// Reports Structure Declaration
let reports = {
    id: '',
    drone_id: '',
    title: '',
    speed: '',
    latitude: '',
    longitud: '',
    time: '',
    traffic_conditions: '',
};

// Var Declarations
const params = history.getParams(); // get the data of the drone with history object
const isId = Boolean(params.id); // check if history function give us an id

// Counters to give value to the CSS Class 
let rowCounter = 0;
let rowGridCounter = 2;

if (isId) { // Check errors with isId. If there is an id, continue. If not, go back to the Drone List
    Promise.all([ // Get the promise data
        getDronesReports(params.id), // Get the Drones Reports Data from data.json
    ]).then(([droneReports]) => { // When we get the data, save it in droneReports
        getDrone(params.id).then(droneList => { // Get the Drone List
            droneList.map(myDrone => { // Map the Drone List 
                if (params.id == myDrone.id) { // If the Drone ID if equal to the ID from the history
                    const myDroneReports = getMyDroneReports(droneReports, myDrone.id); // Get the Data of the each Report of this Drone
                    reports = mapDroneReportFromApiToVM(myDroneReports); // Map each Report

                    setDroneValues(myDrone); // Print the Drone Details
                    setTitleRow(); // Print the Title Reports Row

                    return reports.map(report => { // Map the reports
                        setReportsValues(report, rowCounter, rowGridCounter); // Get the Report values
                        rowCounter++; // Add one to the counters
                        rowGridCounter++;
                    });
                }
            });
        });
    });
} else {
    history.back(); // If not exists ID, go back to the Drone List
}

// Get the reports of the Drone selected
const getMyDroneReports = (droneReports, droneIds) => {
    let myReports = Array(); // Array Declaration. He will contain the Drone Reports
    droneReports.map(droneReport => { // Map the Drones Reports
        if (droneReport.drone_id == droneIds) myReports.push(droneReport); // If the drone_id Report is equal to the Drone ID, add this report to my array called 'myReports'
    });
    return myReports; // Return the array
};