import React from "react";
import DayCell from "../DayCell/DayCell";
import {
  isSameDay,
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
} from "date-fns";

const generateRows = ({
  currentDate,
  selectedDate,
  onDateClick,
  dateClicked,
}) => {
  const monthStart = startOfMonth(currentDate); //returns start of month for current date
  const monthEnd = endOfMonth(monthStart); //returns last day of month for the start of month date
  const startDate = startOfWeek(monthStart); //returns starting date of week for start of month
  const endDate = endOfWeek(monthEnd); //return the end of a week for the last day of the month
  const dateFormat = "d";
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat);
      const dateClicked = day;
      days.push(
        <DayCell
          key={i}
          isDisabled={!isSameMonth(day, monthStart)}
          isSelected={isSameDay(day, selectedDate)}
          day={day}
          dateClicked={dateClicked}
          onDateClick={onDateClick}
          formattedDate={formattedDate}
        />
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day}>
        {" "}
        {days}{" "}
      </div>
    );
    days = [];
  }
  return rows;
};

const DayRow = ({ currentDate, selectedDate, onDateClick, dateClicked }) => {
  const rows = generateRows({
    currentDate,
    selectedDate,
    onDateClick,
    dateClicked,
  });
  return <div className="body">{rows}</div>;
};

export default DayRow;
