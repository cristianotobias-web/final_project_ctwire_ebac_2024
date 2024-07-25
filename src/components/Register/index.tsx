import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../Button'

import { RootReducer } from '../../store'
import { setRegisterVisibility } from '../../store/reducers/register'

import logo from '../../assets/images/ctwire-logo.png'
import close from '../../assets/images/close.png'

import * as S from './styles'
import FormContainer from '../FormikContainer'

const Register = () => {
  const { isVisible } = useSelector((state: RootReducer) => state.register)
  const [inputNameVisible, setInputNameVisible] = useState(false)
  const [inputPasswordVisible, setInputPasswordVisible] = useState(false)
  const [numCaractersName, setNumCaractersName] = useState(0)

  const dispatch = useDispatch()

  const handleRegisterVibility = () => {
    dispatch(setRegisterVisibility(false))
  }

  // const handleBlurInputs = (e: React.FocusEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target
  //   if (!value) {
  //     if (name === 'nameRegister') {
  //       setInputNameVisible(false)
  //     } else if (name === 'passwordRegister') {
  //       setInputPasswordVisible(false)
  //     }
  //   }
  // }

  // const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target
  //   if (name === 'nameRegister') {
  //     const formattedValue = formatNameInput(value)
  //     setNumCaractersName(formattedValue.length)
  //     form.setFieldValue(name, formattedValue)
  //   } else if (name === 'phoneRegister') {
  //     form.setFieldValue('phoneRegisterConfirmed', value)
  //   } else if (name === 'birthDate') {
  //     form.setFieldValue('birthDate', value)
  //     form.setFieldTouched('birthDate', true)
  //     console.log(form.touched.birthDate)
  //     console.log(form.errors.birthDate)
  //   }

  //   form.handleChange(e) // Chama o handleChange do formik para outros campos
  // }

  // const handleNextStep = () => {
  //   // Validar os campos até yearRegister antes de avançar
  //   form.validateField('nameRegister')
  //   form.validateField('phoneRegister')
  //   form.validateField('birthDate')

  //   // Se todos os campos até yearRegister forem válidos, avance para a próxima etapa
  //   if (
  //     form.errors.nameRegister ||
  //     form.errors.phoneRegister ||
  //     form.errors.birthDate
  //   ) {
  //     return
  //   }

  //   setNextStep(true)
  // }

  // const form = useFormik({
  //   initialValues: {
  //     nameRegister: '',
  //     phoneRegister: '',
  //     phoneRegisterConfirmed: '',
  //     currentPassword: '',
  //     confirmPassword: '',
  //     birthDate: null
  //   },
  //   validationSchema: Yup.object({
  //
  //     phoneRegister: Yup.string()

  //     birthDate: Yup.date().nullable().required('Birth date is required!')
  //   }),
  //   onSubmit: (values) => {
  //     console.log(values)
  //   }
  // })

  return (
    <>
      {isVisible && (
        <>
          <S.Overlay />
          <S.LoginModal className="visible">
            <S.ModalLoginContent className="container">
              <div>
                <img src={logo} alt="Logo of CTwire" />
              </div>
              <S.ModalTitle>
                <h3>Join to CTwire</h3>
              </S.ModalTitle>
              <S.ModalBody>
                <FormContainer />
              </S.ModalBody>
              <S.CloseModal onClick={handleRegisterVibility}>
                <img src={close} alt="Icon of close" />
              </S.CloseModal>
            </S.ModalLoginContent>
          </S.LoginModal>
        </>
      )}
    </>
  )
}

export default Register
