import { useEffect } from "react";
import usePersistFn, { noop } from "./usePersistFn";

const useTimeout = (fn: noop, ms: number | null | undefined) => {
  const timerFn = usePersistFn(fn);

  useEffect(() => {
    if (ms === null || ms === undefined) {
      return;
    }

    function tick() {
      timerFn();
    }

    let id = setTimeout(tick, ms);
    return () => {
      clearTimeout(id)
    };
  }, [ms, timerFn]);
};

export default useTimeout;
