/*
 * Copyright © 2019 Phaeton Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Phaeton Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 */

'use strict';

const defaultConfig = {
	type: 'object',
	properties: {
		fileLogLevel: {
			type: 'string',
			enum: ['trace', 'debug', 'info', 'warn', 'error', 'fatal', 'none'],
			env: 'PHAETON_FILE_LOG_LEVEL',
			arg: '--log,-l',
		},
		logFileName: {
			type: 'string',
			env: 'PHAETON_REDIS_HOST',
		},
		consoleLogLevel: {
			type: 'string',
			enum: ['trace', 'debug', 'info', 'warn', 'error', 'fatal', 'none'],
			env: 'PHAETON_CONSOLE_LOG_LEVEL',
		},
	},
	required: ['fileLogLevel', 'logFileName', 'consoleLogLevel'],
	default: {
		fileLogLevel: 'info',
		consoleLogLevel: 'none',
		logFileName: 'logs/phaeton.log',
	},
};

module.exports = defaultConfig;
