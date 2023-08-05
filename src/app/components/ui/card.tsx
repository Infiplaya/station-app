import styles from '@/app/page.module.css'
import { ReactNode } from 'react'

export function Card({ children }: { children: ReactNode }) {
    return <div className={styles.card}>{children}</div>
}
