import { Link, navigate, routes } from '@redwoodjs/router'
import { useRef } from 'react'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useEffect } from 'react'
import './../LoginPage/LoginPage.css'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.userDashboard())
    }
  }, [isAuthenticated])

  const usernameRef = useRef()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <main className="loginForm">
        <div>
          <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
          <Form onSubmit={onSubmit} className="rw-form-wrapper">
            <div>
              <Label name="username" errorClassName="rw-label rw-label-error">
                Email&ensp;&ensp;&ensp;&ensp;
              </Label>
              <TextField
                name="username"
                className="inputText"
                errorClassName="rw-input rw-input-error"
                ref={usernameRef}
                validation={{
                  required: {
                    value: true,
                    message: 'Username is required',
                  },
                }}
              />

              <FieldError name="username" className="rw-field-error" />
            </div>
            <div>
              <Label name="password" errorClassName="rw-label rw-label-error">
                Password
              </Label>
              <PasswordField
                name="password"
                className="inputText"
                errorClassName="rw-input rw-input-error"
                autoComplete="current-password"
                validation={{
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                }}
              />
            </div>

            <div className="lower">
              <Link to={routes.forgotPassword()} className="footer">
                Forgot Password
              </Link>

              <FieldError name="password" className="rw-field-error" />
              <Link to={routes.signup()} className="footer">
                Sign Up
              </Link>
              <Submit className="logInButtonForm">Login</Submit>
            </div>
          </Form>
        </div>
      </main>
    </>
  )
}

export default LoginPage
