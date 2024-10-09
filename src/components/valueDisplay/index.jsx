import React, { useEffect, useRef } from "react";

function ValueDisplay({ value }) {
  const previousValue = useRef(""); // Реф для хранения предыдущего значения

  // useEffect для обновления предыдущего значения при изменении текущего
  useEffect(() => {
    previousValue.current = value;
  }, [value]);

  return (
    <div>
      <p>Current Value: {value}</p>
      <p>Previous Value: {previousValue.current}</p>
    </div>
  );
}

export default ValueDisplay;
