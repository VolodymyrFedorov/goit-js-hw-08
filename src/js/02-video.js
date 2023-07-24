import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.getElementById('vimeo-player');
const player = new Vimeo(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});

player.on('timeupdate', throttle(updatedTime, 1000));

function updatedTime(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}