'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
    bgOptions,
    useBgImage,
    useChangeImage,
} from '../../stores/bg-image-store'

import styles from '@/app/components/dropdowns/bg-image-dropdown.module.css'

export function BgImageDropdown() {
    const changeImage = useChangeImage()
    const currentImage = useBgImage()
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className={styles.dropdownButton}>
                    Change Background
                </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content className={styles.dropdownContent}>
                    {bgOptions.map((option) => (
                        <DropdownMenu.Item
                            className={`${styles.dropdownItem} ${
                                currentImage === option.url
                                    ? styles.selectedItem
                                    : null
                            }`}
                            key={option.url}
                            onClick={() => changeImage(option.url)}
                        >
                            {option.label}
                        </DropdownMenu.Item>
                    ))}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}
