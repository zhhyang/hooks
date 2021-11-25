import { useCallback, useState } from "react";

function useForceUpdate() {
  const [, setState] = useState(0);
  return useCallback(() => {
    setState((val) => (val + 1) % (Number.MAX_SAFE_INTEGER - 1));
  }, []);
}

export default useForceUpdate;
