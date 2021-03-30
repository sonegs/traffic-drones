module.exports = function() {
    const { reports } = require('./data.json');
    const { drones } = require('./drones.json');
    return {
        reports,
        drones,
    };
};