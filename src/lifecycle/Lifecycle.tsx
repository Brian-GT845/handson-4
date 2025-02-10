import { useState, useEffect } from "react";

const Lifecycle = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Effect launched");
    return () => {
      console.log("Effect cleaned up");
    };
  }, [count]);

  return (
    <div>
      <p>Counter value: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Lifecycle;
