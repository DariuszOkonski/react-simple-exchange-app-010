(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),c=n.n(i),u=(n(15),n(1)),l=n(2),o=n(4),s=n(3),p=n(5),m=(n(16),function(){return r.a.createElement("h2",null,"Exhange App")}),h=n(8),d=function(e){var t=e.curriency,n=t.name,a=t.ratio,i=t.title,c=(e.quantity*e.price/a).toFixed(2);return r.a.createElement("p",null,i," ",c," ",n)},y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={price:0,quantity:0},n.handleChangeInput=function(e){e.target.value>=0&&n.setState({quantity:Number(e.target.value)})},n.handleChangeSelect=function(e){n.setState({price:Number(e.target.value),quantity:0})},n.displayUnit=function(){return Object(h.a)(n.props.prices).find(function(e){return e.price===n.state.price}).unit},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({price:this.props.prices[0].price})}},{key:"render",value:function(){var e=this,t=this.props.prices.map(function(e){return r.a.createElement("option",{key:e.id,value:e.price},e.name)}),n=this.props.currencies.map(function(t){return r.a.createElement(d,{key:t.id,curriency:t,price:e.state.price,quantity:e.state.quantity})});return r.a.createElement("div",{className:"control-data"},r.a.createElement("label",{htmlFor:""},"Choose produkt:",r.a.createElement("select",{onChange:this.handleChangeSelect},t)),r.a.createElement("div",null,r.a.createElement("input",{type:"number",value:this.state.quantity,onChange:this.handleChangeInput}),r.a.createElement("span",null,this.state.quantity?this.displayUnit():null)),this.state.quantity?n:null)}}]),t}(r.a.Component),f=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(m,null),r.a.createElement(y,{prices:this.props.prices,currencies:this.props.currencies}))}}]),t}(r.a.Component);f.defaultProps={currencies:[{id:0,name:"zloty",ratio:1,title:"Amount Polish curriency:"},{id:1,name:"dollar",ratio:3.6,title:"Amount USA curriency:"},{id:2,name:"euro",ratio:4.1,title:"Amount EU curriency:"},{id:3,name:"pound",ratio:4.55,title:"Amount UK curriency:"}],prices:[{id:0,name:"electricity",price:.51,unit:"kWh"},{id:1,name:"gas",price:4.76,unit:"liters"},{id:2,name:"oranges",price:3.79,unit:"kilos"},{id:3,name:"coal",price:589.93,unit:"tons"}]};var b=f;c.a.render(r.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.ec0b1d15.chunk.js.map