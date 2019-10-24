const songsReducer = () => {
    return[
        {title: 'Mask Off', duration: '4:05'},
        {title: 'Hanna Montana', duration: '3:12'},
        {title: 'Knuck if you buck', duration: '4:20'},
        {title: 'Love Sosa', duration: '5:00'}  
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    // techinically dont really need this but in case you want to add 
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};