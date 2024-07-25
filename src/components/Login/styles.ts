import { styled } from 'styled-components'
import { breakpoints, colors } from '../../styles'

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
  background-color: ${colors.black};
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
  padding: 5px;
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
  width: 350px;
  text-align: center;
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
`
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  border: 1px solid blue;
  margin-bottom: 10px;
  border-radius: 5px;
  &.error {
    border: 1px solid red;
  }
  > div {
    width: 100%;
    height: 100%;
    transition: all 2s ease;
    padding: 8px;
  }
  label {
    font-size: 18px;
    display: block;
    color: ${colors.golden};
    text-align: center;
    cursor: pointer;
    &.blueLabel {
      color: blue;
      font-size: 16px;
      text-align: left;
    }
  }

  input {
    background-color: ${colors.black};
    border: none;
    font-size: 16px;
    color: ${colors.blue};
    display: none;
    padding: 4px 0;
    width: 100%;
    &:focus {
      outline: none;
      border: none;
    }
    &.input-visible {
      display: block;
    }
    &.error-input {
      color: ${colors.red};
    }
    @media (max-width: ${breakpoints.tablet}) {
      margin-top: 16px;
    }
  }
`
export const Label = styled.label`
  transition: all 2s ease;
`
