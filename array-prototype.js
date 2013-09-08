/*! 
 * JavaScript Library v0.1 For Array prototype 
 * Copyright 2013, CashLee (cashlee96347@gmail.com)
 */
(function () {
    function extend(target, props) {
        for (var m in props) {
            if (target[m] === undefined) target[m] = props[m];
        }
    }
    var fns = {
        every: 1,
        some: 2,
        forEach: 3,
        map: 4,
        filter: 5
    },
        reduceError = 'Reduce of empty array with no initial value';

    function each(fn, _this, kind) {
        var len = this.length,
            ret = kind == fns.filter ? [] : kind == fns.map ? Array(len) : undefined,
            find = kind == fns.some,
            i, v;
        for (i = 0; i < len; i++) {
            if (this[i] !== undefined) {
                v = fn.call(_this, this[i], i, this);
                switch (kind) {
                case fns.every:
                case fns.some:
                    if (v === find) return find;
                    break;
                case fns.map:
                    ret[i] = v;
                    break;
                case fns.filter:
                    if (v === true) ret[ret.length] = this[i];
                    break;
                }
            }
        }
        return kind >= fns.forEach ? ret : !find;
    }

    function reduce(fn, init, right) {
        var len = this.length,
            i, prev, inc = right ? -1 : 1;
        if (len == 0 && init === undefined)
            throw TypeError(reduceError);
        for (i = right ? len - 1 : 0, prev = init; prev === undefined && (right ? i >= 0 : i < len); i += inc) {
            prev = this[i];
        }
        if (prev === undefined && i == (right ? -1 : len))
            throw TypeError(reduceError);
        for (;
            (right ? i >= 0 : i < len); i += inc) {
            if (this[i] !== undefined)
                prev = fn(prev, this[i], i, this);
        }
        return prev;
    }
    extend(Array.prototype, {
        every: function (fn, _this) {
            return each.call(this, fn, _this, fns.every);
        },
        some: function (fn, _this) {
            return each.call(this, fn, _this, fns.some);
        },
        forEach: function (fn, _this) {
            return each.call(this, fn, _this, fns.forEach);
        },
        map: function (fn, _this) {
            return each.call(this, fn, _this, fns.map);
        },
        filter: function (fn, _this) {
            return each.call(this, fn, _this, fns.filter);
        },
        reduce: function (fn, init) {
            return reduce.call(this, fn, init);
        },
        reduceRight: function (fn, init) {
            return reduce.call(this, fn, init, true);
        }
    });
})();
