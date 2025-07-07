const express = require('express');
const adminMiddleware = require('../middleware/adminMiddleware');
const problemRouter = express.Router();//create Router



//Create
problemRouter.post('/create',adminMiddleware,CreateProblem);
problemRouter.patch("/:id",UpdateProblem);
problemRouter.delete("/:id",DeleteProblem);

problemRouter.get('/:id',getProblemById);
problemRouter.get('/',getAllProblem);
problemRouter.get("/user",solvedAllProblemByUser);
 
//Fetch
  
// Update

// Delete