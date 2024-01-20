import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export default ({ children }) => {
  const [theme, setTheme] = useState({
    backgroundColor: "rgb(39,50,56)",
    fontColor: "rgb(255,255,255)",
    borderColor: "#ff0044",
    linkColor: "rgb(255,255,255)",
    hoverColor: "rgb(122,42,196) ",
  });
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkTheme = {
      backgroundColor: "rgb(39,50,56)",
      fontColor: "rgb(255,255,255)",
      borderColor: "#ff0044",
      linkColor: "rgb(255,255,255)",
      hoverColor: "rgb(122,42,196) ",
    };
    const lightTheme = {
      backgroundColor: "rgb(255,255,255)",
      fontColor: "rgb(41,43,58)",
      borderColor: "#ff0044",
      linkColor: "rgb(42,28,58)",
    };
    let isDark = localStorage.getItem("theme");
    let savedTheme;
    if (isDark) {
      if (isDark.charAt(0) === '"' && isDark.charAt(isDark.length - 1) === '"')
        isDark = isDark.substr(1, isDark.length - 2);
      if (isDark === "true") {
        isDark = true;
        savedTheme = darkTheme;
      }
      if (isDark === "false") {
        isDark = false;
        savedTheme = lightTheme;
      }
    } else {
      savedTheme = darkTheme;
      isDark = true;
    }
    setTheme(savedTheme);
    setIsDark(isDark);
    document.body.style.backgroundColor = savedTheme.backgroundColor;
    document.body.style.color = savedTheme.fontColor;
    document.getElementsByTagName("META")[2].content =
      savedTheme.backgroundColor;
  }, []);

  return (
    <div>
      <ThemeContext.Provider value={{ theme, setTheme, isDark, setIsDark }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};
