/**
 * Created by Нафтуся on 14.03.2016.
 */
alert('this is script fie');

var x = prompt("Введите число x","");
var n = prompt("Введите степень n","");

function pow(x, n) {
    var result = x;
    for (n; n!=1; n--) {
        x*=result;
    }
    return x;

}
alert(pow(x,n));