//	HYPE.documents["FinalPartOne-Date"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="FinalPartOne-Date.hyperesources",c="FinalPartOne-Date",e="finalpartonedate_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/finalpartonedate_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_584","HYPE_dtl_584",!0==(null!=a&&10>a||false==!0)?"HYPE-584.full.min.js":"HYPE-584.thin.min.js"),false==!0&&(a=a||l("HYPE_w_584","HYPE_wdtl_584","HYPE-584.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"untitledFunction",source:"function(hypeDocument, element, event) {var rightNow = new Date();\n\t\n\tvar currentDay = rightNow.getDay();\n\tvar dayString;\n\tif (currentDay == 0) { dayString = \"Sunday\"; }\n\telse if (currentDay == 1) { dayString = \"Monday\"; }\n\telse if (currentDay == 2) { dayString = \"Tuesday\"; }\n\telse if (currentDay == 3) { dayString = \"Wednesday\"; }\n\telse if (currentDay == 4) { dayString = \"Thursday\"; }\n\telse if (currentDay == 5) { dayString = \"Friday\"; }\n\telse { dayString = \"Saturday\"; }\n\thypeDocument.getElementById(\"textDay\").innerHTML = \"Today is \" + dayString;\t\n\tvar currentMonth = rightNow.getMonth();\n\tvar monthString;\n\tif (currentMonth == 0) { monthString = \"January\"; }\n\telse if (currentMonth == 1) { monthString = \"February\"; }\n\telse if (currentMonth == 2) { monthString = \"March\"; }\n\telse if (currentMonth == 3) { monthString = \"April\"; }\n\telse if (currentMonth == 4) { monthString = \"May\"; }\n\telse if (currentMonth == 5) { monthString = \"June\"; }\n\telse if (currentMonth == 6) { monthString = \"July\"; }\n\telse if (currentMonth == 7) { monthString = \"August\"; }\n\telse if (currentMonth == 8) { monthString = \"September\"; }\n\telse if (currentMonth == 9) { monthString = \"October\"; }\n\telse if (currentMonth == 10) { monthString = \"November\"; }\n\telse { monthString = \"December\"; }\t\n\tvar currentDate = rightNow.getDate();\n\tvar currentYear = rightNow.getFullYear();\n\thypeDocument.getElementById(\"textDate\").innerHTML = monthString + \" \" + currentDate + \", \" + currentYear;\t\n\tvar currentHour = rightNow.getHours();\n\tvar currentMinute = rightNow.getMinutes();\n\tvar timeOfDay;\n\tif (currentHour > 12) {\n\t\tcurrentHour = currentHour - 12;\n\t\ttimeOfDay = \"PM\";\n\t} else {\n\t\ttimeOfDay = \"AM\";\n\t}\n\t\tif (currentHour < 10) {\n\t\tcurrentHour = \"0\" + currentHour;\n\t} \n\tif (currentMinute < 10) {\n\t\tcurrentMinute = \"0\" + currentMinute;\n\t} \n\thypeDocument.getElementById(\"textTime\").innerHTML = currentHour + \" : \" + currentMinute + \" \" + timeOfDay;\t\t\n\t\n}",identifier:"8"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_584(c,e,{"-1":{n:"PIE.htc"},"-2":{n:"blank.gif"}},h,[],d,[{n:"Untitled Scene",o:"1",X:[0]}],[{o:"3",p:"600px",cA:false,Y:214,Z:128,L:[],c:"#F2F2F2",bY:1,d:214,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:10,b:[],a:[{f:"c",p:2,y:0.01,z:9.29,i:"ActionHandler",e:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"2"}]},s:{a:[{p:4,h:"8"}]},o:"kTimelineDefaultIdentifier"},{f:"c",p:2,y:10,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"2"}]},o:"kTimelineDefaultIdentifier"}],f:30}},bZ:180,O:["9","10","11"],n:"Untitled Layout","_":0,v:{"9":{G:"#000000",aU:8,c:164,aV:8,d:19,r:"inline",s:"Courier,'Courier New',Monospace",t:16,Z:"break-word",i:"textDay",w:"Today is Monday",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:16,F:"center",b:10},"11":{G:"#000000",aU:8,c:164,aV:8,d:19,r:"inline",s:"Courier,'Courier New',Monospace",t:16,Z:"break-word",i:"textTime",w:"12 : 59 pm",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:16,F:"center",b:80},"10":{G:"#000000",aU:8,c:164,aV:8,d:19,r:"inline",s:"Courier,'Courier New',Monospace",t:16,Z:"break-word",i:"textDate",w:"January 01, 2000",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:16,F:"center",b:45}}}],{},g,{},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
