import React from 'react';
import Header from './Header'
import SearchForm from './SearchForm'
import ResultList from './ResultList'

class App extends React.Component {
  state = {
    characters: []
  }


  // componentDidMount() {
  //   fetch(`https://swapi.co/api/people/?search=skywalker`)
  //     .then(response => response.json())
  //     .then(responseJson => this.setState({characters: responseJson.results}))
  // }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://swapi.co/api/people/?search=${event.target.name.value}`)
      .then(response => response.json())
      .then(responseJson => this.setState({characters: responseJson.results}))
  }

  render() {
    return (
      <main className='App'>
        <Header />
        <SearchForm submit={this.handleSubmit}/>
        <ResultList charactersArray={this.state.characters}/>
      </main>
    );
  }
}

export default App;