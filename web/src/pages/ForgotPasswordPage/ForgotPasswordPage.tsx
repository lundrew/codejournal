import { useEffect, useRef } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Form, Label, TextField, Submit, FieldError } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import './../ForgotPasswordPage/ForgotPasswordPage.css'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await forgotPassword(data.username)

    if (response.error) {
      toast.error(response.error)
    } else {
      // The function `forgotPassword.handler` in api/src/functions/auth.js has
      // been invoked, let the user know how to get the link to reset their
      // password (sent in email, perhaps?)
      toast.success(
        'A link to reset your password was sent to ' + response.email
      )
      navigate(routes.login())
    }
  }

  return (
    <>
      <MetaTags title="Forgot Password" />

      <main className="forgotPasswordForm">
        <div>
          <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

          <Form onSubmit={onSubmit} className="rw-form-wrapper">
            <div>
              <Label
                name="username"
                className="rw-label"
                errorClassName="rw-label rw-label-error"
              >
                Email
              </Label>
              <TextField
                name="username"
                className="input"
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
              <Submit className="submitButtonForm">Submit</Submit>
            </div>
          </Form>
        </div>
      </main>
    </>
  )
}

export default ForgotPasswordPage
