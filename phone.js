/* jshint esversion: 6 */

String.prototype.normalize =require("./normalize");

var areaCode = (function () {
    const countries = require("./countries.json");

    var COUNTRY = null;
    var STATE = null;
    var CITY = null;

    var _getCountry = function (country) {

        country = country.normalize().toUpperCase();
        if (country === 'BRASIL') {
            country = 'BRAZIL';
        }

        var lst = [];
        for (var key in countries[country]) {
            if (key !== 'code') {
                lst.push(key);
            }
        }

        if (lst.length) {
            COUNTRY = country;
        }

        return {
            states: lst,
            state: _getStates
        };
    };

    var _getStates = function (state) {

        state = state.normalize().toUpperCase();

        var lst = [];
        for (var key in countries[COUNTRY][state]) {
            lst.push(key);
        }

        if (lst.length) {
            STATE = state;
        }
        return {
            cities: lst,
            city: _getCity
        };
    };

    var _getCity = function (city) {
        city = city.normalize().toUpperCase();
        CITY = city;
        return {
            code: countries[COUNTRY][STATE][city].areaCode,
            object: countries[COUNTRY][STATE][city],
            parse: _parse
        };
    };

    var _parse = function (phone) {

        if (phone) {
            phone = phone.replace(/\D/g, '');

            if (phone.match(/^0800/)) {
                return phone;
            }

            var code = countries[COUNTRY].code;
            var area = countries[COUNTRY][STATE][CITY].areaCode;

            phone = '' + code + '' + ((area) ? area : '') + phone
                .replace(new RegExp('^' + code), '')
                .replace(new RegExp('^0'), '')
                .replace(new RegExp('^' + area), '');
            return (phone.length < 10) ? null : phone;
        }
        return null;
    };

    return {
        from: _getCountry
    };
}());

module.exports = areaCode;