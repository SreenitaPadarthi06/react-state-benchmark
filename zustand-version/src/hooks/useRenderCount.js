import { useRef } from "react";

const useRenderCount = () => {
  const count = useRef(0);
  count.current += 1;
  return count.current;
};

export default useRenderCount;
