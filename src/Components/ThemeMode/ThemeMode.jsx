import React, { useEffect, useState } from 'react'
import style from './ThemeMode.module.css';

export default function ThemeMode() {

    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark');
        localStorage.setItem("selectedTheme", 'dark');
    }
    const setlightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light');
        localStorage.setItem("selectedTheme", 'light');
    }
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === 'light') {
        setlightMode();
    }
    const toggleTheme = () => {
        if (document.querySelector("body").getAttribute('data-theme') === 'dark') {
            setlightMode();
        } else if (document.querySelector("body").getAttribute('data-theme') === 'light') {
            setDarkMode();
        }
    }
    return <>
        <button  onClick={toggleTheme} type='submit' className='btn' ><i  id='toggleBtn' className={`${style.themeToggleButton} fa-regular fa-moon`} /></button>
    </>
}
