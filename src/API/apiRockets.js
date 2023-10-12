import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BaseURL = "https://api.spacexdata.com/v4/rockets";

const fetchRockets = createAsyncThunk("rockets/fetchRockets", async () => {
  const response = await axios.get(BaseURL);
  const rockets = response.data;
  return rockets.map((rocket) => ({
    id: rocket.id,
    name: rocket.name,
    description: rocket.description,
    image: rocket.flickr_images[0],
  }));
});
export default fetchRockets;
