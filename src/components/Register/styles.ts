import { styled } from 'styled-components'
import InputMask from 'react-input-mask'

import { breakpoints, colors } from '../../styles'

type Props = {
  $maxwidth?: string
  $marginTop?: string
  $marginBottom?: string
  $textAlign?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  opacity: 0.1;
`

export const LoginModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  height: 500px;
  border-radius: 20px;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 256, 0.1);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  &.visible {
    opacity: 1;
    visibility: visible;
  }
`

export const ModalLoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 20px;
  background-color: ${colors.black};
  color: ${colors.golden};
  position: relative;
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;
  }
`
export const CloseModal = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  cursor: pointer;
`
export const ModalTitle = styled.div`
  h3 {
    margin: 24px 0;
    font-size: 30px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const ModalBody = styled.div`
  width: 300px;
  button {
    font-size: 14px;
    padding: 8px;
    width: 100%;
    margin-top: 24px;
  }
  form {
    h3 {
      text-align: center;
      margin-bottom: 5px;
      font-weight: 400;
    }
  }
`

export const Row = styled.div<Props>`
  display: flex;
  align-items: flex-end;
  column-gap: 5px;
  margin-top: ${(props) => props.$marginTop || '0'};
  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const InputField = styled.input<Props>`
  background-color: ${colors.black};
  border: none;
  padding: 5px 5px;
  width: 100%;
  font-size: 16px;
  color: ${colors.blue};
  display: none;
  text-align: ${(props) => props.$textAlign || 'left'};
  &:focus {
    outline: none;
    border: none;
  }
  &.input-visible {
    display: block;
  }
  &.error {
    color: ${colors.red};
  }
  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 16px;
  }
`
export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Errors = styled.div`
  height: 15px;
  font-size: 10px;
  color: ${colors.red};
  margin-bottom: 10px;
`
export const StyledInputMask = styled(InputMask)<Props>`
  background-color: ${colors.black};
  border: none;
  padding: 5px 5px;
  width: 100%;
  font-size: 16px;
  color: ${colors.blue};
  display: none;
  text-align: ${(props) => props.$textAlign || 'left'};
  &:focus {
    outline: none;
    border: none;
  }
  &.input-visible {
    display: block;
  }
  &.error {
    color: ${colors.red};
  }
  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 16px;
  }
`
