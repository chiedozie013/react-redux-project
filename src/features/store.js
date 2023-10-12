import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rocketSlice';
import missionsReducer from './MissionsSlice';

const Store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default Store;
