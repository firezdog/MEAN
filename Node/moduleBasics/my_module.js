module.exports = function() {
    return {
        greet: function(){
            console.log("we are now using a module!");
        },
        add: function(x,y) {
            console.log(`The sum of ${x} and ${y} is`, x + y)
        }
    }
}