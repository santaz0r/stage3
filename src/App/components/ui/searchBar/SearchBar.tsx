import React from 'react';

type TProps = { sortBy?: string; setSortBy: (value: string) => void };

class SearchBar extends React.Component<TProps> {
  state = { sortBy: localStorage.getItem('rssSearchBy') || '' };

  searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ sortBy: e.target.value });
    this.props.setSortBy(e.target.value);
  };

  componentDidMount(): void {
    this.setState({ sortBy: localStorage.getItem('rssSearchBy') });
  }

  componentWillUnmount(): void {
    localStorage.setItem('rssSearchBy', this.state.sortBy);
  }

  render(): React.ReactNode {
    return (
      <input
        onChange={this.searchHandler}
        value={this.props.sortBy}
        placeholder="Search..."
        type="search"
        name="search"
        data-testid="search-input"
      />
    );
  }
}

export default SearchBar;
