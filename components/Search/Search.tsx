'use client'

import Link from 'next/link'
import { ChangeEvent, useState } from 'react'

type Props = {
  categoryId?: string
}

const Search = ({ categoryId }: Props) => {
  const [value, setValue] = useState('')
  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setValue(value)
  }

  return (
    <div>
      <input type='text' value={value} onChange={handleChange} />
      <Link href={`/notes/filter/${categoryId}/${value}`}>Search</Link>
    </div>
  )
}

export default Search
