import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { getPenguins } from './penguin-svc';

PropTypes.penguin = PropTypes.shape({
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
});
const PenguinRow = ({ penguin }) => (<tr>
  <td>
    {penguin.name}
  </td>
  <td>
    <img className="penguin-img" src={penguin.imgUrl} alt={penguin.name} />
  </td>
</tr>);

PenguinRow.propTypes = {
  penguin: PropTypes.penguin.isRequired,
};

const PenguinTable = ({ penguins }) => (<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Image</th>
    </tr>
  </thead>
  <tbody>
    {penguins.map(penguin => <PenguinRow key={penguin.id} penguin={penguin} />)}
  </tbody>
</table>);

PenguinTable.propTypes = {
  penguins: PropTypes.arrayOf(PropTypes.penguin).isRequired,
};

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
      <PenguinTable penguins={this.state.penguins} />;
    return (
      <div className="App">
        {body}
      </div>
    );
  }
}

export default App;
