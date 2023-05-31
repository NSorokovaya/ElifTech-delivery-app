import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const cafeList = createAsyncThunk(
  'menu/cafe-list',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`menu/cafe-list`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const menuByCategory = createAsyncThunk(
  'menu/getMenuByCategory',
  async ({ category }, thunkAPI) => {
    try {
      const res = await axios.get(`menu/${category}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addToStore = createAsyncThunk(
  'menu/add-dish',
  async (menuId, thunkAPI) => {
    try {
      const res = await axios.post(`menu/add-dish/${menuId}`, menuId);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFromStore = createAsyncThunk(
  'menu/remove-dish',
  async (menuId, thunkAPI) => {
    try {
      const res = await axios.delete(`menu/remove-dish/${menuId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getStoreList = createAsyncThunk(
  'menu/get-store',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`menu/get-store`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createOrder = createAsyncThunk(
  'menu/create-order',
  async (order, thunkAPI) => {
    try {
      const res = await axios.post(`menu/create-order`, order);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
