import { 
  LABEL_ACTIONS,
  GMAIL_LABELS,
  addLabels
} from './actions'

import { GmailLabelMockObject } from '../testing/GmailLabelMockObject'
import { Label } from '../models/Label'

describe('actions', () => {

  it('GMAIL_LABELS collection should be empty', () => {
    expect(GMAIL_LABELS).toEqual([]);
  })

  it('should create an action to add a todo', () => {
    const rawLabels = GmailLabelMockObject.getRawGmailData()
    const labels = Label.convertRawLabelDataToModelData(rawLabels)

    const expectedAction = {
      type: LABEL_ACTIONS.LIST_LABELS,
      labels
    }
    
    expect(addLabels(labels)).toEqual(expectedAction)
  })
})
