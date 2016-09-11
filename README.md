# Prevent sleep inside the browser

This script prevents computer or display sleep with HTML5/JavaScript.

## Instructions

Include the `sleep.js` script in your page, then control the computer's sleep functionality by calling:

```
sleep.prevent()
sleep.allow()
```

## Limitations

These tables explains the ability of the script to prevent sleep in different scenarios.

### macOS

Tested on the following browsers: Chrome 52, Firefox 46 and Safari 9. Firefox and Safari display an audio icon when sleep is being prevented.

                                  |Chrome  |Firefox |Safari
----------------------------------|:------:|:------:|:------:
Active tab                        |&#10004;|&#10004;|&#10008;
Active tab; browser in background |&#10004;|&#10004;|&#10008;
Active tab; browser minimised     |&#10004;|&#10008;|&#10008;
Background tab                    |&#10008;|&#10008;|&#10008;

### Windows

                                  |Chrome  |Firefox |IE 9    |IE 10   |IE 11
----------------------------------|:------:|:------:|:------:|:------:|:------:
Active tab                        |?       |?       |?       |?       |?
Active tab; browser in background |?       |?       |?       |?       |?
Active tab; browser minimised     |?       |?       |?       |?       |?
Background tab                    |?       |?       |?       |?       |?

## How does it work?

This approach uses a small empty video that is inserted in the page, but off-screen, without sound, but importantly: with an audio track.

This hack in reality controls the video playback which is what makes the browser stay awake.

## Troubleshooting

The video files are at these locations; make sure there are no problems accessing them:

[https://github.com/ivanmaeder/computer-sleep/raw/master/resources/muted-blank.mp4](https://github.com/ivanmaeder/computer-sleep/raw/master/resources/muted-blank.mp4)

[https://github.com/ivanmaeder/computer-sleep/raw/master/resources/muted-blank.ogv](https://github.com/ivanmaeder/computer-sleep/raw/master/resources/muted-blank.ogv)

Check that your browser supports these video formats.

Check that your browser normally stays awake when playing video.

## References

[http://stackoverflow.com/questions/10377453/play-infinitely-looping-video-on-load-in-html5](http://stackoverflow.com/questions/10377453/play-infinitely-looping-video-on-load-in-html5)

[http://stackoverflow.com/questions/26896400/how-to-allow-system-sleep-on-non-fullscreen-html5-video](http://stackoverflow.com/questions/26896400/how-to-allow-system-sleep-on-non-fullscreen-html5-video)

[https://productforums.google.com/forum/#!msg/youtube/C72RHsRYDpo/XE15rBP3gZUJ](https://productforums.google.com/forum/#!msg/youtube/C72RHsRYDpo/XE15rBP3gZUJ)