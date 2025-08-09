"use client"

import { ThemeProvider } from "next-themes"

 const Providers = ({ children, params }:
    { children: React.ReactNode, params: { locale: string } }) => {
    return <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
    </ThemeProvider>
}   
export default Providers;