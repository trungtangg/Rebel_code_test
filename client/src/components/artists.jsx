import React, { Component } from "react";
import ArtistTable from "./artistTable";
import {getArtists,toggleComplete} from "../services/artistService";
import _ from "lodash";
import SearchBox from "./searchBox";

class Artists extends Component {
  state = {
    artists: [],
    searchQuery: "",
    sortColumn: { path: "id", order: "asc" }
  };

  async componentDidMount() {
    const { data: artists } = await getArtists();
    this.setState({ artists});
  }

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleComplete = async id => {
  	const res = await toggleComplete(id);
  	const { data: artists } = await getArtists();
    this.setState({ artists});
  };

  handleSearch = query => {
    this.setState({ searchQuery: query });
  };

  getData = () => {
    const {
      sortColumn,
      searchQuery,
      artists: allartists
    } = this.state;

    let filtered = allartists;
    if (searchQuery)
      filtered = allartists.filter(m =>
        m.artist.toLowerCase().startsWith(searchQuery.toLowerCase())
    );

    const artists = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    return { totalCount: artists.length, data: artists };
  };

  render() {
    const { length: count } = this.state.artists;
    const { sortColumn, searchQuery} = this.state;

    if (count === 0) return <p>There are no artists in the database.</p>;

    const { totalCount, data: artists } = this.getData();

    return (
    	<div>
      		<div>
          		<p>Showing {totalCount} artists in the database.</p>
      		</div>
      		<SearchBox value={searchQuery} onChange={this.handleSearch} />
			<ArtistTable
				artists={artists}
				onComplete={this.handleComplete}
				sortColumn={sortColumn}
				onSort={this.handleSort}
			></ArtistTable>
    	</div>
    );
  }
}

export default Artists;
