import { createSlice } from '@reduxjs/toolkit';
import fetchMissions from '../API/apiMissions';

const initialState = {
  missions: [],
  loading: false,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinMission: (state, { payload }) => {
      const updatedMissions = state.missions.map((mission) => {
        if (mission.mission_id === payload) {
          return { ...mission, reserved: !mission.reserved };
        }
        return mission;
      });

      return { ...state, missions: updatedMissions };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({ ...state, loading: true }))
      .addCase(fetchMissions.fulfilled, (state, { payload }) => ({
        ...state,
        missions: payload,
      }));
  },
});

export const { joinMission } = missionSlice.actions;

export default missionSlice.reducer;
