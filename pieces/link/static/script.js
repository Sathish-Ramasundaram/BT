fetch('/api/posts')
  .then(res => res.json())
  .then(posts => {
    const feed = document.getElementById("feed");
    posts.forEach(post => {
      const postDiv = document.createElement("div");
      postDiv.className = "post";

      postDiv.innerHTML = `
        <h3>${post.company}</h3>
        <p class="post-followers">${post.followers}</p>
        <span class="post-time">${post.type}</span>
        <p class="post-content">${post.headline}</p>
        <p class="post-content">${post.content}</p>
        <img src="${post.image}" alt="Post image" />
        <div class="actions">
          <button class="like-btn">👍 Like (${post.likes})</button>
          <button class="comment-btn">💬 Comment (${post.comments})</button>
          <button>🔁 Repost</button>
          <button>📤 Share</button>
        </div>
        <div class="comment-box" style="display:none;">
          <input type="text" placeholder="Write a comment..." />
          <button class="submit-comment">Post</button>
        </div>
      `;

      // Like button logic
      const likeBtn = postDiv.querySelector(".like-btn");
      likeBtn.addEventListener("click", () => {
        post.likes++;
        likeBtn.textContent = `👍 Like (${post.likes})`;
      });

      // Comment button logic
      const commentBtn = postDiv.querySelector(".comment-btn");
      const commentBox = postDiv.querySelector(".comment-box");
      commentBtn.addEventListener("click", () => {
        commentBox.style.display = commentBox.style.display === "none" ? "block" : "none";
      });

      feed.appendChild(postDiv);
    });
  });
