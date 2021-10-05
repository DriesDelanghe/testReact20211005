import './App.css';
import {CARS, NUMBER_DATA, PERSON_DATA} from "./ data/data";
import {Numbers} from "./components/Numbers";
import {Cars} from "./components/Cars";
import {Persons} from "./components/Person";
import {Cities, City} from "./components/City";
import {citiesFromPersonData} from "./utilities/person_utilities";
import {List} from "./components/List";
import {Brand} from "./components/Brand";

const items = [
    "een", "twee", "drie", "vier", "vijf", "zes"
]

const brand = {
    name: 'Opel',
    numberOfCars: 23
}

function App() {
    return (
        <div>
            <Cars cars={CARS} title="Auto's"/>
            <List title={"een test lijst"} items={items}/>
            <Brand name={brand.name} numberOfCars={brand.numberOfCars}/>
        </div>
    )
        ;
}

export default App;
