import './App.css';
import {CARS} from "./ data/data";
import {Cars} from "./components/Cars";
import {List} from "./components/List";
import {Brand, Brands} from "./components/Brand";

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

function App() {
    return (
        <div>
            <Cars cars={CARS} title="Auto's"/>
            <List title={"een test lijst"} items={items}/>
            <Brands brandArray={brands} title={"test merken"} />
        </div>
    )
        ;
}

export default App;
