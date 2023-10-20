// import util, { APIKey } from "./util.js";
// import * as util from "./util.js";
// import content from "./util.js";
// import { APIKey as container, abc as main } from "./util.js";
// console.log(container);

// const userMassage = 'Hello world';
// chi dc doc khong dc sua

// let userMassage = 'Hello world';
// userMassage = 'Hello everybody';
// let duoc sua

// console.log(userMassage);

// --------------------------------------------

// console.log(10 * 8);
// console.log(10 === 10);

// const a = 10;
// if (a <= 9) {
//   console.log("True");
// } else {
//   console.log("false");
// }

// --------------------------------------------

// function createGreeting(userName, massage = 'Hello people') {
//   console.log(userName);
//   console.log(massage);
//   return 'Hello, I am ' + userName + '. ' + massage;

// }

// const createGreeting1 = createGreeting('Nam');
// console.log(createGreeting1);

// const createGreeting2 = createGreeting('Hieu', 'Nice to meet you!');
// console.log(createGreeting2);

// --------------------------------------------

// export default (userName = "Hieu", message = "Hello") => {
//   console.log(userName);
//   console.log(message);
//   return userName + message;
// };

// --------------------------------------------

// const user = {
//   name: "hieu",
//   age: 20,
//   greet() {
//     console.log("Hi!");
//     console.log(this.name);
//   }
// };
// console.log(user.name);
// user.greet();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log("Hello!");
//   }
// }

// const user1 = new User("Dieu", 18);
// console.log(user1);
// user1.greet();

// ------------------------------------------------

// const hobbies = ["sports", "listen to music", "cooking"];
// console.log(hobbies[0]);
// console.log(hobbies[1]);
// console.log(hobbies[2]);

// hobbies.push("studing");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "cooking");
// console.log(index);

// // const editedHobbies = hobbies.map((item) => item + ' !');
// const editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);

// ------------------------------------------------

// const array = [1, 2, 3];
// function transformToObject(array) {
//   return array.may(number => {
//     return {val: number}
//   })
// }
// console.log(transformToObject);

// ------------------------------------------------

// const [firstName, lastName] = ['Minh', 'Hieu'];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// console.log(firstName);
// console.log(lastName);

// ------------------------------------------------

// const {name: userName, age} = {
//   name: "Minh",
//   age: 20
// };
// console.log(userName);
// console.log(age);

// const name = user.name;
// const age = user.age;

// ------------------------------------------------

