import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
