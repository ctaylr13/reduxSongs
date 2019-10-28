import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if (!song) {
        return <div>Select a Song</div>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}
                <br />
                Duration: {song.duration}
            </p>
            {song.title}
        </div>
    );
};

const mapStateToProps = state => {
    // this holds the selected song from the button 
    return { song: state.selectedSong }
};
// connecting to redux 
export default connect(mapStateToProps)(SongDetail);
