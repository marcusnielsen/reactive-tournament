// Generated by BUCKLESCRIPT VERSION 1.6.0, PLEASE EDIT WITH CARE
'use strict';

var Curry   = require("bs-platform/lib/js/curry");
var React   = require("react");
var ReactRe = require("reason-react/lib/js/src/reactRe");

var include = ReactRe.Component[/* JsProps */9];

var componentDidMount = include[0];

var componentWillUpdate = include[1];

var componentDidUpdate = include[2];

var componentWillReceiveProps = include[3];

var componentWillUnmount = include[4];

var getInstanceVars = include[5];

var getInitialState = include[6];

var name = "title";

function render(param) {
  return React.createElement("h1", undefined, param[/* props */1][/* text */0]);
}

var jsPropsToReasonProps = /* Some */[function (jsProps) {
    return /* record */[/* text */jsProps.text];
  }];

var Title = /* module */[
  /* componentDidMount */componentDidMount,
  /* componentWillUpdate */componentWillUpdate,
  /* componentDidUpdate */componentDidUpdate,
  /* componentWillReceiveProps */componentWillReceiveProps,
  /* componentWillUnmount */componentWillUnmount,
  /* getInstanceVars */getInstanceVars,
  /* getInitialState */getInitialState,
  /* name */name,
  /* render */render,
  /* jsPropsToReasonProps */jsPropsToReasonProps
];

var include$1 = ReactRe.CreateComponent([
      name,
      getInstanceVars,
      getInitialState,
      componentDidMount,
      componentWillReceiveProps,
      componentWillUpdate,
      componentDidUpdate,
      componentWillUnmount,
      jsPropsToReasonProps,
      render
    ]);

var wrapProps = include$1[1];

var createElement = Curry.__1(wrapProps);

var comp = include$1[0];

exports.Title         = Title;
exports.comp          = comp;
exports.wrapProps     = wrapProps;
exports.createElement = createElement;
/* include Not a pure module */