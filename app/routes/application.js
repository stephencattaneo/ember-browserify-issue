import Ember from 'ember';
import 'ember-network/fetch';

export default Ember.Route.extend({
  model() {
    return fetch('/stuff.json').then( response => response.json());
  },
});
