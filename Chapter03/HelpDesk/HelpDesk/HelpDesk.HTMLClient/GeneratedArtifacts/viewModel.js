﻿/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditEngineer(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditEngineer screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Engineer" type="msls.application.Engineer">
        /// Gets or sets the engineer for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditEngineer.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditEngineer", parameters);
    }

    function BrowseEngineers(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseEngineers screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Engineers" type="msls.VisualCollection" elementType="msls.application.Engineer">
        /// Gets the engineers for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseEngineers.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseEngineers", parameters);
    }

    function ViewEngineer(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewEngineer screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Engineer" type="msls.application.Engineer">
        /// Gets or sets the engineer for this screen.
        /// </field>
        /// <field name="Issues" type="msls.VisualCollection" elementType="msls.application.Issue">
        /// Gets the issues for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewEngineer.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewEngineer", parameters);
    }

    function AddEditIssue(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditIssue screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Issue" type="msls.application.Issue">
        /// Gets or sets the issue for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditIssue.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditIssue", parameters);
    }

    function BrowseIssues(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseIssues screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Issues" type="msls.VisualCollection" elementType="msls.application.Issue">
        /// Gets the issues for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseIssues.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseIssues", parameters);
    }

    function ViewIssue(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ViewIssue screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Issue" type="msls.application.Issue">
        /// Gets or sets the issue for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ViewIssue.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ViewIssue", parameters);
    }

    function Startup(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Startup screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Startup.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Startup", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditEngineer: $defineScreen(AddEditEngineer, [
            { name: "Engineer", kind: "local", type: lightSwitchApplication.Engineer }
        ], [
        ]),

        BrowseEngineers: $defineScreen(BrowseEngineers, [
            {
                name: "Engineers", kind: "collection", elementType: lightSwitchApplication.Engineer,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Engineers;
                }
            }
        ], [
        ]),

        ViewEngineer: $defineScreen(ViewEngineer, [
            { name: "Engineer", kind: "local", type: lightSwitchApplication.Engineer },
            {
                name: "Issues", kind: "collection", elementType: lightSwitchApplication.Issue,
                getNavigationProperty: function () {
                    if (this.owner.Engineer) {
                        return this.owner.Engineer.details.properties.Issues;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        AddEditIssue: $defineScreen(AddEditIssue, [
            { name: "Issue", kind: "local", type: lightSwitchApplication.Issue }
        ], [
        ]),

        BrowseIssues: $defineScreen(BrowseIssues, [
            {
                name: "Issues", kind: "collection", elementType: lightSwitchApplication.Issue,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Issues;
                }
            }
        ], [
        ]),

        ViewIssue: $defineScreen(ViewIssue, [
            { name: "Issue", kind: "local", type: lightSwitchApplication.Issue }
        ], [
        ]),

        Startup: $defineScreen(Startup, [
        ], [
        ]),

        showAddEditEngineer: $defineShowScreen(function showAddEditEngineer(Engineer, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditEngineer screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditEngineer", parameters, options);
        }),

        showBrowseEngineers: $defineShowScreen(function showBrowseEngineers(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseEngineers screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseEngineers", parameters, options);
        }),

        showViewEngineer: $defineShowScreen(function showViewEngineer(Engineer, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewEngineer screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewEngineer", parameters, options);
        }),

        showAddEditIssue: $defineShowScreen(function showAddEditIssue(Issue, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditIssue screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditIssue", parameters, options);
        }),

        showBrowseIssues: $defineShowScreen(function showBrowseIssues(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseIssues screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseIssues", parameters, options);
        }),

        showViewIssue: $defineShowScreen(function showViewIssue(Issue, options) {
            /// <summary>
            /// Asynchronously navigates forward to the ViewIssue screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("ViewIssue", parameters, options);
        }),

        showStartup: $defineShowScreen(function showStartup(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Startup screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Startup", parameters, options);
        })

    });

}(msls.application));