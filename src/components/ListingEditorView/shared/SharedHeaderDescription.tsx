import React, { type FC, type ReactNode } from 'react';

export const SharedHeaderDescription: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div className="shared-description w-full [&_p]:mb-6 [&_p]:text-gray-600 2sm:[&_p]:mb-12">
      {children}
    </div>
  );
};
