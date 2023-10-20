<img src="./src/icon.svg" width="100" /><br>
# Logs <br>
Captures logs from game for easier debugging <br>
<br>
Author: piranha305 <br>
Website: https://piranha305.itch.io/ <br>
Download Latest Version : [Version: 1.0.0.0](https://github.com/armandoalonso/logs/releases/latest) <br>
<sub>Made using [c3ide2-framework](https://github.com/ConstructFund/c3ide2-framework) </sub><br>

## Table of Contents
- [Usage](#usage)
- [Examples Files](#examples-files)
- [Properties](#properties)
- [Actions](#actions)
- [Conditions](#conditions)
- [Expressions](#expressions)
---
## Usage
To build the addon, run the following commands:

```
npm i
node ./build.js
```

To run the dev server, run

```
npm i
node ./dev.js
```

The build uses the pluginConfig file to generate everything else.
The main files you may want to look at would be instance.js and scriptInterface.js

## Examples Files
- [piranha305_logs](./examples/piranha305_logs.c3p)
</br>

---
## Properties
| Property Name | Description | Type |
| --- | --- | --- |


---
## Actions
| Action | Description | Params
| --- | --- | --- |
| Log | Logs a message to the console | Message             *(any)* <br> |
| Info | Logs an info message to the console | Message             *(any)* <br> |
| Warn | Logs a warning to the console | Message             *(any)* <br> |
| Error | Logs an error to the console | Message             *(any)* <br> |
| Debug | Logs a debug message to the console | Message             *(any)* <br> |
| Timer Start | Starts a timer | Timer Id             *(string)* <br> |
| Timer End | Ends a timer | Timer Id             *(string)* <br> |


---
## Conditions
| Condition | Description | Params
| --- | --- | --- |


---
## Expressions
| Expression | Description | Return Type | Params
| --- | --- | --- | --- |
| AsJson | Returns the logs as a JSON string | string |  | 
| AsJsonPretty | Returns the logs as a pretty JSON string | string |  | 
| AllLogs | Returns all the logs as a string | string |  | 
| Logs | Returns the plaintext logs as a string | string |  | 
| Infromation | Returns the info logs as a string | string |  | 
| Errors | Returns the errors as a string | string |  | 
| Warnings | Returns the warnings as a string | string |  | 
| Debugs | Returns the debugs as a string | string |  | 
| TimeLog | Returns the time between StartTimer and EndTimer | number | Timer Id *(string)* <br> | 
