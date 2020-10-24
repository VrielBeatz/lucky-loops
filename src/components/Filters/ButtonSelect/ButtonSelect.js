import React, { useState } from 'react';
import './styles.scss';
import { Formik, Form, Field } from 'formik';

const ButtonSelect = ({ config }) => {
   const [isActive, setIsActive] = useState(false);
   const initialValues = {
      [config.selectName]: config.data[0].label,
   };
   const active = true;

   const handleOpen = () => {
      setIsActive((prev) => !prev);
   };
   return (
      <div className='buttonSelect-container'>
         <h2>{config.selectLabel}</h2>
         <Formik initialValues={initialValues}>
            {({ values }) => (
               <Form onChange={handleOpen}>
                  <div className='select-box'>
                     {active && (
                        <div
                           className={
                              isActive
                                 ? 'options-container active'
                                 : 'options-container'
                           }
                        >
                           {config.data.map((option, i) => (
                              <div key={i} className='option'>
                                 <Field
                                    className='radio'
                                    type='radio'
                                    name={config.selectName}
                                    id={option.value}
                                    value={option.label}
                                 />
                                 <label htmlFor={option.value}>
                                    {option.label}
                                 </label>
                              </div>
                           ))}
                        </div>
                     )}

                     <div onClick={handleOpen} className='selected'>
                        {values[config.selectName]}
                     </div>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default ButtonSelect;
