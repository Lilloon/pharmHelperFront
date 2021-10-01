import {
  put, takeLatest,
} from 'redux-saga/effects';
import restAPI from '../utils/rest';
import { setPopularDrugs, FetchPopularSucceeded, FetchPopularFailed } from '../actions/sagas/drugsAction'
import { SET_DRUGS_TYPES } from '../actions/types'

function* fetchPopularDrugs() {
  try {
    const user = yield restAPI.drugs.getPopular();
    yield put(setPopularDrugs(user.data))
    yield put(FetchPopularSucceeded(user));
  } catch (e) {
    yield put(FetchPopularFailed(e.message));
  }
}

export const mySaga = [
  takeLatest(SET_DRUGS_TYPES.USER_FETCH_REQUESTED, fetchPopularDrugs)]
