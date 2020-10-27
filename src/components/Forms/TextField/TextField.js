import React from 'react';
import './styles.scss';
import { Field, ErrorMessage } from 'formik';

const TextField = ({ name, type = 'text', placeholder = '', label }) => {
   return (
      <div className='textField'>
         <div className='form__group field'>
            <Field
               type={type}
               className='form__field'
               placeholder={placeholder}
               name={name}
               autoComplete='off'
            />
            <label htmlFor={name} className='form__label'>
               {label}
            </label>
         </div>
         <div className='errors'>
            <ErrorMessage name={name} />
         </div>
      </div>
   );
};

export default TextField;
