import { useEffect, useState } from 'react'

interface UseCraftFetchResult<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export function useCraftFetch<T = object>(url: string | null, authToken?: string): UseCraftFetchResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!url || !authToken) {
      throw new Error("Please provide a valid url and auth token")
    }

    setLoading(true)
    setError(null)

    fetch(url, {
      headers: { 
        Authorization: authToken 
      }
    }).then(async (res) => {
        if (!res.ok) throw new Error(await res.text())
        return res.json()
      })
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [url, authToken])

  return { data, loading, error }
}
