import { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

// ---------------------------------------------------------------------------------------------

interface UseResponsive {
  xsUp: boolean;
  smUp: boolean;
  mdUp: boolean;
  lgUp: boolean;
  xlUp: boolean;
  xxlUp: boolean;
  xsDown: boolean;
  smDown: boolean;
  mdDown: boolean;
  lgDown: boolean;
  xlDown: boolean;
  xxlDown: boolean;
}

// ---------------------------------------------------------------------------------------------

export const useResponsive = (): UseResponsive => {
  const xsUp = useMediaQuery({
    query: '(min-width: 375px)',
  });

  const smUp = useMediaQuery({
    query: '(min-width: 640px)',
  });

  const mdUp = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const lgUp = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  const xlUp = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  const xxlUp = useMediaQuery({
    query: '(min-width: 1536px)',
  });

  const xsDown = useMediaQuery({
    query: '(max-width: 375px)',
  });

  const smDown = useMediaQuery({
    query: '(max-width: 639px)',
  });

  const mdDown = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const lgDown = useMediaQuery({
    query: '(max-width: 1023px)',
  });

  const xlDown = useMediaQuery({
    query: '(max-width: 1279px)',
  });

  const xxlDown = useMediaQuery({
    query: '(max-width: 1535px)',
  });

  return useMemo(
    () => ({ xsUp, smUp, mdUp, lgUp, xlUp, xxlUp, xsDown, smDown, mdDown, lgDown, xlDown, xxlDown }),
    [xsUp, smUp, mdUp, lgUp, xlUp, xxlUp, xsDown, smDown, mdDown, lgDown, xlDown, xxlDown],
  );
};
