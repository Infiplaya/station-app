'use client'

import { ReactNode, useEffect, useState } from 'react'
import { Toaster } from 'sonner'

const HydrationZustand = ({ children }: { children: ReactNode }) => {
    const [isHydrated, setIsHydrated] = useState(false)

    useEffect(() => {
        setIsHydrated(true)
    }, [])

    return (
        <>
            {isHydrated ? (
                <div>
                    <Toaster />
                    {children}
                </div>
            ) : null}
        </>
    )
}

export default HydrationZustand
