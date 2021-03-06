import Link from 'next/link'
import Head from 'next/head'

const Navigation = props => {
  return (
    <div className='navbar'>
      <Head>
        <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
      </Head>
      <Link href='/'>
        <a title='Navigate to the landing page'>Landing</a>
      </Link>
      {
        props.user
          ? <Link href='/logout'>
            <a style={{ marginLeft: '10px' }} title='Log out of your session'>Logout</a>
          </Link>
          : <Link href='/login'>
            <a style={{ marginLeft: '10px' }} title='Navigate to the login page'>Login</a>
          </Link>
      }
      {
        props.user && (
          <Link href='/dashboard'>
            <a style={{ marginLeft: '10px' }} title='Navigate to your Dashboard'>Dashboard</a>
          </Link>
        )
      }
      {
        props.user && (
          <Link href='/semester-builder'>
            <a style={{ marginLeft: '10px' }} title='Navigate to your Semester Builder App'>Semester Builder</a>
          </Link>
        )
      }
      {
        props.user && (
          <Link href='/faculty'>
            <a style={{ marginLeft: '10px' }} title='Manage your Faculty'>Faculty</a>
          </Link>
        )
      }
      {
        props.children
      }
    </div>
  )
}

export default Navigation
