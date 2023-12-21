import React from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDownload,
  faSpinner,
  faHandPointer
} from '@fortawesome/free-solid-svg-icons'

export const Button = ({ text, buttonType }) => {
  const classes = `${styles.buttonItem} ${styles[buttonType]}`
  return (
    <div>
      <button className={classes}>
        {buttonType === 'loading' ? (
          <span>
            <FontAwesomeIcon icon={faSpinner} spin /> {text}
          </span>
        ) : buttonType === 'download' ? (
          <span>
            <FontAwesomeIcon icon={faDownload} /> {text}
          </span>
        ) : buttonType === 'click' ? (
          <span>
            <FontAwesomeIcon icon={faHandPointer} /> {text}
          </span>
        ) : (
          text
        )}
      </button>
    </div>
  )
}
