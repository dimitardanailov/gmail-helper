import {
  labels
} from './reducers'
import { GmailLabelMockObject} from '../testing/GmailLabelMockObject'

describe('Redux actions', () => {

  describe('reducer -> labels', () => {
    test('should return the initial state', () => {
      expect(labels(undefined, {})).toEqual([])
    })


  })
})
