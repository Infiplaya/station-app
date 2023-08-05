'use client'

import Image from 'next/image'
import { useBgImage } from '../stores/bg-image-store'
import styles from "@/app/page.module.css"

export function BackgroundImage() {
    const imageSrc = useBgImage()
    return (
        <div className={styles.bgImage}>
            <Image
                src={imageSrc}
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="bg-image"
            />
        </div>
    )
}
