import React from 'react';
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import css from './Searchbar.module.css';

export default class Searchbar extends React.Component {
  state = {
    name: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handlerChangeName = event => {
    this.setState({
      name: event.target.value.trim(),
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
          <button
            type="submit"
            className={css.button}
            disabled={!this.state.name ? true : false}
          >
            <FcSearch className={css.icon} />
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
