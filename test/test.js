/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-09-02[11:36:30]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const assert = require('assert');
const panto = require('panto');
const CoffeescriptTransformer = require('../');

describe('panto-transformer-coffeescript', () => {
    describe('#transform', () => {
        it('should parsed', done => {
            new CoffeescriptTransformer().transform({
                filename: 'a.coffee',
                content: 'alert "Hello CoffeeScript!"'
            }).then(file => {
                assert.deepEqual(file.content, 'alert("Hello CoffeeScript!");\n');
            }).then(() => done()).catch(e => console.error(e));
        });
    });
});
