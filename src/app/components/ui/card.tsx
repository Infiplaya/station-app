'use client'

import styles from '@/app/page.module.css'
import { ReactNode, useRef } from 'react'
import { motion } from 'framer-motion'

const INITIAL_POSITION = { x: 10, y: 10 }

function isMobileDevice() {
    return window.innerWidth <= 768
}

export function Card({
    children,
    cardId,
}: {
    children: ReactNode
    cardId: string
}) {
    const cardRef = useRef<HTMLDivElement>(null)

    const handleDragEnd = () => {
        const card = cardRef?.current
        if (card) {
            const coords = card.style.transform.match(
                /^translateX\((.+)px\) translateY\((.+)px\) translateZ/
            )
            if (coords?.length) {
                localStorage.setItem(
                    cardId,
                    JSON.stringify({
                        x: parseInt(coords[1], 10),
                        y: parseInt(coords[2], 10),
                    })
                )
            }
        }
    }

    const savedCoords = localStorage.getItem(cardId)

    const coordsObject = savedCoords
        ? JSON.parse(savedCoords)
        : INITIAL_POSITION

    return (
        <motion.div
            drag={!isMobileDevice()}
            ref={cardRef}
            className={styles.card}
            initial={isMobileDevice() ? null : coordsObject}
            onDragEnd={handleDragEnd}
            dragMomentum={false}
        >
            {children}
        </motion.div>
    )
}
