// const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';


const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getVideos(term);
    // getChannels(term);
    if (ev) {
        ev.preventDefault();
    }
}



const getVideos = (term) => {
    // 0. clear out HTML
    document.querySelector(video-cards).innerHTML = "";
    // 1. build theURL with the search term
    const url = 'https://www.apitutor.org/youtube/?q=' + term;
    // 2. fetch the tracks associated with the URL & dump the results on the screen
    fetch(url)
        .then(response => response.json())
        .then(data => {console.log(data.items)
            // what is data? A: list of javascript objects => need to loop
            let counter = 0;

            for (const video of data.items) {
                if (counter === 8) {
                    break;
                }

                // A. create the template
                let video_url = "https://www.youtube.com/watch?v=" + video.id.videoId;
                const template = `
                    <section class="video-card">
                        <div>
                            <img src="${video.snippet.thumbnails.high.url}">
                            <h3>${video.snippet.title}</h3>
                            <div class="footer">
                                <a href=video_url target="_blank">
                                    view on youtube
                                </a>
                            </div>
                        </div>
                    </section>`;


                // B. Figure out which element in the DOM to target
                document.querySelector(video-cards).innerHTML += template;
                ++counter;
            }

            // // after the for loop & DOM population, add click event handlers to play the Songs
        });
};




// const getChannels = (term) => {
//
// };



const doSearch = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    if (ev.keyCode === 0x0D) {
        console.log('Enter key has been pressed.')
        ev.preventDefault();
        search();
    }
};

document.querySelector('#search').onkeyup = doSearch;
