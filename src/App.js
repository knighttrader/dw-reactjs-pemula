// 10. States
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 1
    };
  }

  handleClick() {
    const number = this.state.number + 1;
    this.setState({
      number
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>Increase Number</button>
        <p>{this.state.number}</p>
      </div>
    );
  }
}

// 9. Events
// import React, {Component} from 'react';
//
// export default class App extends Component {
//   handleClick() {
//     alert('I am clicked !');
//     console.log('I am clicked !');
//   }
//   render() {
//     return (
//       <button onClick={() => this.handleClick()}>
//         Click Me !
//       </button>
//     )
//   }
// }

// 8. Penggunaan Props pada React
// import React, {Component} from 'react';
// import Coffee from './components/Coffee';
// import Glass from './components/Glass';
// import Saucer from './components/Saucer';
//
// export default class App extends Component {
//
//   render() {
//     console.log('render');
//     return (
//       <div>
//         <Coffee
//           waterVolume={1}
//           bean='Robusta'
//           type='Expresso'
//         />
//         <Glass
//           color='Pink'
//         />
//         <Saucer
//           size={100}
//         />
//       </div>
//     )
//   }
// }

// 7. Component Life Cycle
// import React, {Component} from 'react';
//
// export default class App extends Component {
//
//   componentWillMount() {
//     console.log('componentWillMount');
//   }
//
//   componentDidMount() {
//     console.log('componentDidMount');
//   }
//
//   componentWillReceiveProps() {
//
//   }
//
//   componentWillUnmount() {
//
//   }
//
//   render() {
//     console.log('render');
//     return (
//       <h1>Hello World</h1>
//     )
//   }
// }

// 6. Memanggil Child Component
// import React from 'react';
// import Profile from './components/Profile';
//
// export default () => {
//   const hello = "Hello World";
//   return (
//     <div>
//       <h1>{hello}</h1>
//       <h1>{hello}</h1>
//
//       <Profile />
//     </div>
//   )
// }

// 5. Cara menampilkan bbrp baris return dgn () dan <div>
// import React from 'react';
//
// export default () => {
//   const hello = "Hello World";
//   return (
//     <div>
//       <h1>{hello}</h1>
//       <h1>{hello}</h1>
//     </div>
//   )
// }

// 4. Cara lain menampilkan Functional Component
// import React from 'react';
//
// export default () => {
//   const hello = "Hello World";
//   return <h1>{hello}</h1>
// }

// 3. Menampilkan Functional Component
// import React from 'react';
//
// const App = () => (
//   <h1>Hello World</h1>
// )
// export default App;

// 2. Cara lain menampilkan React Component
// import React, {Component} from 'react';
//
// export default class App extends Component {
//   render() {
//     return <h1>Hello World</h1>
//   }
// }

// 1. Menampilkan React Component
// import React, {Component} from 'react';
//
// class App extends Component {
//   render() {
//     return <h1>Hello World</h1>
//   }
// }
// export default App;

// 0. Tampilan Awal setelah sukses install React
// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
