var Organizer = require('../models/organizers')

var createEvent = function(req, res, next) {
  Organizer.create({
    "title" : req.body.title,
    "name" : req.body.name,
    "date" : req.body.date,
    "email" : req.body.email
  }, function(err, organizer) {
    if(err){
      res.render('index', { title: 'Event Organizer' , data: '', error: err})
    } else {
      res.redirect('/organizer')
    }
  });
}

var getEditPage = function(req, res, next){
  Organizer.findOne({_id: req.params.id}, function(err, result){
    res.render('edit', {
      data: result
    })
  })
}


var editEvent = function(req, res, next){
  Organizer.findOneAndUpdate({
    _id : req.params.id
  }, {
    "title" : req.body.title,
    "name" : req.body.name,
    "date" : req.body.date,
    "email" : req.body.email
  }, function(err, organizer){
    if(err){
      res.send(err)
    } else {
      res.redirect('/organizer')
    }
  })
}

var showEvent = function(req, res, next){
  Organizer.find(function(err, dataEvent) {
    if(err) {
      res.send({error: err})
    } else {
      res.render('index', { title: 'Event Organizer' , data: dataEvent, error: ''});
    }
  });
}

var deleteEvent = function(req, res) {
  Organizer.findByIdAndRemove(req.params.id, function(err, todo){
    if(err){
      res.send(err)
    } else {
      res.redirect('/organizer')
    }
  })
}

module.exports = {
  createEvent,
  editEvent,
  showEvent,
  getEditPage,
  deleteEvent
}
