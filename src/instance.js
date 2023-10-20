function getInstanceJs(parentClass, scriptInterface, addonTriggers, C3) {
  return class extends parentClass {
    constructor(inst, properties) {
      super(inst);

      if (properties) { }

      if(console.all === undefined){
        console.all = [];

        console.defaultLog = console.log.bind(console);
        console.log = function () {
          console.defaultLog.apply(console, arguments);
          console.all.push({"type":"log", "datetime":Date().toLocaleString(), "value":Array.from(arguments)});
        };

        console.defaultInfo = console.info.bind(console);
        console.info = function () {
          console.defaultInfo.apply(console, arguments);
          console.all.push({"type":"info", "datetime":Date().toLocaleString(), "value":Array.from(arguments)});
        };

        console.defaultError = console.error.bind(console);
        console.error = function(){
            console.defaultError.apply(console, arguments);
            console.all.push({"type":"error", "datetime":Date().toLocaleString(), "value":Array.from(arguments)});
        }
  
        console.defaultWarn = console.warn.bind(console);
        console.warn = function(){
            console.defaultWarn.apply(console, arguments);
            console.all.push({"type":"warn", "datetime":Date().toLocaleString(), "value":Array.from(arguments)});
        }
        
        console.defaultDebug = console.debug.bind(console);
        console.debug = function(){
            console.defaultDebug.apply(console, arguments);
            console.all.push({"type":"debug", "datetime":Date().toLocaleString(), "value":Array.from(arguments)});
        }
      }
    }

    Log(message){
      console.log(message);
    }

    Info(message) {
      console.info(message);
    }

    Warn(message){
      console.warn(message);
    }

    Error(message){
      console.error(message);
    }

    Debug(message){
      console.debug(message);
    }

    StartTimer(name) {
      console.time(name);
    }

    EndTimer(name) {
      console.timeEnd(name);
    }

    TimeLog(name) {
      console.timeLog(name);
    }

    Release() {
      super.Release();
    }

    AsJson() {
      return JSON.stringify(console.all);
    }

    AsJsonPretty() {
      return JSON.stringify(console.all, null, 4);
    }

    GetAllLogs() {
      const logString = console.all.map((x) => x.value.join(" ")).join("\n");
      return logString;
    }

    GetLogs() {
      const logs = console.all.filter((x) => x.type === "log");
      const logString = logs.map((x) => x.value.join(" ")).join("\n");
      return logString;
    }

    GetInformation() {
      const information = console.all.filter((x) => x.type === "info");
      const informationString = information
        .map((x) => x.value.join(" "))
        .join("\n");
      return informationString;
    }

    GetErrors() {
      const errors = console.all.filter((x) => x.type === "error");
      const errorString = errors.map((x) => x.value.join(" ")).join("\n");
      return errorString;
    }

    GetWarnings() {
      const warnings = console.all.filter((x) => x.type === "warn");
      const warningString = warnings.map((x) => x.value.join(" ")).join("\n");
      return warningString;
    }

    GetDebugs() {
      const debugs = console.all.filter((x) => x.type === "debug");
      const debugString = debugs.map((x) => x.value.join(" ")).join("\n");
      return debugString;
    }

    SaveToJson() {
      return {
        // data to be saved for savegames
      };
    }

    LoadFromJson(o) {
      // load state for savegames
    }

    Trigger(method) {
      super.Trigger(method);
      const addonTrigger = addonTriggers.find((x) => x.method === method);
      if (addonTrigger) {
        this.GetScriptInterface().dispatchEvent(new C3.Event(addonTrigger.id));
      }
    }

    GetScriptInterfaceClass() {
      return scriptInterface;
    }
  };
}
