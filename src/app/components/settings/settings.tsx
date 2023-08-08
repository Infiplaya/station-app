'use client'

import * as Dialog from '@radix-ui/react-dialog';

import styles from '@/app/components/settings/settings.module.css'
import { Button } from '../ui/button';
import { X } from 'lucide-react';

export function Settings() {
    return (
        <Dialog.Root>
    <Dialog.Trigger>
        <Button className={styles.SettingsButton}>Ustawienia</Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={styles.DialogOverlay} />
      <Dialog.Content className={styles.DialogContent}>
        <Dialog.Title className={styles.DialogTitle}>Settings</Dialog.Title>
        <Dialog.Description className={styles.DialogTitle}>
          Lalalalala
        </Dialog.Description>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <Button>Save changes</Button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <Button aria-label="Close" className={styles.IconButton}>
            <X />
          </Button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
    )
}
