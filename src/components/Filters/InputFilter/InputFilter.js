import React from 'react';
import './styles.scss';
// import { Formik, Form, Field } from 'formik';
import searchIcon from '../../../assets/icons/search.svg';

const config = {
   label: '',
   placeholder: 'Search by name',
   icon: searchIcon,
};

const InputFilter = () => {
   //  const [active, setActive] = useState(false);

   //  const handleOpen = () => {
   //     setActive((prev) => !prev);
   //  };
   return (
      <div className='inputFilter'>
         <input className='inp' placeholder={config.placeholder} type='text' />

         <div className='icon-container'>
            <img className='icon' src={config.icon} alt='icon' />
         </div>
         <label htmlFor=''></label>
      </div>
   );
};

export default InputFilter;
