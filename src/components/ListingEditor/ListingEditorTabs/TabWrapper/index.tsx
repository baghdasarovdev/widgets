import {
  type Dispatch,
  type FC,
  type ReactNode,
  type SetStateAction,
} from 'react';
import { Box } from '@resido-fhm/ui-kit';
import Link from 'next/link';

import { cn } from '@/helper';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { listingEditorSelectors } from '@/redux/slices/listingEditor/selectors';
import { listingEditorData } from '@/redux/slices/listingEditor/slice';

type TabWrapperPropsT = {
  children: ReactNode;
  setModal?: Dispatch<SetStateAction<boolean>>;
  title?: string;
  href?: string;
  className?: string;
};

export const TabWrapper: FC<TabWrapperPropsT> = ({
  title,
  children,
  href,
  className,
  setModal,
}) => {
  const { name } = useAppSelector(listingEditorSelectors);

  const dispatch = useAppDispatch();

  const handleClickBoxes = (): void => {
    console.log(window.innerWidth);

    if (window.innerWidth < 950) {
      setModal?.(true);
    }
    dispatch(listingEditorData(title!));
  };

  return href ? (
    <Link href={href}>
      <Box
        className="shadow-tabCard"
        hoverable
        radius="base"
        size="base"
        hoverStyles={{ backgroundColor: '#f7f7f7' }}
      >
        {children}
      </Box>
    </Link>
  ) : (
    <Box
      onClick={handleClickBoxes}
      radius="base"
      hoverable
      selectable
      className={cn('group shadow-tabCard', className)}
      isSelected={name === title}
      size="base"
      hoverStyles={{
        backgroundColor: '#f7f7f7',
      }}
      selectedStyles={{ outline: '3px solid #0c66e4' }}
    >
      {children}
    </Box>
  );
};
