# Minimal Demo for React x Craft CMS

This starter is built using the [Craft Query API](https://plugins.craftcms.com/query-api?craft5).
You don’t need any knowledge of GraphQL, just familiarity with Craft CMS’s query builder is enough to get started.

## Requirements

- Craft CMS + Query API successfully installed and running
- A Craft CMS section with at least one entry type (I used sections called `home` and `news` with entry types `home`)

## Documentation

For more information about this codebase, see the [Quick Start Guide](https://samuelreichor/libraries/query-api-react/get-started/quick-start) 
for the [Query API React SDK](https://samuelreichor.at/libraries/query-api-react).

## Getting Started
Clone the repository:
```bash
git clone  
````

 Navigate to the project directory and install the dependencies:
```bash
cd react-craft-demo && npm install
```

Configure baseUrl and authToken for the Query API in `main.tsx`:
```ts
  // src/main.tsx
  craftInit({
    baseUrl: 'https://backend-craftcms.ddev.site:8443', // Replace with your Craft CMS URL
    authToken: 'Bearer tyE9LViYm0HvcVbUErN1wwIa3qyeby1K', // Replace with your Query API token
  })
```

## Scripts

These are the default react scripts available in this project:

- `npm run dev`: start the development server
- `npm run build`: build the project for production
- `npm run preview`: preview the production build

## Further Resources

- [Craft Query API](https://samuelreichor.at/libraries/craft-query-api): The Craft CMS Plugin that powers this great stuff.
- [React SDK](https://samuelreichor.at/libraries/query-api-react): The package used to get the query builder in React.
- [JS SDK](https://samuelreichor.at/libraries/js-craftcms-api): `@query-api/nuxt` is built on the `@query-api/js`.


## Support

If you encounter bugs or have feature requests, [please submit an issue](/../../issues/new). Your feedback helps improve the starter!
