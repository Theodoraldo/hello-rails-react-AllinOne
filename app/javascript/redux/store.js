import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greetings/greetingSlice';

const store = configureStore({
  reducer: {
    greetings: greetingSlice,
  },
});

export default store;