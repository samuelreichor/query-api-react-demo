import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router'
import * as ReactDOM from 'react-dom/client'
import App from './app/app'
import { craftInit, CraftNotImplemented } from '@query-api/react'
import Home from './app/views/Home'
import News from './app/views/News'
import Headline from './app/components/Headline'

craftInit({
  baseUrl: 'https://backend-craftcms.ddev.site:8443', // Replace with your Craft CMS URL
  authToken: 'Bearer tyE9LViYm0HvcVbUErN1wwIa3qyeby1K', // Replace with your Bearer token
  contentMapping: {
    pages: {
      home: Home,
      'news:home': News,
    },
    components: {
      headline: Headline,
      imageText: CraftNotImplemented,
    },
  },
})
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
