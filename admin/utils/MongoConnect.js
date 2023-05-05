import mongoose from "mongoose";

const connectMongo = async () =>
  mongoose.connect(
    "mongodb+srv://sachinchakradhar8:g9FPkXRPhZV2HUEU@wehub.jp0fhjp.mongodb.net/webhub"
  );

export default connectMongo;
