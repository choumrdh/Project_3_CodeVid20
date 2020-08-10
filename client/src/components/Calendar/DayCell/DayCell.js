import React from "react";

export default function DayCell({ dateClicked, day, isSelected, onDateClick, formattedDate, isDisabled }) {
    return (
        <div
            className={`column cell ${isDisabled
                ? "disabled" : isSelected
                    ? "selected" : ""}`}
            key={day}
            onClick={() => onDateClick(dateClicked)}
        >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
        </div>
    )
}