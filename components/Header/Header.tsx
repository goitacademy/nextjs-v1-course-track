import Link from 'next/link'
import style from './Header.module.css'
import AuthNavigation from '../AuthNavigation/AuthNavigation'

const Header = async () => {
  return (
    <header>
      <nav>
        <ul className={style.nav}>
          <li className={style.element}>
            <Link href='/'>Home</Link>
          </li>
          <li className={style.element}>
            <Link href='/notes/filter/all'>Notes</Link>
          </li>
          <li className={style.element}>
            <Link href='/profile'>Profile</Link>
          </li>
          <li className={style.element}>
            <Link href='/about'>About</Link>
          </li>
          {/* <li className={style.element}>
            <Link href='/login'>Login</Link>
          </li>
          <li className={style.element}>
            <Link href='/register'>Register</Link>
          </li> */}
          <AuthNavigation />
        </ul>
      </nav>
    </header>
  )
}

export default Header
