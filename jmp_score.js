"use strict";

console.log("jmp_score.js is loaded!");  // Debugging check

var jmp = (function () {
    var squish = function(x) {
        return 1.0 / (1.0 + Math.exp(-x));
    };

    var squash = function(x) {
        return 1.0 / (1.0 + Math.exp(x));
    };

    var is_missing = function (x) {
        return (typeof x == 'number' && (isNaN(x) || !isFinite(x))) || x === undefined;
    };

    var max_array = function(n, lst) {
        var maxval = -Infinity;
        var maxidx = -1;
        var count_miss = 0;
        
        for (var i = 0; i < n; i++) {
            if (is_missing(lst[i])) {
                count_miss++;
            } else if (maxval < lst[i]) {
                maxval = lst[i];
                maxidx = i;
            }
        }
        return (count_miss == n) ? -1 : maxidx;
    };

    var min_array = function(n, lst) {
        var minval = Infinity;
        var minidx = -1;
        var count_miss = 0;
        
        for (var i = 0; i < n; i++) {
            if (is_missing(lst[i])) {
                count_miss++;
            } else if (minval > lst[i]) {
                minval = lst[i];
                minidx = i;
            }
        }
        return (count_miss == n) ? -1 : minidx;
    };

    var numeq = function(x, y) {
        return x == y;
    };

    return {
        squish: squish,
        squash: squash,
        is_missing: is_missing,
        max_array: max_array,
        min_array: min_array,
        numeq: numeq
    };
})();
