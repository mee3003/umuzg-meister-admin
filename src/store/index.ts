import { appReducer } from './appReducer';
import { categoriesReducer } from './categoriesReducer';
import { furnitureReducer } from './furnitureReducer';
import { searchReducer } from './searchReducer';
import { servicesReducer } from './servicesReducer';

import { configureStore } from '@reduxjs/toolkit';
import { createStateSyncMiddleware, initMessageListener } from 'redux-state-sync';

const store = configureStore({
  reducer: {
    services: servicesReducer,
    categories: categoriesReducer,
    furniture: furnitureReducer,
    app: appReducer,
    search: searchReducer,
  },
  //@ts-ignore
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(createStateSyncMiddleware());
  },
});

initMessageListener(store);

export { store };

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;
