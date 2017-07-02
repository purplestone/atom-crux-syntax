/**

	var $$air = require('kit/air');

*/


;define(function () {

	var _pri_static = {heart:{}};

	var _pub_static = function () {var _pub = {}, _pri = {}, _pro = {};
		var _init = function (oSpec) {
			_pri.org = oSpec;

		};

		_pri["$air"] = $(_pri_static.heart);

		_pub["listen"] = function (sType, cb) {
			_pri.$air.on(sType, function (evt, oResp) {
				cb.call(oResp.org, oResp.data);
			});
		};

		_pub["publish"] = function (sType, oPost) {
			_pri.$air.triggerHandler(sType, {
				org : _pri.org,
				data : oPost
			});
		};

		console.log(`sdf${var}sdf`);

		switch(this+'') {
			case 'test':
				_pub._pri = _pri;
			case 'extend':
				_pub._pro = _pro;
				_pub._init = _init;
				break;
			default:
				delete _pub._init;
				delete _pub._pro;
				_init.apply(_pub, arguments);
		}
		return _pub;
	};



	return _pub_static;
});
