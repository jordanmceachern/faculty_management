import React from 'react'
// import PropTypes from 'prop-types'
import Index from './index'

const Faculty = () => {
  const facultyPage = () => {
    return (
      <p>Faculty</p>
    )
  }

  return <Index children={facultyPage()} />
}

// Faculty.propTypes = {
//   optionalObject: PropTypes.object
// }

export default Faculty
