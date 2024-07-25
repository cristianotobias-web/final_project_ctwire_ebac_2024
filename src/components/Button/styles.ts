import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  padding: 10px 6px;
  background-color: ${colors.pinkLight};
  color: ${colors.white};
  background-color: ${colors.blue};
  width: 300px;
  border-radius: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  font-weight: 900;
`
export const ButtonLink = styled(Link)`
  background-color: ${colors.pink};
  color: ${colors.pinkLight};
  padding: 5px;
  text-decoration: none;
`
