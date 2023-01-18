import DatePicker from "react-datepicker";
import { useState } from "react";

export default function TableDatePicker() {
    const [date, setDate] = useState(new Date());
   
    return (
      <DatePicker selected={date} onChange={date => setDate(date)} />
    );
   }