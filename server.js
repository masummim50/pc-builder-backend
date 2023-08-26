/* eslint-disable no-unused-vars */

const  mongoose = require("mongoose");
const app = require("./app");

//
const url ='mongodb+srv://cowhut:newpassword@cluster0.msj15.mongodb.net/pcbuilder?retryWrites=true&w=majority';
// const local = 'mongodb://127.0.0.1:27017/newcowhut';

async function main() {
  try {
    // await mongoose.connect(config.database_url as string);
    await mongoose.connect(url);
    console.log('Connected to MongoDB');

    app.listen(5000, () => {
      console.log(`Server running at port 5000`);
    });
  } catch (error) {
    console.log('Failed to connect to MongoDB:', error);
  }

}

main();
