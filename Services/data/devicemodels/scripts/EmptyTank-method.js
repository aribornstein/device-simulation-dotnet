// Copyright (c) Microsoft. All rights reserved.

/*global log*/
/*global updateState*/
/*jslint node: true*/

"use strict";

/**
 * Entry point function called by the simulation engine.
 *
 * @param context        The context contains current time, device model and id
 * @param previousState  The device state since the last iteration
 * @param previousProperties  The device properties since the last iteration
 */
/*jslint unparam: true*/
function main(context, previousState, previousProperties) {

    log("Executing 'EmptyTank' JavaScript method.");

    var newFuelLevel = 0;

    log("Setting fuel level to: " + newFuelLevel);

    var state = {
        fuellevel: newFuelLevel
    };
    updateState(state);

    log("'EmptyTank' JavaScript method simulation completed.");
}