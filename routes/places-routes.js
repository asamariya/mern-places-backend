const express = require('express');

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    address: '20 W 34th St, New York, NY 10001',
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Bldg',
    description: 'Another one of the most famous sky scrapers in the world!',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    address: '20 W 34th St, New York, NY 10001',
    creator: 'u1'
  }
];

router.get('/:pid', (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find(p => p.id === placeId);
  res.json({ place });
});

router.get('/user/:uid', (req, res, next) => {
  const userId = req.params.uid;
  const places = DUMMY_PLACES.filter(p => p.creator === userId);
  res.json({ places });
});

module.exports = router;
