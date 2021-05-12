// import React from "react";
// import { Select } from "antd";

// export default function UserSelects() {
//   const { Option } = Select;

//   function handleChange(value) {
//     console.log(`selected ${value}`);
//   }

//   return (
//     <>
//       <label> some </label>
//       <Select
//         defaultValue="lucy"
//         style={{ width: 120 }}
//         onChange={handleChange}
//       >
//         <Option value="lucy">Lucy</Option>
//       </Select>
//     </>
//   );
// }

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function UserSelects() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
}
