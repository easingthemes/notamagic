webpackJsonp([4],{264:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Loader=void 0;var l=a(14),r=n(l),u=a(15),o=n(u),s=a(16),i=n(s),d=a(18),m=n(d),c=a(17),f=n(c),p=a(3),h=n(p),v=a(265),E=(n(v),a(332)),g=(n(E),t.Loader=function(e){function t(e){(0,o["default"])(this,t);var a=(0,m["default"])(this,(0,r["default"])(t).call(this,e));return a.state={isLoading:!0},a}return(0,f["default"])(t,e),(0,i["default"])(t,[{key:"componentDidMount",value:function(){}},{key:"renderLoader",value:function(){var e={minHeight:this.props.height+"px"};return h["default"].createElement("div",{ref:"loaderInner",className:"Loader",style:e},h["default"].createElement("i",{className:"fa fa-spinner fa-spin","aria-hidden":"true"}))}},{key:"render",value:function(){return this.renderLoader()}}]),t}(h["default"].Component));g.propTypes={height:h["default"].PropTypes.number},g.defaultProps={height:50},t["default"]=g},265:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=t.data={name:"Loader"};t["default"]=a},266:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(264),r=n(l);t["default"]=r["default"]},332:910,473:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={REQUEST_POST:"REQUEST_POST",RECEIVE_POST:"RECEIVE_POST",FAIL_POST:"FAIL_POST"};t["default"]=a},612:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.BlogAuthor=void 0;var l=a(14),r=n(l),u=a(15),o=n(u),s=a(16),i=n(s),d=a(18),m=n(d),c=a(17),f=n(c),p=a(3),h=n(p),v=t.BlogAuthor=function(e){function t(){return(0,o["default"])(this,t),(0,m["default"])(this,(0,r["default"])(t).apply(this,arguments))}return(0,f["default"])(t,e),(0,i["default"])(t,[{key:"render",value:function(){return h["default"].createElement("div",{className:"blog-post-author mb50 pt30 bt-solid-1"},h["default"].createElement("img",{src:this.props.author.avatar,className:"img-circle",alt:"image"}),h["default"].createElement("span",{className:"blog-post-author-name"},this.props.author.name),h["default"].createElement("a",{href:this.props.author.url},h["default"].createElement("i",{className:"fa fa-twitter"})),h["default"].createElement("p",null,this.props.author.description))}}]),t}(h["default"].Component);v.propTypes={author:h["default"].PropTypes.object},v.defaultProps={author:{avatar:"",name:"",url:"",description:""}},t["default"]=v},613:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(612),r=n(l);t["default"]=r["default"]},615:function(e,t,a){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.BlogPost=void 0;var l=a(14),r=n(l),u=a(15),o=n(u),s=a(16),i=n(s),d=a(18),m=n(d),c=a(17),f=n(c),p=a(3),h=n(p),v=a(61),E=a(266),g=n(E),_=a(643),b=n(_),y=a(613),N=n(y),C=a(624),P=n(C),M=t.BlogPost=function(t){function a(e){(0,o["default"])(this,a);var t=(0,m["default"])(this,(0,r["default"])(a).call(this,e));return t.state={openId:!1},t}return(0,f["default"])(a,t),(0,i["default"])(a,[{key:"renderReplies",value:function(e){var t=this;return 0===e.length?h["default"].createElement("span",null):e.map(function(e,a){return h["default"].createElement("div",{key:e.id+"-reply-"+a,className:"blog-post-comment-reply"},t.renderComment(e))})}},{key:"showCommentForm",value:function(e,t){t.preventDefault(),this.setState({openId:e})}},{key:"renderComment",value:function(e){var t="",a=this,n=this.props.post||{},l=e.content||{};try{t=e.author_avatar_urls[96]}catch(r){}return h["default"].createElement("div",null,h["default"].createElement("img",{src:t,className:"img-circle",alt:e.author_name}),h["default"].createElement("span",{className:"blog-post-comment-name"},e.author_name)," ",e.date,h["default"].createElement("a",{href:"#",onClick:this.showCommentForm.bind(this,e.id),className:"pull-right text-gray"},h["default"].createElement("i",{className:"fa fa-comment"})," Reply"),h["default"].createElement("div",{dangerouslySetInnerHTML:{__html:l.rendered}}),this.commentForm(n.id,e.id,a.state.openId))}},{key:"renderComments",value:function(e){var t=this;return e instanceof Array?e.map(function(e,a){return h["default"].createElement("div",{key:"comment-"+a,className:"blog-post-comment"},t.renderComment(e),t.renderReplies(e.replies))}):h["default"].createElement("span",null)}},{key:"renderCommentsRow",value:function(e,t){return 0===e.length?h["default"].createElement("span",null):h["default"].createElement("div",{className:"blog-post-comment-container"},h["default"].createElement("h5",null,h["default"].createElement("i",{className:"fa fa-comments-o mb25"})," ",t," Comments"),this.renderComments(e))}},{key:"handleSubmit",value:function(t,a,n,l){n.preventDefault();var r=e.extend({},l,{postId:t,parent:a});this.props.onSendComment(r)}},{key:"renderStatus",value:function(){return this.props.isSent?h["default"].createElement("div",{className:"alert alert-success fade in"},h["default"].createElement("a",{href:"#",className:"close","data-dismiss":"alert","aria-label":"close",title:"close"},"×"),h["default"].createElement("strong",null,"Thank you for your comment.")," Your comment is awaiting moderation."):h["default"].createElement("span",null)}},{key:"commentForm",value:function(e,t,a){return t!==a?h["default"].createElement("span",null):h["default"].createElement("div",{className:"blog-post-leave-comment"},this.renderStatus(),h["default"].createElement("h5",null,h["default"].createElement("i",{className:"fa fa-comment mt25 mb25"})," Leave Comment"),h["default"].createElement(P["default"],{handleSubmit:this.handleSubmit.bind(this,e,t)}))}},{key:"renderAuthor",value:function(e){return h["default"].createElement(N["default"],{author:e})}},{key:"render",value:function(){var e=this.props.post||{},t=e.comments||{},a=t.comments||[],n=t.total||"0",l="Comment";return a&&0!==a.length||(l+="s"),a&&a.length>1&&(l+="s"),this.props.isLoading?h["default"].createElement(g["default"],null):h["default"].createElement("div",null,h["default"].createElement(b["default"],{postTitle:e.title}),h["default"].createElement("div",{className:"container mt90"},h["default"].createElement("div",{className:"row"},h["default"].createElement("div",{className:"col-md-8 col-md-offset-2"},h["default"].createElement("div",{className:"blog-three-mini"},h["default"].createElement("h2",null,e.title),h["default"].createElement("div",{className:"blog-three-attrib"},h["default"].createElement("div",null,h["default"].createElement("i",{className:"fa fa-calendar"}),e.date)," |",h["default"].createElement("div",null,h["default"].createElement("i",{className:"fa fa-pencil"}),h["default"].createElement("a",{href:"#"},e.author.name))," |",h["default"].createElement("div",null,h["default"].createElement("i",{className:"fa fa-comment-o"}),h["default"].createElement(v.Link,{to:"/blog/"+e.id},n," ",l))," |",h["default"].createElement("div",null,"Share:  ",h["default"].createElement("a",{href:"#"},h["default"].createElement("i",{className:"fa fa-facebook-official"})),h["default"].createElement("a",{href:"#"},h["default"].createElement("i",{className:"fa fa-twitter"})),h["default"].createElement("a",{href:"#"},h["default"].createElement("i",{className:"fa fa-linkedin"})),h["default"].createElement("a",{href:"#"},h["default"].createElement("i",{className:"fa fa-google-plus"})),h["default"].createElement("a",{href:"#"},h["default"].createElement("i",{className:"fa fa-pinterest"})))),h["default"].createElement("div",{className:"blog-one-header mb30"},h["default"].createElement("img",{src:e.image,alt:e.title,className:"img-responsive"})),h["default"].createElement("div",{className:"blog-one-body"},h["default"].createElement("div",null,e.content)),h["default"].createElement("div",{className:"blog-post-read-tag mt50"},h["default"].createElement("i",{className:"fa fa-tags"})," Tags:",h["default"].createElement("a",{href:"#"}," Javascript"),",",h["default"].createElement("a",{href:"#"}," HTML"),",",h["default"].createElement("a",{href:"#"}," Wordpress"),",",h["default"].createElement("a",{href:"#"}," Tutorial "))),this.renderAuthor(e.author),this.renderCommentsRow(a,n),this.commentForm(e.id,0,0)))))}}]),a}(h["default"].Component);M.propTypes={},M.defaultProps={post:{author:{}},isLoading:!0},t["default"]=M}).call(t,a(11))},623:function(e,t,a){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.CommentsForm=void 0;var l=a(14),r=n(l),u=a(15),o=n(u),s=a(16),i=n(s),d=a(18),m=n(d),c=a(17),f=n(c),p=a(3),h=n(p),v=t.CommentsForm=function(t){function a(e){(0,o["default"])(this,a);var t=(0,m["default"])(this,(0,r["default"])(a).call(this,e));return t.state={firstName:"",email:"",url:"",message:""},t}return(0,f["default"])(a,t),(0,i["default"])(a,[{key:"_onChange",value:function(t){var a={};a[t.target.name]=e.trim(t.target.value),this.setState(a)}},{key:"_handleSubmit",value:function(e){this.props.handleSubmit(e,this.state)}},{key:"render",value:function(){return h["default"].createElement("form",{onSubmit:this._handleSubmit.bind(this)},h["default"].createElement("input",{className:"blog-leave-comment-input",onChange:this._onChange.bind(this),name:"firstName",type:"text",placeholder:"Name"}),h["default"].createElement("input",{className:"blog-leave-comment-input",onChange:this._onChange.bind(this),name:"email",type:"email",placeholder:"Email"}),h["default"].createElement("input",{className:"blog-leave-comment-input",onChange:this._onChange.bind(this),name:"url",type:"text",placeholder:"Website"}),h["default"].createElement("textarea",{className:"blog-leave-comment-textarea",onChange:this._onChange.bind(this),name:"message"}),h["default"].createElement("button",{type:"submit",className:"button button-pasific button-sm center-block mb25"},"Submit"))}}]),a}(h["default"].Component);v.propTypes={handleSubmit:h["default"].PropTypes.func},v.defaultProps={},t["default"]=v}).call(t,a(11))},624:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(623),r=n(l);t["default"]=r["default"]},642:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TopRow=void 0;var l=a(14),r=n(l),u=a(15),o=n(u),s=a(16),i=n(s),d=a(18),m=n(d),c=a(17),f=n(c),p=a(3),h=n(p),v=a(61),E=t.TopRow=function(e){function t(){return(0,o["default"])(this,t),(0,m["default"])(this,(0,r["default"])(t).apply(this,arguments))}return(0,f["default"])(t,e),(0,i["default"])(t,[{key:"render",value:function(){return h["default"].createElement("header",{className:"bg-grad-stellar mt70"},h["default"].createElement("div",{className:"container"},h["default"].createElement("div",{className:"row mt20 mb30"},h["default"].createElement("div",{className:"col-md-6 text-left"},h["default"].createElement("h3",{className:"color-light text-uppercase","data-animation":"fadeInUp","data-animation-delay":"100"},"Blog Post Read",h["default"].createElement("small",{className:"color-light alpha7"},"some notes."))),h["default"].createElement("div",{className:"col-md-6 text-right pt35"},h["default"].createElement("ul",{className:"breadcrumb"},h["default"].createElement("li",null,h["default"].createElement(v.Link,{to:"/"},"Home")),h["default"].createElement("li",null,h["default"].createElement(v.Link,{to:"/blog"},"Blog")),h["default"].createElement("li",null,this.props.postTitle))))))}}]),t}(h["default"].Component);E.propTypes={postTitle:h["default"].PropTypes.string},E.defaultProps={postTitle:""},t["default"]=E},643:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(642),r=n(l);t["default"]=r["default"]},659:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.failComment=t.saveComment=t.sendComment=t.failPost=t.receivePost=t.requestPost=void 0;var l=a(473),r=n(l);t.requestPost=function(){return{type:r["default"].REQUEST_POST}},t.receivePost=function(e){return{type:r["default"].RECEIVE_POST,post:e}},t.failPost=function(e){return{type:r["default"].FAIL_POST,xhr:e}},t.sendComment=function(){return{type:"SEND_COMMENT"}},t.saveComment=function(e){return{type:"SAVE_COMMENT",comment:e}},t.failComment=function(e){return{type:"FAIL_COMMENT",xhr:e}}},660:function(e,t,a){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(t){return function(a){a((0,u.requestPost)()),e.ajax({url:{url:"http://www.blog.frontenddot.com/",api:"wp-json/wp/v2/",apiUrl:"http://www.blog.frontenddot.com/wp-json/wp/v2/"}.apiUrl+"posts/"+t+"?_embed=1",crossDomain:!0}).done(function(e){a((0,u.receivePost)(e))}).fail(function(e){a((0,u.failPost)(e))})}}function r(t){return function(a){a((0,u.sendComment)()),e.ajax({url:{url:"http://www.blog.frontenddot.com/",api:"wp-json/wp/v2/",apiUrl:"http://www.blog.frontenddot.com/wp-json/wp/v2/"}.apiUrl+"comments",type:"POST",crossDomain:!0,data:{author:0,author_email:t.email,author_name:t.firstName,author_url:t.url,content:t.message,author_ip:s["default"],karma:0,parent:t.parent,post:t.postId,type:"comment"}}).done(function(e){a((0,u.saveComment)(e))}).fail(function(e){a((0,u.failComment)(e))})}}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchBlogItem=l,t.postComment=r;var u=a(659),o=a(680),s=n(o)}).call(t,a(11))},661:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.BlogItemPage=void 0;var l=a(3),r=n(l),u=a(615),o=n(u),s=t.BlogItemPage=r["default"].createClass({displayName:"BlogItemPage",componentWillMount:function(){var e=this.props.routeParams.postId||"1";this.props.fetchBlogItem(e)},render:function(){var e=this.props.post||{},t=this.props.comment||{};return r["default"].createElement("div",{id:"blog"},r["default"].createElement(o["default"],{post:e,comment:t,isSent:this.props.isSent,isSending:this.props.isSending,isLoading:this.props.isLoading,onSendComment:this.props.postComment}))}});t["default"]=s},662:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(149),r=a(660),u=a(661),o=n(u),s={fetchBlogItem:r.fetchBlogItem,postComment:r.postComment},i=function(e){var t=[],a={},n=[];return e&&e instanceof Array&&e.length>0&&(t=e[0]),t instanceof Array||(t=[]),t.map(function(e){var t=e.id,l=e.parent;0===l?(a[t]=e,a[t].replies=[],n.push(a[t])):a[l].replies.push(e)}),{total:t.length,comments:n}},d=function(e){var t=e.content||{},a=t.rendered||"",n=t.rendered,l="",r=a.split("<!--more-->");r instanceof Array&&r.length>0&&(l=r[0],n=r[1]);var u=e.acf||{},o=u.subtitle||"",s=e._embedded||{},d=e.title||{},m=s.author||[],c=m[0]||{},f=c.avatar_urls||{},p=f[96]||"",h="";try{h=e._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}catch(v){}var E=i(s.replies);return{subtitle:t.rendered,leadTitle:o,title:d.rendered,leadText:l,text:n,image:e.featured_image_url,content:a,date:e.date,slug:e.slug,tags:e.tags,id:e.id,comments:E,author:{avatar:p,name:c.name,url:c.url,description:c.description},imageMedium:h}},m=function(e){return{post:d(e.post.getPost.post),isLoading:e.post.getPost.fetching,isSending:e.post.postComment.sending,isSent:e.post.postComment.sent,comment:e.post.postComment.comment,all:e}};t["default"]=(0,l.connect)(m,s)(o["default"])},664:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(){var e=arguments.length<=0||void 0===arguments[0]?m:arguments[0],t=arguments[1];switch(t.type){case i["default"].REQUEST_POST:return(0,o["default"])({},e,{fetching:!0});case i["default"].RECEIVE_POST:return(0,o["default"])({},e,{fetching:!1,post:t.post});case i["default"].FAIL_POST:return(0,o["default"])({},e,{fetching:!1,error:t.xhr});default:return e}}function r(){var e=arguments.length<=0||void 0===arguments[0]?m:arguments[0],t=arguments[1];switch(t.type){case"SEND_COMMENT":return(0,o["default"])({},e,{sending:!0});case"SAVE_COMMENT":return(0,o["default"])({},e,{sending:!1,sent:!0,comment:t.comment});case"FAIL_COMMENT":return(0,o["default"])({},e,{sending:!1,sent:!1,error:t.xhr});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(213),o=n(u),s=a(473),i=n(s),d=a(151),m={fetching:!1,sending:!1,sent:!1,post:{},comment:{}},c={getPost:l,postComment:r},f=(0,d.combineReducers)(c);t["default"]=f},680:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=localStorage.getItem("visitorIp")||"94.189.146.29";t["default"]=a}});