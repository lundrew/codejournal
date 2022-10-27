import { useRef } from 'react'
import { useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import './../SignupPage/SignUpPage.css'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.userDashboard())
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const usernameRef = useRef<HTMLInputElement>()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await signUp({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <MetaTags title="Signup" />

      <main className="loginForm">
        <div>
          <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
          <div>
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
                    required: 'Email is required',
                    pattern: {
                      value: /[^@]+@[^.]+\..{2,}/,
                      message: 'Please enter a valid email address',
                    },
                  }}
                />
                <FieldError name="username" className="rw-field-error" />
              </div>
              <div>
                <Label
                  name="password"
                  errorClassName="rw-label rw-label-error"
                >
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
                <FieldError name="password" className="rw-field-error" />
              </div>

              <Link to={routes.login()} className="form-links">
                Log in
              </Link>
              <Submit className="signUpButton">Sign Up</Submit>
            </Form>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignupPage
