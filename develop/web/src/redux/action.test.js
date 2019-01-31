import { 
  LABEL_ACTIONS,
  GMAIL_LABELS,
  addLabels,
  addLabel,
  setLabelBackgroundColor,
  setLabelColor
} from './actions'

import { GmailLabelMockObject } from '../testing/GmailLabelMockObject'

describe('Redux actions', () => {

  test('GMAIL_LABELS collection should be empty', () => {
    expect(GMAIL_LABELS).toEqual([]);
  })

  test('should action: addLabels to be equal to Gmail converted raw data', () => {
    const labels = GmailLabelMockObject.getGmailData()
    
    const expectedAction = {
      type: LABEL_ACTIONS.LIST_LABELS,
      labels
    }
    const expectedResult = addLabels(labels)
    
    expect(expectedResult).toEqual(expectedAction)
    expect(expectedResult.labels).toEqual(GMAIL_LABELS)
  })

  test('should action: addLabel created label data', () => {
    const labels = GmailLabelMockObject.getGmailData()
    const label = labels[0]

    const expectedAction = {
      type: LABEL_ACTIONS.ADD_LABEL,
      label
    }

    const expectedResult = addLabel(label)

    expect(expectedResult).toEqual(expectedAction)
  })

  test('should set background an action to set a label background color', () => {
    const bgColor = '#000000'
    const expectedAction = {
      type: LABEL_ACTIONS.SET_BACKGROUND_COLOR,
      bgColor
    }

    expect(setLabelBackgroundColor(bgColor)).toEqual(expectedAction)
  })

  test('should set color an action to a label color', () => {
    const color = '#000000'
    const expectedAction = {
      type: LABEL_ACTIONS.SET_COLOR,
      color
    }

    expect(setLabelColor(color)).toEqual(expectedAction)
  })
})
