(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{2101:function(e,t,n){"use strict";n.r(t);n(31);var d=n(12),r=n(4),l=n.n(r),o=n(54),m=n(728),c=d.componentFactory.create({props:{widget:l.a.ofType().required,widgetIndex:l.a.ofType().default(0),settings:l.a.ofType().required,isEnabledAnimation:l.a.ofType().default(!1),animateClassName:l.a.ofType().default("animate__fadeInUp")},render:function(e){var t,n=this;return e(o.mb,{class:"slider slider-t5 slider-t5-v1",attrs:{settings:this.settings}},[e(o.lb,{attrs:{settings:this.settings}},[e("div",{class:"kmb-widget-content kmb-widget-slider-content"},[e(o.W,{attrs:{indicators:!0,items:this.settings.images,settings:{itemsToShow:1},uiSettings:this.settings.sliderSettings},class:"kmb-slider-inside-navigation kmb-widget-slider-inside-space-row kmb-slider-inside-navigation-opacity-circle"},[null===(t=this.settings.images)||void 0===t?void 0:t.map((function(t,d){return e(o.X,{attrs:{index:d},key:t.key||d},[e(o.c,{attrs:{image:t,widget:n.widget,settings:n.settings},class:"kmb-full-bg-item kmb-widget-item-content kmb-widget-hidden-bg-image kmb-widget-bg-image-with-overlay w-full"},[e(o.e,{attrs:{settings:n.settings,contentClassNames:"flex justify-around"}},[e("div",{class:"items-center py-24 lg-w-4-5 md-w-1-2 w-2-3"},[e("div",{class:"kmb-xl-widget-container"},[e(m.a,{attrs:{widgetIndex:n.widgetIndex,animateClassName:n.animateClassName,isEnabledAnimation:n.isEnabledAnimation,cardType:"clear",item:n.settings},class:"kmb-widget-info-left"})])])])])])}))])])])])}});t.default=c},728:function(e,t,n){"use strict";var d=n(12),r=n(4),l=n.n(r),o=n(11),m=n.n(o),c=n(1),w=n(54),f=d.componentFactory.create({name:"SliderItemContent",props:{item:l.a.ofAny().required,widgetIndex:l.a.ofType().required,cardType:l.a.ofType().default("right"),isEnabledButtons:l.a.ofType().default(!0),isEnabledDivider:l.a.ofType().default(!1),isEnabledAnimation:l.a.ofType().default(!1),animateClassName:l.a.ofType().default("animate__fadeInUp"),isEnabledSecondaryButton:l.a.ofType().default(!0)},methods:{renderContent:function(e,t){return e(w.o,{attrs:{settings:this.item,animateClassName:this.animateClassName,isEnabledAnimation:this.isEnabledAnimation},class:m()(t)},[e(w.hb,{attrs:{widgetIndex:this.widgetIndex,value:this.item.title,isEnabledDivider:this.isEnabledDivider},class:"kmb-slider-title"}),e(w.r,{attrs:{value:this.item.description},class:"kmb-slider-description"}),e(w.i,{class:"kmb-widget-btn-group-center flex justify-center"},[e(w.h,{attrs:{value:this.item.primaryButton,elementType:c.Qd.Primary},class:"kmb-widget-primary-btn"}),this.isEnabledSecondaryButton&&e(w.h,{attrs:{value:this.item.secondaryButton,elementType:c.Qd.Secondary,classNames:"kmb-widget-secondary-btn"}})])])}},render:function(e){return"right"===this.cardType?e("div",{class:"kmb-widget-slider-right-title-main-block z-10"},[e("div",{class:"container"},[this.renderContent(e,"kmb-slide-content-box kmb-widget-mini-banner-bg lg-w-1-2 md-w-3-5 w-3-4 px-8 lg-py-24 py-16 shadow-md")])]):"left"===this.cardType?e("div",{class:"kmb-widget-slider-left-title-main-block z-10"},[e("div",{class:"container"},[this.renderContent(e,"kmb-slide-content-box kmb-widget-mini-banner-bg lg-w-1-2 md-w-3-5 w-4-5 px-8 lg-py-24 py-16 shadow-md")])]):"center"===this.cardType?e("div",{class:"kmb-widget-slider-center-title-main-block relative z-10"},[e("div",{class:"container mx-auto"},[this.renderContent(e,"kmb-slide-content-box kmb-widget-mini-banner-bg mx-auto md-p-16 p-12")])]):"clear"===this.cardType?e("div",{class:"kmb-slide-content w-full text-center z-10"},[e("div",{class:"kmb-widget-default-info"},[this.renderContent(e,"kmb-widget-titles-info")])]):void 0}});t.a=f}}]);