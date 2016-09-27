import React from 'react'

import styles from './ImageSwitcher.styl'

const ImageSwitcher = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.imageCover} className={styles.image} />
      <img src={props.imageHover} className={styles.image} />
    </div>
  )
}

export default ImageSwitcher
