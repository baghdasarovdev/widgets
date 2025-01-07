import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IListingEditorState {
  name: string;
  tab: number;
  loading: boolean;
  error: string | null;
  data: any[];
}

const initialState: IListingEditorState = {
  name: 'Photo tour',
  tab: 1,
  loading: false,
  error: null,
  data: [],
};

const listingEditorSlice = createSlice({
  name: 'listingEditor',
  initialState,
  reducers: {
    listingEditorData: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    listingEditorTab: (state, action: PayloadAction<number>) => {
      state.tab = action.payload;
    },
  },
});

export const { listingEditorData, listingEditorTab } =
  listingEditorSlice.actions;
export default listingEditorSlice.reducer;
