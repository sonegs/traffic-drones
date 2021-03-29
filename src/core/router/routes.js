const baseRoutes = {
    droneList: '/pages/drone-list/drone-list.html',
    droneReport: '/pages/drone-report/drone-report.html'
};


export const routes = {
    ...baseRoutes,
    droneReports: id => (id ? `${baseRoutes.droneReport}?id=${id}` : baseRoutes.droneReport),
};