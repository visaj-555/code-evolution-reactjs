import React from "react";

function NameList() {
  const names = ["Bruce", "Clark", "Diana"];
  const namesList = names.map((name) => <h2>{name}</h2>);
  const persons = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      skill: "JavaScript",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      skill: "React",
    },
    {
      id: 3,
      name: "Mike Johnson",
      age: 30,
      skill: "Node.js",
    },
  ];

  const personList = persons.map((person) => (
    <h2 key={person.id}>
      I am {person.name}. I am {person.age} years old. I know {person.skill}.
    </h2>
  ));

  return (
    <div>
      {/* <h2> {names[0]} </h2>
      <h2> {names[1]} </h2>
      <h2> {names[2]} </h2> */}

      {/* {names.map((name) => (
        <h2> {name}</h2>
      ))} */}

      {/* {namesList} */}

      {personList}
    </div>
  );
}

export default NameList;
