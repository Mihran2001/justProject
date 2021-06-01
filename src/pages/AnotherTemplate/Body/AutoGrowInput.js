import React from "react";
import { Input } from "antd";

export default function AutoGrowInput({
  onChange,
  item,
  changeAreasOfExpertise,
}) {
  return (
    <div
      className="auto-grow-input"
      style={{
        display: "inline-grid",
        alignItems: "center",
        justifyItems: "start",
        padding: 8,
        // border: "1px solid #ccc",
        // borderRadius: 4,
        marginTop: "10px",
        marginRight: "10px",
      }}
    >
      <Input
        onChange={(event) => {
          onChange(event.target.value);
          changeAreasOfExpertise(item.id, event.target.value);
        }}
        style={{
          gridArea: "1 / 1 / 2 / 2",
          width: "100%",
          padding: 0,
          border: "none",
          outline: "none",
        }}
        value={item.value}
        placeholder="Inpute Areas"
      />
      <span
        style={{
          gridArea: "1 / 1 / 2 / 2",
          visibility: "hidden",
        }}
      >
        {item.value}
      </span>
    </div>
  );
}
