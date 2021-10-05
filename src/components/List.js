import * as React from 'react'

export const List = ({title, items}) => {

    return (
        items ?
        <div>
            <h3>{title}</h3>
            <ul>
                {items.map((item) => <li>{item}</li>)}
            </ul>
        </div> : null
    )

}