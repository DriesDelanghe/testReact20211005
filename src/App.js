import './App.css';
import {CARS} from "./ data/data";
import {Cars} from "./components/Cars";
import {List} from "./components/List";
import {Brands} from "./components/Brand";

const items = [
    "een", "twee", "drie", "vier", "vijf", "zes"
]

const brands = [
    {
        name: 'Opel',
        numberOfCars: 23
    }, {
        name: 'BMW',
        numberOfCars: 11
    }
]

let brandArray = []
CARS.forEach((car) => {
    const brand = brandArray.find((brand) => brand.name.toLowerCase() === car.brand.toLowerCase())
    if (!brand) {
        brandArray = [...brandArray, {name: car.brand, numberOfCars: 1}]
        return
    }
    brandArray = [...brandArray.filter((item) => item.name !== brand.name), {
        ...brand,
        numberOfCars: brand.numberOfCars + 1
    }]
})


function App() {
    return (
        <div>
            <Cars cars={CARS} title="Auto's"/>
            <List title={"een test lijst"} items={items}/>
            <Brands brandArray={brandArray} title={"test merken"}/>
        </div>
    )
        ;
}

export default App;
