const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const router = express.Router();

const url = `mongodb+srv://ceigyx:astroaklypse1995@cluster0.gbhty.mongodb.net/locations?retryWrites=true&w=majority`;

const client = new MongoClient(url);

const locationStorage = {
  locations: [],
};

router.post('/add-location', (req, res, next) => {
  // const id = Math.random();
  const dbName = 'locations';

  client.connect(function (err) {
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    db.collection('user-locations').insertOne(
      {
        address: req.body.address,
        coords: {
          lat: req.body.lat,
          lng: req.body.lng,
        },
      },
      function (err, r) {
        if (err) {
          console.log(err);
        }
        console.log(r);
        res.json({ message: 'Stored location!', locId: r.insertedId });
      }
    );

    client.close();
  });

  // locationStorage.locations.push({
  //   id: id,
  //   address: req.body.address,
  //   coords: { lat: req.body.lat, lng: req.body.lng },
  // });
  // res.json({ message: 'Stored location!', locId: id });
});

router.get('/location/:lid', (req, res, next) => {
  const locationId = req.params.lid;

  const dbName = 'locations';
  client.connect(function (err) {
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    db.collection('user-locations').findOne(
      {
        _id: new mongodb.ObjectId(locationId)
      },

      function (err, r) {
        if (err) {
          console.log(err);
        }
        if (!doc) {
          return res.status(404).json({ message: 'Not Found!' });
        }
        console.log(r);
        res.json({ address: doc.address, coordinates: doc.coords });
      }
    );

    client.close();
  });
});

module.exports = router;
