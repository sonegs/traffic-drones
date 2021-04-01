# traffic-drones

Scenario:

Traffic Drones
There are several automatic drones that fly around London and report on traffic conditions. When a drone flies over a tube station, it assesses what the traffic condition is like in the area, and reports on it. A monitoring tool keeps track of the drones, processing all the emitted data to finally create two reports at the end of the day.

Task:

Write a web application where you can view the data from both reports. One of them will contain the list of the drones that flew during the day. The second one will provide the whole set of data reported from all the drones.
The application requires to display the data in two different pages:
- Drone list: listing the drones as a card grid where each card contains the basic information
per drone (name, battery level, age, image)
- Drone reports: displaying the reports data for a given drone (time, speed, latitude, longitud,
traffic conditions)
The default home page will be the drone list from where you can navigate and check the
generated reports based on the drone you want to inspect.

To run it:

1. Clone the repository to a local dir.
2. Open the commands console (CMD in Windows, Terminal in OSX) and go to the project directory cloned.
3. Run 'npm install'.
4. When the npm install will be done, run 'npm start'.
5. If you want to run the tests, you have yo run the script 'npm run cy'.
