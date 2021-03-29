export const mapDroneReportFromApiToVM = (droneReport) => {
    return mapDroneFromApiToViewModel(droneReport);
};

// Map the Reports Array
const mapDroneFromApiToViewModel = (reportsArray) => {
    return reportsArray.map(report => mapReportsOneToOne(report));

};

// Map the properties of the Report
const mapReportsOneToOne = (report) => {
    return {
        id: report.id,
        drone_id: report.drone_id,
        speed: report.speed,
        time: getTime(report.time), // Give format to the time value
        latitude: report.latitude,
        longitude: report.longitud,
        traffic_conditions: report.traffic_conditions,
    };
};

// Format the time value
const getTime = reportTime => {
    const time = new Date((reportTime));
    let hours = time.getHours();
    let minutes = time.getMinutes();
    const amOrPm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = `${hours}:${minutes} ${amOrPm}`;
    return strTime;
};