/**
 * Class is responsible to create Gmail raw label data
 */
export class GmailLabelMockObject {

  static getRawGmailData() {
    return [
      {
        id: 'Label_451',
        labelListVisibility: 'labelHide',
        messageListVisibility: 'show',
        name: 'Evernote 🐘',
        type: 'user'
      },
      {
        id: 'Label_160',
        labelListVisibility: 'labelShow',
        messageListVisibility: 'show',
        name: 'MongoLab',
        type: 'user'
      },
      {
        id: 'Label_375',
        name: 'Expedia',
        type: 'user'
      },
      {
        id: 'Label_344',
        name: 'Nike',
        type: 'user'
      },
      {
        id: 'Label_140',
        name: 'Notes',
        type: 'user'
      },
      {
        color: {
          backgroundColor: '#ffad47',
          textColor: '#ffffff'
        },
        labelListVisibility: 'labelHide',
        messageListVisibility: 'show',
        name: 'Kinguin 🎮',
        type: 'user'
      },
      {
        id: 'Label_397',
        labelListVisibility: 'labelShow',
        messageListVisibility: 'show',
        name: 'Amazon Alexa',
        type: 'user'
      },
      {
        color: {
          backgroundColor: '#ffffff',
          textColor: '#a479e2'
        },
        labelListVisibility: 'labelShowIfUnread',
        messageListVisibility: 'show',
        name: 'Log Rocket 🚀',
        type: 'user'
      },
      {
        id: 'Label_321',
        labelListVisibility: 'labelShow',
        messageListVisibility: 'show',
        name: 'Jenkins',
        type: 'user'
      },
      {
        id: 'Label_117',
        labelListVisibility: 'labelShow',
        messageListVisibility: 'show',
        name: 'Newsletters',
        type: 'user'
      }
    ]
  }
}
