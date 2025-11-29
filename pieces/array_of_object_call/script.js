const posts = [{ title: "My First Post" }];
const feed = document.getElementById("feed");

posts.forEach(post => {
  const div = document.createElement("div");
  div.className = "post";
  div.textContent = post.title;
  feed.appendChild(div);
});
