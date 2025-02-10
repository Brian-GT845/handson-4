import { useEffect, useState } from "react";

const ChildComponent = () => {
  useEffect(() => {
    console.log("Child component mounted");
    return () => {
      console.log("Child component unmounted");
    };
  }, []);
  return <p>Child Component is mounted</p>;
};

const UnmountDemo = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Unmount Child component" : "mount Child component"}
      </button>
      {show && <ChildComponent />}
    </div>
  );
};

export default UnmountDemo;
