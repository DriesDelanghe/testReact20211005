const COLORS_CAR_CSS = [
    {nameInCar: "blauw", backGroundColorInCss: "blue", colorInCss: "white"},
    {nameInCar: "geel", backGroundColorInCss: "yellow"},
    {nameInCar: "zwart", backGroundColorInCss: "black", colorInCss: "white"},
    {nameInCar: "wit", backGroundColorInCss: "white"},
    {nameInCar: "rood", backGroundColorInCss: "red", colorInCss: "white"},
    {nameInCar: "grijs", backGroundColorInCss: "grey"},
    {nameInCar: "groen", backGroundColorInCss: "green"},
];

function styleColor(color) {
    const colorCarCss = COLORS_CAR_CSS.find(c => c.nameInCar === color);
    if (!colorCarCss) return;
    return {
        backgroundColor: colorCarCss.backGroundColorInCss,
        color: colorCarCss.colorInCss,
        margin: "0.5em"
    };
}

function CarColor(props) {
    const {color} = props;

    if (!color) return null;
    return <div style={styleColor(color)}>
        kleur: {color} &nbsp;
    </div>;
}

function Car(props) {
    const {car} = props;
    return <div className="card car">
        <h4>{car.name}</h4>
        {car.brand && <div>merk: {car.brand}</div>}
        {car.type && <div>type: {car.type}</div>}
        <CarColor color={car.color}/>
    </div>;
}

export function Cars(props) {
    const {cars, title} = props;

    return <div className="section">
        <h3>{title}</h3>
        {cars.map((c) => <Car key={c.name} car={c}/>)}
    </div>;
}