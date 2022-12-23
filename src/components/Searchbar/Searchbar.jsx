import React from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default class Searchbar extends React.Component {
  state = {
    name: '',
  };

  handlerChangeName = event => {
    this.setState({
      name: event.target.value,
    });
  };

  reset = () => {
    this.setState({
      name: '',
    });
  };

  handlerSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name);
    this.reset();
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handlerSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.name}
            onChange={this.handlerChangeName}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
