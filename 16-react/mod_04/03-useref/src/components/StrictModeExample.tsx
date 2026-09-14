import { useEffect, useRef } from "react";

export function StrictModeExample() {
  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (!hasMountedRef.current) {
      console.log("Component mounted for the first time");
      hasMountedRef.current = true;
    }
  }, []);

  return <p>StrictMode example</p>;
}