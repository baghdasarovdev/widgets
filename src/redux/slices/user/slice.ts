import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  value: number;
  loading: boolean;
  error: string | null;
  data: any[];
}

const initialState: IUserState = {
  value: 0,
  loading: false,
  error: null,
  data: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initializeUser: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { initializeUser } = userSlice.actions;
export default userSlice.reducer;
