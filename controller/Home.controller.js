sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("com.hirose.mnp.lot.ziemnplot.controller.Home", {
			onInit: function () {
                
            },
            OnProdPlan: function( ){
                 //this.getRouter().navTo("ProductionPlan");             
                 var oRouter = this.getOwnerComponent().getRouter();
			         oRouter.navTo("ProductionPlan");
            },
            OnPacking: function( ){
                var oRouter = this.getOwnerComponent().getRouter();
			         oRouter.navTo("Packing");
            },
            OnCheckDocuments: function( ){
                //var t = oEvent.getSource();
                try {
                                    var r = sap.ushell.Container.getService("CrossApplicationNavigation");
                                    var o = r && r.hrefForExternal({
                                        target: {
                                            semanticObject: "zie_mnp_chekdoc",
                                            action: "display"
                                        }
                                    }) || "";
                                    //var a = window.location.href;
                                    var i = o;
                                    window.open(i, "_self")
            }catch (e) {
                console.error("Got error during getting Cross navigation library; please test only in Fiori launchpad environment", e)
            }   
        } 
		});
	});
