import { Suspense, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import './App.css'
import { SidebarProvider } from './context/Sidebar/SidebarProvider'
import { PuffLoader } from 'react-spinners'


function App() {

  // useEffect(() => {
  //   const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

  //   if (systemTheme.matches) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }


  //   const handleThemeChange = (e: MediaQueryListEvent) => {
  //     if (e.matches) {
  //       document.documentElement.classList.add('dark');
  //     } else {
  //       document.documentElement.classList.remove('dark');
  //     }
  //   }

  //   systemTheme.addEventListener('change', handleThemeChange);

  //   return () => {
  //     systemTheme.removeEventListener('change', handleThemeChange);
  //   }
  // }, []);

  useEffect(() => {
    const documentElement = document.documentElement;
    const theme = localStorage.getItem("theme");

    if (theme === 'dark') {
      documentElement.classList.add('dark');
    } else {
      documentElement.classList.remove('dark');
    }

    // localStorage.setItem("theme", theme);
  }, [])

  return (

    <SidebarProvider>
      <BrowserRouter>
        <Suspense fallback={<div className='h-full w-full flex justify-center items-center'><PuffLoader /></div>}>
          <Router />
        </Suspense>
      </BrowserRouter>
    </SidebarProvider>

  )
}

export default App
