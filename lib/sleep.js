/*
 Copyright (C) 2014 Ivan Maeder
 
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* Prevent computer or display sleep with HTML5/JavaScript, using the
 following functions:

     sleep.prevent()
     sleep.allow()
 */
var sleep = {
    prevent: function() {
        this._video.setAttribute('loop', 'loop');
        this._video.play();
    },
    allow: function() {
        this._video.removeAttribute('loop');
        this._video.stop();
    },
    _init: function() {
        this._video = document.createElement('video');
        this._video.setAttribute('width', '10');
        this._video.setAttribute('height', '10');
        this._video.style.position = 'absolute';
        this._video.style.top = '-10px';
        this._video.style.left = '-10px';

        var source = document.createElement('source');
        source.setAttribute('src', '/lib/muted-blank.mp4');
        source.setAttribute('type', 'video/mp4');

        this._video.appendChild(source);

        document.body.appendChild(this._video);
    },
    _video: null
}

sleep._init();
