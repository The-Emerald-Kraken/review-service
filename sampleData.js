const sampleReview = {
  _id: '1',
  product_id: 1,
  review_id: 1,
  nickname: 'theGreekest',
  rating: 4,
  title: 'The Greeks Strike Again',
  createdAt: '2017-11-14T05:57:26.037Z',
  body: 'GreekGreekGreekGreekGreekGreekGreekGreekGreekGreekGreekGreekGreekGreekGreekGreekGreek',
  images: [{
    id: '1',
    url: 'https://fec-pictures.s3-us-west-2.amazonaws.com/image5.jpg'
  }],
  fit: '0.5',
  tags: ['Shirt', 'Pratical', '#streetWear'],
  age: '18 to 24',
  height: 'Shorter than 5\'',
  weight: '375 - 400 lbs',
  location: 'New York',
  email: 'fake@gmail.com',
  helpful: {
    yes: '1',
    no: '2',
  },

}

module.exports = sampleReview;