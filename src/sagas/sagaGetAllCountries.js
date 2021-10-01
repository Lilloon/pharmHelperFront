import {
  put, takeLatest,
} from 'redux-saga/effects';
import restAPI from '../utils/rest';
import {
  FetchAllCountriesSucceeded,
  FetchAllCountriesFailed,
  setAllCountriesList,
} from '../actions/sagas/drugsAction'
import { SET_DRUGS_TYPES } from '../actions/types'

function* fetchAllCountries() {
  try {
    const countries = yield restAPI.drugs.getAllCountries();
    yield put(setAllCountriesList(countries.data))
    yield put(FetchAllCountriesSucceeded(countries));
  } catch (e) {
    yield put(FetchAllCountriesFailed(e.message));
  }
}

export const CountriesSaga = [
  takeLatest(SET_DRUGS_TYPES.GET_ALL_COUNTRIES_REQUESTED, fetchAllCountries)]
