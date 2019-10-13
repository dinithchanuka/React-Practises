import React from 'react';
import {render} from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement("div", { id: "something" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Ishi",
      animal: "Cat",
      breed: "Type cat"
    }),
    React.createElement(Pet, {
      name: "Raka",
      animal: "Bull",
      breed: "Red bull"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
