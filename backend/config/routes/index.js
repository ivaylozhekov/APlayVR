/**
 * Created by korolev on 22.06.2017.
 */
import {Router} from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({msg: "Hello from the other side!"});
});

export default router;
