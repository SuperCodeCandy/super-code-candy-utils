(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["format-string-to-uppercase"] = factory());
})(this, (function () { 'use strict';

	/**
	 * @description 格式化指定标识转为大写 zh-cn -> zh-CN | zh-cn-cn zh-CN-CN
	 * @param str 需要格式化的字符串
	 * @param flag 标识字符 默认为 '-'
	 * @returns 转化后的数据
	 */
	const formatStringToUpperCase = (str = '', flag = '-') => str.replace(new RegExp(`${flag}\\w*`, 'gi'), (s) => s.toLocaleUpperCase());

	return formatStringToUpperCase;

}));
