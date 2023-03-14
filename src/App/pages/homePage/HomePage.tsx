import React from 'react';
import CardsList from '../../components/ui/cardsList/CardsList';

class HomePage extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <h2>Home page</h2>
        <CardsList />
      </>
    );
  }
}

export default HomePage;
