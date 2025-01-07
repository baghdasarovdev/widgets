import { type FC, type ReactNode } from 'react';

type ConversationActionPropsT = { children: ReactNode; icon: ReactNode };

export const ConversationAction: FC<ConversationActionPropsT> = ({
  children,
  icon,
}) => {
  return (
    <div className="!my-4 flex cursor-pointer !p-4 hover:bg-gray-f7">
      {icon}
      {children}
    </div>
  );
};
