import { useState, useEffect } from 'react'

const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light');

    useEffect(() => {
        const documentElement = document.documentElement;

        if (theme === 'dark') {
            documentElement.classList.add('dark');
        } else {
            documentElement.classList.remove('dark');
        }

        localStorage.setItem("theme", theme);
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return [theme, toggleTheme];
}

export default useTheme