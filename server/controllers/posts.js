const {User} = require('../models/user')
const {Post} = require('../models/post')

module.exports = {
  getAllPosts: () => {
    console.log("get all posts")
  },
  getCurrentUserPosts: () => {
    console.log("get current user posts")
  },
  addPost: async (req, res) => {
    try {
        const {title, content, status, userId} = req.body
        await Post.create({title, content, privateStatus: status, userId})
        res.sendStatus(200)
    } catch (error) {
        console.log('ERROR IN getCurrentUserPosts')
        console.log(error)
        res.sendStatus(400)
    }
  },
  editPost: () => {
    console.log("edit post")
  },
  deletePost: () => {
    console.log("delete post")
  }
}