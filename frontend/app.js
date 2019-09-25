const getButton = document.getElementById("get");
const postButton = document.getElementById("post");

getButton.addEventListener("click", () => {
  axios
    .get("http://localhost:3000/feed/posts")
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
});

// Headers
const config = {
  headers: {
    "Content-Type": "application/json"
  }
};
// Body
const body = JSON.stringify({
  title: "A Post",
  content: "Created a post"
});

postButton.addEventListener("click", () => {
  axios
    .post("http://localhost:3000/feed/post", body, config)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
});
