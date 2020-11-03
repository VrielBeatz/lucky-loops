import React, { useState } from 'react';
import './styles.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Slider = () => {
   const [isActive, setIsActive] = useState(false);
   const initialValues = {
      from: 0,
      to: 300,
   };
   const active = true;
   const validationSchema = Yup.object().shape({
      from: Yup.number(),
      to: Yup.number(),
   });
   const handleSubmit = async ({ from, to }) => {
      setIsActive(false);
   };

   const handleOpen = () => {
      setIsActive((prev) => !prev);
   };
   return (
      <div className='slider-container'>
         <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
         >
            {({ values }) => {
               return (
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
                                 <Field
                                    type='number'
                                    autoComplete='off'
                                    name='from'
                                    placeholder='min'
                                    value={values.from}
                                 />
                              </div>
                              <span className='divid'>to</span>
                              <div className='inp'>
                                 <Field
                                    type='number'
                                    autoComplete='off'
                                    name='to'
                                    placeholder='max'
                                    value={values.to}
                                 />
                              </div>

                              <div className='save'>
                                 <button type='submit'>SAVE</button>
                              </div>
                           </div>
                        )}

                        <div onClick={handleOpen} className='selected'>
                           BPM
                        </div>
                     </div>
                  </Form>
               );
            }}
         </Formik>
      </div>
   );
};

export default Slider;
