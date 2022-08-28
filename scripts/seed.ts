import { PrismaClient } from '@prisma/client'

// import { posts } from '../api/db/seeds/postsSeed'
// import { users } from '../api/db/seeds/postsSeed'
// import { comments } from '../api/db/seeds/postsSeed'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      name: 'admin',
      email: 'admin@admin.com',
      roles: 'admin',
      hashedPassword:
        'b4ef8162f548132277b3b7f00f62ea6e6ee1f1ab735220f0617e3839f6701569',
      salt: '3df2863b9b477d0e09e08e6446bf2263',
    },
  })

  await prisma.user.create({
    data: {
      name: 'moderator',
      email: 'moderator@moderator.com',
      roles: 'moderator',
      hashedPassword:
        '9e792cadd06dd1fd3338e5381b6381a48439a3ef3f8675fd2b6505f758a4c3a1',
      salt: 'a898f0fa0947f4c71d18aea132348aeb',
    },
  })

  await prisma.post.create({
    data: {
      title: 'title',
      explanation: 'explanation',
      codeLanguage: 'language',
      codeSnippet: 'code',
    },
  })
}

main()
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })

//for new seed data, run $npx prisma db seed --preview-feature
