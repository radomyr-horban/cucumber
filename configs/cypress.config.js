// import { defineConfig } from 'cypress'
// import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
// import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
// import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild'
const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const {
  addCucumberPreprocessorPlugin,
} = require('@badeball/cypress-cucumber-preprocessor')
const {
  createEsbuildPlugin,
} = require('@badeball/cypress-cucumber-preprocessor/esbuild')

// export default defineConfig({
module.exports = defineConfig({
  e2e: {
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
})
