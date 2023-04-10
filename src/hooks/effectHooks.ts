import { DependencyList, EffectCallback, useEffect, useState } from "react";

export const useNoFirstTimeEffect = (
  callback: EffectCallback,
  dependencies: DependencyList
) => {
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);

  useEffect(() => {
    if (isFirstTime) setIsFirstTime(false);
    if (!isFirstTime) {
      const unsubscribe = callback();
      return unsubscribe;
    }
  }, dependencies);
};
