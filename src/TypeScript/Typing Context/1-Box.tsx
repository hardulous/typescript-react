import { useContext } from "react";
import { ThemeContext } from "./3-ThemeContext";

const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theme.primary.main,
        color: theme.primary.text,
      }}
    >
      Box Component With Theme Style
    </div>
  );
};

export default Box;

// Here as we can see most of our typing is done by inference and we dont need to write to much ts code and here as ts know the type of ThemeContext as compile time we are getting autosugesstion of possible values the ThemeContext have.

// But we will also come across the case where the value of context is now known initally but after some point of time in future