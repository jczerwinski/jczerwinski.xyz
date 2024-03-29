import React from 'react'

import Gravatar from 'react-gravatar'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          marginBottom: rhythm(2.5),
          textAlign: 'center'
        }}
      >
      <Gravatar email="jamie.czerwinski@gmail.com" size={100} className="rounded-circle" />
      </div>
    )
  }
}

export default Bio
