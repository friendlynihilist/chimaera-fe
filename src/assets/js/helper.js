function fetchItems() {
  fetch(
    'https://public-api.wordpress.com/rest/v1.1/sites/chimaera731719556.wordpress.com/posts'
  )
    .then((response) => response.json())
    .then((data) => {
      for (let element in data) {
        if (element === 'posts') {
          for (let post of data[element]) {
            // var div_1 = document.createElement("div");
            // div_1.classList.add("mystyle");   
            // btn.innerHTML = "CLICK ME";                   
            // document.body.appendChild(div_1);               
            console.log(post.title + '' + post.content);
            // <section class="page-section live" id="about">
          }
        }
      }
    });
}

// chimaera731719556.wordpress.com/posts/
