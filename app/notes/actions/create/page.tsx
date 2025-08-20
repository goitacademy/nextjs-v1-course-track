import CreateNoteForm from '@/components/CreateNoteForm/CreateNoteForm'
import { getCategories } from '@/lib/api/clientApi'

const CreateNotePage = async () => {
  const categories = await getCategories()
  return (
    <div>
      <CreateNoteForm categories={categories} />
    </div>
  )
}

export default CreateNotePage
