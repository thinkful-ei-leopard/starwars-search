import React from 'react';
import Header from './Header'
import SearchForm from './SearchForm'
import ResultList from './ResultList'

class App extends React.Component {
  render() {
    return (
      <main className='App'>
        <Header />
        <SearchForm />
        <ResultList />
      </main>
    );
  }
}

export default App;