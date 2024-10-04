"use client";

import { useEffect, useState } from "react";

//Fix here 

const useScreenDetector = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  const isTablet = width <= 1024 && width > 768;
  const isDesktop = width > 1024;

  return { isMobile, isTablet, isDesktop };
};

export default useScreenDetector;
