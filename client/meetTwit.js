Template.content.helpers({
  users: function() {
    return Meteor.users.find();
  },
  screenName: function() {
    return Meteor.user().services.twitter.screenName
  }
})

Template.content.onCreated(function() {
  Meteor.subscribe("users");
})

Template.user.helpers({
  screenName: function() {
    if(services && services.twitter)
      return services.twitter.screenName
  },
  profileUrl: function() {
    if(services && services.twitter)
      return services.twitter.profile_image_url
  },
  name: function() {
    if(services && services.twitter)
      return services.twitter.profile.name
  }
})
