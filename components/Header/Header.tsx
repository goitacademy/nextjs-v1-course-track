import Link from 'next/link'
import style from './Header.module.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={style.nav}>
          <li className={style.element}>
            <Link href='/'>Home</Link>
          </li>
          <li className={style.element}>
            <Link href='/notes'>Notes</Link>
          </li>
          <li className={style.element}>
            <Link href='/profile'>Profile</Link>
          </li>
          <li className={style.element}>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
