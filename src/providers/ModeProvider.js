import React, { createContext, useContext, useState } from "react";
import { Children } from "react";

export const ModeContext = createContext(" ");

export default function ModeProvider({ children }) {
  const [mode, setMode] = useState("light");

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}
