import type { Prisma } from '@prisma/client'

export const standard = defineScenario({
  comment: {
    rob: {
      data: {
        name: 'Rob Cameron',
        body: 'This is Robs test comment',
        post: {
          create: {
            title: 'First Test Post',
            explanation: 'First Test Explanation',
            codeLanguage: 'First Test Language ',
            codeSnippet: 'First Test code Snippet',
          },
        },
      },
    },
    david: {
      data: {
        name: 'David Price',
        body: 'This is Davids test comment',
        post: {
          create: {
            title: 'Second Test Post',
            explanation: 'First Test Explanation',
            codeLanguage: 'First Test Language',
            codeSnippet: 'First Test code Snippet',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
