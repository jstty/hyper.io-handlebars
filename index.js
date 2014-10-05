/*
 * Handlebars Template Middleware for Hyper.io
 */
'use strict';

var handlebars = require('handlebars');
var _          = require('lodash');

module.exports = Template_Handlebars;

function Template_Handlebars() {
    this.validFileExts = ['handlebars', 'hbs'];
}

Template_Handlebars.prototype.getInfo = function() {
    return {
        name: 'handlebars',
        type: 'template'
    };
};

Template_Handlebars.prototype.init = function() {
    // do nothing
};

Template_Handlebars.prototype.isValidData = function(templateData) {
    if( templateData &&
        _.isString(templateData) &&
        templateData.indexOf('{{') != -1) {
        return true;
    } else {
        return false
    }
};

Template_Handlebars.prototype.isValidFileExtension = function(fileExt) {
    return _.contains(this.validFileExts, fileExt);
};

Template_Handlebars.prototype.compile = function(templateData) {
    return handlebars.compile(templateData);
};
