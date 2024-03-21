const names = [
    'Liam',
    'Emma',
    'Noah',
    'Olivia',
    'William',
    'Ava',
    'James',
    'Isabella',
    'Oliver',
    'Sophia',
    'Benjamin',
    'Charlotte',
    'Elijah',
    'Mia',
    'Lucas',
    'Amelia',
    'Mason',
    'Harper',
    'Logan',
    'Evelyn',
    'Madison',
    'Joseph',
    'Luna',
    'Carter',
    'Grace',
    'Owen',
    'Chloe',
    'Wyatt',
    'Penelope',
    'John',
    'Layla',
    'Jack',
    'Riley',
    'Luke',
    'Zoey',
    'Jayden',
    'Nora',
    'Dylan',
    'Lily',
    'Grayson',
    'Eleanor',
    'Levi',
    'Hannah',
    'Isaac',
    'Lillian',
    'Gabriel',
    'Addison',
    'Julian',
    'Aubrey',
    'Mateo',
    'Hazel',
    'Andrew',
    'Violet',
    'Theodore',
    'Aurora',
    'Caleb',
    'Savannah',
];

const appDescriptions = [
    'Fitness Tracker',
    'Recipe Finder',
    'Language Learning',
    'Virtual Pet Simulator',
    'Puzzle Adventure',
    'Budget Planner',
    'Music Streaming',
    'Weather Forecast',
    'Social Networking',
    'Task Manager',
    'Chat App',
    'Calendar',
    'Maps and Navigation',
    'Web Browser',
    'Meditation Guide',
    'Recipe Book',
    'Card Games',
    'Food Delivery',
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

const getRandomThoughts = () => {
    const thoughts = [
        'This is a random thought',
        'Another random thought',
        'Yet another random thought',
        // Add more random thoughts as needed
    ];
    return thoughts[Math.floor(Math.random() * thoughts.length)];
};


module.exports = { getRandomName, getRandomThoughts };