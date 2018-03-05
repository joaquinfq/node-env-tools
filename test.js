const assert      = require('assert');
const net         = require('./index');
let numAssertions = 0;

function test(actual, expected)
{
    assert.deepEqual(actual, expected);
    ++numAssertions;
}

function checkEnv(values, method)
{
    for (let _env of values)
    {
        net.load({});
        test(net.has('NODE_ENV'), false);
        net.set('NODE_ENV', _env);
        test(net.has('NODE_ENV'), true);
        //
        test(net[method](), true);
        test(net.isEnv(_env), true);
        test(net.get('NODE_ENV'), _env);
        // Verificamos que con comillas dobles funcione.
        _env = `"${_env}"`;
        net.set('NODE_ENV', _env);
        test(net[method](), true);
        test(net.isEnv(_env), true);
        test(net.get('NODE_ENV'), _env);
    }
}
//------------------------------------------------------------------------------
// Inicio de las pruebas
//------------------------------------------------------------------------------
checkEnv(['dev', 'development'], 'isDev');
checkEnv(['pro', 'production'], 'isPro');
checkEnv(['test', 'testing'], 'isTest');

console.log('Total aserciones: %d', numAssertions);
