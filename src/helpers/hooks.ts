import { useEffect } from "react";

export default function useEffectAsync(effect: () => void, inputs: unknown[]) {
  useEffect(() => {
    effect();
  }, inputs);
}
