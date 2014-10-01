/*!CK:3713309867!*//*1406548243,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["QxCQd"]); }

__d("rayInterceptsBox",["invariant"],function(a,b,c,d,e,f,g){function h(j,k){var l=Object.keys(j);k.forEach(function(m){g(l.indexOf(m)!==-1);g(typeof j[m]==='number');});}var i={check:function(j,k){h(j,['minX','maxX','minY','maxY']);h(k,['x','y','dx','dy']);g(j.maxX>j.minX&&j.maxY>j.minY);if(k.dx===0&&k.dy===0)return false;if(k.x>=j.minX&&k.x<=j.maxX&&k.y>=j.minY&&k.y<=j.maxY)return true;var l=(j.minX-k.x)/k.dx,m=(j.maxX-k.x)/k.dx,n=(j.minY-k.y)/k.dy,o=(j.maxY-k.y)/k.dy,p=Math.max(Math.min(l,m),Math.min(n,o)),q=Math.min(Math.max(l,m),Math.max(n,o));if(p<0)return false;if(p>q)return false;return true;}};e.exports=i;},null);
__d("AdsMouseStateStore",["Arbiter","DOM","Event","Vector","$","copyProperties","invariant","keyMirror","rayInterceptsBox","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){"use strict";var q=30,r=500,s=n({STATIONARY:null,INTENT:null,HOVER:null,NO_INTENT:null}),t,u,v,w,x;function y(){t=s.STATIONARY;u=0;v=0;w=Date.now();x='pagelet_ego_pane';}y();function z(event){try{return {x:event.clientX||event.x,y:event.clientY||event.y};}catch(ba){var ca=Math.random()*1000;return {x:ca,y:ca};}}var aa=l(new g(),{getState:function(){return t;},updateRhcID:function(ba){m(k(ba));x=ba;},getRhcID:function(){return x;},onPageTransition:function(event){y();},onMouseMove:function(event){this.calculateState(z(event));},__updateMousePos:function(ba){u=ba.x;v=ba.y;},isRhcPresent:function(){if(!h.scry(document.body,'#'+x).length)return false;var ba=this.getRhcDimensions();return (ba.y>0&&ba.x>0);},getRhc:function(){return k(x);},getRhcPosition:function(){return j.getElementPosition(this.getRhc());},getRhcScreenPos:function(){var ba=j.getScrollPosition(),ca=this.getRhcPosition();return {x:ca.x-ba.x,y:ca.y-ba.y};},getRhcDimensions:function(){return j.getElementDimensions(this.getRhc());},getRhcBoundingBox:function(){var ba=this.getRhcDimensions(),ca=this.getRhcScreenPos();return {minX:ca.x,maxX:ca.x+ba.x,minY:ca.y,maxY:ca.y+ba.y};},isPosContainedInRhc:function(ba){var ca=this.getRhcBoundingBox();return (ba.x>=ca.minX&&ba.x<=ca.maxX&&ba.y>=ca.minY&&ba.y<=ca.maxY);},hasMovedMinDistance:function(ba){var ca=ba.x-u,da=ba.y-v;return (ca*ca+da*da)>=q*q;},tooSoon:function(){return Date.now()-w<r;},_updateTime:function(){w=Date.now();},calculateState:function(ba){if(this.tooSoon())return;this._updateTime();if(!this.isRhcPresent())return;if(this.isPosContainedInRhc(ba)){this.transitionToState(s.HOVER);this.__updateMousePos(ba);this.scheduleCheckup();return;}else if(!this.hasMovedMinDistance(ba)){this.transitionToState(s.STATIONARY);return;}var ca=(this.isMovingTowardsRhc(ba))?s.INTENT:s.NO_INTENT;this.transitionToState(ca);this.__updateMousePos(ba);this.scheduleCheckup();},isMovingTowardsRhc:function(ba){var ca={x:u,y:v};if(this.isPosContainedInRhc(ca))return true;var da=this.getRhcBoundingBox(),ea={x:u,y:v,dx:ba.x-u,dy:ba.y-v};return o.check(da,ea);},scheduleCheckup:function(){var ba={x:u,y:v};setTimeout(function(){this.calculateState(ba);}.bind(this),r*1.5);},transitionToState:function(ba){if(ba===t)return;t=ba;aa.inform('change');}});i.listen(document,'mousemove',p(aa.onMouseMove.bind(aa),r));g.subscribe('page_transition',aa.onPageTransition);aa.STATES=s;aa.MIN_MOVE_DISTANCE=q;aa.THROTTLE_TIME=r;e.exports=aa;},null);
__d("AdsPagerConstants",["keyMirror"],function(a,b,c,d,e,f,g){var h=g({ADD_PAGE:null,PAGE_TRANSITION:null,REQUEST_PAGE:null}),i=g({VIEW_ACTION:null,SERVER_ACTION:null});e.exports={ActionTypes:h,PayloadSources:i};},null);
__d("AdsPagerDispatcher",["AdsPagerConstants","Dispatcher","copyProperties"],function(a,b,c,d,e,f,g,h,i){'use strict';var j=g.PayloadSources;function k(m){return function(n){this.dispatch({payloadSource:m,action:n});};}var l=i(new h(),{handleUpdateFromViewAction:k(j.VIEW_ACTION),handleUpdateFromServerAction:k(j.SERVER_ACTION)});e.exports=l;},null);
__d("AdsRefreshHandler",["AdsMouseStateStore","AdsPagerDispatcher","AdsPagerConstants","Arbiter","Animation","DOM","Event","SubscriptionsHandler","UIPagelet","csx","debounceAcrossTransitions","mergeObjects"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s=g.STATES,t=600;function u(v,w,x){"use strict";if(!x.data||!x.pid)return;this.$AdsRefreshHandler0=v;this.$AdsRefreshHandler1=Date.now();this.$AdsRefreshHandler2=w;this.$AdsRefreshHandler3=x;this.$AdsRefreshHandler4=0;this.$AdsRefreshHandler5=false;this.$AdsRefreshHandler6=q(this.reloadAdsIfNeeded.bind(this),this.$AdsRefreshHandler2.delay);this.$AdsRefreshHandler7=new n();this.$AdsRefreshHandler7.addSubscriptions(m.listen(this.$AdsRefreshHandler0,'mouseenter',this.setMouseOver.bind(this,true)),m.listen(this.$AdsRefreshHandler0,'mouseleave',this.setMouseOver.bind(this,false)),g.subscribe('change',this.onMouseStateStoreChange.bind(this)));h.register(this.handlePageDispatch.bind(this));}u.prototype.handlePageDispatch=function(v){"use strict";var w=v.action||{};if(w.actionType===i.ActionTypes.REQUEST_PAGE)this.reloadAds();};u.prototype.setMouseOver=function(v){"use strict";this.$AdsRefreshHandler8=v;};u.prototype.subscribeDefaultEventsForRefresh=function(){"use strict";this.$AdsRefreshHandler7.addSubscriptions(m.listen(window,'scroll',this.$AdsRefreshHandler6),m.listen(window,'resize',this.$AdsRefreshHandler6));return this;};u.prototype.reloadWithDebounce=function(){"use strict";this.$AdsRefreshHandler6();};u.prototype.reloadWithoutDebounce=function(){"use strict";this.reloadAdsIfNeeded();};u.prototype.forceLoadIfEnoughTimePassed=function(v){"use strict";if(Date.now()-this.$AdsRefreshHandler1>v)this.reloadAds();};u.prototype.containsPremium=function(){"use strict";var v=l.scry(this.$AdsRefreshHandler0,"div._4u8");return !!v.filter(function(w){return JSON.parse(w.getAttribute('data-ad')).segment==='premium';}).length;};u.prototype.reloadAdsIfNeeded=function(){"use strict";if(!this.$AdsRefreshHandler0)return;j.inform('AdsRefreshHandler/CheckingReload');if(this.$AdsRefreshHandler2.stateRefresh){this.reloadAdsIfNeededStateBased();return;}if(this.containsPremium()||this.$AdsRefreshHandler8||!this.$AdsRefreshHandler2.interval)return;if(Date.now()-this.$AdsRefreshHandler1>=this.$AdsRefreshHandler2.interval)this.reloadAds();};u.prototype.reloadAdsIfNeededStateBased=function(){"use strict";if(Date.now()-this.$AdsRefreshHandler1<this.$AdsRefreshHandler2.interval)return;if(this.containsPremium())return;if(!this.$AdsRefreshHandler2.interval)return;this.$AdsRefreshHandler5=true;j.inform('AdsRefreshHandler/RefreshScheduled');this.checkScheduledRefresh();};u.prototype.getRefreshScheduled=function(){"use strict";return this.$AdsRefreshHandler5;};u.prototype.onMouseStateStoreChange=function(){"use strict";this.checkScheduledRefresh();};u.prototype.checkScheduledRefresh=function(){"use strict";if(!this.$AdsRefreshHandler5)return;if(this.$AdsRefreshHandler8)return;var v=g.getState(),w=false;switch(v){case s.HOVER:case s.NO_INTENT:w=true;break;default:break;}if(!w)return;this.$AdsRefreshHandler5=false;this.reloadAds();};u.prototype.reloadAds=function(){"use strict";if(!this.$AdsRefreshHandler0)return;this.$AdsRefreshHandler1=Date.now();var v=this.$AdsRefreshHandler3&&this.$AdsRefreshHandler3.data,w=r(v,{refresh_num:++this.$AdsRefreshHandler4});o.loadFromEndpoint('WebEgoPane',this.$AdsRefreshHandler0,{dom_id:l.getID(this.$AdsRefreshHandler0),pid:this.$AdsRefreshHandler3.pid,data:w},{bundle:false,handler:this.onLoadHandler.bind(this)});j.inform('AdsRefreshHandler/AdsLoading');};u.prototype.onLoadHandler=function(){"use strict";j.inform('AdsRefreshHandler/AdsLoaded');if(!this.$AdsRefreshHandler2.fade)return;(new k(this.$AdsRefreshHandler0)).from('opacity',0).to('opacity',1).duration(t).go();};u.prototype.cleanup=function(){"use strict";this.$AdsRefreshHandler0=null;this.$AdsRefreshHandler7.release();this.$AdsRefreshHandler6.reset();};e.exports=u;},null);
__d("EgoAdsObjectSet",["DOM","csx"],function(a,b,c,d,e,f,g,h){function i(){"use strict";this._allEgoUnits=[];this._egoUnits=[];}i.prototype.init=function(k){"use strict";this._allEgoUnits=k;this._egoUnits=[];this._allEgoUnits.forEach(function(l){var m=j(l);if(!m||!m.holdout)this._egoUnits.push(l);},this);};i.prototype.getCount=function(){"use strict";return this._egoUnits.length;};i.prototype.forEach=function(k,l){"use strict";this._egoUnits.forEach(k,l);};i.prototype.getUnit=function(k){"use strict";return this._egoUnits[k];};i.prototype.getHoldoutAdIDsForSpace=function(k,l){"use strict";if(!k||!l)return [];var m=[];for(var n=0;k>0&&n<this._allEgoUnits.length;n++){var o=this._allEgoUnits[n],p=l(o),q=j(o);if(k>=p&&q&&q.holdout)m.push(q.adid);k-=p;}return m;};i.prototype.getHoldoutAdIDsForNumAds=function(k){"use strict";k=Math.min(k,this._allEgoUnits.length);var l=[];for(var m=0;m<k;m++){var n=this._allEgoUnits[m],o=j(n);if(o&&o.holdout)l.push(o.adid);}return l;};function j(k){var l=g.scry(k,"div._4u8")[0],m=l&&l.getAttribute('data-ad');return m&&JSON.parse(m)||undefined;}e.exports=i;},null);
__d("HomeTickerFirstRightColumnController",["$","ge","throttle","AdsRefreshHandler","Arbiter","NavigationMessage","Style","csx","CSS","DOM","Vector","Run","LegacyContextualDialog","TickerController","Event"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var v=null,w=75,x=50,y=12,z=false,aa,ba,ca,da,ea,fa,ga,ha,ia=x,ja=[],ka=[],la,ma,na,oa,pa,qa,ra,sa,ta,ua,va,wa,xa,ya;function za(){if(oa)na.appendChild(oa);setTimeout(kb,0);}function ab(){ka=[k.subscribe('ProfileQuestionAnswered',fb),k.subscribe('AdsRefreshHandler/AdsLoaded',za),k.subscribe(l.NAVIGATION_BEGIN,cb),k.subscribe('netego_loaded',kb),k.subscribe('Ticker/storiesInserted',kb),k.subscribe('Megaphone/show',kb)];if(v.enableSidebar){ka.push(k.subscribe('sidebar/hide',lb));ka.push(k.subscribe('sidebar/show',mb));}}function bb(){xa=p.scry(document,'div.fbRemindersContent');sa=p.scry(h('rightCol'),'div.home_right_column')[0];ta=p.find(sa,'div.rightColumnWrapper');na=h('pagelet_ego_pane');u.listen(na,'mouseenter',function(){z=true;});u.listen(na,'mouseleave',function(){z=false;});pa=h('pagelet_rhc_ticker');if(!pa)return false;qa=p.scry(pa,'.ticker_container')[0];ra=p.scry(pa,'.ticker_stream')[0];return qa&&ra;}function cb(ob,pb){if(ya!=null){ya.cleanup();ya=null;}ka.forEach(function(qb){qb.unsubscribe();});ka=[];ja.forEach(function(qb){qb.remove();});ja=[];}function db(){if(ga||!aa)ha=q.getElementPosition(na,'viewport').y-q.getElementPosition(ta,'viewport').y;}function eb(){db();var ob=ia;hb();if(ob!=ia){ga=true;ib();}wa=ua+q.getElementPosition(ma,'viewport').y;var pb=wa,qb=q.getElementPosition(sa,'viewport').y;for(var rb=0;rb<xa.length;rb++){var sb=s.getInstance(xa[rb]);sb.hide();}if(ba||!ra){if(fa!==null){var tb=qb+ha,ub=tb<=pb-fa;if(ga||ub!==aa){ga=false;var vb=pb-fa-ha;jb(ub,vb);}}return;}if(v.hasLitestandClassicCards)pb+=y;var wb=qb<=pb+y;if(wb!==aa)jb(wb,pb);}function fb(ob,pb){oa=pb;ya.forceLoadIfEnoughTimePassed(0);}function gb(){ga=true;db();hb();ib();eb();}function hb(){if(typeof va==='undefined'&&h('pageFooter'))va=q.getElementDimensions(h('pageFooter')).y;var ob=q.getDocumentDimensions().y-(q.getScrollPosition('document').y+q.getViewportDimensions().y);ia=ob>va?x:w;}function ib(){var ob=q.getViewportDimensions().y-ua-ia,pb=q.getElementDimensions(ta).y;if(pb<=ob){fa=0-ha-y;return;}var qb;if(ea){var rb=q.getElementPosition(na).y,sb=ta.children[0].children,tb=pb-y;for(qb=0;qb<sb.length-1;qb++){var ub=q.getElementDimensions(sb[qb]).y;tb-=ub;if(tb<=ob){fa=q.getElementPosition(sb[qb]).y+ub-rb;return;}}}var vb=pb-ha;if(vb<=ob){fa=0;}else{var wb=p.scry(na,'div.ego_unit').reverse(),xb=p.scry(na,"div._4u8").length,yb=v.maxFixedAds;if(xb<=v.maxFixedAds)yb=wb.length;var zb=null;for(qb=0;qb<yb;qb++){var ac=wb[qb],bc=q.getElementPosition(ac,'viewport').y-q.getElementPosition(ta,'viewport').y,cc=q.getElementDimensions(ta).y-bc;if(cc>ob){if(qb>0)zb=wb[qb-1];break;}if(qb==yb-1)zb=ac;}if(zb==null){fa=null;}else fa=q.getElementPosition(zb,'viewport').y-q.getElementPosition(na,'viewport').y;}}function jb(ob,pb){aa=ob;pb=pb||wa;var qb=ob?pb+'px':'';m.set(ta,'top',qb);o.conditionClass(ta,'fixed_elem',ob);var rb=p.scry(ta,'div.displayedTickerToggleWrapper')[0];rb&&o.conditionClass(rb,'toggleWrapperWithoutMargin',ob&&!ra);if(ca){var sb=ob?'Ticker/fixed':'Ticker/unfixed';k.inform(sb);}}function kb(){if(!ca||!ra||o.hasClass(document.documentElement,'tinyViewport')){gb();return;}eb();var ob=q.getViewportDimensions().y,pb=61,qb=q.getElementDimensions(ta).y-q.getElementDimensions(qa).y,rb=q.getElementDimensions(ra).y,sb=ob-qb-w-wa-pb,tb=v.tickerAbsMinHeight||120,ub=v.tickerMinHeight||225;ba=false;if(sb<tb){ba=true;jb(false);sb=tb;}else if(sb<ub)if(sb>(ub-pb)){sb=ub;}else sb+=pb;var vb=Math.min(sb,rb,v.tickerMaxHeight||425);m.set(qa,'height',vb+'px');}function lb(){ca=true;bb();var ob=function(){if(bb()){ba=false;eb();kb();}};pa&&t.show(pa,ob);}function mb(){ca=false;bb();gb();pa&&t.hide(pa);}var nb={init:function(ob,pb){v=ob;la=g('contentCol');ma=p.find(document,"div._4f7n");da=0;ea=v.areAllSectionsFixable;ja.push(u.listen(window,'resize',i(kb)));ua=q.getElementDimensions(ma).y;bb();ya=new j(na,v.adsRefreshConfig,pb).subscribeDefaultEventsForRefresh();if(v._adsRefreshConfigDebug)window.refreshHandler=ya;ab();r.onLeave(cb);ja.push(u.listen(window,'scroll',i(eb)));if(!o.hasClass(document.documentElement,'sidebarMode')){lb();}else if(v.enableSidebar)mb();za();}};e.exports=nb;},null);
__d("AsyncLayout",["AjaxPipeRequest","Arbiter","AsyncRequest","AsyncResponse","CSS","DOM","HTML","NavigationMessage","PageTransitions","URI","$","emptyFunction","ge","goURI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){function u(v){"use strict";this.canvasID=v;if(s('rightCol'))this.auxiliaryID='rightCol';if(s('headerArea'))this.headerID='headerArea';if(s('toolbarContainer'))this.toolbarID='toolbarContainer';this.waitingForAux=false;o.registerHandler(this.catchPageTransition.bind(this));this.subscription=h.subscribe(n.NAVIGATION_BEGIN,this.onNavigate.bind(this));}u.prototype.catchPageTransition=function(v){"use strict";this.subscription.unsubscribe();return false;};u.prototype.getCanvasID=function(v){"use strict";return v.sidecol?'contentCol':'contentArea';};u.prototype.onNavigate=function(v,w){"use strict";var x=w.useAjaxPipe;w=w.params;if(w.endpoint){if(this.request){this.request.setFinallyHandler(r);this.request.abort();}if(this.sideRequest)this.sideRequest.abort();if(x){this.request=new g().setURI(w.endpoint).setData(w).setCanvasId(this.getCanvasID(w)).setFinallyHandler(this.finallyHandler.bind(this)).setErrorHandler(this.errorHandler.bind(this)).setFirstResponseCallback(this.firstResponseCallback.bind(this)).send();}else{w.handled=true;this.waitingForAux=w.sidecol;var y=!!w.iframe,z=new i().setOption('useIframeTransport',y).setURI(new p(w.endpoint)).setReadOnly(true).setMethod('GET').setData(w).setHandler(this.onResponse.bind(this)).setErrorHandler(this.errorHandler.bind(this)).setFinallyHandler(this.finallyHandler.bind(this));this.request=z;z.send();}}};u.prototype.onSideResponse=function(v){"use strict";var w=v.getPayload();if(w&&this.auxiliaryID)this.receivedAux(w);};u.prototype.receivedAux=function(v){"use strict";!this.waitingForAux;this.waitingForAux=false;l.setContent(q(this.auxiliaryID),m(v));};u.prototype.onResponse=function(v){"use strict";var w=v.getPayload();if(w.redirect){t(w.redirect);}else{var x=w.html||w;l.setContent(q(this.canvasID),m(x));if(w.side_html&&this.auxiliaryID)this.receivedAux(w.side_html);if(this.headerID&&!w.keep_header){var y=q(this.headerID);l.setContent(y,m(w.header_html||''));k.conditionShow(y,w.header_html);}if(w.toolbar_html&&this.toolbarID)l.setContent(q(this.toolbarID),m(w.toolbar_html));if(w.js)(new Function(w.js))();k.conditionClass('contentCol','hasRightCol',this.auxiliaryID&&!w.noRightSide);var z=s('rightCol');if(z&&w.noRightSide)l.empty(z);}var aa=v.getRequest().getData();h.inform(n.NAVIGATION_COMPLETED,aa.key);};u.prototype.errorHandler=function(v){"use strict";j.verboseErrorHandler(v);h.inform(n.NAVIGATION_FAILED);this.request=null;};u.prototype.firstResponseCallback=function(v){"use strict";window.scrollTo(0,0);h.inform(n.NAVIGATION_FIRST_RESPONSE);};u.prototype.finallyHandler=function(v){"use strict";this.request=null;o.transitionComplete(true);h.inform(n.NAVIGATION_COMPLETED);};e.exports=u;},null);
__d("legacy:adware-scanner",["AdwareScaner"],function(a,b,c,d){a.AdwareScaner=b('AdwareScaner');},3);