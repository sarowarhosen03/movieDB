'use client';
import Image from "next/image";
import {useEffect, useState} from "react";

export default function ThemeSwitcher() {
    const [theme,setTheme] =  useState("dark")
    useEffect(()=>{
        if (document?.cookie) {
            const themeCookie = document.cookie.split(';').find(cookie => cookie.includes('theme'));
            if (themeCookie) {
                const theme = themeCookie.split('=')[1];
                setTheme(theme);
            }
        }
    },[])
    return (
        <button
            onClick={() => {
                const newTheme = theme === "dark" ? "light" : "dark";
                document.cookie = `theme=${newTheme}; path=/`;
                setTheme(newTheme);
                document.documentElement.classList.toggle("dark");
            }}
            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
        >
            <Image src={`/assets/icons/${theme==="dark"?"sun.svg":"moon.svg"}`} width="24" height="24" alt="sun.svg"/>
        </button>

    );
}

