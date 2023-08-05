import { BgImageDropdown } from "./dropdowns/bg-image-dropdown";
import styles from "@/app/components/navbar.module.css"

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.options}>
            <BgImageDropdown />
            </div>
        </nav>
    )
}