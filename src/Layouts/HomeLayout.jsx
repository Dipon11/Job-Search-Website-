
import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';
import Home from '../Component/Home';
import IndustryCategory from '../Component/IndustryCategory';
import Industries from '../Pages/Industries';
import Newsletter from '../Component/Newsletter';
import Footer from '../Component/Footer';
import Stats from '../Component/Stats';

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <section>
          <Home></Home>
        </section>
        <section>
          <Industries></Industries>
        </section>
        <Outlet></Outlet>
        <Stats></Stats>
        <Newsletter></Newsletter>

      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;