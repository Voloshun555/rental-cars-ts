"use strict";(self.webpackChunkrental_cars_ts=self.webpackChunkrental_cars_ts||[]).push([[588],{9576:(e,a,i)=>{i.d(a,{O:()=>A});var n=i(2791),s=i(6286),l=i(2771),r=i(6373);const o="Loader_Loader__C70wX";var t=i(184);const c=()=>(0,t.jsx)("div",{className:o,children:(0,t.jsx)(r.CJ,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"triangle-loading",wrapperStyle:{position:"absolute",top:"50%",left:" 50%",transform:"translate(-50%, -50%)"},visible:!0})}),d=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"]'),m=i.p+"static/media/d21bdb14cfac64634ea5e402aa4bd3aaf1bbb270.00931ac9c4bd8e113e6d.jpg",_={img:"Card_img__ATeK0",containerCard:"Card_containerCard__oMWPh",containerImg:"Card_containerImg__DAyKk",title:"Card_title__LE1q7",model:"Card_model__+n5FB",infoCar:"Card_infoCar__9QvFi",containerInfoCar:"Card_containerInfoCar__BpZiy",containerTotleCar:"Card_containerTotleCar__YdaI4",buttonHeart:"Card_buttonHeart__wpZ0d",iconHeart:"Card_iconHeart__pbD5x",buttonLearnMore:"Card_buttonLearnMore__LbPZ1"};var u=i(8617),C=i(8820);const h={becdropModal:"Modal_becdropModal__eF8av",containerModal:"Modal_containerModal__+-+f2",imgModal:"Modal_imgModal__8gbhI",containerTitleModal:"Modal_containerTitleModal__JPrd8",titleModal:"Modal_titleModal__95eVl",containerInfoCar:"Modal_containerInfoCar__rQaEO",Modal:"Modal_Modal__AycTY",infoCarModal:"Modal_infoCarModal__GIx31",infoCar:"Modal_infoCar__tomUQ",description:"Modal_description__6CJtp",Accessories:"Modal_Accessories__+XnSq",AccessoriesInfo:"Modal_AccessoriesInfo__uh4Qx",accessoriesInfoList:"Modal_accessoriesInfoList__sakJW",rentalCredition:"Modal_rentalCredition__Ly9qu",rentalConditionsList:"Modal_rentalConditionsList__nzMNG",conditions:"Modal_conditions__6+ZzU",numberAge:"Modal_numberAge__CAgBD",mileageAndPrice:"Modal_mileageAndPrice__emclN",RentalCar:"Modal_RentalCar__MUg0d",btnClose:"Modal_btnClose__vUli0",svgClose:"Modal_svgClose__U5+j6"};var x=i(4164);const j=document.querySelector("#modal-root");if(!j)throw new Error("Element with id 'modal-root' not found");const p=e=>{document.body.style.overflow=e?"hidden":"auto"};function g(e){let{model:a,make:i,onClose:s,img:l,year:r,id:o,address:c,rentalPrice:d,type:m,functionalities:_,accessories:u,rentalConditions:g,mileage:f,fuelConsumption:N,engineSize:b,description:M}=e;(0,n.useEffect)((()=>{p(!0);const e=e=>{"Escape"===e.code&&s()};return window.addEventListener("keydown",e),()=>{p(!1),window.removeEventListener("keydown",e)}}),[s]);const v=g.split("\n"),S=v[0].split(": "),y=c.split(", "),L=y[1],k=y[2];return(0,x.createPortal)((0,t.jsx)("div",{className:h.becdropModal,onClick:e=>{e.currentTarget===e.target&&s()},children:(0,t.jsxs)("div",{className:h.containerModal,children:[(0,t.jsx)("button",{onClick:s,type:"button",className:h.btnClose,children:(0,t.jsx)(C.oHP,{className:h.svgClose})}),(0,t.jsx)("img",{className:h.imgModal,src:l,alt:a}),(0,t.jsxs)("div",{className:h.containerTitleModal,children:[(0,t.jsxs)("ul",{className:h.titleModal,children:[(0,t.jsx)("li",{className:h.marka,children:i}),(0,t.jsx)("li",{className:h.Modal,children:a}),(0,t.jsx)("li",{children:r})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:h.infoCarModal,children:(0,t.jsxs)("ul",{className:h.containerInfoCar,children:[(0,t.jsx)("li",{className:h.infoCar,children:L}),(0,t.jsx)("li",{className:h.infoCar,children:k}),(0,t.jsxs)("li",{className:h.infoCar,children:["id: ",o]}),(0,t.jsxs)("li",{className:h.infoCar,children:["year: ",r]}),(0,t.jsxs)("li",{className:h.infoCar,children:["type: ",m]}),(0,t.jsxs)("li",{className:h.infoCar,children:["Fuel Consumption: ",N]}),(0,t.jsxs)("li",{className:h.infoCar,children:["Engine Size: ",b]})]})}),(0,t.jsx)("div",{className:h.description,children:M}),(0,t.jsx)("p",{className:h.Accessories,children:"Accessories and functionalities:"}),(0,t.jsxs)("ul",{className:h.AccessoriesInfo,children:[u.map(((e,a)=>(0,t.jsx)("li",{className:h.accessoriesInfoList,children:e},a))),_.map(((e,a)=>(0,t.jsx)("li",{className:h.accessoriesInfoList,children:e},a)))]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:h.rentalCredition,children:"Rental Conditions:"}),(0,t.jsxs)("ul",{className:h.rentalConditionsList,children:[(0,t.jsxs)("li",{className:h.conditions,children:[S[0],":"," ",(0,t.jsx)("span",{className:h.numberAge,style:{color:"#3470FF"},children:S[1]})]}),(0,t.jsx)("li",{className:h.conditions,children:v[1]}),(0,t.jsx)("li",{className:h.conditions,children:v[2]}),(0,t.jsxs)("li",{className:h.conditions,children:["mileage:"," ",(0,t.jsx)("span",{className:h.mileageAndPrice,children:Number(f).toLocaleString("en")})]}),(0,t.jsxs)("li",{className:h.conditions,children:["Price:"," ",(0,t.jsx)("span",{className:h.mileageAndPrice,children:d})]})]})]})]})]}),(0,t.jsx)("a",{href:"tel:+380730000000",className:h.RentalCar,children:(0,t.jsx)("span",{children:"Rental car"})})]})}),j)}var f=i(8910);function N(e){let{model:a,make:i,id:s,img:r,year:o,address:c,rentalPrice:d,rentalCompany:C,type:h,functionalities:x,fuelConsumption:j,engineSize:p,description:N,accessories:b,rentalConditions:M,mileage:v}=e;const[S,y]=(0,n.useState)(!1),L=(0,l.C)((e=>e.favorite.favoriteList)),k=!!L&&L.includes(s),P=(0,l.T)(),F=c.split(", "),I=F[1],w=F[2],A=x[1];return(0,t.jsxs)("div",{className:_.containerCard,children:[(0,t.jsxs)("div",{className:_.containerImg,children:[(0,t.jsx)("img",{className:_.img,width:300,src:r||m,alt:i}),(0,t.jsx)("button",{onClick:k?()=>{P((0,f.Ni)({id:s}))}:()=>{P((0,f.a3)({id:s}))},className:_.buttonHeart,children:k?(0,t.jsx)(u.wkn,{className:_.iconHeart,style:{fill:"blue",color:"blue"}}):(0,t.jsx)(u.wkn,{className:_.iconHeart})})]}),(0,t.jsx)("div",{style:{marginTop:"14px",marginBottom:"8px"},children:(0,t.jsxs)("ul",{className:_.containerTotleCar,children:[(0,t.jsx)("li",{className:_.title,children:i}),(0,t.jsx)("li",{className:_.model,children:a}),(0,t.jsx)("li",{className:_.title,children:o}),(0,t.jsx)("li",{className:_.title,style:{marginLeft:"auto"},children:d})]})}),(0,t.jsx)("div",{children:(0,t.jsxs)("ul",{className:_.containerInfoCar,children:[(0,t.jsx)("li",{className:_.infoCar,children:I}),(0,t.jsx)("li",{className:_.infoCar,children:w}),(0,t.jsx)("li",{className:_.infoCar,children:C}),(0,t.jsx)("li",{className:_.infoCar,children:h}),(0,t.jsx)("li",{className:_.infoCar,children:i}),(0,t.jsx)("li",{className:_.infoCar,children:s}),(0,t.jsx)("li",{className:_.infoCar,children:A})]})}),(0,t.jsx)("button",{onClick:()=>{y(!0)},className:_.buttonLearnMore,children:"Learn more"}),S&&(0,t.jsx)(g,{model:a,onClose:()=>{y(!1)},make:i,year:o,rentalPrice:d,id:s,address:c,functionalities:x,mileage:v,engineSize:p,type:h,accessories:b,img:r,fuelConsumption:j,description:N,rentalConditions:M},s)]})}const b={containerCardList:"ListCars_containerCardList__Yjc7v"};function M(e){let{cars:a}=e;const i=(0,l.C)((e=>e.filter));console.log(i.minMileage);const n=a.filter((e=>{const a=i.minMileage.replace(",",""),n=i.maxMileage.replace(",",""),s=Number(i.selectedPrice),l=e.rentalPrice&&String(e.rentalPrice.slice(1)),r=String(s-5),o=String(s+5);return(!i.selectedModel||e.make===i.selectedModel)&&((!s||!(l<r||l>o))&&(!(i.minMileage&&e.mileage<Number(a))&&!(i.maxMileage&&e.mileage>Number(n))))}));return(0,t.jsx)("div",{children:a&&(0,t.jsx)(t.Fragment,{children:n.length>0?(0,t.jsx)("ul",{className:b.containerCardList,children:n.map((e=>(0,t.jsx)("li",{children:(0,t.jsx)(N,{model:e.model,make:e.make,year:e.year,rentalPrice:e.rentalPrice,address:e.address,rentalCompany:e.rentalCompany,functionalities:e.functionalities,id:e.id,type:e.type,img:null===e||void 0===e?void 0:e.img,fuelConsumption:e.fuelConsumption,engineSize:e.engineSize,description:e.description,accessories:e.accessories,rentalConditions:e.rentalConditions,mileage:e.mileage})},e.id)))}):(0,t.jsx)("div",{children:"Sorry, no matching cars found"})})})}const v=i.p+"static/media/NoCars.c91fc6561e48624adf1c.png",S="NoCars_containerNoCars__Uryg3",y="NoCars_title__y0Hpf",L=()=>(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:S,children:[(0,t.jsx)("h1",{className:y,children:"No cars"}),(0,t.jsx)("img",{src:v,alt:"NoCars"})]})});var k=i(267),P=i(3853),F=i(1792);const I=e=>(0,t.jsx)(F.c.DropdownIndicator,{...e,children:(0,t.jsx)("div",{style:{display:"flex"},onClick:e.innerProps.onClick,children:e.selectProps.menuIsOpen?(0,t.jsx)(P.rH8,{}):(0,t.jsx)(P.bTu,{})})}),w={ContainerSectionFilter:"FilterSection_ContainerSectionFilter__G79n7",filterContainer:"FilterSection_filterContainer__oLCg6",inputContainer:"FilterSection_inputContainer__DjkoN",label:"FilterSection_label__EQUID",inpurMileage:"FilterSection_inpurMileage__JGoxc",inputKm:"FilterSection_inputKm__33RQU",MilageKm:"FilterSection_MilageKm__5Lhwy",buttonSearch:"FilterSection_buttonSearch__A+oyo",butoonLoadMore:"FilterSection_butoonLoadMore__hKQlj",labelFrom:"FilterSection_labelFrom__nEPk2",labelTo:"FilterSection_labelTo__lxsjH"};function A(e){let{data:a}=e;const[i,r]=(0,n.useState)([]),[o,m]=(0,n.useState)("kdf"),[_,u]=(0,n.useState)(""),[C,h]=(0,n.useState)(""),[x,j]=(0,n.useState)(""),[p,g]=(0,n.useState)(1),f=(0,l.C)((e=>e.cars.isLoading)),N=(0,l.T)();(0,n.useEffect)((()=>{r(a)}),[a]);const b=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),v=i.slice(0,8*p),S=Math.ceil(i.length/8),y=Array.from({length:48},((e,a)=>({value:String(10*(a+3)),label:String(10*(a+3))}))),P=d.map((e=>({value:e,label:e}))),F=y.map((e=>{let{value:a,label:i}=e;return{value:a,label:i}}));return(0,t.jsxs)("section",{className:w.ContainerSectionFilter,children:[(0,t.jsxs)("form",{className:w.filterContainer,onSubmit:e=>{e.preventDefault();const a={selectedModel:o,selectedPrice:_,minMileage:C,maxMileage:x};N((0,k.r)(a))},children:[(0,t.jsx)("div",{className:w.inputContainer,children:(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{className:w.label,children:"Car brand"}),(0,t.jsx)(s.ZP,{components:{DropdownIndicator:I},classNamePrefix:"custom-select",options:P,isClearable:!0,value:P.find((e=>e.value===o)),onChange:e=>m(e?e.value:""),isSearchable:!0,placeholder:"Car brand"})]})}),(0,t.jsx)("div",{children:(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{className:w.label,children:"Price"}),(0,t.jsx)(s.ZP,{components:{DropdownIndicator:I},classNamePrefix:"custom-select",options:F,isClearable:!0,value:F.find((e=>e.value===_)),onChange:e=>u(e?e.value:""),isSearchable:!0,placeholder:"Price"})]})}),(0,t.jsx)("div",{className:w.inputContainer,children:(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{className:w.label,children:"\u0421ar mileage / km"}),(0,t.jsxs)("div",{className:w.MilageKm,children:[(0,t.jsx)("label",{className:w.labelFrom,htmlFor:"From",children:"From"}),(0,t.jsx)("input",{className:w.inpurMileage,type:"text",value:C,onChange:e=>{const a=e.target.value.replace(/,/g,""),i=b(a);h(i)}}),(0,t.jsx)("label",{className:w.labelTo,children:"To"}),(0,t.jsx)("input",{className:w.inputKm,type:"text",value:x,onChange:e=>{const a=e.target.value.replace(/,/g,""),i=b(a);j(i)}})]})]})}),(0,t.jsx)("button",{className:w.buttonSearch,type:"submit",children:"Search"})]}),f&&(0,t.jsx)(c,{}),i.length>0&&(0,t.jsx)(M,{cars:v}),i.length>0?S!==p&&(0,t.jsx)("button",{onClick:()=>g(p+1),className:w.butoonLoadMore,children:"Load more"}):f?(0,t.jsx)(c,{}):(0,t.jsx)(L,{})]})}},3514:(e,a,i)=>{i.r(a),i.d(a,{default:()=>r});var n=i(9576),s=i(2771),l=i(184);function r(){const e=(0,s.C)((e=>e.favorite.favoriteList)),a=(0,s.C)((e=>e.cars.items)).filter((a=>e.includes(a.id)));return(0,l.jsx)("div",{children:(0,l.jsx)(n.O,{data:a})})}}}]);
//# sourceMappingURL=588.e9213a3b.chunk.js.map