import React, { useContext } from "react";
import JSConfetti from "js-confetti";

const jsconfetti = new JSConfetti();

const ConfettiContext = React.createContext(jsconfetti);

export const useConfetti = () => {
  return useContext(ConfettiContext);
};

export const ConfettiProvider: React.FC<{ children: React.ReactNode }> = (
  { children }
) => (
  <ConfettiContext.Provider value={jsconfetti}>
    {children}
  </ConfettiContext.Provider>
);
