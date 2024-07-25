import Button from '../Button'

import { setLoginVisibility } from '../../store/reducers/login'
import { setRegisterVisibility } from '../../store/reducers/register'

import CtwireImage from '../../assets/images/ctwire-image.png'

import * as S from './styles'
import { useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()

  const handleLoginVibility = () => {
    dispatch(setLoginVisibility(true))
  }
  const handleRegisterVibility = () => {
    dispatch(setRegisterVisibility(true))
  }
  return (
    <>
      <S.HomeContainer>
        <div>
          <h1>
            <img src={CtwireImage} alt="Logo CTwire" />
          </h1>
        </div>
        <S.HomeRegister>
          <h2>At the moment</h2>
          <p className="sign-up">Sign up Today</p>
          <Button type="button" onClick={handleRegisterVibility}>
            Create new account
          </Button>
          <p className="term">
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including the Use of Cookies.
          </p>
          <p>Already have an account?</p>
          <Button type="button" onClick={handleLoginVibility}>
            Login
          </Button>
        </S.HomeRegister>
      </S.HomeContainer>
    </>
  )
}

export default Home
