const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const {
  addCucumberPreprocessorPlugin,
} = require('@badeball/cypress-cucumber-preprocessor')
const {
  createEsbuildPlugin,
} = require('@badeball/cypress-cucumber-preprocessor/esbuild')

module.exports = defineConfig({
  projectId: '31drtk',

  e2e: {
    baseUrl: 'https://telnyx.com',

    specPattern: '**/*.feature',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config)
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      )
      return config
    },
  },

  viewportWidth: 1920,
  viewportHeight: 1080,

  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/my-test-output.xml',
  },

  video: true,
})
