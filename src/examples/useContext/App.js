import React, { useState } from "react";

import ThemeContext from "./ThemeContext";
import Toolbar from "./Toolbar";

export default function App() {
  const [style, setStyle] = useState("light");
  const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee",
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222",
    },
  };

  return (
    <>
      <ThemeContext.Provider value={themes[`${style}`]}>
        <Toolbar />
      </ThemeContext.Provider>
      <button
        disabled={style === "light" ? true : false}
        onClick={() => setStyle("light")}
      >
        light
      </button>
      <button
        disabled={style === "dark" ? true : false}
        onClick={() => setStyle("dark")}
      >
        dark
      </button>
    </>
  );
}
