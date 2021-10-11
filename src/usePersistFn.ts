import {useRef} from "react";

export type noop = () => void
function usePersistFn<T extends noop>(fn:T) {
    const ref = useRef<T>();
    ref.current = fn;
    const persistFn = useRef<T>();
    if (!persistFn.current) {
        persistFn.current = function (...args) {
            return ref.current!.apply(this, args);
        } as T;
    }

    return persistFn.current!;
}

export default usePersistFn;
