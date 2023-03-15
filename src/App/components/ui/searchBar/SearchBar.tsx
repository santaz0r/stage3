import React from 'react';

type TProps = { sortBy?: string; setSortBy: (value: string) => void };

class SearchBar extends React.Component<TProps> {
  searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.setSortBy(e.target.value);
  };

  componentDidMount(): void {
    this.setState({ sortOption: localStorage.getItem('rssSearchBy') });
  }

  render(): React.ReactNode {
    return (
      <input
        onChange={this.searchHandler}
        value={this.props.sortBy}
        placeholder="Search..."
        type="search"
        name="search"
      />
    );
  }
}

export default SearchBar;
