import React from 'react'
import Navigation from './components/Navigation'
import App from 'next/app'

class Dashboard extends App {
  static async getInitialProps (ctx) {
    let pageProps = await ctx || {}
    if (ctx.req && ctx.req.session.passport) {
      pageProps = ctx.req.session.passport.user
    }
    return { pageProps }
  }

  constructor (props) {
    super(props)
    this.state = {
      user: props.pageProps.nickname || null
    }
  }

  render () {
    return (
      <Navigation>
        <p>Dashboard</p>
        {
          this.state.user && (
            <p>Welcome {this.state.user}!</p>
          )
        }
      </Navigation>
    )
  }
}

export default Dashboard
