import { Private, Router, Route, Set } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import AdminLayout from 'src/layouts/AdminLayout'
import DashboardLayout from 'src/layouts/DashboardLayout'
import HomePage from './pages/HomePage/HomePage'
import UserDashboardPage from './pages/UserDashboardPage/UserDashboardPage'
import PostsListPage from './pages/PostsListPage/PostsListPage'
import AddPostPage from './pages/AddPostPage/AddPostPage'

const Routes = () => {
  return (
    <Router>
      <Set wrap={AdminLayout}>
        <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/admin/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgotPassword" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/about" page={AboutPage} name="about" />
      <Set private unauthenticated="home" wrap={DashboardLayout}>
        <Route path="/userdashboard" page={UserDashboardPage} name="userDashboard" />
        <Route path="/addpost" page={AddPostPage} name="addPost" />
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
        {/* <Route path="/postslist" page={PostsListPage} name="postsList" />  */}
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
