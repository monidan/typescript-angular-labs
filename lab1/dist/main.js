/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/enums.ts":
/*!**********************!*\
  !*** ./src/enums.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Category = void 0;\nvar Category;\n(function (Category) {\n    Category[\"Developer\"] = \"Developer\";\n    Category[\"Designer\"] = \"Designer\";\n    Category[\"QA\"] = \"Quality Assurance\";\n    Category[\"SM\"] = \"Scrum Master\";\n    Category[\"BA\"] = \"Business Analyst\";\n})(Category = exports.Category || (exports.Category = {}));\n\n\n//# sourceURL=webpack://lab1/./src/enums.ts?");

/***/ }),

/***/ "./src/functions/arrowFunctions.ts":
/*!*****************************************!*\
  !*** ./src/functions/arrowFunctions.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getWorkerById = exports.logDevs = void 0;\nvar enums_1 = __webpack_require__(/*! ../enums */ \"./src/enums.ts\");\nvar logDevs = function (workers) {\n    workers.forEach(function (worker) {\n        if (worker.category === enums_1.Category.Developer) {\n            console.log(\"Name: \" + worker.name + \"; Surname: \" + worker.surname + \";\");\n        }\n    });\n};\nexports.logDevs = logDevs;\nvar getWorkerById = function (workers, id) {\n    var _a = workers.find(function (worker) { return worker.id === id; }), name = _a.name, surname = _a.surname, available = _a.available, salary = _a.salary;\n    return { name: name, surname: surname, available: available, salary: salary };\n};\nexports.getWorkerById = getWorkerById;\n\n\n//# sourceURL=webpack://lab1/./src/functions/arrowFunctions.ts?");

/***/ }),

/***/ "./src/functions/checkoutWorkers.ts":
/*!******************************************!*\
  !*** ./src/functions/checkoutWorkers.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar getAllWorkers_1 = __webpack_require__(/*! ./getAllWorkers */ \"./src/functions/getAllWorkers.ts\");\nvar arrowFunctions_1 = __webpack_require__(/*! ./arrowFunctions */ \"./src/functions/arrowFunctions.ts\");\nvar workers = (0, getAllWorkers_1.default)();\nfunction checkoutWorkers(customer) {\n    var workerIDs = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        workerIDs[_i - 1] = arguments[_i];\n    }\n    console.log(\"Customer's name:\", customer);\n    return workerIDs\n        .filter(function (workerId) { return (0, arrowFunctions_1.getWorkerById)(workers, workerId).available; })\n        .map(function (workerId) {\n        var worker = (0, arrowFunctions_1.getWorkerById)(workers, workerId);\n        if (worker.available) {\n            return { name: worker.name, surname: worker.surname };\n        }\n    });\n}\nexports[\"default\"] = checkoutWorkers;\n\n\n//# sourceURL=webpack://lab1/./src/functions/checkoutWorkers.ts?");

/***/ }),

/***/ "./src/functions/createCustomer.ts":
/*!*****************************************!*\
  !*** ./src/functions/createCustomer.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction createCustomer(name, age, city) {\n    console.log(\"\\nName: \" + name);\n    if (age) {\n        console.log(\"Age: \" + age);\n    }\n    if (city) {\n        console.log(\"City: \" + city);\n    }\n}\nexports[\"default\"] = createCustomer;\n\n\n//# sourceURL=webpack://lab1/./src/functions/createCustomer.ts?");

/***/ }),

/***/ "./src/functions/getAllWorkers.ts":
/*!****************************************!*\
  !*** ./src/functions/getAllWorkers.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar enums_1 = __webpack_require__(/*! ../enums */ \"./src/enums.ts\");\nfunction getAllWorkers() {\n    var workers = [\n        {\n            id: 1,\n            name: 'Ivan',\n            surname: 'Ivanov',\n            available: true,\n            salary: 1000,\n            category: enums_1.Category.BA\n        },\n        {\n            id: 2,\n            name: 'Petro',\n            surname: 'Petrov',\n            available: true,\n            salary: 1500,\n            category: enums_1.Category.Designer\n        },\n        {\n            id: 3,\n            name: 'Vasyl',\n            surname: 'Vasyliev',\n            available: false,\n            salary: 1600,\n            category: enums_1.Category.SM\n        },\n        {\n            id: 4,\n            name: 'Evgen',\n            surname: 'Zhukov',\n            available: true,\n            salary: 1300,\n            category: enums_1.Category.Developer\n        },\n    ];\n    return workers;\n}\nexports[\"default\"] = getAllWorkers;\n\n\n//# sourceURL=webpack://lab1/./src/functions/getAllWorkers.ts?");

