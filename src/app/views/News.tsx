import type { CraftPageHome } from '../../types'

export default function News(props: CraftPageHome) {
  return (
    <div>
      {JSON.stringify(props, null, 2)}
    </div>
  )
}
