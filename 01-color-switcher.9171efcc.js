!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=!1,r=null;e.addEventListener("click",(function(){if(o)return;return o=!0,e.disabled=!0,n.disabled=!1,r=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),n.addEventListener("click",(function(){if(!o)return;o=!1,e.disabled=!1,n.disabled=!0,clearTimeout(r)}))}();
//# sourceMappingURL=01-color-switcher.9171efcc.js.map
