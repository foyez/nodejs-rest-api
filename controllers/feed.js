const i18n = require("i18n");

exports.getPosts = (req, res) => {
  res.status(200).json({
    posts: [
      {
        title: i18n.__("post.title"),
        content: "This is the first post!"
      }
    ]
  });
};

exports.createPost = (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  // TODO: create post in db

  res.status(201).json({
    message: "Post created successfully!",
    post: { id: new Date().toISOString(), title, content }
  });
};
