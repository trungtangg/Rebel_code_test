const helperFunction = require('../helpers/helperFunction');

// constructor
const artist = function(artist) {
    this.artist = artist.artist;
    this.rate = artist.rate;
    this.streams = artist.streams;
    this.complete = artist.complete;
};

artist.retrieveAll = (result) => {
    const query =  `SELECT 
                        id, artist, rate, streams, complete 
                        FROM roster;`

    pool.query(query,
        (err, results) => {
            if (err || results.length === 0) {
                console.log('error: ', err);
                result(
                    helperFunction.responseHandler(false, err ? err.statusCode : 404, err ? err.message : 'There are no tags', null),
                    null
                );
                return;
            }
            result(
                null,
                helperFunction.responseHandler(true, 200, 'Success', results)
            );
        });
}

artist.toggleComplete = (id, result) => {
    const query =  `UPDATE roster set complete = !complete WHERE id = ? ;`

    pool.query(
        query,
        id,
        (err,res) => {
            if (err) {
                console.log('error: ', err);
                result(
                    helperFunction.responseHandler(false, err.statusCode, err.message, null),
                    null
                );
                return;
            }
            result(
                null,
                helperFunction.responseHandler(true, 200, 'complete toggled', id)
            );
        });
}


artist.create = (newartist, result) => {
    const query = `INSERT INTO roster(artist,rate,streams) VALUES(?,?,?);`;

    pool.query(
        query,
        [newartist.artist, newartist.rate,newartist.streams],
        (err,res) => {
            if (err) {
                console.log('error: ', err);
                result(
                    helperFunction.responseHandler(false, err.statusCode, err.message, null),
                    null
                );
                return;
            }
            result(
                null,
                helperFunction.responseHandler(true, 200, 'artist Added', res.insertId)
            );
        });
};

artist.remove = (id, result) => {
    const query = ` DELETE FROM roster WHERE id = ?;`;

    pool.query(query ,
        id,
        (err, res) => {
            if (err) {
                console.log('error: ', err);
                result(
                    helperFunction.responseHandler(false, err.statusCode, err.message, null),
                    null
                );
                return;
            }
            result(
                null,
                helperFunction.responseHandler(true, 200, 'artist Removed', null)
            );
        });
}

module.exports = artist;