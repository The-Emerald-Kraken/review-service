const faker = require('faker');
const fs = require('fs').promises;
const db = require('./index.js');
const Review = require('./Review.js');
const FILE_COUNT_MAX = 500; //I know this is bad, but im being lazy



// Uncomment once ready to use
// const insertSampleReviews = () => {
//   Review.create(sampleReviews)
//     .then(() => db.close())
//     .catch((err) => console.log(err));
// }

const fakeData = [];
const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomCard = faker.helpers.createCard(); // random contact card containing many properties
console.log(`${randomName}, ${randomEmail}, ${randomCard}`);

const randScore = (max) => Math.round((Math.random() * max) * 100) / 100;
const ranImage = async (max) => {
  let result = [];
  const n = Math.floor(Math.random() * max);
  for (let i = 0; i < n; i += 1) {
    result.push({
      id: i,
      url: fs.readFile(`/img/image${Math.floor(Math.random() * FILE_COUNT_MAX)}.jpg`, { encoding: 'base64' });
    })
  }
};

const generateFakeReview = (productID, reviewID) => {
  for (let i = 0; i < reviewID; i += 1) {
    fakeData.push(
      {
        product_id: productID,
        review_id: reviewID,
        nickname: faker.name.findName(),
        rating: randScore(5),
        title: faker.commerce.productDescription(),
        created_at: faker.date.past(),
        body: faker.lorem.paragraphs(),
        images: ranImage(),
        tags: ['Shirt', 'Pratical', '#streetWear'],
        height: "5'1\"",
        weight: '100 - 125 lbs',
        location: 'New Brunswickw ',
        email: 'myRealEmail@email.com',
        helpful: {
          yes: 1,
          no: 2,
        },
      },
    );
  }
};

// const sampleReviews = [{
//   product_id: 1,
//   review_id: 1,
//   nickname: 'billy!!!',
//   rating: 5,
//   title: 'This is a review',
//   created_at: '2017-11-08T05:05:26.037Z',
//   body: 'Infomation about shirt',
//   images: [{
//     id: 1,
//     url: 'https://www.rei.com/media/e5f7c311-cb6f-4c4f-a5a4-00bd0a5d349a?size=784x588'
//   }],
//   videos: [{
//     id: 1,
//     url: 'https://www.youtube.com/watch?v=P6N7OvL0mww&ab_channel=REI',
//   }],
//   tags: ['Shirt', 'Pratical', '#streetWear'],
//   height: "5'1\"",
//   weight: '100 - 125 lbs',
//   location: 'New Brunswickw ',
//   email: 'myRealEmail@email.com',
//   helpful: {
//     yes: 1,
//     no: 2,
//   },
// },
// {
//   product_id: 1,
//   review_id: 2,
//   nickname: 'jimmy!!!',
//   rating: 5,
//   title: 'This is another review',
//   created_at: '2018-11-08T05:05:26.037Z',
//   body: 'Infomation about shirt',
//   images: [{
//     id: 1,
//     url: 'https://www.rei.com/media/product/883309'
//   },
//   {
//     id: 2,
//     url: 'https://www.rei.com/media/e5f7c311-cb6f-4c4f-a5a4-00bd0a5d349a?size=784x588'
//   }],
//   videos: [{
//     id: 1,
//     url: 'https://www.youtube.com/watch?v=P6N7OvL0mww&ab_channel=REI',
//   }],
//   tags: ['Shirt', 'Not Pratical', '#streetWar'],
//   height: "5'10\"",
//   weight: '100 - 125 lbs',
//   location: 'New York ',
//   email: 'myOtherRealEmail@email.com',
//   helpful: {
//     yes: 8,
//     no: 2,
//   },

// },
// {
//   product_id: 2,
//   review_id: 1,
//   nickname: 'billyagain!!!',
//   rating: 5,
//   title: 'This is a review',
//   created_at: '2019-11-08T05:05:26.037Z',
//   body: 'Infomation about shirt',
//   images: [{
//     id: 1,
//     url: 'https://www.rei.com/media/product/883309'
//   }],
//   tags: ['Shirt', 'Pratical'],
//   height: "5'1\"",
//   weight: '100 - 125 lbs',
//   location: 'New Brunswickw ',
//   email: 'myRealEmail@email.com',
//   helpful: {
//     yes: 1,
//     no: 0,
//   },

// }];

// insertSampleReviews();

// const insertSampleReviews = () => {
//   Review.create(sampleReviews)
//     .then(() => db.close())
//     .catch((err) => console.log(err));
// };

// insertSampleReviews();
