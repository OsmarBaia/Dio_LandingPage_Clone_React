import React from 'react'
import { InputContainer, InputText, IconContainer, ErrorText} from './styles';
import { Controller } from "react-hook-form";

const Input = ({ leftIcon, name, control, errorMessage, required = false, ...rest }) => {
  return (
    <>
    <InputContainer>
      {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
      
      {control ? (
        <Controller
          name={name}
          control={control}
          rules={{ required }}
          defaultValue=""
          render={({ field }) => (
            <InputText 
              value={field.value || ''}
              onChange={field.onChange}
              onBlur={field.onBlur}
              ref={field.ref}
              {...rest}
            />
          )}
        />
      ) : (
        <InputText name={name} {...rest} />
      )}
    </InputContainer>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText>:null}
  </>
  )
}

export { Input };