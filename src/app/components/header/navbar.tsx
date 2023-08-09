import { BgImageDropdown } from '../dropdowns/bg-image-dropdown'
import styles from '@/app/components/header/navbar.module.css'
import { Settings } from '../settings/settings'

export function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <div className={styles.Options}>
                <BgImageDropdown />
                <Settings />
            </div>
        </nav>
    )
}
