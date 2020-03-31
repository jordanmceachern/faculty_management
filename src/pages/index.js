import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Landing from './components/Landing'
import Navbar from './components/Navbar'

const Index = props => {
  return (
    <Navbar>
      <Head>
        <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
      </Head>
      {
        props.children || <Landing />
      }
    </Navbar>
  )
}

Index.propTypes = {
  children: PropTypes.object
}

export default Index
