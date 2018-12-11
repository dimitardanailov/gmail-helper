import { createLogger, transports, format } from 'winston'

export class AppLogger {
	
	static simpleLogger() {
		const logger = createLogger({
			transports: [
				//
				// - Write to all logs with level `info` and below to `combined.log` 
				// - Write all logs error (and below) to `error.log`.
				//
				new transports.File({ filename: 'error.log', level: 'error' }),
				new transports.File({ filename: 'combined.log' })
			]
		});
		
		//
		// If we're not in production then log to the `console` with the format:
		// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
		// 
		if (process.env.NODE_ENV !== 'production') {
			logger.add(new transports.Console({
				format: format.simple()
			}));
		}

		return logger
	}


	static info(message: string) {
		const logger = AppLogger.simpleLogger()

		logger.info({
			level: 'info',
			message: message
		})
	}

	static promiseError(err: string) {
		const logger = AppLogger.simpleLogger()

		logger.log({
			private: true,
			level: 'error',
			message: err
		});
	}
}