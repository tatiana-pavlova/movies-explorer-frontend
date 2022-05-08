import React from 'react';

function FormInput(props) {
  const [focused, setFocused] = React.useState(false);

  const handleFocus = () => {
    setFocused(true);
  }

  return(
    <fieldset className='register__fieldset'>
      <label htmlFor={props.name} className='register__label'>{props.label}</label>
      <input type={props.type} name={props.name} className='register__input' placeholder={props.placeholder} 
        id={props.name} onChange={props.onChange} onBlur={handleFocus} focused={focused.toString()} 
        disabled={props.isDataSending ? true : false}></input>
      <span className='register__input-error'>{props.error}</span>
    </fieldset>
  )
}

export default FormInput;
