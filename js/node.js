let express = require('express');
let app = express();

app.listen(process.env.PORT, (listener) => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});

app.get("/somethingHere", (request, response) => {
  response.sendFile("/app/directory/to/html/file.html")
})

