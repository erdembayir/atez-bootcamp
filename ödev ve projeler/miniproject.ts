const carsData = [
    {
        id: 1,
        title: 'Bmw m4',
        price: 100000,
        length: 4.5,
        width: 2.5,
        wheelbase: 125,
        brand: 'BMW',
        color: 'green',
        category: 'race car',
        description: 'This is a BMW M4',
        thumbnail: 'https://www.bmwusa.com/content/dam/bmwusa-com/vehicles/2018/m-series/m4/2018-m4-convertible-2dr-cpe-m-performance-competition-package-angular-front.png/_jcr_content/renditions/cq5dam.web.1280.1280.png',
        images: [ 
        'https://www.bmwusa.com/content/dam/bmwusa-com/vehicles/2018/m-series/m4/2018-m4-convertible-2dr-cpe-m-performance-competition-package-angular-front.png/_jcr_content/renditions/cq5dam.web.1280.1280.png'
        ],   
    },
    {
        id: 2,
        title: 'Porsche 911',
        price: 200000,
        length: 3.9,
        width: 2.2,
        wheelbase: 115,
        brand: 'Porsche',
        color: 'black',
        category: 'race car',
        description: 'This is a Porsche 911',
        thumbnail: 'https://www.porsche.com/usa/models/911/911-carrera-4s-coupe/2019/911-carrera-4s-coupe-2019-model-card.png',
        images: [
        'https://www.porsche.com/usa/models/911/911-carrera-4s-coupe/2019/911-carrera-4s-coupe-2019-model-card.png',
        'https://www.porsche.com/usa/models/911/911-carrera-4s-coupe/2019/911-carrera-4s-coupe-2019-model-card.png'
        ],
    },
    {
        id: 3,
        title: 'Audi R8',
        price: 150000,
        length: 4.2,
        width: 2.3,
        wheelbase: 120,
        brand: 'Audi',
        color: 'blue',
        category: 'race car',
        description: 'This is a Audi R8',
        thumbnail: 'https://www.audi.com/content/dam/nemo/en/models-and-technology/audi-r8/audi-r8-coupe/2019/audi-r8-coupe-model-card.png',
        images: [
        'https://www.audi.com/content/dam/nemo/en/models-and-technology/audi-r8/audi-r8-coupe/2019/audi-r8-coupe-model-card.png',
        'https://www.audi.com/content/dam/nemo/en/models-and-technology/audi-r8/audi-r8-coupe/2019/audi-r8-coupe-model-card.png'
        ],
    },
    {
        id: 4,
        title: 'Mercedes AMG GT',
        price: 180000,
        length: 4.3,
        width: 2.4,
        wheelbase: 130,
        brand: 'Mercedes',
        color: 'gray',
        category: 'race car',
        description: 'This is a Mercedes AMG GT',
        thumbnail: 'https://www.mbusa.com/content/dam/mbusa/vehicles/2019/AMG%20GT/AMG%20GT%20Coupe/AMG%20GT%20Coupe%20Model%20Card.png',
        images: [
        'https://www.mbusa.com/content/dam/mbusa/vehicles/2019/AMG%20GT/AMG%20GT%20Coupe/AMG%20GT%20Coupe%20Model%20Card.png',
        'https://www.mbusa.com/content/dam/mbusa/vehicles/2019/AMG%20GT/AMG%20GT%20Coupe/AMG%20GT%20Coupe%20Model%20Card.png'
        ],
        },
        {
        id: 5,
        title: 'Lamborghini Huracan',
        price: 250000,
        length: 4.6,
        width: 2.6,
        wheelbase: 140,
        brand: 'Lamborghini',
        color: 'yellow',
        category: 'race car',
        description: 'This is a Lamborghini Huracan',
        thumbnail: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/huracan/huracan-evo-coupe/2019/01-19/lamborghini-huracan-evo-coupe-model-card.png',
        images: [
        'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/huracan/huracan-evo-coupe/2019/01-19/lamborghini-huracan-evo-coupe-model-card.png',
        'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/huracan/huracan-evo-coupe/2019/01-19/lamborghini-huracan-evo-coupe-model-card.png'
        ],
        },
        {
        id: 6,
        title: 'Ferrari 488',
        price: 300000,
        length: 4.8,
        width: 2.7,
        wheelbase: 150,
        brand: 'Ferrari',
        color: 'red',
        category: 'race car',
        description: 'This is a Ferrari 488',
        thumbnail: 'https://www.ferrari.com/en-EN/automobiles/488-gtb/488-gtb-model-card',
        images: [
        'https://www.ferrari.com/en-EN/automobiles/488-gtb/488-gtb-model-card',
        'https://www.ferrari.com/en-EN/automobiles/488-gtb/488-gtb-model-card'
        ],
        },
        {
        id: 7,
        title: 'Bugatti Chiron',
        price: 3000000,
        length: 5.2,
        width: 2.9,
        wheelbase: 160,
        brand: 'Bugatti',
        color: 'black',
        category: 'race car',
        description: 'This is a Bugatti Chiron',
        thumbnail: 'https://www.bugatti.com/ffd/2019/01/bugatti-chiron-model-card.png',
        images: [
        'https://www.bugatti.com/',
        'https://www.bugatti.com/'
        ],
        },
        {
        id: 8,
        title: 'Mercedes G63',
        price: 200000,   
        length: 5.2,
        width: 2.9,
        wheelbase: 160,
        brand: 'Mercedes',
        color: 'black',
        category: 'SUV',
        description: 'This is a Mercedes G63',
        thumbnail: 'https://www.mbusa.com/content/dam/mbusa/vehicles/2019/G-Class/G63/G63%20Model%20Card.png',
        images: [
        'https://www.mbusa.com/content/dam/mbusa/vehicles/2019/G-Class/G63/G63%20Model%20Card.png',
        'https://www.mbusa.com/content/dam/mbusa/vehicles/2019/G-Class/G63/G63%20Model%20Card.png'
        ],
        },
        {
        id: 9,
        title: 'Range Rover',
        price: 200000,
        length: 5.2,
        width: 2.9,
        wheelbase: 160,
        brand: 'Range Rover',
        color: 'black',
        category: 'SUV',
        description: 'This is a Range Rover',
        thumbnail: 'https://www.landroverusa.com/content/dam/landroverusa/vehicles/range-rover/2019/model-card/range-rover-model-card.png',
        images: [
        'https://www.landroverusa.com/content/dam/landroverusa/vehicles/range-rover/2019/model-card/range-rover-model-card.png',
        'https://www.landroverusa.com/content/dam/landroverusa/vehicles/range-rover/2019/model-card/range-rover-model-card.png'
        ],
        },
        {
        id: 10,
        title: 'BMW X6',
        price: 200000,
        length: 5.2,
        width: 2.9,
        wheelbase: 160,
        brand: 'BMW',
        color: 'black',
        category: 'SUV',
        description: 'This is a BMW X6',
        thumbnail: 'https://www.bmwusa.com/content/dam/bmwusa/vehicles/2019/X6/X6%20Model%20Card.png',
        images: [
        'https://www.bmwusa.com/content/dam/bmwusa/vehicles/2019/X6/X6%20Model%20Card.png',
        'https://www.bmwusa.com/content/dam/bmwusa/vehicles/2019/X6/X6%20Model%20Card.png'
        ],
        },
        {
        id: 11,
        title: 'Yamaha R1',
        price: 2000,
        length: 3.2,
        width: 1.9,
        wheelbase: 110,
        brand: 'Yamaha',
        color: 'black',
        category: 'motorcycle',
        description: 'This is a Yamaha R1',
        thumbnail: 'https://www.yamaha-motor.com/sport/motorcycles/r1/2019/model-card',
        images: [
        'https://www.yamaha-motor.com/sport/motorcycles/r1/2019/model-card',
        'https://www.yamaha-motor.com/sport/motorcycles/r1/2019/model-card'
        ],
        },
        {
        id: 12,
        title: 'Kawasaki Ninja H2',
        price: 2000,
        length: 3.2,
        width: 1.9,
        wheelbase: 110,
        brand: 'Kawasaki',
        color: 'green',
        category: 'motorcycle',
        description: 'This is a Kawasaki Ninja H2',
        thumbnail: 'https://www.kawasaki.com/Content/Models/2019/Ninja-H2SX-SE/ModelCard.png',
        images: [
        'https://www.kawasaki.com/Content/Models/2019/Ninja-H2SX-SE/ModelCard.png',
        'https://www.kawasaki.com/Content/Models/2019/Ninja-H2SX-SE/ModelCard.png'
        ],
        },
        {
        id: 13,
        title: 'Honda CBR1000RR',
        price: 2000,
        length: 3.2,
        width: 1.9,
        wheelbase: 110,
        brand: 'Honda',
        color: 'red',
        category: 'motorcycle',
        description: 'This is a Honda CBR1000RR',
        thumbnail: 'https://www.honda.com/content/dam/site/2019/cbr1000rr/model-card.png',
        images: [
        'https://www.honda.com/content/dam/site/2019/cbr1000rr/model-card.png',
        'https://www.honda.com/content/dam/site/2019/cbr1000rr/model-card.png'
        ],
        },
]

interface IVehicle {
    title: string;
    description: string,
    price: number;
    id: number | string;
    thumbnail: string
    category: string;
}


interface ICars extends IVehicle {
    color: string;
    category: string;
}
interface IMotorcycles extends IVehicle {
    length: number;
    width: number;
    wheelbase: number;
    category: string;
}
interface ISUV extends IVehicle {
    price: number;
    category: string;
}
interface IVehicleApi {
    findAll: () => IVehicle[];
    findByBrand<B extends IMotorcycles>(brand: string): B[];
    findByText(input:string) : void;
}    

class IVehicleApi implements IVehicleApi {
    findAll(): IVehicle[] {
        return carsData;
    }
    findByCategory<C extends IVehicle>(category: string): C[] {
        const vehicles = this.findAll();
        return vehicles.filter((vehicle) => 
            vehicles.category === category) as C[];
    }
    findByText(input:string) {
        return carsData.filter(inputText =>
            inputText.title.toUpperCase().includes(input.toUpperCase()) ||
            inputText.description.toUpperCase().includes(input.toUpperCase()))
        }
    }
