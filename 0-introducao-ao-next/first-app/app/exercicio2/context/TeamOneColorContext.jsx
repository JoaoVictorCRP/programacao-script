"use client";

import { createContext, useState } from "react";
export const TeamOneColorContext = createContext();

export default function TeamOneColorProvider({ children }) {
  const [teamOneColor, setTeamOneColor] = useState("acqua"); // Cor padrao da equipe 1

  return (
    <TeamOneColorContext.Provider value={{ teamOneColor, setTeamOneColor}}>
      {children}
    </TeamOneColorContext.Provider>
  )
};