import React from "react";

// export default function Greet() {
//     return <h1>Hello, World!</h1>;
// }

// const Greet = () => {
//   return <h1>Hello, World!</h1>;

// const Greet = (props) => {
//   console.log(props);
//   return <h1> Hello {props.name} a.k.a {props.heroName} </h1>

// }

// Destructure Prop : 1

// const Greet = (hero, heroName) => {
//   return <h1> Hello {name} a.k.a {heroName} </h1>
// }

// Destructure Prop : 2

const Greet = (props) => {
  const { name, heroName } = props;
  console.log(props);
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};

export default Greet;
