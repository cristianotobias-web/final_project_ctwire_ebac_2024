import * as React from 'react'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../FormikControl'
import Button from '../Button'
import { setRegisterVisibility } from '../../store/reducers/register'

import styled from 'styled-components'
import { useDispatch } from 'react-redux'

interface FormValues {
  nameRegister: string
  phoneRegister: string
  birthRegister: Date | null
  currentPassword: string
  confirmPassword: string
}

const FormStep = styled.div<{ hidden: boolean }>`
  display: ${(props) => (props.hidden ? 'none' : 'block')};
`

const FormContainer: React.FC = () => {
  const dispatch = useDispatch()
  const [nextStep, setNextStep] = React.useState(false)
  const initialValues: FormValues = {
    nameRegister: '',
    phoneRegister: '',
    birthRegister: null,
    currentPassword: '',
    confirmPassword: ''
  }

  const validationSchema: Yup.Schema<FormValues> = Yup.object().shape({
    nameRegister: Yup.string()
      .min(3, 'The name must be at least 3 characters long!')
      .matches(/^[A-Za-z ]*$/, 'The name must contain only letters and spaces!')
      .test(
        'two-names',
        'The name must contain at least two names!',
        (value) => {
          if (!value) return false
          const names = value.split(' ')
          return names.length >= 2
        }
      )
      .test(
        'names-two-letters',
        'Each name must contain at least two characters!',
        (value) => {
          if (!value) return false
          const names = value.trim().split(/\s+/)
          const isValid = names.every((name) => name.length >= 2)
          return isValid
        }
      )
      .test(
        'no-trailing-space',
        'The name must not have trailing spaces!',
        (value) => {
          if (!value) return false
          return value === value.trim()
        }
      )
      .required('This field is required!'),
    phoneRegister: Yup.string()
      .test('Brazil-area', 'The DDD must be between 11 and 99!', (value) => {
        if (!value) return false
        const area = value.slice(5, 7)
        return Number(area) >= 11 && Number(area) <= 99
      })
      .test('valid-phone', 'Invalid phone number format!', (value) => {
        if (!value) return false
        const phoneNumber = value.slice(9)
        const firstPart = value.slice(9, 10)
        const secondPart = value.slice(15, 16)
        return (
          phoneNumber !== '00000-0000' &&
          firstPart !== '0' &&
          secondPart !== '0'
        )
      })
      .min(19, 'Invalid Phone number!')
      .max(19, 'Invalid Phone number!')
      .required('This field is required!'),
    birthRegister: Yup.date()
      .max(new Date(), 'Date cannot be in the future.')
      .test('is-adult', 'You must be at least 18 years old.', function (value) {
        const eighteenYearsAgo = new Date()
        eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18)
        return new Date(value!) <= eighteenYearsAgo
      })
      .test('not-null', 'This field is required!', function (value) {
        if (value) {
          return true
        } else {
          return false
        }
      })
      .required('This field is required!')
      .nullable(),
    currentPassword: Yup.string()
      .min(6, 'Must be 6 digits!')
      .max(6, 'Must be 6 digits!')
      .matches(
        /^(?!.*(.)\1).*$/,
        'Password cannot have two consecutive digits.'
      )
      .required('This field is required!'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('currentPassword')], 'The passwords do not match!')
      .required('This field is required!')
  })

  const onSubmit = (values: FormValues) => {
    console.log('Form data ', values)
    dispatch(setRegisterVisibility(false))
    // Reset form fields
    resetForm()
    // Hide the form
  }

  const validateFirstStep = async (formik: FormikProps<FormValues>) => {
    const errors = await formik.validateForm()

    formik.setTouched({
      nameRegister: true,
      phoneRegister: true,
      birthRegister: true
    })

    if (
      !errors.nameRegister &&
      !errors.phoneRegister &&
      !errors.birthRegister
    ) {
      // Set phoneRegister as readonly and proceed to the next step
      formik.setFieldValue('phoneRegister', formik.values.phoneRegister)
      // Clear password-related errors and touched state
      formik.setFieldValue('currentPassword', '')
      formik.setFieldValue('confirmPassword', '')
      formik.setFieldTouched('currentPassword', false, false)
      formik.setFieldTouched('confirmPassword', false, false)
      setNextStep(true)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormStep hidden={nextStep}>
            <FormikControl
              control="input"
              type="text"
              label="Name"
              name="nameRegister"
            />

            <FormikControl
              control="input"
              type="text"
              label="Phone"
              name="phoneRegister"
              mask="+55 (99) 99999-9999"
            />

            <FormikControl
              control="date"
              type="text"
              label="Birth"
              name="birthRegister"
            />
            <Button type="button" onClick={() => validateFirstStep(formik)}>
              Next
            </Button>
          </FormStep>
          <FormStep hidden={!nextStep}>
            <FormikControl
              control="input"
              type="text"
              label="Phone"
              name="phoneRegister"
              readOnly
            />
            <FormikControl
              control="input"
              label="Password"
              name="currentPassword"
              mask="999999"
              showEye={true}
              type="password"
            />
            <FormikControl
              control="input"
              label="Confirm Password"
              name="confirmPassword"
              mask="999999"
              showEye={true}
              type="password"
            />
            <Button type="submit">Register</Button>
          </FormStep>
        </Form>
      )}
    </Formik>
  )
}

export default FormContainer
function resetForm() {
  throw new Error('Function not implemented.')
}

function setFormSubmitted(arg0: boolean) {
  throw new Error('Function not implemented.')
}
