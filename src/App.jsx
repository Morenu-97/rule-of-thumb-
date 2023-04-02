import "./App.css";
import Card from "components/Card";

const names = [
  {
    name: "Kanye West",
    description:
      "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
    category: "entertainment",
    picture: "kanye.png",
    lastUpdated: "2020-03-10T23:08:57.892Z",
    votes: {
      positive: 23,
      negative: 36,
    },
  },
  {
    name: "Mark West",
    description:
      "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
    category: "entertainment",
    picture: "mark.png",
    lastUpdated: "2020-03-10T23:08:57.892Z",
    votes: {
      positive: 23,
      negative: 36,
    },
  }
];

function App() {
  return (
    <section className="cards">
      {names.map((name) => {
        return (
          <Card
            image={name.picture}
            key={name.name}
            name={name.name}
            description={name.description}
            category={name.category}
          />
        );
      })}
    </section>
  );
}

export default App;
