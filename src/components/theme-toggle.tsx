import { FC, HTMLAttributes } from 'react';

import { Toggle } from '@/components/ui/toggle';

import { Icons } from '@/components/icons';
import { useTheme } from '@/context/theme-provider';

type ThemeToggleProps = HTMLAttributes<HTMLButtonElement>;

const ThemeToggle: FC<ThemeToggleProps> = ({ className, ...props }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle
      size='sm'
      pressed={theme === 'dark'}
      onPressedChange={toggleTheme}
      className={className}
      {...props}>
      <Icons.dark className='h-8 w-8' />
    </Toggle>
  );
};

export default ThemeToggle;
