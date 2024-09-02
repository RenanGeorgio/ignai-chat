/*import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { errorsReducer as errors } from './errors';
import { sessionReducer as session } from './session';
import { devicesReducer as devices } from './devices';
import { eventsReducer as events } from './events';
import { positionsReducer as positions } from './positions';
import { geofencesReducer as geofences } from './geofences';
import { groupsReducer as groups } from './groups';
import { driversReducer as drivers } from './drivers';
import { maintenancesReducer as maintenances } from './maintenances';
import { clientReducer as client } from './client';
import throttleMiddleware from './throttleMiddleware';

const reducer = combineReducers({
  errors,
  session,
  devices,
  events,
  positions,
  geofences,
  groups,
  drivers,
  maintenances,
  client
});

export { errorsActions } from './errors';
export { sessionActions } from './session';
export { devicesActions } from './devices';
export { eventsActions } from './events';
export { positionsActions } from './positions';
export { geofencesActions } from './geofences';
export { groupsActions } from './groups';
export { driversActions } from './drivers';
export { maintenancesActions } from './maintenances';
export { clientActions } from './client';

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(throttleMiddleware),
});*/