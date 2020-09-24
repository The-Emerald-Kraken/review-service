const db = require('./index.js');
const Review = require('./Review.js');

const sampleReviews = [{
  product_id: 1,
  review_id: 1,
  nickname: 'billy!!!',
  rating: 5,
  title: 'This is a review',
  created_at: '2017-11-08T05:05:26.037Z',
  body: 'Infomation about shirt',
  images: [{
    id: 1,
    url: 'https://www.rei.com/media/e5f7c311-cb6f-4c4f-a5a4-00bd0a5d349a?size=784x588'
  }],
  videos: [{
    id: 1,
    url: 'https://www.youtube.com/watch?v=P6N7OvL0mww&ab_channel=REI',
  }],
  tags: ['Shirt', 'Pratical', '#streetWear'],
  height: "5'1\"",
  weight: "100 - 125 lbs",
  location: 'New Brunswickw ',
  email: 'myRealEmail@email.com',
  helpful: {
    yes: 1,
    no: 2
  },


},
{
  product_id: 1,
  review_id: 2,
  nickname: 'jimmy!!!',
  rating: 5,
  title: 'This is another review',
  created_at: '2018-11-08T05:05:26.037Z',
  body: 'Infomation about shirt',
  images: [{
    id: 1,
    url: 'https://www.rei.com/media/product/883309'
  },
  {
    id: 2,
    url: 'https://www.rei.com/media/e5f7c311-cb6f-4c4f-a5a4-00bd0a5d349a?size=784x588'
  }],
  videos: [{
    id: 1,
    url: 'https://www.youtube.com/watch?v=P6N7OvL0mww&ab_channel=REI',
  }],
  tags: ['Shirt', 'Not Pratical', '#streetWar'],
  height: "5'10\"",
  weight: "100 - 125 lbs",
  location: 'New York ',
  email: 'myOtherRealEmail@email.com',
  helpful: {
    yes: 8,
    no: 2
  },


},
{
  product_id: 2,
  review_id: 1,
  nickname: 'billyagain!!!',
  rating: 5,
  title: 'This is a review',
  created_at: '2019-11-08T05:05:26.037Z',
  body: 'Infomation about shirt',
  images: [{
    id: 1,
    url: 'https://www.rei.com/media/product/883309'
  }],
  tags: ['Shirt', 'Pratical'],
  height: "5'1\"",
  weight: "100 - 125 lbs",
  location: 'New Brunswickw ',
  email: 'myRealEmail@email.com',
  helpful: {
    yes: 1,
    no: 0
  },


}];

const insertSampleReviews = () => {
  Review.create(sampleReviews)
    .then(() => db.close())
    .catch((err) => console.log(err));
}

insertSampleReviews();