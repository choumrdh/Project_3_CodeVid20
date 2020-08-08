import React from "react";

const Header = ({prevMonth, nextMonth, currentDate}) => {
   
    return (
       <div className="header row flex-middle">
          <div className="column col-start">
             <div className="icon" onClick={prevMonth}>
                chevron_left
       </div>
          </div>
          <div className="column col-center">
             <span>{currentDate}</span>
          </div>
          <div className="column col-end">
             <div className="icon" onClick={nextMonth}>
                chevron_right
       </div>
          </div>
       </div>
    );
 };

 export default Header;