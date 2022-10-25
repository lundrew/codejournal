import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = () => {
  return db.user.findUnique({
    where: { id: context.currentUser.id },
  })
}

export const updateUser: MutationResolvers['updateUser'] = async ({ input }) =>
  await db.user.update({
    data: input,
    where: { id: context.currentUser.id },
  })

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}
