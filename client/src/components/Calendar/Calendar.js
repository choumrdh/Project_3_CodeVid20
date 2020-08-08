import React, { useState } from "react";
import { format, startOfWeek, addDays, startOfMonth, endOfMonth, endOfWeek, isSameMonth, isSameDay, subMonths, addMonths } from "date-fns";
import "./Calendar.css";
import Modal from "../Modal/Modal";
import Header from "./Header/Header";
import DayHeader from "./DayHeader/DayHeader";

const Calendar = () => {
   const [currentDate, setCurrentDate] = useState(new Date());
   const [selectedDate, setSelectedDate] = useState(new Date());
   const [open, setOpen] = useState(false);
   const [state, setState] = useState({
      event: "",
      description: "",
      time: "",
   });

   const handleOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleChange = event => {
      const { name, value } = event.target;
      setState({
         ...state,
         [name]: value
      })
   };

   const handleSubmit = event => {
      console.log(format(selectedDate, "P"), state.event, state.description, state.time);

      //api post request
   };

   const nextMonth = () => {
      setCurrentDate(addMonths(currentDate, 1));//function takes 2 parameters, date & number of months to add
   };

   const prevMonth = () => {
      setCurrentDate(subMonths(currentDate, 1));//function takes 2 parameters, date & number of months to subtract
   };

   const onDateClick = day => {
      setSelectedDate(day);
      handleOpen();
   };

   const cells = () => {
      const monthStart = startOfMonth(currentDate); //returns start of month for current date
      const monthEnd = endOfMonth(monthStart); //returns last day of month for the start of month date
      const startDate = startOfWeek(monthStart);//returns starting date of week for start of month
      const endDate = endOfWeek(monthEnd);//return the end of a week for the last day of the month
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
               <div
                  className={`column cell ${!isSameMonth(day, monthStart)
                     ? "disabled" : isSameDay(day, selectedDate)
                        ? "selected" : ""}`}
                  key={day}
                  onClick={() => onDateClick(dateClicked)}
               >
                  <span className="number">{formattedDate}</span>
                  <span className="bg">{formattedDate}</span>
               </div>
            );
            day = addDays(day, 1);
         }
         rows.push(
            <div className="row" key={day}> {days} </div>
         );
         days = [];
      }
      return <div className="body">{rows}</div>;
   };

   return (
      <div className="calendar">
         <Modal open={open}
            date={format(selectedDate, "P")}
            handleOpen={handleOpen}
            handleClose={handleClose}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            state={state}
         />
         <div>
            <Header
               prevMonth={prevMonth}
               nextMonth={nextMonth}
               currentDate={format(currentDate, "MMMM yyyy")}/>
         </div>
         <div><DayHeader
               currentDate={currentDate}/>
         </div>
         <div>{cells()}</div>
      </div>
   );
};

export default Calendar;