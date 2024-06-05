import { createSlice } from "@reduxjs/toolkit";

import { getDataCamperThunk, updateFavoriteThunk } from "./camperThunk";

const initialState = {
  error: null,
  isLoading: false,
  data: [],
  openModal: false,
  modalContent: {
    action: null,
    recordData: null,
    id: null,
  },
};

const camperSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setModalStatus: (state, action) => {
      state.openModal = action.payload;
    },
    setModalContent: (state, action) => {
      state.modalContent = { ...state.modalContent, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataCamperThunk.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getDataCamperThunk.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getDataCamperThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateFavoriteThunk.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(updateFavoriteThunk.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        const updatedItem = action.payload;
        const index = state.data.findIndex(
          (item) => item._id === updatedItem._id
        );
        if (index !== -1) {
          state.data[index] = updatedItem;
        }
      })
      .addCase(updateFavoriteThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setModalStatus, setModalContent } = camperSlice.actions;

export const camperReducer = camperSlice.reducer;
