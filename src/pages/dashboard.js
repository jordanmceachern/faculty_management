import React from 'react'
import PropTypes from 'prop-types'
import Index from './index'

const Dashboard = props => {
  const dashboardPage = () => {
    return (
      <>
        <p>Dashboard</p>
        <p>Welcome {props.username}!</p>
      </>
    )
  }
  return <Index children={dashboardPage()} />
}

Dashboard.getInitialProps = async ctx => {
  let username = await ctx || {}
  if (ctx.req && ctx.req.session.passport) {
    username = ctx.req.session.passport.user.nickname
  }
  return { username }
}

Dashboard.propTypes = {
  username: PropTypes.string.isRequired
}

export default Dashboard
