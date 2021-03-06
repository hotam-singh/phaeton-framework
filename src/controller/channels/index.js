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

const BaseChannel = require('./base_channel.js');
const InMemoryChannel = require('./in_memory_channel.js');
const ChildProcessChannel = require('./child_process_channel.js');

/**
 * @namespace framework.controller.channels
 * @see Parent: {@link controller}
 */
module.exports = {
	BaseChannel,
	InMemoryChannel,
	ChildProcessChannel,
};
