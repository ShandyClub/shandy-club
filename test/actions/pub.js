import test from 'tape';
import * as actions from '../../source/js/actions/pub';
import * as types from '../../source/js/constants/actions';

test('Actions:Pub - requestPub action output', assert => {

  const actual = actions.requestPub();
  const expected = {type: types.REQUEST_PUB};

  assert.deepEqual(actual, expected,
    'requestPub() should create action to request pub');

  assert.end();

});
