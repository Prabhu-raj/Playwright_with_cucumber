import * as winston from 'winston';
import colors from '@colors/colors';
import { execution } from '../config/env';

//Define the custom format
const myFormat = winston.format.printf(({ level, message, timestamp }) => {
    const msg = String(message);
    let colorizedMessage = msg;
    switch (level) {
        case 'error':
            colorizedMessage = colors.red(msg);
            break;
        case 'warn':
            colorizedMessage = colors.yellow(msg);
            break;
        case 'info':
            colorizedMessage = colors.green(msg);
            break;
    }
    return `${timestamp} ${level}: ${colorizedMessage}`
});

//Create a logger instance
const logger = winston.createLogger({
    level: execution.logLevel,
    format: winston.format.combine(
        winston.format.timestamp(),
        myFormat
    ),
    transports: [
        new winston.transports.Console()
    ]
})

export default logger;