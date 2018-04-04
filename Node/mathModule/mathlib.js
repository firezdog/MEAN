module.exports = function() {
    return {
        add: function(x, y) {
            return x + y;
        },
        multiply: function(x,y) {
            return x*y;
        },
        square: function(x) {
            return x*x;
        },
        random: function(num1, num2) {
            return Math.floor(Math.random()*(num2-num1)) + num1 + 1;
        }
    }
};