//import React from "react"; No need since we aren't writing any JSX
import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);
    return () => {
      window.removeEventListener("postate", onLocationChange);
    };
  }, []);
  return currentPath === path ? children : null;
};
export default Route;