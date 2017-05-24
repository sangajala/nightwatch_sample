const seleniumServer = require('selenium-server')
const phantomjs = require('phantomjs-prebuilt')
const chromedriver = require('chromedriver')
const geckodriver = require('geckodriver')


require('nightwatch-cucumber')({
    cucumberArgs: ['--require', 'timeout.js', '--require', 'features/step_definitions', '--format', 'pretty', '--format', 'json:reports/cucumber.json', 'features']
})

module.exports = {
    output_folder: 'reports',
    custom_assertions_path: '',
    live_output: false,
    disable_colors: false,
    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: '',
        host: '127.0.0.1',
        port: 5555
    },
    // test_workers: {
    //     enabled: true,
    //     workers: "auto"
    // },
    test_settings: {
        end_session_on_fail: false,
        skip_testcases_on_fail: false,

        default: {
            launch_url: 'http://demo.nopcommerce.com/',
            selenium_port: 5555,
            selenium_host: '127.0.0.1',
            end_session_on_fail: false,
            skip_testcases_on_fail: false,
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: true,
                path: "reports/screenshots"
            },
            desiredCapabilities: {
                browserName: 'phantomjs',
                javascriptEnabled: true,
                acceptSslCerts: true,
                'phantomjs.binary.path': phantomjs.path
            }
        },
        chrome: {
            screenshots: {
                enabled: false,
                on_failure: true,
                on_error: true,
                path: "reports/screenshots"
            },
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            },
            selenium: {
                cli_args: {
                    'webdriver.chrome.driver': chromedriver.path
                }
            }
        },
        firefox: {
            screenshots: {
                enabled: false,
                on_failure: true,
                on_error: true,
                path: "reports/screenshots"
            },
            desiredCapabilities: {
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true
            },
            selenium: {
                cli_args: {
                    'webdriver.gecko.driver': geckodriver.path
                }
            }
        }
    }
}
