const FollowupBoss = require("./lib/index")

FollowupBoss.People.GetByName("Sebastian Inman")
    .then(people => console.log(people))
    .catch(error => console.error(error))

