import React from 'react'
import Navigation from './components/Navigation'

const Dashboard = props => {
  return (
    <Navigation>
      <p>Dashboard</p>
      {
        props.username && (
          <p>Welcome {props.username}!</p>
        )
      }
    </Navigation>
  )
}

Dashboard.getInitialProps = async ctx => {
  let username = await ctx || {}
  if (ctx.req && ctx.req.session.passport) {
    username = ctx.req.session.passport.user.nickname
  }
  return { username }
}

export default Dashboard
