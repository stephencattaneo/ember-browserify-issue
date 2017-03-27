import { test } from 'qunit';
import moduleForAcceptance from 'ember-sandbox/tests/helpers/module-for-acceptance';
import fetchMock from 'npm:fetch-mock';

moduleForAcceptance('Acceptance | root');

test('visiting /', function(assert) {
  fetchMock.get('/stuff.json', {foo: 'bar'});
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
