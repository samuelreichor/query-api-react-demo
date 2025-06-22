import type { CraftPageHome } from '../../types'
import { CraftArea, useCraftInstance, useCraftUrlBuilder } from '@query-api/react'
import { useCraftFetch } from '../composables/useCraftFetch'

export default function Home(props: CraftPageHome) {
  const {authToken} = useCraftInstance()
  const url = useCraftUrlBuilder('entries').section('news').limit(3).fields(['title']).buildUrl('all')
  const {data: news, loading, error} = useCraftFetch<CraftPageHome[]>(url, authToken) 

  if (error) {
    console.error(error)
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <CraftArea content={props.contentBuilder} />

      <h2>Related News</h2>
      {!loading && news && (
        <ul>
          {news.map((item, idx) => (
            <li key={idx}>
              <a href={item.metadata.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
