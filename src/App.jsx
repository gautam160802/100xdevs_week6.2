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

import { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <Todo id={4} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTodo(data); // ✅ corrected here
      })
      .catch((error) => {
        console.error("Error fetching todo:", error);
      });
  }, []);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h4>{`Completed: ${todo.completed}`}</h4>
    </div>
  );
}

export default App;
