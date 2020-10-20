import React, { useState, useEffect } from 'react';
import './styles.scss';
import { Formik, Form, Field } from 'formik';

const config = {
   selectLabel: 'Key',
   selectName: 'keys',

   data: [
      {
         value: 'any',
         label: 'Key',
      },
      {
         value: 'c',
         label: 'C',
      },
   ],
};

const Slider = () => {
   const [isActive, setIsActive] = useState(false);
   const initialValues = {
      [config.selectName]: config.data[0].label,
   };
   const active = true;

   const handleOpen = () => {
      setIsActive((prev) => !prev);
   };
   return (
      <div className='slider-container'>
         {/* <h2>{config.selectLabel}</h2> */}
         <Formik initialValues={initialValues}>
            {({ values }) => (
               <Form>
                  <div className='select-box'>
                     {active && (
                        <div
                           className={
                              isActive
                                 ? 'options-container active'
                                 : 'options-container'
                           }
                        >
                           <div className='inp'>
                              {/* <label htmlFor='email'>From</label> */}

                              <Field autoComplete='off' name='from' />
                           </div>
                           <span className='divid'>to</span>
                           <div className='inp'>
                              {/* <label htmlFor='email'>To</label> */}

                              <Field autoComplete='off' name='to' />
                           </div>
                           {/* {config.data.map((option) => (
                              <div className='option'>
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
                           ))} */}
                        </div>
                     )}

                     <div onClick={handleOpen} className='selected'>
                        BPM
                     </div>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default Slider;
