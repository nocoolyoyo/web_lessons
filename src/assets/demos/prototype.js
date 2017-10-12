/**
 * Created by nocoolyoyo on 2017/10/12.
 */


/**
 * 增加去除前后空格的语法糖
 * @param global 传入g或G表示去除字符串中所有空格，否则去除前后空格
 * @return {string}
 */
String.prototype.trim = function (global) {
    return (global!==undefined&&global.toLowerCase()==="g")?
        this.replace(/\s/g,""):
        this.replace(/(^\s*)|(\s*$)/g, "");
};

console.log('   haha   ha'.trim('g'));