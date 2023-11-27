import mongoose from "mongoose";
const url =process.env.MONGO_DB;
mongoose.set("strictQuery", false);
const connection = async () => {
  await mongoose
    .connect(url)
    .then(function (result) {
      console.log("connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
export default connection;
