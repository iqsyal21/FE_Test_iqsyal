const audio = document.getElementById("myAudio");

      // Fungsi untuk mengubah ikon play/pause
      function togglePlayPause() {
        const playPauseButton = document.querySelector(".play-pause-button");

        // Mengganti ikon SVG play/pause
        if (audio.paused) {
          playPauseButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#5a6956" class="bi bi-pause-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>
          </svg>  
          `;
        } else {
          playPauseButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#5a6956" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
          </svg>
          `;
        }

        // Memulai atau menghentikan audio
        audio.paused ? audio.play() : audio.pause();
      }