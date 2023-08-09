'use client'

import Image from 'next/image'
import { useBgImage } from '@/app/stores/bg-image-store'
import styles from '@/app/components/background-image/background-image.module.css'

export function BackgroundImage() {
    const imageSrc = useBgImage()

    return (
        <div className={styles.bgImage}>
            <Image
                src={imageSrc}
                fill={true}
                quality={70}
                style={{ objectFit: 'cover' }}
                alt="bg-image"
                priority={true}
            />
        </div>
    )
}
