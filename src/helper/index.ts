import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const handleCheckMobileView = (): boolean => window.innerWidth < 950;

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));
