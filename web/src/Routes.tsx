import { Private, Router, Route, Set } from '@redwoodjs/router'

import AdminLayout from 'src/layouts/AdminLayout'
import DashboardLayout from 'src/layouts/DashboardLayout'

import AddPostPage from './pages/AddPostPage/AddPostPage'
import HomePage from './pages/HomePage/HomePage'
import PostsListPage from './pages/PostsListPage/PostsListPage'
import UserDashboardPage from './pages/UserDashboardPage/UserDashboardPage'

const Routes = () => {
  return (
    <Router>
      <Set wrap={AdminLayout}>
        <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/admin/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Set>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgotPassword" page={ForgotPasswordPage} name="signup" />
      </Set>
      <Set wrap={DashboardLayout}>
        <Route path="/userdashboard" page={UserDashboardPage} name="userDashboard" />
        <Route path="/user" page={UserPage} name="user" />
        <Route path="/postslist" page={PostsListPage} name="postsList" />
        <Route path="/addpost" page={AddPostPage} name="addPost" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
