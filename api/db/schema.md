model User {
  id      String   @id @map("_id")
  email   String   @unique
  name    String?
  role    Role     @default(USER)
  posts   Post[]
  profile Profile?
}

model Post {
  id Int @id @default(autoincrement())
  title String
  explanation String
  language String
  codeSnippet String
  image ?
  createdAt DateTime @default(now())
  author     User       @relation(fields: [authorId], references: [id])
  authorId   Int
  categories Category[] @relation(references: [id])

}
