import { Toaster } from 'sonner';

import { isMobile } from 'react-device-detect';

import StickmanText from '@/components/stickman-text';

import ThemeToggle from '@/components/theme-toggle';
import { useTheme } from '@/context/theme-provider';

const App = () => {
  const { theme } = useTheme();

  return (
    <>
      <main className='relative flex h-screen max-h-screen items-center justify-center'>
        <ThemeToggle className='absolute right-5 top-5' />
        <StickmanText />
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
