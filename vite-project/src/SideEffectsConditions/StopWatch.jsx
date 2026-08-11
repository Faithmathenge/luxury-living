import { useEffect, useState } from "react";

function StopWatch() {
  const [K, setK] = useState(0);
  const [isStopped, setIsStopped] = useState(true);

  useEffect(() => {
    if(isStopped === false){
      setK(K + 1);
    }
    }, [ isStopped]);

  return(
    <div>
      <div>
      <button onClick={() => setIsStopped(false)}>Start</button>
      <button onClick={() => setIsStopped(true)}>Stop</button>
      
      </div>
     <div>Start clicked how many times: {K}</div>
     <ShowTimer isStopped={isStopped} />
    </div>
  );
}

function ShowTimer({isStopped, K}) {
  if (isStopped){
    return null;
  }
  return <Timer K={K} />;
  }

   function Timer({K}) {
    const [time, setTime] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
      console.log("for K is", K, "time is", time);
      setTime((C) => C + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div>
      <b>Time: {time}</b>
      </div>
    );
  }
  

   export default StopWatch;
