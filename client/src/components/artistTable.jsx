import React, { Component } from "react";
import Table from "./common/table";
import Complete from "./common/complete";
import CurrencyFormat from 'react-currency-format';

class ArtistTable extends Component {
  columns = [
    { path: "id", label: "ID" },
    { path: "artist", label: "Artist" },
    { path: "rate", label: "Rate" },
    { path: "streams", label: "Streams" },
    { 
      label: "Payout",
      key:"payout",
      content: artist => (
        <CurrencyFormat 
        value={artist.rate * artist.streams} 
        displayType={'text'} 
        decimalScale={2}
        thousandSeparator={true} 
        prefix={'$'} />       
      )
    },
    {
      key: "complete",
      label: "Complete",
      content: artist => (
        <Complete completed={artist.complete} onClick={() => this.props.onComplete(artist.id)} />
      )
    },
  ];

  render() {
    const { artists, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={artists}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default ArtistTable;
