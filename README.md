# areacode

a simple library to get Brazilian phone area code by cities.

* Install

    to install this package run:

    ```$ yarn add areacode```
* Usage
    require the *areacode* package and call areacode functions.

    ```nodejs
    var areacode = require('areacode');
    // get a states list from Brazil
    var states = areacode.from("BRAZIL").states;
    // get a cities list from Tocantins, Brazil
    var cities = areacode.from("BRAZIL").state("TO").cities;
    // get a areacode from Osasco in São Paulo(SP), Brazil
    var ddd = areacode.from("BRAZIL").state("SP").city("Osasco").code;
    // get cit object data
    areacode.from("BRAZIL").state("SP").city("São Paulo").object
    //{"normalized":"SAO PAULO","capitalized":"São Paulo","areaCode":"11"}
    // parse and clean phone
    var phone = areacode.from("Brasil").state("SP").city("São Paulo").parse("+55 (11) 9-7936-6143");
    ```

* Test

    to test run:

    ```$ yarn install && yarn test```
* Contacts

    pedro.leao@gmail.com
