import { createSelector } from '@reduxjs/toolkit';

import { type RootState } from '@/redux/store';

export const listingEditorState = (state: RootState) => state.listingEditor;

export const listingEditorSelectors = createSelector(
  listingEditorState,
  (state) => state,
);
