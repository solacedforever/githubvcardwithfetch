//
// let characters = document.querySelector(".githublist");
//
//
// function displayCharacters () {
//   let data = JSON.parse(this.responseText);
//   let template = `
//     <h2>${data.name}</h2>
//     <div class="basic">The Basics</div>
//     <div class="thestory">The Story</div>
//
//     <ul><li><font color="#7DADAD">Name:</font> ${data.name}</li>
//     <li><font color="#7DADAD">Github URL:</font> <a href="">${data.url}</a></li>
//     <li><font color="#7DADAD">Company:</font> ${data.company}</li>
//     <li><font color="#7DADAD">Website:</font> <a href="">${data.blog}</a></li></ul>
//     <div class="bio">${data.bio}</div>`;
//
//   characters.innerHTML = template;
//   }
//
// let req = new XMLHttpRequest();
// req.open("GET", "https://api.github.com/users/solacedforever");
// req.addEventListener("load", displayCharacters);
// req.send();
let githublist = document.querySelector(".githublist");

fetch("https://api.github.com/users/solacedforever")
  // Data is fetched and we get a promise.
  .then(
    // The promise returns a response from the server.
    function(response) {
      // We process the response accordingly.
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(function(data) {
        // let data = JSON.parse(this.responseText);
        let template = `
          <h2>${data.name}</h2>
          <div class="basic">The Basics</div>
          <div class="thestory">The Story</div>

          <ul><li><font color="#7DADAD">Name:</font> ${data.name}</li>
          <li><font color="#7DADAD">Github URL:</font> <a href="">${data.url}</a></li>
          <li><font color="#7DADAD">Company:</font> ${data.company}</li>
          <li><font color="#7DADAD">Website:</font> <a href="">${data.blog}</a></li></ul>
          <div class="bio">${data.bio}</div>`;

        githublist.innerHTML = template;
      });
    }
  )


  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });
