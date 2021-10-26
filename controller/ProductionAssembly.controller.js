sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, History, UIComponent) {
		"use strict";

		return Controller.extend("com.hirose.mnp.lot.ziemnplot.controller.ProductionAssembly", {
			onInit: function () {
                
            },
            OnProductAssembly: function(oEvent){
                var t = oEvent.getSource();
                try {
                                    var r = sap.ushell.Container.getService("CrossApplicationNavigation");
                                    var o = r && r.hrefForExternal({
                                        target: {
                                            semanticObject: "zie_mnp_prodasm",
                                            action: "display"
                                        }
                                    }) || "";
                                    var a = window.location.href;
                                    var i = o;
                                    window.open(i, "_self")
            }catch (e) {
                console.error("Got error during getting Cross navigation library; please test only in Fiori launchpad environment", e)
            }  
            },
            onNavBack: function () {
                history.go(-1);
                //    var oHistory, sPreviousHash;
    			//     oHistory = History.getInstance();
                //     sPreviousHash = oHistory.getPreviousHash();
                //     if (sPreviousHash !== undefined) {
                //         window.history.go(-1);
                //     } else {
                //         var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				//         oRouter.navTo("ProductionPlan", true);
                //     }

		}
        });
    });