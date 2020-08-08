import React from "react";
import { isSameMonth, isSameDay } from "date-fns";


export default function DayCell({ monthStart, dateClicked, day, selectedDate, onDateClick, formattedDate}) {
    return (
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
    )
}
