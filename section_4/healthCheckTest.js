import { Selector } from 'testcafe';

fixture `Testing Survey Applicaiton`
    .page `https://surveyinterface-v2.opinionsample.com/#/surveys/ab320070-bbad-0134-bb62-0a6b3886cf3d/screens/page_1?publisher_user_id=07b59010-86d2-0131-c9a9-0a424708edaa&panel_user_id=PANEL_USER_TEST_22fd1640-d94b-0137-0d5b-029188bc54b8&panel_user_id_kind=PANEL_USER_KIND_TEST&pparam_offer_click_id=OFFER_CLICK_TEST_22fd1640-d94b-0137-0d5b-029188bc54b8&survey_id=ab320070-bbad-0134-bb62-0a6b3886cf3d&is_test=false&screen_id=page_1`;

test('Testing pages', async t => {
    //page 1
    await t        
        .expect(Selector('#welcometothissurveyaboutgeneralknowledge').innerText)
        .eql('Welcome to this survey about general knowledge!')
        .click(Selector('label'))
        .click(Selector('.btn.custom_button.next_button_button'))

    //page 2
    await t
        .click(Selector('label').withText('1-3 hours'))
        .click(Selector('.btn.custom_button.next_button_button'))

    //page 3
    await t
        .click(Selector('label').nth(0))
        .click(Selector('label').nth(1))
        .click(Selector('label').nth(2))
        .click(Selector('.btn.custom_button.next_button_button'))    

    //page 4
    await t
        .click(Selector('label').withText('Television'))
        .click(Selector('.btn.custom_button.next_button_button'))   

    //page 5
    await t
        .typeText(Selector('input'), 'Albert Einstein')
        .click(Selector('.btn.custom_button.next_button_button'))   

    //page 6
    await t
        .click(Selector('label').withText('Strongly agree'))
        .click(Selector('.btn.custom_button.next_button_button'))   

    //page 7
    await t
        .typeText(Selector('input'), '7')
        .click(Selector('.btn.custom_button.next_button_button'))   

    //page 8
    await t
        .click(Selector('label').withText('City'))
        .click(Selector('.btn.custom_button.next_button_button'))   

    //page 9
    await t
        .click(Selector('label').withText('Gandhi'))
        .click(Selector('.btn.custom_button.next_button_button')) 

    //page 10
    await t
        .click(Selector('label').withText('Editing'))
        .click(Selector('.btn.custom_button.next_button_button'))
});