/*!CK:2101732558!*//*1401158539,178198863*/

if (self.CavalryLogger) { CavalryLogger.start_js(["cAkXN"]); }

__d("AsyncDOM",["CSS","DOM"],function(a,b,c,d,e,f,g,h){var i={invoke:function(j,k){for(var l=0;l<j.length;++l){var m=j[l],n=m[0],o=m[1],p=m[2],q=m[3],r=(p&&k)||null;if(o)r=h.scry(r||document.documentElement,o)[0];switch(n){case 'eval':(new Function(q)).apply(r);break;case 'hide':g.hide(r);break;case 'show':g.show(r);break;case 'setContent':h.setContent(r,q);break;case 'appendContent':h.appendContent(r,q);break;case 'prependContent':h.prependContent(r,q);break;case 'insertAfter':h.insertAfter(r,q);break;case 'insertBefore':h.insertBefore(r,q);break;case 'remove':h.remove(r);break;case 'replace':h.replace(r,q);break;default:}}}};e.exports=i;},null);
__d("Live",["Arbiter","AsyncDOM","AsyncSignal","ChannelConstants","DataStore","DOM","ServerJS","createArrayFrom","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){function p(r,s){s=JSON.parse(JSON.stringify(s));new m().setRelativeTo(r).handle(s);}var q={logAll:false,startup:function(r){q.logAll=r;q.startup=o;g.subscribe(j.getArbiterType('live'),q.handleMessage.bind(q));},lookupLiveNode:function(r,s){var t=l.scry(document.body,'.live_'+r+'_'+s);t.forEach(function(u){if(k.get(u,'seqnum')===undefined){var v=JSON.parse(u.getAttribute('data-live'));k.set(u,'seqnum',v.seq);}});return t;},handleMessage:function(r,s){var t=s.obj,u=t.fbid,v=t.assoc,w=this.lookupLiveNode(u,v);if(!w)return false;w.forEach(function(x){h.invoke(t.updates,x);if(t.js)p(x,t.js);});},log:function(){if(q.logAll){var r=n(arguments).join(':');new i('/common/scribe_endpoint.php',{c:'live_sequence',m:r}).send();}}};e.exports=q;},null);
__d("UFITracking",["Bootloader"],function(a,b,c,d,e,f,g){function h(j){g.loadModules(["DOM","collectDataAttributes"],function(k,l){j.forEach(function(m){var n=k.scry(document.body,m);if(!n||n.link_data)return;var o=l(n,['ft']).ft;if(Object.keys(o).length){var p=k.create('input',{type:'hidden',name:'link_data',value:JSON.stringify(o)});n.appendChild(p);}});});}var i={addAllLinkData:function(){h(['form.commentable_item']);},addAllLinkDataForQuestion:function(){h(['form.fbEigenpollForm','form.fbQuestionPollForm']);}};e.exports=i;},null);