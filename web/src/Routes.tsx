import { Router, Route, Set } from '@redwoodjs/router'

import AdminLayout from 'src/layouts/AdminLayout'
import DashboardLayout from 'src/layouts/DashboardLayout'

import AddPostPage from './pages/AddPostPage/AddPostPage'
import HomePage from './pages/HomePage/HomePage'
import UserDashboardPage from './pages/UserDashboardPage/UserDashboardPage'
import AdminPostsPage from 'src/pages/Admin/AdminPostsPage'
import AdminPostPage from './pages/Admin/AdminPostPage'

const Routes = () => {
  return (
    <Router>
      <Set private unauthenticated="userDashboard" roles="admin" wrap={AdminLayout}>
        <Route path="/admin/posts/{id:Int}" page={AdminPostPage} name="adminPost" />
        <Route path="/admin/posts" page={AdminPostsPage} name="adminPosts" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgotPassword" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/about" page={AboutPage} name="about" />
      <Set private unauthenticated="home" wrap={DashboardLayout}>
        <Route path="/userdashboard" page={UserDashboardPage} name="userDashboard" />
        <Route path="/user" page={UserPage} name="user" />
        <Route path="/addpost" page={AddPostPage} name="addPost" />
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
