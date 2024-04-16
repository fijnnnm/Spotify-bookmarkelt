// Prompt the user to enter the Spotify playlist URL
var playlistURL = prompt('Enter the Spotify playlist URL:');

if (playlistURL) {
    // Create an iframe with the Spotify playlist embedded
    var iframe = document.createElement('iframe');
    iframe.src = 'https://open.spotify.com/embed/playlist/' + getPlaylistID(playlistURL);
    iframe.width = '300';
    iframe.height = '380';
    iframe.frameborder = '0';
    iframe.allowtransparency = 'true';
    iframe.allow = 'encrypted-media';

    // Append the iframe to the document body
    document.body.appendChild(iframe);
}

// Function to extract the playlist ID from the URL
function getPlaylistID(url) {
    var matches = url.match(/playlist\/([a-zA-Z0-9]+)/);
    if (matches) {
        return matches[1];
    } else {
        return null;
    }
}
