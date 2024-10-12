import express from "express";
import {
  searchPerson,
  searchMovie,
  searchTvShow,
} from "../controllers/search.controller.js";
const router = express.Router();

router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv-show/:query", searchTvShow);

export default router;
