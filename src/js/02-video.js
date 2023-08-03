
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);



const onTimeUpdate = function (data) {
    const currentTime = data.seconds;
    localStorage.setItem("videoplayer-current-time", currentTime);
    // data is an object containing properties specific to that event
};
const onTimeUpdateTrottle = throttle(onTimeUpdate, 1000);
player.on('timeupdate', onTimeUpdateTrottle);


const startTime = localStorage.getItem('videoplayer-current-time') || 0;


player.setCurrentTime(startTime);

