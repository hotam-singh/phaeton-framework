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

DELETE FROM "intransfer" "it0"
	USING "intransfer" "it1"
WHERE "it0"."ctid" < "it1"."ctid"
	AND "it0"."transactionId" = "it1"."transactionId";

-- Add unique constraint on intransfer table --
ALTER TABLE "intransfer"
	ADD UNIQUE ("transactionId");
