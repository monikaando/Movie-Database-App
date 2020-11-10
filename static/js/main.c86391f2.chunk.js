(this["webpackJsonpmovie-database-app"]=this["webpackJsonpmovie-database-app"]||[]).push([[0],{49:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){},57:function(e,t,s){},58:function(e,t,s){},80:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s(0),c=s.n(i),n=s(18),l=s.n(n),r=(s(49),s(16)),o=s.n(r),d=s(21),h=s(11),b=s(12),j=s(10),u=s(14),m=s(13),p=(s(51),s(52),function(){return Object(a.jsx)("div",{className:"made-by text-dark text-left mr-3",children:Object(a.jsxs)("p",{className:"p-2 m-0",children:["Created by"," ",Object(a.jsx)("a",{href:"https://monikaswidzinska.netlify.app/",target:"_blank",rel:"noopener noreferrer",className:"text-dark",children:"Monika Swidzinska"})]})})}),v=s(82),x=s(83),O=s(40),f=s(84),y=(s(53),function(e){Object(u.a)(s,e);var t=Object(m.a)(s);function s(){return Object(h.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"render",value:function(){var e=this;return Object(a.jsxs)(v.a,{expand:"lg",className:"d-flex justify-content-between search-container pt-1 pb-2 pl-0 pr-0",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(v.a.Brand,{href:"/",className:"font-weight-bold",children:"OMDB Search"}),Object(a.jsx)(p,{})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(v.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsxs)(x.a,{inline:!0,children:[Object(a.jsx)(O.a,{type:"text",placeholder:"Search a movie",value:this.props.searchByTitle,onChange:function(t){return e.props.movieTitleInputHandler(t)},className:"mr-sm-2"}),Object(a.jsx)(f.a,{variant:"primary",onClick:this.props.displayMovies,children:"Search"})]})})]})]})}}]),s}(c.a.Component));function g(){return Object(a.jsx)("div",{className:"homepage alert alert-secondary",children:Object(a.jsx)("h3",{children:"Welcome to the OMDB Search. Search a movie in the field above."})})}s(57),s(58);var N=function(e){Object(u.a)(s,e);var t=Object(m.a)(s);function s(){return Object(h.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"ml-4 mr-4",children:[Object(a.jsx)("h6",{className:"mt-4",children:"Plot"}),Object(a.jsx)("h5",{children:this.props.movieById.Plot}),Object(a.jsx)("h6",{className:"mt-4",children:"Actors"}),Object(a.jsx)("h5",{children:this.props.movieById.Actors}),Object(a.jsx)("h6",{className:"mt-4",children:"Ratings"}),this.props.movieById.Ratings.map((function(e,t){return Object(a.jsx)("div",{children:Object(a.jsxs)("h5",{children:["- ",e.Source,": ",e.Value]})},t)}))]})}}]),s}(c.a.Component),k=s(19),B=s.n(k),w=function(e){Object(u.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(h.a)(this,s),(a=t.call(this,e)).state={movieById:[],movieId:"",detailsButtonClicked:!1},a.displayMovieDetails=a.displayMovieDetails.bind(Object(j.a)(a)),a}return Object(b.a)(s,[{key:"displayMovieDetails",value:function(e){var t=this;B()({method:"GET",url:"https://www.omdbapi.com/?apikey=9831d2b3&i=".concat(e)}).then((function(s){t.setState({movieById:s.data,detailsButtonClicked:!t.state.detailsButtonClicked,movieId:e})})).catch((function(e){console.log("No movies here")}))}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"d-flex flex-column justify-content-between",children:[!0===this.props.searchButtonClicked&&this.props.moviesByName.length>0?Object(a.jsxs)("div",{className:"d-flex flex-column justify-content-between",children:[Object(a.jsxs)("div",{className:"d-flex justify-content-between",children:[this.props.page<=1?Object(a.jsx)("div",{children:Object(a.jsx)(f.a,{className:"disabled",children:"Previous page"})}):Object(a.jsx)("div",{children:Object(a.jsx)(f.a,{onClick:this.props.buttonPreviousPageClicked,children:"Previous page"})}),Object(a.jsxs)("h6",{className:"mt-4 text-primary font-weight-bold",children:["page ",this.props.page,"/",Math.ceil(this.props.totalResults/10)]}),this.props.page>0&&this.props.page===Math.ceil(this.props.totalResults/10)?Object(a.jsx)("div",{children:Object(a.jsx)(f.a,{className:"disabled",children:"Next page"})}):Object(a.jsx)("div",{children:Object(a.jsx)(f.a,{onClick:this.props.buttonNextPageClicked,children:"Next page"})})]}),Object(a.jsx)("div",{className:"d-flex flex-column mt-3 mb-3",children:Object(a.jsxs)("h6",{className:"mt-3 mb-3 text-success",children:["Search results: ",Object(a.jsx)("b",{children:this.props.totalResults})]})})]}):null,Object(a.jsx)("div",{className:"box d-flex justify-content-between flex-wrap mb-5",children:this.props.moviesByName.map((function(t,s){return Object(a.jsx)(c.a.Fragment,{children:!0===e.state.detailsButtonClicked&&t.imdbID===e.state.movieId?Object(a.jsxs)("div",{className:"box__movie box__movie--fullwidth d-flex justify-content-start mt-4 bg-white shadow bg-white rounded",children:[Object(a.jsx)("div",{className:"box__movie__poster",children:"N/A"!==t.Poster?Object(a.jsx)("img",{src:t.Poster,alt:""}):Object(a.jsx)("img",{src:"https://res.cloudinary.com/mokaweb/image/upload/v1604933899/Icons/no-poster-available.jpg",alt:""})}),Object(a.jsxs)("div",{className:"box__movie__details d-flex flex-column justify-content-between text-left",children:[Object(a.jsx)("h5",{className:"ml-4 mr-2 mt-4",children:t.Title}),!0===e.state.detailsButtonClicked&&t.imdbID===e.state.movieId?Object(a.jsx)(N,{movieById:e.state.movieById}):null,Object(a.jsxs)("div",{className:"d-flex justify-content-between border-top pt-4 pb-4",children:[Object(a.jsx)("h5",{className:"box__movie__details__year ml-4 mt-3 font-weight-bold",children:t.Year}),Object(a.jsx)(f.a,{variant:"primary",onClick:function(){return e.displayMovieDetails(t.imdbID)},className:"pl-4 pr-4 mr-4 font-weight-bold",children:"DETAILS"})]})]})]},s):Object(a.jsxs)("div",{className:"box__movie d-flex justify-content-start mt-4 bg-white shadow bg-white rounded",children:[Object(a.jsx)("div",{className:"box__movie__poster",children:"N/A"!==t.Poster?Object(a.jsx)("img",{src:t.Poster,alt:""}):Object(a.jsx)("img",{src:"https://res.cloudinary.com/mokaweb/image/upload/v1604933899/Icons/no-poster-available.jpg",alt:""})}),Object(a.jsxs)("div",{className:"box__movie__details d-flex flex-column justify-content-between text-left",children:[Object(a.jsx)("h5",{className:"ml-4 mr-2 mt-4",children:t.Title}),!0===e.state.detailsButtonClicked&&t.imdbID===e.state.movieId?Object(a.jsx)(N,{movieById:e.state.movieById}):null,Object(a.jsxs)("div",{className:"d-flex justify-content-between border-top pt-4 pb-4",children:[Object(a.jsx)("h5",{className:"box__movie__details__year ml-4 mt-3 font-weight-bold",children:t.Year}),Object(a.jsx)(f.a,{variant:"primary",onClick:function(){return e.displayMovieDetails(t.imdbID)},className:"pl-4 pr-4 mr-4 font-weight-bold",children:"DETAILS"})]})]})]},s)},s)}))})]})}}]),s}(c.a.Component),C=function(e){Object(u.a)(s,e);var t=Object(m.a)(s);function s(e){var a;return Object(h.a)(this,s),(a=t.call(this,e)).displayMovies=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.getMoviesByTitle(),e.next=3,a.setState({displayMovies:!a.state.displayMovies,searchButtonClicked:!0});case 3:case"end":return e.stop()}}),e)}))),a.state={displayMovies:!1,searchByTitle:"",moviesByName:[],totalResults:0,searchButtonClicked:!1,page:1},a.movieTitleInputHandler=a.movieTitleInputHandler.bind(Object(j.a)(a)),a.getMoviesByTitle=a.getMoviesByTitle.bind(Object(j.a)(a)),a.buttonPreviousPageClicked=a.buttonPreviousPageClicked.bind(Object(j.a)(a)),a.buttonNextPageClicked=a.buttonNextPageClicked.bind(Object(j.a)(a)),a}return Object(b.a)(s,[{key:"movieTitleInputHandler",value:function(e){var t=e.target.value;this.setState({searchByTitle:t.toLowerCase()})}},{key:"getMoviesByTitle",value:function(){var e=this;B()({method:"GET",url:"https://www.omdbapi.com/?apikey=9831d2b3&s=".concat(this.state.searchByTitle,"&page=").concat(this.state.page)}).then((function(t){e.setState({moviesByName:t.data.Search,totalResults:t.data.totalResults})})).catch((function(e){console.log("No movies here")}))}},{key:"buttonPreviousPageClicked",value:function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({page:this.state.page-1});case 2:this.getMoviesByTitle();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"buttonNextPageClicked",value:function(){var e=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({page:this.state.page+1});case 2:this.getMoviesByTitle();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"searchbar pt-2 pb-2 shadow-sm border-top border-bottom searchbar",children:Object(a.jsx)(y,{movieTitleInputHandler:this.movieTitleInputHandler,displayMovies:this.displayMovies,searchByTitle:this.state.searchByTitle})}),Object(a.jsx)("div",{className:"App__container",children:void 0===this.state.moviesByName?Object(a.jsxs)("div",{className:"alert alert-danger mt-4",role:"alert",children:[" ","Movie not found!"]}):Object(a.jsxs)("div",{className:"content mt-4",children:[!1===this.state.searchButtonClicked?Object(a.jsx)(g,{}):null,Object(a.jsx)(w,{buttonPreviousPageClicked:this.buttonPreviousPageClicked,buttonNextPageClicked:this.buttonNextPageClicked,moviesByName:this.state.moviesByName,totalResults:this.state.totalResults,searchButtonClicked:this.state.searchButtonClicked,page:this.state.page,getMoviesByTitle:this.getMoviesByTitle})]})})]})}}]),s}(c.a.Component),_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,85)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),a(e),i(e),c(e),n(e)}))},I=(s(76),s(42));l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(I.a,{children:Object(a.jsx)(C,{})})}),document.getElementById("root")),_()}},[[80,1,2]]]);
//# sourceMappingURL=main.c86391f2.chunk.js.map