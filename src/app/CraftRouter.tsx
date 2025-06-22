import { useParams } from 'react-router'
import { CraftPage, getCraftInstance, createCraftUrl } from '@query-api/react'
import { useCraftFetch } from './composables/useCraftFetch'
import type { CraftPageBase } from '../types'

export default function CraftRouter() {
  const { '*': params } = useParams()
  const uri = params !== '' ? params : '__home__'

  const { authToken } = getCraftInstance()
  const apiUrl = createCraftUrl('entries').uri(uri).buildUrl('one')

  const { data, loading, error } = useCraftFetch<CraftPageBase>(apiUrl, authToken)

  if (error) {
    console.error(error)
  }
  return (
    <div>
      {!loading && data && <CraftPage content={data} />}
    </div>
  )
}
