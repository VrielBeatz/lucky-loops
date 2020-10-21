import React from 'react';
import './styles.scss';

import CatSelect from './CatSelect/CatSelect';
import ButtonSelect from './ButtonSelect/ButtonSelect';
import InputFilter from './InputFilter/InputFilter';
import Slider from './Slider/Slider';

const keyConfig = {
   selectLabel: 'Key',
   selectName: 'keys',

   data: [
      {
         value: 'any',
         label: 'Any',
      },
      {
         value: 'c',
         label: 'C',
      },
      {
         value: 'c#',
         label: 'C#',
      },
      {
         value: 'd',
         label: 'D',
      },
      {
         value: 'd#',
         label: 'D#',
      },
      {
         value: 'e',
         label: 'E',
      },
      {
         value: 'f',
         label: 'F',
      },
      {
         value: 'f#',
         label: 'F#',
      },
      {
         value: 'g',
         label: 'G',
      },
      {
         value: 'g#',
         label: 'G#',
      },
      {
         value: 'a',
         label: 'A',
      },
      {
         value: 'a#',
         label: 'A#',
      },
      {
         value: 'b',
         label: 'B',
      },
   ],
};
const orderByConfig = {
   selectLabel: 'Order by',
   selectName: 'order-by',

   data: [
      {
         value: 'date-desc',
         label: 'Date (Desc)',
      },
      {
         value: 'date-asc',
         label: 'Date (Asc)',
      },
      {
         value: 'downloads-desc',
         label: 'Downloads (Desc)',
      },
      {
         value: 'downloads-asc',
         label: 'Downloads (Asc)',
      },
   ],
};

const config = {
   label: 'Genre',
   dataName: 'genre',
   displayed: 4,
   data: [
      {
         displaName: 'All Genre',
         name: 'all-genre',
      },
      {
         displaName: 'Hip Hop',
         name: 'hip-hop',
      },
      {
         displaName: 'Cinematics',
         name: 'cinematics',
      },
      {
         displaName: 'Techno',
         name: 'techno',
      },
      {
         displaName: 'Techno',
         name: 'ts',
      },
      {
         displaName: 'Techno',
         name: 'tg',
      },
      {
         displaName: 'Techno',
         name: 'ty',
      },
   ],
};
const config1 = {
   label: 'Categories',
   dataName: 'categories',
   displayed: 1,
   data: [
      {
         displaName: 'All',
         name: 'all-categories',
      },
      {
         displaName: 'Sitar',
         name: 'sitar',
      },
   ],
};

const Filters = () => {
   return (
      <div className='filters'>
         <InputFilter />

         <ButtonSelect config={keyConfig} />

         <ButtonSelect config={orderByConfig} />

         <Slider />

         <CatSelect config={config} />
         <CatSelect config={config1} />
      </div>
   );
};

export default Filters;
