const { db, Vegetable, Plot, Gardener } = require('./model');
db.sync({ force: true })
  .then(result => {
    console.log('Database synced!');
    // console.log(result);

    return Vegetable.bulkCreate([
      { name: 'Tomato', color: 'Red', planted_on: Date.now() },
      { name: 'Cucumber', color: 'Green', planted_on: Date.now() },
      { name: 'Carrot', color: 'Orange', planted_on: Date.now() },
    ]);
  })
  .then(() => {
    return Gardener.bulkCreate([
      { name: 'Xanthe', age: 21 },
      { name: 'Leo', age: 19 },
      { name: 'Ben', age: 100 },
    ]);
  })
  .then(() => {
    return Plot.bulkCreate([
      { size: 29378456, shaded: true },
      { size: 34, shaded: false },
      { size: 7, shaded: true },
    ]);
  })
  .then(() => {
    db.close();
  })
  .catch(error => {
    console.log('Disaster! Something went wrong! ');
    console.log(error);
    db.close();
  });
