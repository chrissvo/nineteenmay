import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('daggast');
  this.route('ceremonie');
  this.route('feest');
});

export default Router;