/***/ }),

/***/ "./src/functions/getWorkersNamesByCategory.ts":
/*!****************************************************!*\
  !*** ./src/functions/getWorkersNamesByCategory.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar enums_1 = __webpack_require__(/*! ../enums */ \"./src/enums.ts\");\nfunction getWorkersNamesByCategory(workers, category) {\n    if (category === void 0) { category = enums_1.Category.Designer; }\n    return workers\n        .filter(function (worker) { return worker.category === category; })\n        .map(function (worker) {\n        if (worker.category === category) {\n            return worker.surname;\n        }\n    });\n}\nexports[\"default\"] = getWorkersNamesByCategory;\n\n\n//# sourceURL=webpack://lab1/./src/functions/getWorkersNamesByCategory.ts?");

/***/ }),

/***/ "./src/functions/logFirstAvailable.ts":
/*!********************************************!*\
  !*** ./src/functions/logFirstAvailable.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar getAllWorkers_1 = __webpack_require__(/*! ./getAllWorkers */ \"./src/functions/getAllWorkers.ts\");\nfunction logFirstAvailable(workers) {\n    if (workers === void 0) { workers = (0, getAllWorkers_1.default)(); }\n    console.log(\"Amount of workers: \" + workers.length);\n    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {\n        var worker = workers_1[_i];\n        if (worker.available) {\n            console.log(\"Available worker's name and surname: \" + worker.name + \" \" + worker.surname);\n        }\n    }\n}\nexports[\"default\"] = logFirstAvailable;\n\n\n//# sourceURL=webpack://lab1/./src/functions/logFirstAvailable.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar getAllWorkers_1 = __webpack_require__(/*! ./functions/getAllWorkers */ \"./src/functions/getAllWorkers.ts\");\nvar getWorkersNamesByCategory_1 = __webpack_require__(/*! ./functions/getWorkersNamesByCategory */ \"./src/functions/getWorkersNamesByCategory.ts\");\nvar logFirstAvailable_1 = __webpack_require__(/*! ./functions/logFirstAvailable */ \"./src/functions/logFirstAvailable.ts\");\nvar createCustomer_1 = __webpack_require__(/*! ./functions/createCustomer */ \"./src/functions/createCustomer.ts\");\nvar checkoutWorkers_1 = __webpack_require__(/*! ./functions/checkoutWorkers */ \"./src/functions/checkoutWorkers.ts\");\n// ! 1.1\n// logFirstAvailable(getAllWorkers());\n// ! 1.2\n// console.log(getWorkersNamesByCategory(getAllWorkers(), Category.Developer))\n// ! 1.3\n// console.log(getWorkerById(getAllWorkers(), 2));\n// ! 1.4\n// (function() {\n//   const myID = createCustomerId('Ann', 10);\n//   let idGenerator: typeof createCustomerId = (customerName: string, customerId: number): string => {\n//     return `${customerName} - ${customerId}`;\n//   }; \n//   idGenerator = createCustomerId;\n//   console.log('My Id: ', myID);\n//   console.log('Id generator:', idGenerator('Daniel', 12))\n// })()\n// ! 1.5\n(function () {\n    (0, createCustomer_1.default)('Daniel');\n    (0, createCustomer_1.default)('Daniel', 19);\n    (0, createCustomer_1.default)('Daniel', 19, 'Kyiv');\n    console.log((0, getWorkersNamesByCategory_1.default)((0, getAllWorkers_1.default)()));\n    (0, logFirstAvailable_1.default)();\n    var myWorkers = (0, checkoutWorkers_1.default)('Ann', 1, 2, 4);\n    myWorkers.forEach(function (worker, index) {\n        console.log(index + 1 + \". Worker \" + worker.name + \" \" + worker.surname);\n    });\n})();\n\n\n//# sourceURL=webpack://lab1/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;