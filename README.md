# Week 1

```
use video;
db.movies.insertOne({ "title": "Jaws", "year": 1975, "imdb": "tt0073195" });
db.movies.insertOne({ "title": "Mad Max 2: The Road Warrior", "year": 1981, "imdb": "tt0082694" });
db.movies.insertOne({ "title": "Raiders of the Lost Ark", "year": 1981, "imdb": "tt0082971" });
db.movies.find().pretty();
db.movies.find({}).pretty();
db.movies.find({"year": 1981})
```

Return value from find is a cursor 

```
var c = db.movies.find()
c.hasNext() // True
c.next()
c.next()
c.next()
c.hasNext() // False
```