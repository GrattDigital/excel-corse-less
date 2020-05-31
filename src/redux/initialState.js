import {defaultStyles, defaultTitle} from '@/constants'
import {cloneObj} from '@core/utils'

const defaultState = {
  title: defaultTitle,
  colState: {},
  rowState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
  openedDate: new Date().toJSON()
}

const normalize = state => ({
  ...state,
  currentText: '',
  currentStyles: defaultStyles,
})

export function normalizeInitialState(state) {
  return state ? normalize(state) : cloneObj(defaultState)
}
