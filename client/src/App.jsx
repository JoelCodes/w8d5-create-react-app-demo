import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';

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

const AppPresenter = ({ loading = false, penguins }) => {
  const body = loading ?
    <h1>Loading...</h1> :
    <PenguinTable penguins={penguins} />;
  return (
    <div className="App">
      {body}
    </div>
  );
};

AppPresenter.propTypes = {
  loading: PropTypes.bool,
  penguins: PropTypes.arrayOf(PropTypes.penguin),
};
AppPresenter.defaultProps = {
  loading: false,
  penguins: [],
};

const mapStateToProps = ({ penguins, loading }) => ({
  penguins,
  loading,
});

const AppContainer = connect(mapStateToProps)(AppPresenter);
export default AppContainer;
