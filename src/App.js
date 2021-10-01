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
            <Numbers numbers={NUMBER_DATA} title="Numbers"/>
            <Numbers numbers={NUMBER_DATA.filter(n => n > 6)} title="Numbers>6"/>
            <Numbers numbers={NUMBER_DATA.map(n => n * 2)} title="Numbers*2"/>
            <Cars cars={CARS} title="Auto's"/>
            <Persons persons={PERSON_DATA} title="Personen"/>
            <Persons persons={[...PERSON_DATA].sort((pl, pr) => pl.age - pr.age)} title="Personen volgens leeftijd"/>
            <Numbers numbers={PERSON_DATA.map(p => p.age)} title="Leeftijden van de Personen"/>
            <Numbers numbers={PERSON_DATA.map(p => p.age).sort((al, ar) => al - ar)}
                     title="Leeftijden van de Personen gesorteerd met duplicaties"/>
            <Numbers numbers={[...new Set(PERSON_DATA.map(p => p.age))].sort((al, ar) => al - ar)}
                     title="Leeftijden van de Personen gesorteerd zonder duplicaties"/>
            <div className="section">
                <City city={{name: "Antwerpen", numberOfPersons: 111}}/>
            </div>
            <Cities cities={[{name: "Antwerpen", numberOfPersons: 111}, {name: "Brussel", numberOfPersons: 32}]}
                    title="City test"/>
            <Cities cities={citiesFromPersonData(PERSON_DATA)} title="Cities"/>
        </div>
    )
        ;
}

export default App;
