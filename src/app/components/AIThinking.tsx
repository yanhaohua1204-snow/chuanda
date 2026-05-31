import { useEffect } from 'react';
import Component2Ai from "../../imports/2Ai种草思考页-1/2Ai种草思考页-3-634";

interface AIThinkingProps {
  onComplete: () => void;
}

export default function AIThinking({ onComplete }: AIThinkingProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="size-full">
      <Component2Ai />
    </div>
  );
}
