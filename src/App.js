import React, { Fragment } from "react";
import "./App.css";
import Card from "./Components/Card";

const names = [
  {
    name: "Kanye West",
    description:
      "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
    category: "entertainment",
    picture: "kaine.png",
    lastUpdated: "2020-03-10T23:08:57.892Z",
    votes: {
      positive: 23,
      negative: 36,
    },
  },
];

function App() {
  return (
    <section className="cards">
      {names.map((namesito) => {
        return (
          <Card
            picture={namesito.picture}
            key={namesito.name}
            name={namesito.name}
            description={namesito.description}
            category={namesito.category}
          />
        );
      })}
    </section>
  );
}

export default App;
