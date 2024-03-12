//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname, email, phone) {
  this.id= id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}

let constUser = [
    new User(2221, `petro`,`iv`, 3451, 67111110),
  new User(221, `petro1`,`iv1`, 3452, 67111116),
  new User(223099, `petro2`,`iv2`, 3453, 67111114),
  new User(22424325, `petro3`,`iv3`, 3454, 67111113),
  new User(220, `petro4`,`iv4`, 3455, 67111117),
  new User(226, `petro5`,`iv5`, 3456, 67111111),
  new User(227, `petro6`,`iv6`, 3457, 67111119),
  new User(228, `petro7`,`iv7`, 3458, 67111112),
  new User(229, `petro8`,`iv8`, 3459, 6711111477),
  new User(2267, `petro9`,`iv9`, 3450, 6711111875)
];

console.log(constUser);



//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUs = constUser.filter((user) => !(user.id % 2));
console.log(filterUs);
//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
 let sortUs = constUser.sort((a,b)=> a.id - b.id);
 console.log(sortUs);

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client

function Client (id, name, surname, email, phone, order) {
      this.id = id;
      this.name = name;
      this.surname = surname;
      this.email = email;
      this.phone = phone;
      this.order = order;
}
let newClient = [

    new Client(1, 'Maksym', 'Fedenko', 'feden@gmail.com', '+380974544231', ['apple', 'sandwich', 'malone']),
    new Client(2, 'Tamara', 'Renko', 'tamara@gmail.com', '+380974544231', ['bear', 'sandwich']),
    new Client(3, 'Andriy', 'Shevchenko', 'andriy@gmail.com', '+3809745631', ['apple', 'sandwich']),
    new Client(4, 'Anna', 'Dyachenko', 'anna@gmail.com', '+38092111111', ['apple', 'bear', 'sandwich', 'malone']),
    new Client(5, 'Dima', 'Berchnko', 'dima@gmail.com', '+380925555555', ['bear']),
    new Client(6, 'Olga', 'Tihenko', 'olga@gmail.com', '+3809255345345', ['apple', 'bear', 'malone']),
    new Client(7, 'Alina', 'Tihenko', 'alina@gmail.com', '+3809258787787', ['apple', 'bear', 'sandwich']),
    new Client(8, 'Diana', 'Okipna', 'diana@gmail.com', '+380925577777', ['bear', 'sandwich', 'malone']),
];

console.log(newClient);



//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClient = newClient.sort((a,b)=> a.order.length - b.order.length);
console.log(sortClient);
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car1 (model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
}
    this.info = function () {
        console.log('------------ INFO ------------');
        console.log('model : ', this.model);
        console.log('producer : ', this.producer);
        console.log('year : ', this.year);
        console.log('maxSpeed : ', this.maxSpeed);
        console.log('volume : ', this.volume);
        console.log('driver : ', this.driver);
        console.log('------------ INFO ------------');
    }

    this.increaseMaxSpeed = function (newSpeed){
    this.maxSpeed+= newSpeed;
    }

    this.changeYear = function (newYear){
        this.year= newYear;
    }

    this.addDriver = function (driver){
        this.driver = driver;
    }

const car1 = new Car1(12, 34,2010,300, 3);
console.log(car1);

//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2 {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }
    drive(){
        console.log(`їдумо зі швидкістю ${this.maxSpeed} на годину`)
    }
  info(){
          console.log('------------ INFO ------------');
          console.log('model : ', this.model);
          console.log('producer : ', this.producer);
          console.log('year : ', this.year);
          console.log('maxSpeed : ', this.maxSpeed);
          console.log('volume : ', this.volume);
          console.log('driver : ', this.driver);
          console.log('------------ INFO ------------');
  }

    increaseMaxSpeed (newSpeed){
    this.maxSpeed+=newSpeed;
    }

    changeYear (newValue){
        this.year=newValue;
    }

    addDriver (driver){
        this.driver = driver;
    }
}

const car2 = new Car2('v3', 'ffg', 2000, 200, 4);
console.log(car2);






//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    //За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    //Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбек


  class Library {
      constructor() {
          this.book = [];
          this.title = title;
          this.author = author;
          this.pages = pages;
          this.ISBN = ISBN;
      }

      addBook(book){
          this.book.push(book);
          console.log(`${book.title} + '' to add `);
      }

      removeBook(title) {
          const delBook = this.book.findIndex(book => book.title === title);
          if (index !== -1) {
              const removeBooks = this.book.splice(index,1)[0];
              console.log(`book ${this.title} delete`);
          } else {
              console.log(`book ${this.book} is not find`);
          }
      }
           listBook(){

              if (this.book.left === 0){
              console.log('library is empty');
              }

          else {
              console.log('tile of books in library:');
              this.book.forEach(book => {
                  console.log(`Name ${book.title}  ${book.author}  ${book.pages}  ${book.ISBN}`);
              });

          }

      }
  }
  const library = new Library();


  library.addBook({title:'hohoho', author:'Petro', pages : 344, ISBN: 111});

  library.listBook();