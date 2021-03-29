import { config } from 'dotenv';
config(); // NPM Config

import { history, routes } from './core/router'; // Import the history and routes functions
history.push(routes.droneList);