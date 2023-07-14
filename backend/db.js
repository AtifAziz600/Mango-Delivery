const mongoose = require('mongoose');
const mongoURI =
  'mongodb://feralligatrfahim630:evw0Paf1fwaPr53A@ac-ghs1usj-shard-00-00.i8xs90a.mongodb.net:27017,ac-ghs1usj-shard-00-01.i8xs90a.mongodb.net:27017,ac-ghs1usj-shard-00-02.i8xs90a.mongodb.net:27017/juicymangoMERN?ssl=true&replicaSet=atlas-chabik-shard-0&authSource=admin&retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Database is Connected');

    const fetchedData = await mongoose.connection.db.collection('mango_data');
    const data = await fetchedData.find({}).toArray();
    global.mango_data = data;

    const mangoCategory = await mongoose.connection.db.collection(
      'mango_category'
    );
    const categoryData = await mangoCategory.find({}).toArray();
    global.mango_items = categoryData;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = mongoDB;

// const mongoose = require('mongoose');
// const mongoURI =
//   'mongodb://feralligatrfahim630:evw0Paf1fwaPr53A@ac-ghs1usj-shard-00-00.i8xs90a.mongodb.net:27017,ac-ghs1usj-shard-00-01.i8xs90a.mongodb.net:27017,ac-ghs1usj-shard-00-02.i8xs90a.mongodb.net:27017/juicymangoMERN?ssl=true&replicaSet=atlas-chabik-shard-0&authSource=admin&retryWrites=true&w=majority';

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log('Database is Connected');

//     const fetchedData = await mongoose.connection.db.collection('mango_data');
//     const data = await fetchedData.find({}).toArray();
//     console.log(data);
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// };

// module.exports = mongoDB;

// const mongoose = require('mongoose');
// const mongoURI =
//   'mongodb://feralligatrfahim630:evw0Paf1fwaPr53A@ac-ghs1usj-shard-00-00.i8xs90a.mongodb.net:27017,ac-ghs1usj-shard-00-01.i8xs90a.mongodb.net:27017,ac-ghs1usj-shard-00-02.i8xs90a.mongodb.net:27017/juicymangoMERN?ssl=true&replicaSet=atlas-chabik-shard-0&authSource=admin&retryWrites=true&w=majority';

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log('Database is Connected');

//     const fetched_data = await mongoose.connection.db.collection('mango_data');
//     fetched_data.find({}).toArray(function (err, data) {
//       if (err) {
//         console.log(err);
//       } else {
//         global.mango_data = data;
//         console.log(global.mango_data);
//       }
//     });
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// };

// module.exports = mongoDB;

// try {
//   await mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   console.log('Connected');

//   const fetchedData = await mongoose.connection.db.collection('mango_data');
//   const data = await fetchedData.find({}).toArray();
//   console.log(data);
// } catch (error) {
//   console.error('Error connecting to MongoDB:', error);
// }

// const mongoose = require('mongoose');
// const mongoURI =
//   'mongodb+srv://feralligatrfahim630:evw0Paf1fwaPr53A@cluster0.i8xs90a.mongodb.net/juicymangoMERN?retryWrites=true&w=majority';

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');

//     const mangoDataCollection = mongoose.connection.db.collection('mango_data');

//     // Fetch data from the 'mango_data' collection
//     const fetchData = await mangoDataCollection.find({}).toArray();
//     console.log('Fetched data:', fetchData);

//     // Perform further operations with the fetched data

//     // Close the MongoDB connection
//     mongoose.connection.close();
//     console.log('MongoDB connection closed');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// };

// module.exports = mongoDB;
