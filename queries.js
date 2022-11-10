// Add a person to the collection. You pick the data, but they should have an empty array for children.

db.people.insertOne({first_name: "Marina"}, {last_name: "Dominguez"}, {email: "md@gmail.com"}, {gender: "Female"}, {age: 27}, {state: "Michigan"} , {children: []})

// Add another person. They should have at least two children.
db.people.insertOne({first_name: "Gabe"}, {last_name: "Lynn"}, {email: "gl@gmail.com"}, {gender: "Male"}, {age: 27}, {state: "Michigan"} , {children: [{name: "Dillin"}, {age: 3}, {name: "Annie"}, {age: 5}]})

// Update one person named Clarence. He moved from North Dakota to South Dakota.
db.people.find({first_name: "Clarence"})
db.people.updateOne({first_name: "Clarence"}, {$set: {state: "South Dakota"} })
// Update Rebecca Hayes. Remove her email address.
db.people.find( {$and: [{first_name: "Rebecca"}, {last_name: "Hayes"}] })

db.people.updateOne( {$and: [{first_name: "Rebecca"}, {last_name: "Hayes"}]}, { $unset: {email: ""} })

// Update everyone from Missouri. They all had a birthday today, so add one to their age. (expect 4 matches)
db.people.updateMany({state: "Missouri"}, {$inc: {age: 1}})

// Jerry Baker has updated information. Replace with a new document:

// { first_name: "Jerry", last_name: "Baker-Mendez", email: "jerry@classic.ly", gender:"Male", age: 28, state: "Vermont", "children": [{name: "Alan", age: 18}, {name: "Jenny", age: 3}] }

// db.people.updateOne({$and: {first_name: "Jerry"}, {last_name: "Baker"}}, {$set: {email: "jerry@classic.ly", age: 28, state: "Vermont", children: [{name: "Alan", age: 18} {name: "Jenny", age: 3}] } })

// Delete Wanda Bowman.

// db.people.deleteOne({first_name: “Wanda”}, {last_name: “Brown”})

// Delete everyone who does not have an email address specified. (expect 36 matches - maybe more depending what you added above)

// db.people.find({email: “ ”})
// db.people.deleteMany({email: “ “})

// In submissions collection
// Add several documents to a new submissions collection. Do it all in one command. (Remember, MongoDB will create the collection for you. Just start adding documents.)
// title: "The River Bend", upvotes: 10, downvotes: 2, artist: <ID of Anna Howard>
// title: "Nine Lives", upvotes: 7, downvotes: 0, artist: <ID of Scott Henderson>
// title: "Star Bright", upvotes: 19, downvotes: 3, artist: <ID of Andrea Burke>
// title: "Why Like This?", upvotes: 1, downvotes: 5, artist: <ID of Steven Marshall>
// title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: <ID of Gerald Bailey>
// ID’s:
// Anna Howard: ‘6369bca857cf081ec86f4cd7 ‘
// Scott Henderson: ‘6369bca857cf081ec86f4d05 ‘
// Andrea Burke: ‘6369bca857cf081ec86f4d88 ‘
// Steven Marshall: ‘6369bca857cf081ec86f4d0e ‘
// Gerald Bailey: ‘6369bca857cf081ec86f4cd5 ‘

// db.submissions.insertMany([
//   { title: "The River Bend", upvotes: 10, downvotes: 2, artist: {_id: ‘6369bca857cf081ec86f4cd7 ‘}},
//   { title: "Nine Lives", upvotes: 7, downvotes: 0, artist:  {_id: ‘6369bca857cf081ec86f4d05 ‘ }},
//   { title: "Star Bright", upvotes: 19, downvotes: 3, artist: {_id: ‘6369bca857cf081ec86f4d88 ‘}},
//   { title: "Why Like This?", upvotes: 1, downvotes: 5, artist: {_id: ‘6369bca857cf081ec86f4d0e ‘}},
//   { title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: {_id:  ‘6369bca857cf081ec86f4cd5 ‘}},
// ]);

// db.submissions.insertMany([
//   { title: "The River Bend", upvotes: 10, downvotes: 2, artist: 6369bca857cf081ec86f4cd7 },
//   { title: "Nine Lives", upvotes: 7, downvotes: 0, artist: 6369bca857cf081ec86f4d05  },
//   { title: "Star Bright", upvotes: 19, downvotes: 3, artist: 6369bca857cf081ec86f4d88 },
//   { title: "Why Like This?", upvotes: 1, downvotes: 5, artist: 6369bca857cf081ec86f4d0e },
//   { title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: 6369bca857cf081ec86f4cd5 },
// ]);

//I've tried the one above many time and couldn't get it to work these are my best guesses

// Add 2 upvotes for "The River Bend".

// db.submissions.updateOne({title: “The River Bend”}, {$inc: {upvotes: 2}} )

// Add a field round2 = true to all submissions with at least 10 upvotes. (expect 3 matches)
db.submissions.updateMany({upvotes: {$gt: 9}}, {$set: {round2: true}})
