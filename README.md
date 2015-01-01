# Prevent computer or display sleep with HTML5/JavaScript

Include the `sleep.js` script in your page, then control the computer's sleep functionality by calling:

     sleep.prevent()
     sleep.allow()
     
## Limitations

TODO
- Check all browsers
- Check when not active window
- Check when not active tab

## How does it work?

This approach uses a small empty video that is inserted in the page, but off-screen, without sound, but importantly: with an audio track.

This hack in reality controls the video playback which is what makes the browser stay awake.

## Troubleshooting

The videos files are at these locations; make sure they are accessible:

[https://github.com/ivanmaeder/computer-sleep/raw/master/resources/muted-blank.mp4](https://github.com/ivanmaeder/computer-sleep/raw/master/resources/muted-blank.mp4)

[https://github.com/ivanmaeder/computer-sleep/raw/master/resources/muted-blank.ogv](https://github.com/ivanmaeder/computer-sleep/raw/master/resources/muted-blank.ogv)

Check that your browser supports these video formats.

Check that your browser normally stays awake when playing video.

## References:

[http://stackoverflow.com/questions/10377453/play-infinitely-looping-video-on-load-in-html5](http://stackoverflow.com/questions/10377453/play-infinitely-looping-video-on-load-in-html5)

[http://stackoverflow.com/questions/26896400/how-to-allow-system-sleep-on-non-fullscreen-html5-video](http://stackoverflow.com/questions/26896400/how-to-allow-system-sleep-on-non-fullscreen-html5-video)

[https://productforums.google.com/forum/#!msg/youtube/C72RHsRYDpo/XE15rBP3gZUJ](https://productforums.google.com/forum/#!msg/youtube/C72RHsRYDpo/XE15rBP3gZUJ)