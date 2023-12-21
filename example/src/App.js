import React from 'react'
import { Button } from 'diffstylebutton'
import 'diffstylebutton/dist/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDownload,
  faSpinner,
  faHandPointer
} from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const buttonTypes = ['primary', 'default', 'dashed', 'text', 'link']

  const buttonTypesSpecial = ['download', 'loading', 'ghost', 'click']

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {buttonTypes.map((item, index) => (
          <Button key={index} text={`${item}`} buttonType={item} />
        ))}
      </div>
      <br />
      <div
        style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}
      >
        {buttonTypesSpecial.map((item, index) => (
          <Button
            key={index}
            text={
              item === 'loading' ? (
                <span>
                  <FontAwesomeIcon icon={faSpinner} spin /> Loading
                </span>
              ) : item === 'download' ? (
                <span>
                  <FontAwesomeIcon icon={faDownload} /> Download
                </span>
              ) : item === 'click' ? (
                <span>
                  <FontAwesomeIcon icon={faHandPointer} /> Click Me!
                </span>
              ) : (
                item
              )
            }
            buttonType={item}
          />
        ))}
      </div>
    </div>
  )
}

export default App
