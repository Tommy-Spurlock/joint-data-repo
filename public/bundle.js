(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// build objects with methods to access Database
const apiManager = {
  getInfo: () => {
    return fetch("http://localhost:8088/employees?_expand=department&&_expand=computer").then(response => response.json());
  }
};
var _default = apiManager;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _printAll = _interopRequireDefault(require("./printAll.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// A small business wants to keep track of its employees and the computers that they use. Each employee is assigned to a department, and they each get assigned a computer when they join the company.
// Build arrays of objects that represent Employees, Departments, and Computers.
// Assign every resource a unique id property.
// Assign each employee to a department using a foreign key.
// Assign each employee a computer using a foreign key.
// Once your data is normalized, use your DOM skills to display a card for each employee. It should display the employee name, the name of their department, and which computer they are using
(0, _printAll.default)();

},{"./printAll.js":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// String of info for dom print
const objectString = objectParam => {
  return `<article class="employee">
    <header class="employee__name">
        <h1>${objectParam.firstName} ${objectParam.lastName}</h1>
    </header>
    <section class="employee__department">
        Works in the ${objectParam.department.name} department
    </section>
    <section class="employee__computer">
        Currently using a ${objectParam.computer.type}
    </section>
</article>`;
};

var _default = objectString;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectString = _interopRequireDefault(require("./objectString.js"));

var _apiManager = _interopRequireDefault(require("./apiManager.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Function to print to the DOM
const printAll = () => {
  _apiManager.default.getInfo().then(objectsReturned => {
    objectsReturned.forEach(singleObject => {
      // console.log(singleObject)
      // console.log(objectsReturned)
      document.querySelector("#print-here").innerHTML += (0, _objectString.default)(singleObject);
    });
  });
}; //     console.log(apiManager.getInfo()
//     )
// }


var _default = printAll;
exports.default = _default;

},{"./apiManager.js":1,"./objectString.js":3}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2FwaU1hbmFnZXIuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL29iamVjdFN0cmluZy5qcyIsIi4uL3NjcmlwdHMvcHJpbnRBbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTtBQUdBLE1BQU0sVUFBVSxHQUFHO0FBQ2YsRUFBQSxPQUFPLEVBQUUsTUFBTTtBQUNYLFdBQU8sS0FBSyxDQUFDLHNFQUFELENBQUwsQ0FDTixJQURNLENBQ0QsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRFgsQ0FBUDtBQUVIO0FBSmMsQ0FBbkI7ZUFPZSxVOzs7Ozs7QUNGZjs7OztBQVJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7Ozs7Ozs7O0FDVkE7QUFHQSxNQUFNLFlBQVksR0FBSSxXQUFELElBQWlCO0FBQ2xDLFNBQVM7O2NBRUMsV0FBVyxDQUFDLFNBQVUsSUFBRyxXQUFXLENBQUMsUUFBUzs7O3VCQUdyQyxXQUFXLENBQUMsVUFBWixDQUF1QixJQUFLOzs7NEJBR3ZCLFdBQVcsQ0FBQyxRQUFaLENBQXFCLElBQUs7O1dBUmxEO0FBV0gsQ0FaRDs7ZUFjZSxZOzs7Ozs7Ozs7OztBQ2hCZjs7QUFDQTs7OztBQUZBO0FBSUEsTUFBTSxRQUFRLEdBQUcsTUFBTTtBQUNuQixzQkFBVyxPQUFYLEdBQ0MsSUFERCxDQUNPLGVBQUQsSUFBcUI7QUFDdkIsSUFBQSxlQUFlLENBQUMsT0FBaEIsQ0FBd0IsWUFBWSxJQUFJO0FBQ3BDO0FBQ0E7QUFDQSxNQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLEVBQXNDLFNBQXRDLElBQW1ELDJCQUFhLFlBQWIsQ0FBbkQ7QUFHUCxLQU5HO0FBUUgsR0FWRDtBQVdDLENBWkwsQyxDQWFBO0FBQ0E7QUFDQTs7O2VBR21CLFEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBidWlsZCBvYmplY3RzIHdpdGggbWV0aG9kcyB0byBhY2Nlc3MgRGF0YWJhc2VcclxuXHJcblxyXG5jb25zdCBhcGlNYW5hZ2VyID0ge1xyXG4gICAgZ2V0SW5mbzogKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9lbXBsb3llZXM/X2V4cGFuZD1kZXBhcnRtZW50JiZfZXhwYW5kPWNvbXB1dGVyXCIpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGlNYW5hZ2VyIiwiLy8gQSBzbWFsbCBidXNpbmVzcyB3YW50cyB0byBrZWVwIHRyYWNrIG9mIGl0cyBlbXBsb3llZXMgYW5kIHRoZSBjb21wdXRlcnMgdGhhdCB0aGV5IHVzZS4gRWFjaCBlbXBsb3llZSBpcyBhc3NpZ25lZCB0byBhIGRlcGFydG1lbnQsIGFuZCB0aGV5IGVhY2ggZ2V0IGFzc2lnbmVkIGEgY29tcHV0ZXIgd2hlbiB0aGV5IGpvaW4gdGhlIGNvbXBhbnkuXHJcblxyXG4vLyBCdWlsZCBhcnJheXMgb2Ygb2JqZWN0cyB0aGF0IHJlcHJlc2VudCBFbXBsb3llZXMsIERlcGFydG1lbnRzLCBhbmQgQ29tcHV0ZXJzLlxyXG4vLyBBc3NpZ24gZXZlcnkgcmVzb3VyY2UgYSB1bmlxdWUgaWQgcHJvcGVydHkuXHJcbi8vIEFzc2lnbiBlYWNoIGVtcGxveWVlIHRvIGEgZGVwYXJ0bWVudCB1c2luZyBhIGZvcmVpZ24ga2V5LlxyXG4vLyBBc3NpZ24gZWFjaCBlbXBsb3llZSBhIGNvbXB1dGVyIHVzaW5nIGEgZm9yZWlnbiBrZXkuXHJcbi8vIE9uY2UgeW91ciBkYXRhIGlzIG5vcm1hbGl6ZWQsIHVzZSB5b3VyIERPTSBza2lsbHMgdG8gZGlzcGxheSBhIGNhcmQgZm9yIGVhY2ggZW1wbG95ZWUuIEl0IHNob3VsZCBkaXNwbGF5IHRoZSBlbXBsb3llZSBuYW1lLCB0aGUgbmFtZSBvZiB0aGVpciBkZXBhcnRtZW50LCBhbmQgd2hpY2ggY29tcHV0ZXIgdGhleSBhcmUgdXNpbmdcclxuXHJcbmltcG9ydCBwcmludEFsbCBmcm9tIFwiLi9wcmludEFsbC5qc1wiXHJcblxyXG5wcmludEFsbCgpIiwiLy8gU3RyaW5nIG9mIGluZm8gZm9yIGRvbSBwcmludFxyXG5cclxuXHJcbmNvbnN0IG9iamVjdFN0cmluZyA9IChvYmplY3RQYXJhbSkgPT4ge1xyXG4gICAgcmV0dXJuICBgPGFydGljbGUgY2xhc3M9XCJlbXBsb3llZVwiPlxyXG4gICAgPGhlYWRlciBjbGFzcz1cImVtcGxveWVlX19uYW1lXCI+XHJcbiAgICAgICAgPGgxPiR7b2JqZWN0UGFyYW0uZmlyc3ROYW1lfSAke29iamVjdFBhcmFtLmxhc3ROYW1lfTwvaDE+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZW1wbG95ZWVfX2RlcGFydG1lbnRcIj5cclxuICAgICAgICBXb3JrcyBpbiB0aGUgJHtvYmplY3RQYXJhbS5kZXBhcnRtZW50Lm5hbWV9IGRlcGFydG1lbnRcclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZW1wbG95ZWVfX2NvbXB1dGVyXCI+XHJcbiAgICAgICAgQ3VycmVudGx5IHVzaW5nIGEgJHtvYmplY3RQYXJhbS5jb21wdXRlci50eXBlfVxyXG4gICAgPC9zZWN0aW9uPlxyXG48L2FydGljbGU+YFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvYmplY3RTdHJpbmciLCIvLyBGdW5jdGlvbiB0byBwcmludCB0byB0aGUgRE9NXHJcbmltcG9ydCBvYmplY3RTdHJpbmcgZnJvbSBcIi4vb2JqZWN0U3RyaW5nLmpzXCJcclxuaW1wb3J0IGFwaU1hbmFnZXIgZnJvbSBcIi4vYXBpTWFuYWdlci5qc1wiXHJcblxyXG5jb25zdCBwcmludEFsbCA9ICgpID0+IHtcclxuICAgIGFwaU1hbmFnZXIuZ2V0SW5mbygpXHJcbiAgICAudGhlbigob2JqZWN0c1JldHVybmVkKSA9PiB7XHJcbiAgICAgICAgb2JqZWN0c1JldHVybmVkLmZvckVhY2goc2luZ2xlT2JqZWN0ID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2luZ2xlT2JqZWN0KVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmplY3RzUmV0dXJuZWQpXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpbnQtaGVyZVwiKS5pbm5lckhUTUwgKz0gb2JqZWN0U3RyaW5nKHNpbmdsZU9iamVjdClcclxuXHJcblxyXG4gICAgfSlcclxuXHJcbiAgICB9KVxyXG4gICAgfVxyXG4vLyAgICAgY29uc29sZS5sb2coYXBpTWFuYWdlci5nZXRJbmZvKClcclxuLy8gICAgIClcclxuLy8gfVxyXG5cclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBwcmludEFsbCJdfQ==
