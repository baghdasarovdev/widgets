import { createSelector } from '@reduxjs/toolkit';

import { type RootState } from '@/redux/store';

export const showDetailsState = (state: RootState) => state.showDetails;

export const showDetailsStateSelectors = createSelector(
  showDetailsState,
  (state) => state,
);
