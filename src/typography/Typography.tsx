import React from "react";

export const TypographyH1: React.FC<{ children: React.ReactNode }> = ({ children}) => (
  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    {children}
  </h1>
);

export const TypographyP: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="leading-7 ">{children}</p>
);

