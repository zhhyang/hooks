import { useEffect } from "react";
import usePersistFn, { noop } from "./usePersistFn";

function useInterval(fn: noop, ms: number | null | undefined) {
  const timerFn = usePersistFn(fn);

  useEffect(() => {
    if (ms === null || ms === undefined) {
      return;
    }

    function tick() {
      timerFn();
    }

    let id = setInterval(tick, ms);
    return () => {
      clearInterval(id);
    };
  }, [ms, timerFn]);
}

export default useInterval;
