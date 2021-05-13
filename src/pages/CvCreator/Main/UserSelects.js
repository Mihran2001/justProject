import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./style.less";

export default function UserSelects({ startDate, setStartDate }) {
  return (
    <div className="datepicker">
      <label style={{ paddingTop: "15px" }}> User date </label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}
