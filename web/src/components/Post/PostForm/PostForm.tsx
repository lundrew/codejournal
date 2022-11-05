import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  SelectField,
  Submit,
  NumberField,
} from '@redwoodjs/forms'

import './PostForm.css'
import CheckBox from './../../Assets/checkbox.png'

export const languages = [
  'All Posts',
  'HTML',
  'CSS',
  'Javascript',
  'TypeScript',
  'Python',
  'SQL',
  'NoSQL',
  'Ruby',
  'Java',
  'C++',
  'C#',
  'C',
  'R',
  'Go',
  'Swift',
  'PHP',
  'Rust',
  'Kotlin',
  'Perl',
  'Scala',
  'Scheme',
]

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
          name="codeLanguage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Language
        </Label>

        <SelectField
          name="codeLanguage"
          className="language-input"
          defaultValue={props.post?.codeLanguage}
          validation={{
            required: true,
          }}
        >
          <option value="">Select a Language</option>
          {languages &&
            languages.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
        </SelectField>
        <FieldError name="selectSingle" style={{ color: 'red' }} />

        <FieldError name="codeLanguage" className="rw-field-error" />

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
          className="title-rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          maxLength={80}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="codeSnippet"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Code Snippet
        </Label>

        <TextAreaField
          name="codeSnippet"
          defaultValue={props.post?.codeSnippet}
          className="snippet-input"
          placeholder="Insert code snippet here..."
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          spellCheck="false"
          maxLength={5000}
        />

        <FieldError name="codeSnippet" className="rw-field-error" />

        <Label
          name="explanation"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Documentation
        </Label>

        <TextAreaField
          name="explanation"
          defaultValue={props.post?.explanation}
          className="explanation-input"
          placeholder="Explain code here..."
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          maxLength={5000}
        />

        <FieldError name="explanation" className="rw-field-error" />

        <NumberField
          name="authorId"
          defaultValue={currentUser.id}
          validation={{ required: true }}
          hidden
        />

        <div className="rw-button-group">
          <Submit disabled={props.loading} id="logButton">
            Log
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PostForm
