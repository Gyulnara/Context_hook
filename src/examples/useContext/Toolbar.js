import ThemeContext from "./ThemeContext";
import React, { useContext } from "react";

export default function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I'm styled with a theme out of context!
    </button>
  );
}
