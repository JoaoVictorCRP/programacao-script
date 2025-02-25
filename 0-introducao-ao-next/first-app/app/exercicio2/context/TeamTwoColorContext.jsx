"use client";

import React, { createContext, useState } from "react";

export const ColorContext = createContext();

export default function ColorProvider({ children }) {
  const [teamTwoColor, setTeamTwoColor] = useState("red"); // Cor padrao da equipe 2

  return (
    <ColorContext.Provider value={{ teamTwoColor, setTeamTwoColor}}>
      {children}
    </ColorContext.Provider>
  )
};