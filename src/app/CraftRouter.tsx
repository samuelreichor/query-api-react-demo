import { useParams } from 'react-router'
import { CraftPage, useCraftInstance, useCraftUrlBuilder } from '@query-api/react'
import { useCraftFetch } from './composables/useCraftFetch'
import type { CraftPageBase } from '../types'

export default function CraftRouter() {
  const { '*': params } = useParams()
  const uri = params !== '' ? params : '__home__'

  const { authToken } = useCraftInstance()
  const apiUrl = useCraftUrlBuilder('entries').uri(uri).buildUrl('one')

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
