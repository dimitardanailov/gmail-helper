import { Selector } from 'testcafe' // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `https://fir-playgrounds.firebaseapp.com/`  // specify the start page

//then create a test and place your code there
test('Homepage scrollHeight', async t => {
    const el = await Selector('mail-helper-info')
    
    await t.expect(el.scrollHeight).eql(1684)
})
