import { useEffect, useRef } from "react";

export function useOutSide(handelar, lesner) {
  const ref = useRef();

  useEffect(() => {
    function handelClick(e) {
      if (ref.current && !ref.current.contains(e.target)) handelar();
    }
    document.addEventListener("click", handelClick, lesner);
    return () => document.removeEventListener("click", handelClick, lesner);
  }, [handelar, lesner]);
  return [ref];
}
