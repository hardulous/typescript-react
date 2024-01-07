import { useEffect, useRef, useState } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);

    // const intervalRef = useRef<null | NodeJS.Timer>(null); // Here now my ref can store both null or some Timer type returned by setInterval()

  const intervalRef = useRef<NodeJS.Timer>(null!); // Here again we can use non-null assertion just like in case of storing dom element in ref but use only if we are confident that ref will be initlized to Timer type in future

  const stopTimer = () => {
    //  Since intervalRef can be null as well which we can not pass to clearInterval so either change type to union of <undefined | NodeJS.Timer>(null) or perform null check

    // if (intervalRef.current) {
    //   clearInterval(intervalRef.current);
    // }
    
    // Here by non-null assertion no need to check for null value we are confident that ref will always have Timer type value before calling this clearInterval()
    clearInterval(intervalRef.current);

  };

  useEffect(() => {
    // Here return type of setInterval if hover on it is NodeJS.Timer so use this as a type to intervalRef
    intervalRef.current = setInterval(() => {
      setTimer((c) => c + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  });

  return (
    <div>
      <h4>MUTABLE REf</h4>
      Timer - {timer}
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
};

export default MutableRef;

// Here apart fromm dom element useRef can also store any data type value like number , string , array , object etc which are mutable as well. Here again the type of intervalRef is null based on initial type inference but will store some number value returned by setInterval() which offcourse can not be stored in the ref as it is of type null so have to modify the type using "UNION".
