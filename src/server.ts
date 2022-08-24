import app from "./app";
import { AppDataSource } from "./data-source";

(async () => {
  const PORT = process.env.PORT || 3001;
  await AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });

  app.listen(3333, () => {
    console.log("Running at http://localhost:" + PORT);
  });
})();
