import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Field, ErrorMessage, useField, FormikProps } from 'formik'
import classNames from 'classnames'
import * as React from 'react'
import dayjs from 'dayjs'

import * as S from './styles'

export interface MuiDatePickerProps {
  label: string
  name: string
  [key: string]: any // Permitir outras props adicionais
}

const MuiDatePicker: React.FC<MuiDatePickerProps> = (props) => {
  const { label, name, ...rest } = props
  const [field, meta, helpers] = useField(name)

  const divClassName = classNames('form-control', {
    error: meta.touched && meta.error
  })

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <S.InputContainer className={divClassName}>
        <S.StyledLabel htmlFor={name}>{label}</S.StyledLabel>
        <Field name={name}>
          {({ form, field }: { form: FormikProps<any>; field: any }) => {
            const { setFieldValue } = form
            const { value } = field

            // Converter value para Dayjs se necessário
            const dayjsValue = dayjs(value)

            return (
              <S.StyledDatePicker
                {...rest}
                value={dayjsValue.isValid() ? dayjsValue : null}
                onChange={(date) => date && setFieldValue(name, date.toDate())}
                // Adiciona a classe de erro quando há um erro
                error={meta.touched && meta.error ? true : false}
              />
            )
          }}
        </Field>
      </S.InputContainer>
      <S.ErrorMsg style={{ height: '10px' }}>
        <ErrorMessage name={name} />
      </S.ErrorMsg>
    </LocalizationProvider>
  )
}

export default MuiDatePicker
