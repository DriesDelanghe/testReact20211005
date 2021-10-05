import * as React from 'react'
import {List} from "./List";

export const Brand = ({name, numberOfCars, types}) => {

    return (
        <div className="card">
            <p>{name && name}</p>
            <p>{numberOfCars && numberOfCars}</p>
            {types && <List      title={"types"} items={types}/> }
        </div>
    )

}

export const Brands = ({brandArray, title}) => {

    return(
        <div className="section">
            <h3>{title}</h3>
            {brandArray && brandArray.map((brand, index) =>
                <Brand key={index} numberOfCars={brand.numberOfCars} name={brand.name} types={brand.types}/> )}
        </div>
    )
}