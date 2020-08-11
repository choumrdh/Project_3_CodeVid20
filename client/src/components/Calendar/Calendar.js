import React, { useState } from "react";
import { format, subMonths, addMonths } from "date-fns";
import "./Calendar.css";
import Modal from "../Modal/Modal";
import Header from "./Header/Header";
import DayHeader from "./DayHeader/DayHeader";
import DayRow from "./DayRow/DayRow";
import API from "../../utils/API";

const Calendar = ({userId}) => {
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
         ...state, [name]: value
      })
   };

   const handleSubmit = event => {
      event.preventDefault();
      const thisDay = format(selectedDate, "P")
      console.log(thisDay, state.event, state.description, state.time);
      
      const newEvent ={
      user: userId,
      title :state.event,
      startTime:state.time,
      description:state.description,
      Date:thisDay,
      }
      API.createEvent(newEvent).then(res=>console.log(res));
      
      setState({
         event: "",
         description: "",
         time: "",
      })
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
         <Header
            prevMonth={prevMonth}
            nextMonth={nextMonth}
            currentDate={format(currentDate, "MMMM yyyy")} 
         />
         <DayHeader
            currentDate={currentDate} 
         />     
         <DayRow
            currentDate={currentDate}
            onDateClick={onDateClick}
         />
      </div>
   );
};

export default Calendar;