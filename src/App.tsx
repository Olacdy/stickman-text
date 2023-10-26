import { Toaster } from 'sonner';

import { isMobile } from 'react-device-detect';

import StickmanText from '@/components/stickman-text';

import ThemeToggle from '@/components/theme-toggle';

import { useTheme } from '@/context/theme-provider';

const App = () => {
  const { theme } = useTheme();

  return (
    <>
      <main className='relative flex items-center justify-center h-screen max-h-screen overflow-hidden'>
        <ThemeToggle className='absolute right-5 top-5' />
        <StickmanText />
        <p className='absolute text-sm -translate-x-1/2 bottom-3 left-1/2 text-muted-foreground/60 dark:text-muted-foreground/30'>
          *click on stickman to copy text
        </p>
      </main>
      <Toaster
        richColors
        theme={theme}
        position={isMobile ? 'top-center' : 'bottom-right'}
      />
    </>
  );
};

export default App;
