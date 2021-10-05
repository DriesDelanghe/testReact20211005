import './App.css';
import {CARS, NUMBER_DATA, PERSON_DATA} from "./ data/data";
import {Numbers} from "./components/Numbers";
import {Cars} from "./components/Cars";
import {Persons} from "./components/Person";
import {Cities, City} from "./components/City";
import {citiesFromPersonData} from "./utilities/person_utilities";

function App() {
    return (
        <div>
            <Cars cars={CARS} title="Auto's"/>
        </div>
    )
        ;
}

export default App;
