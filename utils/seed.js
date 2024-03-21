const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');

const { getRandomName, getRandomThoughts } = require('../utils/data');

mongoose.connect('mongodb://localhost/socialdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Create users
    const users = [];
    for (let i = 0; i < 10; i++) {
      const name = getRandomName();
      const email = `${name.toLowerCase().replace(' ', '')}@example.com`;
      users.push({
        username: name,
        email,
      });
    }
    await User.insertMany(users);

    // Create thoughts and associate them with users
    const thoughts = [];
    const usersData = await User.find({});
    for (let i = 0; i < 20; i++) {
      const thoughtText = getRandomThoughts();
      const username = usersData[Math.floor(Math.random() * usersData.length)].username;
      thoughts.push({
        thoughtText,
        username,
      });
    }
    await Thought.insertMany(thoughts);

    console.log('Database seeded!');
    mongoose.disconnect();
  } catch (err) {
    console.error(err);
    mongoose.disconnect();
  }
};

seedDatabase();