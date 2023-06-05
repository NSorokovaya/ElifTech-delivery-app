// const shopPage = lazy(() => import('pages/shopPage/shopPage'));
// export const App = () => {
//   return (
//      <Routes>
//             <Route path="/" element={<SharedLayout />}>
//               <Route index element={<Navigate to="/main" />} />
//               <Route
//                 path="/main"
//                 element={
//                   <PrivateRoute component={MainPage} redirectTo={'/welcome'} />
//                 }
//               />
//               <Route path="categories" element={<CategoriesLayout />}>
//                 <Route path="" element={<Navigate to="/categories/Beef" />} />
//                 <Route
//                   path=":categoryName"
//                   element={
//                     <PrivateRoute
//                       component={CategoryPage}
//                       redirectTo={'/welcome'}
//                     />
//                   }
//                 />
//               </Route>
//               <Route
//                 path="add"
//                 element={
//                   <PrivateRoute
//                     component={AddRecipesPage}
//                     redirectTo={'/welcome'}
//                   />
//                 }
//               />
//               <Route
//                 path="my"
//                 element={
//                   <PrivateRoute
//                     component={MyRecipesPage}
//                     redirectTo={'/welcome'}
//                   />
//                 }
//               />
//               <Route
//                 path="favorite"
//                 element={
//                   <PrivateRoute
//                     component={FavoritePage}
//                     redirectTo={'/welcome'}
//                   />
//                 }
//               />
//               <Route
//                 path="recipe/:recipeId"
//                 element={
//                   <PrivateRoute
//                     component={RecipePage}
//                     redirectTo={'/welcome'}
//                   />
//                 }
//               />
//               <Route
//                 path="shopping-list"
//                 element={
//                   <PrivateRoute
//                     component={ShoppingListPage}
//                     redirectTo={'/welcome'}
//                   />
//                 }
//               />
//               <Route
//                 path="search"
//                 element={
//                   <PrivateRoute
//                     component={SearchPage}
//                     redirectTo={'/welcome'}
//                   />
//                 }
//               />
//               <Route path="*" element={<NotFound />} />
//             </Route>
//             <Route
//               path="/welcome"
//               element={
//                 <RestrictedRoute component={WelcomePage} redirectTo={'/main'} />
//               }
//             />
//             <Route
//               path="/signin"
//               element={
//                 <RestrictedRoute component={SigninPage} redirectTo={'/main'} />
//               }
//             />
//             <Route
//               path="/register"
//               element={
//                 <RestrictedRoute
//                   component={RegisterPage}
//                   redirectTo={'/main'}
//                 />
//               }
//             />
//           </Routes>
//   )
// };
