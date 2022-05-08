import React, { useCallback } from 'react';
import { regexForEmail } from '../../utils/constants';

export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [inputs, setInputs] = React.useState([]);
  

  React.useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [errors])

  React.useEffect(() => {
    setErrors(validate())
  }, [values])

  
  const validate = () => {
    const errors = {};
            
    if(inputs.some(input => input.name === 'username')) {
      if(!values.username) {
        errors.username = 'Необходимо заполить имя';
      } else if (values.username.length < 2 || values.username.length > 30) {
        errors.username = 'Имя должно содержать от 2 до 30 символов';
      }
    }
    
    if(inputs.some(input => input.name === 'email')) {
      if(!values.email) {
        errors.email = 'Необходимо указать email';
      } else if(!regexForEmail.test(values.email)) {
        errors.email = 'Некорректный формат email';
      }
    }

    if(inputs.some(input => input.name === 'password')) {
      if(!values.password) {
        errors.password = 'Необходимо ввести пароль';
      } else if (values.password.length < 8) {
        errors.password = 'Пароль должен содержать минимум 8 символов';
      }
    }
    
    return errors;
  };


  const handleChange = (event, inputs) => {
    setInputs(inputs);
    const target = event.target;
    const name = target.name;
    const value = target.value;
    
    setValues({...values, [name]: value});
  };

  
  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
