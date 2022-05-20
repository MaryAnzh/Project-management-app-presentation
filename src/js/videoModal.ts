class VideoPlayer extends Audio {
	public video: HTMLVideoElement;
	
	constructor(video: HTMLVideoElement) {
		super();
		this.video = video;
	}
}

export { VideoPlayer };