import React, { useState } from 'react'
import { Field, ErrorMessage, useField, FormikProps } from 'formik'
import InputMask from 'react-input-mask'
import { InputContainer, ErrorMsg, Eye } from './styles'
import classNames from 'classnames'
import eye from '../../../assets/images/eye.svg'

export interface InputProps {
  label: string
  name: string
  mask?: string
  showEye?: boolean
  type?: string
  [key: string]: any // Permitir outras props adicionais
}

const formatName = (value: string) => {
  if (typeof value !== 'string') return ''

  let formattedValue = value.replace(/^\s+/, '')

  if (formattedValue.includes(' ')) {
    const names = formattedValue.split(/\s+/)
    formattedValue = names
      .map((name) => {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
      })
      .join(' ')
  } else {
    formattedValue =
      formattedValue.charAt(0).toUpperCase() +
      formattedValue.slice(1).toLowerCase()
  }

  return formattedValue
}

const Input = ({
  label,
  name,
  mask,
  showEye,
  type = 'text',
  ...rest
}: InputProps) => {
  const [field, meta, helpers] = useField(name)
  const [showPassword, setShowPassword] = useState(false)
  const [isReadOnly, setIsReadOnly] = useState(true)

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    form: FormikProps<any>
  ) => {
    const formattedValue = formatName(e.target.value)
    helpers.setValue(formattedValue)
  }

  const divClassName = classNames('form-control', {
    error: meta.touched && meta.error
  })

  return (
    <>
      <InputContainer className={divClassName}>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} {...rest}>
          {({ field, form }: { field: any; form: FormikProps<any> }) => {
            const InputComponent = mask ? InputMask : 'input'

            return (
              <InputComponent
                {...field}
                {...rest}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(e, form)
                }
                onFocus={() => setIsReadOnly(false)}
                onBlur={() => setIsReadOnly(true)}
                mask={mask}
                maskChar={null}
                className={meta.touched && meta.error ? 'error-input' : ''}
                type={showPassword && type === 'password' ? 'text' : type}
                autocomplete="off"
                readOnly={isReadOnly}
              />
            )
          }}
        </Field>
        {showEye && (
          <Eye src={eye} alt="Icon of eye" onClick={toggleShowPassword} />
        )}
      </InputContainer>
      <ErrorMsg style={{ height: '15px' }}>
        <ErrorMessage name={name} className="error"></ErrorMessage>
      </ErrorMsg>
    </>
  )
}

export default Input
