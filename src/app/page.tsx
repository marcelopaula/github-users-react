import Search from '@/components/Search'
import User from '@/components/User'
import RepositoriesList from '@/components/RepositoriesList'

export default function Home() {
  return (
    <main>
      <Search />
      <User />
      <RepositoriesList />
    </main>
  )
}
