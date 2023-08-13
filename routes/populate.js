const { faker } = require('@faker-js/faker');
const { MongoClient } = require('mongodb');

const mongoURI = 'mongodb+srv://admin:12344321@blog.sjd6eaj.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection URI

const categories = ['blogs', 'recipes', 'travel', 'tech', 'lifestyle'];

const getRandomCategory = () => {
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
};

const populateCollections = async () => {
  const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('blog');
    for (const category of categories) {
      const collection = db.collection(category);
      const document = {
        title: faker.lorem.sentence(),
        body: faker.lorem.paragraph(),
        author: faker.person.firstName(),
      };
      await collection.insertOne(document);
      console.log(`Inserted a document into ${category} collection`);
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    client.close();
    console.log('Disconnected from MongoDB');
  }
};

populateCollections();