import Link from 'next/link'
import style from './Header.module.css'
import { getCategories } from '@/lib/api'

const Header = async () => {
  const categories = await getCategories()
  return (
    <header>
      <nav>
        <ul className={style.nav}>
          <li className={style.element}>
            <Link href='/'>Home</Link>
          </li>
          <li className={style.element}>
            {/* <ul style={{ fontSize: '10px' }}>
              <Link href={`/notes/filter/all`}>All</Link>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link href={`/notes/filter/${cat.id}`}>{cat.name}</Link>
                </li>
              ))}
            </ul> */}
            <Link href='/notes/filter/all'>Notes</Link>
          </li>
          <li className={style.element}>
            <Link href='/profile'>Profile</Link>
          </li>
          <li className={style.element}>
            <Link href='/about'>About</Link>
          </li>
          <li className={style.element}>
            <Link href='/login'>Login</Link>
          </li>
          <li className={style.element}>
            <Link href='/register'>Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
