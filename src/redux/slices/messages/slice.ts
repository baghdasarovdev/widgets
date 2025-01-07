import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IMessagesState {
  showDetails: boolean;
  loading: boolean;
  error: string | null;
  data: {
    showMessageView: boolean;
  };
}

const initialState: IMessagesState = {
  showDetails: false,
  loading: false,
  error: null,
  data: {
    showMessageView: true,
  },
};

const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    isShowMessageDetails: (state, action: PayloadAction<boolean>) => {
      state.showDetails = action.payload;
    },
    showMessageViewMobile: (state, action: PayloadAction<boolean>) => {
      state.data.showMessageView = action.payload;
    },
  },
});

export const { isShowMessageDetails, showMessageViewMobile } =
  messageSlice.actions;
export default messageSlice.reducer;
