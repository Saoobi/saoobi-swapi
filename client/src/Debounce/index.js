import React, { useState, useEffect } from "react";

function Debounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  //Change the next debouncedValue after certain time when a new "value" is sent
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}

export default Debounce;
