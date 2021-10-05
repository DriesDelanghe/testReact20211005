import * as React from 'react'

export const Brand = ({name, numberOfCars}) => {

    return (
        <div className="card">
            <p>{name && name}</p>
            <p>{numberOfCars && numberOfCars}</p>
        </div>
    )

}

export const Brands = ({brandArray, title}) => {

    return(
        <div className="section">
            <h3>{title}</h3>
            {brandArray && brandArray.map((brand, index) => <Brand key={index} numberOfCars={brand.numberOfCars} name={brand.name}/> )}
        </div>
    )
}