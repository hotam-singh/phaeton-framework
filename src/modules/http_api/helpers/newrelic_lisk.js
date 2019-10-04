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

// eslint-disable-next-line import/order
const newrelic = require('newrelic');
const path = require('path');
const fs = require('fs');
const swaggerNodeRunnerInstrument = require('phaeton-newrelic/src/instrumentation/swagger_node_runner');

const newrelicPhaeton = require('phaeton-newrelic')(newrelic, {
	exitOnFailure: true,
	rootPath: path.join(path.dirname(__filename), '..'),
});

newrelicPhaeton.instrumentDatabase();
newrelicPhaeton.newrelic.instrumentWebframework({
	moduleName: 'swagger-node-runner',
	onRequire: swaggerNodeRunnerInstrument,
	onError: this.errorHandler,
});

const controllerFolder = '/controllers/';
const controllerMethodExtractor = (shim, controller) =>
	Object.getOwnPropertyNames(controller).filter(name =>
		shim.isFunction(controller[name]),
	);

fs.readdirSync(newrelicPhaeton.config.rootPath + controllerFolder).forEach(
	file => {
		if (path.basename(file) !== 'index.js') {
			const controllerPath = `${
				newrelicPhaeton.config.rootPath
			}${controllerFolder}${file}`;
			const identifier = `modules.http_api.controllers.${path
				.basename(file)
				.split('.')
				.slice(0, -1)
				.join('.')}`;

			newrelicPhaeton.instrumentCallbackMethods(
				controllerPath,
				identifier,
				controllerMethodExtractor,
			);
		}
	},
);
