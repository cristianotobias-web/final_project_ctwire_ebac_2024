import styled from 'styled-components'
import { colors } from '../../styles'

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px 20px;
  color: ${colors.golden};
`

export const HomeRegister = styled.div`
  h2 {
    font-size: 60px;
    font-weight: 400;
  }
  p {
    margin-bottom: 16px;
  }
  .sign-up {
    font-size: 32px;
  }
  .term {
    font-size: 10px;
    max-width: 300px;
    margin-top: 5px;
  }
`
