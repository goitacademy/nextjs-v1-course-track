import { getServerMe } from '@/lib/api/serverApi'

const Profile = async () => {
  const user = await getServerMe()
  console.log('user', user)
  return <div>Profile</div>
}

export default Profile
