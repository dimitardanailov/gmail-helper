import {
  LABEL_ACTIONS
} from './actions'

import {
  labels,
  labelBackgroundColor,
  labelColor
} from './reducers'

import { GmailLabelMockObject} from '../testing/GmailLabelMockObject'
import { defaultColorSettings } from '../models/Label'

test('Reducer -> labels: Should return the initial state', () => {
  expect(labels(undefined, {})).toEqual([])
})

test('Reducer -> labels: should return an empty array', () => {
  expect(labels([], {
    type: LABEL_ACTIONS.LIST_LABELS,
    labels: []
  })).toEqual([])
})

test('Reducer -> labels: should return array that contains GMAIL mock data', () => {
  const mockData = GmailLabelMockObject.getGmailData()
  
  expect(labels([], {
    type: LABEL_ACTIONS.LIST_LABELS,
    labels: mockData
  })).toEqual(mockData)
})

test('Reducer -> labels: should add a gmail label', () => {
  const mockObject = GmailLabelMockObject.getGmailData()[0]

  expect(labels([], {
    type: LABEL_ACTIONS.ADD_LABEL,
    label: mockObject
  })).toEqual(mockObject)
})

test('Reducer -> labelBackgroundColor: should return the initial state', () => {
  expect(labelBackgroundColor(undefined, {})).toEqual(null)
})

test('Reducer -> labelBackgroundColor: should return #efefef', () => {
  expect(labelBackgroundColor(null, {
    type: LABEL_ACTIONS.SET_BACKGROUND_COLOR,
    bgColor: '#efefef'
  })).toEqual(defaultColorSettings.backgroundColor)
})

test('Reducer -> labelColor: should return the initial state', () => {
  expect(labelColor(undefined, {})).toEqual(null)
})

test('Reducer -> labelColor: should return #999999', () => {
  expect(labelColor(null, {
    type: LABEL_ACTIONS.SET_COLOR,
    color: '#999999'
  })).toEqual(defaultColorSettings.textColor)
})
