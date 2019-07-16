/* jshint esversion: 6 */

const assert = require('assert');
const  areacode = require('../phone');

describe('Testing areacode',  () => {
    it('.from("BRAZIL").states /* Show states list from Brazil*/',  () => {
        const states = areacode.from("BRAZIL").states;
        const STATES = ['AC',
            'AL',
            'AM',
            'AP',
            'BA',
            'CE',
            'DF',
            'ES',
            'GO',
            'MA',
            'MG',
            'MS',
            'MT',
            'PA',
            'PB',
            'PE',
            'PI',
            'PR',
            'RJ',
            'RN',
            'RO',
            'RR',
            'RS',
            'SC',
            'SE',
            'SP',
            'TO'];
        assert.equal(states.join(','), STATES.join(','), 'invalid states list');
    });
    it('.from("BRAZIL").state("TO").cities /* show list of cities from Tocantins in Brazil*/',  () => {
        const cities = areacode.from("BRAZIL").state("TO").cities;
        // console.log(cities);
        const CITIES = ['ABREULANDIA',
            'AGUIARNOPOLIS',
            'ALIANCA DO TOCANTINS',
            'ALMAS',
            'ALVORADA',
            'ANANAS',
            'ANGICO',
            'APARECIDA DO RIO NEGRO',
            'ARAGOMINAS',
            'ARAGUACEMA',
            'ARAGUACU',
            'ARAGUAINA',
            'ARAGUANA',
            'ARAGUATINS',
            'ARAPOEMA',
            'ARRAIAS',
            'AUGUSTINOPOLIS',
            'AURORA DO TOCANTINS',
            'AXIXA DO TOCANTINS',
            'BABACULANDIA',
            'BANDEIRANTES DO TOCANTINS',
            'BARRA DO OURO',
            'BARROLANDIA',
            'BERNARDO SAYAO',
            'BOM JESUS DO TOCANTINS',
            'BRASILANDIA DO TOCANTINS',
            'BREJINHO DE NAZARE',
            'BURITI DO TOCANTINS',
            'CACHOEIRINHA',
            'CAMPOS LINDOS',
            'CARIRI DO TOCANTINS',
            'CARMOLANDIA',
            'CARRASCO BONITO',
            'CASEARA',
            'CENTENARIO',
            'CHAPADA DA NATIVIDADE',
            'CHAPADA DE AREIA',
            'COLINAS DO TOCANTINS',
            'COLMEIA',
            'COMBINADO',
            'CONCEICAO DO TOCANTINS',
            'COUTO DE MAGALHAES',
            'CRISTALANDIA',
            'CRIXAS DO TOCANTINS',
            'DARCINOPOLIS',
            'DIANOPOLIS',
            'DIVINOPOLIS DO TOCANTINS',
            'DOIS IRMAOS DO TOCANTINS',
            'DUERE',
            'ESPERANTINA',
            'FATIMA',
            'FIGUEIROPOLIS',
            'FILADELFIA',
            'FORMOSO DO ARAGUAIA',
            'FORTALEZA DO TABOCAO',
            'GOIANORTE',
            'GOIATINS',
            'GUARAI',
            'GURUPI',
            'IPUEIRAS',
            'ITACAJA',
            'ITAGUATINS',
            'ITAPIRATINS',
            'ITAPORA DO TOCANTINS',
            'JAU DO TOCANTINS',
            'JUARINA',
            'LAGOA DA CONFUSAO',
            'LAGOA DO TOCANTINS',
            'LAJEADO',
            'LAVANDEIRA',
            'LIZARDA',
            'LUZINOPOLIS',
            'MARIANOPOLIS DO TOCANTINS',
            'MATEIROS',
            'MAURILANDIA DO TOCANTINS',
            'MIRACEMA DO TOCANTINS',
            'MIRANORTE',
            'MONTE DO CARMO',
            'MONTE SANTO DO TOCANTINS',
            'MURICILANDIA',
            'NATIVIDADE',
            'NAZARE',
            'NOVA OLINDA',
            'NOVA ROSALANDIA',
            'NOVO ACORDO',
            'NOVO ALEGRE',
            'NOVO JARDIM',
            'OLIVEIRA DE FATIMA',
            'PALMAS',
            'PALMEIRANTE',
            'PALMEIRAS DO TOCANTINS',
            'PALMEIROPOLIS',
            'PARAISO DO TOCANTINS',
            'PARANA',
            'PAU D ARCO',
            'PEDRO AFONSO',
            'PEIXE',
            'PEQUIZEIRO',
            'PINDORAMA DO TOCANTINS',
            'PIRAQUE',
            'PIUM',
            'PONTE ALTA DO BOM JESUS',
            'PONTE ALTA DO TOCANTINS',
            'PORTO ALEGRE DO TOCANTINS',
            'PORTO NACIONAL',
            'PRAIA NORTE',
            'PRESIDENTE KENNEDY',
            'PUGMIL',
            'RECURSOLANDIA',
            'RIACHINHO',
            'RIO DA CONCEICAO',
            'RIO DOS BOIS',
            'RIO SONO',
            'SAMPAIO',
            'SANDOLANDIA',
            'SANTA FE DO ARAGUAIA',
            'SANTA MARIA DO TOCANTINS',
            'SANTA RITA DO TOCANTINS',
            'SANTA ROSA DO TOCANTINS',
            'SANTA TEREZA DO TOCANTINS',
            'SANTA TEREZINHA DO TOCANTINS',
            'SAO BENTO DO TOCANTINS',
            'SAO FELIX DO TOCANTINS',
            'SAO MIGUEL DO TOCANTINS',
            'SAO SALVADOR DO TOCANTINS',
            'SAO SEBASTIAO DO TOCANTINS',
            'SAO VALERIO DA NATIVIDADE',
            'SILVANOPOLIS',
            'SITIO NOVO DO TOCANTINS',
            'SUCUPIRA',
            'TAGUATINGA',
            'TAIPAS DO TOCANTINS',
            'TALISMA',
            'TOCANTINIA',
            'TOCANTINOPOLIS',
            'TUPIRAMA',
            'TUPIRATINS',
            'WANDERLANDIA',
            'XAMBIOA'];

        assert.equal(cities.join(','), CITIES.join(','), 'invalid cities list');
    });

    it('.from("BRAZIL").state("SP").city("osasco").code /* get area code from Osasco, SP, Brazil */',  () => {
        const ddd = areacode.from("BRAZIL").state("SP").city("Osasco").code;
        assert.equal(ddd, 11, 'invalid area code ' + ddd);
    });

    it('.from("BRAZIL").state("DF").city("brasilia").code /* get area code from Brasilia, DF, Brazil */',  () => {
        const ddd = areacode.from("BRAZIL").state("DF").city("Brasilia").code;
        assert.equal(ddd, 61, 'invalid area code ' + ddd);
    });

    it('.from("BRAZIL").state("SP").city("suzano").code /* get area code from Suzano, SP, Brazil */',  () => {
        const ddd = areacode.from("BRAZIL").state("SP").city("Suzano").code;
        assert.equal(ddd, 11, 'invalid area code ' + ddd);
    });

    it('.from("BRAZIL").state("SP").city("São Jose dos Campos").code /* get area code from São Jose dos Campos, SP, Brazil */',  () => {
        const ddd = areacode.from("BRAZIL").state("SP").city("São Jose dos Campos").code;
        assert.equal(ddd, 12, 'invalid area code ' + ddd);
    });

    it('.from("Brasil").state("SP").city("São Paulo").parse("+55 (11) 9-7936-6143") /* clean invalid chars in phone number*/',  () => {
        const phone = areacode.from("Brasil").state("SP").city("São Paulo").parse("+55 (11) 9-7936-6143");
        assert.equal(phone, 5511979366143, 'invalid phone parse ' + phone);
    });

    it('.from("Brasil").state("SP").city("São Paulo").parse("0-800-77-3801   ") /* clean invalid chars in phone number*/',  () => {
        const phone = areacode.from("Brasil").state("SP").city("São Paulo").parse("0-800-77-3801   ");
        assert.equal(phone, 800773801, 'invalid phone parse ' + phone);
    });

    it('.from("Brasil").state("SP").city("São Paulo").parse("7-3801   ") /* clean invalid chars in phone number*/',  () => {
        const phone = areacode.from("Brasil").state("SP").city("São Paulo").parse("7-3801   ");
        assert.equal(phone, undefined, 'invalid phone parse ' + phone);
    });

    it('.from("Brasil").state("SP").city("São Paulo").object /* get city object*/', () => {
        const obj = areacode.from("Brasil").state("SP").city("São Paulo").object;
        assert.equal(JSON.stringify(obj),'{"normalized":"SAO PAULO","capitalized":"São Paulo","areaCode":"11"}');
    }  );
});
/*
console.log(":: Phone Parse");
console.log(areacode.from("Brasil").state("SP").city("São Paulo").parse("+55 (11) 9-7936-6143"));
*/