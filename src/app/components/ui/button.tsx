import { ReactNode } from 'react'
import styles from '@/app/components/ui/button.module.css'

type Variant = 'primary' | 'destructive'

export function Button({
    children,
    variant = 'primary',
}: {
    children: ReactNode
    variant?: Variant
}) {
    return (
        <button
            className={`${styles.Button} ${
                variant === 'destructive' ? styles.DestructiveButton : null
            }`}
        >
            {children}
        </button>
    )
}
