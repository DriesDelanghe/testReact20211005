import * as React from 'react'

export const Brand = ({name, numberOfCars}) => {

    return (
        <div className="card">
            <p>{name && name}</p>
            <p>{numberOfCars && numberOfCars}</p>
        </div>
    )

}
