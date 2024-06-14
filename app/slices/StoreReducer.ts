import { configureStore } from '@reduxjs/toolkit';
import membersReducer from './Members';
import pagesReducer from './SubPages';

export default configureStore({
  reducer: {
    members: membersReducer,
    subPages: pagesReducer,
  },
});