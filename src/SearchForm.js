import React, { Component } from 'react'

export class SearchForm extends Component {
    render() {
        return (
            <form>
                <label htmlFor="char-search">Character Name: </label>
                <input id="char-search" type="text" placeholder="Skywalker" />
                <button>Search</button>
            </form>
        )
    }
}

export default SearchForm
