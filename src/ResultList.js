import React from 'react'

export default function ResultList(props) {
    const displayNames = props.charactersArray.map(character => {
        return <li>{character.name}</li>
    })

    return (
        <ul>
            {displayNames}
        </ul>
    )
}
