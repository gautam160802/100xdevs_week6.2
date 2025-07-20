// import { useState } from "react";
// import { useEffect } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
//       const json = await res.json();
//       setTodos(json.todos);
//     });
//   }, []);

//   return (
//     <div>
//       {todos.map((todo) => (
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h4>{description}</h4>
//     </div>
//   );
// }

// export default App;

// assingment problem

// import { useEffect, useState } from "react";

// function App() {
//   const [selectedId, setSelectedId] = useState(1);
//   return (
//     <div>
//       <button
//         onClick={function () {
//           setSelectedId(1);
//         }}
//       >
//         1
//       </button>
//       <button
//         onClick={function () {
//           setSelectedId(2);
//         }}
//       >
//         2
//       </button>
//       <button
//         onClick={function () {
//           setSelectedId(3);
//         }}
//       >
//         3
//       </button>

//       <Todo id={selectedId} />
//     </div>
//   );
// }

// function Todo({ id }) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setTodo(data); // ✅ corrected here
//       })
//       .catch((error) => {
//         console.error("Error fetching todo:", error);
//       });
//   }, [id]);

//   return (
//     <div>
//       Id: {id}
//       <h1>{todo.title}</h1>
//       <h4>{`Completed: ${todo.completed}`}</h4>
//     </div>
//   );
// }

// export default App;

// use memo
import { useState, useMemo } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const count = useMemo(() => {
    let finalCount = 0;

    for (let i = 0; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [inputValue]);

  return (
    <div>
      <input
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
        placeholder={"Find sum from 1 to n"}
      ></input>
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
}

export default App;
