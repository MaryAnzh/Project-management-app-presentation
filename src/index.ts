import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.js';
import { VideoView } from './js/videoView';
import './styles/style.css';

let sky = new Reveal({
	plugins: [Markdown, RevealHighlight, RevealNotes]
})
sky.initialize({
	theme: 'default'
});

const videoViewArray: VideoView[] = [];
const videoView_1 = new VideoView(1);
videoViewArray.push(videoView_1);
const videoView_2 = new VideoView(2);
videoViewArray.push(videoView_2);
const videoView_3 = new VideoView(3);
videoViewArray.push(videoView_3);
const videoView_4 = new VideoView(4);
videoViewArray.push(videoView_4);
const videoView_5 = new VideoView(5);
videoViewArray.push(videoView_5);
const videoView_6 = new VideoView(6);
videoViewArray.push(videoView_6);
const videoView_7 = new VideoView(7);
videoViewArray.push(videoView_7);

function changTextOnTVOnMouseOver(e: Event) {
	const elem = <HTMLImageElement>e.target;
	elem.src = './img/video_play.png';
}

function changTextOnTVOnMouseOut(e: Event) {
	const elem = <HTMLImageElement>e.target;
	elem.src = './img/video.png';
}

window.addEventListener('load', () => {
	videoViewArray.forEach(elem => {
		elem.videoView();
		elem.addEvent();
	});
	const iconTVs = document.querySelectorAll('.my-video-img');
	iconTVs.forEach(elem => { elem.addEventListener('mouseover', (e) => changTextOnTVOnMouseOver(e)) });
	iconTVs.forEach(elem => { elem.addEventListener('mouseout', (e) => changTextOnTVOnMouseOut(e)) });
});