// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [
    new User(2, 'Vasya', 'Pupkin', '123@m.ua', 11111),
    new User(5, 'Olya', 'Pupich', '321@m.ua', 22222),
    new User(4, 'Illya', 'Pavlov', '456@m.ua', 33333),
    new User(3, 'Andrii', 'Sereda', '654@m.ua', 44444),
    new User(6, 'Tolik', 'Tolich', '789@m.ua', 55555),
    new User(7, 'Sasha', 'Sanyevich', '987@m.ua', 66666),
    new User(11, 'Katya', 'Katerinich', '012@m.ua', 77777),
    new User(8, 'Nastya', 'Pupkin', '210@m.ua', 88888),
    new User(10, 'Vitya', 'Tvoi', '345@m.ua', 99999),
    new User(9, 'Vasya', 'Petrov', '543@m.ua', 98989)
];

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(value => value.id % 2 === 0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((user1, user2) => user1.id - user2.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor (id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}

const clients = [
    new Client(13, 'Oleh', 'Petrov', 'op@m.ua', 123123, ['phone']),
    new Client(13, 'Vasya', 'Hercules', 'vh@m.ua', 345345, ['phone', 'case', 'glass']),
    new Client(13, 'Vitya', 'Apollo', 'va@m.ua', 321321, ['tablet', 'glass', 'case']),
    new Client(13, 'Olya', 'Nucklear-Bomb', 'onb@m.ua', 543543, ['watch', 'band', 'glass', 'warranty']),
    new Client(13, 'Lena', 'Bomb', 'lb@m.ua', 678678, ['cable', 'power brick']),
    new Client(13, 'Oleh', 'Razor', 'or@m.ua', 876876, ['case', 'glass', 'charging cable']),
    new Client(13, 'Anna', 'Bullet', 'ab@m.ua', 890098, ['notebook', 'bag']),
    new Client(13, 'Masha', 'Rocket', 'mr@m.ua', 234432, ['wireless charger', 'power brick']),
    new Client(13, 'katya', 'Chick', 'kc@m.ua', 456645, ['phone', 'cable']),
    new Client(13, 'Sasha', 'Dude', 'sd@m.ua', 789987, ['headphones', 'case'])
];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((client1, client2) => client1.order.length - client2.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model, manufacturer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    };
    this.info = function () {
        console.log(`Model: ${this.model}, Manufacturer: ${this.manufacturer}, Year: ${this.year}, Max Speed: ${this.maxSpeed}, Engine Capacity: ${this.engineCapacity}`)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
        return this.maxSpeed
    };
    this.changeYear = function (changeYear) {
        this.year = changeYear;
        return this.year;
    };
    this.addDriver = function (driverName, driverAge) {
        this.driver = driverName;
        this.driverAge = driverAge;
    }
}

let redCar = new Car('M3', 'BMW', 2020, 250, 3.4);

console.log(redCar.increaseMaxSpeed(320));
console.log(redCar.changeYear(2019));
redCar.addDriver('Stig', 22);
console.log(redCar);
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class ClassCar {
    constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive(){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    };
    info(){
        console.log(`Model: ${this.model}, Manufacturer: ${this.manufacturer}, Year: ${this.year}, Max Speed: ${this.maxSpeed}, Engine Capacity: ${this.engineCapacity}`)
    };
    increaseMaxSpeed(newSpeed){
        this.maxSpeed = newSpeed;
        return this.maxSpeed
    };
    changeYear(changeYear){
        this.year = changeYear;
        return this.year
    };
    addDriver(driverName, driverAge){
        this.driver = driverName;
        this.driverAge = driverAge;
    }
}

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new Cinderella('Olya', 20, 36),
    new Cinderella('Nika', 22, 35),
    new Cinderella('Lera', 21, 36.5),
    new Cinderella('Zina', 35, 38),
    new Cinderella('Kristina', 28, 34),
    new Cinderella('Katya', 18, 32),
    new Cinderella('Lilya', 20, 37),
    new Cinderella('Tanya', 35, 38),
    new Cinderella('Nina', 27, 39),
    new Cinderella('Nastya', 18, 31.5)
];

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

const prince = new Prince('Eduard', 33, 31.5);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoeSize) {
        console.log(`Found her!, it's ${cinderella.name}`)
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(cinderellas.find(cinderella => cinderella.footSize === prince.shoeSize));