// const hobbies = ["cooking", "reading", "sports"];
// const user = {
//   name: "Hieu",
//   age: 20
// };
// const newHobbies = ['listening'];
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const extendedUser = {
//   isAdmin: true,
//   ...user
// };
// console.log(extendedUser);

// ------------------------------------------------

// const password = prompt("Your password");

// if (password === "Hello") {
//   console.log("Hello works");
// } else if (password === "hello") {
//   console.log("hello works");
// } else {
//   console.log("Access not granted");
// }

// const hobbies = ["cooking", "reading"];
// for (const hobby of hobbies) {
//   console.log(hobby);
// }

// ------------------------------------------------

// const list = document.querySelector('ul');
// list.remove();

// ------------------------------------------------

// function handleTimeout() {
//   console.log("Time out!");
// }
// const handleTimeout2 = () => {
//   console.log("Time out .... again!");
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//   console.log("More timing out....");
// }, 4000);

// function greeter(greetFn) {
//   greetFn();
// }
// greeter(() => {
//   console.log("Hi!");
// });

// ------------------------------------------------

//                   bai tap coding 1

// function combine(a, b, c) {
//   const result = a * b / c;
//   return result;
// }

// ------------------------------------------------

//                    bai tap coding 2

// const numberArray = [1, 2, 3];
// function transformToObjects(numberArray) {
//    return numberArray.map(number => {
//        return {val: number}
//    })
// }

// ------------------------------------------------

//                      baitap coding 3

// import React from 'react';

// // don't change the Component name "App"
// export default function App() {
//     return (
//         <div>
//             <h1>Exercise done!</h1>
//         </div>
//     );
// }

// ------------------------------------------------

//                    baitap coding 4
// App.js
// import React from 'react';
// import ExerciseComponent from './ExerciseComponent'
// // don't change the Component name "App"
// export default function App() {
//     return <ExerciseComponent></ExerciseComponent>;
// }

// ExerciseComponent.js
// import React from 'react';
// // Todo: Add your component code
// // Important: Use export default function MyCmp() { ... }, don't define "export default" on a separate line!
// export default function ExerciseComponent() {
//     return <h1>First exercise - done!</h1>
// };

// ------------------------------------------------

// baitap coding 5
// App.js
// import React from 'react';

// import Product from './Product';
// import './styles.css';

// // don't change the Component name "App"
// export default function App() {
//     const demoApp = [
//         {
//             title: 'Product 1',
//             price: 10,
//             description: 'First product'
//         },
//         {
//             title: 'Product 2',
//             price: 20,
//             description: 'Second product'
//         }
//         ]
//     return (
//         <div>
//             <h1>My Demo Shop</h1>
//             <Product
//             title={demoApp[0].title}
//             price={demoApp[0].price}
//             description ={demoApp[0].description}>
//             </Product>
//             <Product
//             title={demoApp[1].title}
//             price={demoApp[1].price}
//             description ={demoApp[1].description}>
//             </Product>
//         </div>
//     );
// }

// Product.js
// import React from 'react';

// export default function Product(props) {
//     return (
//         <article className="product">
//             <h2>{props.title}</h2>
//             <p className="price">${props.price}</p>
//             <p>{props.description}</p>
//         </article>
//     );
// }

// style.css
// body {
//   font-family: sans-serif;
//   margin: 0;
//   padding: 3rem;
//   background-color: #2d2c2c;
//   color: #959090;
// }

// .product {
//   margin: 1rem 0;
//   padding: 1rem;
//   background-color: #373535;
//   color: #e7e4e4;
//   border-radius: 8px;
// }

// .product h2,
// .product p {
//   margin: 0.5rem 0;
// }

// .price {
//   font-size: 0.75rem;
//   color: #bab6b6;
// }

// ------------------------------------------------

//                      baitap coding 6
// App.js
// import React from 'react';
// import Card from './Card.js';
// import './styles.css';

// // don't change the Component name "App"
// export default function App() {
//     return (
//         <div>
//             <h1>Todos</h1>

//             <Card className="card">
//               <p>Please note: Below are just the most important todos - feel free to add more.</p>
//             </Card>

//             <ul>
//               <li className="todo">
//                 <Card className="card">
//                   <h2>Learn React</h2>
//                   <p>Learn React fundamentals & explore core concepts</p>
//                 </Card>
//               </li>
//               <li className="todo">
//                 <Card className="card">
//                   <h2>Practice React</h2>
//                   <p>Apply your knowledge & build demo projects</p>
//                 </Card>
//               </li>
//             </ul>
//         </div>
//     );
// }

// style.css
// body {
//   font-family: sans-serif;
//   margin: 0;
//   padding: 3rem;
//   background-color: #2d2c2c;
//   color: #959090;
// }

// ul {
//   list-style: none;
//   margin: 2rem 0;
//   padding: 0;
// }

// li {
//   margin: 1rem 0;
// }

// .card {
//   padding: 1rem;
//   background-color: #1d1c2c;
//   border-radius: 6px;
//   box-shadow: 0 2px 4px rgba(0,0,0,0.2);
// }

// .todo h2 {
//   margin: 0;
//   text-transform: uppercase;
//   font-size: 1.25rem;
//   color: #eee;
// }

// .todo p {
//   margin: 0.5rem 0 0 0;
//   color: #999;
// }

// Card.js
// import React from 'react';
// import './style.css';

// function Card(props){
//     return <div className='card'>{props.children}</div>
// }
// export default Card;

// ------------------------------------------------

// baitap coding 7
// import React from 'react';

// import './styles.css';
// // don't change the Component name "App"
// export default function App() {
//     const clickHandler = () => {
//         console.log('Stored!');
//     }
//     return <button onClick={clickHandler}>Bookmark</button>;
// }

// ------------------------------------------------

// baitap coding 8
// import React, {useState} from 'react';

// import './styles.css';

// // don't change the Component name "App"
// // important: In this code editor, use React.useState() instead of just useState()
// export default function App() {
//     const [price, setPrice] = useState(100);
//     function clickHandler() {
//         setPrice(75);
//     }
//     return (
//         <div>
//             <p>${price}</p>
//             <button onClick={clickHandler}>Apply Discount</button>
//         </div>
//     );
// }

// ------------------------------------------------

// baitap coding 9
// import React from 'react';

// import './styles.css';

// // don't change the Component name "App"
// export default function App() {
//     const [messageValidate, setMessageValidate] = React.useState('Invalid');
//     const messageVal = (event) => {
//         const value = event.target.value;
//         if (value.trim().length < 3) {
//             setMessageValidate('Invalid');
//         }
//         else {
//             setMessageValidate('Valid');
//         }
//     }
//     return (
//         <form>
//             <label>Your message</label>
//             <input type="text" onChange={messageVal}/>
//             <p>{messageValidate} message</p>
//         </form>
//     );
// }

// ------------------------------------------------

// baitap coding 10
// import React from 'react';

// import './styles.css';

// // don't change the Component name "App"
// export default function App() {
//     const [counter, setCounter] = React.useState(0);
//     const incrementCounterHandler = () => {
//         setCounter(prevCounter => prevCounter + 1);
//     }
//     return (
//       <div>
//         <p id="counter">{counter}</p>
//         <button onClick={incrementCounterHandler}>Increment</button>
//       </div>
//     );
// }
