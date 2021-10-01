import React, { useState } from 'react'
import styles from './SearchField.module.scss'
import ActiveSearch from './ActiveVector.svg'
import BlockedSearch from './BlockedVector.svg'

const SearchField = ({
  placeHolder, block = false, value, onChange, func,
}) => {
  const [isOnFocus, setFocus] = useState(false)
  function handleOnPress(e) {
    if (e.key === 'Enter') {
      if (func && !block) func()
    }
  }

  const handleChange = (e) => {
    if (onChange) onChange(e.target.value);
  }
  return (
    <div
      className={`${styles.SearchField} ${block ? styles.Blocked : styles.Active}`}
      style={isOnFocus ? { border: '1px solid #00838F' } : {}}
    >
      <input
        onFocusCapture={() => setFocus(!isOnFocus)}
        onBlur={() => setFocus(!isOnFocus)}
        className={styles.textField}
        role="button"
        type="text"
        onChange={handleChange}
        placeholder={placeHolder}
        disabled={block}
        value={value}
        onKeyPress={handleOnPress}
      />
      <div tabIndex={0} role="button" onClick={func} onKeyPress={handleOnPress}>
        <img src={block ? BlockedSearch : ActiveSearch} alt="pic" className={`${styles.img} ${block ? styles.BlockedSearch : styles.ActiveSearch}`} />
      </div>
    </div>
  )
}

export default SearchField
