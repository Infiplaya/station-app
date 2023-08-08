import { BgImageDropdown } from "./dropdowns/bg-image-dropdown";
import styles from "@/app/components/navbar.module.css"
import { Settings } from "./settings/settings";

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.options}>
            <BgImageDropdown />
            <Settings />
            </div>
        </nav>
    )
}