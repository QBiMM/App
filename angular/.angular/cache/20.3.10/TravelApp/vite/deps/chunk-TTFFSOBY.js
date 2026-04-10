import {
  animate,
  animation,
  state,
  style,
  transition,
  trigger,
  useAnimation
} from "./chunk-G7KX2FVW.js";
import {
  LocalizationPipe,
  LocalizationService,
  RoutesService,
  toSignal
} from "./chunk-DOR275RM.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-5IKKBTZJ.js";
import {
  FormsModule
} from "./chunk-XC2BQRUA.js";
import {
  DomSanitizer
} from "./chunk-TH3T7PKV.js";
import {
  AsyncPipe,
  CommonModule,
  Location,
  NgClass,
  NgComponentOutlet,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-6NN5GPUG.js";
import {
  BehaviorSubject,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DOCUMENT,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  Pipe,
  SecurityContext,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation,
  combineLatest,
  computed,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  filter,
  from,
  fromEvent,
  inject,
  input,
  makeEnvironmentProviders,
  map,
  of,
  provideAppInitializer,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
  tap,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-O2RWE6FT.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-7K3IQTKT.js";

// node_modules/@volo/ngx-lepton-x.core/fesm2022/volo-ngx-lepton-x.core.mjs
function AvatarComponent_Conditional_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-icon", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("iconClass", ctx_r0.avatar.source);
  }
}
function AvatarComponent_Conditional_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("src", ctx_r0.avatar.source, ɵɵsanitizeUrl);
  }
}
function AvatarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵconditionalCreate(1, AvatarComponent_Conditional_0_Case_1_Template, 1, 1, "lpx-icon", 1)(2, AvatarComponent_Conditional_0_Case_2_Template, 1, 1, "img", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional((tmp_1_0 = ctx_r0.avatar.type) === "icon" ? 1 : tmp_1_0 === "image" ? 2 : -1);
  }
}
function BrandLogoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 0);
    ɵɵelement(1, "div", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const logo_r1 = "url(" + ɵɵnextContext().logoUrl + ")";
    ɵɵadvance();
    ɵɵstyleProp("background-image", logo_r1);
  }
}
function BrandLogoComponent_Conditional_1_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 4);
    ɵɵelementStart(1, "div", 5);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.appName, " ");
  }
}
function BrandLogoComponent_Conditional_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.appName, " ");
  }
}
function BrandLogoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 1);
    ɵɵconditionalCreate(1, BrandLogoComponent_Conditional_1_Case_1_Template, 3, 1)(2, BrandLogoComponent_Conditional_1_Case_2_Template, 2, 1, "div", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional((tmp_1_0 = ctx_r1.layout()) === ctx_r1.layoutOptions.sideMenu ? 1 : tmp_1_0 === ctx_r1.layoutOptions.topMenu ? 2 : -1);
  }
}
var _c0 = (a0) => ({
  $implicit: a0
});
function BreadcrumbComponent_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-icon", 5);
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("iconClass", item_r2.icon);
  }
}
function BreadcrumbComponent_For_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function BreadcrumbComponent_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 7);
    ɵɵelement(1, "lpx-icon", 8);
    ɵɵelementEnd();
  }
}
function BreadcrumbComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 4);
    ɵɵlistener("click", function BreadcrumbComponent_For_3_Template_li_click_0_listener() {
      const item_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onClick(item_r2));
    })("lpxClickOutside", function BreadcrumbComponent_For_3_Template_li_lpxClickOutside_0_listener() {
      const item_r2 = ɵɵrestoreView(_r1).$implicit;
      return ɵɵresetView(item_r2.expanded = false);
    });
    ɵɵconditionalCreate(1, BreadcrumbComponent_For_3_Conditional_1_Template, 1, 1, "lpx-icon", 5);
    ɵɵtemplate(2, BreadcrumbComponent_For_3_ng_container_2_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
    ɵɵconditionalCreate(3, BreadcrumbComponent_For_3_Conditional_3_Template, 2, 0, "li", 7);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ɵ$index_5_r4 = ctx.$index;
    const ɵ$count_5_r5 = ctx.$count;
    ɵɵnextContext();
    const linkTemplate_r6 = ɵɵreference(6);
    const textTemplate_r7 = ɵɵreference(8);
    ɵɵclassProp("expanded", item_r2.expanded);
    ɵɵadvance();
    ɵɵconditional(item_r2.icon ? 1 : -1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (item_r2.children == null ? null : item_r2.children.length) ? textTemplate_r7 : linkTemplate_r6)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c0, item_r2));
    ɵɵadvance();
    ɵɵconditional(!(ɵ$index_5_r4 === ɵ$count_5_r5 - 1) ? 3 : -1);
  }
}
function BreadcrumbComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 9);
    ɵɵtext(1);
    ɵɵpipe(2, "toObservable");
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    ɵɵproperty("routerLink", item_r8.link);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, ɵɵpipeBind1(2, 2, item_r8.text)), " ");
  }
}
function BreadcrumbComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtext(1);
    ɵɵpipe(2, "toObservable");
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, ɵɵpipeBind1(2, 1, item_r9.text)), " ");
  }
}
function SubNavbarComponent_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SubNavbarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SubNavbarComponent_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngComponentOutlet", ctx_r0.item.component)("ngComponentOutletInjector", ctx_r0.injector);
  }
}
function SubNavbarComponent_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SubNavbarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SubNavbarComponent_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const defaultTemplate_r2 = ɵɵreference(3);
    ɵɵproperty("ngTemplateOutlet", defaultTemplate_r2);
  }
}
function SubNavbarComponent_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-icon", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("iconClass", ctx_r0.item.icon);
  }
}
function SubNavbarComponent_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SubNavbarComponent_ng_template_2_ng_template_3_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "abpLocalization");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, ctx_r0.item.text), " ");
  }
}
function SubNavbarComponent_ng_template_2_ng_template_3_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "lpxTranslate");
    ɵɵpipe(2, "async");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, ɵɵpipeBind1(1, 1, ctx_r0.item.text)), " ");
  }
}
function SubNavbarComponent_ng_template_2_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵconditionalCreate(1, SubNavbarComponent_ng_template_2_ng_template_3_Conditional_0_Conditional_1_Template, 2, 3)(2, SubNavbarComponent_ng_template_2_ng_template_3_Conditional_0_Conditional_2_Template, 3, 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const isToolbarItem_r4 = ɵɵnextContext(3).item.text.split("::").length > 1;
    ɵɵadvance();
    ɵɵconditional(isToolbarItem_r4 ? 1 : 2);
  }
}
function SubNavbarComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, SubNavbarComponent_ng_template_2_ng_template_3_Conditional_0_Template, 3, 1, "span", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r0.item.text ? 0 : -1);
  }
}
function SubNavbarComponent_ng_template_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-icon", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("iconClass", ctx_r0.item.expanded ? "chevronUp" : "chevronDown");
  }
}
function SubNavbarComponent_ng_template_2_Conditional_6_For_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 11)(1, "lpx-sub-navbar", 13);
    ɵɵlistener("routeClick", function SubNavbarComponent_ng_template_2_Conditional_6_For_2_li_0_Template_lpx_sub_navbar_routeClick_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r0 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r0.routeClick.emit($event));
    })("expand", function SubNavbarComponent_ng_template_2_Conditional_6_For_2_li_0_Template_lpx_sub_navbar_expand_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r0 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r0.onChildExpand($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const child_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("item", child_r6);
  }
}
function SubNavbarComponent_ng_template_2_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SubNavbarComponent_ng_template_2_Conditional_6_For_2_li_0_Template, 2, 1, "li", 12);
  }
  if (rf & 2) {
    const child_r6 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("lpxVisible", !child_r6.visible || child_r6.visible(child_r6, ctx_r0.injector));
  }
}
function SubNavbarComponent_ng_template_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 10);
    ɵɵrepeaterCreate(1, SubNavbarComponent_ng_template_2_Conditional_6_For_2_Template, 1, 1, "li", 11, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassProp("collapsed", !ctx_r0.item.expanded);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.item.children);
  }
}
function SubNavbarComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 4);
    ɵɵlistener("click", function SubNavbarComponent_ng_template_2_Template_a_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onItemClick(ctx_r0.item));
    });
    ɵɵconditionalCreate(1, SubNavbarComponent_ng_template_2_Conditional_1_Template, 1, 1, "lpx-icon", 5);
    ɵɵtemplate(2, SubNavbarComponent_ng_template_2_ng_container_2_Template, 1, 0, "ng-container", 6)(3, SubNavbarComponent_ng_template_2_ng_template_3_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵconditionalCreate(5, SubNavbarComponent_ng_template_2_Conditional_5_Template, 1, 1, "lpx-icon", 7);
    ɵɵelementEnd();
    ɵɵconditionalCreate(6, SubNavbarComponent_ng_template_2_Conditional_6_Template, 3, 2, "ul", 8);
  }
  if (rf & 2) {
    const textTmpl_r7 = ɵɵreference(4);
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("selected", ctx_r0.item.selected)("expanded", (ctx_r0.item.children == null ? null : ctx_r0.item.children.length) && ctx_r0.item.expanded);
    ɵɵproperty("routerLink", ctx_r0.item.link);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.item.icon ? 1 : -1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.item.template || textTmpl_r7)("ngTemplateOutletContext", ɵɵpureFunction1(10, _c0, ctx_r0.item));
    ɵɵadvance(3);
    ɵɵconditional((ctx_r0.item.children == null ? null : ctx_r0.item.children.length) ? 5 : -1);
    ɵɵadvance();
    ɵɵconditional((ctx_r0.item.children == null ? null : ctx_r0.item.children.length) ? 6 : -1);
  }
}
function NavbarRoutesComponent_Conditional_1_For_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NavbarRoutesComponent_Conditional_1_For_1_For_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NavbarRoutesComponent_Conditional_1_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavbarRoutesComponent_Conditional_1_For_1_For_2_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const navbarItem_r1 = ctx.$implicit;
    ɵɵnextContext(3);
    const itemTemplate_r2 = ɵɵreference(8);
    ɵɵproperty("ngTemplateOutlet", itemTemplate_r2)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, navbarItem_r1));
  }
}
function NavbarRoutesComponent_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavbarRoutesComponent_Conditional_1_For_1_ng_container_0_Template, 1, 0, "ng-container", 4);
    ɵɵrepeaterCreate(1, NavbarRoutesComponent_Conditional_1_For_1_For_2_Template, 1, 4, "ng-container", null, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    ɵɵnextContext(2);
    const groupText_r4 = ɵɵreference(6);
    ɵɵproperty("ngTemplateOutlet", groupText_r4)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, item_r3));
    ɵɵadvance();
    ɵɵrepeater(item_r3.items);
  }
}
function NavbarRoutesComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NavbarRoutesComponent_Conditional_1_For_1_Template, 3, 4, null, null, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵrepeater(ctx_r4.groupedItems);
  }
}
function NavbarRoutesComponent_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NavbarRoutesComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavbarRoutesComponent_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 5);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const defaultRoute_r6 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", defaultRoute_r6);
  }
}
function NavbarRoutesComponent_ng_template_3_For_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NavbarRoutesComponent_ng_template_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavbarRoutesComponent_ng_template_3_For_1_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    ɵɵnextContext(2);
    const itemTemplate_r2 = ɵɵreference(8);
    ɵɵproperty("ngTemplateOutlet", itemTemplate_r2)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, item_r7));
  }
}
function NavbarRoutesComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NavbarRoutesComponent_ng_template_3_For_1_Template, 1, 4, "ng-container", null, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵrepeater(ctx_r4.navbarItems);
  }
}
function NavbarRoutesComponent_ng_template_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 6);
    ɵɵtext(1);
    ɵɵpipe(2, "lpxTranslate");
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r8 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, ɵɵpipeBind1(2, 1, item_r8.group)), " ");
  }
}
function NavbarRoutesComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, NavbarRoutesComponent_ng_template_5_Conditional_0_Template, 4, 5, "li", 6);
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    ɵɵconditional(item_r8.items.length ? 0 : -1);
  }
}
function NavbarRoutesComponent_ng_template_7_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 8)(1, "lpx-sub-navbar", 9);
    ɵɵlistener("expand", function NavbarRoutesComponent_ng_template_7_li_0_Template_lpx_sub_navbar_expand_1_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r4 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r4.onSubnavbarExpand($event, ctx_r4.navbarItems));
    })("routeClick", function NavbarRoutesComponent_ng_template_7_li_0_Template_lpx_sub_navbar_routeClick_1_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r4 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r4.onRouteClick($event, ctx_r4.navbarItems));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ɵɵnextContext().$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("item", item_r10)("routerItem", ctx_r4.routerItem());
  }
}
function NavbarRoutesComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavbarRoutesComponent_ng_template_7_li_0_Template, 2, 2, "li", 7);
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("lpxVisible", !item_r10.visible || item_r10.visible(item_r10, ctx_r4.injector));
  }
}
var _c1 = (a0, a1) => ({
  $implicit: a0,
  groupItems: a1
});
function NavbarComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NavbarComponent_Conditional_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NavbarComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavbarComponent_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const customContentTemplate_r3 = ɵɵreference(13);
    ɵɵproperty("ngTemplateOutlet", customContentTemplate_r3)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, ctx_r1.contentBefore));
  }
}
function NavbarComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NavbarComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NavbarComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-navbar-routes", 8);
  }
  if (rf & 2) {
    const items_r4 = ctx.$implicit;
    const groupItems_r5 = ctx.groupItems;
    ɵɵproperty("navbarItems", items_r4)("groupedItems", groupItems_r5)("routerItem", true);
  }
}
function NavbarComponent_ng_template_12_For_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NavbarComponent_ng_template_12_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavbarComponent_ng_template_12_For_1_ng_container_0_Template, 1, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const component_r6 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngComponentOutlet", component_r6)("ngComponentOutletInjector", ctx_r1.injector);
  }
}
function NavbarComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NavbarComponent_ng_template_12_For_1_Template, 1, 2, "ng-container", null, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const contents_r7 = ctx.$implicit;
    ɵɵrepeater(contents_r7);
  }
}
function NavbarComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "lpx-brand-logo");
  }
}
var _c2 = (a0) => [a0];
function FooterComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const footerValues_r1 = ɵɵnextContext();
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c2, footerValues_r1.descUrl));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", footerValues_r1.desc);
  }
}
function FooterComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const footerValues_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", footerValues_r1.desc);
  }
}
function FooterComponent_Conditional_0_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const footerLink_r2 = ɵɵnextContext().$implicit;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c2, footerLink_r2.link));
    ɵɵadvance();
    ɵɵtextInterpolate(footerLink_r2.text);
  }
}
function FooterComponent_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, FooterComponent_Conditional_0_For_6_Conditional_0_Template, 2, 4, "a", 2);
  }
  if (rf & 2) {
    const footerLink_r2 = ctx.$implicit;
    ɵɵconditional(footerLink_r2 ? 0 : -1);
  }
}
function FooterComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0)(1, "div", 1);
    ɵɵconditionalCreate(2, FooterComponent_Conditional_0_Conditional_2_Template, 2, 4, "a", 2)(3, FooterComponent_Conditional_0_Conditional_3_Template, 2, 1, "a");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 3);
    ɵɵrepeaterCreate(5, FooterComponent_Conditional_0_For_6_Template, 1, 1, null, null, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const footerValues_r1 = ctx;
    ɵɵadvance(2);
    ɵɵconditional(footerValues_r1.descUrl ? 2 : 3);
    ɵɵadvance(3);
    ɵɵrepeater(footerValues_r1.footerLinks);
  }
}
var _LpxVisibleDirective = class _LpxVisibleDirective {
  set lpxVisible(value) {
    this.condition$ = checkType(value);
    this.subscribeToCondition();
  }
  constructor(viewContainerRef, templateRef) {
    this.viewContainerRef = viewContainerRef;
    this.templateRef = templateRef;
    this.condition$ = of(false);
  }
  ngOnInit() {
    this.updateVisibility();
  }
  ngOnDestroy() {
    this.conditionSubscription?.unsubscribe();
  }
  subscribeToCondition() {
    this.conditionSubscription = this.condition$.subscribe((value) => {
      this.isVisible = value;
      this.updateVisibility();
    });
  }
  updateVisibility() {
    this.viewContainerRef.clear();
    if (this.isVisible === false) {
      return;
    }
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
};
_LpxVisibleDirective.ɵfac = function LpxVisibleDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LpxVisibleDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef));
};
_LpxVisibleDirective.ɵdir = ɵɵdefineDirective({
  type: _LpxVisibleDirective,
  selectors: [["", "lpxVisible", ""]],
  inputs: {
    lpxVisible: "lpxVisible"
  }
});
var LpxVisibleDirective = _LpxVisibleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxVisibleDirective, [{
    type: Directive,
    args: [{
      selector: "[lpxVisible]",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: TemplateRef
  }], {
    lpxVisible: [{
      type: Input,
      args: ["lpxVisible"]
    }]
  });
})();
function checkType(value) {
  if (value instanceof Promise) {
    return from(value);
  } else if (value instanceof Observable) {
    return value;
  } else if (typeof value === "boolean") {
    return of(value);
  } else if (value === void 0 || value === null) {
    return of(true);
  } else {
    return EMPTY;
  }
}
var LanguageTranslateKeys;
(function(LanguageTranslateKeys2) {
  LanguageTranslateKeys2["SettingsTitle"] = "language.settings.title";
})(LanguageTranslateKeys || (LanguageTranslateKeys = {}));
var LanguageTranslateDefaults = {
  [LanguageTranslateKeys.SettingsTitle]: "Language Options"
};
var _LpxLanguageModule = class _LpxLanguageModule {
  /**
   * @deprecated `LpxLanguageModule.forRoot()` is deprecated. You can use `provideLpxCore` **function** instead.
   */
  static forRoot(options) {
    return {
      ngModule: _LpxLanguageModule,
      providers: [provideLpxCore(SKIP_DEFAULTS, withLanguage(options))]
    };
  }
};
_LpxLanguageModule.ɵfac = function LpxLanguageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LpxLanguageModule)();
};
_LpxLanguageModule.ɵmod = ɵɵdefineNgModule({
  type: _LpxLanguageModule,
  imports: [CommonModule]
});
_LpxLanguageModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var LpxLanguageModule = _LpxLanguageModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxLanguageModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CommonModule]
    }]
  }], null, null);
})();
var DataStore = class {
  get state() {
    return this.state$.value;
  }
  constructor(initialState) {
    this.initialState = initialState;
    this.state$ = new BehaviorSubject(this.initialState);
    this.update$ = new Subject();
    this.sliceState = (selector, compareFn = (s1, s2) => s1 === s2) => this.state$.pipe(map(selector), distinctUntilChanged(compareFn));
    this.sliceUpdate = (selector, filterFn = (x) => x !== void 0) => this.update$.pipe(map(selector), filter(filterFn));
  }
  patch(state2) {
    let patchedState = state2;
    if (typeof state2 === "object" && !Array.isArray(state2)) {
      patchedState = __spreadValues(__spreadValues({}, this.state), state2);
    }
    this.state$.next(patchedState);
    this.update$.next(patchedState);
  }
  set(state2) {
    this.state$.next(state2);
    this.update$.next(state2);
  }
  reset() {
    this.set(this.initialState);
  }
};
var LPX_LANGUAGE = new InjectionToken("LPX_LANGUAGE");
var _LanguageService = class _LanguageService {
  get selectedLanguage() {
    return this.store.state.selectedLanguage;
  }
  constructor(languages) {
    this.languages = languages;
    this.store = new DataStore({
      languages: []
    });
    this.id = "languages";
    this.convertLanguageToNavbarItem = (languages2) => {
      return languages2.map((lang) => ({
        icon: "",
        text: lang.displayName,
        selected: lang.selected,
        action: () => {
          this.setSelectedLanguage(lang);
          return true;
        }
      }));
    };
    this.selectedLanguage$ = this.store.sliceState(({
      selectedLanguage
    }) => selectedLanguage);
    this.languageChange$ = this.selectedLanguage$.pipe(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      filter((lang) => lang !== void 0),
      distinctUntilChanged((a, b) => a?.cultureName === b?.cultureName)
    );
    this.languages$ = this.store.sliceState((state2) => state2.languages);
    this.languagesAsNavbarItems$ = this.languages$.pipe(map(this.convertLanguageToNavbarItem));
    this.languagesAsSettingsGroup$ = this.languagesAsNavbarItems$.pipe(map((languages2) => ({
      text: LanguageTranslateKeys.SettingsTitle,
      icon: "bi bi-globe",
      id: this.id,
      children: languages2
    })));
    this.init(this.languages);
  }
  setLanguages(languages) {
    this.init(languages);
  }
  init(languages) {
    this.store.patch({
      languages,
      selectedLanguage: languages.find((lang) => lang.selected)
    });
  }
  setSelectedLanguage(lang) {
    this.store.patch({
      selectedLanguage: lang
    });
  }
};
_LanguageService.ɵfac = function LanguageService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LanguageService)(ɵɵinject(LPX_LANGUAGE));
};
_LanguageService.ɵprov = ɵɵdefineInjectable({
  token: _LanguageService,
  factory: _LanguageService.ɵfac,
  providedIn: "root"
});
var LanguageService = _LanguageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [LPX_LANGUAGE]
    }]
  }], null);
})();
var LPX_INITIAL_STYLES = new InjectionToken("LPX_INITIAL_STYLES_TOKEN");
var LPX_STYLE_FINAL = new InjectionToken("LPX_STYLE_FINAL_TOKEN");
var LPX_LAYOUT_STYLE_FINAL = new InjectionToken("LPX_LAYOUT_STYLE_FINALIZE_TOKEN");
var _StyleService = class _StyleService {
  constructor(initialStyles, document2) {
    this.initialStyles = initialStyles;
    this.document = document2;
    this.lastInjectedStyle = null;
    this.initialized$ = new BehaviorSubject(false);
  }
  initStyles(direction) {
    return __async(this, null, function* () {
      const cssExtension = direction === "rtl" ? ".rtl" : "";
      for (const style2 of this.initialStyles) {
        const href = `${style2.bundleName}${cssExtension}.css`;
        const selector = `
        link[rel="stylesheet"][href$="${href}"],
        link[rel="stylesheet"]#${style2.bundleName}
      `;
        const isAlreadyLoaded = !!this.document.querySelector(selector);
        if (isAlreadyLoaded) {
          continue;
        }
        yield this.loadStyle(style2, direction);
      }
      this.initialized$.next(true);
    });
  }
  loadStyle(style2, direction) {
    return __async(this, null, function* () {
      return new Promise((resolve) => {
        const linkElement = this.createLinkElem(style2, direction, resolve);
        const stylesCss = this.document.querySelector('link[rel="stylesheet"][href*="styles"]');
        if (stylesCss) {
          stylesCss.insertAdjacentElement("beforebegin", linkElement);
        } else {
          this.document.head.appendChild(linkElement);
        }
        this.lastInjectedStyle = linkElement;
        resolve(linkElement);
      });
    });
  }
  replaceStyle(style2, direction) {
    return __async(this, null, function* () {
      const loaded = this.document.querySelector(`link#${style2.bundleName}`);
      if (loaded) {
        loaded.remove();
      }
      return this.loadStyle(style2, direction);
    });
  }
  reloadInitialStyles(direction) {
    return __async(this, null, function* () {
      for (const style2 of this.initialStyles) {
        yield this.replaceStyle(style2, direction);
      }
    });
  }
  createLinkElem(style2, direction, resolve) {
    const linkElem = document.createElement("link");
    linkElem.rel = "stylesheet";
    linkElem.id = style2.bundleName;
    linkElem.href = `${style2.bundleName}${direction === "rtl" ? ".rtl" : ""}.css`;
    linkElem.onload = () => {
      resolve(linkElem);
    };
    return linkElem;
  }
};
_StyleService.ɵfac = function StyleService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StyleService)(ɵɵinject(LPX_STYLE_FINAL), ɵɵinject(DOCUMENT));
};
_StyleService.ɵprov = ɵɵdefineInjectable({
  token: _StyleService,
  factory: _StyleService.ɵfac,
  providedIn: "root"
});
var StyleService = _StyleService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StyleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [LPX_STYLE_FINAL]
    }]
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
function createStyleFactory(handler) {
  return handler || ((defaultValue) => defaultValue);
}
function styleLoadFactory(styleList, layoutStyles) {
  styleList.push({
    bundleName: "ng-bundle"
  });
  styleList.push({
    bundleName: "font-bundle"
  });
  return [...styleList, ...layoutStyles];
}
function createDirectionProvider(listenDirection) {
  return provideAppInitializer(() => {
    if (listenDirection) {
      listenDirectionChange();
    }
  });
}
function listenDirectionChange() {
  const languageService = inject(LanguageService);
  const styleService = inject(StyleService);
  return new Promise((resolve) => {
    styleService.initialized$.pipe(filter(Boolean), take(1), switchMap(() => languageService.languageChange$), distinctUntilKeyChanged("isRTL")).subscribe((lang) => __async(null, null, function* () {
      const direction = lang?.isRTL ? "rtl" : "ltr";
      const documentElement = document.documentElement;
      if (documentElement.dir !== direction) {
        documentElement.dir = direction;
      }
      yield styleService.reloadInitialStyles(direction);
      resolve(null);
    }));
  });
}
var RESPONSIVE_BREAKPOINTS = new InjectionToken("RESPONSIVE_BREAKPOINTS");
var WINDOW = new InjectionToken("WINDOW");
var _ResponsiveService = class _ResponsiveService {
  constructor(providedBreakpoints, window2) {
    this.providedBreakpoints = providedBreakpoints;
    this.window = window2;
    this.defaultBreakpoint = {
      name: "all",
      width: 0
    };
    this.breakpoints = this.buildBreakpoints(this.providedBreakpoints);
    this.getCurrentSize = () => ({
      height: this.window.innerHeight,
      width: this.window.innerWidth
    });
    this.mapSizeToBreakpoint = ({
      width
    } = this.getCurrentSize()) => {
      return this.breakpoints.find((s) => width >= s.width);
    };
    this.currentSize$ = new BehaviorSubject(this.mapSizeToBreakpoint());
    this.shouldRenderWithCurrentSize = (query) => {
      return this.matchQuery(query);
    };
    this.setupListener();
  }
  setupListener() {
    this.currentResolution$ = fromEvent(this.window, "resize").pipe(map(this.getCurrentSize)).pipe(startWith(this.getCurrentSize()));
    this.currentResolution$.pipe(map(this.mapSizeToBreakpoint), distinctUntilChanged()).subscribe((current) => {
      this.currentSize$.next(current);
    });
  }
  buildBreakpoints(breakpoints) {
    return [...Object.keys(breakpoints).map((key) => ({
      name: key,
      width: breakpoints[key]
    })).sort((a, b) => b.width - a.width), this.defaultBreakpoint];
  }
  matchQuery(query) {
    const {
      width
    } = this.getCurrentSize();
    const tokens = query.split(" ");
    const findInTokens = (size) => tokens.find((token) => token.split(
      "-"
      /* ResponsiveTokens.separator */
    )[0] === size);
    const matchedBreakpoint = this.breakpoints.find((breakpoint) => width >= breakpoint.width && findInTokens(breakpoint.name));
    if (matchedBreakpoint) {
      const token = findInTokens(matchedBreakpoint.name);
      const shouldBeBigger = !token?.includes(
        "none"
        /* ResponsiveTokens.none */
      );
      return shouldBeBigger === width >= matchedBreakpoint.width;
    }
    return false;
  }
};
_ResponsiveService.ɵfac = function ResponsiveService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResponsiveService)(ɵɵinject(RESPONSIVE_BREAKPOINTS), ɵɵinject(WINDOW));
};
_ResponsiveService.ɵprov = ɵɵdefineInjectable({
  token: _ResponsiveService,
  factory: _ResponsiveService.ɵfac,
  providedIn: "root"
});
var ResponsiveService = _ResponsiveService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResponsiveService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [RESPONSIVE_BREAKPOINTS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [WINDOW]
    }]
  }], null);
})();
var _ResponsiveDirective = class _ResponsiveDirective {
  constructor(templateRef, viewContainer, service, parentCdr) {
    this.templateRef = templateRef;
    this.viewContainer = viewContainer;
    this.service = service;
    this.parentCdr = parentCdr;
    this.hasRendered = false;
    this.sub = new Subscription();
    this.render = (shouldRender) => {
      if (shouldRender && !this.hasRendered) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasRendered = true;
      } else if (!shouldRender && this.hasRendered) {
        this.viewContainer.clear();
        this.hasRendered = false;
      }
      this.parentCdr.detectChanges();
    };
  }
  ngOnInit() {
    this.sub.add(this.service.currentSize$.pipe(map((_) => this.service.shouldRenderWithCurrentSize(this.query))).subscribe(this.render));
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
};
_ResponsiveDirective.ɵfac = function ResponsiveDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResponsiveDirective)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ResponsiveService), ɵɵdirectiveInject(ChangeDetectorRef, 12));
};
_ResponsiveDirective.ɵdir = ɵɵdefineDirective({
  type: _ResponsiveDirective,
  selectors: [["", "lpxResponsive", ""]],
  inputs: {
    query: [0, "lpxResponsive", "query"]
  }
});
var ResponsiveDirective = _ResponsiveDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResponsiveDirective, [{
    type: Directive,
    args: [{
      selector: "[lpxResponsive]"
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: ViewContainerRef
  }, {
    type: ResponsiveService
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }]
  }], {
    query: [{
      type: Input,
      args: ["lpxResponsive"]
    }]
  });
})();
var _LpxResponsiveModule = class _LpxResponsiveModule {
};
_LpxResponsiveModule.ɵfac = function LpxResponsiveModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LpxResponsiveModule)();
};
_LpxResponsiveModule.ɵmod = ɵɵdefineNgModule({
  type: _LpxResponsiveModule,
  imports: [CommonModule, ResponsiveDirective],
  exports: [ResponsiveDirective]
});
_LpxResponsiveModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var LpxResponsiveModule = _LpxResponsiveModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxResponsiveModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ResponsiveDirective],
      exports: [ResponsiveDirective]
    }]
  }], null, null);
})();
var LPX_RESPONSIVE_BREAKPOINTS_DEFAULTS = {
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200
};
function createResponsiveProvider(responsiveSettings) {
  return {
    provide: RESPONSIVE_BREAKPOINTS,
    useValue: responsiveSettings || LPX_RESPONSIVE_BREAKPOINTS_DEFAULTS
  };
}
var _UserProfileService = class _UserProfileService {
  constructor() {
    this.store = new DataStore({});
    this.user$ = this.store.sliceState((state2) => state2);
  }
  setUser(user) {
    this.store.set(user);
  }
  patchUser(user) {
    this.store.patch(user);
  }
};
_UserProfileService.ɵfac = function UserProfileService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserProfileService)();
};
_UserProfileService.ɵprov = ɵɵdefineInjectable({
  token: _UserProfileService,
  factory: _UserProfileService.ɵfac,
  providedIn: "root"
});
var UserProfileService = _UserProfileService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _BodyService = class _BodyService {
  constructor() {
    this.body = document.querySelector("body");
    this.classes = {
      overflowYHidden: "overflow-y-hidden"
    };
  }
  disableScrollY() {
    this.body?.classList.add(this.classes.overflowYHidden);
  }
  enableScrollY() {
    this.body?.classList.remove(this.classes.overflowYHidden);
  }
};
_BodyService.ɵfac = function BodyService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BodyService)();
};
_BodyService.ɵprov = ɵɵdefineInjectable({
  token: _BodyService,
  factory: _BodyService.ɵfac,
  providedIn: "root"
});
var BodyService = _BodyService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BodyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _LayoutService = class _LayoutService {
  constructor() {
    this.store = new DataStore({
      containerClass: [""]
    });
    this.containerClass$ = this.store.sliceState(({
      containerClass
    }) => containerClass || []);
  }
  setClass(cssClass) {
    const containerClass = Array.isArray(cssClass) ? cssClass : [cssClass];
    this.patchStore(containerClass);
  }
  addClass(cssClass) {
    const {
      containerClass
    } = this.store.state;
    this.patchStore([...containerClass, cssClass]);
  }
  removeClass(cssClass) {
    const {
      containerClass
    } = this.store.state;
    const index = containerClass.findIndex((item) => item === cssClass);
    if (index === -1) return;
    const update = [...containerClass.slice(0, index), ...containerClass.slice(index + 1)];
    this.patchStore(update);
  }
  removeClasses(classlist) {
    const {
      containerClass
    } = this.store.state;
    const filteredClasslist = containerClass.filter((clss) => !classlist.includes(clss));
    this.patchStore(filteredClasslist);
  }
  toggleClass(cssClass) {
    const {
      containerClass
    } = this.store.state;
    const index = containerClass.findIndex((item) => item === cssClass);
    if (index === -1) {
      this.addClass(cssClass);
    } else {
      this.removeClass(cssClass);
    }
  }
  patchStore(containerClass) {
    this.store.patch({
      containerClass
    });
  }
};
_LayoutService.ɵfac = function LayoutService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LayoutService)();
};
_LayoutService.ɵprov = ɵɵdefineInjectable({
  token: _LayoutService,
  factory: _LayoutService.ɵfac,
  providedIn: "root"
});
var LayoutService = _LayoutService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var LPX_TRANSLATE_SERVICE_TOKEN = new InjectionToken("LPX_TRANSLATE_SERVICE_TOKEN");
var LPX_TRANSLATE_TOKEN = new InjectionToken("LPX_TRANSLATE_TOKEN");
function sortItems(a, b) {
  if (!a.order) {
    return 1;
  }
  if (!b.order) {
    return -1;
  }
  return a.order - b.order;
}
function flatArrayDeepToObject(arr) {
  return arr.reduce((acc, curr) => __spreadValues(__spreadValues({}, acc), Array.isArray(curr) ? flatArrayDeepToObject(curr) : curr), {});
}
function getStream$(source) {
  return source instanceof Observable ? source : source instanceof Promise ? from(source) : of(source);
}
function isNullOrUndefined(obj) {
  return obj === null || obj === void 0;
}
function isArray(obj) {
  return Array.isArray(obj);
}
var _LpxThemeTranslateService = class _LpxThemeTranslateService {
  constructor(translateValues, translateService) {
    this.translateValues = translateValues;
    this.translateService = translateService;
    this._content = flatArrayDeepToObject(this.translateValues);
  }
  // TODO: PROVIDE API : Implement args
  translate$(key, ...args) {
    return this.translateService.get$(key, this._content[key]);
  }
};
_LpxThemeTranslateService.ɵfac = function LpxThemeTranslateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LpxThemeTranslateService)(ɵɵinject(LPX_TRANSLATE_TOKEN, 8), ɵɵinject(LPX_TRANSLATE_SERVICE_TOKEN));
};
_LpxThemeTranslateService.ɵprov = ɵɵdefineInjectable({
  token: _LpxThemeTranslateService,
  factory: _LpxThemeTranslateService.ɵfac,
  providedIn: "root"
});
var LpxThemeTranslateService = _LpxThemeTranslateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxThemeTranslateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Array,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [LPX_TRANSLATE_TOKEN]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [LPX_TRANSLATE_SERVICE_TOKEN]
    }]
  }], null);
})();
var _DefaultTranslateService = class _DefaultTranslateService {
  get$(key, defaultValue) {
    return of(defaultValue || key || "");
  }
  get(key, defaultValue) {
    return defaultValue || key || "";
  }
};
_DefaultTranslateService.ɵfac = function DefaultTranslateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DefaultTranslateService)();
};
_DefaultTranslateService.ɵprov = ɵɵdefineInjectable({
  token: _DefaultTranslateService,
  factory: _DefaultTranslateService.ɵfac
});
var DefaultTranslateService = _DefaultTranslateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultTranslateService, [{
    type: Injectable
  }], null, null);
})();
var LPX_TRANSLATE_SERVICE_PROVIDER = {
  provide: LPX_TRANSLATE_SERVICE_TOKEN,
  useClass: DefaultTranslateService
};
var LPX_TRANSLATE_PROVIDERS = [LPX_TRANSLATE_SERVICE_PROVIDER];
var _DefaultAuthService = class _DefaultAuthService {
  constructor(userProfileService) {
    this.userProfileService = userProfileService;
    this.isUserExists$ = this.userProfileService.user$.pipe(map((user) => !!user && Object.keys(user).length > 0));
  }
  navigateToLogin() {
    return;
  }
};
_DefaultAuthService.ɵfac = function DefaultAuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DefaultAuthService)(ɵɵinject(UserProfileService));
};
_DefaultAuthService.ɵprov = ɵɵdefineInjectable({
  token: _DefaultAuthService,
  factory: _DefaultAuthService.ɵfac
});
var DefaultAuthService = _DefaultAuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultAuthService, [{
    type: Injectable
  }], () => [{
    type: UserProfileService
  }], null);
})();
var LPX_AUTH_SERVICE_TOKEN = new InjectionToken("LPX_AUTH_SERVICE_TOKEN");
var LPX_AUTH_SERVICE_PROVIDER = {
  provide: LPX_AUTH_SERVICE_TOKEN,
  useClass: DefaultAuthService
};
var _LpxLocalStorageService = class _LpxLocalStorageService {
  constructor() {
  }
  get length() {
    return localStorage.length;
  }
  clear() {
    localStorage.clear();
  }
  getItem(key) {
    return localStorage.getItem(key);
  }
  key(index) {
    return localStorage.key(index);
  }
  removeItem(key) {
    localStorage.removeItem(key);
  }
  setItem(key, value) {
    localStorage.setItem(key, value);
  }
};
_LpxLocalStorageService.ɵfac = function LpxLocalStorageService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LpxLocalStorageService)();
};
_LpxLocalStorageService.ɵprov = ɵɵdefineInjectable({
  token: _LpxLocalStorageService,
  factory: _LpxLocalStorageService.ɵfac,
  providedIn: "root"
});
var LpxLocalStorageService = _LpxLocalStorageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxLocalStorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _RoutesService = class _RoutesService {
  constructor() {
    this.router = inject(Router);
    this.location = inject(Location);
    this.currentNavigation = toSignal(this.router.events.pipe(filter((e) => e instanceof NavigationEnd), map(() => this.location.path() || "/")), {
      initialValue: this.location.path() || "/"
    });
  }
};
_RoutesService.ɵfac = function RoutesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoutesService)();
};
_RoutesService.ɵprov = ɵɵdefineInjectable({
  token: _RoutesService,
  factory: _RoutesService.ɵfac,
  providedIn: "root"
});
var RoutesService2 = _RoutesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutesService2, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var LPX_STYLE_PROVIDERS = [{
  provide: LPX_INITIAL_STYLES,
  useFactory: () => []
}, provideAppInitializer(() => {
  return loadInitialStyles();
})];
function loadInitialStyles() {
  const styleService = inject(StyleService);
  const languageService = inject(LanguageService);
  return languageService.languageChange$.pipe(take(1), switchMap((lang) => from(styleService.initStyles(lang.isRTL ? "rtl" : "ltr"))));
}
function createWindowProvider(windowObj) {
  return {
    provide: WINDOW,
    useValue: windowObj || window
  };
}
var LOGO_URL_TOKEN = new InjectionToken("LOGO_URL_TOKEN");
var LOGO_APP_NAME_TOKEN = new InjectionToken("LOGO_APP_NAME_TOKEN");
var LpxLogoFeatureKind;
(function(LpxLogoFeatureKind2) {
  LpxLogoFeatureKind2[LpxLogoFeatureKind2["Options"] = 0] = "Options";
})(LpxLogoFeatureKind || (LpxLogoFeatureKind = {}));
function makeLpxLogoFeature(kind, providers) {
  return {
    ɵkind: kind,
    ɵproviders: providers
  };
}
function withEnvironmentOptions(options = {}) {
  const {
    name,
    logoUrl
  } = options.application || {};
  return makeLpxLogoFeature(LpxLogoFeatureKind.Options, [{
    provide: LOGO_URL_TOKEN,
    useValue: logoUrl || ""
  }, {
    provide: LOGO_APP_NAME_TOKEN,
    useValue: name || "ProjectName"
  }]);
}
function provideLogo(...features) {
  const providers = [];
  features.forEach(({
    ɵproviders
  }) => providers.push(...ɵproviders));
  return makeEnvironmentProviders(providers);
}
var ICON_MAP = {
  bagFill: "bi bi-bag-fill",
  bellFill: "bi bi-bell-fill",
  calendarWeek: "bi bi-calendar2-week",
  chatDots: "bi bi-chat-dots",
  chevronDown: "bi bi-chevron-down",
  chevronUp: "bi bi-chevron-up",
  gearConnected: "bi bi-gear-wide-connected",
  filter: "bi bi-filter",
  filterFill: "bi bi-filter-circle-fill",
  layoutThreeColumns: "bi bi-layout-three-columns",
  moon: "bi bi-moon",
  square: "bi bi-square",
  sunset: "bi bi-brightness-alt-high-fill",
  sunup: "bi bi-brightness-high-fill",
  star: "bi bi-star",
  x: "bi bi-x",
  xCircleFill: "bi bi-x-circle-fill"
};
var LEPTON_X_ICON_SET = new InjectionToken("LEPTON_X_ICON_SET");
var _IconComponent = class _IconComponent {
  constructor() {
    this.iconSet = inject(LEPTON_X_ICON_SET);
  }
  get styleClass() {
    return this.iconSet[this.iconClass] || this.iconClass;
  }
};
_IconComponent.ɵfac = function IconComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IconComponent)();
};
_IconComponent.ɵcmp = ɵɵdefineComponent({
  type: _IconComponent,
  selectors: [["lpx-icon"]],
  inputs: {
    iconClass: "iconClass"
  },
  decls: 1,
  vars: 1,
  consts: [["aria-hidden", "true", 1, "lpx-icon", 3, "ngClass"]],
  template: function IconComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "i", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.styleClass);
    }
  },
  dependencies: [NgClass],
  encapsulation: 2
});
var IconComponent = _IconComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{
      selector: "lpx-icon",
      template: `
    <i class="lpx-icon" [ngClass]="styleClass" aria-hidden="true"></i>
  `,
      encapsulation: ViewEncapsulation.None,
      imports: [NgClass]
    }]
  }], null, {
    iconClass: [{
      type: Input
    }]
  });
})();
var _AvatarComponent = class _AvatarComponent {
};
_AvatarComponent.ɵfac = function AvatarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AvatarComponent)();
};
_AvatarComponent.ɵcmp = ɵɵdefineComponent({
  type: _AvatarComponent,
  selectors: [["lpx-avatar"]],
  inputs: {
    avatar: "avatar"
  },
  decls: 1,
  vars: 1,
  consts: [[1, "lpx-avatar"], [1, "lpx-avatar-icon", 3, "iconClass"], [1, "lpx-avatar-img", 3, "src"]],
  template: function AvatarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵconditionalCreate(0, AvatarComponent_Conditional_0_Template, 3, 1, "div", 0);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.avatar && ctx.avatar.source ? 0 : -1);
    }
  },
  dependencies: [IconComponent],
  encapsulation: 2
});
var AvatarComponent = _AvatarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarComponent, [{
    type: Component,
    args: [{
      selector: "lpx-avatar",
      encapsulation: ViewEncapsulation.None,
      imports: [IconComponent],
      template: `@if (avatar && avatar.source) {\r
  <div class="lpx-avatar">\r
    @switch (avatar.type) {\r
      @case ('icon') {\r
        <lpx-icon\r
          class="lpx-avatar-icon"\r
          [iconClass]="avatar.source"\r
        ></lpx-icon>\r
      }\r
      @case ('image') {\r
        <img class="lpx-avatar-img" [src]="avatar.source" />\r
      }\r
    }\r
  </div>\r
}\r
`
    }]
  }], null, {
    avatar: [{
      type: Input
    }]
  });
})();
var _LpxIconModule = class _LpxIconModule {
  /**
   * @deprecated `LpxIconModule.forRoot()` is deprecated. You can use `provideLpxCore` **function** instead.
   */
  static forRoot(options) {
    return {
      ngModule: _LpxIconModule,
      providers: [provideLpxCore(SKIP_DEFAULTS, withIcon(options))]
    };
  }
};
_LpxIconModule.ɵfac = function LpxIconModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LpxIconModule)();
};
_LpxIconModule.ɵmod = ɵɵdefineNgModule({
  type: _LpxIconModule,
  imports: [CommonModule, IconComponent],
  exports: [IconComponent]
});
_LpxIconModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var LpxIconModule = _LpxIconModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxIconModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, IconComponent],
      exports: [IconComponent]
    }]
  }], null, null);
})();
var _LpxAvatarModule = class _LpxAvatarModule {
};
_LpxAvatarModule.ɵfac = function LpxAvatarModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LpxAvatarModule)();
};
_LpxAvatarModule.ɵmod = ɵɵdefineNgModule({
  type: _LpxAvatarModule,
  imports: [CommonModule, LpxIconModule, AvatarComponent],
  exports: [AvatarComponent]
});
_LpxAvatarModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, LpxIconModule]
});
var LpxAvatarModule = _LpxAvatarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxAvatarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, LpxIconModule, AvatarComponent],
      exports: [AvatarComponent]
    }]
  }], null, null);
})();
var Layouts;
(function(Layouts2) {
  Layouts2["sideMenu"] = "side-menu";
  Layouts2["topMenu"] = "top-menu";
})(Layouts || (Layouts = {}));
var _BrandLogoComponent = class _BrandLogoComponent {
  constructor() {
    this.layout = input(Layouts.sideMenu);
    this.layoutOptions = Layouts;
    this.logoUrl = inject(LOGO_URL_TOKEN, {
      optional: true
    });
    this.appName = inject(LOGO_APP_NAME_TOKEN, {
      optional: true
    }) ?? "ProjectName";
  }
};
_BrandLogoComponent.ɵfac = function BrandLogoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BrandLogoComponent)();
};
_BrandLogoComponent.ɵcmp = ɵɵdefineComponent({
  type: _BrandLogoComponent,
  selectors: [["lpx-brand-logo"]],
  inputs: {
    layout: [1, "layout"]
  },
  decls: 2,
  vars: 1,
  consts: [["routerLink", "/"], ["routerLink", "/", 1, "text-decoration-none"], ["role", "img", "aria-label", "App Logo", 1, "lpx-brand-logo"], [1, "lpx-brand-name", 2, "position", "inherit"], [1, "lpx-brand-logo"], [1, "lpx-brand-name", 2, "left", "58px !important"]],
  template: function BrandLogoComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵconditionalCreate(0, BrandLogoComponent_Conditional_0_Template, 2, 2, "a", 0)(1, BrandLogoComponent_Conditional_1_Template, 3, 1, "a", 1);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.logoUrl ? 0 : 1);
    }
  },
  dependencies: [RouterLink],
  encapsulation: 2
});
var BrandLogoComponent = _BrandLogoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrandLogoComponent, [{
    type: Component,
    args: [{
      selector: "lpx-brand-logo",
      encapsulation: ViewEncapsulation.None,
      imports: [RouterLink],
      template: `@if (logoUrl) {\r
  @let logo = 'url(' + logoUrl + ')';\r
  <a routerLink="/">\r
    <div\r
      class="lpx-brand-logo"\r
      [style.background-image]="logo"\r
      role="img"\r
      aria-label="App Logo"\r
    ></div>\r
  </a>\r
} @else {\r
  <a routerLink="/" class="text-decoration-none">\r
    @switch (layout()) {\r
      @case (layoutOptions.sideMenu) {\r
        <div class="lpx-brand-logo"></div>\r
        <div class="lpx-brand-name" style="left: 58px !important">\r
          {{ appName }}\r
        </div>\r
      }\r
\r
      @case (layoutOptions.topMenu) {\r
        <div class="lpx-brand-name" style="position: inherit">\r
          {{ appName }}\r
        </div>\r
      }\r
    }\r
  </a>\r
}\r
`
    }]
  }], null, null);
})();
var _LpxBrandLogoModule = class _LpxBrandLogoModule {
};
_LpxBrandLogoModule.ɵfac = function LpxBrandLogoModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LpxBrandLogoModule)();
};
_LpxBrandLogoModule.ɵmod = ɵɵdefineNgModule({
  type: _LpxBrandLogoModule,
  imports: [RouterModule, BrandLogoComponent],
  exports: [BrandLogoComponent]
});
_LpxBrandLogoModule.ɵinj = ɵɵdefineInjector({
  imports: [RouterModule]
});
var LpxBrandLogoModule = _LpxBrandLogoModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxBrandLogoModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule, BrandLogoComponent],
      exports: [BrandLogoComponent]
    }]
  }], null, null);
})();
var _ClickOutsideDirective = class _ClickOutsideDirective {
  constructor() {
    this.elementRef = inject(ElementRef);
    this.lpxClickOutside = new EventEmitter();
    this.exceptedRefs = [];
  }
  onDocumentClick(event) {
    if (!(this.elementRef.nativeElement.contains(event.target) || this.exceptedRefs.some((ref) => ref.nativeElement.contains(event.target)))) {
      this.lpxClickOutside.emit();
    }
  }
};
_ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ClickOutsideDirective)();
};
_ClickOutsideDirective.ɵdir = ɵɵdefineDirective({
  type: _ClickOutsideDirective,
  selectors: [["", "lpxClickOutside", ""]],
  hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, ɵɵresolveDocument);
    }
  },
  inputs: {
    exceptedRefs: "exceptedRefs"
  },
  outputs: {
    lpxClickOutside: "lpxClickOutside"
  }
});
var ClickOutsideDirective = _ClickOutsideDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClickOutsideDirective, [{
    type: Directive,
    args: [{
      selector: "[lpxClickOutside]"
    }]
  }], null, {
    lpxClickOutside: [{
      type: Output
    }],
    exceptedRefs: [{
      type: Input
    }],
    onDocumentClick: [{
      type: HostListener,
      args: ["document:click", ["$event"]]
    }]
  });
})();
var _ToObservablePipe = class _ToObservablePipe {
  transform(value) {
    return value ? getStream$(value) : of("");
  }
};
_ToObservablePipe.ɵfac = function ToObservablePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToObservablePipe)();
};
_ToObservablePipe.ɵpipe = ɵɵdefinePipe({
  name: "toObservable",
  type: _ToObservablePipe,
  pure: true
});
var ToObservablePipe = _ToObservablePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToObservablePipe, [{
    type: Pipe,
    args: [{
      name: "toObservable"
    }]
  }], null, null);
})();
var _BreadcrumbService = class _BreadcrumbService {
  constructor() {
    this.store = new DataStore([]);
    this.items$ = this.store.sliceState((state2) => state2);
  }
  // TODO: generate id per item
  add(item) {
    const items = Array.isArray(item) ? item : [item];
    this.store.set([...this.store.state, ...items]);
  }
  // TODO: generate id per item
  insert(item, index) {
    const state2 = this.store.state;
    const items = Array.isArray(item) ? item : [item];
    this.store.set([...state2.slice(0, index), ...items, ...state2.slice(index)]);
  }
  // TODO: generate id per item
  setItems(items) {
    this.store.set(items);
  }
};
_BreadcrumbService.ɵfac = function BreadcrumbService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BreadcrumbService)();
};
_BreadcrumbService.ɵprov = ɵɵdefineInjectable({
  token: _BreadcrumbService,
  factory: _BreadcrumbService.ɵfac,
  providedIn: "root"
});
var BreadcrumbService = _BreadcrumbService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _BreadcrumbComponent = class _BreadcrumbComponent {
  constructor() {
    this.service = inject(BreadcrumbService);
    this.icon = ICON_MAP;
  }
  onClick(item) {
    if (item.children) {
      item.expanded = !item.expanded;
    }
  }
};
_BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BreadcrumbComponent)();
};
_BreadcrumbComponent.ɵcmp = ɵɵdefineComponent({
  type: _BreadcrumbComponent,
  selectors: [["lpx-breadcrumb"]],
  decls: 9,
  vars: 2,
  consts: [["linkTemplate", ""], ["textTemplate", ""], ["aria-label", "breadcrumb"], [1, "lpx-breadcrumb"], [1, "lpx-breadcrumb-item", 3, "click", "lpxClickOutside"], [1, "lpx-breadcrumb-item-icon", 3, "iconClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "lpx-breadcrumb-separator"], ["iconClass", "bi bi-chevron-right"], [3, "routerLink"], [1, "lpx-breadcrumb-item-text"]],
  template: function BreadcrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "nav", 2)(1, "ol", 3);
      ɵɵrepeaterCreate(2, BreadcrumbComponent_For_3_Template, 4, 8, null, null, ɵɵrepeaterTrackByIndex);
      ɵɵpipe(4, "async");
      ɵɵelementEnd()();
      ɵɵtemplate(5, BreadcrumbComponent_ng_template_5_Template, 4, 6, "ng-template", null, 0, ɵɵtemplateRefExtractor)(7, BreadcrumbComponent_ng_template_7_Template, 4, 5, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵrepeater(ɵɵpipeBind1(4, 0, ctx.service.items$));
    }
  },
  dependencies: [ClickOutsideDirective, IconComponent, NgTemplateOutlet, RouterLink, AsyncPipe, ToObservablePipe],
  encapsulation: 2
});
var BreadcrumbComponent = _BreadcrumbComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbComponent, [{
    type: Component,
    args: [{
      selector: "lpx-breadcrumb",
      encapsulation: ViewEncapsulation.None,
      imports: [ClickOutsideDirective, IconComponent, NgTemplateOutlet, RouterLink, AsyncPipe, ToObservablePipe],
      template: '<nav aria-label="breadcrumb">\r\n  <ol class="lpx-breadcrumb">\r\n    @for (item of service.items$ | async; track $index; let last = $last) {\r\n      <li\r\n        class="lpx-breadcrumb-item"\r\n        (click)="onClick(item)"\r\n        [class.expanded]="item.expanded"\r\n        (lpxClickOutside)="item.expanded = false"\r\n      >\r\n        @if (item.icon) {\r\n          <lpx-icon\r\n            class="lpx-breadcrumb-item-icon"\r\n            [iconClass]="item.icon"\r\n          ></lpx-icon>\r\n        }\r\n        <ng-container\r\n          *ngTemplateOutlet="\r\n            item.children?.length ? textTemplate : linkTemplate;\r\n            context: { $implicit: item }\r\n          "\r\n        ></ng-container>\r\n      </li>\r\n      @if (!last) {\r\n        <li class="lpx-breadcrumb-separator">\r\n          <lpx-icon iconClass="bi bi-chevron-right"></lpx-icon>\r\n        </li>\r\n      }\r\n    }\r\n  </ol>\r\n</nav>\r\n\r\n<ng-template #linkTemplate let-item>\r\n  <a [routerLink]="item.link"> {{ item.text | toObservable | async }} </a>\r\n</ng-template>\r\n<ng-template #textTemplate let-item>\r\n  <span class="lpx-breadcrumb-item-text">\r\n    {{ item.text | toObservable | async }}\r\n  </span>\r\n</ng-template>\r\n'
    }]
  }], null, null);
})();
var _ToObservableModule = class _ToObservableModule {
};
_ToObservableModule.ɵfac = function ToObservableModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToObservableModule)();
};
_ToObservableModule.ɵmod = ɵɵdefineNgModule({
  type: _ToObservableModule,
  imports: [CommonModule, ToObservablePipe],
  exports: [ToObservablePipe]
});
_ToObservableModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var ToObservableModule = _ToObservableModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToObservableModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ToObservablePipe],
      exports: [ToObservablePipe]
    }]
  }], null, null);
})();
var _LpxClickOutsideModule = class _LpxClickOutsideModule {
};
_LpxClickOutsideModule.ɵfac = function LpxClickOutsideModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LpxClickOutsideModule)();
};
_LpxClickOutsideModule.ɵmod = ɵɵdefineNgModule({
  type: _LpxClickOutsideModule,
  imports: [CommonModule, ClickOutsideDirective],
  exports: [ClickOutsideDirective]
});
_LpxClickOutsideModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var LpxClickOutsideModule = _LpxClickOutsideModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxClickOutsideModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ClickOutsideDirective],
      exports: [ClickOutsideDirective]
    }]
  }], null, null);
})();
var exportedDeclarations$1 = [BreadcrumbComponent];
var _LpxBreadcrumbModule = class _LpxBreadcrumbModule {
  static forRoot() {
    return {
      ngModule: _LpxBreadcrumbModule,
      providers: [provideLpxBreadcrumb()]
    };
  }
};
_LpxBreadcrumbModule.ɵfac = function LpxBreadcrumbModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LpxBreadcrumbModule)();
};
_LpxBreadcrumbModule.ɵmod = ɵɵdefineNgModule({
  type: _LpxBreadcrumbModule,
  imports: [CommonModule, LpxIconModule, ToObservableModule, RouterModule, LpxClickOutsideModule, BreadcrumbComponent],
  exports: [BreadcrumbComponent]
});
_LpxBreadcrumbModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, LpxIconModule, ToObservableModule, RouterModule, LpxClickOutsideModule]
});
var LpxBreadcrumbModule = _LpxBreadcrumbModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxBreadcrumbModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, LpxIconModule, ToObservableModule, RouterModule, LpxClickOutsideModule, ...exportedDeclarations$1],
      exports: [...exportedDeclarations$1]
    }]
  }], null, null);
})();
var CONTENT_BEFORE_ROUTES = new InjectionToken("CONTENT_BEFORE_ROUTES");
var CONTENT_AFTER_ROUTES = new InjectionToken("CONTENT_AFTER_ROUTES");
var LPX_MENU_ITEMS = new InjectionToken("LPX_MENU_ITEMS");
function createGroupMap(list, othersGroupKey, skipGroupCheck = false) {
  if (!skipGroupCheck && (!isArray(list) || !list.some((node) => Boolean(node.group)))) return void 0;
  const mapGroup = /* @__PURE__ */ new Map();
  for (const node of list) {
    const group = node?.group || othersGroupKey;
    if (typeof group !== "string") {
      throw new Error(`Invalid group: ${group}`);
    }
    const items = mapGroup.get(group) || [];
    items.push(node);
    mapGroup.set(group, items);
  }
  return mapGroup;
}
function getItemsFromGroup(list, pred) {
  return list?.reduce((acc, {
    items
  }) => [...acc, ...pred ? items.filter(pred) : items], []);
}
var OTHERS_GROUP_KEY = "AbpUi::OthersGroup";
var _NavbarService = class _NavbarService {
  constructor() {
    this.router = inject(Router);
    this.menuItems = inject(LPX_MENU_ITEMS);
    this.store = new DataStore(this.addContainerLinks(this.menuItems));
    this.navbarItems$ = this.store.sliceState((state2) => state2);
    this.groupedNavbarItems$ = this.store.sliceState((state2) => state2).pipe(map((items) => {
      if (!items.some((f) => !!f.group)) {
        return;
      }
      const map2 = createGroupMap(items, OTHERS_GROUP_KEY) || [];
      return Array.from(map2, ([group, items2]) => ({
        group,
        items: items2
      }));
    }));
    this.expandItemByLink$().pipe(take(1)).subscribe();
  }
  addNavbarItems(...menuItems) {
    this.store.set([...this.store.state, ...this.addContainerLinks(menuItems)]);
  }
  setNavbarItems(...menuItems) {
    this.store.set([...this.addContainerLinks(menuItems)]);
  }
  // TODO: muhammed: refactor this method to be readable
  addChildren(id, ...menuItems) {
    const parent = this.findById(id, this.store.state);
    const update = (items, location, link = "") => {
      const i = location.shift();
      return items.reduce((acc, item, index) => {
        return [...acc, ...index === i ? [__spreadProps(__spreadValues({}, item), {
          children: !location.length ? [...item.children || [], ...this.addContainerLinks(menuItems, `${link}/${item.containerLink}`)] : update(item.children || [], location, `${link}/${item.containerLink}`)
        })] : [item]];
      }, []);
    };
    const updated = update(this.store.state, parent.location);
    this.store.patch(updated);
  }
  findByLink(link, items) {
    return this.findByProp("link", link, items);
  }
  expandItemByLink$() {
    return this.router.events.pipe(filter((e) => e instanceof NavigationEnd), tap(() => this.expandItems()));
  }
  expandItems() {
    const route = this.getRouteItem();
    if (route?.item) {
      const expanded = this.calculateExpandState(this.store.state, route.location);
      this.store.patch(expanded);
    }
  }
  getRouteItem() {
    return this.findByLink(this.router.url);
  }
  calculateExpandState(items, indexes) {
    const matchIndex = indexes.shift();
    return items.reduce((acc, item, index) => {
      if (index === matchIndex) {
        return [...acc, __spreadProps(__spreadValues({}, item), {
          expanded: true,
          selected: true,
          children: this.calculateExpandState(item.children || [], indexes)
        })];
      }
      const newItem = __spreadValues(__spreadValues({}, item), item.children ? {
        children: this.collapseChildren(item.children)
      } : {});
      return [...acc, __spreadProps(__spreadValues({}, newItem), {
        expanded: false,
        selected: false
      })];
    }, []);
  }
  collapseChildren(children) {
    return [...children.map((child) => __spreadProps(__spreadValues({}, child), {
      expanded: false,
      selected: false,
      children: child.children ? this.collapseChildren(child.children) : []
    }))];
  }
  findById(id, items) {
    return this.findByProp("id", id, items);
  }
  findByProp(prop, value, items, location = []) {
    const navbarItems = items || this.store.state;
    const itemIndex = navbarItems.findIndex((i) => i[prop] === value);
    let item;
    if (itemIndex === -1) {
      navbarItems.forEach((i, index) => {
        if (i.children) {
          const child = this.findByProp(prop, value, i.children, [...location, index]);
          if (child?.item) {
            item = child.item;
            location = child.location;
          }
        }
      });
    } else {
      item = navbarItems[itemIndex];
      location.push(itemIndex);
    }
    return {
      item,
      location
    };
  }
  addContainerLinks(items, link = "") {
    return items.map((item) => __spreadProps(__spreadValues(__spreadValues({}, item), item.link && link ? {
      link: `${link}/${item.link}`
    } : {}), {
      children: this.addContainerLinks(item.children || [], `${link ? link + "/" : ""}${item.containerLink || ""}`)
    }));
  }
};
_NavbarService.ɵfac = function NavbarService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavbarService)();
};
_NavbarService.ɵprov = ɵɵdefineInjectable({
  token: _NavbarService,
  factory: _NavbarService.ɵfac,
  providedIn: "root"
});
var NavbarService = _NavbarService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _BreadcrumbRouteListenerService = class _BreadcrumbRouteListenerService {
  constructor() {
    this.navbarService = inject(NavbarService);
    this.router = inject(Router);
    this.routes = inject(RoutesService);
    this.breadcrumbService = inject(BreadcrumbService);
    this.localizationService = inject(LocalizationService);
  }
  subscribeRoute() {
    combineLatest([this.router.events.pipe(filter((event) => event instanceof NavigationEnd)), this.navbarService.navbarItems$.pipe(filter((items) => !!items.length))]).subscribe(([_navigationEvent, items]) => {
      const currentPath = this.router.url;
      let activeItem = this.navbarService.findByLink(currentPath);
      let breadcrumbItems;
      if (!activeItem.item) {
        const item = this.findItemByTreeNode(currentPath);
        if (item) {
          breadcrumbItems = this.createBreadcrumbTrail(item);
          this.breadcrumbService.setItems(breadcrumbItems);
          return;
        }
        activeItem = this.navbarService.findByLink("/");
      }
      breadcrumbItems = activeItem.location.reduce((acc, itemIndex) => {
        const parent = acc[acc.length - 1]?.children || items;
        const item = parent[itemIndex];
        return [...acc, __spreadProps(__spreadValues({}, item), {
          siblings: parent
        })];
      }, []);
      this.breadcrumbService.setItems(this.mapNavbarItemToBreadcrumbItem(breadcrumbItems));
    });
  }
  mapNavbarItemToBreadcrumbItem(items) {
    return items.map(({
      breadcrumbText,
      text,
      link,
      icon,
      siblings
    }) => ({
      text: breadcrumbText || text || "",
      link,
      icon,
      children: this.mapNavbarItemToBreadcrumbItem(siblings || [])
    }));
  }
  findItemByTreeNode(path) {
    const {
      tree,
      search: boundSearch
    } = {
      tree: this.routes.tree,
      search: this.routes.search.bind(this.routes)
    };
    const treeNode = boundSearch({
      path
    }, tree);
    return treeNode;
  }
  createBreadcrumbTrail(item) {
    const trail = [];
    let current = item;
    while (current && (current.breadcrumbText || current.name)) {
      trail.push({
        text: this.localizationService.instant(current.breadcrumbText || current.name),
        icon: current.iconClass
      });
      current = current.parent;
    }
    return trail.reverse();
  }
};
_BreadcrumbRouteListenerService.ɵfac = function BreadcrumbRouteListenerService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BreadcrumbRouteListenerService)();
};
_BreadcrumbRouteListenerService.ɵprov = ɵɵdefineInjectable({
  token: _BreadcrumbRouteListenerService,
  factory: _BreadcrumbRouteListenerService.ɵfac,
  providedIn: "root"
});
var BreadcrumbRouteListenerService = _BreadcrumbRouteListenerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbRouteListenerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _LogoPanelDirective = class _LogoPanelDirective {
  constructor(template) {
    this.template = template;
  }
};
_LogoPanelDirective.ɵfac = function LogoPanelDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LogoPanelDirective)(ɵɵdirectiveInject(TemplateRef));
};
_LogoPanelDirective.ɵdir = ɵɵdefineDirective({
  type: _LogoPanelDirective,
  selectors: [["ng-template", "lpx-logo-panel", ""]]
});
var LogoPanelDirective = _LogoPanelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LogoPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-logo-panel]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _TranslatePipe = class _TranslatePipe {
  constructor() {
    this.lpxThemeTranslateService = inject(LpxThemeTranslateService);
  }
  transform(value, ...args) {
    return this.lpxThemeTranslateService.translate$(value, args);
  }
};
_TranslatePipe.ɵfac = function TranslatePipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TranslatePipe)();
};
_TranslatePipe.ɵpipe = ɵɵdefinePipe({
  name: "lpxTranslate",
  type: _TranslatePipe,
  pure: true
});
var TranslatePipe = _TranslatePipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslatePipe, [{
    type: Pipe,
    args: [{
      name: "lpxTranslate"
    }]
  }], null, null);
})();
var collapseY = animation([style({
  height: "*",
  overflow: "hidden",
  "box-sizing": "border-box"
}), animate("{{ time }} {{ easing }}", style({
  height: "0",
  padding: "0px"
}))], {
  params: {
    time: "350ms",
    easing: "ease"
  }
});
var collapseYWithMargin = animation([style({
  "margin-top": "0"
}), animate("{{ time }} {{ easing }}", style({
  "margin-left": "-100%"
}))], {
  params: {
    time: "500ms",
    easing: "ease"
  }
});
var collapseX = animation([style({
  width: "*",
  overflow: "hidden",
  "box-sizing": "border-box"
}), animate("{{ time }} {{ easing }}", style({
  width: "0",
  padding: "0px"
}))], {
  params: {
    time: "350ms",
    easing: "ease"
  }
});
var expandY = animation([style({
  height: "0",
  overflow: "hidden",
  "box-sizing": "border-box"
}), animate("{{ time }} {{ easing }}", style({
  height: "*",
  padding: "*"
}))], {
  params: {
    time: "350ms",
    easing: "ease"
  }
});
var expandYWithMargin = animation([style({
  "margin-top": "-100%"
}), animate("{{ time }} {{ easing }}", style({
  "margin-top": "0"
}))], {
  params: {
    time: "500ms",
    easing: "ease"
  }
});
var expandX = animation([style({
  width: "0",
  overflow: "hidden",
  "box-sizing": "border-box"
}), animate("{{ time }} {{ easing }}", style({
  width: "*",
  padding: "*"
}))], {
  params: {
    time: "350ms",
    easing: "ease"
  }
});
var collapse = trigger("collapse", [state("collapsed", style({
  height: "0",
  overflow: "hidden"
})), state("expanded", style({
  height: "*",
  overflow: "hidden"
})), transition("expanded => collapsed", useAnimation(collapseY)), transition("collapsed => expanded", useAnimation(expandY))]);
var collapseWithMargin = trigger("collapseWithMargin", [state("collapsed", style({
  "margin-top": "-100%"
})), state("expanded", style({
  "margin-top": "0"
})), transition("expanded => collapsed", useAnimation(collapseYWithMargin), {
  params: {
    time: "400ms",
    easing: "linear"
  }
}), transition("collapsed => expanded", useAnimation(expandYWithMargin))]);
var collapseLinearWithMargin = trigger("collapseLinearWithMargin", [state("collapsed", style({
  "margin-top": "-100vh"
})), state("expanded", style({
  "margin-top": "0"
})), transition("expanded => collapsed", useAnimation(collapseYWithMargin, {
  params: {
    time: "200ms",
    easing: "linear"
  }
})), transition("collapsed => expanded", useAnimation(expandYWithMargin, {
  params: {
    time: "250ms",
    easing: "linear"
  }
}))]);
var _SubNavbarComponent = class _SubNavbarComponent {
  constructor() {
    this.injector = inject(Injector);
    this.routerItem = input();
    this.routeClick = new EventEmitter();
    this.expand = new EventEmitter();
  }
  onItemClick(menuItem) {
    let action$ = of(true);
    if (menuItem.action) {
      const result = menuItem.action();
      action$ = getStream$(result);
    }
    action$.pipe(take(1)).subscribe((result) => {
      if (result) {
        this.processItemClick(menuItem);
      }
    });
  }
  onChildExpand(child) {
    if (child.expanded) {
      this.item?.children?.filter((otherChild) => otherChild !== child).forEach((otherChild) => {
        otherChild.expanded = false;
        otherChild.selected = false;
      });
    }
  }
  processItemClick(menuItem) {
    if (menuItem.children?.length) {
      menuItem.expanded = !menuItem.expanded;
      this.expand.emit(menuItem);
      return;
    }
    this.routeClick.emit(menuItem);
    if (!this.routerItem()) {
      menuItem.selected = true;
    }
  }
};
_SubNavbarComponent.ɵfac = function SubNavbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SubNavbarComponent)();
};
_SubNavbarComponent.ɵcmp = ɵɵdefineComponent({
  type: _SubNavbarComponent,
  selectors: [["lpx-sub-navbar"]],
  inputs: {
    item: "item",
    routerItem: [1, "routerItem"]
  },
  outputs: {
    routeClick: "routeClick",
    expand: "expand"
  },
  decls: 4,
  vars: 1,
  consts: [["defaultTemplate", ""], ["textTmpl", ""], [4, "ngComponentOutlet", "ngComponentOutletInjector"], [4, "ngTemplateOutlet"], [1, "lpx-menu-item-link", 3, "click", "routerLink"], [1, "lpx-menu-item-icon", 3, "iconClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "dd-icon", "hidden-in-hover-trigger", 3, "iconClass"], [1, "lpx-inner-menu", "hidden-in-hover-trigger", 3, "collapsed"], [1, "lpx-menu-item-text", "hidden-in-hover-trigger"], [1, "lpx-inner-menu", "hidden-in-hover-trigger"], [1, "lpx-inner-menu-item"], ["class", "lpx-inner-menu-item", 4, "lpxVisible"], [3, "routeClick", "expand", "item"]],
  template: function SubNavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵconditionalCreate(0, SubNavbarComponent_Conditional_0_Template, 1, 2, "ng-container")(1, SubNavbarComponent_Conditional_1_Template, 1, 1, "ng-container");
      ɵɵtemplate(2, SubNavbarComponent_ng_template_2_Template, 7, 12, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.item.component ? 0 : 1);
    }
  },
  dependencies: [_SubNavbarComponent, NgComponentOutlet, NgTemplateOutlet, RouterLink, IconComponent, LpxVisibleDirective, AsyncPipe, TranslatePipe, LocalizationPipe],
  encapsulation: 2,
  data: {
    animation: [collapse]
  }
});
var SubNavbarComponent = _SubNavbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubNavbarComponent, [{
    type: Component,
    args: [{
      selector: "lpx-sub-navbar",
      encapsulation: ViewEncapsulation.None,
      animations: [collapse],
      imports: [NgComponentOutlet, NgTemplateOutlet, RouterLink, IconComponent, LpxVisibleDirective, AsyncPipe, TranslatePipe, LocalizationPipe],
      template: `@if (item.component) {\r
  <ng-container *ngComponentOutlet="item.component; injector: injector" />\r
} @else {\r
  <ng-container *ngTemplateOutlet="defaultTemplate" />\r
}\r
\r
<ng-template #defaultTemplate>\r
  <a\r
    class="lpx-menu-item-link"\r
    [routerLink]="item.link"\r
    [class.selected]="item.selected"\r
    [class.expanded]="item.children?.length && item.expanded"\r
    (click)="onItemClick(item)"\r
  >\r
    @if (item.icon) {\r
      <lpx-icon class="lpx-menu-item-icon" [iconClass]="item.icon" />\r
    }\r
\r
    <ng-container\r
      *ngTemplateOutlet="\r
        item.template || textTmpl;\r
        context: { $implicit: item }\r
      "\r
    />\r
\r
    <ng-template #textTmpl>\r
      @if (item.text) {\r
        @let isToolbarItem = item.text.split('::').length > 1;\r
        <span class="lpx-menu-item-text hidden-in-hover-trigger">\r
          @if (isToolbarItem) {\r
            {{ item.text | abpLocalization }}\r
          } @else {\r
            {{ item.text | lpxTranslate | async }}\r
          }\r
        </span>\r
      }\r
    </ng-template>\r
\r
    @if (item.children?.length) {\r
      <lpx-icon\r
        [iconClass]="item.expanded ? 'chevronUp' : 'chevronDown'"\r
        class="dd-icon hidden-in-hover-trigger"\r
      />\r
    }\r
  </a>\r
\r
  @if (item.children?.length) {\r
    <ul\r
      class="lpx-inner-menu hidden-in-hover-trigger"\r
      [class.collapsed]="!item.expanded"\r
    >\r
      @for (child of item.children; track $index) {\r
        <li\r
          class="lpx-inner-menu-item"\r
          *lpxVisible="!child.visible || child.visible(child, injector)"\r
        >\r
          <lpx-sub-navbar\r
            [item]="child"\r
            (routeClick)="this.routeClick.emit($event)"\r
            (expand)="onChildExpand($event)"\r
          />\r
        </li>\r
      }\r
    </ul>\r
  }\r
</ng-template>\r
`
    }]
  }], null, {
    item: [{
      type: Input
    }],
    routeClick: [{
      type: Output
    }],
    expand: [{
      type: Output
    }]
  });
})();
var _NavbarRoutesComponent = class _NavbarRoutesComponent {
  constructor() {
    this.injector = inject(Injector);
    this.routesService = inject(RoutesService2);
    this._sourceItems = signal([]);
    this._processedItems = computed(() => {
      const url = this.routesService.currentNavigation().split("?")[0];
      const items = this._sourceItems();
      if (!items?.length || !url) {
        return items;
      }
      this.fixNavbarItems(url, items);
      return items;
    });
    this.routerItem = input();
    this.routeClick = new EventEmitter();
    this.isExpandedOrSelected = (item) => !!(item.expanded || item.selected);
  }
  set navbarItems(value) {
    this._sourceItems.set(value);
  }
  get navbarItems() {
    return this._processedItems();
  }
  get itemsFromGroup() {
    if (!this.groupedItems) {
      return void 0;
    }
    return getItemsFromGroup(this.groupedItems);
  }
  onSubnavbarExpand(menuItem, menuItems) {
    if (menuItem.expanded) {
      const items = this.itemsFromGroup || menuItems;
      if (!items) {
        return;
      }
      items.filter((item) => item !== menuItem).forEach((item) => item.expanded = false);
    }
  }
  onRouteClick(menuItem, menuItems) {
    const expandedItems = menuItems?.filter(this.isExpandedOrSelected);
    const expandedGroupItems = this.itemsFromGroup?.filter(this.isExpandedOrSelected);
    const items = expandedGroupItems || expandedItems;
    if (items) {
      items.filter((item) => item !== menuItem).reduce((acc, item) => {
        return [...acc, item, ...this.flatChildren(item.children || [])];
      }, [])?.filter((item) => !this.checkChildrenIncludesItem(item, menuItem) && item !== menuItem).forEach((item) => {
        item.selected = false;
        item.expanded = false;
      });
    }
    this.routeClick.emit(menuItem);
  }
  checkChildrenIncludesItem(item, menuItem) {
    return item.children?.reduce((acc, child) => acc || child === menuItem || this.checkChildrenIncludesItem(child, menuItem), false) || false;
  }
  flatChildren(menuItems) {
    return menuItems?.reduce((acc, item) => {
      return [...acc, item, ...this.flatChildren(item.children || [])];
    }, []) || [];
  }
  fixNavbarItems(currentUrl, items) {
    items.forEach((item) => {
      const {
        link,
        children
      } = item;
      const itemUrl = link?.split("?")[0];
      if (children?.length) {
        this.fixNavbarItems(currentUrl, children);
        const hasActiveDescendant = this.hasActiveDescendant(children, currentUrl);
        const isInActiveChain = hasActiveDescendant || itemUrl === currentUrl;
        if (isInActiveChain) {
          item.expanded = true;
        } else {
          const hasExpandedChildren = children.some((child) => child.expanded);
          if (!hasExpandedChildren) {
            item.expanded = false;
          }
        }
        item.selected = false;
      } else {
        item.selected = itemUrl === currentUrl;
      }
    });
  }
  hasActiveDescendant(items, currentUrl) {
    return items.some((item) => {
      const itemUrl = item.link?.split("?")[0];
      if (item.selected || itemUrl === currentUrl) {
        return true;
      }
      if (item.children?.length) {
        return this.hasActiveDescendant(item.children, currentUrl);
      }
      return false;
    });
  }
};
_NavbarRoutesComponent.ɵfac = function NavbarRoutesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavbarRoutesComponent)();
};
_NavbarRoutesComponent.ɵcmp = ɵɵdefineComponent({
  type: _NavbarRoutesComponent,
  selectors: [["lpx-navbar-routes"]],
  inputs: {
    navbarItems: "navbarItems",
    groupedItems: "groupedItems",
    routerItem: [1, "routerItem"]
  },
  outputs: {
    routeClick: "routeClick"
  },
  decls: 9,
  vars: 1,
  consts: [["defaultRoute", ""], ["groupText", ""], ["itemTemplate", ""], [1, "lpx-nav-menu"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], [1, "group-menu-item", "hidden-in-hover-trigger"], ["class", "outer-menu-item", 4, "lpxVisible"], [1, "outer-menu-item"], [3, "expand", "routeClick", "item", "routerItem"]],
  template: function NavbarRoutesComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ul", 3);
      ɵɵconditionalCreate(1, NavbarRoutesComponent_Conditional_1_Template, 2, 0)(2, NavbarRoutesComponent_Conditional_2_Template, 1, 1, "ng-container");
      ɵɵelementEnd();
      ɵɵtemplate(3, NavbarRoutesComponent_ng_template_3_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(5, NavbarRoutesComponent_ng_template_5_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(7, NavbarRoutesComponent_ng_template_7_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵconditional(ctx.groupedItems && ctx.groupedItems.length ? 1 : 2);
    }
  },
  dependencies: [NgTemplateOutlet, LpxVisibleDirective, SubNavbarComponent, AsyncPipe, TranslatePipe],
  encapsulation: 2
});
var NavbarRoutesComponent = _NavbarRoutesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarRoutesComponent, [{
    type: Component,
    args: [{
      selector: "lpx-navbar-routes",
      encapsulation: ViewEncapsulation.None,
      imports: [NgTemplateOutlet, LpxVisibleDirective, SubNavbarComponent, AsyncPipe, TranslatePipe],
      template: '<ul class="lpx-nav-menu">\r\n  @if (groupedItems && groupedItems.length) {\r\n    @for (item of groupedItems; track $index) {\r\n      <ng-container\r\n        *ngTemplateOutlet="groupText; context: { $implicit: item }"\r\n      />\r\n\r\n      @for (navbarItem of item.items; track $index) {\r\n        <ng-container\r\n          *ngTemplateOutlet="itemTemplate; context: { $implicit: navbarItem }"\r\n        />\r\n      }\r\n    }\r\n  } @else {\r\n    <ng-container *ngTemplateOutlet="defaultRoute" />\r\n  }\r\n</ul>\r\n\r\n<ng-template #defaultRoute>\r\n  @for (item of navbarItems; track $index) {\r\n    <ng-container\r\n      *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"\r\n    />\r\n  }\r\n</ng-template>\r\n\r\n<ng-template #groupText let-item>\r\n  @if (item.items.length) {\r\n    <li class="group-menu-item hidden-in-hover-trigger">\r\n      {{ item.group | lpxTranslate | async }}\r\n    </li>\r\n  }\r\n</ng-template>\r\n\r\n<ng-template #itemTemplate let-item>\r\n  <li\r\n    class="outer-menu-item"\r\n    *lpxVisible="!item.visible || item.visible(item, injector)"\r\n  >\r\n    <lpx-sub-navbar\r\n      [item]="item"\r\n      (expand)="onSubnavbarExpand($event, navbarItems)"\r\n      (routeClick)="onRouteClick($event, navbarItems)"\r\n      [routerItem]="routerItem()"\r\n    />\r\n  </li>\r\n</ng-template>\r\n'
    }]
  }], null, {
    navbarItems: [{
      type: Input
    }],
    groupedItems: [{
      type: Input
    }],
    routeClick: [{
      type: Output
    }]
  });
})();
var _NavbarRoutesDirective = class _NavbarRoutesDirective {
};
_NavbarRoutesDirective.ɵfac = function NavbarRoutesDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavbarRoutesDirective)();
};
_NavbarRoutesDirective.ɵdir = ɵɵdefineDirective({
  type: _NavbarRoutesDirective,
  selectors: [["", "lpx-navbar-routes", ""], ["", "lpxNavbarRoutes", ""]],
  exportAs: ["lpxNavbarRoutes"]
});
var NavbarRoutesDirective = _NavbarRoutesDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarRoutesDirective, [{
    type: Directive,
    args: [{
      selector: "[lpx-navbar-routes],[lpxNavbarRoutes]",
      exportAs: "lpxNavbarRoutes"
    }]
  }], null, null);
})();
var _NavbarComponent = class _NavbarComponent {
  constructor() {
    this.layoutService = inject(LayoutService);
    this.platformId = inject(PLATFORM_ID);
    this.service = inject(NavbarService);
    this.injector = inject(Injector);
    this.didResized = false;
    this.initialHover = false;
    this.showFilterMenu$ = this.service.navbarItems$.pipe(map((items) => !!items.length));
    this.contentBefore = this.flatContents(CONTENT_BEFORE_ROUTES);
    this.contentAfter = this.flatContents(CONTENT_AFTER_ROUTES);
  }
  toggleSidebarHover() {
    this.didResized = true;
    this.layoutService.toggleClass("hover-trigger");
    this.initialHover = !this.initialHover;
    if (this.initialHover) {
      this.layoutService.addClass("initial-hover");
    } else {
      this.layoutService.removeClass("initial-hover");
    }
  }
  handleInitialHover() {
    if (this.initialHover) {
      this.layoutService.removeClass("initial-hover");
    }
  }
  ngAfterViewChecked() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    if (this.didResized) {
      this.didResized = false;
      window.dispatchEvent(new Event("resize"));
    }
  }
  flatContents(token) {
    const contents = this.injector.get(token, []);
    return contents.reduce((acc, val) => acc.concat(val), []);
  }
};
_NavbarComponent.ɵfac = function NavbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavbarComponent)();
};
_NavbarComponent.ɵcmp = ɵɵdefineComponent({
  type: _NavbarComponent,
  selectors: [["lpx-navbar"]],
  contentQueries: function NavbarComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NavbarRoutesDirective, 5, TemplateRef);
      ɵɵcontentQuery(dirIndex, LogoPanelDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.routesTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.logoPanel = _t.first);
    }
  },
  decls: 16,
  vars: 17,
  consts: [["defaultRouteTemplate", ""], ["customContentTemplate", ""], ["defaultLogo", ""], [1, "lpx-nav", 3, "mouseenter"], [1, "lpx-logo-container"], [4, "ngTemplateOutlet"], ["iconClass", "bi bi-filter-left", 1, "menu-collapse-icon", "hidden-in-hover-trigger", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "navbarItems", "groupedItems", "routerItem"], [4, "ngComponentOutlet", "ngComponentOutletInjector"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "nav", 3);
      ɵɵlistener("mouseenter", function NavbarComponent_Template_nav_mouseenter_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.handleInitialHover());
      });
      ɵɵelementStart(1, "div", 4);
      ɵɵtemplate(2, NavbarComponent_ng_container_2_Template, 1, 0, "ng-container", 5);
      ɵɵelementStart(3, "lpx-icon", 6);
      ɵɵlistener("click", function NavbarComponent_Template_lpx_icon_click_3_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.toggleSidebarHover());
      });
      ɵɵelementEnd()();
      ɵɵconditionalCreate(4, NavbarComponent_Conditional_4_Template, 1, 4, "ng-container");
      ɵɵpipe(5, "async");
      ɵɵtemplate(6, NavbarComponent_ng_container_6_Template, 1, 0, "ng-container", 7);
      ɵɵpipe(7, "async");
      ɵɵpipe(8, "async");
      ɵɵtemplate(9, NavbarComponent_ng_container_9_Template, 1, 0, "ng-container", 7);
      ɵɵelementEnd();
      ɵɵtemplate(10, NavbarComponent_ng_template_10_Template, 1, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor)(12, NavbarComponent_ng_template_12_Template, 2, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor)(14, NavbarComponent_ng_template_14_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const defaultRouteTemplate_r8 = ɵɵreference(11);
      const customContentTemplate_r3 = ɵɵreference(13);
      const defaultLogo_r9 = ɵɵreference(15);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", (ctx.logoPanel == null ? null : ctx.logoPanel.template) || defaultLogo_r9);
      ɵɵadvance(2);
      ɵɵconditional(ɵɵpipeBind1(5, 6, ctx.showFilterMenu$) ? 4 : -1);
      ɵɵadvance(2);
      ɵɵproperty("ngTemplateOutlet", ctx.routesTemplate || defaultRouteTemplate_r8)("ngTemplateOutletContext", ɵɵpureFunction2(12, _c1, ɵɵpipeBind1(7, 8, ctx.service.navbarItems$), ɵɵpipeBind1(8, 10, ctx.service.groupedNavbarItems$)));
      ɵɵadvance(3);
      ɵɵproperty("ngTemplateOutlet", customContentTemplate_r3)("ngTemplateOutletContext", ɵɵpureFunction1(15, _c0, ctx.contentAfter));
    }
  },
  dependencies: [NgTemplateOutlet, IconComponent, NavbarRoutesComponent, NgComponentOutlet, BrandLogoComponent, AsyncPipe],
  encapsulation: 2
});
var NavbarComponent = _NavbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{
      selector: "lpx-navbar",
      encapsulation: ViewEncapsulation.None,
      imports: [NgTemplateOutlet, IconComponent, NavbarRoutesComponent, NgComponentOutlet, BrandLogoComponent, AsyncPipe],
      template: '<nav class="lpx-nav" (mouseenter)="handleInitialHover()">\r\n  <div class="lpx-logo-container">\r\n    <ng-container\r\n      *ngTemplateOutlet="logoPanel?.template || defaultLogo"\r\n    ></ng-container>\r\n    <lpx-icon\r\n      class="menu-collapse-icon hidden-in-hover-trigger"\r\n      iconClass="bi bi-filter-left"\r\n      (click)="toggleSidebarHover()"\r\n    ></lpx-icon>\r\n  </div>\r\n\r\n  @if (showFilterMenu$ | async) {\r\n    <ng-container\r\n      *ngTemplateOutlet="\r\n        customContentTemplate;\r\n        context: { $implicit: contentBefore }\r\n      "\r\n    ></ng-container>\r\n  }\r\n\r\n  <ng-container\r\n    *ngTemplateOutlet="\r\n      routesTemplate || defaultRouteTemplate;\r\n      context: {\r\n        $implicit: service.navbarItems$ | async,\r\n        groupItems: service.groupedNavbarItems$ | async,\r\n      }\r\n    "\r\n  ></ng-container>\r\n\r\n  <ng-container\r\n    *ngTemplateOutlet="\r\n      customContentTemplate;\r\n      context: { $implicit: contentAfter }\r\n    "\r\n  ></ng-container>\r\n</nav>\r\n\r\n<ng-template #defaultRouteTemplate let-items let-groupItems="groupItems">\r\n  <lpx-navbar-routes\r\n    [navbarItems]="items"\r\n    [groupedItems]="groupItems"\r\n    [routerItem]="true"\r\n  ></lpx-navbar-routes>\r\n</ng-template>\r\n\r\n<ng-template #customContentTemplate let-contents>\r\n  @for (component of contents; track $index) {\r\n    <ng-container\r\n      *ngComponentOutlet="component; injector: injector"\r\n    ></ng-container>\r\n  }\r\n</ng-template>\r\n\r\n<ng-template #defaultLogo>\r\n  <lpx-brand-logo />\r\n</ng-template>\r\n'
    }]
  }], () => [], {
    routesTemplate: [{
      type: ContentChild,
      args: [NavbarRoutesDirective, {
        read: TemplateRef
      }]
    }],
    logoPanel: [{
      type: ContentChild,
      args: [LogoPanelDirective]
    }]
  });
})();
var _SafeHtmlPipe = class _SafeHtmlPipe {
  constructor() {
    this.sanitizer = inject(DomSanitizer);
  }
  transform(value) {
    if (!value || typeof value !== "string") return "";
    return this.sanitizer.sanitize(SecurityContext.HTML, value) || "";
  }
};
_SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SafeHtmlPipe)();
};
_SafeHtmlPipe.ɵpipe = ɵɵdefinePipe({
  name: "lpxSafeHtml",
  type: _SafeHtmlPipe,
  pure: true
});
var SafeHtmlPipe = _SafeHtmlPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeHtmlPipe, [{
    type: Pipe,
    args: [{
      name: "lpxSafeHtml",
      standalone: true
    }]
  }], null, null);
})();
var _LpxTranslateModule = class _LpxTranslateModule {
};
_LpxTranslateModule.ɵfac = function LpxTranslateModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LpxTranslateModule)();
};
_LpxTranslateModule.ɵmod = ɵɵdefineNgModule({
  type: _LpxTranslateModule,
  imports: [CommonModule, TranslatePipe],
  exports: [TranslatePipe]
});
_LpxTranslateModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var LpxTranslateModule = _LpxTranslateModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxTranslateModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TranslatePipe],
      exports: [TranslatePipe]
    }]
  }], null, null);
})();
var exportedDeclarations = [NavbarComponent, SubNavbarComponent, NavbarRoutesComponent, NavbarRoutesDirective];
var _LpxNavbarModule = class _LpxNavbarModule {
  /**
   * @deprecated `LpxNavbarModule.forRoot()` is deprecated. You can use `provideLpxCore` **function** instead.
   */
  static forRoot(options = {}) {
    return {
      ngModule: _LpxNavbarModule,
      providers: [provideLpxCore(SKIP_DEFAULTS, withNavbar(options))]
    };
  }
  /**
   * @deprecated `LpxNavbarModule.forChild()` is deprecated. You can use `provideLpxCore` **function** instead.
   */
  static forChild(options = {}) {
    return {
      ngModule: _LpxNavbarModule,
      providers: [provideLpxCore(SKIP_DEFAULTS, withNavbarChild(options))]
    };
  }
};
_LpxNavbarModule.ɵfac = function LpxNavbarModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LpxNavbarModule)();
};
_LpxNavbarModule.ɵmod = ɵɵdefineNgModule({
  type: _LpxNavbarModule,
  imports: [CommonModule, FormsModule, RouterModule, LpxBrandLogoModule, LpxIconModule, ToObservableModule, LpxTranslateModule, LpxVisibleDirective, NavbarComponent, SubNavbarComponent, NavbarRoutesComponent, NavbarRoutesDirective],
  exports: [NavbarComponent, SubNavbarComponent, NavbarRoutesComponent, NavbarRoutesDirective]
});
_LpxNavbarModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, FormsModule, RouterModule, LpxBrandLogoModule, LpxIconModule, ToObservableModule, LpxTranslateModule]
});
var LpxNavbarModule = _LpxNavbarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxNavbarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, RouterModule, LpxBrandLogoModule, LpxIconModule, ToObservableModule, LpxTranslateModule, LpxVisibleDirective, ...exportedDeclarations],
      exports: [...exportedDeclarations]
    }]
  }], null, null);
})();
var _FooterLinksService = class _FooterLinksService {
  constructor() {
    this.store = new DataStore({});
    this.footerInfo$ = this.store.sliceState((state2) => state2);
  }
  setFooterInfo(links) {
    this.store.set(links);
  }
};
_FooterLinksService.ɵfac = function FooterLinksService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FooterLinksService)();
};
_FooterLinksService.ɵprov = ɵɵdefineInjectable({
  token: _FooterLinksService,
  factory: _FooterLinksService.ɵfac,
  providedIn: "root"
});
var FooterLinksService = _FooterLinksService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterLinksService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _FooterComponent = class _FooterComponent {
  constructor() {
    this.service = inject(FooterLinksService);
    this.footerValues$ = this.service.footerInfo$;
  }
};
_FooterComponent.ɵfac = function FooterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FooterComponent)();
};
_FooterComponent.ɵcmp = ɵɵdefineComponent({
  type: _FooterComponent,
  selectors: [["lpx-footer"]],
  decls: 2,
  vars: 3,
  consts: [[1, "lpx-footbar"], [1, "lpx-footbar-copyright"], [3, "routerLink"], [1, "lpx-footbar-solo-links"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵconditionalCreate(0, FooterComponent_Conditional_0_Template, 7, 1, "div", 0);
      ɵɵpipe(1, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      ɵɵconditional((tmp_0_0 = ɵɵpipeBind1(1, 1, ctx.footerValues$)) ? 0 : -1, tmp_0_0);
    }
  },
  dependencies: [RouterLink, AsyncPipe],
  encapsulation: 2
});
var FooterComponent = _FooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{
      selector: "lpx-footer",
      imports: [RouterLink, AsyncPipe],
      template: '@if (footerValues$ | async; as footerValues) {\r\n  <div class="lpx-footbar">\r\n    <div class="lpx-footbar-copyright">\r\n      @if (footerValues.descUrl) {\r\n        <a [routerLink]="[footerValues.descUrl]"> {{ footerValues.desc }}</a>\r\n      } @else {\r\n        <a> {{ footerValues.desc }}</a>\r\n      }\r\n    </div>\r\n    <div class="lpx-footbar-solo-links">\r\n      @for (footerLink of footerValues.footerLinks; track $index) {\r\n        @if (footerLink) {\r\n          <a [routerLink]="[footerLink.link]">{{ footerLink.text }}</a>\r\n        }\r\n      }\r\n    </div>\r\n  </div>\r\n}\r\n'
    }]
  }], null, null);
})();
var _LpxFooterModule = class _LpxFooterModule {
  static forRoot() {
    return {
      ngModule: _LpxFooterModule,
      providers: []
    };
  }
};
_LpxFooterModule.ɵfac = function LpxFooterModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LpxFooterModule)();
};
_LpxFooterModule.ɵmod = ɵɵdefineNgModule({
  type: _LpxFooterModule,
  imports: [CommonModule, RouterModule, FooterComponent],
  exports: [FooterComponent]
});
_LpxFooterModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, RouterModule]
});
var LpxFooterModule = _LpxFooterModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxFooterModule, [{
    type: NgModule,
    args: [{
      exports: [FooterComponent],
      imports: [CommonModule, RouterModule, FooterComponent]
    }]
  }], null, null);
})();
var LpxCoreFeatureKind;
(function(LpxCoreFeatureKind2) {
  LpxCoreFeatureKind2[LpxCoreFeatureKind2["Options"] = 0] = "Options";
  LpxCoreFeatureKind2[LpxCoreFeatureKind2["Icon"] = 1] = "Icon";
  LpxCoreFeatureKind2[LpxCoreFeatureKind2["Language"] = 2] = "Language";
  LpxCoreFeatureKind2[LpxCoreFeatureKind2["Navbar"] = 3] = "Navbar";
  LpxCoreFeatureKind2[LpxCoreFeatureKind2["NavbarChild"] = 4] = "NavbarChild";
  LpxCoreFeatureKind2[LpxCoreFeatureKind2["SkipDefaults"] = 5] = "SkipDefaults";
})(LpxCoreFeatureKind || (LpxCoreFeatureKind = {}));
function makeLpxCoreFeature(kind, providers) {
  return {
    ɵkind: kind,
    ɵproviders: providers
  };
}
var SKIP_DEFAULTS = makeLpxCoreFeature(LpxCoreFeatureKind.SkipDefaults, []);
function withIcon(iconSettings = {}) {
  return makeLpxCoreFeature(LpxCoreFeatureKind.Icon, [{
    provide: LEPTON_X_ICON_SET,
    useValue: iconSettings.iconSet || ICON_MAP
  }]);
}
function withLanguage(languageOptions = {}) {
  return makeLpxCoreFeature(LpxCoreFeatureKind.Language, [{
    provide: LPX_LANGUAGE,
    useValue: languageOptions.languages || []
  }, {
    provide: LPX_TRANSLATE_TOKEN,
    useValue: [LanguageTranslateDefaults],
    multi: true
  }, LanguageService]);
}
function withNavbar(navbarOptions = {}) {
  const {
    menuItems,
    contentBeforeRoutes,
    contentAfterRoutes
  } = navbarOptions;
  return makeLpxCoreFeature(LpxCoreFeatureKind.Navbar, [{
    provide: LPX_MENU_ITEMS,
    useValue: menuItems || []
  }, {
    provide: CONTENT_AFTER_ROUTES,
    useValue: contentAfterRoutes || [],
    multi: true
  }, {
    provide: CONTENT_BEFORE_ROUTES,
    useValue: contentBeforeRoutes || [],
    multi: true
  }]);
}
function withNavbarChild(navbarChildOptions = {}) {
  return makeLpxCoreFeature(LpxCoreFeatureKind.NavbarChild, [{
    provide: CONTENT_AFTER_ROUTES,
    useValue: navbarChildOptions.contentAfterRoutes || [],
    multi: true
  }, {
    provide: CONTENT_BEFORE_ROUTES,
    useValue: navbarChildOptions.contentBeforeRoutes || [],
    multi: true
  }]);
}
function withLpxCoreOptions(options = {}) {
  const {
    responsiveSettings,
    window: window2,
    iconSettings,
    languageSettings,
    navbarSettings,
    listenDirectionChanges
  } = options;
  const iconOptions = withIcon(iconSettings);
  const languageOptions = withLanguage(languageSettings);
  const navbarOptions = withNavbar(navbarSettings);
  return [iconOptions, languageOptions, navbarOptions, makeLpxCoreFeature(LpxCoreFeatureKind.Options, [createDirectionProvider(listenDirectionChanges || true), createResponsiveProvider(responsiveSettings), createWindowProvider(window2)])];
}
function provideLpxBreadcrumb() {
  return provideAppInitializer(() => {
    const breadcrumb = inject(BreadcrumbRouteListenerService);
    breadcrumb.subscribeRoute();
  });
}
function provideLpxCore(...features) {
  const providers = [];
  const skipDefaults = features.some((feature) => feature.ɵkind === LpxCoreFeatureKind.SkipDefaults);
  if (!skipDefaults) {
    providers.push(provideLpxBreadcrumb(), ...LPX_STYLE_PROVIDERS, ...LPX_TRANSLATE_PROVIDERS);
  }
  features.forEach(({
    ɵproviders
  }) => providers.push(...ɵproviders));
  return makeEnvironmentProviders(providers);
}
var _LpxCoreModule = class _LpxCoreModule {
  /**
   * @deprecated `LpxCoreModule.forRoot()` is deprecated. You can use `provideLpxCore` **function** instead.
   */
  static forRoot(options) {
    return {
      ngModule: _LpxCoreModule,
      providers: [provideLpxCore(...withLpxCoreOptions(options))]
    };
  }
};
_LpxCoreModule.ɵfac = function LpxCoreModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LpxCoreModule)();
};
_LpxCoreModule.ɵmod = ɵɵdefineNgModule({
  type: _LpxCoreModule,
  imports: [CommonModule, LpxVisibleDirective]
});
_LpxCoreModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var LpxCoreModule = _LpxCoreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxCoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, LpxVisibleDirective]
    }]
  }], null, null);
})();
var _BreadcrumbPanelDirective = class _BreadcrumbPanelDirective {
  constructor(template) {
    this.template = template;
  }
};
_BreadcrumbPanelDirective.ɵfac = function BreadcrumbPanelDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BreadcrumbPanelDirective)(ɵɵdirectiveInject(TemplateRef));
};
_BreadcrumbPanelDirective.ɵdir = ɵɵdefineDirective({
  type: _BreadcrumbPanelDirective,
  selectors: [["ng-template", "lpx-breadcrumb-panel", ""]]
});
var BreadcrumbPanelDirective = _BreadcrumbPanelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreadcrumbPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-breadcrumb-panel]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _ContentPanelDirective = class _ContentPanelDirective {
  constructor(template) {
    this.template = template;
  }
};
_ContentPanelDirective.ɵfac = function ContentPanelDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContentPanelDirective)(ɵɵdirectiveInject(TemplateRef));
};
_ContentPanelDirective.ɵdir = ɵɵdefineDirective({
  type: _ContentPanelDirective,
  selectors: [["ng-template", "lpx-content", ""]]
});
var ContentPanelDirective = _ContentPanelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-content]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _CurrentUserImagePanelDirective = class _CurrentUserImagePanelDirective {
  constructor(template) {
    this.template = template;
  }
};
_CurrentUserImagePanelDirective.ɵfac = function CurrentUserImagePanelDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CurrentUserImagePanelDirective)(ɵɵdirectiveInject(TemplateRef));
};
_CurrentUserImagePanelDirective.ɵdir = ɵɵdefineDirective({
  type: _CurrentUserImagePanelDirective,
  selectors: [["ng-template", "lpx-current-user-image-panel", ""]]
});
var CurrentUserImagePanelDirective = _CurrentUserImagePanelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrentUserImagePanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-current-user-image-panel]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _CurrentUserPanelDirective = class _CurrentUserPanelDirective {
  constructor(template) {
    this.template = template;
  }
};
_CurrentUserPanelDirective.ɵfac = function CurrentUserPanelDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CurrentUserPanelDirective)(ɵɵdirectiveInject(TemplateRef));
};
_CurrentUserPanelDirective.ɵdir = ɵɵdefineDirective({
  type: _CurrentUserPanelDirective,
  selectors: [["ng-template", "lpx-current-user-panel", ""]]
});
var CurrentUserPanelDirective = _CurrentUserPanelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrentUserPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-current-user-panel]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _FooterPanelDirective = class _FooterPanelDirective {
  constructor(template) {
    this.template = template;
  }
};
_FooterPanelDirective.ɵfac = function FooterPanelDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FooterPanelDirective)(ɵɵdirectiveInject(TemplateRef));
};
_FooterPanelDirective.ɵdir = ɵɵdefineDirective({
  type: _FooterPanelDirective,
  selectors: [["ng-template", "lpx-footer-panel", ""]]
});
var FooterPanelDirective = _FooterPanelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-footer-panel]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _LanguagePanelDirective = class _LanguagePanelDirective {
  constructor(template) {
    this.template = template;
  }
};
_LanguagePanelDirective.ɵfac = function LanguagePanelDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LanguagePanelDirective)(ɵɵdirectiveInject(TemplateRef));
};
_LanguagePanelDirective.ɵdir = ɵɵdefineDirective({
  type: _LanguagePanelDirective,
  selectors: [["ng-template", "lpx-language-panel", ""]]
});
var LanguagePanelDirective = _LanguagePanelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguagePanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-language-panel]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _MobileNavbarPanelDirective = class _MobileNavbarPanelDirective {
  constructor(template) {
    this.template = template;
  }
};
_MobileNavbarPanelDirective.ɵfac = function MobileNavbarPanelDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MobileNavbarPanelDirective)(ɵɵdirectiveInject(TemplateRef));
};
_MobileNavbarPanelDirective.ɵdir = ɵɵdefineDirective({
  type: _MobileNavbarPanelDirective,
  selectors: [["ng-template", "lpx-mobile-navbar-panel", ""]]
});
var MobileNavbarPanelDirective = _MobileNavbarPanelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MobileNavbarPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-mobile-navbar-panel]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _MobileNavbarSettingsPanelDirective = class _MobileNavbarSettingsPanelDirective {
  constructor(template) {
    this.template = template;
  }
};
_MobileNavbarSettingsPanelDirective.ɵfac = function MobileNavbarSettingsPanelDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MobileNavbarSettingsPanelDirective)(ɵɵdirectiveInject(TemplateRef));
};
_MobileNavbarSettingsPanelDirective.ɵdir = ɵɵdefineDirective({
  type: _MobileNavbarSettingsPanelDirective,
  selectors: [["ng-template", "lpx-mobile-navbar-settings-panel", ""]]
});
var MobileNavbarSettingsPanelDirective = _MobileNavbarSettingsPanelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MobileNavbarSettingsPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-mobile-navbar-settings-panel]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _MobileNavbarProfilePanelDirective = class _MobileNavbarProfilePanelDirective {
  constructor(template) {
    this.template = template;
  }
};
_MobileNavbarProfilePanelDirective.ɵfac = function MobileNavbarProfilePanelDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MobileNavbarProfilePanelDirective)(ɵɵdirectiveInject(TemplateRef));
};
_MobileNavbarProfilePanelDirective.ɵdir = ɵɵdefineDirective({
  type: _MobileNavbarProfilePanelDirective,
  selectors: [["ng-template", "lpx-mobile-navbar-profile-panel", ""]]
});
var MobileNavbarProfilePanelDirective = _MobileNavbarProfilePanelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MobileNavbarProfilePanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-mobile-navbar-profile-panel]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _NavbarPanelDirective = class _NavbarPanelDirective {
  constructor(template) {
    this.template = template;
  }
};
_NavbarPanelDirective.ɵfac = function NavbarPanelDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavbarPanelDirective)(ɵɵdirectiveInject(TemplateRef));
};
_NavbarPanelDirective.ɵdir = ɵɵdefineDirective({
  type: _NavbarPanelDirective,
  selectors: [["ng-template", "lpx-navbar-panel", ""]]
});
var NavbarPanelDirective = _NavbarPanelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-navbar-panel]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _NavitemPanelDirective = class _NavitemPanelDirective {
  constructor(template) {
    this.template = template;
  }
};
_NavitemPanelDirective.ɵfac = function NavitemPanelDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NavitemPanelDirective)(ɵɵdirectiveInject(TemplateRef));
};
_NavitemPanelDirective.ɵdir = ɵɵdefineDirective({
  type: _NavitemPanelDirective,
  selectors: [["ng-template", "lpx-navitem-panel", ""]]
});
var NavitemPanelDirective = _NavitemPanelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavitemPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-navitem-panel]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _ToolbarPanelDirective = class _ToolbarPanelDirective {
  constructor(template) {
    this.template = template;
  }
};
_ToolbarPanelDirective.ɵfac = function ToolbarPanelDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToolbarPanelDirective)(ɵɵdirectiveInject(TemplateRef));
};
_ToolbarPanelDirective.ɵdir = ɵɵdefineDirective({
  type: _ToolbarPanelDirective,
  selectors: [["ng-template", "lpx-toolbar-panel", ""]]
});
var ToolbarPanelDirective = _ToolbarPanelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-toolbar-panel]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _TopNavbarPanelDirective = class _TopNavbarPanelDirective {
  constructor(template) {
    this.template = template;
  }
};
_TopNavbarPanelDirective.ɵfac = function TopNavbarPanelDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TopNavbarPanelDirective)(ɵɵdirectiveInject(TemplateRef));
};
_TopNavbarPanelDirective.ɵdir = ɵɵdefineDirective({
  type: _TopNavbarPanelDirective,
  selectors: [["ng-template", "lpx-top-navbar-panel", ""]]
});
var TopNavbarPanelDirective = _TopNavbarPanelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopNavbarPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-top-navbar-panel]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var _SettingsPanelDirective = class _SettingsPanelDirective {
  constructor(template) {
    this.template = template;
  }
};
_SettingsPanelDirective.ɵfac = function SettingsPanelDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingsPanelDirective)(ɵɵdirectiveInject(TemplateRef));
};
_SettingsPanelDirective.ɵdir = ɵɵdefineDirective({
  type: _SettingsPanelDirective,
  selectors: [["ng-template", "lpx-settings-panel", ""]]
});
var SettingsPanelDirective = _SettingsPanelDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsPanelDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[lpx-settings-panel]"
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var declarationsAndExports = [BreadcrumbPanelDirective, ContentPanelDirective, CurrentUserImagePanelDirective, CurrentUserPanelDirective, FooterPanelDirective, LanguagePanelDirective, LogoPanelDirective, MobileNavbarPanelDirective, MobileNavbarSettingsPanelDirective, MobileNavbarProfilePanelDirective, NavbarPanelDirective, NavitemPanelDirective, SettingsPanelDirective, TopNavbarPanelDirective, ToolbarPanelDirective];
var _PanelsModule = class _PanelsModule {
};
_PanelsModule.ɵfac = function PanelsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PanelsModule)();
};
_PanelsModule.ɵmod = ɵɵdefineNgModule({
  type: _PanelsModule,
  imports: [CommonModule, BreadcrumbPanelDirective, ContentPanelDirective, CurrentUserImagePanelDirective, CurrentUserPanelDirective, FooterPanelDirective, LanguagePanelDirective, LogoPanelDirective, MobileNavbarPanelDirective, MobileNavbarSettingsPanelDirective, MobileNavbarProfilePanelDirective, NavbarPanelDirective, NavitemPanelDirective, SettingsPanelDirective, TopNavbarPanelDirective, ToolbarPanelDirective],
  exports: [BreadcrumbPanelDirective, ContentPanelDirective, CurrentUserImagePanelDirective, CurrentUserPanelDirective, FooterPanelDirective, LanguagePanelDirective, LogoPanelDirective, MobileNavbarPanelDirective, MobileNavbarSettingsPanelDirective, MobileNavbarProfilePanelDirective, NavbarPanelDirective, NavitemPanelDirective, SettingsPanelDirective, TopNavbarPanelDirective, ToolbarPanelDirective]
});
_PanelsModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var PanelsModule = _PanelsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ...declarationsAndExports],
      exports: [...declarationsAndExports]
    }]
  }], null, null);
})();
var _ToolbarService = class _ToolbarService {
  constructor() {
    this.store = new DataStore({
      items: []
    });
    this.items$ = this.store.sliceState(({
      items
    }) => items);
  }
  setItems(items) {
    this.store.patch({
      items: items.sort(sortItems)
    });
  }
  addItem(item) {
    this.setItems([...this.store.state.items, item]);
  }
  patchItem(itemId, item) {
    const {
      items
    } = this.store.state;
    const index = items.findIndex(({
      id
    }) => id === itemId);
    if (index === -1) {
      return;
    }
    const updateItems = [...items];
    updateItems[index] = __spreadValues({
      id: itemId
    }, item);
    this.setItems(updateItems);
  }
  removeItem(id) {
    const {
      items
    } = this.store.state;
    const index = items.findIndex((item) => item.id === id);
    if (index === -1) {
      return;
    }
    const updateItems = [...items.slice(0, index), ...items.slice(index + 1)];
    this.store.patch({
      items: updateItems
    });
  }
};
_ToolbarService.ɵfac = function ToolbarService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ToolbarService)();
};
_ToolbarService.ɵprov = ɵɵdefineInjectable({
  token: _ToolbarService,
  factory: _ToolbarService.ɵfac,
  providedIn: "root"
});
var ToolbarService = _ToolbarService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToolbarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  LpxVisibleDirective,
  LanguageTranslateKeys,
  LanguageTranslateDefaults,
  LpxLanguageModule,
  DataStore,
  LPX_LANGUAGE,
  LanguageService,
  LPX_INITIAL_STYLES,
  LPX_STYLE_FINAL,
  LPX_LAYOUT_STYLE_FINAL,
  StyleService,
  createStyleFactory,
  styleLoadFactory,
  createDirectionProvider,
  listenDirectionChange,
  RESPONSIVE_BREAKPOINTS,
  WINDOW,
  ResponsiveService,
  ResponsiveDirective,
  LpxResponsiveModule,
  LPX_RESPONSIVE_BREAKPOINTS_DEFAULTS,
  createResponsiveProvider,
  UserProfileService,
  BodyService,
  LayoutService,
  LPX_TRANSLATE_SERVICE_TOKEN,
  LPX_TRANSLATE_TOKEN,
  sortItems,
  flatArrayDeepToObject,
  getStream$,
  isNullOrUndefined,
  isArray,
  LpxThemeTranslateService,
  DefaultTranslateService,
  LPX_TRANSLATE_SERVICE_PROVIDER,
  LPX_TRANSLATE_PROVIDERS,
  DefaultAuthService,
  LPX_AUTH_SERVICE_TOKEN,
  LPX_AUTH_SERVICE_PROVIDER,
  LpxLocalStorageService,
  RoutesService2 as RoutesService,
  LPX_STYLE_PROVIDERS,
  loadInitialStyles,
  createWindowProvider,
  LOGO_URL_TOKEN,
  LOGO_APP_NAME_TOKEN,
  LpxLogoFeatureKind,
  withEnvironmentOptions,
  provideLogo,
  ICON_MAP,
  LEPTON_X_ICON_SET,
  IconComponent,
  AvatarComponent,
  LpxIconModule,
  LpxAvatarModule,
  Layouts,
  BrandLogoComponent,
  LpxBrandLogoModule,
  ClickOutsideDirective,
  ToObservablePipe,
  BreadcrumbService,
  BreadcrumbComponent,
  ToObservableModule,
  LpxClickOutsideModule,
  exportedDeclarations$1,
  LpxBreadcrumbModule,
  CONTENT_BEFORE_ROUTES,
  CONTENT_AFTER_ROUTES,
  LPX_MENU_ITEMS,
  createGroupMap,
  getItemsFromGroup,
  OTHERS_GROUP_KEY,
  NavbarService,
  BreadcrumbRouteListenerService,
  LogoPanelDirective,
  TranslatePipe,
  SubNavbarComponent,
  NavbarRoutesComponent,
  NavbarRoutesDirective,
  NavbarComponent,
  SafeHtmlPipe,
  LpxTranslateModule,
  LpxNavbarModule,
  FooterLinksService,
  FooterComponent,
  LpxFooterModule,
  LpxCoreFeatureKind,
  SKIP_DEFAULTS,
  withIcon,
  withLanguage,
  withNavbar,
  withNavbarChild,
  withLpxCoreOptions,
  provideLpxBreadcrumb,
  provideLpxCore,
  LpxCoreModule,
  BreadcrumbPanelDirective,
  ContentPanelDirective,
  CurrentUserImagePanelDirective,
  CurrentUserPanelDirective,
  FooterPanelDirective,
  LanguagePanelDirective,
  MobileNavbarPanelDirective,
  MobileNavbarSettingsPanelDirective,
  MobileNavbarProfilePanelDirective,
  NavbarPanelDirective,
  NavitemPanelDirective,
  ToolbarPanelDirective,
  TopNavbarPanelDirective,
  SettingsPanelDirective,
  PanelsModule,
  ToolbarService
};
//# sourceMappingURL=chunk-TTFFSOBY.js.map
