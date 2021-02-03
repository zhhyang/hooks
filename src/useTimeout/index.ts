import React,{ useEffect } from 'react';

const useTimeout = (fn: () => void, delay:number| null | undefined) => {
    const ref = React.useRef();

    useEffect(() => {
        // @ts-ignore
        ref.current  = fn;
    }, [fn]);

    useEffect(() =>{
        function tick() {
            // @ts-ignore
            ref.current()
        }
        if (delay !== null){
            let id = setTimeout(tick,delay)
            return () => clearTimeout(id)
        }
    },[delay])
};

export default useTimeout;
