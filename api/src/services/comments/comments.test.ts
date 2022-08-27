import { db } from 'src/lib/db'

import { comments, createComment } from './comments'
import type { StandardScenario } from './comments.scenarios'

describe('comments', () => {
  scenario(
    'returns all comments for a single post from the database',
    async (scenario) => {
      const result = await comments({ postId: scenario.comment.rob.postId })
      const post = await db.post.findUnique({
        where: { id: scenario.comment.rob.postId },
        include: { comments: true },
      })
      expect(result.length).toEqual(post.comments.length)
    }
  )

  // ...
})
