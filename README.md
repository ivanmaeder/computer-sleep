# Prevent computer or display sleep with HTML5/JavaScript

Insert this script in your page, then control the computer's sleep functionality with:

     sleep.prevent()
     sleep.allow()

This approach uses a small empty video that is inserted in the page, but off-screen, without sound but (important!) with an audio track.

This hack in reality controls the video playback, which is what makes the browser prevent sleep.

## References:

[http://stackoverflow.com/questions/10377453/play-infinitely-looping-video-on-load-in-html5]()

[http://stackoverflow.com/questions/26896400/how-to-allow-system-sleep-on-non-fullscreen-html5-video]()

[https://productforums.google.com/forum/#!msg/youtube/C72RHsRYDpo/XE15rBP3gZUJ]()