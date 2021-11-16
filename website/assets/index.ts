
import MediaPlayer from '@edwaraguiar/platzimediaplayer';
import AutoPlay from '@edwaraguiar/platzimediaplayer/lib/plugins/Autoplay';
import AutoPause from '@edwaraguiar/platzimediaplayer/lib/plugins/AutoPause';
import Ads from '@edwaraguiar/platzimediaplayer/lib/plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay(), new AutoPause, new Ads()],
 });

const playButton: HTMLElement = document.querySelector("#playButton");
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector("#muteButton");
muteButton.onclick = () => {
    if (player.media.muted) {
        player.unmute();
    } else {
        player.mute();
    }
};

// service Worker es una nueva caracteristica
// Puede que no todos los navegadores tenga esta capacidad

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}








