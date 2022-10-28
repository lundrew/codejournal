import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import { useRef, useEffect } from 'react'
import './../User/User.css'

const User = ({ error, loading, user, onSave }) => {
  const ref = useRef(true)

  useEffect(() => {
    const firstRender = ref.current

    firstRender
      ? (ref.current = false)
      : setTimeout(() => {
          window.location.reload()
        }, 10)
  })

  return (
    <div className="profileForm">
      <div className="cardTitle">Edit Profile</div>

      <div className="theForm">
        <Form onSubmit={onSave} error={error}>
          <FormError error={error} />

          <Label name="name" className="rw-label">
            Name
          </Label>

          <TextField
            name="name"
            defaultValue={user.name}
            className="rw-input"
          />

          <FieldError name="name" />

          <Label
            name="email"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Email
          </Label>

          <TextField
            name="email"
            defaultValue={user.email}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{
              required: 'Email is required',
              pattern: {
                value: /[^@]+@[^.]+\..{2,}/,
                message: 'Please enter a valid email address',
              },
            }}
          />

          <FieldError name="email" className="rw-field-error" />

          <div>
            <Submit className="signUpButton">Save</Submit>
          </div>
        </Form>
      </div>
    </div>
  )
}

export { User }
