import type { Post } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import CommentForm from 'src/components/CommentForm'
import CommentsCell from 'src/components/CommentsCell'

// const truncate = (text: string, length: number) => {
//   return text.substring(0, length) + '...'
// }

const truncate = (str: string, maxlength: number) => {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str
}

interface Props {
  article: Omit<Post, 'createdAt'>
  summary?: boolean
}

const Article = ({ article, summary = false }: Props) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div className="mt-2 text-gray-900 font-light">
        Code Snippet:{' '}
        {summary ? truncate(article.codeSnippet, 100) : article.codeSnippet}
      </div>
      <div>Language: {article.codeLanguage}</div>
      <div>Explanation: {article.explanation}</div>
      <div>Posted at: {article.createdAt}</div>
      <div className="mt-12">
        <CommentForm postId={article.id} />
        <div className="mt-12">
          <CommentsCell postId={article.id} />
        </div>
      </div>
    </article>
  )
}

export default Article

