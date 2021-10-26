/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comhirose.mnp.lot./zie_mnp_lot/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
