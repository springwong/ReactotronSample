# ReactotronSample
A repo to demo on Reactotron custom command

## Simple Command
```
Reactotron.onCustomCommand("Console Log", () => Reactotron.log("This is an example"))
```

## Command with arguments
```
import { ArgType } from "reactotron-core-client";

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
```