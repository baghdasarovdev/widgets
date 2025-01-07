import { type FC, type ReactNode } from 'react';

type MessageItemPropsT = { children: ReactNode };

export const MessageItem: FC<MessageItemPropsT> = ({ children }) => {
  return <div className="mt-4 rounded-2xl bg-gray-f7 p-4">{children}</div>;
};
