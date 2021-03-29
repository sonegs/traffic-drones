const firstRoute = require('./data.json');
const secondRoute = require('./drones.json');

module.exports = () => {
    return {
        firstRoute: firstRoute,
        secondRoute: secondRoute,
    };
};