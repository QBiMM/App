import {
  PageToolbarComponent
} from "./chunk-7LSFAQQI.js";
import {
  BreadcrumbComponent
} from "./chunk-ECZD44PI.js";
import {
  Component,
  ContentChild,
  Directive,
  Inject,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Observable,
  Optional,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation,
  of,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-O2RWE6FT.js";

// node_modules/@abp/ng.components/fesm2022/abp-ng.components-page.mjs
var _c0 = ["*"];
var _c1 = ["*", [["abp-page-title-container"]], [["abp-page-breadcrumb-container"]], [["abp-page-toolbar-container"]]];
var _c2 = ["*", "abp-page-title-container", "abp-page-breadcrumb-container", "abp-page-toolbar-container"];
function PageComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 1);
  }
}
function PageComponent_Conditional_0_Conditional_2_Conditional_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1)(1, "h1", 3);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.title, " ");
  }
}
function PageComponent_Conditional_0_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PageComponent_Conditional_0_Conditional_2_Conditional_0_div_0_Template, 3, 1, "div", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("abpPagePart", ctx_r0.pageParts.title);
  }
}
function PageComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, PageComponent_Conditional_0_Conditional_2_Conditional_0_Template, 1, 1, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r0.title ? 0 : -1);
  }
}
function PageComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 2);
  }
}
function PageComponent_Conditional_0_Conditional_4_Conditional_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵelement(1, "abp-breadcrumb");
    ɵɵelementEnd();
  }
}
function PageComponent_Conditional_0_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PageComponent_Conditional_0_Conditional_4_Conditional_0_div_0_Template, 2, 0, "div", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("abpPagePart", ctx_r0.pageParts.breadcrumb);
  }
}
function PageComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, PageComponent_Conditional_0_Conditional_4_Conditional_0_Template, 1, 1, "div", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r0.breadcrumb ? 0 : -1);
  }
}
function PageComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 3);
  }
}
function PageComponent_Conditional_0_Conditional_6_Conditional_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵelement(1, "abp-page-toolbar", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("record", ctx_r0.toolbarData);
  }
}
function PageComponent_Conditional_0_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PageComponent_Conditional_0_Conditional_6_Conditional_0_div_0_Template, 2, 1, "div", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("abpPagePart", ctx_r0.pageParts.toolbar)("abpPagePartContext", ctx_r0.toolbarData);
  }
}
function PageComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, PageComponent_Conditional_0_Conditional_6_Conditional_0_Template, 1, 2, "div", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r0.toolbarVisible ? 0 : -1);
  }
}
function PageComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵconditionalCreate(1, PageComponent_Conditional_0_Conditional_1_Template, 1, 0)(2, PageComponent_Conditional_0_Conditional_2_Template, 1, 1);
    ɵɵconditionalCreate(3, PageComponent_Conditional_0_Conditional_3_Template, 1, 0)(4, PageComponent_Conditional_0_Conditional_4_Template, 1, 1);
    ɵɵconditionalCreate(5, PageComponent_Conditional_0_Conditional_5_Template, 1, 0)(6, PageComponent_Conditional_0_Conditional_6_Template, 1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.customTitle ? 1 : 2);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r0.customBreadcrumb ? 3 : 4);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r0.customToolbar ? 5 : 6);
  }
}
var PAGE_RENDER_STRATEGY = new InjectionToken("PAGE_RENDER_STRATEGY");
var _PagePartDirective = class _PagePartDirective {
  set abpPagePart(type) {
    this.type = type;
    this.createRenderStream(type);
  }
  constructor(templateRef, viewContainer, renderLogic, injector) {
    this.templateRef = templateRef;
    this.viewContainer = viewContainer;
    this.renderLogic = renderLogic;
    this.injector = injector;
    this.hasRendered = false;
    this.render = (shouldRender) => {
      if (shouldRender && !this.hasRendered) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasRendered = true;
      } else if (!shouldRender && this.hasRendered) {
        this.viewContainer.clear();
        this.hasRendered = false;
      }
    };
  }
  ngOnChanges({
    context
  }) {
    if (this.renderLogic?.onContextUpdate) {
      this.renderLogic.onContextUpdate(context);
    }
  }
  ngOnInit() {
    if (this.renderLogic?.onInit) {
      this.renderLogic.onInit(this.type, this.injector, this.context);
    }
  }
  ngOnDestroy() {
    this.clearSubscription();
    if (this.renderLogic?.onDestroy) {
      this.renderLogic.onDestroy(this.type, this.injector, this.context);
    }
  }
  shouldRender(type) {
    if (this.renderLogic) {
      const willRender = this.renderLogic.shouldRender(type);
      return willRender instanceof Observable ? willRender : of(willRender);
    }
    return of(true);
  }
  createRenderStream(type) {
    this.clearSubscription();
    this.subscription = this.shouldRender(type).subscribe(this.render);
  }
  clearSubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
};
_PagePartDirective.ɵfac = function PagePartDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PagePartDirective)(ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(PAGE_RENDER_STRATEGY, 8), ɵɵdirectiveInject(Injector));
};
_PagePartDirective.ɵdir = ɵɵdefineDirective({
  type: _PagePartDirective,
  selectors: [["", "abpPagePart", ""]],
  inputs: {
    context: [0, "abpPagePartContext", "context"],
    abpPagePart: "abpPagePart"
  },
  features: [ɵɵNgOnChangesFeature]
});
var PagePartDirective = _PagePartDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PagePartDirective, [{
    type: Directive,
    args: [{
      selector: "[abpPagePart]"
    }]
  }], () => [{
    type: TemplateRef
  }, {
    type: ViewContainerRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [PAGE_RENDER_STRATEGY]
    }]
  }, {
    type: Injector
  }], {
    context: [{
      type: Input,
      args: ["abpPagePartContext"]
    }],
    abpPagePart: [{
      type: Input
    }]
  });
})();
var PageParts;
(function(PageParts2) {
  PageParts2["title"] = "PageTitleContainerComponent";
  PageParts2["breadcrumb"] = "PageBreadcrumbContainerComponent";
  PageParts2["toolbar"] = "PageToolbarContainerComponent";
})(PageParts || (PageParts = {}));
var _PageTitleContainerComponent = class _PageTitleContainerComponent {
};
_PageTitleContainerComponent.ɵfac = function PageTitleContainerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PageTitleContainerComponent)();
};
_PageTitleContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: _PageTitleContainerComponent,
  selectors: [["abp-page-title-container"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function PageTitleContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var PageTitleContainerComponent = _PageTitleContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageTitleContainerComponent, [{
    type: Component,
    args: [{
      selector: "abp-page-title-container",
      template: ` <ng-content></ng-content> `,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, null);
})();
var _PageBreadcrumbContainerComponent = class _PageBreadcrumbContainerComponent {
};
_PageBreadcrumbContainerComponent.ɵfac = function PageBreadcrumbContainerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PageBreadcrumbContainerComponent)();
};
_PageBreadcrumbContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: _PageBreadcrumbContainerComponent,
  selectors: [["abp-page-breadcrumb-container"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function PageBreadcrumbContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var PageBreadcrumbContainerComponent = _PageBreadcrumbContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageBreadcrumbContainerComponent, [{
    type: Component,
    args: [{
      selector: "abp-page-breadcrumb-container",
      template: ` <ng-content></ng-content> `,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, null);
})();
var _PageToolbarContainerComponent = class _PageToolbarContainerComponent {
};
_PageToolbarContainerComponent.ɵfac = function PageToolbarContainerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PageToolbarContainerComponent)();
};
_PageToolbarContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: _PageToolbarContainerComponent,
  selectors: [["abp-page-toolbar-container"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function PageToolbarContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var PageToolbarContainerComponent = _PageToolbarContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageToolbarContainerComponent, [{
    type: Component,
    args: [{
      selector: "abp-page-toolbar-container",
      template: ` <ng-content></ng-content> `,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, null);
})();
var _PageComponent = class _PageComponent {
  constructor() {
    this.toolbarVisible = false;
    this.breadcrumb = true;
    this.pageParts = {
      title: PageParts.title,
      breadcrumb: PageParts.breadcrumb,
      toolbar: PageParts.toolbar
    };
  }
  set toolbar(val) {
    this._toolbarData = val;
    this.toolbarVisible = true;
  }
  get toolbarData() {
    return this._toolbarData;
  }
  get shouldRenderRow() {
    return !!(this.title || this.toolbarVisible || this.breadcrumb || this.customTitle || this.customBreadcrumb || this.customToolbar || this.pageParts);
  }
};
_PageComponent.ɵfac = function PageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PageComponent)();
};
_PageComponent.ɵcmp = ɵɵdefineComponent({
  type: _PageComponent,
  selectors: [["abp-page"]],
  contentQueries: function PageComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PageTitleContainerComponent, 5);
      ɵɵcontentQuery(dirIndex, PageBreadcrumbContainerComponent, 5);
      ɵɵcontentQuery(dirIndex, PageToolbarContainerComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.customTitle = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.customBreadcrumb = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.customToolbar = _t.first);
    }
  },
  inputs: {
    title: "title",
    toolbar: "toolbar",
    breadcrumb: "breadcrumb"
  },
  ngContentSelectors: _c2,
  decls: 2,
  vars: 1,
  consts: [[1, "row", "entry-row"], [1, "col-auto"], ["class", "col-auto", 4, "abpPagePart"], [1, "content-header-title"], [1, "col-lg-auto", "ps-lg-0"], ["class", "col-lg-auto ps-lg-0", 4, "abpPagePart"], [1, "col"], ["class", "col", 4, "abpPagePart", "abpPagePartContext"], [3, "record"]],
  template: function PageComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵconditionalCreate(0, PageComponent_Conditional_0_Template, 7, 3, "div", 0);
      ɵɵprojection(1);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.shouldRenderRow ? 0 : -1);
    }
  },
  dependencies: [BreadcrumbComponent, PageToolbarComponent, PagePartDirective],
  encapsulation: 2
});
var PageComponent = _PageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageComponent, [{
    type: Component,
    args: [{
      selector: "abp-page",
      encapsulation: ViewEncapsulation.None,
      imports: [BreadcrumbComponent, PageToolbarComponent, PagePartDirective],
      template: '@if (shouldRenderRow) {\r\n  <div class="row entry-row">\r\n    @if (customTitle) {\r\n      <ng-content select="abp-page-title-container"></ng-content>\r\n    } @else {\r\n      @if (title) {\r\n        <div class="col-auto" *abpPagePart="pageParts.title">\r\n          <h1 class="content-header-title">\r\n            {{ title }}\r\n          </h1>\r\n        </div>\r\n      }\r\n    }\r\n\r\n    @if (customBreadcrumb) {\r\n      <ng-content select="abp-page-breadcrumb-container"></ng-content>\r\n    } @else {\r\n      @if (breadcrumb) {\r\n        <div class="col-lg-auto ps-lg-0" *abpPagePart="pageParts.breadcrumb">\r\n          <abp-breadcrumb></abp-breadcrumb>\r\n        </div>\r\n      }\r\n    }\r\n\r\n    @if (customToolbar) {\r\n      <ng-content select="abp-page-toolbar-container"></ng-content>\r\n    } @else {\r\n      @if (toolbarVisible) {\r\n        <div class="col" *abpPagePart="pageParts.toolbar; context: toolbarData">\r\n          <abp-page-toolbar [record]="toolbarData"></abp-page-toolbar>\r\n        </div>\r\n      }\r\n    }\r\n  </div>\r\n}\r\n\r\n<ng-content></ng-content>\r\n'
    }]
  }], null, {
    title: [{
      type: Input
    }],
    toolbar: [{
      type: Input
    }],
    breadcrumb: [{
      type: Input
    }],
    customTitle: [{
      type: ContentChild,
      args: [PageTitleContainerComponent]
    }],
    customBreadcrumb: [{
      type: ContentChild,
      args: [PageBreadcrumbContainerComponent]
    }],
    customToolbar: [{
      type: ContentChild,
      args: [PageToolbarContainerComponent]
    }]
  });
})();
var PAGE_EXPORTS = [PageComponent, PageTitleContainerComponent, PageBreadcrumbContainerComponent, PageToolbarContainerComponent, PagePartDirective];
var _PageModule = class _PageModule {
};
_PageModule.ɵfac = function PageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PageModule)();
};
_PageModule.ɵmod = ɵɵdefineNgModule({
  type: _PageModule,
  imports: [PageComponent, PageTitleContainerComponent, PageBreadcrumbContainerComponent, PageToolbarContainerComponent, PagePartDirective],
  exports: [PageComponent, PageTitleContainerComponent, PageBreadcrumbContainerComponent, PageToolbarContainerComponent, PagePartDirective]
});
_PageModule.ɵinj = ɵɵdefineInjector({
  imports: [PageComponent]
});
var PageModule = _PageModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [...PAGE_EXPORTS],
      exports: [...PAGE_EXPORTS]
    }]
  }], null, null);
})();

export {
  PAGE_RENDER_STRATEGY,
  PageParts,
  PageComponent
};
//# sourceMappingURL=chunk-QJ372M7U.js.map
