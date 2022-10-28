import AdminPostCell from 'src/components/AdminPostCell'

type AdminPostPageProps = {
  id: number
}

const AdminPostPage = ({ id }: AdminPostPageProps) => {
  return <AdminPostCell id={id} />
}

export default AdminPostPage
