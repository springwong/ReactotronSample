import Reactotron from 'reactotron-react-native'
import { ArgType } from "reactotron-core-client";

Reactotron
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect() // let's connect!

Reactotron.onCustomCommand("Console Log", () => Reactotron.log("This is an example"))

Reactotron.onCustomCommand({
    command: "Custom Console Log",
    handler: (params) => Reactotron.log(`Log Message: ${params.message}`),
    args: [
        {
            name: "message",
            type: ArgType.String,
        }
    ]
})