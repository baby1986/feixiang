/**
 * Created by ysstech on 2017/6/21.
 */
var add = require('./../app/helpers/add.js');
var expect = require('chai').expect;

describe('加法函数的测试', function() {
    it('1 加 1 应该等于 2', function() {
        expect(add(1, 1)).to.be.equal(2);
    });
});