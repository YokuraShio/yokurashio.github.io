let rmf={showRightMenu:function(e,t=0,n=0){let o=$("#rightMenu");o.css("top",t+"px").css("left",n+"px"),e?o.show():o.hide()},switchDarkMode:function(){"light"===("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout((()=>window.disqusReset()),200)},switchReadMode:function(){const e=document.body;e.classList.add("read-mode");const t=document.createElement("button");t.type="button",t.className="fas fa-sign-out-alt exit-readmode",e.appendChild(t),t.addEventListener("click",(function n(){e.classList.remove("read-mode"),t.remove(),t.removeEventListener("click",n)}))},copySelect:function(){document.execCommand("Copy",!1,null)},scrollToTop:function(){btf.scrollToDest(0,500)}};navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)||(window.oncontextmenu=function(e){$(".rightMenu-group.hide").hide(),document.getSelection().toString()&&$("#menu-text").show();let t=e.clientX+10,n=e.clientY,o=$("#rightMenu").width(),i=$("#rightMenu").height();return t+o>window.innerWidth&&(t-=o+10),n+i>window.innerHeight&&(n-=n+i-window.innerHeight),rmf.showRightMenu(!0,n,t),!1},window.addEventListener("click",(function(){rmf.showRightMenu(!1)})));