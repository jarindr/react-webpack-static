import React from 'react'

import ImageSwitcher from '../components/ImageSwitcher'

const HomePage = () => {
  return (
    <div>
      <ImageSwitcher
        imageCover={require('./assets/cover1.png')}
        imageHover={require('./assets/cover2.png')}
      />
    </div>
  )
}
export default HomePage
