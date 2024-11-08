// app/providers.tsx
'use client'


import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';



export function Providers({ children }: { children: React.ReactNode }) {


    return (

        <>
            <ProgressBar
                height="2px"
                color="#1A44DD"
                options={{ showSpinner: false }}
                shallowRouting
            />
            {children}
        </>
    )
}