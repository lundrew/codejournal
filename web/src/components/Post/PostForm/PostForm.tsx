import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const PostForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.post?.id)
  }

  const { currentUser } = useAuth()

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.post?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="explanation"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Explanation
        </Label>

        <TextField
          name="explanation"
          defaultValue={props.post?.explanation}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="explanation" className="rw-field-error" />

        <Label
          name="codeLanguage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Code language
        </Label>

        <TextField
          name="codeLanguage"
          defaultValue={props.post?.codeLanguage}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="codeLanguage" className="rw-field-error" />

        <Label
          name="codeSnippet"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Code snippet
        </Label>

        <TextField
          name="codeSnippet"
          defaultValue={props.post?.codeSnippet}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="codeSnippet" className="rw-field-error" />

        <Label
          name="authorId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Author ID
        </Label>

        <TextField
          name="authorId"
          defaultValue={currentUser.id}
          typeof="int"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: false, valueAsNumber: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PostForm
