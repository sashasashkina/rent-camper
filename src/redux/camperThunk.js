import { createAsyncThunk } from "@reduxjs/toolkit";
import { favoriteData, getData } from "../api/api";

export const getDataCamperThunk = createAsyncThunk(
  "service/dataCamper",
  async (_, thunkAPI) => {
    try {
      const response = await getData();

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateFavoriteThunk = createAsyncThunk(
  "service/updateFavorite",
  async ({ params }, thunkAPI) => {
    try {
      const response = await favoriteData({ params });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
