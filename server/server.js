import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import constants from "./helpers/constants";
import router from "./routes/routes";
const { OK } = constants.statusCode;
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(router);
app.use(router);
//home route
app.get("/", (req, res) => {
  return res.status(OK).send({
    status: OK,
    message: "Welcome to networks API",
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(
    `network Web API listening on port ${port} in ${process.env.NODE_ENV} mode`
  );
});
export default app;
