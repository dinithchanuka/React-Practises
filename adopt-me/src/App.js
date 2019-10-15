import React from 'react';
import {render} from 'react-dom';
import Pet from './Pet';

const App = () => {
  // return React.createElement("div", { id: "something" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Ishi",
  //     animal: "Cat",
  //     breed: "Type cat"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Raka",
  //     animal: "Bull",
  //     breed: "Red bull"
  //   })
  // ]);
  return(
    <div>
      <h1 id="something-important">Adopt Me !</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cocktail" />
      <Pet name="Donik" animal="Cat" breed="Mixed" /> 
    </div>
  )
};

render(<App/>, document.getElementById("root"));
