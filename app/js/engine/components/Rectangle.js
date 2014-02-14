/**
 * @author Justin White
 */

goog.provide('CrunchJS.Components.Rectangle');

goog.require('CrunchJS.Component');



/**
 * Defines the shape of the Rectangle
 * @param {Object} vertex1 Defines the location of one point of a rectangle with a x, y vector
 * @param {Object} vertex2 Defines the location of one point of a rectangle with a x, y vector
 * @param {Object} vertex3 Defines the location of one point of a rectangle with a x, y vector
 * @param {Object} vertex4 Defines the location of one point of a rectangle with a x, y vector
 * @constructor
 * @class 
 * @extends {CrunchJS.Component}
 */
CrunchJS.Components.Rectangle = function(vertex1, vertex2, vertex3, vertex4) {

	/**
	 * The velocity of the entity	
	 * @type {Object}
	 */
	this.vertex1 = vertex1 ? vertex1 : {
		x : 0,
		y : 0
	};

	/**
	 * The velocity of the entity	
	 * @type {Object}
	 */
	this.vertex2 = vertex2 ? vertex2 : {
		x : 0,
		y : 0
	};

	/**
	 * The velocity of the entity	
	 * @type {Object}
	 */
	this.vertex3 = vertex3 ? vertex3 : {
		x : 0,
		y : 0
	};

	/**
	 * The velocity of the entity	
	 * @type {Object}
	 */
	this.vertex4 = vertex4 ? vertex4 : {
		x : 0,
		y : 0
	};
};

goog.inherits(CrunchJS.Components.Rectangle, CrunchJS.Component);

CrunchJS.Components.Rectangle.prototype.name = 'Rectangle';