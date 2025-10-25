
import { HiSun, HiMoon } from 'react-icons/hi'
import useTheme from '../hooks/useTheme'
import Button from './Button';

const ThemeToggle = () => {
  const [theme, toggleTheme] = useTheme() ;

 

  return (
    <Button
      onClick={() => {
        if (typeof toggleTheme === 'function') toggleTheme()
      }}
      variant='ghost'
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <HiMoon className="w-5 h-5" />
      ) : (
        <HiSun className="w-5 h-5" />
      )}
    </Button>
  )
}

export default ThemeToggle