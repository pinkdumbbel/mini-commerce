import { Route, Routes } from 'react-router-dom';
import ProductList from './pages/products';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<ProductList />}></Route>
    </Routes>
  );
};

export default AppRouter;
