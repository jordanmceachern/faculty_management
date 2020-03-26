import Link from 'next/link'

const Navbar = props => {
  return (
    <div className='navbar'>
      <Link href='/'>
        <a title='Navigate to landing page'>Landing</a>
      </Link>
      {
        props.isLoggedIn
          ? <Link href='/logout'>
            <a style={{ marginLeft: '10px' }} title='log out of your session'>Logout</a>
          </Link>
          : <Link href='/login'>
            <a style={{ marginLeft: '10px' }} title='Navigate to login page'>Login</a>
          </Link>
      }
      {
        props.isLoggedIn && (
          <Link href='/dashboard'>
            <a style={{ marginLeft: '10px' }} title='Navigate to landing page'>Dashboard</a>
          </Link>
        )
      }
    </div>
  )
}

export default Navbar
