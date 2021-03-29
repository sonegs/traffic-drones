import qs from 'qs';

export const history = {
    push: route => { // Go to the route
        window.location.assign(route);
    },
    back: () => { // Go back to the URL before
        window.history.back();
    },
    getParams: () => { // Get the data
        return qs.parse(window.location.search, { ignoreQueryPrefix: true });
    },
};