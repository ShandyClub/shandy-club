import { take, put, call } from 'redux-saga/effects';

// TODO - import some action types
import { SOME_ACTION } from './actionTypes'

export default function* <%= module %>() {

  yield take(SOME_ACTION);

}
