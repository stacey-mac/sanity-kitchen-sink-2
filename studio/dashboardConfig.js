export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eba9ec91787f2ad04cc3554',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2-studio-rw432nji',
                  apiId: '285477af-af05-49d6-8c82-34b3da6dc07b'
                },
                {
                  buildHookId: '5eba9ec9129f12e2a98042f1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2-web-b3yrv8vf',
                  apiId: '3e82a5a5-b074-4a7a-aff2-e22ba98eb452'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stacey-mac/sanity-kitchen-sink-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2-web-b3yrv8vf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
