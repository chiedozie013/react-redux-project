import { createSlice } from '@reduxjs/toolkit';
import fetchRockets from '../API/apiRockets';

const initialState = {
  rockets: [],
  status: false,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, { payload }) => {
      const rockets = state.rockets.map((rocket) => {
        if (rocket.id === payload) { return { ...rocket, reserved: !rocket.reserved }; }
        return rocket;
      });
      return { ...state, rockets };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => ({ ...state, status: true }))
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state,
        rockets: action.payload,
      }));
  },
});

export const { reserveRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
