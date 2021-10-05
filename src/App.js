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
    const brand = brandArray.find((item) => item?.name?.toLowerCase() === car.brand.toLowerCase())
    if (!brand) {
        const obj ={name: car.brand, numberOfCars: 1}
        brandArray = car.type ? [...brandArray, {...obj, types:[car.type]}] : [...brandArray, {...obj}]
        return
    }
        const typeArray = brand.types ? !brand.types.find((type) => car.type.toLowerCase() === type.toLowerCase())
            ? [...brand.types, car.type]
            : [...brand.types]
            : [car.type]
        const obj = {...brand, numberOfCars: brand.numberOfCars + 1, types: [...typeArray]}
    brandArray = [...brandArray.filter((item) => item.name !== brand.name), {...obj}]
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
