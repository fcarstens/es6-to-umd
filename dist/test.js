(function() {
var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

(function (global, factory) {
	typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.test = factory();
})(this, function () {
	"use strict";

	/** babel-helpers **/

	var Person = (function () {
		function Person(options) {
			_classCallCheck(this, Person);

			this.options = options;
		}

		_createClass(Person, {
			greet: {
				value: function greet() {
					alert("Hi, my name is " + this.options.name + ".");
				}
			}
		});

		return Person;
	})();

	var Developer = (function (_Person) {
		function Developer() {
			_classCallCheck(this, Developer);

			if (_Person != null) {
				_Person.apply(this, arguments);
			}
		}

		_inherits(Developer, _Person);

		_createClass(Developer, {
			greet: {
				value: function greet() {
					alert("Hi, I'm a " + this.options.language + " developer.");
				}
			}
		});

		return Developer;
	})(Person);

	var app = {
		Person: Person,
		Developer: Developer
	};

	return app;
});
})();