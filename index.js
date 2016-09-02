/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-09-02[11:36:30]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const Transformer = require('panto-transformer');
const coffee = require('coffee-script');


class CoffeescriptTransformer extends Transformer {
    _transform(file) {
        const {
            filename,
            content
        } = file;
        return new Promise(resolve => {
            const options = panto._.extend({
                bare: true,
                header: false,
                sourceRoot: false,
                filename
            }, this.options.coffeeOptions);
            const result = coffee.compile(content, options);
            resolve(panto._.extend(file, {
                content: result
            }));
        });
    }
    isTorrential() {
        return false;
    }
}

module.exports = CoffeescriptTransformer;
