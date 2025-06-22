import type { CraftPageHome } from '../../types'

export default function News(props: CraftPageHome) {
  return (
    <pre>
      {JSON.stringify(props, null, 2)}
    </pre>
  )
}
