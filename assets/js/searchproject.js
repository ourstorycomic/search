let search=new Vue({el:"#search",data:{username:""},methods:{coder:function(){if(this.username){document.location.href=`https://rwstudio.nim.town/search/${this.username}`}}}});