
const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')


defineSupportCode(({Given, Then, When,After,Before}) => {/**
 * Created by sriramangajala on 22/05/17.
 */

    Before(function (scenario) {
        return client.init();
    });
    //After every feature, end the client session
    After(function (scenario) {
        return client.end();
    });

    Given(/^user is in home page$/, function () {

        return client.assert.containsText('body','Welcome to our stor122e')

    });

    When(/^he goes to information link "([^"]*)"$/, function (link) {

        return client.useXpath().click("//a[text()=\""+link+"\"]").useCss().assert.containsText('body',link)

    });

    Then(/^he should see the heading "([^"]*)"$/, function (link) {
        client.useCss().assert.containsText('body',link)
    });

})

