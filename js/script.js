// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yi.zhou
// Created on: Apr 2025
// This file contains the JS functions for index.html


"use strict"


/**
* This function calculates volume of a pyramid.
*/
function calculateVolumeOfPyramid () {
 // input
 const LengthOfPyramid  = parseFloat(document.getElementById('Length-of-pyramid').value)
 const WidthOfPyramid = parseFloat(document.getElementById('Width-of-pyramid').value)
 const HeightOfPyramid = parseFloat(document.getElementById('Height-of-pyramid').value)


 // process
 const VolumeOfPyramid = (LengthOfPyramid * WidthOfPyramid * HeightOfPyramid) / 3


 // output
 document.getElementById('volume').innerHTML = 'volume is: ' + VolumeOfPyramid + ' mm³'
}


