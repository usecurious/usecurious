var keystone = require('keystone');
var Types = keystone.Field.Types;
var moment = require('moment');

/**
 * Question Model
 * ==========
 */
var Question = new keystone.List('Question', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    defaultSort: '-createdAt'
});

var DefaultLaunchDate = moment()
    .add(1, 'days')
    .startOf('day')
    .add(10, 'hours')
    .add(30, 'minutes')

Question.add({
    title: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    launchDate: { type: Types.Date, initial: true, default: DefaultLaunchDate }
});

/**
 * Registration
 */
Question.defaultColumns = 'title';
Question.register();