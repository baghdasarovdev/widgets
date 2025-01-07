import { configureStore } from '@reduxjs/toolkit';

import listingEditorReducer from '@/redux/slices/listingEditor/slice';
import messageReducer from '@/redux/slices/messages/slice';
import showDetails from '@/redux/slices/secondaryPanel/slice';
import userReducer from '@/redux/slices/user/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    listingEditor: listingEditorReducer,
    messages: messageReducer,
    showDetails,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppSelector<Return> = (state: RootState) => Return;
