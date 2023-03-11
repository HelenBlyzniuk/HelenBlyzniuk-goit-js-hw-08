import throttle from "lodash.throttle";   
import Player from "@vimeo/player";
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const timeUpdate = function (time) {
    localStorage.setItem('videoplayer-current-time');
}