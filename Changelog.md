# Mail Helper

## 1.4.0 - 2019-07-23
##Changed
Project uses `karma-webpack` from version 4 to `5.0.0-alpha.3.0`. Pull request: https://github.com/dimitardanailov/gmail-helper/pull/1

## 1.3.20 - 2019-07-10
###Changed 
The pull request by `snyk` was merged and package.json uses the latest version of each package.

## 1.3.19 - 2019-02-05
### Added
Repo has the first end-to-end web test. Support and library: testcafe.

## 1.3.18 - 2019-02-01
### Added
Redux reducers have necessary tests.                                                                                                  

## 1.3.17 - 2019-01-28
### Added
Redux action have necessary tests.

## 1.3.16 - 2019-01-27
### Added
Redux actions has two tests. For these tests applications uses `jests`. Tests cover `GMAIL_LABELS` and `addLabels`.

## 1.3.15 - 2019-01-24
### Added
`FormSubmitButton` has a test suite. Test suite tests light dom structure and disabled state.

## 1.3.14 - 2019-01-23
### Changed
`@open-wc/testing` library will be used to generate and test each custom element. The first element which is using the architecture is: GmailFilterTextBox

## 1.3.13 - 2019-01-22
### Added
`GmailLabelBackgroundColor` has a test test unit. Unit suite contains tests related with aria attribute, tabindex and _bgColor.

## 1.3.12 - 2019-01-22
### Added
`GmailLabelColor` has a test unit. Unit suite contains tests related with aria attribute, tabindex and _color attribute.

## [1.3.11] - 2019-01-19
### Added
`GmailSelectBox` has a test unit and includes tests related with select box wrapper, select box and option.

## [1.3.10] - 2019-01-12
### Added
`GmailAuthorizeButton` and `GmailSignOutButton` have test unit. Test suites test basic functions - existence and aria role.

## [1.3.9] - 2019-01-11
### Added
Web development has karma configurations. Front-end applications has two unit tests: `GmailConnectedTextFields.unittest` and `GmailConnectedCheckbox.unittest`

## [1.3.8] - 2019-01-08
### Added
eslint and editorconfig will cover indent rules, variable scrope and usage.

## [1.3.7] - 2019-01-07
### Changed
`MailHelperInfo` components has a better explanation - Why Mail Helper could helpful.

## [1.3.6] - 2019-01-07
### Fixed
`GmailFilterTextBox` should have at least one character if `GmailConnectedCheckbox` is unchecked.

## [1.3.5] - 2019-01-07
### Added
`AbstractCheckBox` is a simple native component which provides the basic checkbox functions.
### Changed
`GmailConnectedTextFields` has a custom checkbox component: `GmailConnectedCheckbox`.

## [1.3.4] - 2019-01-04
### Added
`AbstractRadioGroup` supports navigation with keyboard.

## [1.3.3] - 2019-01-04
### Changed
`GmailLabelBackgroundGroup` and `GmailLabelColorGroup` extend AbstractRadioGroup.

## [1.3.2] - 2019-01-04
### Changed
`GmailForm` uses slot structure to wrap all children. `GmailLabelColorHolder` and sub elements has styles improvements.

## [1.3.1] - 2019-01-04
### Added
Meta view port fixs visual issues with mobile resolutions 

## [1.3.0] - 2019-01-03
### Added
Web project has a simple intro page. Intro page contains explanations about pros and cons.
### Changed
`GmailForm` uses `slot` technque to hold elements
### Added
`GmailForm` could be used on Safari
### Change
Home page has a better style

## [1.2.0] - 2019-01-02
### Added
`web` project has two additional configurations:
- webpack is using babel configurations
- webcomponentsjs was implemented

## [1.1.5] - 2018-12-31
### Added
Home page has two additional paragraphs. The first paragprah explains how application works.
The second paragprah describies which browsers are supported.
### Added
Privacy and policy page has an additional secion: 
 
## [1.1.4] - 2018-12-30
### Changed
https://www.googleapis.com/auth/gmail.readonly is not required by application and I removed this gmail scope.

## [1.1.3] - 2018-12-29
### Changed
Privacy page has an extra section: I don't want to use this tool

## [1.1.2] - 2018-12-29
### Changed
Privacy page has an extra an information about each required scope.

## [1.1.1] - 2018-12-29
### Changed
Privacy policy was updated. Page has a lot of new sections. This patch tries to cover Gmail API requirements.

## [1.1.0] - 2018-12-28
### Added 
User can set desired colors (background and text color) if create a new label.

## [1.0.3] - 2018-12-26
### Changed
Privacy policy was updated. Each page has a simple footer navigation.

## [1.0.2] - 2018-12-25
### Added 
Readme section has section that desribes which browsers are supported.

## [1.0.1] - 2018-12-25
### Added
Mail helper has privacy and policy and terms.

## [1.0.0] - 2018-12-25
### Added
Mail helper can create or update an existing label at Gmail.