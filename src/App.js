import "./styles.css";
import { useState } from "react";

export default function App() {
  let horror = [
    {
      name: "Annabelle",
      rating: "5.4/10"
    },
    {
      name: "The Conjuring",
      rating: "7.5/10"
    },
    {
      name: "The Nun",
      rating: "5.3/10"
    }
  ];
  let animated = [
    {
      name: "Ice Age",
      rating: "7.5/10"
    },
    {
      name: "Madagascar",
      rating: "6.9/10"
    },
    {
      name: "Rio",
      rating: "6.9/10"
    }
  ];
  let action = [
    {
      name: "Extraction",
      rating: "6.7/10"
    },
    {
      name: "Bad Boys",
      rating: "6.9/10"
    },
    {
      name: "John Wick",
      rating: "7.4/10"
    }
  ];

  let funny = [
    {
      name: "Johnny English",
      rating: "6.2/10"
    },
    {
      name: "American Pie",
      rating: "7/10"
    },
    {
      name: "The Hangover",
      rating: "7.7/10"
    }
  ];

  let [output, showOutput] = useState(funny);

  return (
    <div className="App">
      <h1 className="h1">Movie's Suggestion</h1>
      <button
        onClick={() => {
          showOutput(horror);
        }}
        className="button"
      >
        HORROR
      </button>
      <button
        onClick={() => {
          showOutput(animated);
        }}
        className="button"
      >
        ANIMATED
      </button>
      <button
        onClick={() => {
          showOutput(funny);
        }}
        className="button"
      >
        FUNNY
      </button>

      <button
        onClick={() => {
          showOutput(action);
        }}
        className="button"
      >
        ACTION
      </button>
      {output.map((movie) => {
        return (
          <ul className="ul">
            <li className="list">{`Name : ${movie.name}`}</li>
            <li className="list">{`Rating : ${movie.rating}`}</li>
          </ul>
        );
      })}
    </div>
  );
}
