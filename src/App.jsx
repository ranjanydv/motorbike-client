import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';


import Header from './components/shared/Header.jsx';
import AppRoutes from './AppRoutes.jsx';
import Footer from './components/shared/Footer.jsx';

import './App.css';

function App() {
  return (
    <>
      <Header/>
      <section className="mx-auto flex flex-col min-h-screen max-w-7xl items-center justify-between py-10 px-4  ">
        <AppRoutes/>
        <Outlet/>
        <Toaster closeButton richColors expand/>
      </section>
      <Footer/>
    </>
  );
}

export default App;
