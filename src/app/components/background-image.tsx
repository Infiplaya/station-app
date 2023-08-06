'use client'

import Image from 'next/image'
import { useBgImage } from '../stores/bg-image-store'
import styles from '@/app/page.module.css'

export function BackgroundImage() {
    const imageSrc = useBgImage()

    return (
        <div className={styles.bgImage}>
            <Image
                src={imageSrc}
                fill={true}
                quality={100}
                style={{ objectFit: 'cover' }}
                alt="bg-image"
                priority={true}
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUl5GpBwABkQDYW3A27QAAAABJRU5ErkJggg=="
            />
        </div>
    )
}
