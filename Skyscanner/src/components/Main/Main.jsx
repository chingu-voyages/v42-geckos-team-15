import React, { useEffect, useState } from "react";
import { useState } from "react";

function Main () {
    // str type
    const [Departure, setDeparture] = useState('');
    const [Destination, setDestination] = useState('');
    // DepartDate, Returndate can't be in the past
    // DepartDate is 5 days from today - use built in function new Date()
    // obj type
    const [DepartDateYear , setDepartDateYear ] = useState(0);
    const [DepartDateMonth , setDepartDateMonth ] = useState(0);
    const [DepartDateDay , setDepartDateDay ] = useState(0);
    // Returndate can't be earlier than DepartDate
    const [ReturndateYear , setReturndateYear ] = useState(0);
    const [ReturndateMonth , setReturndateMonth ] = useState(0);
    const [ReturndateDay , setReturndateDay ] = useState(0);
    // int type
    const [numberOfTravelers , setNumberOfTravelers ] = useState(1);

    const today = new Date();
    console.log(today);
}

export default Main;