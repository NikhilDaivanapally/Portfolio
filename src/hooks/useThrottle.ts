import { useRef, useCallback } from 'react';

export const useThrottle = (func: CallableFunction, delay: number) => {
  const timerRef = useRef<number | null>(null);

  const throttledFunc = useCallback(() => {
    if (timerRef.current === null) {
      func();
      timerRef.current = setTimeout(() => {
        timerRef.current = null;
      }, delay);
    }
  }, [func, delay]);

  return throttledFunc;
};
