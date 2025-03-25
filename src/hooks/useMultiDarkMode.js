import { useState, useEffect, useCallback } from 'react';

function useMultiDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("DARK-MODE");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    const body = document.body;
    const navbar = document.getElementById("navbar");
    const footer = document.querySelector("footer");

    body.classList.toggle("dark-mode", isDarkMode);
    if (navbar) {
      navbar.classList.toggle("dark-mode", isDarkMode);
    }
    if (footer) {
      footer.classList.toggle("dark-mode", isDarkMode);
    }  
 


    localStorage.setItem("DARK-MODE", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  }, []);

  return [isDarkMode, toggleDarkMode];
}

export default useMultiDarkMode;
