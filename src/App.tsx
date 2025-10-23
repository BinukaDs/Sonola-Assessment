import { Suspense, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import './App.css'

function App() {

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

    if (systemTheme.matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }


    const handleThemeChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    systemTheme.addEventListener('change', handleThemeChange);

    return () => {
      systemTheme.removeEventListener('change', handleThemeChange);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Router />
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
