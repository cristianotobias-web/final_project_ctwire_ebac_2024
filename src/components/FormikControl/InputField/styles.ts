import styled from 'styled-components'
import { colors } from '../../../styles'

export const InputContainer = styled.div`
  position: relative;
  &.form-control {
    margin-top: 8px;
    width: 100%;
    background-color: ${colors.black};
    border: 2px solid ${colors.blue};
    font-size: 16px;
    color: ${colors.blue};
  }

  &.form-control.error {
    border: 1px solid red;
  }

  input {
    width: 100%;
    background-color: ${colors.black};
    border: none;
    font-size: 16px;
    color: ${colors.blue}; /* default color */

    &.error-input {
      color: red !important; /* color when there is an error */
    }
  }
`
export const ErrorMsg = styled.div`
  font-size: 10px;
  color: ${colors.red};
  padding-left: 10px;
`
export const Eye = styled.img`
  position: absolute;
  bottom: 11px;
  right: 15px;
  cursor: pointer;
`
