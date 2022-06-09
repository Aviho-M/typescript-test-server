/** source/routes/posts.ts */
import express from 'express';

import controller from '../controllers/posts';
const router = express.Router();


router.use('/posts', check_authorization);
router.get('/posts', controller.getPosts);
router.get('/posts/:id', controller.getPost);
router.put('/posts/:id', controller.updatePost);
router.delete('/posts/:id', controller.deletePost);
router.post('/posts', controller.addPost);

export = router;
  function  check_authorization(req:any, res:any, next:any) {
    res.status(200).send({e:"not allow"})
    return
    next()
  }