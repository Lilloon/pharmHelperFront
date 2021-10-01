import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { putPictures } from '../../actions/sagas/drugsAction';
// import TextButton from '../TextButton/TextButton'
import styles from './ForPictures.module.scss'

const ForPictures = () => {
  const [value, setValue] = useState('');
  const [imageNew, setImage] = useState({});
  const dispatch = useDispatch();
  React.useEffect(() => {
    setValue(window.location.href.split('/')[window.location.href.split('/').length - 1])
  })
  function convertPictures(id, file) {
    let pictureObj = {
      id,
      file,
    }
    dispatch(putPictures(pictureObj));
  }

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  function f(e) {
    setImage(e.target.files[0]);
    if (imageNew !== {}) {
      convertPictures(value, imageNew);
    } else {
      setImage(e.target.files[0]);
      console.log(imageNew);
    }
  }

  return (
    <div className={styles.block}>
      <input type="text" disabled value={value} onChange={onChangeInput} className={styles.input} />
      <input
        className={styles.file}
        id="file"
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
          f(e);
        }}
      />
    </div>
  )
}

export default ForPictures
