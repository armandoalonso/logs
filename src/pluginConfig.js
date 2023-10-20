// WARNING: DO NOT EDIT THIS FILE, IT IS AUTOGENERATED
module.exports = {
  addonType: "plugin",
  id: "piranha305_logs",
  name: "Logs",
  version: "1.0.0.0",
  category:
    // "3d",
    // "data-and-storage",
    // "form-controls",
    // "input",
    // "media",
    // "monetisation",
    // "platform-specific",
    // "web",
    // "other"
    "general",
  author: "piranha305",
  website: "https://piranha305.itch.io/",
  documentation: "https://github.com/armandoalonso/logs/blob/main/README.md",
  description: "Captures logs from game for easier debugging",
  // addonUrl: "https://www.construct.net/en/make-games/addons/####/XXXX", // displayed in auto-generated docs
  githubUrl: "https://github.com/armandoalonso/logs", // displays latest release version in auto-generated docs
  // icon: "icon.svg", // defaults to "icon.svg" if omitted
  type: "object",   // world, object, dom
  domSideScripts: [
    // "domSide.js", // no need to include "c3runtime/" prefix
  ],
  fileDependencies: [
    /*
    {
      filename: "filename.js", // no need to include "c3runtime/" prefix
      type:
        "copy-to-output"
        "inline-script"
        "external-dom-script"
        "external-runtime-script"
        "external-css"

      // for copy-to-output only
      // fileType: "image/png"
    }
    */
  ],
  info: {
    // world only
    defaultImageUrl: null,
    Set: {
      // world only
      IsResizable: false,
      IsRotatable: false,
      Is3D: false,
      HasImage: false,
      IsTiled: false,
      SupportsZElevation: false,
      SupportsColor: false,
      SupportsEffects: false,
      MustPreDraw: false,

      // object only
      IsSingleGlobal: true,

      // world and object
      CanBeBundled: true,
      IsDeprecated: false,
      GooglePlayServicesEnabled: false,
    },
    AddCommonACEs: {
      // world only
      Position: false,
      SceneGraph: false,
      Size: false,
      Angle: false,
      Appearance: false,
      ZOrder: false,
    },
  },
  properties: [
    /*
    {
      type:
        "integer"
        "float"
        "percent"
        "text"
        "longtext"
        "check"
        "font"
        "combo"
        "color"
        "object"
        "group"
        "link"
        "info"

      id: "property_id",
      options: {
        initialValue: 0,
        interpolatable: false,

        // minValue: 0, // omit to disable
        // maxValue: 100, // omit to disable

        // for type combo only
        // items: [
        //   {itemId1: "item name1" },
        //   {itemId2: "item name2" },
        // ],

        // dragSpeedMultiplier: 1, // omit to disable

        // for type object only
        // allowedPluginIds: ["Sprite", "<world>"],

        // for type link only
        // linkCallback: `function(instOrObj) {}`,
        // linkText: "Link Text",
        // callbackType:
        //   "for-each-instance"
        //   "once-for-type"

        // for type info only
        // infoCallback: `function(inst) {}`,
      },
      name: "Property Name",
      desc: "Property Description",
    }
    */
  ],
  aceCategories: {
    // follows the format id: langName
    // in the ACEs refer to categories using the id, not the name
    logs: "Logs",
    timer: "Timer",
    profiler: "Profiler",
  },
  Acts: {
    Log: {
      category: "logs",
      forward: "Log",
      autoScriptInterface: true,
      highlight: false,
      deprecated: false,
      isAsync: false,
      params: [
        {
          id: "message",
          name: "Message",
          desc: "The message to log",
          type: "any",
          value: "",
        },
      ],
      listName: "Log",
      displayText: "Log [i]{0}[/i]",
      description: "Logs a message to the console",
    },
    Info: {
      category: "logs",
      forward: "Info",
      autoScriptInterface: true,
      highlight: false,
      deprecated: false,
      isAsync: false,
      params: [
        {
          id: "message",
          name: "Message",
          desc: "The message to log",
          type: "any",
          value: "",
        },
      ],
      listName: "Info",
      displayText: "Info [i]{0}[/i]",
      description: "Logs an info message to the console",
    },
    Warn: {
      category: "logs",
      forward: "Warn",
      autoScriptInterface: true,
      highlight: false,
      deprecated: false,
      isAsync: false,
      params: [
        {
          id: "message",
          name: "Message",
          desc: "The message to log",
          type: "any",
          value: "",
        },
      ],
      listName: "Warn",
      displayText: "Warn [i]{0}[/i]",
      description: "Logs a warning to the console",
    },
    Error: {
      category: "logs",
      forward: "Error",
      autoScriptInterface: true,
      highlight: false,
      deprecated: false,
      isAsync: false,
      params: [
        {
          id: "message",
          name: "Message",
          desc: "The message to log",
          type: "any",
          value: "",
        },
      ],
      listName: "Error",
      displayText: "Error [i]{0}[/i]",
      description: "Logs an error to the console",
    },
    Debug: {
      category: "logs",
      forward: "Debug",
      autoScriptInterface: true,
      highlight: false,
      deprecated: false,
      isAsync: false,
      params: [
        {
          id: "message",
          name: "Message",
          desc: "The message to log",
          type: "any",
          value: "",
        },
      ],
      listName: "Debug",
      displayText: "Debug [i]{0}[/i]",
      description: "Logs a debug message to the console",
    },
    StartTimer: {
      category: "timer",
      forward: "StartTimer",
      autoScriptInterface: true,
      highlight: false,
      deprecated: false,
      isAsync: false,
      params: [
        {
          id: "timerId",
          name: "Timer Id",
          desc: "The id of the timer",
          type: "string",
          value: "",
        },
      ],
      listName: "Timer Start",
      displayText: "Start Timer [i]{0}[/i]",
      description: "Starts a timer",
    },
    EndTimer: {
      category: "timer",
      forward: "EndTimer",
      autoScriptInterface: true,
      highlight: false,
      deprecated: false,
      isAsync: false,
      params: [
        {
          id: "timerId",
          name: "Timer Id",
          desc: "The id of the timer",
          type: "string",
          value: "",
        },
      ],
      listName: "Timer End",
      displayText: "End Timer [i]{0}[/i]",
      description: "Ends a timer",
    },

    /*
    SampleAction: {
      // The category of the action as it appears in the add action dialog
      category: "general",

      // Forward to the instance function name
      forward: "_SampleAction",
      // Or specify a handler function
      handler: `function () {
        // Your code here
      }`,

      // Set to true to automatically generate a script interface for this action
      // Cases where you might not want this are:
      // 1- If the action params are incompatible with the script interface
      // 2- If you don't want it to appear in the script interface
      // 3- If the script interface has a better way to achieve the same thing
      autoScriptInterface: true,

      // Set to true to highlight the action in the add action dialog
      highlight: true,

      // Set to true to hide the action in the interface. False by default if not specified.
      deprecated: false,

      // Marks the action as async. Defaults to false if not specified.
      isAsync: false,

      // list of parameters
      params: [
        {
          // The id of the parameter. This is used to generate the script interface.
          // It must be unique for each parameter.
          id: "param1",
          // The name of the parameter.
          name: "Param 1",
          // The description of the parameter.
          desc: "The first parameter",

          // The type of the parameter.
          type:
            // The following types can take a default value AND be automatically generated in the script interface
            - "string"
            - "number"
            - "any"
            - "boolean"

            // The following types can take a default value but CANNOT be automatically generated in the script interface
            - "combo"

            // The following types CANNOT take a default value AND CANNOT be automatically generated in the script interface
            - "cmp"
            - "object"
            - "objectname"
            - "layer"
            - "layout"
            - "keyb"
            - "instancevar"
            - "instancevarbool"
            - "eventvar"
            - "eventvarbool"
            - "animation"
            - "objinstancevar"

          // The default value of the parameter. Can be omitted if the type is not a string, number, any, boolean or combo.
          value: "the default value of the parameter",

          // Only for type "combo"
          items: [
            {"itemId1": "itemName1"},
            {"itemId2": "itemName2"},
            {"itemId3": "itemName3"},
          ],

          // Only for type "object"
          allowedPluginIds: ["Sprite", "TiledBg"],
        },
      ],

      // The name of the action as it appears in the add action dialog
      listName: "Sample Action",

      // The text that appears in the event sheet. Note, every single param must be used in the display text.
      // You can also use [b] and [i] tags.
      displayText: "Sample action [i]{0}[/i]",

      // The description of the action as it appears in the add action dialog
      description: "This is a sample action",
    },
    */
  },
  Cnds: {
    /*
    SampleCondition: {
      // The category of the action as it appears in the add condition dialog
      category: "general",

      // Forward to the instance function name
      forward: "_SampleAction",
      // Or specify a handler function
      handler: `function () {
        // Your code here
      }`,

      // Set to true to automatically generate a script interface for this condition
      // Cases where you might not want this are:
      // 1- If the condition params are incompatible with the script interface
      // 2- If you don't want it to appear in the script interface
      // 3- If the script interface has a better way to achieve the same thing
      autoScriptInterface: true,

      // Set to true to highlight the condition in the add condition dialog
      highlight: true,

      // Set to true to hide the condition in the interface. False by default if not specified.
      deprecated: false,

      // special conditions properties. These can all be omitted, and they will default to the following values:
      isTrigger: false,
      isFakeTrigger: false,
      isStatic: false,
      isLooping: false,
      isInvertible: true,
      isCompatibleWithTriggers: true,

      // list of parameters
      params: [
        {
          // The id of the parameter. This is used to generate the script interface.
          // It must be unique for each parameter.
          id: "param1",
          // The name of the parameter.
          name: "Param 1",
          // The description of the parameter.
          desc: "The first parameter",

          // The type of the parameter.
          type:
            // The following types can take a default value AND be automatically generated in the script interface
            - "string"
            - "number"
            - "any"
            - "boolean"

            // The following types can take a default value but CANNOT be automatically generated in the script interface
            - "combo"

            // The following types CANNOT take a default value AND CANNOT be automatically generated in the script interface
            - "cmp"
            - "object"
            - "objectname"
            - "layer"
            - "layout"
            - "keyb"
            - "instancevar"
            - "instancevarbool"
            - "eventvar"
            - "eventvarbool"
            - "animation"
            - "objinstancevar"

          // The default value of the parameter. Can be omitted if the type is not a string, number, any, boolean or combo.
          value: "the default value of the parameter",

          // Only for type "combo"
          items: [
            {"itemId1": "itemName1"},
            {"itemId2": "itemName2"},
            {"itemId3": "itemName3"},
          ],

          // Only for type "object"
          allowedPluginIds: ["Sprite", "TiledBg"],
        },
      ],

      // The name of the condition as it appears in the add condition dialog
      listName: "Sample Condition",

      // The text that appears in the event sheet. Note, every single param must be used in the display text.
      // You can also use [b] and [i] tags.
      displayText: "Sample condition [i]{0}[/i]",

      // The description of the condition as it appears in the add condition dialog
      description: "This is a sample condition",
    },
    */
  },
  Exps: {
    AsJson: {
      category: "logs",
      forward: "AsJson",
      autoScriptInterface: true,
      highlight: false,
      deprecated: false,
      isVariadicParameters: false,
      returnType: "string",
      params: [],
      listName: "AsJson",
      displayText: "AsJson",
      description: "Returns the logs as a JSON string",
    },
    AsJsonPretty: {
      category: "logs",
      forward: "AsJsonPretty",
      autoScriptInterface: true,
      highlight: false,
      deprecated: false,
      isVariadicParameters: false,
      returnType: "string",
      params: [],
      listName: "AsJsonPretty",
      displayText: "AsJsonPretty",
      description: "Returns the logs as a pretty JSON string",
    },
    AllLogs: {
      category: "logs",
      forward: "GetAllLogs",
      autoScriptInterface: true,
      highlight: false,
      deprecated: false,
      isVariadicParameters: false,
      returnType: "string",
      params: [],
      listName: "AllLogs",
      displayText: "AllLogs",
      description: "Returns all the logs as a string",
    },
    Logs: {
      category: "logs",
      forward: "GetLogs",
      autoScriptInterface: true,
      highlight: false,
      deprecated: false,
      isVariadicParameters: false,
      returnType: "string",
      params: [],
      listName: "Logs",
      displayText: "Logs",
      description: "Returns the plaintext logs as a string",
    },
    Infromation: {
      category: "logs",
      forward: "GetInformation",
      autoScriptInterface: true,
      highlight: false,
      deprecated: false,
      isVariadicParameters: false,
      returnType: "string",
      params: [],
      listName: "Infromation",
      displayText: "Infromation",
      description: "Returns the info logs as a string",
    },
    Errors: {
      category: "logs",
      forward: "GetErrors",
      autoScriptInterface: true,
      highlight: false,
      deprecated: false,
      isVariadicParameters: false,
      returnType: "string",
      params: [],
      listName: "Errors",
      displayText: "Errors",
      description: "Returns the errors as a string",
    },
    Warnings: {
      category: "logs",
      forward: "GetWarnings",
      autoScriptInterface: true,
      highlight: false,
      deprecated: false,
      isVariadicParameters: false,
      returnType: "string",
      params: [],
      listName: "Warnings",
      displayText: "Warnings",
      description: "Returns the warnings as a string",
    },
    Debugs: {
      category: "logs",
      forward: "GetDebugs",
      autoScriptInterface: true,
      highlight: false,
      deprecated: false,
      isVariadicParameters: false,
      returnType: "string",
      params: [],
      listName: "Debugs",
      displayText: "Debugs",
      description: "Returns the debugs as a string",
    },
    TimeLog: {
      category: "timer",
      forward: "TimeLog",
      autoScriptInterface: true,
      highlight: false,
      deprecated: false,
      isVariadicParameters: false,
      returnType: "number",
      params: [
        {
          id: "timerId",
          name: "Timer Id",
          desc: "The id of the timer",
          type: "string",
          value: "",
        },
      ],
      listName: "TimeLog",
      displayText: "TimeLog [i]{0}[/i]",
      description: "Returns the time between StartTimer and EndTimer",
    },
    /*
    SampleExpression: {
      // The category of the action as it appears in the expression picker
      category: "general",

      // Forward to the instance function name
      forward: "_SampleAction",
      // Or specify a handler function
      handler: `function () {
        // Your code here
      }`,

      // Set to true to automatically generate a script interface for this expression
      // Cases where you might not want this are:
      // 1- If you don't want it to appear in the script interface
      // 2- If the script interface has a better way to achieve the same thing
      autoScriptInterface: true,

      // Set to true to highlight the expression in the expression picker
      highlight: true,

      // Set to true to hide the expression in the interface. False by default if not specified.
      deprecated: false,

      // The type of the expression.
      returnType:
        - "string"
        - "number"
        - "any" // must be either string or number

      // Set to true if the expression is variadic. False by default if not specified.
      isVariadicParameters: false

      // list of parameters
      params: [
        {
          // The id of the parameter. This is used to generate the script interface.
          // It must be unique for each parameter.
          id: "param1",
          // The name of the parameter.
          name: "Param 1",
          // The description of the parameter.
          desc: "The first parameter",

          // The type of the parameter.
          type:
            // The following types can take a default value AND be automatically generated in the script interface
            - "string"
            - "number"
            - "any"
        },
      ],

      // The description of the expression as it appears in the expression picker
      description: "This is a sample expression",
    },
    */
  },
};