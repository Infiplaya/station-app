'use client';

import styles from '@/app/components/ui/card/card.module.css';
import { ReactNode, useRef } from 'react';
import { motion } from 'framer-motion';

const INITIAL_POSITION = { x: 10, y: 10 };

function isMobileDevice() {
  return window.innerWidth <= 768;
}

const REGEX_CARD_COORDS =
  /^translateX\((.+)px\) translateY\((.+)px\) translateZ/;

export function Card({
  children,
  cardId,
}: {
  children: ReactNode;
  cardId: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDragEnd = () => {
    const card = cardRef?.current;
    if (card) {
      const coords = card.style.transform.match(REGEX_CARD_COORDS);
      if (coords?.length) {
        localStorage.setItem(
          cardId,
          JSON.stringify({
            x: parseInt(coords[1], 10),
            y: parseInt(coords[2], 10),
          })
        );
      }
    }
  };

  const savedCoords = localStorage.getItem(cardId);

  const coordsObject = savedCoords ? JSON.parse(savedCoords) : INITIAL_POSITION;

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
  );
}
