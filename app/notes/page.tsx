import { redirect } from 'next/navigation'

const Notes = async () => {
  redirect('/notes/filter/all')
}

export default Notes
