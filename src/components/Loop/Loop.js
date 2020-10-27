import React from 'react';
import { useParams } from 'react-router-dom';
import { loops } from '../../pages/LoopsPage/LoopsPage';
import AbsoluteWrapper from '../AbsoluteWrapper/AbsoluteWrapper';

const Loop = () => {
   const { name, id } = useParams();

   return (
      <AbsoluteWrapper>
         <h1>{name.split('-').join(' ')}</h1>
         <h1>{id}</h1>
      </AbsoluteWrapper>
   );
};

export default Loop;
