import "./App.css";
import Card from "components/Card";

const names = [
  {
    key:1,
    name: "Kanye West",
    description:
    "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
    category: "entertainment",
    image: "kanye.png",
    lastUpdated: "2020-03-10T23:08:57.892Z",
    votes: {
      positive: 23,
      negative: 36,
    },
  },
  {
    key:2,
    name: "Mark West",
    description:
      "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
    category: "entertainment",
    image: "mark.png",
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
          <Card {...name}/>
        );
      })}
    </section>
  );
}

export default App;
