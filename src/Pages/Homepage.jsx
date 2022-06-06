import React, { useState } from "react";
import "./main.css";

const Homepage = () => {
  const [input, setInput] = useState("");
  const [correct, setCorrect] = useState("");
  const [colder, setColder] = useState("");
  const [warmer, setWarmer] = useState("");
  const [neither, setNeither] = useState("");

  let x = Math.floor(Math.random() * 100 + 1);

  const playGame = () => {
    const convertedInteger = parseInt(input);
    console.log(convertedInteger);
    console.log(x);
    // console.log(convertedInteger);

    // const convertedInteger = 91;
    // first check
    if (x >= 0 && x <= 10) {
      if (convertedInteger === x) {
        setCorrect("you guessed right");
        setWarmer("");
        setColder("");
        setNeither("");
      } else if (convertedInteger >= 0 && convertedInteger <= 10) {
        setWarmer("getting hotter");
        setColder("");
        setWarmer("");
        setNeither("");
      } else if (convertedInteger > 10 && convertedInteger <= 20) {
        setColder("getting colder");
        setWarmer("");
        setNeither("");
      } else if (convertedInteger > 20 && convertedInteger <= 100) {
        setNeither("neither hotter nor colder");
        setWarmer("");
        setColder("");
      }
    } else if (x > 10 && x <= 20) {
      if (convertedInteger === x) {
        setCorrect("you guessed right");
        setWarmer("");
        setColder("");
        setNeither("");
      } else if (convertedInteger >= 0 && convertedInteger < 10) {
        setColder("getting colder");
        setWarmer("");
        setNeither("");
      } else if (convertedInteger > 10 && convertedInteger <= 20) {
        setWarmer("getting hotter");
        setColder("");
      } else if (convertedInteger > 20 && convertedInteger <= 30) {
        setColder("getting colder");
        setWarmer("");
        setNeither("");
      } else if (convertedInteger > 30 && convertedInteger <= 100) {
        setNeither("neither hotter nor colder");
        setWarmer("");
        setColder("");
      }
    } else if (x > 20 && x <= 30) {
      if (convertedInteger === x) {
        setCorrect("you guessed right");
        setWarmer("");
        setNeither("");
        setColder("");
      } else if (convertedInteger >= 0 && convertedInteger < 10) {
        setNeither("neither hotter nor colder");
        setWarmer("");
        setColder("");
      } else if (convertedInteger >= 10 && convertedInteger < 20) {
        setColder("getting colder");
        setWarmer("");
        setNeither("");
      } else if (convertedInteger >= 20 && convertedInteger < 30) {
        setWarmer("getting hotter");
        setColder("");
      } else if (convertedInteger >= 30 && convertedInteger <= 40) {
        setColder("getting colder");
        setWarmer("");
        setNeither("");
      } else if (convertedInteger > 40 && convertedInteger <= 100) {
        setNeither("neither hotter nor colder");
        setWarmer("");
        setColder("");
      }
    } else if (x > 30 && x <= 40) {
      if (convertedInteger === x) {
        setCorrect("you guessed right");
        setWarmer("");
        setColder("");
        setNeither("");
      } else if (convertedInteger >= 0 && convertedInteger < 20) {
        setNeither("neither hotter nor colder");
        setWarmer("");
        setColder("");
      } else if (convertedInteger >= 20 && convertedInteger < 30) {
        setColder("getting colder");
        setWarmer("");
        setNeither("");
      } else if (convertedInteger >= 30 && convertedInteger <= 40) {
        setWarmer("getting warmer");
        setColder("");
        setNeither("");
      } else if (convertedInteger >= 40 && convertedInteger <= 50) {
        setColder("getting colder");
        setWarmer("");
        setNeither("");
      } else if (convertedInteger > 50 && convertedInteger <= 100) {
        setNeither("neither hotter nor colder");
        setWarmer("");
        setColder("");
      }
    } else if (x > 40 && x <= 50) {
      if (convertedInteger === x) {
        setCorrect("you guessed right");
        setWarmer("");
        setColder("");
        setNeither("");
      } else if (convertedInteger >= 0 && convertedInteger < 30) {
        setNeither("neither hotter nor colder");
        setWarmer("");
        setColder("");
      } else if (convertedInteger >= 30 && convertedInteger < 40) {
        setColder("getting colder");
        setWarmer("");
        setNeither("");
      } else if (convertedInteger >= 40 && convertedInteger <= 50) {
        setWarmer("getting warmer");
        setColder("");
      } else if (convertedInteger >= 50 && convertedInteger <= 60) {
        setColder("getting colder");
        setWarmer("");
        setNeither("");
      } else if (convertedInteger > 60 && convertedInteger <= 100) {
        setNeither("neither hotter nor colder");
        setWarmer("");
        setColder("");
      }
    } else if (x > 50 && x <= 60) {
      if (convertedInteger === x) {
        setCorrect("you guessed right");
        setWarmer("");
        setColder("");
        setNeither("");
      } else if (convertedInteger >= 0 && convertedInteger < 40) {
        setNeither("neither hotter nor colder");
        setWarmer("");
        setColder("");
      } else if (convertedInteger >= 40 && convertedInteger <= 50) {
        setColder("getting colder");
        setWarmer("");
        setNeither("");
      } else if (convertedInteger >= 50 && convertedInteger <= 60) {
        setWarmer("getting warmer");
        setColder("");
        setNeither("");
      } else if (convertedInteger > 60 && convertedInteger <= 70) {
        setColder("getting colder");
        setWarmer("");
        setNeither("");
      } else if (convertedInteger > 70 && convertedInteger <= 100) {
        setNeither("neither hotter nor colder");
        setWarmer("");
        setColder("");
      }
    } else if (x > 60 && x <= 70) {
      if (convertedInteger === x) {
        setCorrect("you guessed right");
        setWarmer("");
        setColder("");
        setNeither("");
      } else if (convertedInteger >= 0 && convertedInteger < 50) {
        setNeither("neither hotter nor colder");
        setWarmer("");
        setColder("");
      } else if (convertedInteger > 50 && convertedInteger < 60) {
        setColder("getting colder");
        setWarmer("");
        setNeither("");
      } else if (convertedInteger >= 60 && convertedInteger <= 70) {
        setWarmer("getting warmer");
        setColder("");
        setNeither("");
      } else if (convertedInteger > 70 && convertedInteger <= 80) {
        setColder("getting colder");
        setWarmer("");
        setNeither("");
      } else if (convertedInteger > 80 && convertedInteger <= 100) {
        setNeither("neither hotter nor colder");
        setWarmer("");
        setColder("");
      }
    } else if (x > 70 && x <= 80) {
      if (convertedInteger === x) {
        setCorrect("you guessed right");
        setWarmer("");
        setColder("");
        setNeither("");
      } else if (convertedInteger >= 0 && convertedInteger < 60) {
        setNeither("neither hotter nor colder");
        setWarmer("");
        setColder("");
      } else if (convertedInteger >= 60 && convertedInteger <= 70) {
        setColder("getting colder");
        setWarmer("");
        setNeither("");
      } else if (convertedInteger > 70 && convertedInteger <= 80) {
        setWarmer("getting warmer");
        setColder("");
        setNeither("");
      } else if (convertedInteger > 80 && convertedInteger <= 90) {
        setColder("getting colder");
        setWarmer("");
        setNeither("");
      } else if (convertedInteger > 90 && convertedInteger <= 100) {
        setNeither("neither hotter nor colder");
        setWarmer("");
        setColder("");
      }
    } else if (x > 80 && x <= 90) {
      if (convertedInteger === x) {
        setCorrect("you guessed right");
        setWarmer("");
        setColder("");
        setNeither("");
      } else if (convertedInteger >= 0 && convertedInteger < 70) {
        setNeither("neither hotter nor colder");
        setWarmer("");
        setColder("");
      } else if (convertedInteger > 70 && convertedInteger <= 80) {
        setColder("getting colder");
        setWarmer("");
        setNeither("");
      } else if (convertedInteger > 80 && convertedInteger <= 90) {
        setWarmer("getting warmer");
        setColder("");
        setNeither("");
      } else if (convertedInteger > 90 && convertedInteger <= 100) {
        setColder("getting colder");
        setWarmer("");
        setNeither("");
      }
    } else if (x > 90 && x <= 100) {
      if (convertedInteger === x) {
        setCorrect("you guessed right");
        setWarmer("");
        setColder("");
      } else if (convertedInteger >= 0 && convertedInteger < 90) {
        setNeither("neither hotter nor colder");
        setWarmer("");
        setColder("");
      } else if (convertedInteger > 80 && convertedInteger <= 90) {
        setWarmer("");
        setColder("getting colder");
        setNeither("");
      } else if (convertedInteger > 90 && convertedInteger <= 100) {
        setWarmer("getting warmer");
        setWarmer("");
      }
    } else {
      console.log("nope");
    }
  };

  const NewGame = (e) => {
    setInput("");
    setColder("");
    setNeither("");
    setWarmer("");
    setCorrect("");
  };

  return (
    <main>
      <section className="form">
        <h1>Hot or Cold</h1>
        <p className="subHeading">
          the number by entering an integer between number 0 and 100
        </p>
        <div className="center">
          <input
            type="text"
            id="number"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          ></input>
        </div>
        <div className="center">
          <button onClick={playGame}>Submit</button>
        </div>
        <div className="center">
          <button onClick={NewGame}>New Game</button>
        </div>
        <div className="center1">
          <p className="text">{warmer}</p>
          <p className="text">{colder}</p>
          <p className="text">{correct}</p>
          <p className="text">{neither}</p>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
