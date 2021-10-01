import {
  put, takeLatest,
} from 'redux-saga/effects';
import restAPI from '../utils/rest';
import { FetchPicturesSucceeded, setPictures, FetchPicturesFailed } from '../actions/sagas/drugsAction'
import { SET_DRUGS_TYPES } from '../actions/types'

function* fetchImages(obj) {
  try {
    let formData = new window.FormData();
    formData.append('file', obj.$payload.file);
    const user = yield restAPI.drugs.putImages(obj.$payload.id, formData);
    yield put(setPictures(user.data.content))
    yield put(FetchPicturesSucceeded(user));
  } catch (e) {
    yield put(FetchPicturesFailed(e.message));
  }
}

export const putImages = [
  takeLatest(SET_DRUGS_TYPES.PUT_PICTURES_REQUESTED, fetchImages)]
