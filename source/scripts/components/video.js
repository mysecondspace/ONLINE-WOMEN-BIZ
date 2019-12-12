if ($('.video-wrapper')[0]) {
  var videoPlayButton,
  videoWrapper = document.getElementsByClassName('video-wrapper')[0],
  video = document.getElementsByTagName('video')[0],
  videoMethods = {
    renderVideoPlayButton: function() {
      if (videoWrapper.contains(video)) {
        this.formatVideoPlayButton()
          video.classList.add('has-media-controls-hidden')
          videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
          videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
      }
    },

    formatVideoPlayButton: function() {
      videoWrapper.insertAdjacentHTML('beforeend', '\
        <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
            <circle cx="100" cy="100" r="90" fill="rgba(253, 149, 158, .7)" stroke-width="15"/>\
            <polygon points="70, 55 70, 145 145, 100" fill="#022329"/>\
        </svg>\
      ')
    },

    hideVideoPlayButton: function() {
      video.play()
      videoPlayButton.classList.add('is-hidden')
      video.classList.remove('has-media-controls-hidden')
      video.setAttribute('controls', 'controls')
    }
  }

  videoMethods.renderVideoPlayButton()
};
