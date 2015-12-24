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
    if(this.services && this.services.twitter)
      return this.services.twitter.screenName
  },
  profileUrl: function() {
    if(this.services && this.services.twitter)
      return this.services.twitter.profile_image_url
  },
  name: function() {
    if(this.services && this.services.twitter)
      return this.services.twitter.profile.name
  }
})
