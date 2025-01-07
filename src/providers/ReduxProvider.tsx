'use client';

import React, { type FC, type ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';

export const ReduxProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
