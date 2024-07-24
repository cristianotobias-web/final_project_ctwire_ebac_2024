import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { setLoginVisibility } from '../../store/reducers/login'

import Button from '../Button'

import logo from '../../assets/images/ctwire-logo.png'
import close from '../../assets/images/close.png'

import * as S from './styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ReactInputMask from 'react-input-mask'

const Login = () => {
  const { isVisible } = useSelector((state: RootReducer) => state.login)
  const [inputPhoneVisible, setInputPhoneVisible] = useState(false)
  const [inputPasswordVisible, setInputPasswordVisible] = useState(false)
  const dispatch = useDispatch()
  const [isReadOnly, setIsReadOnly] = useState(true)

  const handleLoginVibility = () => {
    dispatch(setLoginVisibility(false))
  }

  const handleBlurInputs = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (!value) {
      if (name === 'phoneLogin') {
        setInputPhoneVisible(false)
      } else if (name === 'passwordLogin') {
        setInputPasswordVisible(false)
      }
    }
  }
  const formik = useFormik({
    initialValues: {
      phoneLogin: '',
      passwordLogin: ''
    },
    validationSchema: Yup.object().shape({
      phoneLogin: Yup.string()
        .test(
          'Brazil-area',
          'The DDD must be between 11 and 99!',
          (value?: string) => {
            if (!value) return false
            const area = value.slice(5, 7)
            return Number(area) >= 11 && Number(area) <= 99
          }
        )
        .test(
          'valid-phone',
          'Invalid phone number format!',
          (value?: string) => {
            if (!value) return false
            const phoneNumber = value.slice(9)
            const firstPart = value.slice(9, 10)
            const secondPart = value.slice(15, 16)
            return (
              phoneNumber !== '00000-0000' &&
              firstPart !== '0' &&
              secondPart !== '0'
            )
          }
        )
        .min(19, 'Invalid Phone number!')
        .max(19, 'Invalid Phone number!')
        .required('This field is required!'),
      passwordLogin: Yup.string().required('This field is required!')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

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
                <h3>Sign in to CTwire</h3>
              </S.ModalTitle>
              <S.ModalBody>
                <form onSubmit={formik.handleSubmit}>
                  <S.InputGroup
                    className={
                      formik.errors.phoneLogin && formik.touched.phoneLogin
                        ? 'error'
                        : ''
                    }
                  >
                    <div>
                      <S.Label
                        htmlFor="phoneLogin"
                        className={inputPhoneVisible ? 'blueLabel' : ''}
                        onClick={() => setInputPhoneVisible(true)}
                      >
                        Phone user
                      </S.Label>
                      <ReactInputMask
                        id="phoneLogin"
                        name="phoneLogin"
                        type="text"
                        autoComplete="username"
                        className={`${
                          inputPhoneVisible ? 'input-visible' : ''
                        } ${
                          formik.errors.phoneLogin && formik.touched.phoneLogin
                            ? 'error-input'
                            : ''
                        }`}
                        onFocus={() => setIsReadOnly(false)}
                        onBlur={() => {
                          setIsReadOnly(true)
                          handleBlurInputs
                          formik.handleBlur
                        }}
                        onChange={formik.handleChange}
                        mask={`+55 (99) 99999-9999`}
                        maskChar={null}
                        readOnly={isReadOnly}
                      />
                    </div>
                  </S.InputGroup>
                  {formik.errors.phoneLogin}

                  <S.InputGroup>
                    <div>
                      <S.Label
                        htmlFor="passwordLogin"
                        className={inputPasswordVisible ? 'blueLabel' : ''}
                        onClick={() => setInputPasswordVisible(true)}
                      >
                        Enter the password
                      </S.Label>
                      <ReactInputMask
                        id="passwordLogin"
                        name="passwordLogin"
                        type="password"
                        mask={`999999`}
                        maskChar={null}
                        className={inputPasswordVisible ? 'input-visible' : ''}
                        autoComplete="current-password"
                        onBlur={handleBlurInputs}
                      />
                    </div>
                  </S.InputGroup>
                  {formik.errors.passwordLogin}
                  <Button type="submit">Login</Button>
                </form>
              </S.ModalBody>
              <S.CloseModal onClick={handleLoginVibility}>
                <img src={close} alt="Icon of close" />
              </S.CloseModal>
            </S.ModalLoginContent>
          </S.LoginModal>
        </>
      )}
    </>
  )
}

export default Login
