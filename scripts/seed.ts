import { PrismaClient } from '@prisma/client'

import { comments } from '../api/db/seeds/commentsSeed'
import { posts } from '../api/db/seeds/postsSeed'
import { users } from '../api/db/seeds/usersSeed'

const prisma = new PrismaClient()

async function runSeeds() {
  users.forEach(async (user) => {
    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        roles: user.roles,
        hashedPassword: user.hashedPassword,
        salt: user.salt,
      },
    })
  })

  posts.forEach(async (post) => {
    await prisma.post.create({
      data: {
        title: post.title,
        explanation: post.explanation,
        codeLanguage: post.codeLanguage,
        codeSnippet: post.codeSnippet,
        authorId: post.authorId,
        comments: {
          create: [
            {
              name: 'first comment',
              body: 'first body',
              // postId: 1,
            },
            {
              name: 'second comment',
              body: 'second body',
              // postId: 2,
            },
            {
              name: 'third comment',
              body: 'third body',
              // postId: 3,
            },
            {
              name: 'fourth comment',
              body: 'fourth body',
              // postId: 4,
            },
          ],
        },
      },
    })
  })
}

// function runSeedComments() {
//   comments.forEach(async (comment) => {
//     await prisma.comment.create({
//       data: {
//         name: comment.name,
//         body: comment.body,
//         postId: comment.postId,
//       },
//     })
//   })
// }

runSeeds()
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
  // .finally(() => {
  //   runSeedComments()
  // })
  .finally(() => {
    prisma.$disconnect()
  })

//for new seed data, run $npx prisma db seed
//to reset database, run $yarn redwood prisma migrate reset
