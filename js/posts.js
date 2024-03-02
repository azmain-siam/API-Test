function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}

// function displayPosts(data) {
//   const postContainer = document.getElementById("all-posts");
//   for (const post of data) {
//     const postDiv = document.createElement("div");
//     postDiv.classList.add("posts");
//     postDiv.innerHTML = `
//       <h4>Post: ${post.id}</h4>
//       <h4>Title: ${post.title}</h4>
//       <h5>User ID: ${post.userId}</h5>
//       <p>${post.body}</p>
//     `;
//     postContainer.appendChild(postDiv);
//     console.log(post);
//   }
// }

function displayPosts(data) {
  const postContainer = document.getElementById("all-posts");
  for (const post of data) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("posts");
    postDiv.innerHTML = `
      <h4>Post: ${post.id}</h4>
      <h4>Title: ${post.title}</h4>
      <h5>User ID: ${post.userId}</h5>
      <p>${post.body}</p>
    `;
    postContainer.appendChild(postDiv);
  }
}
