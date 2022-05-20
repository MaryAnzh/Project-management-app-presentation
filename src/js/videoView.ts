class VideoView {
	public sliderNumber: number;
	private videoURL: string[];
	private videoURNumber: number;

	constructor(sliderNumber: number) {
		this.sliderNumber = sliderNumber;
		
		this.videoURL = [
			'https://www.youtube.com/embed/JvSXEfDk_qc', '', '', '', '', '', '',
			// 'https://www.youtube.com/embed/JvSXEfDk_qc',
			// 'https://www.youtube.com/embed/bcm_ewWdH_Y?list=PLyjvX2NTMrLYXQG1bBjzLxJbd2BK41k2K',
			// 'https://www.youtube.com/embed/JE7rA7VaJio',
			// 'https://www.youtube.com/embed/0-UdrQvko1s',
			// 'https://www.youtube.com/embed/L9ZdPd1jok4',
			// 'https://www.youtube.com/embed/et81T7lFqgY',
			// 'https://www.youtube.com/embed/tIn-0W-AAnk',
		];
		this.videoURNumber = this.sliderNumber - 1;
	}

	videoView() {
		const myDiv = document.getElementById(`video-wrap-${this.sliderNumber}`)
		const view = `
			<img class="my-video-img" id="my-video-img-${this.sliderNumber}" src="./img/video.png" data-number="${this.sliderNumber}">
            <div id="video-close-${this.sliderNumber}" class="video-close" data-number="${this.sliderNumber}"></div>
            
            <iframe id="iframe-${this.sliderNumber}" width="280" height="150" src="${this.videoURL[this.videoURNumber]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			
		`
		myDiv.innerHTML = view;
	}

	hiddenTVIconOnClick(e: Event) {
		const elem = <HTMLImageElement>e.target;
		elem.style.display = 'none';
		const cross = document.getElementById(`video-close-${this.sliderNumber}`);
		const iframe = document.getElementById(`iframe-${this.sliderNumber}`);

		function unHiddenVideoWrap() {
			const audipParent = elem.parentElement;
			audipParent.style.background = 'white';

			audipParent.animate([
				{ transform: `scale(0, 0)` },
				{ transform: `scale(1, 0.1)`, },
				{ transform: `scale(1, 1)` },
			], {
				duration: 800,
			})
			setTimeout(() => {
				audipParent.style.display = 'flex';
				cross.style.display = 'block';
				iframe.style.display = 'block';
			}, 1100);
		};
		unHiddenVideoWrap();
	};

	closeVideoWrap(e: Event) {
		const elem = <HTMLImageElement>e.target;
		const cross = document.getElementById(`video-close-${this.sliderNumber}`);
		const iframe = document.getElementById(`iframe-${this.sliderNumber}`);
		const iconTV = document.getElementById(`my-video-img-${this.sliderNumber}`);

		cross.style.display = 'none';
		iframe.style.display = 'none';
		function hiddenVideoWrap() {
			const parent = elem.parentElement;
			parent.animate([
				{ transform: `scale(0, 0)` },
				{ transform: `scale(1, 0.1)` },
				{ transform: `scale(1, 1)` },
			], {
				duration: 800,
				direction: 'reverse'
			})
			setTimeout(() => {
				parent.style.background = 'none';
				iconTV.style.display = 'block';
				iconTV.style.display = 'block';
				iconTV.style.opacity = '0';

			}, 700);
			setTimeout(() => {
				parent.style.display = 'block';
				iconTV.style.opacity = '1';
			}, 800);
		};
		hiddenVideoWrap();
	}

	addEvent() {
		const iconTV = document.getElementById(`my-video-img-${this.sliderNumber}`);
		iconTV.addEventListener('click', (e) => { this.hiddenTVIconOnClick(e) });
		const cross = document.getElementById(`video-close-${this.sliderNumber}`);
		cross.addEventListener('click', (e) => { this.closeVideoWrap(e) });
	}
}

export { VideoView };