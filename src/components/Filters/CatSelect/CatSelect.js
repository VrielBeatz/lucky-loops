import React, { useState } from 'react';
import './styles.scss';
import { Field, Formik, Form } from 'formik';

const CatSelect = ({ config }) => {
   const [showAll, setShowAll] = useState(config.displayed);
   const initialValues = {
      [config.dataName]: config.data[0].name,
   };
   return (
      <div className='catSelect-container'>
         <h2>{config.label}</h2>
         <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
               alert(JSON.stringify(values));
            }}
         >
            {({ values }) => (
               <Form>
                  <ul>
                     {config.data
                        .slice(0, showAll)
                        .map(({ displaName, name }, i) => (
                           <li>
                              <Field
                                 type='radio'
                                 id={name}
                                 name={config.dataName}
                                 value={name}
                              />
                              <label htmlFor={name}>{displaName}</label>

                              <div class='check'></div>
                           </li>
                        ))}
                  </ul>
                  {showAll < config.data.length && (
                     <p
                        className='show-more'
                        onClick={() => setShowAll(config.data.length)}
                     >
                        + Show more {config.data.length - config.displayed}
                     </p>
                  )}
                  {/* <div>{values[config.dataName]}</div> */}
                  <div className='divider'></div>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default CatSelect;
