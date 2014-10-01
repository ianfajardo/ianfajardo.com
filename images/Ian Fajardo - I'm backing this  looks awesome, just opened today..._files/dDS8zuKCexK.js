/*!CK:3808796830!*//*1406669406,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["QIh41"]); }

__d("FeedBlacklistButton",["Arbiter","Event"],function(a,b,c,d,e,f,g,h){var i={BLACKLIST:'feed_blacklist',UNBLACKLIST:'feed_unblacklist',init:function(j,k,l,m){h.listen(k,'click',function(){var n={profile_id:m};g.inform(i.BLACKLIST,n);g.inform('UnfollowingUser',n);});h.listen(l,'click',function(){var n={profile_id:m};g.inform(i.UNBLACKLIST,n);g.inform('FollowingUser',n);});g.subscribe(i.BLACKLIST,function(n,o){if(m==o.profile_id)j.swap();});g.subscribe(i.UNBLACKLIST,function(n,o){if(m==o.profile_id)j.unswap();});}};e.exports=a.FeedBlacklistButton||i;},null);
__d("XPubcontentChainedSuggestionsControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b('XControllerURIBuilder').create("\/pubcontent\/chained_suggestions\/",{pageid:{type:"Int"},profileid:{type:"Int"},eh:{type:"Bool"},friendid:{type:"Int"}});},null);
__d("SubscribeButton",["Arbiter","AsyncRequest","Button","CSS","Event","Tooltip","XPubcontentChainedSuggestionsControllerURIBuilder"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n={SUBSCRIBED:'FollowingUser',UNSUBSCRIBED:'UnfollowingUser',_enable:function(o){i.setEnabled(o,true);l.remove(o);},_disable:function(o,p){i.setEnabled(o,false);if(p)l.set(o,p);},init:function(o,p,q,r,s,t,u,v,w){v=(typeof v!=='undefined')?v:false;var x=(typeof w!=='undefined');if(x&&!u&&!v)n._disable(p,w);k.listen(p,'click',function(){g.inform(n.SUBSCRIBED,{profile_id:r,suppress:true});});g.subscribe(n.SUBSCRIBED,function(y,z){if(r==z.profile_id){if(!s)q.suppressNextMouseEnter&&q.suppressNextMouseEnter();if(x){if(typeof z.connected!=='undefined')u=z.connected;if(u||v)n._enable(p);}o.swap();if(t===true){var aa=(new m()).setBool('eh',true).setInt('profileid',r).getURI();new h().setURI(aa).send();}}});g.subscribe(n.UNSUBSCRIBED,function(y,z){if(r==z.profile_id){o.unswap();q.hideFlyout&&q.hideFlyout();if(x){if(typeof z.connected!=='undefined')u=z.connected;if(!u&&!v)n._disable(p,w);}g.inform('SubMenu/Reset');}});},initSubscribe:function(o,p){k.listen(o,'click',function(){setTimeout(g.inform.bind(g,n.SUBSCRIBED,{profile_id:p}),0);});},initUnsubscribe:function(o,p){k.listen(o,'click',function(){setTimeout(g.inform.bind(g,n.UNSUBSCRIBED,{profile_id:p}),0);});},initSubscribeMenuItem:function(o,p,q){j.hide(p);this._initMenuItem(o,p,q);},initUnsubscribeMenuItem:function(o,p,q){j.hide(o);this._initMenuItem(o,p,q);},_initMenuItem:function(o,p,q){this.initSubscribe(o,q);this.initUnsubscribe(p,q);g.subscribe(n.SUBSCRIBED,function(r,s){j.hide(o);j.show(p);});g.subscribe(n.UNSUBSCRIBED,function(r,s){j.hide(p);j.show(o);});}};e.exports=n;},null);
__d("BookmarkFeedSorter",["Run"],function(a,b,c,d,e,f,g){var h,i={init:function(j){h=j;g.onLeave(function(){h=null;});},setChecked:function(j){if(h)h.setValue(j);}};e.exports=i;},null);
__d("DialogHideOnSuccess",["CSS","copyProperties","cx"],function(a,b,c,d,e,f,g,h,i){function j(k){"use strict";this._layer=k;}j.prototype.enable=function(){"use strict";this._subscription=this._layer.subscribe('success',this._handle.bind(this));};j.prototype.disable=function(){"use strict";this._subscription.unsubscribe();this._subscription=null;};j.prototype._handle=function(k,event){"use strict";if(g.hasClass(event.getTarget(),"_s"))this._layer.hide();};h(j.prototype,{_subscription:null});e.exports=j;},null);
__d("Ease",[],function(a,b,c,d,e,f){var g={makePowerOut:function(h){return function(i){var j=1-Math.pow(1-i,h);return (j*10000|0)/10000;};},makePowerIn:function(h){return function(i){var j=Math.pow(i,h);return (j*10000|0)/10000;};},makePowerInOut:function(h){return function(i){var j=((i*=2)<1)?Math.pow(i,h)*.5:1-Math.abs(Math.pow(2-i,h))*.5;return (j*10000|0)/10000;};},sineOut:function(h){return Math.sin(h*Math.PI*.5);},sineIn:function(h){return 1-Math.cos(h*Math.PI*.5);},sineInOut:function(h){return -.5*(Math.cos(Math.PI*h)-1);},circOut:function(h){return Math.sqrt(1-(--h)*h);},circIn:function(h){return -(Math.sqrt(1-h*h)-1);},circInOut:function(h){return ((h*=2)<1)?-.5*(Math.sqrt(1-h*h)-1):.5*(Math.sqrt(1-(h-=2)*h)+1);},bounceOut:function(h){if(h<1/2.75){return (7.5625*h*h);}else if(h<2/2.75){return (7.5625*(h-=1.5/2.75)*h+.75);}else if(h<2.5/2.75){return (7.5625*(h-=2.25/2.75)*h+.9375);}else return (7.5625*(h-=2.625/2.75)*h+.984375);},bounceIn:function(h){return 1-g.bounceOut(1-h);},bounceInOut:function(h){return (h<.5)?g.bounceIn(h*2)*.5:g.bounceOut(h*2-1)*.5+.5;},_makeBouncy:function(h){h=h||1;return function(i){i=((1-Math.cos(i*Math.PI*h))*(1-i))+i;return i<=1?i:2-i;};},makeBounceOut:function(h){return this._makeBouncy(h);},makeBounceIn:function(h){var i=this._makeBouncy(h);return function(j){return 1-i(1-j);};},makeElasticOut:function(h,i){h<1&&(h=1);var j=Math.PI*2;return function(k){if(k===0||k===1)return k;var l=i/j*Math.asin(1/h);return h*Math.pow(2,-10*k)*Math.sin((k-l)*j/i)+1;};},makeElasticIn:function(h,i){h<1&&(h=1);var j=Math.PI*2;return function(k){if(k===0||k===1)return k;var l=i/j*Math.asin(1/h);return -(h*Math.pow(2,10*(k-=1))*Math.sin((k-l)*j/i));};},makeElasticInOut:function(h,i){h<1&&(h=1);i*=1.5;var j=Math.PI*2;return function(k){var l=i/j*Math.asin(1/h);return ((k*=2)<1)?-.5*h*Math.pow(2,10*(k-=1))*Math.sin((k-l)*j/i):1+.5*h*Math.pow(2,-10*(k-=1))*Math.sin((k-l)*j/i);};},makeBackOut:function(h){return function(i){return (--i*i*((h+1)*i+h)+1);};},makeBackIn:function(h){return function(i){return i*i*((h+1)*i-h);};},makeBackInOut:function(h){h*=1.525;return function(i){return ((i*=2)<1)?.5*(i*i*((h+1)*i-h)):.5*((i-=2)*i*((h+1)*i+h)+2);};},easeOutExpo:function(h){return -Math.pow(2,-10*h)+1;}};g.elasticOut=g.makeElasticOut(1,.3);g.elasticIn=g.makeElasticIn(1,.3);g.elasticInOut=g.makeElasticInOut(1,.3);g.backOut=g.makeBackOut(1.7);g.backIn=g.makeBackIn(1.7);g.backInOut=g.makeBackInOut(1.7);e.exports=g;},null);
__d("StickyController",["CSS","Event","Style","Vector","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k){function l(m,n,o,p){"use strict";this._element=m;this._marginTop=n;this._onchange=o;this._proxy=p||m.parentNode;this._boundQueryOnScroll=this.shouldFix.bind(this);this._boundMutateOnScroll=this._mutateOnScroll.bind(this);}l.prototype.handleScroll=function(){"use strict";k(this._boundQueryOnScroll,this._boundMutateOnScroll);};l.prototype.shouldFix=function(){"use strict";return j.getElementPosition(this._proxy,'viewport').y<=this._marginTop;};l.prototype._mutateOnScroll=function(){"use strict";var m=this.shouldFix();if(this.isFixed()!==m){i.set(this._element,'top',m?this._marginTop+'px':'');g.conditionClass(this._element,'fixed_elem',m);this._onchange&&this._onchange(m);}};l.prototype.start=function(){"use strict";if(this._event)return;this._event=h.listen(window,'scroll',this.handleScroll.bind(this));setTimeout(this.handleScroll.bind(this),0);};l.prototype.stop=function(){"use strict";this._event&&this._event.remove();this._event=null;};l.prototype.isFixed=function(){"use strict";return g.hasClass(this._element,'fixed_elem');};e.exports=l;},null);
__d("Tour",["Arbiter","LayerDestroyOnHide","LayerHideOnEscape","NavigationMessage","copyProperties"],function(a,b,c,d,e,f,g,h,i,j,k){function l(){"use strict";if(l._instance)l._instance.setTourComplete();l._instance=this;}l.prototype.init=function(){"use strict";this._pageLeaveToken=g.subscribe('onload/exit',this.handleLeavePage.bind(this));this._navigationBeginToken=g.subscribe(j.NAVIGATION_BEGIN,this.handleTransition.bind(this));this.steps={};return this;};l.prototype.registerStep=function(m,n){"use strict";m.disableBehavior(h);m.disableBehavior(i);this.steps[n]=m;m.subscribe('show',function(){m.inform('tour-dialog-show',m);});if(!this.getTourStarted())this.setTourStart();};l.prototype._unsubscribeSubscriptions=function(){"use strict";this._navigationBeginToken.unsubscribe();this._pageLeaveToken.unsubscribe();};l.prototype.handleLeavePage=function(){"use strict";this._unsubscribeSubscriptions();};l.prototype.handleTransition=function(){"use strict";this._unsubscribeSubscriptions();};l.prototype.handleTourStart=function(){"use strict";};l.prototype.handleTourStop=function(){"use strict";};l.prototype.handleTourComplete=function(){"use strict";};l.prototype.showStep=function(m){"use strict";var n=this.steps[m];if(!(this.openDialog==n))this.hideOpenDialog();if(!n)return;this.openDialog=n;n.show();};l.prototype.hideOpenDialog=function(){"use strict";if(this.openDialog){this.openDialog.hide();this.openDialog=null;}};l.prototype.getTourStarted=function(){"use strict";return this.tourStarted;};l.prototype.setTourStart=function(){"use strict";this.tourStarted=true;this.handleTourStart();};l.prototype.setTourStop=function(){"use strict";this.tourStarted=false;this.hideOpenDialog();this.handleTourStop();};l.prototype.setTourComplete=function(){"use strict";if(this.tourComplete)return;this.setTourStop();this.tourComplete=true;this.handleTourComplete();};l.prototype.hideStep=function(m){"use strict";var n=this.steps[m];n&&n.hide();};l.getInstance=function(){"use strict";return l._instance||(l._instance=new l());};k(l.prototype,{tourStarted:false,tourComplete:false,_navigationBeginToken:null,_pageLeaveToken:null,steps:{},openDialog:null});e.exports=l;},null);
__d("reportData",["EagleEye","userAction"],function(a,b,c,d,e,f,g,h){function i(j,k){k=k||{};var l={ft:(k.ft||{}),gt:(k.gt||{})},m='-',n=[],o='r',p=[Date.now(),h.getCurrentUECount(),m,j,m,m,o,a.URI?a.URI.getRequestURI(true,true).getUnqualifiedURI().toString():location.pathname+location.search+location.hash,l,0,0,0,0].concat(n);g.log('act',p);}e.exports=i;},null);
__d("FutureSideNavItem",["Arbiter","CSS","DOM","Parent","$","createArrayFrom","getElementText"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(o,p){"use strict";this.id=o.id;this.up=p;this.endpoint=o.endpoint;this.type=o.type;this.node=o.node||k(o.id);this.paths=o.path?l(o.path):[];this.keys=o.key?l(o.key):[];var q=this._findKeys(this.keys);this.numericKey=q.numeric||this.keys[0];this.textKey=q.text||this.keys[0];this._pathPattern=this._buildRegex(this.paths);this._keyPattern=this._buildRegex(this.keys);this.hideLoading();this.hideSelected();}n.prototype.equals=function(o){"use strict";return o&&o.id===this.id;};n.prototype.getLinkNode=function(){"use strict";return (i.scry(this.node,'a.item')[0]||i.scry(this.node,'a.subitem')[0]);};n.prototype.matchPath=function(o){"use strict";return this._matchInput(this._pathPattern,o);};n.prototype.matchKey=function(o){"use strict";return this._matchInput(this._keyPattern,o);};n.prototype._matchInput=function(o,p){"use strict";var q=o&&o.exec(p);return q&&q.slice(1);};n.prototype.getTop=function(){"use strict";return this.isTop()?this:this.up.getTop();};n.prototype.isTop=function(o){"use strict";return !this.up;};n.prototype.setCount=function(o,p){"use strict";return this._updateCount(o,true);};n.prototype.incrementCount=function(o,p){"use strict";return this._updateCount(o,false);};n.prototype._updateCount=function(o,p,q){"use strict";var r=i.scry(this.node,'span.count')[0],s=r&&i.scry(r,'span.countValue')[0];if(s){var t=p?0:parseInt(m(s),10),u=Math.max(0,t+o),v=this.isTop()?'hidden':'hiddenSubitem';i.setContent(s,u);q&&h.conditionClass(this.node,v,!u);h.conditionClass(r,'hidden_elem',!u);if(this.isTop()){var w=i.scry(this.node,'div.linkWrap')[0];if(w){h.conditionClass(w,'noCount',!u);h.conditionClass(w,'hasCount',u);}}}g.inform('NavigationMessage.COUNT_UPDATE_DONE');};n.prototype.showLoading=function(){"use strict";h.addClass(this.node,'loading');};n.prototype.hideLoading=function(){"use strict";h.removeClass(this.node,'loading');};n.prototype.showSelected=function(){"use strict";h.addClass(this.node,'selectedItem');h.hasClass(this.node,'hider')&&h.addClass(this._getExpanderParent(),'expandedMode');};n.prototype.hideSelected=function(){"use strict";h.removeClass(this.node,'selectedItem');};n.prototype.showChildren=function(){"use strict";h.addClass(this.node,'open');};n.prototype.hideChildren=function(){"use strict";h.removeClass(this.node,'open');};n.prototype._getExpanderParent=function(){"use strict";return j.byClass(this.node,'expandableSideNav');};n.prototype._buildRegex=function(o){"use strict";if(o.length){var p=o.map(function(q){if(typeof q==="string"){return q.replace(/([^a-z0-9_])/ig,'\\$1');}else if(q&&q.regex)return q.regex;});return new RegExp('^(?:'+p.join('|')+')$');}};n.prototype._findKeys=function(o){"use strict";var p=/^(app|group|fl)_/,q={};for(var r=0;r<o.length;r++){var s=p.test(o[r]);if(s&&!q.numeric){q.numeric=o[r];}else if(!s&&!q.text)q.text=o[r];if(q.numeric&&q.text)break;}return q;};e.exports=n;},null);
__d("FutureSideNavSection",["Bootloader","DOMQuery","$"],function(a,b,c,d,e,f,g,h,i){function j(k){"use strict";this.id=k.id;this.node=this.node||i(k.id);this.editEndpoint=k.editEndpoint;}j.prototype.equals=function(k){"use strict";return k&&k.id===this.id;};j.prototype.getEditorAsync=function(k){"use strict";g.loadModules(["SortableSideNav"],function(l){var m=new l(h.find(this.node,'ul.uiSideNav'),this.editEndpoint);k(m);}.bind(this));};e.exports=j;},null);
__d("FutureSideNav",["Arbiter","ChannelConstants","CSS","DOM","DOMDimensions","$","Event","FutureSideNavItem","FutureSideNavSection","NavigationMessage","PageTransitions","Parent","Run","SelectorDeprecated","URI","Vector","Locale","copyProperties","createArrayFrom","debounce"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){function aa(ba,ca,da){"use strict";aa.instance&&aa.instance.uninstall();aa.instance=this;if(typeof ba==='undefined')return;this.init(ba,ca,da);}aa.prototype.init=function(ba,ca,da){"use strict";this.root=ba;this.items={};this.sections={};this.editor=null;this.editing=false;this.selected=null;this.loading=null;this.keyParam='sk';this.defaultKey=ca;this.uri=u.getRequestURI();this.ajaxPipe=da;this.ajaxPipeEndpoints={};this.sidecol=true;this._installed=true;this._handlePageTransitions=true;q.registerHandler(function(ea){return this._handlePageTransitions&&this.handlePageTransition(ea);}.bind(this));this._eventHandlers=[];this._sectionEventHandlers={};this._arbiterSubscriptions=[g.subscribe(p.NAVIGATION_COMPLETED,this.navigationComplete.bind(this)),g.subscribe(p.NAVIGATION_FAILED,this.navigationFailed.bind(this)),g.subscribe(p.NAVIGATION_COUNT_UPDATE,this.navigationCountUpdate.bind(this)),g.subscribe(p.NAVIGATION_SELECT,this.navigationSelect.bind(this)),g.subscribe(h.getArbiterType('nav_update_counts'),this.navigationCountUpdateFromPresence.bind(this)),g.subscribe('sideNavPopoverMenuItemClicked',function(ea,fa){var ga=r.byClass(fa.bookmarkNode,'homeSideNav'),ha=ga&&ga.getAttribute('id');if(!ha)return;this._handleMenuClick(this.sections[ha],fa.bookmarkNode,fa.menuItemNode,fa.menuNode);}.bind(this)),g.subscribe('sideNavPopoverMenuCheckFavorite',function(ea,fa){var ga=r.byClass(fa.bookmarkNode,'homeSideNav'),ha=ga&&ga.getAttribute('id');if(!ha)return;var ia=this.sections[ha].equals(this.getSection('favorites')),ja=this.items[fa.bookmarkNode.id];if(ia){ja.showFavorite(fa.menuNode);}else ja.hideFavorite(fa.menuNode);}.bind(this))];this._handleResize=z(this._checkNarrow.bind(this),200);this._eventHandlers.push(m.listen(window,'resize',this._handleResize));this._checkNarrow();this._selectorSubscriptions=[];window.Selector&&this._selectorSubscriptions.push(t.subscribe(['open','close'],function(ea,fa){var ga=r.byClass(fa.selector,'sideNavItem');ga&&i.conditionClass(ga,'editMenuOpened',ea==='open');}));s.onLeave(this.uninstall.bind(this));if(this._pendingSections)this._pendingSections.forEach(function(ea){this.initSection.apply(this,ea);}.bind(this));};aa.prototype._checkNarrow=function(){"use strict";if(!this.root)return;var ba=v.getElementPosition(this.root).x;i.conditionClass(this.root,'uiNarrowSideNav',ba<20||(w.isRTL()&&ba+k.getElementDimensions(this.root).width<k.getElementDimensions(l('globalContainer')).width));};aa.prototype.uninstall=function(){"use strict";if(this._installed){this._installed=false;this._handlePageTransitions=false;this._arbiterSubscriptions.forEach(g.unsubscribe);this._selectorSubscriptions.forEach(function(ca){t.unsubscribe(ca);});this._eventHandlers.forEach(function(ca){ca.remove();});for(var ba in this._sectionEventHandlers)this._sectionEventHandlers[ba].remove();this._handleResize.reset();}};aa.prototype.initSection=function(ba,ca){"use strict";if(!this._installed){this._pendingSections=this._pendingSections||[];this._pendingSections.push(arguments);return;}this._initItems(ca);this._initSection(ba);};aa.prototype.addItem=function(ba,ca){"use strict";this._initItem(ba,ca);};aa.prototype._initItems=function(ba){"use strict";var ca=function(da,ea){var fa=this._initItem(da,ea);if(da.children)da.children.forEach(function(ga){ca(ga,fa);});}.bind(this);y(ba).forEach(function(da){ca(da,null);});};aa.prototype._initItem=function(ba,ca){"use strict";var da=this.items[ba.id]=this._constructItem(ba,ca);if(da.equals(this.selected)||ba.selected)this.setSelected(da);var ea=da.getLinkNode();ea&&this._eventHandlers.push(m.listen(ea,'click',function(event){return !this.editing;}.bind(this)));return da;};aa.prototype._initSection=function(ba){"use strict";this._sectionEventHandlers[ba.id]&&this._sectionEventHandlers[ba.id].remove();var ca=this.sections[ba.id]=this._constructSection(ba);this._sectionEventHandlers[ba.id]=m.listen(ca.node,'click',this.handleSectionClick.bind(this,ca));return ca;};aa.prototype._constructItem=function(ba,ca){"use strict";return new n(ba,ca);};aa.prototype._constructSection=function(ba){"use strict";return new o(ba);};aa.prototype.handleSectionClick=function(ba,event){"use strict";var ca=this._getEventTarget(event,'a');if(ca)this._handleLinkClick(ba,ca,event);};aa.prototype._getEventTarget=function(event,ba){"use strict";var ca=event.getTarget();if(ca.tagName!==ba.toUpperCase()){return r.byTag(ca,ba);}else return ca;};aa.prototype._handleMenuClick=function(ba,ca,da,ea){"use strict";if(i.hasClass(da,'rearrange'))this.beginEdit(ba);};aa.prototype._handleMenuItemClick=function(ba,ca,da){"use strict";if(ba==='rearrange')this.beginEdit(ca);};aa.prototype._handleLinkClick=function(ba,ca,event){"use strict";if(i.hasClass(ca,'navEditDone')){this.editing?this.endEdit():this.beginEdit(ba);event.kill();}};aa.prototype.getItem=function(ba){"use strict";if(this._isCurrentPath(ba)){return this._getItemForKey(this._getKey(ba.getQueryData())||this.defaultKey);}else return this._getItemForPath(ba.getPath());};aa.prototype.getNodeForKey=function(ba){"use strict";var ca=this._getItemForKey(ba);if(ca)return ca.node;};aa.prototype._isCurrentPath=function(ba){"use strict";return ba.getDomain()===this.uri.getDomain()&&ba.getPath()===this.uri.getPath();};aa.prototype._getKey=function(ba){"use strict";return ba[this.keyParam];};aa.prototype._getSectionForNode=function(ba){"use strict";while(ba=ba.parentNode)if(ba.id&&this.sections[ba.id])return this.sections[ba.id];};aa.prototype._getItemForNode=function(ba){"use strict";ba=r.byClass(ba,'sideNavItem');return ba&&this.items[ba.id];};aa.prototype._getItemForKey=function(ba){"use strict";return this._findItem(function(ca){return ca.matchKey(ba);});};aa.prototype._getItemForPath=function(ba){"use strict";return this._findItem(function(ca){return ca.matchPath(ba);});};aa.prototype._findItem=function(ba){"use strict";for(var ca in this.items)if(ba(this.items[ca]))return this.items[ca];};aa.prototype.removeItem=function(ba){"use strict";if(ba&&this.items[ba.id]){j.remove(ba.node);delete this.items[ba.id];}};aa.prototype.removeItemByKey=function(ba){"use strict";this.removeItem(this._getItemForKey(ba));};aa.prototype.moveItem=function(ba,ca,da){"use strict";var ea=j.find(ba.node,'ul.uiSideNav');(da?j.prependContent:j.appendContent)(ea,ca.node);};aa.prototype.setLoading=function(ba){"use strict";this.loading&&this.loading.hideLoading();this.loading=ba;this.loading&&this.loading.showLoading();};aa.prototype.setSelected=function(ba){"use strict";this.setLoading(null);if(this.selected){this.selected.hideSelected();this.selected.getTop().hideChildren();}this.selected=ba;if(this.selected){this.selected.showSelected();this.selected.getTop().showChildren();}};aa.prototype.handlePageTransition=function(ba){"use strict";var ca=this.getItem(ba),da=ca&&ca.endpoint&&this._doPageTransition(ca,ba);return da;};aa.prototype._doPageTransition=function(ba,ca){"use strict";this.setLoading(ba);this._sendPageTransition(ba.endpoint,x(this._getTransitionData(ba,ca),ca.getQueryData()));return true;};aa.prototype._sendPageTransition=function(ba,ca){"use strict";ca.endpoint=ba;g.inform(p.NAVIGATION_BEGIN,{useAjaxPipe:this._useAjaxPipe(ba),params:ca});};aa.prototype._getTransitionData=function(ba,ca){"use strict";var da={};da.sidecol=this.sidecol;da.path=ca.getPath();da[this.keyParam]=ba.textKey;da.key=ba.textKey;return da;};aa.prototype._useAjaxPipe=function(ba){"use strict";return this.ajaxPipe||this.ajaxPipeEndpoints[ba];};aa.prototype.navigationComplete=function(){"use strict";this.loading&&this.setSelected(this.loading);};aa.prototype.navigationFailed=function(){"use strict";this.setLoading(null);};aa.prototype.navigationSelect=function(ba,ca){"use strict";var da=this._getItemForKey(this._getKey(ca));if(ca.asLoading){this.setLoading(da);}else this.setSelected(da);};aa.prototype.navigationCountUpdate=function(ba,ca){"use strict";var da=this._getItemForKey(ca&&ca.key);if(da)if(typeof ca.count!=="undefined"){da.setCount(ca.count,ca.hide);}else if(typeof ca.increment!=="undefined")da.incrementCount(ca.increment,ca.hide);};aa.prototype.navigationCountUpdateFromPresence=function(ba,ca){"use strict";ca=ca.obj;if(ca)if(!ca.class_name||ca.class_name&&i.hasClass(this.root,ca.class_name))if(ca.items)for(var da=0;da<ca.items.length;da++)this.navigationCountUpdate(ba,ca.items[da]);};aa.prototype.beginEdit=function(ba){"use strict";if(!this.editing){this.editing=true;i.addClass(this.root,'editMode');this._updateTrackingData();this._initEditor(ba);}};aa.prototype.endEdit=function(){"use strict";if(this.editing){i.removeClass(this.root,'editMode');this.editor&&this.editor.endEdit();this.editor=null;this.editing=false;this._updateTrackingData();}};aa.prototype._updateTrackingData=function(ba){"use strict";var ca=this.root.getAttribute('data-gt')||"{}";try{ca=JSON.parse(ca);if(this.editing){ca.editing=true;}else delete ca.editing;this.root.setAttribute('data-gt',JSON.stringify(ca));}catch(da){}};aa.prototype._initEditor=function(ba){"use strict";ba.getEditorAsync(function(ca){if(this.editing){this.editor=ca;this.editor.beginEdit();}}.bind(this));};aa.getInstance=function(){"use strict";return aa.instance||new aa();};aa.initMenu=function(ba,ca){"use strict";ca.subscribe('itemclick',function(da,ea){var fa=aa.getInstance(),ga=ba.getTriggerElem(),ha=fa._getSectionForNode(ga),ia=fa._getItemForNode(ga);fa._handleMenuItemClick(ea.item.getValue(),ha,ia);});};aa.initSectionGlobally=function(ba,ca){"use strict";aa.getInstance().initSection(ba,ca);};aa.instance=null;e.exports=aa;},null);
__d("PageFanning",["Animation","AsyncRequest","CSS","DOM","FutureSideNav","Parent","URI","$","collectDataAttributes","copyProperties"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q={setFanStatus:function(s,t,u,v,w,x,y){var z={ft:{}};if(s)z={ft:o(s,['ft']).ft};w=w||function(ca){var da=ca.getPayload();if(!da||!s)return;if(da.reload){q.reloadOnFanStatusChanged(da.preserve_tab);}else r(s,da);};var aa={fbpage_id:t,add:u,reload:v};if(y!=null)p(aa,y);p(aa,z);var ba=new h().setURI('/ajax/pages/fan_status.php').setData(aa).setNectarModuleDataSafe(s).setHandler(w);if(x)ba.setErrorHandler(x);ba.send();return false;},reloadOnFanStatusChanged:function(s){var t=m.getRequestURI();if(s){var u=k.getInstance().selected.textKey;if(!t.getQueryData().sk&&u)t.addQueryData({sk:u});}window.location.href=t;},toggleLikeOnFanStatusChanged:function(s,t){var u=n('liked_pages_like_action_'+s),v=n('liked_pages_undo_action_'+s);i.conditionClass(u,'hidden_elem',t);i.conditionClass(v,'hidden_elem',!t);}};function r(s,t){var u=t.feedback;if(!u)return;if(l.byClass(s,'fbTimelineEscapeSectionItem'))s=l.byClass(s,'fan_status_inactive')||s;var v=j.create('span',{className:'fan_status_inactive'},u);s.parentNode.replaceChild(v,s);var w=function(){if(t.can_repeat_action)v.parentNode.replaceChild(s,v);};new g(v).duration(3000).checkpoint().to('backgroundColor','#FFFFFF').duration(1000).ondone(w).go();}e.exports=q;},null);
__d("PageLikeButton",["Arbiter","AsyncRequest","AsyncResponse","Event","PageFanning","SubscribeButton","FeedBlacklistButton","Tour","URI"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p={LIKED:'liked',UNLIKED:'unliked',LIKED_SUCCESS:'liked_success',SPM_CALLOUT:'spm_callout',init:function(s,t,u,v,w,x,y,z,aa,ba,ca){g.subscribe(p.LIKED,function(da,ea){if(v===ea.profile_id){s.swap();if(!aa)u.suppressNextMouseEnter&&u.suppressNextMouseEnter();}});g.subscribe(p.UNLIKED,function(da,ea){if(v==ea.profile_id){s.unswap();u.hideFlyout&&u.hideFlyout();}});if(ca)g.subscribe(p.SPM_CALLOUT,function(da,ea){if(v===ea.profile_id){ca.show();g._releaseAllEvents(p.SPM_CALLOUT);}});if(z)g.subscribe(p.LIKED_SUCCESS,function(da,ea){var fa=o.getRequestURI().getQueryData().app_data;if(ea.profile_id==v)new h().setURI('/ajax/pages/fetch_app_column.php').setData({profile_id:v,tab_key:z,app_data:fa}).send();});j.listen(t,'click',function(event){var da=s.getCurrentButton();r(v,w,x,y,da,event);}.bind(this));},initCallout:function(s,t){var u=document.getElementById('pageActionLikeCalloutButton');j.listen(u,'click',r.bind(null,s,t,null,null,null));},initUnlike:function(s,t,u){j.listen(s,'click',function(event){q(event.getTarget(),t,false,function(v){g.inform(p.LIKED,{profile_id:t});i.defaultErrorHandler(v);},u);p.informUnlike(t);});},informLike:function(s,t,u){var v={profile_id:s,target:t,origin:u};g.inform(p.LIKED,v);v.connected=true;g.inform(l.SUBSCRIBED,v);g.inform(m.UNBLACKLIST,v);},informLikeSuccess:function(s){var t={profile_id:s};g.inform(p.LIKED_SUCCESS,t);g.inform(p.SPM_CALLOUT,t);},informUnlike:function(s){var t={profile_id:s};setTimeout(g.inform.bind(g,p.UNLIKED,t),0);t.connected=false;setTimeout(g.inform.bind(g,l.UNSUBSCRIBED,t),0);g.inform(m.BLACKLIST,t);}};function q(s,t,u,v,w,x,y){n.getInstance().hideStep('low_page_likes');k.setFanStatus(s,t,u,false,function(){p.informLikeSuccess(t);},v,{fan_origin:w,fan_source:x,cat:y});}function r(s,t,u,v,w,event){q(event.getTarget(),s,true,function(x){g.inform(p.UNLIKED,{profile_id:s});i.defaultErrorHandler(x);},t,u,v);p.informLike(s,w,t);}e.exports=p;a.PageLikeButton=p;},null);
__d("legacy:ui-side-nav-future-js",["FutureSideNav"],function(a,b,c,d){a.FutureSideNav=b('FutureSideNav');},3);