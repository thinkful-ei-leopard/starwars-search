import React, { Component } from 'react'

export default function SearchForm(props) {
    return (
        <form onSubmit={props.submit}>
            <label htmlFor="char-search">Character Name: </label>
            <input id="char-search" type="text" placeholder="Skywalker" name="name" />
            <button>Search</button>
        </form>
    )
}
