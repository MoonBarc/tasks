import * as chalk from "chalk"

class LogLevel {
    constructor(name: string, chalkcolor: chalk.Chalk) {
        this.name = name;
        this.chalkcolor = chalkcolor;
    }

    name: string
    chalkcolor: chalk.Chalk

    log(msg: string) {
        const prefix = `[${this.chalkcolor(this.name.toUpperCase())}] `
        console.log(prefix + msg)
    }
}

const levels = {
    VERBOSE: new LogLevel("verbose", chalk.gray),
    NODES: new LogLevel("nodes", chalk.bold.magenta),
    INFO: new LogLevel("info", chalk.blue),
    WARN: new LogLevel("warn", chalk.yellow),
    ERROR: new LogLevel("error", chalk.redBright),
    CRITICAL: new LogLevel("critical", chalk.red),
    FATAL: new LogLevel("fatal", chalk.bgRed.white),
    SUCCESS: new LogLevel("success", chalk.green),
    API: new LogLevel("api", chalk.cyan)
}

export default levels