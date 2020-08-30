import React, { useState, ChangeEvent } from "react";
import { pipe } from "fp-ts/lib/function";
import "./App.css";

const log = (value: string | number): void => {
  console.log(value);
};

const convertToNumber = (value: string): void => {
  if (!isNaN(parseInt(value))) {
    log(parseInt(value));
    log("Convertible to number");
  } else {
    log("Inconvertible");
  }
};

interface Values {
  one: string;
}

const App: React.FC = () => {
  const [values, setValues] = useState<Values>({ one: "" });
  const [message, setMessage] = useState("Message goes here");

  const handlePipe = (): void => {
    if (values.one.length > 0) {
      log(values.one);
      pipe(
        values.one,
        (x) => {
          const message = `The entered value ${x} is a ${typeof x}`;
          log(message);
          return message;
        },
        convertToNumber
        //setMessage
      );
    } else {
      setMessage("Please input value");
    }
  };

  return (
    <div className="App">
      Playground
      <label>
        One:
        <input
          value={values.one}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, one: event.target.value });
          }}
        />
      </label>
      <button onClick={handlePipe}>Pipe</button>
      <div>{message}</div>
    </div>
  );
};

export default App;
