import Post from "../model/post.model.js";
import errorHandler from "../utils/error.js";

export const create = async (req, res, next) => {
  //   console.log(req.user);
  if (!req.user.isAdmin) {
    return next(errorHandler(403, "You are not allowed to create a post"));
  }
  //   console.log(req.body);
  if (!req.body?.title || !req.body?.content) {
    return next(errorHandler(400, "Please provide title and content"));
  }
  //   console.log(req.body.title);
  const slug = req.body.title
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, "");

  const newPost = new Post({
    ...req.body,
    slug,
    userId: req.user.id,
  });
  try {
    const savePost = await newPost.save();
    res.status(201).json(savePost);
  } catch (err) {
    next(errorHandler(500, err.message));
  }
};
