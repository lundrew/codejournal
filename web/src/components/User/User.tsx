import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const User = ({ error, loading, user, onSave }) => {
  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSave} error={error}>
        <FormError error={error} />

        <Label name="name" className="rw-label">
          Name
        </Label>

        <TextField name="name" defaultValue={user.name} className="rw-input" />

        <FieldError name="name" />

        <Label name="email" className="rw-label">
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={user.email}
          className="rw-input"
        />

        <FieldError name="email" />

        <div>
          <Submit className="" disabled={loading}>
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export { User }
