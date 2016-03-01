/**
 * MackiJS
 *
 * @author Romack Natividad <romacknatividad@gmail.com>
 * @since March 1, 2016
 */

var UNSENT = 0;
var OPENED = 1;
var HEADERS_RECEIVED = 2;
var LOADING = 3;
var DONE = 4;
var HTTP_RESPONSE_OK = 200;

function MackiJS(params) {
	var version = '0.1';
	initialize(params);
	var xhr;

	function initialize(params) {
		xhr = new XMLHttpRequest();
	}

	function get(url, data, callback) {
		send(url, data, callback, 'GET');
	}

	function post(url, data, callback) {
		send(url, data, callback, 'POST');
	}

	function send(url, data, callback, method) {
		
		xhr.onreadystatechange = function() {
			if (xhr.readyState == DONE && xhr.status == HTTP_RESPONSE_OK) {
				callback(xhr);
			}
		};
		xhr.open(method, url, true);
	}

	function prepareAjaxPayload(data) {

		return payload;
	}
}