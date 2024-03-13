import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    getJokes();
  }, []);

  const getJokes = async () => {
    const jokeUrl = "https://v2.jokeapi.dev/joke/Any?amount=10";
    try {
      const response = await fetch(jokeUrl);
      const data = await response.json();
      console.log(data);
      const formatedData = data.jokes.map((each) => ({
        category: each.category,
        type: each.type,
        setup: each.setup,
        id: each.id,
        joke: each.joke,
      }));
      setJokes(formatedData);
    } catch (error) {
      console.log("Error: " + error);
    }
  };
  return (
    <ul className="bg-dark p-5 min-vh-100">
      <h1 className="text-white text-center">Jokes</h1>
      {jokes.map((eachJoke, index) => {
        return (
          <li key={index}>
            <table class="table " key={index}>
              <thead>
                <tr>
                  <th
                    scope=""
                    className="w-100 text-center text-primary bg-transparent border border-primary border-bottom-0 rounded"
                  >
                    Joke Category:{"  "} {eachJoke.category}
                  </th>
                </tr>
              </thead>
              <tbody class="bg-transparent rounded w-100">
                <tr>
                  <td className="bg-secondary text-white font-weight-bolder">
                    {eachJoke.joke}
                  </td>
                </tr>
                <tr>
                  <td className="bg-secondary text-white rounded font-weight-bolder">
                    {eachJoke.setup}
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
