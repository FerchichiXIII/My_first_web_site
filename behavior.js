document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");

    thumbnailElement.addEventListener("click", function() {
      alert("I saw you click!");
    if (thumbnailElement.className === "small") {
        thumbnailElement.className = "big";
    } else {
        thumbnailElement.className = "small";
      }
   });
   });

    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://the-video-games-5.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
