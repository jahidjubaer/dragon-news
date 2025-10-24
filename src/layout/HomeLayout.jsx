import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <section className='left-bar'></section>
                <section className='news'>
                    {/* why outlet . bz it can be change ;  */}
                    <Outlet></Outlet>
                </section>
                <section className='right-bar'></section>
            </main>
        </div>
    );
};

export default HomeLayout;