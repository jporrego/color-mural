import { useEffect, useState } from 'react';

export default function useIsDesktop(breakpoint = 768) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia(`(min-width:${breakpoint}px)`).matches);
  }, [breakpoint]);

  return isDesktop;
}
