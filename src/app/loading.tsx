import React from 'react'
import styles from './loading.module.css'

export default function Loading(): React.ReactElement {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}>
        <span style={{ display: 'none' }}>Loading...</span>
      </div>
    </div>
  )
}
