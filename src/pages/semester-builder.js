import React from 'react'
// import PropTypes from 'prop-types'
import Index from './index'

const SemesterBuilder = () => {
  const semesterBuilderPage = () => {
    return (
      <p>Semester Builder</p>
    )
  }
  return <Index children={semesterBuilderPage()} />
}

// SemesterBuilder.propTypes = {
//   propName: PropTypes.object
// }

export default SemesterBuilder
