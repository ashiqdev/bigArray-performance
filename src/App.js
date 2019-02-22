import React, { Component } from "react";
import logo from "./logo.svg";
import {debounce} from 'lodash';

import bigArray from "./helpers";


class App extends Component {
  state = {
    nameArray: {
      moon: [{ mail: "Jonaed", count: 0 }, { mail: "Ashik", count: 0 }],
      sun: [{ mail: "Mission", count: 0 }, { mail: "Bayjid", count: 0 }],
      myBigArray: bigArray
    }
  };
  componentDidMount() {
    console.log("re---rendering");
  }

  componentWillUpdate() {
    console.log("rendering");
  }
  componentDidUpdate() {
    console.log("finished");
  }

  incrementCount =(name, personMail) => (e) => {
    // cloning state
    const newNameArray = { ...this.state.nameArray };

    const singleName = newNameArray[name];
    const person = singleName.find(element => element.mail === personMail);
    person.count++;

    this.setState({ nameArray: newNameArray });
  };

  render() {
    const { nameArray } = this.state;

    return (
      <div>
        {Object.keys(nameArray).map(info => (
          <div key={info}>
            <h2 className="text-success">{info}</h2>
            <ul>
              {nameArray[info].map(person => (
                <li key={person.mail}>
                  <button className="btn btn-danger" onClick={this.incrementCount(info, person.mail)}>
                    {person.mail} - {person.count}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
