// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { menuByCategory } from '../../redux/operation'
// import { getMenuByCategory } from '../../redux/select'

// export const shopByCategory = () => {
//       const dispatch = useDispatch();
//       const { categoryName } = useParams();
//       const dishes = useSelector(getMenuByCategory);
      
//       useEffect(() => {
//             dispatch(menuByCategory({ category: categoryName }));
//       }, [dispatch, categoryName]);
//       return (
//             <div id="oneCategoryListContainer">
//           {/* <OneCategoryList> */}
//             {dishes.map(({ _id, title, thumb, price }) => (
//               <div
//                 initial={{
//                   y: -20,
//                   opacity: 0,
//                 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1 }}
//                 whileInView={{
//                   y: 0,
//                   opacity: 1,
//                 }}
//                 key={_id}
//               >
//                 <MenuCard id={_id} title={title} thumb={thumb} price = {price} />
//               </div>
//             ))}
//           {/* </OneCategoryList>       */}
//        </div>
// )
// }