Meteor.publish("users", function() {
  return Meteor.users.find({}, {
    fields: {
      services: 1
    }
  })
});
