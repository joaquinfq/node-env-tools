const propSep = require('prop-sep');

/**
 * Valores a usar.
 * Por defecto, se usa `process.env`.
 *
 * @type {Object}
 */
let env = process.env;

/**
 * Funciones exportadas que permiten trabajar con los valores del entorno.
 */
module.exports = {
    /**
     * Devuelve el valor de la clave.
     *
     * @param {String} key    Nombre de la clave.
     * @param {*?}     defval Valor a usar si la clave no existe.
     *
     * @return {*} Valor de la clave o `undefined` si no existe.
     */
    get(key, defval)
    {
        return propSep.get(env, key, defval);
    },
    /**
     * Indica si la clave existe.
     *
     * @param {String} key Nombre de la clave. Se puede usar un `.` para separar objectos.
     *
     * @return {Boolean} `true` si la clave existe.
     */
    has(key)
    {
        return propSep.has(env, key);
    },
    /**
     * Verifica si la propiedad `NODE_ENV` tiene el valor indicado.
     * Se contempla también que el valor pueda estar encerrado en comillas dobles.
     *
     * @param {String}   name   Nombre de la clave. Se puede usar un `.` para separar objectos.
     * @param {Boolean?} quotes Indica si se eliminan las comillas o no.
     *
     * @return {Boolean} `true` si el entorno es el solicitado.
     */
    isEnv(name, quotes = false)
    {
        let _value = env.NODE_ENV;

        return _value && name
            ? _value === name || (quotes && this.isEnv(`"${name}"`))
            : false;
    },
    /**
     * Indica si el entorno es de desarrollo buscando `dev`,
     * `"dev"`, `development` o `"development"`.
     *
     * @return {Boolean} `true` si el entorno es de desarrollo.
     */
    isDev()
    {
        return this.isEnv('dev', true) || this.isEnv('development', true);
    },
    /**
     * Indica si el entorno es de producción buscando `pro`,
     * `"pro"`, `production` o `"production"`.
     *
     * @return {Boolean} `true` si el entorno es de producción.
     */
    isPro()
    {
        return this.isEnv('pro', true) || this.isEnv('production', true);
    },
    /**
     * Indica si el entorno es de pruebas buscando `test`,
     * `"test"`, `testing` o `"testing"`.
     *
     * @return {Boolean} `true` si el entorno es de producción.
     */
    isTest()
    {
        return this.isEnv('test', true) || this.isEnv('testing', true);
    },
    /**
     * Asigna el objeto como entorno en vez de `process.env`.
     *
     * @param {Object} newEnv Objeto a usar como entorno.
     */
    load(newEnv)
    {
        if (newEnv && typeof newEnv === 'object')
        {
            env = newEnv;
        }
    },
    /**
     * Elimina una clave del entorno.
     *
     * @param {String} key Nombre de la clave.
     */
    remove(key)
    {
        return propSep.remove(env, key);
    },
    /**
     * Asigna el valor de la clave.
     *
     * @param {String} key   Nombre de la clave.
     * @param {*?}     value Valor a asignar a la clave.
     */
    set(key, value)
    {
        return propSep.set(env, key, value);
    }
};

