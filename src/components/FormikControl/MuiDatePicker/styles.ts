import { DatePicker } from '@mui/x-date-pickers'
import { styled } from 'styled-components'
import { colors } from '../../../styles'

export const InputContainer = styled.div`
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
`

export const StyledDatePicker = styled(DatePicker)<{ error?: boolean }>`
  & .MuiInputBase-root {
    color: ${(props) => (props.error ? 'red !important' : colors.blue)};
    border: none;
    border-radius: 4px;
    height: 20px;
  }
  & .MuiInputBase-input {
    font-size: 16px !important;
    padding: 0;
    border: none;
    color: ${(props) => (props.error ? 'red !important' : colors.blue)};
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  & .MuiSvgIcon-root {
    color: ${colors.blue};
    margin-top: -25px;
    margin-right: -15px;
  }
  &.error-input {
    color: red !important; /* Style for error */
  }
`

export const StyledLabel = styled.label`
  display: block;
  font-size: 16px;
  z-index: 2;
`

export const ErrorMsg = styled.div`
  font-size: 10px;
  color: ${colors.red};
  padding-left: 10px;
`
