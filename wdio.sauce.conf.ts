import { config as sharedConfig } from './wdio.chrome.conf.js'

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        region: 'us',
        services: ['sauce'],
        capabilities: [{
            maxInstances: 5,
            browserName: 'firefox',
            browserVersion: 'latest',
            platformName: 'macOS 10.13',
            'sauce:options': {
                build: `Build ${Math.ceil(Date.now() / 1000)}`
            }
        }]
    }
}