import loopsTypes from './loops.types';
import { firestore } from '../../firebase/firebaseUtils';

const { FETCH_LOOPS } = loopsTypes;

export const fetchLoops = () => async (dispatch) => {
   console.log('start');
   const snapshot = await firestore.collection('loops').get();
   const loops = await Promise.all(
      snapshot.docs.map(async (loop) => {
         const loopData = loop.data();
         const authorSnap = await firestore
            .collection('users')
            .doc(loopData.uploadedBy)
            .get();
         const authorData = authorSnap.data();
         return {
            loopID: loop.id,
            authorAvatar: authorData.avatar,
            authorName: authorData.username,
            ...loopData,
         };
      })
   );

   console.log(loops);
   dispatch({
      type: FETCH_LOOPS,
      payload: loops,
   });
};
