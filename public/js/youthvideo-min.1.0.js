function loadVIDEO(a){if($("#videoJs-style").length==0){loadcsslink("http://m.youth.cn/images/youth-videojs.css");$("head").append('<style type="text/css" id="videoJs-style">@font-face {font-family: VideoJS;src: url("http://t.m.youth.cn/static/css/VideoJS_5.11.8.eot");}.video-js .vjs-time-control{display:block;}.video-js .vjs-remaining-time{display: none;}.vjs-paused.vjs-has-started .vjs-big-play-button {display: block;}</style>');$.getScript("http://m.youth.cn/images/youth-videojs-ie8.js").done(function(){});$.getScript("http://m.youth.cn/images/youth-videojs.min.js").done(function(){$.getScript("http://m.youth.cn/images/youth-videojs-zh-CN.js").done(function(){});$.getScript("http://m.youth.cn/images/youth-videojs-contrib-hls.min.js").done(function(){a()})})}else{a()}}function loadcsslink(c){var a=document.getElementsByTagName("head")[0];var b=document.createElement("link");b.href=c;b.rel="stylesheet";a.appendChild(b)}function showVJ(){$(".youth-videojs").each(function(){videojs(this.id,{"aspectRatio":"640:360","playbackRates":[1,1.5,2],"fluid":true,language:"zh-CN",controlBar:{children:[{name:"playToggle"},{name:"progressControl"},{name:"durationDisplay"},{name:"fullscreenToggle"},],}})})}$(document).ready(function(){if($(".youth-videojs").length>0){loadVIDEO(showVJ)}});