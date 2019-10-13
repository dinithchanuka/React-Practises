import React from 'react';

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
