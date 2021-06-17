import React, { Component } from 'react';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  changeInput = e => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchQuery);
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.button}>
            <span className={styles.label}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search pictures"
            value={searchQuery}
            onChange={this.changeInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;