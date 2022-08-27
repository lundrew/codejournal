import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        explanation: 'String',
        codeLanguage: 'String',
        codeSnippet: 'String',
      },
    },
    two: {
      data: {
        title: 'String',
        explanation: 'String',
        codeLanguage: 'String',
        codeSnippet: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
