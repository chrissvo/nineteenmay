/* global ga */
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,

  notifyGoogleAnalytics: function() {
    if (config.GOOGLE && config.GOOGLE.TRACKING_ID) {
      ga('create', config.GOOGLE.TRACKING_ID, 'auto');
      return ga('send', 'pageview', {
        'page': this.get('url'),
        'title': this.get('url')
      });
    }
    else {
      Ember.Logger.log('Would have send pageview when ENV.GOOGLE.TRACKING_ID was set: ', this.get('url'));
    }
  }.on('didTransition')
});

Router.map(function() {
  this.route('daggast');
  this.route('ceremonie');
  this.route('feest');
});

export default Router;
