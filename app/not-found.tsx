import { redirect } from 'next/navigation'

const NotFound = () => {
  redirect('/')
  // return <div>NotFound</div>
}

export default NotFound
