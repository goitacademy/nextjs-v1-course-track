import { getCategories } from '@/lib/api/clientApi'
import Link from 'next/link'

const Sidebar = async () => {
  const categories = await getCategories()
  return (
    <div>
      <h3>Categories</h3>
      <hr />
      <ul style={{ fontSize: '10px' }}>
        <Link href={`/notes/filter/all`}>All</Link>
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link href={`/notes/filter/${cat.id}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
      <br />
      <hr />
      <br />
      <Link href='/notes/actions/create'>Create new Note</Link>
    </div>
  )
}

export default Sidebar
