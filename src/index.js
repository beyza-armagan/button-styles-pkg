import React from 'react'
import styles from './styles.module.css'

export const Button = ({ text, buttonType }) => {
  const classes = `${styles.buttonItem} ${styles[buttonType]}`
  return (
    <div>
      <button className={classes}>{text}</button>
    </div>
  )
}
