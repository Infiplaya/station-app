import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from '@/app/components/ui/button.module.css'

type Variant = 'primary' | 'destructive'

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant
}
export function Button({ children, variant, ...rest }: CustomButtonProps) {
    return (
        <button
            className={`${styles.Button} ${
                variant === 'destructive' ? styles.DestructiveButton : null
            }`}
            {...rest}
        >
            {children}
        </button>
    )
}
