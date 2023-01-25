import React, { useEffect, useState } from "react";
import { useState } from "react";
import "../Main/images";

function Main() {
    // str type
    const [Departure, setDeparture] = useState('');
    const [Destination, setDestination] = useState('');

    const today = new Date();
    console.log(today);
    // DepartDate, Returndate can't be in the past
    // DepartDate is 5 days from today - use built in function new Date()
    // obj type, int type
    const [DepartDateYear, setDepartDateYear] = useState(today.getFullYear());
    const [DepartDateMonth, setDepartDateMonth] = useState(today.getMonth() + 1);
    const [DepartDateDay, setDepartDateDay] = useState(today.getDate());
    // Returndate can't be earlier than DepartDate
    const [ReturndateYear, setReturndateYear] = useState(DepartDateYear);
    const [ReturndateMonth, setReturndateMonth] = useState(DepartDateMonth);
    const [ReturndateDay, setReturndateDay] = useState(DepartDateDay);
    // int type
    const [numberOfTravelers, setNumberOfTravelers] = useState(1);

    return (
        <div className="Main_container">
            <div className="Main_img">
                <div className="Main_content">
                    <div className="Main_title"/>
                    <div className="Main_form">
                    <form 
                    // onSubmit={getSearch}
                     className="search-form">

<input
  className="search-field"
  placeholder="query"
  type="text"
//   value={search}
//   onChange={updateSearch}
/>
</form>
                    </div>
                </div>
            </div>
            <div/>
        </div>
    )
}

export default Main;