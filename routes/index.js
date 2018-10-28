
var path = require('path');
module.exports = function(app, dbs) {
  /*
  analytics.html
  index.html
   */

   app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname,"../pages/index.html"));
   });

   app.get('/analytics', (req,res) =>{
     res.sendFile(path.join(__dirname, "../pages/analytics.html"));
   });

  app.get('/production', (req, res) => {
      var myobj = { name: "Company Inc", address: "Highway 37" };
  dbs.production.collection("test").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });
  dbs.production.collection('test').find({}).toArray((err, docs) => {
      if (err) {
        console.log(err)
        res.error(err)
      } else {
        res.json(docs)
      }
    })
    res.sendFile(path.join(__dirname,"../public/html/index.html"))
  })

  app.get('/appointments', (req, res) => {
      dbs.production.collection("appointments").find({}).toArray((err,docs) => {
          console.log(docs);
          res.json(docs)
      });
  })
  app.post('/createappointments', function(req, res) {
      dbs.production.collection('appointments').insert(req.body, function (err, result) {
          if (err)
             res.send('Error');
          else
            res.send('Success');
        }






  return app
}
