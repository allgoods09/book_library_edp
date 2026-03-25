// /**
//  * Video Events (5 pts)
//  * Handles play, pause, and ended events for the book review video.
//  */
// const reviewVideo  = document.getElementById('review-video');
// const videoStatus  = document.getElementById('video-status');

// if (reviewVideo) {
//   reviewVideo.addEventListener('play', () => {
//     videoStatus.textContent = '▶ Now playing review…';
//   });

//   reviewVideo.addEventListener('pause', () => {
//     videoStatus.textContent = '⏸ Paused.';
//   });

//   reviewVideo.addEventListener('ended', () => {
//     videoStatus.textContent = '✅ Review finished. Hope it helped!';
//   });

//   // TODO: add timeupdate to show a reading progress bar
// }








/**
 * Video Events (5 pts)
 * Since we're using a YouTube iframe, we use the YouTube IFrame Player API
 * to hook into play, pause, and ended events.
 */

// Load the YouTube IFrame API
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
document.head.appendChild(tag);

// This function is called automatically by the API when it's ready
function onYouTubeIframeAPIReady() {
  // Player is only created once a book is selected, so we wait
  console.log('[VideoEvents] YouTube API ready.');
}

/**
 * Call this after setting iframe.src to attach event listeners.
 * Used in book-card.js after a review is selected.
 */
function attachYouTubeEvents(videoId) {
  const status = document.getElementById('video-status');

  new YT.Player('review-video', {
    videoId: videoId,
    events: {
      onStateChange: (e) => {
        if (e.data === YT.PlayerState.PLAYING) {
          status.textContent = '▶ Now playing review…';
        } else if (e.data === YT.PlayerState.PAUSED) {
          status.textContent = '⏸ Paused.';
        } else if (e.data === YT.PlayerState.ENDED) {
          status.textContent = '✅ Review finished. Hope it helped!';
        }
      }
    }
  });
}