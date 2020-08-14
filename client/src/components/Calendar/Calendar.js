import React, { useState } from "react";
import { format, subMonths, addMonths } from "date-fns";
import "./Calendar.css";
import Modal from "../Modal/Modal";
import Header from "./Header/Header";
import DayHeader from "./DayHeader/DayHeader";
import DayRow from "./DayRow/DayRow";
import API from "../../utils/API";
import moment from 'moment';

const Calendar = ({userId, setSubmitTime}) => {
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
      const thisDay = format(selectedDate, "P");
      function convert(input) {
         return moment(input, 'HH:mm:ss').format('h:mm:ss A');
     };
     const startTime = convert(state.time);
      
      const newEvent ={
      user: userId,
      title :state.event,
      startTime: startTime,
      description:state.description,
      Date:thisDay,
      }
      API.createEvent(newEvent).then(()=>{
         setState({
            event: "",
            description: "",
            time: "",
         })

         setSubmitTime(new Date().getTime());
      });
      
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