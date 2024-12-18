import { type FC } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.css";
export type DatePickerT = {
    months: number;
};
export declare const Calendar: FC<DatePickerT>;
