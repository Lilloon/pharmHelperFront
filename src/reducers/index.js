import { combineReducers } from 'redux';
import testState from './test';
import loadingScreenState from './LoadScreenReducer'
import mobileState from './mobileState'
import menuState from './menuState'
import VityaDislikeState from './VityaDislikeReducer'
import PopularDrugs from './popularDrugsReducer'
import SearchList from './SearchDrugReducer'
import AllCountries from './AllCountriesReducer';
import SelectedCountry from './SelectedCountryReducer';
import SearchDrugFull from './SearchDrugFull'
import SearchParamsReducer from './SearchParamsReducer';
import analogs from './analogsReducer'
import images from './putImagesReducer'
import popularCheck from './popularCheckReducer'

const rootReducers = () => combineReducers({
  SelectedCountry,
  AllCountries,
  testState,
  loadingScreenState,
  mobileState,
  menuState,
  VityaDislikeState,
  PopularDrugs,
  SearchList,
  SearchDrugFull,
  SearchParamsReducer,
  analogs,
  images,
  popularCheck,
})
export default rootReducers;
