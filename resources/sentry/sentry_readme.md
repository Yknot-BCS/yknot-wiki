# How to add sentry to a Quasar project
- Run `yarn add @sentry/vue @sentry/tracing`
- Place sentry.ts into the boot file
- Add `sentry` in the quasar.config.js under boot

# To test Sentry in your project
- Add a button element to MainLayout.vue:
```
<button @click-"throw new Error('Sentry Test')">Throw error</button>
```
- Run `quasar dev`
- Open devtools console in your browser 
- Click the Throw error button
- If there is a Cross Origin error, please turn off your ad-blocker
- If there is a Vue error: "Sentry Test" go to https://sentry.io
- Under Issues on the correct project, there is supposed to be an "Error" entry, then you now you connected Sentry correctly!!! Hooray!

# Installing Sentry's webpack plugin
(if you get errors reading code in Issues page):
- Run `yarn add @sentry/webpack-plugin`
- Place webpack.sentry.js to root of project
- Get a `SENTRY_AUTH_TOKEN` and add to .env from Sentry->Settings->Account->API->Auth Tokens 
- Done!

# Configue Alerts for Sentry:
- Go to Sentry->Alerts->Create Alert
- Choose your conditions and save rule

# How to add a Discord bot:
- Create Discord webhook: https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks
- https://sentrydiscord.dev/create

