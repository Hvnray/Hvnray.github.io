(this["webpackJsonpsimple-calculator"]=this["webpackJsonpsimple-calculator"]||[]).push([[0],{33:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return FullWidthGrid}));var C_Users_slenz_Desktop_simple_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(18),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(52),_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(54),_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(35),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(6),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(21),_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(56),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__),useStyles=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.a)((function(_){return{root:{flexGrow:1},displayArea:{backgroundColor:"#CCE6FF",minWidth:"100%",borderRadius:"12px"},userLink1:{color:"#163A5D",textDecoration:"none",fontWeight:600,paddingLeft:"2rem"},userLink:{color:"#163A5D",textDecoration:"none",fontWeight:600,paddingLeft:"3rem"},userDetails:{color:"#649BD2",fontWeight:500},displayInput:{color:"#649BD2",fontWeight:600,minHeight:"2rem",letterSpacing:"5px"},displayResult:{wordWrap:"break-word",color:"#173B60",fontWeight:900,minHeight:"4rem"},numberButton:{backgroundColor:"#CCE6FF",padding:_.spacing(2),fontSize:"1.1rem",borderRadius:"16px",width:"90%",marginTop:_.spacing(1),fontWeight:900,color:"#163A5D","&:hover":{color:"#CCE6FF",backgroundColor:"#163A5D"}},enterButton:{textTransform:"none",backgroundColor:"#4D8AC8",padding:_.spacing(2),width:"94.5%",marginTop:_.spacing(1),borderRadius:"16px",fontWeight:900,fontSize:"1.1rem",color:"#EAF5FF","&:hover":{color:"#4D8AC8",backgroundColor:"#163A5D"}},actionButton:{backgroundColor:"#A3D1FA",padding:_.spacing(2),width:"90%",marginTop:_.spacing(1),fontSize:"1.1rem",borderRadius:"16px",fontWeight:900,color:"#4D8AC7","&:hover":{color:"#A3D1FA",backgroundColor:"#4D8AC7"}},specialButton:{textTransform:"none",backgroundColor:"#A3D1FA",padding:_.spacing(2),width:"90%",marginTop:_.spacing(1),fontWeight:700,fontSize:"1.1rem",borderRadius:"16px",color:"#4D8AC7","&:hover":{color:"#A3D1FA",backgroundColor:"#4D8AC7"}},paper:{marginTop:_.spacing(4),padding:_.spacing(2),textAlign:"center",color:_.palette.text.secondary,backgroundColor:"#EBF5FF",height:"max-content",width:"100%",borderRadius:"12px"}}}));function FullWidthGrid(){var classes=useStyles(),_React$useState=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),_React$useState2=Object(C_Users_slenz_Desktop_simple_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState,2),currentInput=_React$useState2[0],setCurrentInput=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(!1),_React$useState4=Object(C_Users_slenz_Desktop_simple_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState3,2),checked=_React$useState4[0],setChecked=_React$useState4[1],_React$useState5=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),_React$useState6=Object(C_Users_slenz_Desktop_simple_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState5,2),result=_React$useState6[0],setResult=_React$useState6[1],_React$useState7=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(!1),_React$useState8=Object(C_Users_slenz_Desktop_simple_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState7,2),islastInputAction=_React$useState8[0],setlastInputAction=_React$useState8[1],_React$useState9=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),_React$useState10=Object(C_Users_slenz_Desktop_simple_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_React$useState9,2),lastInput=_React$useState10[0],setlastInput=_React$useState10[1],handleEnterFunction=function handleEnterFunction(){setlastInput("Enter");try{var response=eval(currentInput),_result=response.toString();setResult(_result)}catch(error){console.log(error,"error"),setResult("Math Error")}},handleInput=function(_){var e=currentInput;e+=_,setlastInputAction(!1),setCurrentInput(e)},handleSmile=function(){return setChecked((function(_){return!_}))},handleAction=function(_){var e;switch(e=!islastInputAction||"."===_&&"Enter"===_?currentInput:currentInput.slice(0,-1),"Enter"===lastInput&&(setCurrentInput(result),e=result),_){case"minus":e+="-";break;case"plus":e+="+";break;case"times":e+="*";break;case"divide":e+="/";break;case".":_!==e.slice(-1)&&(e+=".")}setlastInputAction(!0),setCurrentInput(e),setlastInput(_)},handleDelete=function(){if(currentInput.length<=1&&setResult(""),!(currentInput.length<1)){var _=currentInput.slice(0,-1);setCurrentInput(_)}},handleClear=function(){setCurrentInput(""),setResult("")};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{className:classes.root,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.a,{container:!0,spacing:0,alignItems:"center",direction:"column",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__.a,{item:!0,xs:12,sm:6,lg:4,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__.a,{className:classes.paper,elevation:5,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{width:"100%",flexGrow:!0,mx:"auto",className:classes.displayArea,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{textAlign:"start",mx:2,py:1,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__.a,{variant:"h6",className:classes.displayInput,children:currentInput})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{textAlign:"end",mx:2,pb:2,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__.a,{variant:"h3",className:classes.displayResult,children:result})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{display:"flex",width:"100%",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{width:"20%",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",color:"primary",disableElevation:!0,fullWidth:!0,onClick:function(){return handleInput("7")},className:classes.numberButton,children:"7"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{width:"20%",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",color:"primary",fullWidth:!0,disableElevation:!0,name:"8",onClick:function(){return handleInput("8")},className:classes.numberButton,children:"8"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{width:"20%",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",color:"primary",fullWidth:!0,disableElevation:!0,name:"9",onClick:function(){return handleInput("9")},className:classes.numberButton,children:"9"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{width:"20%",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",fullWidth:!0,color:"primary",disableElevation:!0,name:"delete",onClick:handleDelete,className:classes.specialButton,children:"del"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{width:"20%",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",fullWidth:!0,color:"primary",disableElevation:!0,name:"clear",onClick:handleClear,className:classes.specialButton,children:"clear"})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{display:"flex",width:"100%",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{width:"20%",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",color:"primary",disableElevation:!0,fullWidth:!0,name:"4",onClick:function(){return handleInput("4")},className:classes.numberButton,children:"4"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{width:"20%",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",color:"primary",fullWidth:!0,disableElevation:!0,name:"5",onClick:function(){return handleInput("5")},className:classes.numberButton,children:"5"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{width:"20%",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",color:"primary",fullWidth:!0,disableElevation:!0,name:"6",onClick:function(){return handleInput("6")},className:classes.numberButton,children:"6"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{width:"20%",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",fullWidth:!0,color:"primary",disableElevation:!0,name:"times",onClick:function(){return handleAction("times")},className:classes.actionButton,children:"\xd7"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{width:"20%",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",fullWidth:!0,color:"primary",disableElevation:!0,name:"divide",onClick:function(){return handleAction("divide")},className:classes.actionButton,children:"\xf7"})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{display:"flex",width:"100%",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{width:"20%",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",color:"primary",disableElevation:!0,fullWidth:!0,name:"1",onClick:function(){return handleInput("1")},className:classes.numberButton,children:"1"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{width:"20%",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",color:"primary",fullWidth:!0,disableElevation:!0,name:"2",onClick:function(){return handleInput("2")},className:classes.numberButton,children:"2"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{width:"20%",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",color:"primary",fullWidth:!0,disableElevation:!0,name:"3",onClick:function(){return handleInput("3")},className:classes.numberButton,children:"3"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{width:"20%",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",fullWidth:!0,color:"primary",disableElevation:!0,name:"plus",onClick:function(){return handleAction("plus")},className:classes.actionButton,children:"+"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{width:"20%",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",fullWidth:!0,color:"primary",disableElevation:!0,name:"minus",onClick:function(){return handleAction("minus")},className:classes.specialButton,children:"\u2212"})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{display:"flex",width:"100%",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{width:"20%",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",color:"primary",fullWidth:!0,disableElevation:!0,name:"smile",onClick:handleSmile,className:classes.numberButton,children:checked?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span",{children:"\ud83d\ude04"}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span",{children:"\ud83d\ude10"})})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{width:"20%",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",color:"primary",disableElevation:!0,fullWidth:!0,name:".",onClick:function(){return handleAction(".")},className:classes.numberButton,children:"."})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{width:"20%",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",color:"primary",fullWidth:!0,disableElevation:!0,name:"0",onClick:function(){return handleInput("0")},className:classes.numberButton,children:"0"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{width:"40%",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__.a,{variant:"contained",fullWidth:!0,color:"primary",disableElevation:!0,name:"enter",onClick:handleEnterFunction,className:classes.enterButton,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{mx:5,children:"Enter"})})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8__.a,{in:checked,collapsedHeight:0,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{width:"100%",flexGrow:!0,mx:"auto",my:3,className:classes.displayArea,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__.a,{textAlign:"start",mx:2,py:1,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__.a,{variant:"h6",className:classes.userDetails,gutterBottom:!0,noWrap:!0,children:["linkedIn",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a",{className:classes.userLink1,href:"https://www.linkedin.com/in/hvnray/",target:"_blank",rel:"noopener noreferrer",children:"@Hvnray"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__.a,{variant:"h6",className:classes.userDetails,gutterBottom:!0,noWrap:!0,children:["gitlab","          ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a",{className:classes.userLink,href:"https://lbtgit/okebugwu.henry",target:"_blank",rel:"noopener noreferrer",children:"@okebugwu.henry"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__.a,{variant:"h6",className:classes.userDetails,gutterBottom:!0,noWrap:!0,children:["github",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a",{className:classes.userLink,href:"https://github.com/Hvnray",target:"_blank",rel:"noopener noreferrer",children:"@Hvnray"})]})]})})})]})})})})}},45:function(_,e,t){},51:function(_,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),n=t(11),i=t.n(n),c=(t(45),t(33)),s=t(2);var l=function(){return Object(s.jsx)(c.a,{})},o=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,76)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,n=e.getLCP,i=e.getTTFB;t(_),a(_),r(_),n(_),i(_)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(l,{})}),document.getElementById("root")),o()}},[[51,1,2]]]);
//# sourceMappingURL=main.51a62eaa.chunk.js.map