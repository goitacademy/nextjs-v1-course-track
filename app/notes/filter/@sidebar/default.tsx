import { getCategories } from '@/lib/api'
import Link from 'next/link'

const Sidebar = async () => {
  const categories = await getCategories()
  return (
    <div>
      <h2>Categories</h2>
      <hr />
      <ul style={{ fontSize: '10px' }}>
        <Link href={`/notes/filter/all`}>All</Link>
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link href={`/notes/filter/${cat.id}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
