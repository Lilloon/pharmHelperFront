import { all } from 'redux-saga/effects';
import { mySaga } from './saga';
import { searchSaga } from './searchSaga'
import { CountriesSaga } from './sagaGetAllCountries'
import { searchFullDrug } from './searchFullSaga';
import { searchAnalogs } from './sagaAnalogs';
import { putImages } from './putImages';

export default function* rootSaga() {
  yield all([
    ...mySaga,
    ...searchSaga,
    ...CountriesSaga,
    ...searchFullDrug,
    ...searchAnalogs,
    ...putImages,
  ])
}
