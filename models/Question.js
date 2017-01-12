var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Question = new keystone.List('Question');

Question.add({
    question: { type: Types.Text, required: true, index: true },
});

/**
 * Registration
 */
Question.defaultColumns = 'question';
Question.register();