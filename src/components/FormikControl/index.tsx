import * as React from 'react' // Importar React para uso do JSX
import Input, { InputProps } from './InputField' // Importar InputProps de './InputField'
import MuiDatePicker, { MuiDatePickerProps } from './MuiDatePicker' // Importar MuiDatePickerProps de './MuiDatePicker'

export interface FormikControlProps {
  control: 'input' | 'date' // Control deve ser uma string com valor 'input' ou 'date'
  [key: string]: any // Permitir outras props adicionais
}

const FormikControl: React.FC<FormikControlProps> = (props) => {
  const { control, ...rest } = props

  switch (control) {
    case 'input':
      return <Input {...(rest as InputProps)} /> // Type assertion para InputProps
    case 'date':
      return <MuiDatePicker {...(rest as MuiDatePickerProps)} /> // Type assertion para MuiDatePickerProps
    default:
      return null
  }
}

export default FormikControl
