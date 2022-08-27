import Article from './Article'

const ARTICLE = {
  id: 1,
  title: 'First Post',
  codeSnippet: `type Query { contacts: [Contact!]! @requireAuth contact(id: Int!): Contact @requireAuth } --->>> type Query { contacts: [Contact!]! @skipAuth contact(id: Int!): Contact @skipAuth }
  `,
  codeLanguage: 'TypeScript',
  createdAt: '2022-08-17T22:05:20.274Z',
  explanation:
    'When making a mutation accessible to any user, we need to change @requireAuth to @skipAuth, @skipAuth says that authentication is not required and will allow anyone to anonymously send us a message',
}

export const full = () => {
  return <Article article={ARTICLE} />
}

export const summary = () => {
  return <Article article={ARTICLE} summary={true} />
}

export default { title: 'Components/Article' }
