import config from "./app/config";
import app from "./app";
import mongoose from "mongoose";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`App-1 listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
