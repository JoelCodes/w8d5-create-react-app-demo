import React, { Component } from 'react';
import './App.css';
import { getPenguins } from './penguin-svc';

class App extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }
  componentDidMount() {
    getPenguins()
      .then((penguins) => {
        this.setState({ loading: false, penguins });
      });
  }
  render() {
    const body = this.state.loading ?
      <h1>Loading...</h1> :
      (<table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {this.state.penguins.map(penguin => (<tr key={penguin.id}>
            <td>
              {penguin.name}
            </td>
            <td>
              <img className="penguin-img" src={penguin.imgUrl} alt={penguin.name} />
            </td>
          </tr>))}
        </tbody>
      </table>);
    return (
      <div className="App">
        {body}
      </div>
    );
  }
}

export default App;
