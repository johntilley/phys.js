;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = require('./lib/phys.js');
window.phys = require('./lib/phys.js');
},{"./lib/phys.js":10}],2:[function(require,module,exports){
/**
* basic.js
* http://github.com/abhiagarwal/phys.js
*
* Copyright 2013 Abhi Agarwal
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* (6 functions - 2 personal to this)
*/

var ibasic = exports;

ibasic.understand = function(){
	return ("Name: The name of the Function\n" +
			"Inputs: The inputs you need for the Function\n" +
			"Equation: The mathematical equation of the Function" 
	);
};

ibasic.self = function(){
	return ("The 'self' before a function name just means that you've to calculate some of the values yourself.");
};

ibasic.changein = function(){
	return("Change in numbers\n" +
			"Input: Number1, Number2\n" +
			"Change in numbers = Number2 - Number1" 
	);
};

ibasic.twosig = function(){
	return("Two Decimal Figures\n" +
			"Input: One Number\n" +
			"Shortens Number to 2 Decimal Places" 
	);
};

ibasic.toDegrees = function(){
	return("Radians To Degrees\n" +
			"Input: One Number\n" +
			"To Degrees = Number * (180 / Math.PI)" 
	);
};

ibasic.toRadians = function(){
	return("Degrees to Radians\n" +
			"Input: One Number\n" +
			"To Radians = Number * (Math.PI / 180)" 
	);
};
},{}],3:[function(require,module,exports){
/**
* electromagnetic.js
* http://github.com/abhiagarwal/phys.js
*
* Copyright 2013 Abhi Agarwal
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* (17 functions)
*/

var ielectromagnetic = exports;

ielectromagnetic.KineticEnergy = function(){
	return ("Kinetic Energy\n" +
			"Inputs: Mass, Velocity\n" +
			"Kinetic Energy = (1/2) * (Mass * Velocity^2)" 
	);
};

ielectromagnetic.selfKineticEnergy = function(){
	return("Kinetic Energy\n" +
			"Input: Mass, Velocity \n" +
			"Does not square velocity: You have to yourself.\n" +
			"Kinetic Energy = (1/2) * (Mass * Velocity)" 
	);
};

ielectromagnetic.current = function(){
	return("Rate at which charge flows through a given surface\n" +
			"Input: Charge One, Charge Two, Time One, Time Two\n" +
			"Current = (Charge Two - Charge One) / (Time2 - Time1)" 
	);
};

ielectromagnetic.ohmicResistance = function(){
	return("Resistance of an Ohmic resistor\n" +
			"Input: Voltage, Current\n" +
			"Resistance = Voltage / Current" 
	);
};

ielectromagnetic.resistivity = function(){
	return("Resistivity - tendancy of a material to resist charge\n" +
			"Input: Resistance, Cross-sectional area, Length\n" +
			"Resistivity = Resistance * Area / Length" 
	);
};

ielectromagnetic.viPower = function(){
	return("Power - Energy consumed per unit time\n" +
			"Input: Voltage, Current\n" +
			"Power = Voltage * Current" 
	);
};

ielectromagnetic.irPower = function(){
	return("Power - Energy consumed per unit time\n" +
			"Input: Current, Resistance\n" +
			"Power = (Current^2) * Resistance" 
	);
};

ielectromagnetic.selfirPower = function(){
	return("Calculated Power - Energy consumed per unit time\n" +
			"Input: Current, Resistance\n" +
			"Does not square current: You have to yourself.\n" + 
			"Power = (Current) * Resistance" 
	);
};

ielectromagnetic.vPower = function(){
	return("Power - Energy consumed per unit time\n" +
			"Input: Voltage, Resistance\n" +
			"Power = (Voltage^2) / Resistance" 
	);
};

ielectromagnetic.selfvPower = function(){
	return("Calculated Power - Energy consumed per unit time\n" +
			"Input: Voltage, Resistance\n" +
			"Does not square voltage: You have to yourself.\n" + 
			"Power = (Voltage) / Resistance" 
	);
};

ielectromagnetic.emf = function(){
	return("Electromotive Force - Voltage generated by a battery\n" +
			"Input: Current, Resistance, Internal resistance of battery\n" +
			"Electromotive Force = Current * (Resistance + Internal resistance of battery)" 
	);
};

ielectromagnetic.series = function(){
	return("Sum of resistance components connected in series\n" +
			"Input: Array of resistance values\n" +
			"Sum of resistance components = (Adding all resistances in the Array)" 
	);
};

ielectromagnetic.parallel = function(){
	return("Sum of resistance components connected in parallel\n" +
			"Input: Array of resistance values\n" +
			"Sum of resistance components = 1 / (Adding all resistances in the Array)" 
	);
};

ielectromagnetic.fluxComponent = function(){
	return("Component of B-field passing through a surface area A at an angle\n" +
			"Input: B-field Strength, Surface area of surface, Angle (Degrees)\n" +
			"Magnetic Flux = B-field Strength * Surface area of surface * cos(Angle)" 
	);
};

ielectromagnetic.inducedEmf = function(){
	return("Induced voltage by moving a rod of length l through a B-field of velocity v\n" +
			"Input: B-field Strength, Velocity of rod, Length\n" +
			"inducedEmf = B-field Strength * Velocity * Length" 
	);
};

ielectromagnetic.gauss = function(){
	return("Gauss' Law: Rate of flow of electric field (Electric flux) through a closed surface with an arbitrary volume\n" +
			"Input: Total charge enclosed within the surface, Coulomb constant\n" +
			"guassFlux = Total charge enclosed within the surface / Coulomb constant " 
	);
};

ielectromagnetic.coilEmf = function(){
	return("Faraday's Law: Induced emf generated by moving coil in B-field\n" +
			"Input: Number of turns in coil, 2 Magnetic fluxs (magFlux1, magFlux 2), 2 Time intervals (t1, t2)\n" +
			"coilEmf = - (Number of turns in coil) * ((magFlux2 - magFlux1) / (time2 - time1))" 
	);
};
},{}],4:[function(require,module,exports){
/**
* information.energy.js
* http://github.com/abhiagarwal/phys.js
*
* Copyright 2013 Abhi Agarwal
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* (0 functions)
*/

var ienergy = exports;

ienergy.power = function(){
	return ("Power\n" +
			"Inputs: Area, Density, Wind speed\n" +
			"Power = 1/2 * (Area * Density * (Wind Speed)^3)" 
	);
};

ienergy.selfpower = function(){
	return ("Calculated Power\n" +
			"Inputs: Area, Density, Wind speed^3\n" +
			"You've to input the (Wind Speed)^3 Yourself\n" +
			"Power = 1/2 * (Area * Density * (Wind Speed))" 
	);
};

ienergy.powerLength = function(){
	return ("Power per Unit Length\n" +
			"Inputs: Area, Density, Wind speed\n" +
			"Power per Unit Length = Area^2 * Density * Gravitational Constant * Wind speed" 
	);
};

ienergy.selfpowerLength = function(){
	return ("Calculated Power per Unit Length\n" +
			"Inputs: Area, Density, Gravitational Constant, Wind speed^3\n" +
			"You've to input the (Wind Speed)^3, and Gravitational Constant Yourself\n" +
			"Power per Unit Length = Area * Density * Gravitational Constant * Wind speed" 
	);
};

ienergy.intensity = function(){
	return ("Intensity\n" +
			"Inputs: Power, Area\n" +
			"Intensity = Power / Area" 
	);
};

ienergy.albedo = function(){
	return ("Albedo\n" +
			"Inputs: Total Scattered Power, Total Incident Power\n" +
			"Albedo = Total Scattered Power / Total Incident Power" 
	);
};

ienergy.transfersurface = function(){
	return ("Total information.energy Transfer\n" +
			"Inputs: Surface Heat Capacity, Area, Initial Time, Final time\n" +
			"Total information.energy Transfer = Surface Heat Capacity * Area * (Final time - Initial Time)" 
	);
};

ienergy.surfaceheat = function(){
	return ("Surface Heat Capacity\n" +
			"Inputs: Total information.energy Transfer as Heat, Area, Initial Time, Final time\n" +
			"Surface Heat Capacity = (Total information.energy Transfer) / (Area * (Final Time - Initial Time))" 
	);
};
},{}],5:[function(require,module,exports){
/**
* information.fields.js
* http://github.com/abhiagarwal/phys.js
*
* Copyright 2013 Abhi Agarwal
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* (16 functions)
*/

var ifields = exports;

ifields.gravitationalForce = function(){
	return ("Gravitational Force\n" +
			"Inputs: Mass of First Object, Mass of Second Object, Radius\n" +
			"Gravitational Force = Gravitational Constant * ((Mass of First Object * Mass of Second Object) / Radius^2)" 
	);
};

ifields.selfGravitationalForce = function(){
	return ("Gravitational Force\n" +
			"Inputs: Mass of First Object, Mass of Second Object, Radius, Gravitation Constant\n" +
			"You've to input the Gravitational Constant yourself\n" +
			"Gravitational Force = Gravitational Constant * ((Mass of First Object * Mass of Second Object) / Radius^2)" 
	);
};

ifields.coulombForce = function(){
	return ("Coulomb's Law\n" +
			"Inputs: Charge of First Object, Charge of Second Object, Radius\n" +
			"Gravitational Force = Coulombs Constant * ((Charge of First Object * Charge of Second Object) / Radius^2)" 
	);
};

ifields.selfCoulombForce = function(){
	return ("Calculated Coulomb's Law\n" +
			"Inputs: Charge of First Object, Charge of Second Object, Radius, Coulomb constant\n" +
			"Gravitational Force = Coulombs Constant * ((Charge of First Object * Charge of Second Object) / Radius^2)" 
	);
};

ifields.gravitationalAcceleration = function(){
	return ("Gravitational Acceleration\n" +
			"Inputs: Force, Mass\n" +
			"Acceleration = Force / Mass" 
	);
};

ifields.electricField = function(){
	return ("Electric Field\n" +
			"Inputs: Force, Charge\n" +
			"Acceleration = Force / Charge" 
	);
};

ifields.gradElectricField = function(){
	return ("Electric Field from change in Electric potential energy V with respect to position\n" +
			"Inputs: Two Electric potential energys (v1, v2), Two Positions (x1, x2)\n" +
			"Electric Field Strength = - (v2 - v1) / (x2 - x1)" 
	);
};

ifields.gradGravField = function(){
	return ("Gravitational Field from change in Gravitational potential energy V with respect to position\n" +
			"Inputs: Two Gravitational potential energys (v1, v2), Two Positions (x1, x2)\n" +
			"Gravitational Field Strength = - (u2 - u1) / (x2 - x1)" 
	);
};

ifields.particleMagneticForce = function(){
	return ("Magnetic force F exerted on a particle passing through B-field\n" +
			"Inputs: Charge, Velocity, B-field strength, Angle between B-field and path of particle (degree)\n" +
			"Force = Charge * Velocity * B-field strength * sin(Angle)" 
	);
};

ifields.conductorMagneticForce = function(){
	return ("Magnetic force F exerted on a current-carrying conductor in a B-field\n" +
			"Inputs: B-field strength, Current, Length, Angle between B-field and path of particle (degrees)\n" +
			"Force = B-field strength * Current * Length * sin(Angle)" 
	);
};

ifields.particleGravitationalPotentialEnergy = function(){
	return ("Gravitational potential energy of a particle m in a gravitatonal field formed by a body of mass M\n" +
			"Inputs: Particle mass, Source mass, Seperation from source mass\n" +
			"Gravitational potential energy = - Gravitational Constant * (Particle mass * Source mass / Seperation from source mass)" 
	);
};

ifields.selfparticleGravitationalPotentialEnergy = function(){
	return ("Calculated Gravitational potential energy of a particle m in a gravitatonal field formed by a body of mass M\n" +
			"Inputs: Particle mass, Source mass, Seperation from source mass, Gravitational Constant\n" +
			"Gravitational potential energy = - Gravitational Constant * (Particle mass * Source mass / Seperation from source mass)" 
	);
};

ifields.gravitationalPotentialEnergy = function(){
	return ("Gravitational potential energy of an arbitrary pont in a gravitatonal field formed by a body of mass M\n" +
			"Inputs: Source mass, Seperation from source mass\n" +
			"Gravitational potential energy = - Gravitational Constant * (Source mass / Seperation from source mass)" 
	);
};

ifields.escapeVelocity = function(){
	return ("Velocity required for a body of to escape the orbit of a planet of mass M\n" +
			"Inputs: Mass of planet, Radius of planet\n" +
			"Escape Velocity = sqrt(2 * Gravitational Constant (Mass of planet / Radius of planet))" 
	);
};

ifields.chargeElectricPotentialEnergy = function(){
	return ("Electric potential of a test charge q in an electric field formed by a charge Q at a distance r\n" +
			"Inputs: Test charge, Source charge, Separation\n" +
			"Electric potential = (Coulomb Constant * Test charge * Test charge)/ Separation" 
	);
};

ifields.electricPotentialEnergy = function(){
	return ("Electric potential of an arbitrary point in an electric field formed by a charge Q at a distance r\n" +
			"Inputs: Source charge, Separation\n" +
			"Electric potential = (Coulomb Constant * Test charge)/ Separation" 
	);
};
},{}],6:[function(require,module,exports){
/**
* information.mechanics.js
* http://github.com/abhiagarwal/phys.js
*
* Copyright 2013 Abhi Agarwal
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* (24 functions)
*/

var imechanics = exports;

imechanics.momentum = function(){
	return ("The Momentum Function\n" +
			"Inputs are: Mass & Velocity.\n" +
			"Momentum = Mass * Velocity." 
	);
};

imechanics.force = function(){
	return ("The Force Function\n" +
			"Input is: Mass.\n" +
			"Force = Mass * Acceleration."
	);
};

imechanics.selfForce = function(){
	return ("The Calculated Force Function\n" +
			"Inputs are: Mass, and Acceleration.\n" +
			"You have to input your own Gravitation Acceleration\n" +
			"Force = Mass * Acceleration."
	);
};

imechanics.forceMomentum = function(){
	return ("The Calculated Force Equation - using Momentum\n" +
			"Inputs are: Initial Momentum: Initial Velocity, Initial Mass, Final Momentum: Final Velocity, Finaly Mass, Initial Time, Final Time.\n" +
			"Force = (Momentum(Final Mass, Final Velocity) - Momentum(Initial Mass, Initial Velocity)) / (Final Time - Initial Time)"
	);
};

imechanics.selfForceMomentum = function(){
	return ("The Force Equation - using Momentum\n" +
			"Inputs are: Initial Momentum, Final Momentum, Initial Time, Final Time.\n" +
			"Force = (Final Momentum - Initial Momentum) / (Final Time - Initial Time)"
	);
};

imechanics.SUVATuta = function(){
	return ("The SUVAT Displacement Function\n" +
			"Inputs are: Initial Velocity, Time, Acceleration.\n" +
			"Displacement = Initial Velocity * Time + 1/2 * Acceleration * Time^2"
	);
};

imechanics.SUVATuvt = function(){
	return ("The SUVAT Displacement Function\n" +
			"Inputs are: Initial Velocity, Final Velocity, Time.\n" +
			"Displacement = 1 / 2 * (Initial Velocity + Final Velocity) * Time"
	);
};

imechanics.SUVATvta = function(){
	return ("The SUVAT Displacement Function\n" +
			"Inputs are: Acceleration, Final Velocity, Time.\n" +
			"Displacement = Final Velocity * Time - (1 / 2 * Acceleration * Time^2)"
	);
};

imechanics.SUVATuat = function(){
	return ("The SUVAT Velocity Function\n" +
			"Inputs are: Initial Velocity, Acceleration, Time.\n" +
			"Velocity = Initial Velocity + (Acceleration * Time)"
	);
};

imechanics.SUVATuas = function(){
	return ("The SUVAT Velocity Function\n" +
			"Inputs are: Initial Velocity, Acceleration, Displacement.\n" +
			"Velocity^2 = (Initial Velocity)^2 + (2 * Acceleration * Displacement)"
	);
};

imechanics.selfSUVATuas = function(){
	return ("The SUVAT Velocity Function\n" +
			"Inputs are: Initial Velocity, Acceleration, Displacement.\n" +
			"Velocity = SquareRoot((Initial Velocity)^2 + (2 * Acceleration * Displacement))"
	);
};

imechanics.impulseMass = function(){
	return ("The Impuse Function - using Mass\n" +
			"Inputs are: Mass, Initial Velocity, Final Velocity.\n" +
			"Impulse = Mass * (Final Velocity - Initial Velocity)"
	);
};

imechanics.impulseForce = function(){
	return ("The Impuse Function - using Force\n" +
			"Inputs are: Force, Initial Time, Final Time.\n" +
			"Impulse = Force * (Final Time - Initial Time)"
	);
};

imechanics.workDone = function(){
	return ("The Work Done Function\n" +
			"Inputs are: Force, Displacement, Angle.\n" +
			"Work Done = Force * Displacement * cos(Angle)"
	);
};

imechanics.kineticVelocity = function(){
	return ("The Kinetic Energy Equation - with Velocity\n" +
			"Inputs are: Velocity, Mass.\n" +
			"Kinetic Energy = 1/2 * Mass * Velocity^2"
	);
};

imechanics.kineticMomentum = function(){
	return ("The Calculated Kinetic Energy Equation - with Momentum\n" +
			"Inputs are: Velocity, Mass.\n" +
			"Kinetic Energy = Momentum(Mass, Velocity) / (2 * Mass)"
	);
};

imechanics.selfKineticMomentum = function(){
	return ("The Kinetic Energy Equation - with Momentum\n" +
			"Inputs are: Momentum, Mass.\n" +
			"You have to input the Momentum:\n" +
			"Kinetic Energy = Momentum^2 * (2 * Mass)"
	);
};

imechanics.potential = function(){
	return ("The Potential Energy Equation\n" +
			"Inputs are: Mass, Initial Height, Final Height.\n" +
			"Potential Energy = Mass * Gravitational Constant * (Final Height - Initial Height)"
	);
};

imechanics.selfPotential = function(){
	return ("The Calculated Potential Energy Equation\n" +
			"Inputs are: Mass, Gravitational Constant, Initial Height, Final Height.\n" +
			"You have to input your own Gravitational Constant\n" +
			"Potential Energy = Mass * Gravitational Constant * (Final Height - Initial Height)"
	);
};

imechanics.power = function(){
	return ("The Power Equation\n" +
			"Inputs are: Force, Velocity.\n" +
			"Power = Force * Velocity"
	);
};

imechanics.centripetalVelocity = function(){
	return ("The Centripetal Acceleration Equation - with Velocity\n" +
			"Inputs are: Velocity, Radius.\n" +
			"Centripetal Acceleration = Velocity^2 / Radius"
	);
};

imechanics.selfCentripetalVelocity = function(){
	return ("The Calculated Centripetal Acceleration Equation - with Velocity\n" +
			"Inputs are: Velocity^2, Radius.\n" +
			"You input the Velocity^2\n" +
			"Centripetal Acceleration = Velocity / Radius"
	);
};

imechanics.centripetalTime = function(){
	return ("The Centripetal Acceleration Equation - with Time\n" +
			"Inputs are: Radius, Time.\n" +
			"Centripetal Acceleration = (4 * Pi^2 * Radius) / (Time^2)"
	);
};

imechanics.selfCentripetalTime = function(){
	return ("The Calculated Centripetal Acceleration Equation - with Time\n" +
			"Inputs are: Radius, Time.\n" +
			"Centripetal Acceleration = (4 * Pi^2 * Radius) / (Time^2)"
	);
};
},{}],7:[function(require,module,exports){
/**
* information.quantum.js
* http://github.com/abhiagarwal/phys.js
*
* Copyright 2013 Abhi Agarwal
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* (9 functions)
*/

var iquantum = exports;

iquantum.energy = function(){
	return ("Energy\n" +
			"Inputs: Mass.\n" +
			"E = Mass * Speed of Light^2" 
	);
};

iquantum.energyLight = function(){
	return ("Energy of a quanta of light\n" +
			"Inputs: Frequency.\n" +
			"E = Plancks Constant * Frequency" 
	);
};

iquantum.momentum = function(){
	return ("Momentum of quanta\n" +
			"Inputs: Wavelength.\n" +
			"Momentum = Plancks Constant / Wavelength" 
	);
};

iquantum.deBroglie = function(){
	return ("De Broglie wavelength\n" +
			"Inputs: Momentum\n" +
			"Wave Length = Plancks Constant / Momentum" 
	);
};

iquantum.uncPosition = function(){
	return ("Lower-bound to uncertainty in position\n" +
			"Inputs: Uncertainty in Momentum\n" +
			"Lower-bound of Position >= (Plancks Constant / 4 * pi) * (1 / Momentum)" 
	);
};

iquantum.uncMomentum = function(){
	return ("Lower-bound to uncertainty in momentum\n" +
			"Inputs: Uncertainty in Position\n" +
			"Lower-bound of Momentum >= (Plancks Constant / 4 * pi) * (1 / Position)" 
	);
};

iquantum.maxKineticEnergy = function(){
	return ("Maximum kinetic energy of emitted electrons incident with a frequency f upon a metal with a work function W\n" +
			"Inputs: Work function (Joules), Frequency\n" +
			"Kinetic Energy = Plancks Constant * Frequency - Work function"
	);
};

iquantum.minWork = function(){
	return ("Minimum energy required to delocalize an electron from the surface of a metal\n" +
			"Inputs: Threshold frequency\n" +
			"Work = Plancks Constant * Threshold frequency"
	);
};

iquantum.thresholdFreq = function(){
	return ("Minimum frequency required to induce photoelectric effect\n" +
			"Inputs: Work\n" +
			"Minimum frequency = Work / Plancks Constant"
	);
};

iquantum.energyLevels = function(){
	return ("Electron In a Box Experiment: Energy Levels\n" +
			"Inputs: Mass, Width of the well, State with information.quantum number\n" +
			"Energy Levels = (State with information.quantum number^2 * Plancks Constant^2) / (8 * Mass * Width of the well^2)"
	);
};

iquantum.decay = function(){
	return ("Rates of Radioactive Decay\n" +
			"Inputs: Number of atoms, Decays per unit time, Time\n" +
			"Number of atoms decayed = Number of atoms * e ^ (- Decays per unit time is a constant fraction * Time)"
	);
};

iquantum.halflife = function(){
	return ("Half Life\n" +
			"Inputs: Decay Constant\n" +
			"Half Life = ln(2) / (Decay Constant)"
	);
};

iquantum.activity = function(){
	return ("Activity, in number of counts per second\n" +
			"Inputs: Number of atoms Decayed, Decay Constant\n" +
			"Activity = lambda * Number of Atoms Decayed"
	);
};

iquantum.activityE = function(){
	return ("Activity, in number of counts per second\n" +
			"Inputs: Number of atoms Decayed, Decay Constant, Time\n" +
			"A = Decay Constant * (Number of atoms * e ^ (- Decays per unit time is a constant fraction * Time))"
	);
};
},{}],8:[function(require,module,exports){
/**
* information.thermal.js
* http://github.com/abhiagarwal/phys.js
*
* Copyright 2013 Abhi Agarwal
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* (9 functions)
*/

var ithermal = exports;

ithermal.pressure = function(){
	return ("Pressure Equation\n" +
			"Inputs are: Force, Area\n" +
			"Pressure = Force / Area"
	);
};

ithermal.heat = function(){
	return ("Calculated Heat Equation\n" +
			"Inputs are: Mass, Specific Heat Capacity, Initial Time, Final Time\n" +
			"Heat = Mass * Specific Heat Capacity, (Final Time - Initial Time)"
	);
};

ithermal.selfheat = function(){
	return ("Heat Equation\n" +
			"Inputs are: Mass, Specific Heat Capacity, Change in Temperature\n" +
			"Heat = Mass * Specific Heat Capacity, Change in Temperature"
	);
};

ithermal.latentHeat = function(){
	return ("Latent Heat Equation\n" +
			"Inputs are: Mass, Latent Heat of Fusion or Vaporization\n" +
			"Heat = Mass * Latent Heat of Fusion or Vaporization"
	);
};

ithermal.idealGasPV = function(){
	return ("Ideal Gas Equation\n" +
			"Inputs are: Number of Moles, Temperature\n" +
			"Pressure * Volume = Number of Moles * Gas Constant * Time"
	);
};

ithermal.work = function(){
	return ("Calculated Work Done Equation\n" +
			"Inputs are: Pressure, Initial Volume, Final Volume\n" +
			"Work = Pressure * (Final Volume - Initial Volume)"
	);
};

ithermal.selfwork = function(){
	return ("Work Done Equation\n" +
			"Inputs are: Pressure, Volume\n" +
			"Work = Pressure * Volume"
	);
};

ithermal.heatChange = function(){
	return ("Calculated Heat Change Equation\n" +
			"Inputs are: Work Done, Initial Energy Change, Final Energy Change\n" +
			"Heat = (Final Energy Change - Initial Energy Change) * Work Done"
	);
};

ithermal.selfheatChange = function(){
	return ("Heat Change Equation\n" +
			"Inputs are: Work Done, Internal Energy Change\n" +
			"Heat = Change in Energy Change * Work Done"
	);
};
},{}],9:[function(require,module,exports){
/**
* information.wave.js
* http://github.com/abhiagarwal/phys.js
*
* Copyright 2013 Abhi Agarwal
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* (13 functions)
*/

var iwave = exports;

iwave.angularFrequency = function(){
	return ("Angular Frequency\n" +
			"Inputs are: Time\n" +
			"Angular Frequency = 2 * pi / Time"
	);
};

iwave.displacement = function(){
	return ("Displacement(x) of a particle from an arbitrarily defined equilibrium point at time = t\n" +
			"Inputs are: Amplitude of oscillation, Angular frequency, Time\n" +
			"Displacement(Time) = Amplitude of oscillation * sin(Angular frequency * Time)"
	);
};

iwave.velocity = function(){
	return ("Velocity(v) of a particle from an arbitrarily defined equilibrium point at time = t\n" +
			"Inputs are: Angular frequency, Amplitude of oscillation, Time\n" +
			"Velocity(Time) = Angular frequency * Amplitude of oscillation * cos(Angular frequency * Time)"
	);
};

iwave.acceleration = function(){
	return ("Acceleration (a) of a particle from an arbitrarily defined equilibrium point at time = t\n" +
			"Inputs are: Angular frequency, Amplitude of oscillation, Time\n" +
			"Acceleration(Time) = -Angular frequency^2 * Amplitude of oscillation * sin(Angular frequency * Time)"
	);
};

iwave.kineticEnergy = function(){
	return ("Kinetic energy (K) of a particle undergoing simple harmonic motion\n" +
			"Inputs are: Mass of particle, Angular frequency, Amplitude of oscillation, Displacement from equilibrium point\n" +
			"Kinetic energy = 0.5 * Mass of particle * Angular frequency^2 * (Amplitude^2 - Displacement^2)"
	);
};

iwave.potentialEnergy = function(){
	return ("Potential energy of a particle undergoing simple harmonic motion\n" +
			"Inputs are: Mass of particle, Angular frequency, Displacement from equilibrium point\n" +
			"Potential energy = 0.5 * Mass of particle * Angular frequency^2 * Displacement^2"
	);
};

iwave.netEnergy = function(){
	return ("Total energy (E) of a particle undergoing simple harmonic motion\n" +
			"Inputs are: Mass of particle, Angular frequency,  Amplitude of oscillation\n" +
			"Total energy = 0.5 * Mass of particle * Angular frequency^2 * Amplitude^2"
	);
};

iwave.waveSpeed = function(){
	return ("information.wave Speed\n" +
			"Inputs are: Frequency, information.wavelength\n" +
			"information.wave Speed = Frequency * information.wavelength"
	);
};

iwave.refractiveIndex = function(){
	return ("Refractive Index of an unknown material\n" +
			"Inputs are: information.wave speed in known medium, information.wave speed in unknown medium, Refractive Index of known medium\n" +
			"Refractive Index = (Refractive Index of Known * information.wave speed of Known) / information.wave speed of Unknown"
	);
};

iwave.angularResolution = function(){
	return ("Minimum angular resolution (in rads) required to distinguish two bodies or a measure of image quality\n" +
			"Inputs are: information.wavelength of incident light, Diameter of aperature\n" +
			"Minimum angular resolution = 1.22 * (information.wavelength / Diameter)"
	);
};

iwave.beatFrequency = function(){
	return ("Acoustic beat frequency of two information.waves\n" +
			"Inputs are: Frequency of first information.wave, Frequency of second information.wave\n" +
			"Acoustic beat frequency = |Frequency of second information.wave - Frequency of first information.wave|"
	);
};

iwave.harmonicLen = function(){
	return ("information.wavelength of the nth harmonic\n" +
			"Inputs are: Length of string, nth harmonic\n" +
			"information.wavelength = 2 * Length / nth harmonic"
	);
};

iwave.harmonicFreq = function(){
	return ("Frequency of the nth harmonic\n" +
			"Inputs are: information.wave speed, Length of string, Nth harmonic\n" +
			"Frequency = information.wave speed / (2 * Length / Nth harmonic)"
	);
};
},{}],10:[function(require,module,exports){
/**
 * phys.js
 * http://github.com/abhiagarwal/phys.js
 *
 * Copyright 2013 Abhi Agarwal
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var phys = exports;

// Constants, Multipliers, Units, and other Useful Identifiers
phys.constants = require('./phys/constants/constants');
phys.multiplier = require('./phys/constants/multiplier');
phys.units = require('./phys/constants/units');

// Pure Formulas Libraries
phys.basic = require('./phys/basic');
phys.mechanics = require('./phys/mechanics');
phys.thermal = require('./phys/thermal');
phys.wave = require('./phys/wave');
phys.fields = require('./phys/fields');
phys.energy = require('./phys/energy');
phys.electromagnetic = require('./phys/electromagnetic');
phys.quantum = require('./phys/quantum');

// Information Libraries
phys.ibasic = require('./information/basic');
phys.imechanics = require('./information/mechanics');
phys.ithermal = require('./information/thermal');
phys.iwave = require('./information/wave');
phys.ienergy = require('./information/energy');
phys.ifields = require('./information/fields');
phys.ielectromagnetic = require('./information/electromagnetic');
phys.iquantum = require('./information/quantum');
},{"./information/basic":2,"./information/electromagnetic":3,"./information/energy":4,"./information/fields":5,"./information/mechanics":6,"./information/quantum":7,"./information/thermal":8,"./information/wave":9,"./phys/basic":11,"./phys/constants/constants":12,"./phys/constants/multiplier":13,"./phys/constants/units":14,"./phys/electromagnetic":15,"./phys/energy":16,"./phys/fields":17,"./phys/mechanics":18,"./phys/quantum":19,"./phys/thermal":20,"./phys/wave":21}],11:[function(require,module,exports){
/**
 * basic.js
 * http://github.com/abhiagarwal/phys.js
 *
 * Copyright 2013 Abhi Agarwal
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * (4 functions)
*/

var basic = exports;

// Change in numbers
// 
// basic.changein(Initial X, Final X)
/*
@param {Number} Number1 (p1)
@param {Number} Number2 (p2)
@return {Number} Difference between Number1 & Number2
*/

basic.changein = function (p1, p2, callback) {
  var ans = (p2 - p1);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Two Decimal Figures
// 
// basic.twosig(number)
/*
@param {Number} Number (number)
@return {Number} Converts the number to have 2 decimal places
*/

basic.twosig = function (number, callback) {
  var ans = (number.toFixed(2));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Radians To Degrees
// 
// basic.toDegrees(radians)
/*
@param {Number} Number (number)
@return {Number} Converts Radians to Degrees
*/

basic.toDegrees = function(radians, callback) {
  var ans = radians * (180 / Math.PI);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Degrees to Radians
// 
// basic.toRadians(degrees)
/*
@param {Number} Number (number)
@return {Number} Converts degrees to Radians
*/

basic.toRadians = function(degrees, callback) {
  var ans = degrees * (Math.PI / 180);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};
},{}],12:[function(require,module,exports){
/**
* constants.js
* http://github.com/abhiagarwal/phys.js
*
* Copyright 2013 Abhi Agarwal
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var constants = exports;
var multiplier = require('./multiplier');

/*
* Gravitational Acceleration
* Gravitational acceleration is the acceleration on an object caused by force of gravitation
* http://en.wikipedia.org/wiki/Gravitational_acceleration
*/
constants.gAcceleration = 9.81;
constants.gAccelerationUnit = "ms^-2";

/*
* Gravitational Constant
* An empirical physical constant involved in the calculation(s) of gravitational force between two bodies
* http://en.wikipedia.org/wiki/Gravitational_constant
*/
constants.GravitationalConstant = 6.67 * Math.pow(10, -11);
constants.GravitationalConstantUnit = "Nm^2kg^-2";

/*
* Avogadro constant
* Number of constituent particles in one mole of a given substance
* http://en.wikipedia.org/wiki/Avogadro_constant
*/
constants.AvogadrosConstant = 6.02 * Math.pow(10, 23);
constants.AvogadrosConstantUnit = "mol^-1";


/*
* Gas constant
* http://en.wikipedia.org/wiki/Gas_constant
*/
constants.GasConstant = 8.31;
constants.GasConstantUnit = "J/K^-1mol^-1";
	
/*
* Boltzmanns constant
*/	
constants.BoltzmannsConstant = 1.38 * Math.pow(10, -23);
constants.BoltzmannsConstantUnit = "JK^-1";
	
/*
* Stefan Boltzmann constant
*/	
constants.StefanBoltzmannConstant = 5.67 * Math.pow(10, -8);
constants.StefanBoltzmannConstantUnit = "Wm^-2K^-4";
	
/*
* Coulomb constant
*/	
constants.CoulombConstant = 8.99 * Math.pow(10, 9);
constants.CoulombConstantUnit = "Nm^2C^-2";

/*
* Permittivity of Free Space
*/
constants.PermittivityFreeSpace = 8.85 * Math.pow(10, -12);
constants.PermittivityFreeSpaceUnit = "C^2N^-1m^-2";

/*
* Permeability of Free Space
*/	
constants.PermeabilityFreeSpace = 4 * Math.PI * Math.pow(10, -7);
constants.PermeabilityFreeSpaceUnit = "TmA^-1";

/*
* Speed of Light in a Vacuum
*/	
constants.SpeedofLightVacuum = 3.00 * Math.pow(10, 8);
constants.SpeedofLightVacuumUnit = "ms^-1";

/*
* Plancks Constant
*/	
constants.PlancksConstant = 6.63 * Math.pow(10, -34);
constants.PlancksConstantUnit = "Js";
	
/*
* Elementary Charge
*/
constants.ElementaryCharge = 1.60 * Math.pow(10, -19);
constants.ElementaryChargeUnit = "C";
	
/*
* Electron Rest Mass in KG
*/
constants.ElectronRestMassKG = 9.110 * Math.pow(10, -31);
constants.ElectronRestMassKGUnit = "kg";

/*
* Electron Rest Mass in U
*/	
constants.ElectronRestMassU = 0.000549;
constants.ElectronRestMassUUnit = "u";

/*
* Electron Rest Mass in eV
*/	
constants.ElectronRestMasseV = 0.511 * multiplier.M;
constants.ElectronRestMasseVUnit = "eVc^-2";

/*
* Proton Rest Mass in KG
*/	
constants.ProtonRestMassKG = 1.673 * Math.pow(10, -27);
constants.ProtonRestMassKGUnit = "kg";

/*
* Proton Rest Mass in U
*/	
constants.ProtonRestMassU = 1.007276;
constants.ProtonRestMassUUnit = "u";

/*
* Proton Rest Mass in eV
*/
constants.ProtonRestMasseV = 938 * multiplier.M;
constants.ProtonRestMasseVUnit = "eVc^-2";

/*
* Neutron Rest Mass in KG
*/	
constants.NeutronRestMassKG = 1.675 * Math.pow(10, -27);
constants.NeutronRestMassKGUnit = "kg";

/*
* Neutron Rest Mass in U
*/	
constants.NeutronRestMassU = 1.008665;
constants.NeutronRestMassUUnit = "u";

/*
* Neutron Rest Mass in eV
*/	
constants.NeutronRestMasseV = 940 * multiplier.M;
constants.NeutronRestMasseVUnit = "eVc^-2";

/*
* Unified Atomic Mass in KG
*/	
constants.UnifiedAtomicMassKG = 1.661 * Math.pow(10, -27);
constants.UnifiedAtomicMassKGUnit = "kg";
	
/*
* Unified Atomic Mass in eV
*/	
constants.UnifiedAtomicMasseV = 931.5 * multiplier.M;
constants.UnifiedAtomicMasseVUnit = "eVc^-2";
},{"./multiplier":13}],13:[function(require,module,exports){
/**
* multiplier.js
* http://github.com/abhiagarwal/phys.js
*
* Copyright 2013 Abhi Agarwal
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var multiplier = exports;

/*
* Tera
* number x 10^12
*/

multiplier.T = Math.pow(10, 12);

/*
* Giga
* number x 10^9
*/

multiplier.G = Math.pow(10, 9);

/*
* Mega
* number x 10^6
*/

multiplier.M = Math.pow(10, 6);

/*
* Kilo
* number x 10^3
*/

multiplier.k = Math.pow(10, 3);

/*
* Hecto
* number x 10^2
*/

multiplier.h = Math.pow(10, 2);

/*
* Deca
* number x 10^1
*/

multiplier.da = Math.pow(10, 1);

/*
* Deci
* number x 10^-1
*/

multiplier.d = Math.pow(10, -1);

/*
* Centi
* number x 10^-2
*/

multiplier.c = Math.pow(10, -2);

/*
* Milli
* number x 10^-3
*/

multiplier.m = Math.pow(10, -3);

/*
* Micro
* number x 10^-6
* Micro is actually "µ", which is greek for mikrós - meaning "small".
* It has been changed to "u" to simplify its use.
* http://en.wikipedia.org/wiki/Micro-
*/

multiplier.u = Math.pow(10, -6);

/*
* Nano
* number x 10^-9
*/

multiplier.n = Math.pow(10, -9);

/*
* Pico
* number x 10^-12
*/

multiplier.p = Math.pow(10, -12);

/*
* Femto
* number x 10^-15
*/

multiplier.f = Math.pow(10, -15);
},{}],14:[function(require,module,exports){
/**
* units.js
* http://github.com/abhiagarwal/phys.js
*
* Copyright 2013 Abhi Agarwal
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var units = exports,
multiplier = require('./multiplier');

/*
* Light Year
* The distance that light travels in a vacuum in one Julian year.
* https://en.wikipedia.org/wiki/Light-year 
*/
units.lightyear = 9.46 * Math.pow(10, 15);
units.lightyearUnit = "m";

/*
* Parsec
* A unit of length used in astronomy, equal to about 30.9 trillion kilometres or 3.26 light-years.
* http://en.wikipedia.org/wiki/Parsec
*/
units.parsec = 3.261;
units.parsecUnit = "y";

/*
* Astronomical unit
* A unit of length now defined as exactly 149,597,870,700 m or roughly the average Earth–Sun distance.
* https://en.wikipedia.org/wiki/Astronomical_unit
*/
units.astronomical = 1.50 * Math.pow(10, 11);
units.astronomicalUnit = "m";

/*
* Radian
* The standard unit of angular measure.
* http://en.wikipedia.org/wiki/Radian
*/
units.radian = (180 / Math.Pi);
units.radianUnit = "Degrees";

/*
* Kilowatt hour
* A unit of energy equal to 1000 watt hours or 3.6 megajoules.
* http://en.wikipedia.org/wiki/Kilowatt_hour
*/
units.kilowatthour = 3.60 * Math.pow(10, 6);
units.kilowatthourUnit = "J";

/*
* Atmosphere Unit (Newton Meter)
* The standard atmosphere (symbol: atm) is an international reference pressure defined as 101325 Pa and formerly used as a unit of pressure.
* https://en.wikipedia.org/wiki/Atmosphere_(unit)
*/
units.atmNM = 1.01 * Math.pow(10, 5);
units.atmNMUnit = "Nm^-2";

/*
* Atmosphere Unit (Pascal)
* The standard atmosphere (symbol: atm) is an international reference pressure defined as 101325 Pa and formerly used as a unit of pressure.
* https://en.wikipedia.org/wiki/Atmosphere_(unit)
*/
units.atmPa = 101 * multiplier.k;
units.atmPaUnit = "Pa";

/*
* Atmosphere Unit (HG unit of pressure)
* The standard atmosphere (symbol: atm) is an international reference pressure defined as 101325 Pa and formerly used as a unit of pressure.
* https://en.wikipedia.org/wiki/Atmosphere_(unit)
* mmHG unit is "Millimeters of Mercury"
*/
units.atmHG = 760;
units.atmHGUnit = "mmHg";
},{"./multiplier":13}],15:[function(require,module,exports){
/**
 * electromagnetic.js
 * http://github.com/abhiagarwal/phys.js
 *
 * Copyright 2013 Abhi Agarwal
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * (17 functions)
 */

var constant = require('./constants/constants');
var units = require('./constants/units');
var multiplier = require('./constants/multiplier');
var basic = require('./basic');
var electromagnetic = exports;

// Kinetic Energy
// 
// electromagnetic.KineticEnergy(Mass, Velocity)
/*
@param {Number} m
@param {Number} v
@return {Number} Kinetic Energy = 1/2 * m * v^2
*/

electromagnetic.KineticEnergy = function (m, v, callback) {
  var ans = (1/2) * (m * Math.pow(v, 2));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Kinetic Energy
// 
// electromagnetic.selfKineticEnergy(Mass, Velocity^2)
// 
// Inputting the Velocity^2 Yourself
/*
@param {Number} m
@param {Number} v
@return {Number} Kinetic Energy = 1/2 * m * v^2
*/

electromagnetic.selfKineticEnergy = function (m, v, callback) {
  var ans = (1/2) * (m * v);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Rate at which charge flows through a given surface
// 
// electromagnetic.current(ChargeOne, ChargeTwo, TimeOne, TimeTwo)
/*
@param {Number} Charge (q1, q2)
@param {Number} Time (t1, t2)
@return {Number} current I = dQ / dt
*/

electromagnetic.current = function (q1, q2, t1, t2, callback) {
  var ans = basic.changein(q1, q2) / basic.changein(t1, t2);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Resistance of an Ohmic resistor
// 
// electromagnetic.ohmicResistance(Velocity, Current)
/*
@param {Number} Voltage (V)
@param {Number} Current (I)
@return {Number} Resistance R = V / I
*/

electromagnetic.ohmicResistance = function (V, I, callback) {
  var ans = V / I;
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Resistivity - tendancy of a material to resist charge
// 
// electromagnetic.resistivity(Resistance, Cross-sectional Area, Length)
/* 
@param {Number} Resistance (R)
@param {Number} Cross-sectional area (A)
@param {Number} Length (L)
@return {Number} Resistivity res = R * A / L
*/

electromagnetic.resistivity = function (R, L, A, callback) {
  var ans = R * A / L;
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Power - Energy consumed per unit time
// 
// electromagnetic.viPower(Velocity, Current)
/*
@param {Number} Voltage (V)
@param {Number} Current (I)
@return {Number} Power P = V * I
*/

electromagnetic.viPower = function (V, I, callback) {
  var ans = V * I;
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Power - Energy consumed per unit time
// 
// electromagnetic.irPower(Current, Resistance)
/*
@param {Number} Current (I)
@param {Number} Resistance (V)
@return {Number} Power P = I ^ 2 * R
*/

electromagnetic.irPower = function (I, R, callback) {
  var ans = Math.pow(I, 2) * R;
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Calculated Power - Energy consumed per unit time
// 
// electromagnetic.selfirPower(Current^2, Resistance)
// 
// Inputting the Current^2 Yourself
/*
@param {Number} Current (I)
@param {Number} Resistance (V)
@return {Number} Power P = I ^ 2 * R
*/

electromagnetic.selfirPower = function (I, R, callback) {
  var ans = I * R;
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Power - Energy consumed per unit time
// 
// electromagnetic.vPower(Voltage, Resistance)
/*
@param {Number} Voltage (V)
@param {Number} Resistance (R)
@return {Number} Power P = V ^ 2 / R
*/

electromagnetic.vPower = function (V, R, callback) {
  var ans = (Math.pow(V, 2)) / R;
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Calculated Power - Energy consumed per unit time
// 
// electromagnetic.selfvPower(Voltage^2, Resistance)
// 
// Inputting the Velocity^2 Yourself
/*
@param {Number} Voltage (V)
@param {Number} Resistance (R)
@return {Number} Power P = V ^ 2 / R
*/

electromagnetic.selfvPower = function (V, R, callback) {
  var ans = V / R;
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Electromotive Force - Voltage generated by a battery
// 
// electromagnetic.emf(Current, Resistance, Internal resistance of battery)
/*
@param {Number} Current (I)
@param {Number} Resistance (R)
@param {Number} Internal resistance of battery (r)
@return {Number} emf = I(R + r)
*/

electromagnetic.emf = function (I, R, r, callback) {
  var ans = I * (R + r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Sum of resistance components connected in series
// 
// electromagnetic.series(Array of Resistances)
/*
@param {Number} Array of resistance values (resistances)
@return {Number} sumResistance = R_0 + R_1 + ... + R_(n - 1)
*/

electromagnetic.series = function (resistances, callback) {
  var ans = 0;
  for (x in resistances) {
  		ans += resistances[x];
  }
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Sum of resistance components connected in parallel
// 
// electromagnetic.parallel(Array of Resistances)
/*
@param {Number} Array of resistance values (resistances)
@return {Number} sumResistancetoReturn = 1/(R_0 + R_1 + ... + R_(n - 1))
*/

electromagnetic.parallel = function (resistances, callback) {
  var sumResistance = 0;
  for (x in resistances) {
  		sumResistance += (1 / resistances[x]);
  }
  var ans = (1 / sumResistance);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Component of B-field passing through a surface area A at an angle
// 
// electromagnetic.fluxComponent(B-field Strength, Surface area of surface, Angle)
/*
@param {Number} B-field Strength (B)
@param {Number} Surface area of surface (A)
@param {Number} Angle (in degrees) (theta)
@return {Number} magFlux = B * A * cos(theta)
*/

electromagnetic.fluxComponent = function (B, A, theta, callback) {
  var ans = B * A * Math.cos(basic.toRadians(theta));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Induced voltage by moving a rod of length l through a B-field of velocity v
// 
// electromagnetic.inducedEmf(B-field Strength, Velocity of rod, Length)
/*
@param {Number} B-field Strength (B)
@param {Number} Velocity of rod (v)
@param {Number} Length (l)
@return {Number} inducedEmf = B * v * l
*/

electromagnetic.inducedEmf = function (B, v, l, callback) {
  var ans = B * v * l;
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Gauss' Law: Rate of flow of electric field (Electric flux) through a closed surface with an arbitrary volume
// 
// electromagnetic.gauss(Total charge enclosed within the surface)
/*
@param {Number} Total charge enclosed within the surface (Q)
@return {Number} guassFlux = Q / k 
*/

electromagnetic.gauss = function (Q, callback) {
  var ans = Q / constant.CoulombConstant;
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Faraday's Law: Induced emf generated by moving coil in B-field
// 
// electromagnetic.coilEmf(Number of turns in coil, Rate of change of magnetic flux One, Rate of change of magnetic flux Two, Time interval One, Time interval Two)
/*
@param {Number} Number of turns in coil (n)
@param {Number} Rate of change of magnetic flux (magFlux1, magFlux 2)
@param {Number} Time interval (t1, t2)
@return {Number} coilEmf = - n * (magFlux2 - magFlux1) / (t2 - t1)
*/

electromagnetic.coilEmf = function (n, magFlux1, magFlux2, t1, t2, callback) {
  var ans = (-1 * n) * (basic.changein(magFlux1, magFlux2)) / (basic.changein(t1, t2));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};
},{"./basic":11,"./constants/constants":12,"./constants/multiplier":13,"./constants/units":14}],16:[function(require,module,exports){
/**
 * energy.js
 * http://github.com/abhiagarwal/phys.js
 *
 * Copyright 2013 Abhi Agarwal
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * (2 functions)
 */

var constant = require('./constants/constants');
var units = require('./constants/units');
var multiplier = require('./constants/multiplier');
var basic = require('./basic');
var energy = exports;

// Power
// 
// energy.power(Area, Density, Velocity)
/*
@param {Number} Area (of wind turbine blindes)
@param {Number} p - density of air or 1.255 kg/m cubed
@param {Number} v - wind speed in m/s
@return {Number} power = 1/2 * (A * p * v^3)
*/

energy.power = function (A, p, v, callback) {
  var ans = (1/2) * (A * p * Math.pow(v, 3));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Calculated Power
// 
// energy.selfpower(Area, Density, Velocity^3)
// 
// Inputting the Velocity^3 Yourself
/*
@param {Number} Area (of wind turbine blindes)
@param {Number} p - density of air or 1.255 kg/m cubed
@param {Number} v - wind speed in m/s
@return {Number} power = 1/2 * (A * p * v)
*/

energy.selfpower = function (A, p, v, callback) {
  var ans = (1/2) * (A * p * v);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Power per Unit Length
// 
// energy.powerLength(Area, Density, Wind Speed)
/*
@param {Number} Area (of wind turbine blindes)
@param {Number} p - density of air or 1.255 kg/m cubed
@param {Number} v - Wind speed in m/s
@return {Number} Power per Unit Length = Area^2 * Density * Gravitational Constant * Wind speed
*/

energy.powerLength = function (A, p, v, callback) {
  var ans = (1/2) * (Math.pow(A, 2) * p * constant.gAcceleration * v);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Calculated Power per Unit Length
// 
// energy.selfpowerLength(Area^2, Density, Gravitational Constant, Wind Speed)
// 
// Inputting the Area^2 and Gravity Yourself
/*
@param {Number} Area (of wind turbine blindes)
@param {Number} p - density of air or 1.255 kg/m cubed
@param {Number} g - Gravity
@param {Number} v - Wind speed in m/s
@return {Number} Power per Unit Length = Area * Density * g * Wind speed
*/

energy.selfpowerLength = function (A, p, g, v, callback) {
  var ans = (1/2) * (A * p * g * v);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Intensity
// 
// energy.intensity(Power, Area)
/*
@param {Number} P - Power
@param {Number} A - Area
@return {Number} Intensity = Power / Area
*/

energy.intensity = function (P, A, callback) {
  var ans = (P / A);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Albedo
// 
// energy.albedo(Total Scattered Power, Total Incident Power)
/*
@param {Number} S - Total Scattered Power
@param {Number} I - Total Incident Power
@return {Number} Albedo = Total Scattered Power / Total Incident Power
*/

energy.albedo = function (S, I, callback) {
  var ans = (S / I);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Total Energy Transfer
// 
// energy.transfersurface(Surface Heat Capacity, Area, Initial Time, Final Time)
/*
@param {Number} SHC - Surface Heat Capacity
@param {Number} A - Area
@param {Number} t1 - Initial Time
@param {Number} t2 - Final time
@return {Number} Total Energy Transfer = Surface Heat Capacity * Area * (Final time - Initial Time)
*/

energy.transfersurface = function(SHC, A, t1, t2, callback) {
  var ans = SHC * A * basic.changein(t1, t2);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Surface Heat Capacity
// 
// energy.surfaceheat(Total Energy Transfer, Area, Initial Time, Final Time)
/*
@param {Number} Q - Total Energy Transfer as Heat
@param {Number} A - Area
@param {Number} t1 - Initial Time
@param {Number} t2 - Final time
@return {Number} Surface Heat Capacity = (Total Energy Transfer) / (Area * (Final Time - Initial Time))
*/

energy.surfaceheat = function(Q, A, t1, t2, callback) {
  var ans = (Q) / (A * basic.changein(t1, t2));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};
},{"./basic":11,"./constants/constants":12,"./constants/multiplier":13,"./constants/units":14}],17:[function(require,module,exports){
/**
 * fields.js
 * http://github.com/abhiagarwal/phys.js
 *
 * Copyright 2013 Abhi Agarwal
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * (16 functions)
 */

var constant = require('./constants/constants');
var units = require('./constants/units');
var multiplier = require('./constants/multiplier');
var basic = require('./basic');
var fields = exports;

// Gravitational Force
// 
// fields.gravitationalForce(massOne, massTwo, radius)
/*
@param {Number} Mass of First Object (mone)
@param {Number} Mass of Second Object (mtwo)
@param {Number} radius (r)
@return {Number} Force = G * ((mone * mtwo) / r^2)
*/

fields.gravitationalForce = function (mone, mtwo, r, callback) {
  var ans = constant.GravitationalConstant * ((mone * mtwo) / (Math.pow(
    r, 2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Gravitational Force
// 
// fields.selfGravitationalForce(massOne, massTwo, radius, gravConst)
// 
// Inputting Gravitation Constant Yourself
/*
@param {Number} Mass One (mone)
@param {Number} Mass Two (mtwo)
@param {Number} radius^2 (r^2)
@param {Number} Gravitation Constant (g), self input
@return {Number} Force = G * ((mone * mtwo) / r^2)
*/

fields.selfGravitationalForce = function (mone, mtwo, r, g, callback) {
  var ans = g * ((mone * mtwo) / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Coulomb's Law
// 
// coulombForce(chargeOne, chargeTwo, radius)
/*
@param {Number} Charge of First Object (qone)
@param {Number} Charge of Second Object (qtwo)
@param {Number} radius (r)
@return {Number} Force = k * ((qone * qtwo) / r^2)
*/

fields.coulombForce = function (qone, qtwo, r, callback) {
  var ans = constant.CoulombConstant * ((qone * qtwo) / Math.pow(r,
    2));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Coulomb's Law
// 
// selfCoulombForce(chargeOne, chargeTwo, radius, CoulombConst)
// 
// Inputting Coulomb Constant Yourself
/*
@param {Number} Charge of First Object (qone)
@param {Number} Charge of Second Object (qtwo)
@param {Number} radius^2 (r^2)
@param {Number} Coulomb constant (k)
@return {Number} Force = k * ((qone * qtwo) / r^2)
*/

fields.selfCoulombForce = function (qone, qtwo, r, k, callback) {
  var ans = k * ((qone * qtwo) / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Acceleration (Gravity)
// 
// fields.gravitationalAcceleration(Force, Mass)
/*
@param {Number} Force (F)
@param {Number} Mass (m)
@return {Number} Acceleration = F / m
*/

fields.gravitationalAcceleration = function (F, m, callback) {
  var ans = (F / m);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Electric Field
// 
// fields.electricField(Force, Charge)
/*
@param {Number} Force (F)
@param {Number} Charge (q)
@return {Number} Electric Field = F / q
*/

fields.electricField = function (F, q, callback) {
  var ans = (F / q);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Electric Field from change in Electric potential energy V with respect to position
// 
// fields.gradElectricField(Electric Potential v1, v2, Position x1, x2)
/*
@param {Number} Electric potential energy (v1, v2)
@param {Number} Position (x1, x2)
@return {Number} Electric Field Strength E = - (v2 - v1) / (x2 - x1)
*/

fields.gradElectricField = function (v1, v2, x1, x2, callback) {
  var ans = (-1 * basic.changein(v1, v2)) / (basic.changein(x1, x2));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Gravitational Field from change in Gravitational potential energy V with respect to position
// 
// fields.gradGravField(Gravitational potential v1, v2, Position x1, x2)
/*
@param {Number} Gravitational potential energy (v1, v2)
@param {Number} Position (x1, x2)
@return {Number} Gravitational Field Strength g = - (u2 - u1) / (x2 - x1)
*/

fields.gradGravField = function (u1, u2, x1, x2, callback) {
  var ans = (-1 * basic.changein(u1, u2)) / (basic.changein(x1, x2));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Magnetic force F exerted on a particle passing through B-field
// 
// fields.particleMagneticForce(Charge, Velocity, B-field strength, Angle)
/*
@param {Number} Charge (q)
@param {Number} Velocity (v)
@param {Number} B-field strength (B)
@param {Number} Angle (in degrees) between B-field and path of particle (theta)
@return {Number} Force F = q * v * B * sin(theta)
*/

fields.particleMagneticForce = function(q, v, B, theta, callback) {
  var ans = (q * v * B) * Math.sin(basic.toRadians(theta));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Magnetic force F exerted on a current-carrying conductor in a B-field
// 
// fields.conductorMagneticForce(B-field strength, Current, Length, Angle)
/*
@param {Number} B-field strength (B)
@param {Number} Current (I)
@param {Number} Length (l)
@param {Number} Angle (in degrees) between B-field and path of particle (theta)
@return {Number} Force F = B * I * L * sin(theta)
*/

fields.conductorMagneticForce = function(B, I, l, theta, callback) {
  var ans = (B * I * l) * Math.sin(basic.toRadians(theta, callback));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Gravitational potential energy of a particle m in a gravitatonal field formed by a body of mass M
// 
// fields.particleGravitationalPotentialEnergy(Particle mass, Source mass, Seperation from source mass)
/*
@param {Number} Particle mass (m)
@param {Number} Source mass (M)
@param {Number} Seperation from source mass (r)
@return {Number} U = -G * (m * M / r)
*/

fields.particleGravitationalPotentialEnergy = function(m, M, r, callback) {
  var ans = (-1 * constant.GravitationalConstant) * (m * M / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Gravitational potential energy of a particle m in a gravitatonal field formed by a body of mass M
// 
// fields.selfparticleGravitationalPotentialEnergy(Particle mass, Source mass, Seperation from source mass, Gravitational Constant)
// 
// Inputting the Gravitational Constant yourself
/*
@param {Number} Particle mass (m)
@param {Number} Source mass (M)
@param {Number} Seperation from source mass (r)
@param {Number} Gravitational Constant (g)
@return {Number} U = -g * (m * M / r)
*/

fields.selfparticleGravitationalPotentialEnergy = function(m, M, r, g, callback) {
  var ans = (-1 * g) * (m * M / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Gravitational potential energy of an arbitrary pont in a gravitatonal field formed by a body of mass M
// 
// fields.gravitationalPotentialEnergy(Mass, Seperation from source mass)
/*
@param {Number} Source mass (M)
@param {Number} Seperation from source mass (r)
@return {Number} U = -G * (M / r)
*/

fields.gravitationalPotentialEnergy = function(M, r, callback) {
  var ans = (-1 * constant.GravitationalConstant) * (M / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Velocity required for a body of to escape the orbit of a planet of mass M
// 
// fields.escapeVelocity(Mass M of planet, Radius r of planet)
/*
@param {Number} Mass M of planet
@param {Number} Radius r of planet
@return {Number} v = sqrt(2G (M / r))
*/

fields.escapeVelocity = function(M, r, callback) {
  var ans = Math.sqrt((2 * constant.GravitationalConstant) * (M / r));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Electric potential of a test charge q in an electric field formed by a charge Q at a distance r
// 
// fields.chargeElectricPotentialEnergy(Source charge, Test charge, Seperation)
/*
@param {Number} Test charge (q)
@param {Number} Source charge (Q)
@param {Number} Separation (r)
@return {Number} U = (k * Q * q) / r
*/

fields.chargeElectricPotentialEnergy = function(Q, q, r, callback) {
  var ans = constant.CoulombConstant * (Q * q / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Electric potential of an arbitrary point in an electric field formed by a charge Q at a distance r
// 
// fields.electricPotentialEnergy(Source charge, Separation)
/*
@param {Number} Source charge (Q)
@param {Number} Separation (r)
@return {Number} U = (k * Q) / r
*/

fields.electricPotentialEnergy = function(Q, r, callback) {
  var ans = constant.CoulombConstant * (Q / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};
},{"./basic":11,"./constants/constants":12,"./constants/multiplier":13,"./constants/units":14}],18:[function(require,module,exports){
/**
 * mechanics.js
 * http://github.com/abhiagarwal/phys.js
 *
 * Copyright 2013 Abhi Agarwal
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * (24 functions)
 */

var constant = require('./constants/constants');
var units = require('./constants/units');
var multiplier = require('./constants/multiplier');
var basic = require('./basic');
var mechanics = exports;

// Momentum
// 
// mechanics.momentum(Mass, Velocity)
/*
@param {Number} Mass (m)
@param {Number} Velocity (v)
@return {Number} Momentum = Mass * Velocity
*/

mechanics.momentum = function (m, v, callback) {
  var ans = m * v;
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Force
// 
// mechanics.force(Mass)
/*
@param {Number} Mass (m)
@return {Number} Force = Mass * Acceleration
*/

mechanics.force = function (m, callback) {
  var ans = (m * constant.gAcceleration);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Force (Own Acceleration Input)
// 
// mechanics.selfForce(Mass, Gravitational Acceleration)
// 
// Inputting the Gravitational Acceleration Yourself
/*
@param {Number} Mass (m)
@param {Number} Acceleration (g)
@return {Number} Force = Mass * Acceleration
*/

mechanics.selfForce = function (m, g, callback) {
  var ans = (m * g);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Force (Momentum over Time)
// 
// mechanics.forceMomentum(MassOne, VelocityOne, MassTwo, VelocityTwo, TimeOne, TimeTwo)
/*
@param {Number} Change in Momentum (m1, v1, m2, v2)
@param {Number} Change in Time (t1, t2)
@return {Number} Force = ((m2 * v2) - (m1 * v1)) / (t2 - t1)
*/

mechanics.forceMomentum = function (m1, v1, m2, v2, t1, t2, callback) {
  var ans = ((basic.changein((mechanics.momentum(m1, v1)),
    mechanics.momentum(m2, v2))) / (basic.changein(t1, t2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Force (Momentum over Time)
// 
// mechanics.selfForceMomentum(MomentumOne, MomentumTwo, TimeOne, TimeTwo)
// 
// Inputting the Momentum Calculations Yourself
/*
@param {Number} Change in Momentum (p1, p2)
@param {Number} Change in Time (t1, t2)
@return {Number} Force = Change in Momentum / Change in Time
*/

mechanics.selfForceMomentum = function (p1, p2, t1, t2, callback) {
  var ans = ((basic.changein(p1, p2)) / (basic.changein(t1, t2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// SUVAT Displacement (Using u, t, a)
// 
// mechanics.SUVATuta(Initial Velocity, Time, Acceleration)
/*
@param {Number} Initial Velocity (u)
@param {Number} Time (t)
@param {Number} Acceleration (a)
@return {Number} s = u * t + 1/2 * a * t^2
*/

mechanics.SUVATuta = function (u, t, a, callback) {
  var ans = ((u * t) + ((1 / 2) * a * (Math.pow(t, 2))));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// SUVAT Displacement (using u, v, t)
// 
// mechanics.SUVATuvt(Initial Velocity, Final Velocity, Time)
/*
@param {Number} Initial Velocity (u)
@param {Number} Final Velocity (v)
@param {Number} Time (t)
@return {Number}  s = (1 / 2 * (u + v)) * t
*/

mechanics.SUVATuvt = function (u, v, t, callback) {
  var ans = ((1 / 2) * ((u + v) * t));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// SUVAT Displacement (using a, v, t)
// 
// mechanics.SUVATvta(Final Velocity, Time, Acceleration)
/*
@param {Number} Acceleration (a)
@param {Number} Final Velocity (v)
@param {Number} Time (t)
@return {Number}  s = v * t - 1/2 * a * t^2
*/

mechanics.SUVATvta = function (v, t, a, callback) {
  var ans = ((v * t) - ((1 / 2) * a * (Math.pow(t, 2))));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// SUVAT Displacement (using u, a, t)
// 
// mechanics.SUVATuat(Initial Velocity, Acceleration, Time)
/*
@param {Number} Initial Velocity (u)
@param {Number} Acceleration (a)
@param {Number} Time (t)
@return {Number}  v = u + a * t
*/

mechanics.SUVATuat = function (u, a, t, callback) {
  var ans = (u + (a * t));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// SUVAT Displacement (using u, a, s)
// 
// mechanics.SUVATuas(Initial Velocity, Acceleration, Dispalcement)
// 
// Returning v^2 instead of v
/*
@param {Number} Initial Velocity (u)
@param {Number} Acceleration (a)
@param {Number} Dispalcement (s)
@return {Number}  v^2 = u^2 + 2 * a * s (Returns v^2 not v)
*/

mechanics.SUVATuas = function (u, a, s, callback) {
  var ans = (Math.pow(u, 2) + (2 * a * s));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated SUVAT Displacement (using u, a, s)
// 
// mechanics.selfSUVATuas(Initial Velocity, Acceleration, Dispalcement)
// 
// Returning v instead of v^2
/*
@param {Number} Initial Velocity (u)
@param {Number} Acceleration (a)
@param {Number} Dispalcement (s)
@return {Number}  v = SquareRoot(u^2 + 2 * a * s) (Returns v)
*/

mechanics.selfSUVATuas = function (u, a, s, callback) {
  var ans = Math.sqrt(mechanics.SUVATuas(u, a, s));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Impulse w/ Mass & Velocity
// 
// mechanics.impulseMass(Mass, Initial Velocity, Finaly Velocity)
/*
@param {Number} Mass (m)
@param {Number} Initial Velocity (v1)
@param {Number} Finaly Velocity (v2)
@return {Number} Impulse = Mass * Change in Velocity
*/

mechanics.impulseMass = function (m, v1, v2, callback) {
  var ans = (m * (basic.changein(v1, v2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Impulse w/ Force & Times
// 
// mechanics.impulseForce(Force, Initial Time, Final Time)
/*
@param {Number} Force (f)
@param {Number} Initial Time (t1)
@param {Number} Final Time (t2)
@return {Number} Impulse = Force * Change im time
*/

mechanics.impulseForce = function (f, t1, t2, callback) {
  var ans = (f * (basic.changein(t1, t2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Work
// 
// mechanics.workDone(Force, Displacement, Angle)
/*
@param {Number} Force (f)
@param {Number} Displacement (s)
@param {Number} Cos(Thetha) (angle - Cosine of an angle theta)
@return {Number} Work = Force * Distance * Cos(Thetha)
*/

mechanics.workDone = function (f, s, angle, callback) {
  var ans = (f * s * Math.cos(angle));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Kinetic Energy w/ Velocity
// 
// mechanics.kineticVelocity(Velocity, Mass)
/*
@param {Number} Velocity (v)
@param {Number} Mass (m)
@return {Number} Kinetic Energy = 1/2 * m * v^2
*/

mechanics.kineticVelocity = function (v, m, callback) {
  var ans = ((1 / 2) * (m) * (Math.pow(v, 2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Kinetic Energy Momentum
// 
// mechanics.kineticMomentum(Velocity, Mass)
/*
@param {Number} Velocity (v)
@param {Number} Mass (m)
@return {Number} Kinetic Energy = ((m * v)^2) / (2 * m)
*/

mechanics.kineticMomentum = function (v, m, callback) {
  var ans = ((Math.pow((mechanics.momentum(m, v)), 2)) / (2 * m));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Kinetic Energy w/ Momentum
// 
// mechanics.selfKineticMomentum(Momentum, Mass)
// 
// Inputting the Momentum Calculations Yourself
/*
@param {Number} Momentum (p)
@param {Number} Mass (m)
@return {Number} Kinetic Energy = (p^2) / (2 * m)
*/

mechanics.selfKineticMomentum = function (p, m, callback) {
  var ans = ((Math.pow(p, 2)) / (2 * m));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Potential Energy
// 
// mechanics.potential(Mass, Initial Height, Final Height)
/*
@param {Number} Mass (m)
@param {Number} Initial Height (h1)
@param {Number} Final Height (h2)
@return {Number} Potential Energy = Mass * Gravitational Field Strength * Change in Height
*/

mechanics.potential = function (m, h1, h2, callback) {
  var ans = ((m) * (constant.gAcceleration) * (basic.changein(h1,
    h2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Potential Energy (Entering own g)
// 
// mechanics.selfPotential(Mass, Gravitational Field Strength, Initial Height, Final Height)
// 
// Inputting Gravitational Field Strength Yourself
/*
@param {Number} Mass (m)
@param {Number} Gravitational Field Strength (g)
@param {Number} Initial Height (h1)
@param {Number} Final Height (h2)
@return {Number} Potential Energy = Mass * Gravitational Field Strength * Change in Height
*/

mechanics.selfPotential = function (m, g, h1, h2, callback) {
  var ans = ((m) * (g) * (basic.changein(h1, h2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Power
// 
// mechanics.power(Force, Velocity)
/*
@param {Number} Force (f)
@param {Number} Velocity (v)
@return {Number} Power = Force * Velocity
*/

mechanics.power = function (f, v, callback) {
  var ans = (f * v);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Centripetal Acceleration w/ Velocity
// 
// mechanics.centripetalVelocity(Velocity, Radius)
/*
@param {Number} Velocity (v)
@param {Number} r (radius)
@return {Number} Acceleration = Velocity^2 / Radius
*/

mechanics.centripetalVelocity = function (v, r, callback) {
  var ans = (Math.pow(v, 2)) / (r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Centripetal Acceleration w/ Velocity
// 
// mechanics.selfCentripetalVelocity(Velocity^2, Radius)
// 
// Inputting Velocity^2 Yourself
/*
@param {Number} Velocity (v)
@param {Number} r (radius)
@return {Number} Acceleration = Velocity^2 / Radius
*/

mechanics.selfCentripetalVelocity = function (v, r, callback) {
  var ans = (v / r);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Centripetal Acceleration w/ Time
// 
// mechanics.centripetalTime(Radius, Time)
/*
@param {Number} Radius (r)
@param {Number} Time (t)
@return {Number} Acceleration = 4 * Pi^2 * r / (t^2)
*/

mechanics.centripetalTime = function (r, t, callback) {
  var ans = ((4 * (Math.pow(Math.PI, 2)) * r) / (Math.pow(t, 2)));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Centripetal Acceleration w/ Time
// 
// mechanics.selfCentripetalTime(Radius, Time^2)
// 
// Inputting Time^2 Yourself
/*
@param {Number} Radius (r)
@param {Number} Time (t)
@return {Number} Acceleration = 4 * Pi^2 * r / (t^2)
*/

mechanics.selfCentripetalTime = function (r, t, callback) {
  var ans = ((4 * (Math.pow(Math.PI, 2)) * r) / (t));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};
},{"./basic":11,"./constants/constants":12,"./constants/multiplier":13,"./constants/units":14}],19:[function(require,module,exports){
/**
 * quantum.js
 * http://github.com/abhiagarwal/phys.js
 *
 * Copyright 2013 Abhi Agarwal
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * (9 functions)
 */

var constant = require('./constants/constants');
var units = require('./constants/units');
var multiplier = require('./constants/multiplier');
var basic = require('./basic');
var quantum = exports;

// Energy
// 
// quantum.energy(Mass)
/*
@param {Number} Mass
@return {Number} E = m * c^2
*/

quantum.energy = function (mass, callback) {
  var ans = Math.pow(constant.SpeedofLightVacuum, 2) * mass;
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Energy of a quanta of light
// 
// quantum.energyLight(Frequency)
/* 
@param {Number} Frequency (f)
@return {Number} E = hf
*/

quantum.energyLight = function (f, callback) {
  var ans = constant.PlancksConstant * f;
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Momentum of quanta
// 
// quantum.momentum(Wavelength)
/*
@param {Number} Wavelength (waveLen)
@return {Number} p = h / waveLen
*/

quantum.momentum = function (waveLen, callback) {
  var ans = constant.PlancksConstant / waveLen;
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// De Broglie wavelength
// 
// quantum.deBroglie(Momentum)
/*
@param {Number} Momentum (p)
@return {Number} waveLen = h / p
*/

quantum.deBroglie = function (p, callback) {
  var ans = constant.PlancksConstant / p;
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Lower-bound to uncertainty in position
// 
// quantum.uncPosition(Uncertainty in momentum)
/*
@param {Number} Uncertainty in momentum (dMomentum)
@return {Number} dPosition >= (h / 4pi) * (1 / dMomentum)
*/

quantum.uncPosition = function (dMomentum, callback) {
  var ans = constant.PlancksConstant / (4 * Math.PI * dMomentum);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Lower-bound to uncertainty in momentum
// 
// quantum.uncMomentum(Uncertainty in position)
/*
@param {Number} Uncertainty in position (dPosition)
@return {Number} dMomentum >= (h / 4pi) * (1 / dPosition)
*/

quantum.uncMomentum = function (dPosition, callback) {
  var ans = constant.PlancksConstant / (4 * Math.PI * dPosition);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Maximum kinetic energy of emitted electrons incident with a frequency f upon a metal with a work function W
// 
// quantum.maxKineticEnergy(Work function, Frequency)
/*
@param {Number} Work function (in Joules) (W)
@param {Number} Frequency (f)
@return {Number} K = hf - W
*/

quantum.maxKineticEnergy = function (W, f, callback) {
  var ans = constant.PlancksConstant * f - W;
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Minimum energy required to delocalize an electron from the surface of a metal
// 
// quantum.minWork(Threshold frequency)
/*
@param {Number} Threshold frequency (f0)
@return {Number} W = hf_0
*/

quantum.minWork = function (f0, callback) {
  var ans = constant.PlancksConstant * f0;
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Minimum frequency required to induce photoelectric effect
// 
// quantum.thresholdFreq(Work)
/*
@param {Number} W
@return {Number} f_0 = W / h
*/

quantum.thresholdFreq = function (W, callback) {
  var ans = W / constant.PlancksConstant;
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Electron In a Box: Energy Levels
// 
// quantum.energyLevels(Mass, Width of the well, State with quantum number)
/*
@param {Number} Mass
@param {Number} L: is the width of the well
@param {Number} n: State with quantum number
@return {Number} Energy Levels = (State with quantum number^2 * Plancks Constant^2) / (8 * Mass * Width of the well^2)
*/

quantum.energyLevels = function (n, m, l, callback) {
  var ans = (Math.pow(n, 2) * Math.pow(constant.PlancksConstant, 2))/(8 * m * Math.pow(l, 2));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Rates of Radioactive Decay
// 
// quantum.decay(Number of atoms, Decays per unit time, Time)
/*
@param {Number} Number of atoms
@param {Number} Decays per unit time as a constant fraction
@param {Number} Time
@return {Number} Number of atoms decayed = Number of atoms * e ^ (- Decays per unit time is a constant fraction * Time)
*/

quantum.decay = function (n, lambd, time, callback) {
  var ans = n * Math.pow(Math.E, (-1 * lambd * time));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Half Life
// 
// quantum.halflife(Decay Constant)
/*
@param {Number} lambda: Decay Constant
@return {Number} T(1/2) = ln(2)/(Decay Constant)
*/

quantum.halflife = function (lambd, callback) {
  var ans = (Math.log(2))/(lambd);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Activity, in number of counts per second 
// 
// quantum.activity(Number of atoms, Decay Constant)
/*
@param {Number} N: Number of atoms decayed
@param {Number} lambda: Decay Constant
@return {Number} Activity = lambda * Number of Atoms Decayed
*/

quantum.activity = function (N, L, callback) {
  var ans = N * L;
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};

// Activity, in number of counts per second 
// 
// quantum.activityE(Number of atoms, Decay Constant, Time)
/*
@param {Number} N: Number of atoms
@param {Number} lambda: Decay Constant
@return {Number} A = Decay Constant * (Number of atoms * e ^ (- Decays per unit time is a constant fraction * Time))
@return {Number} or A = Decay Constant * Number of atoms decayed
*/

quantum.activityE = function (N, L, t, callback) {
  var ans = L * quantum.decay(N, L, t);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return ans;
};
},{"./basic":11,"./constants/constants":12,"./constants/multiplier":13,"./constants/units":14}],20:[function(require,module,exports){
/**
 * thermal.js
 * http://github.com/abhiagarwal/phys.js
 *
 * Copyright 2013 Abhi Agarwal
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * (9 functions)
 */

var constant = require('./constants/constants');
var units = require('./constants/units');
var multiplier = require('./constants/multiplier');
var basic = require('./basic');
var thermal = exports;

// Pressure
// 
// thermal.pressure(Force, Area)
/*
@param {Number} Force (f)
@param {Number} Area (a)
@return {Number} Pressure = Force / Area
*/

thermal.pressure = function (f, a, callback) {
  var ans = (f / a);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Heat
// 
// thermal.heat(Mass, Specific Heat Capacity, Temperature One, Temperature Two)
/*
@param {Number} Mass (m)
@param {Number} Specific Heat Capacity (shc)
@param {Number} Temperature One (t1)
@param {Number} Temperature Two (t2)
@return {Number} Q = m * c * (t2 - t1)
*/

thermal.heat = function (m, shc, t1, t2, callback) {
  var ans = (m * shc * basic.changein(t1, t2));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Heat
// 
// thermal.selfheat(Mass, Specific Heat Capacity, Change in Temperature)
// 
// Inputting the Change in Temperature Yourself
/*
@param {Number} Mass (m)
@param {Number} Specific Heat Capacity (shc)
@param {Number} Change in Temperature (t)
@return {Number} Q = m * c * t
*/

thermal.selfheat = function (m, shc, t, callback) {
  var ans = (m * shc * t);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Latent Heat of Vaporization or Fusion
// 
// thermal.latentHeat(Mass, V or F (Vaporization or Fusion))
/*
@param {Number} Mass (m)
@param {Number} V or F (Vaporization or Fusion) (l)
@return {Number} Q = Mass * Latent Heat of Fusion or Vaporization
*/

thermal.latentHeat = function (m, l, callback) {
  var ans = (m * l);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// The Ideal Gas Equation
// 
// thermal.idealGasPV(Number of moles, Temperature)
/*
@param {Number} Number of moles (n)
@param {Number} The temperature, Kelvin (t)
@return {Number} P * V = n * r * t
*/

thermal.idealGasPV = function (n, t, callback) {
  var ans = (n * (constant.GasConstant) * t);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Thermodynamics Work Equation
// 
// thermal.work(Pressure, Initial Volume, Final Volume)
/*
@param {Number} Pressure (p)
@param {Number} Initial Volume (v1)
@param {Number} Final Volume (v2)
@return {Number} W = P * (v2 - v1)
*/

thermal.work = function (p, v1, v2, callback) {
  var ans = (p * basic.changein(v1, v2));
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Thermodynamics Work Equation
// 
// thermal.selfwork(Pressure, Volume)
/*
@param {Number} Pressure (p)
@param {Number} Volume (v)
@return {Number} W = P * V (Already change in Volume)
*/

thermal.selfwork = function (p, v, callback) {
  var ans = (p * v);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Calculated Heat Relation Equation
// 
// thermal.heatChange(Initial Energy Change, Final Energy Change, Work Done)
/*
@param {Number} Work Done (w)
@param {Number} Initial Energy Change (u1)
@param {Number} Final Energy Change (u2)
@return {Number} Q = (Change in) U + W
*/

thermal.heatChange = function (u1, u2, w, callback) {
  var ans = (basic.changein(u1, u2) + w);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Heat Relation Equation
// 
// thermal.selfheatChange(Internal Energy Change, Work Done)
/*
@param {Number} Work Done (w)
@param {Number} Internal Energy Change (u)
@return {Number} Q = U + W
*/

thermal.selfheatChange = function (u, w, callback) {
  var ans = (u + w);
  if (typeof (callback) === 'function') {
    callback(ans);
    return (ans);
  }
  return (ans);
};
},{"./basic":11,"./constants/constants":12,"./constants/multiplier":13,"./constants/units":14}],21:[function(require,module,exports){
/**
 * wave.js
 * http://github.com/abhiagarwal/phys.js
 *
 * Copyright 2013 Abhi Agarwal
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * (13 functions)
 */

var constant = require('./constants/constants');
var units = require('./constants/units');
var multiplier = require('./constants/multiplier');
var basic = require('./basic');
var wave = exports;

// Angular Frequency (w) Function
// 
// wave.angularFrequency(Time)
/*
@param {Number} Time (T)
@var ans = {Number} w = 2 pi / T
*/

wave.angularFrequency = function (T, callback) {
  var ans = (2 * Math.PI) / (T);
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Displacement (x) of a particle from an arbitrarily 
// defined equilibrium point at time = t
// 
// wave.displacement(Amplitude of oscillation, Angular frequency, Time)
/*
@param {Number} Amplitude of oscillation (A)
@param {Number} Angular frequency (ω)
@param {Number} Time (t)
@var ans = {Number} x(t) = A * sin(ω*t)
*/

wave.displacement = function (A, w, t, callback) {
  var ans = (A * Math.sin(w * t));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Velocity (v) of a particle from an arbitrarily 
// defined equilibrium point at time = t
// 
// wave.velocity(Angular frequency, Amplitude of oscillation, Time)
/*
@param {Number} Angular frequency (ω)
@param {Number} Amplitude of oscillation (A)
@param {Number} Time (t)
@var ans = {Number} v(t) = ω * A * cos(ω*t)
*/

wave.velocity = function (w, A, t, callback) {
  var ans = (w * A * Math.cos(w * t));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Acceleration (a) of a particle from an arbitrarily 
// defined equilibrium point at time = t
// 
// wave.acceleration(Angular frequency, Amplitude of oscillation, Time)
/*
@param {Number} Angular frequency (ω)
@param {Number} Amplitude of oscillation (A)
@param {Number} Time (t)
@var ans = {Number} a(t) = -ω^2 * A * sin(ω*t)
*/

wave.acceleration = function (w, A, t, callback) {
  var ans = (Math.pow((-1 * w), 2) * A * Math.sin(w * t));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Kinetic energy (K) of a particle undergoing 
// simple harmonic motion
// 
// wave.kineticEnergy(Mass of particle, Angular frequency, Amplitude of oscillation, Displacement from equilibrium point)
/*
@param {Number} Mass of particle (m)
@param {Number} Angular frequency (ω)
@param {Number} Amplitude of oscillation (A)
@param {Number} Displacement from equilibrium point (x)
@var ans = {Number} K = 0.5 * m * ω^2 * (A^2 - x^2)
*/

wave.kineticEnergy = function (m, w, A, x, callback) {
  var ans = (0.5 * m * Math.pow(w, 2) * ((Math.pow(A, 2)) - (Math.pow(x, 2))));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Potential energy (U) of a particle undergoing 
// simple harmonic motion
// 
// wave.potentialEnergy(Mass of particle, Angular frequency, Displacement from equilibrium point)
/*
@param {Number} Mass of particle (m)
@param {Number} Angular frequency (ω)
@param {Number} Displacement from equilibrium point (x)
@var ans = {Number} P = 0.5 * m * ω^2 * x^2
*/

wave.potentialEnergy = function (m, w, x, callback) {
  var ans = (0.5 * m * Math.pow(w, 2) * Math.pow(x, 2));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Total energy (E) of a particle undergoing simple harmonic motion
// 
// wave.netEnergy(Mass of particle, Angular frequency, Amplitude of oscillation)
/*
@param {Number} Mass of particle (m)
@param {Number} Angular frequency (ω)
@param {Number} Amplitude of oscillation (A)
@var ans = {Number} E = 0.5 * m * ω^2 * A^2 
*/

wave.netEnergy = function (m, w, A, callback) {
  var ans = (0.5 * m * Math.pow(w, 2) * Math.pow(A, 2));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Wave Speed (v) Function
// 
// wave.waveSpeed(Frequency, Wavelength)
/*
@param {Number} Frequency (f)
@param {Number} Wavelength (λ)
@var ans = {Number} v = f * λ
*/

wave.waveSpeed = function (frequency, wavelength, callback) {
  var ans = (frequency * wavelength);
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Refractive Index of an unknown material
// 
// wave.refractiveIndex(Wave speed Known, Wave speed Unknown, Refractive Index Known)
/*
@param {Number} Wave speed in known medium (v1)
@param {Number} Wave speed in unknown medium (v2)
@param {Number} Refractive Index of known medium (n)
@var ans = {Number} n2 = (n1 * v1) / v2
*/

wave.refractiveIndex = function (v1, v2, n1, callback) {
  var ans = ((n1 * v1) / v2);
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Minimum angular resolution (in rads) required to 
// distinguish two bodies or a measure of image quality
// 
// wave.angularResolution(Wavelength, Diameter of aperature)
/*
*
@param {Number} Wavelength (λ) of incident light
@param {Number} Diameter of aperature (d)
@var ans = {Number} θ = 1.22 * (λ / d)
*/

wave.angularResolution = function (wavelength, d, callback) {
  var ans = (1.22 * (wavelength / d));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Acoustic beat frequency of two waves
// 
// wave.beatFrequency(Frequency of first wave, Frequency of second wave)
/*
@param {Number} Frequency of first wave (f1)
@param {Number} Frequency of second wave (f2)
@var ans = {Number} b = |f2 - f1|
*/

wave.beatFrequency = function (f1, f2, callback) {
  var ans = (Math.abs(f2 - f1));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Wavelength of the nth harmonic
// 
// wave.harmonicLen(Length of string, Nth harmonic)
/*
@param {Number} Length of string (L)
@param {Numberr} Nth harmonic (n)
@var ans = {Number} λ = 2L / n
*/

wave.harmonicLen = function (L, n, callback) {
  var ans = ((2 * L) / n);
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};

// Frequency of the nth harmonic
// 
// wave.harmonicFreq(Wave speed, Length of string, Nth harmonic)
/*
@param {Number} Wave speed (v)
@param {Number} Length of string (L)
@param {Numberr} Nth harmonic (n)
@var ans = {Number} f = v / (2L / n)
*/

wave.harmonicFreq = function (v, L, n, callback) {
  var ans = (v / wave.harmonicLen(L, n));
  if (typeof (callback) === 'function', callback) {
    callback(ans);
    return (ans);
  }
  return (ans);
};
},{"./basic":11,"./constants/constants":12,"./constants/multiplier":13,"./constants/units":14}]},{},[1])
;