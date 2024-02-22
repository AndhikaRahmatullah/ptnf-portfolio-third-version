import React from 'react';
// layouts
import { MainLayout } from 'src/layouts/main';
// sections
import { HomeView } from 'src/sections/home/view';

// ---------------------------------------------------------------------------------------------

const Home: React.FC = () => {
  return (
    <main className="relative z-0 bg-primary">
      <MainLayout>
        <HomeView />
      </MainLayout>
    </main>
  );
};

export default Home;
