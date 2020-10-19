import React from 'react';
import './styles.scss';
import { Field, Formik } from 'formik';

const CatSelect = () => {
   const categories = [];
   return (
      <div className='catSelect-container'>
         <h2>Categories</h2>

         <ul>
            <li>
               <input type='radio' id='r-option' name='selector' />
               <label htmlFor='r-option'>All Genre</label>

               <div class='check'></div>
            </li>
            <li>
               <input type='radio' id='f-option' name='selector' />
               <label htmlFor='f-option'>Hip Hop</label>

               <div class='check'></div>
            </li>

            <li>
               <input type='radio' id='s-option' name='selector' />
               <label htmlFor='s-option'>Cinematic</label>

               <div class='check'>
                  <div class='inside'></div>
               </div>
            </li>

            <li>
               <input type='radio' id='t-option' name='selector' />
               <label htmlFor='t-option'>Techno</label>

               <div class='check'>
                  <div class='inside'></div>
               </div>
            </li>
         </ul>
         <p className='show-more'>+ Show more 4</p>
         <div className='divider'></div>
      </div>
   );
};

export default CatSelect;
