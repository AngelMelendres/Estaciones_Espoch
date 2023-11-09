import React from "react";
import Header from "../components/Header";
import Foother from "../components/Foother";

function RootLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Foother />
    </div>
  );
}

export default RootLayout;
