jQuery(document).ready(function(){jQuery(".various").fancybox({maxWidth:800,maxHeight:500,fitToView:!1,width:"70%",height:"70%",autoSize:!0,closeClick:!1,openEffect:"none",closeEffect:"none"}),jQuery(".video").fancybox({aspectRatio:!0,openEffect:"none",scrolling:"no",closeEffect:"none",width:800,height:450,type:"iframe"}),jQuery(".lightbox").fancybox({margin:100,width:"50%",height:"50%",closeClick:!1})}),jQuery(document).ready(function(){jQuery("#landing-page-gallery").click(function(){jQuery.fancybox.open([{href:"http://3qdigital.com/wp-content/uploads/2013/12/23andme-design-example.jpg",title:"23andMe"},{href:"http://3qdigital.com/wp-content/uploads/2013/12/businesssuites-design-example.jpg",title:"BusinessSuites"},{href:"http://3qdigital.com/wp-content/uploads/2013/12/yogaworks-design-example.jpg",title:"YogaWorks"},{href:"http://3qdigital.com/wp-content/uploads/2013/12/hightail-design-example.jpg",title:"Hightail"}],{margin:100,width:"50%",height:"50%",closeClick:!1})})}),jQuery(document).ready(function(){jQuery("#banner-gallery").click(function(){jQuery.fancybox.open([{href:"http://3qdigital.com/wp-content/uploads/2013/12/bonfaire-design-example.jpg",title:"Bonfaire"},{href:"http://3qdigital.com/wp-content/uploads/2013/12/wepay-design-example.jpg",title:"WePay"},{href:"http://3qdigital.com/wp-content/uploads/2013/12/thegrommet-design-example.jpg",title:"The Grommet"},{href:"http://3qdigital.com/wp-content/uploads/2013/12/pinterest-design-example.jpg",title:"Pinterest"}],{margin:100,width:"50%",height:"50%",closeClick:!1})})}),jQuery(document).ready(function(){jQuery(".staff-toggle").click(function(){jQuery(this).toggleClass("icon-remove-sign"),jQuery(this).parent().find(".staff-content").toggle("500")})});