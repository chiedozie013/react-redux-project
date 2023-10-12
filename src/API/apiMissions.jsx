import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = createAsyncThunk(
  'mission/fetchMissions',
  async (thunkAPI) => {
    try {
      const res = await axios(baseUrl);
      const data = await res.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export default fetchMissions;
