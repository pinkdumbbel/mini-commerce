import { Navigate, Route, Routes } from 'react-router-dom';
import ProductList from './pages/products';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/products' element={<ProductList />}></Route>
      <Route path='/' element={<Navigate replace to={'/products'} />}></Route>
    </Routes>
  );
};

export default AppRouter;
