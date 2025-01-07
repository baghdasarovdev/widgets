import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IShowDetails {
  show: boolean;
  showMobilePanel: boolean;
  content: {
    title: string;
    description: string;
    type?: string;
  };
  loading: boolean;
  error: string | null;
  data: any[];
}

const initialState: IShowDetails = {
  show: false,
  showMobilePanel: false,
  content: {
    title: '',
    description: '',
    type: '',
  },
  loading: false,
  error: null,
  data: [],
};

const showDetailsSlice = createSlice({
  name: 'showDetails',
  initialState,
  reducers: {
    changeShowDetails: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
    changePanelContent: (
      state,
      action: PayloadAction<{
        content: { title: string; description: string; type?: string };
      }>,
    ) => {
      const { title, description, type } = action.payload.content;
      state.content.title = title;
      state.content.description = description;
      state.content.type = type;
    },
    setOpenSecondaryPanelMobile: (state, action: PayloadAction<boolean>) => {
      state.showMobilePanel = action.payload;
    },
  },
});

export const {
  changeShowDetails,
  changePanelContent,
  setOpenSecondaryPanelMobile,
} = showDetailsSlice.actions;
export default showDetailsSlice.reducer;
