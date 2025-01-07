import { createSelector } from '@reduxjs/toolkit';

import { type RootState } from '@/redux/store';

export const messagesState = (state: RootState) => state.messages;

export const messagesSelectors = createSelector(
  messagesState,
  (state) => state,
);
