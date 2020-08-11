import React from "react";
import { format, startOfWeek, addDays } from "date-fns";
import DayHeaderItem from "../DayHeaderItem/DayHeaderItem";

const DayHeader = ({ currentDate, day }) => {
  const dateFormat = "eee";
  const days = [];
  let startDate = startOfWeek(currentDate);
  for (let i = 0; i < 7; i++) {
    const day = format(addDays(startDate, i), dateFormat);
    days.push(<DayHeaderItem key={i} day={day} />);
  }
  return <div className="days row">{days}</div>;
};

export default DayHeader;
