import { createSlice } from '@reduxjs/toolkit';
import {
  cafeList,
  menuByCategory,
  addToStore,
  deleteFromStore,
  getStoreList,
  createOrder,
} from './operation';

const initialState = {
  cafeList: [],
  menuByCategory: [],
  shoppingList: [],
  order: [],
  isLoading: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      //CAFE LIST

      .addCase(cafeList.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(cafeList.fulfilled, (state, { payload }) => {
        if (payload) {
          state.cafeList = payload.categories;
        }
        state.isLoading = false;
      })
      .addCase(cafeList.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      //   menuByCategory
      .addCase(menuByCategory.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(menuByCategory.fulfilled, (state, { payload }) => {
        state.menuByCategory = payload.data;
        state.isLoading = false;
      })
      .addCase(menuByCategory.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      //   addToStore
      .addCase(addToStore.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(addToStore.fulfilled, (state, { payload }) => {
        state.shoppingList = payload.data;

        state.isLoading = false;
      })
      .addCase(addToStore.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      //   deleteFromStore
      .addCase(deleteFromStore.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(deleteFromStore.fulfilled, (state, { payload }) => {
        state.shoppingList = payload.data;
        state.isLoading = false;
      })
      .addCase(deleteFromStore.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      //getstorelist
      .addCase(getStoreList.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(getStoreList.fulfilled, (state, { payload }) => {
        state.shoppingList = payload.data.shoppingList;

        state.isLoading = false;
      })
      .addCase(getStoreList.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      //create
      .addCase(createOrder.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(createOrder.rejected, (state, { payload }) => {
        state.isLoading = false;
      }),
});
export const menuReducer = menuSlice.reducer;
