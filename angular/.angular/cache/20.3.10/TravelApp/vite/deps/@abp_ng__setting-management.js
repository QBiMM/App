import {
  SettingTabsService
} from "./chunk-T4P7JVT4.js";
import {
  PageComponent
} from "./chunk-QJ372M7U.js";
import "./chunk-7LSFAQQI.js";
import "./chunk-ECZD44PI.js";
import "./chunk-VKRTUYJS.js";
import "./chunk-G7KX2FVW.js";
import {
  ForDirective,
  LazyModuleFactory,
  LocalizationPipe,
  PermissionDirective,
  ReplaceableRouteContainerComponent,
  RouterOutletComponent,
  authGuard
} from "./chunk-DOR275RM.js";
import {
  RouterModule
} from "./chunk-5IKKBTZJ.js";
import "./chunk-XC2BQRUA.js";
import "./chunk-TH3T7PKV.js";
import "./chunk-UMUGP7NI.js";
import {
  CommonModule,
  NgComponentOutlet
} from "./chunk-6NN5GPUG.js";
import {
  Component,
  NgModule,
  Subscription,
  inject,
  setClassMetadata,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-O2RWE6FT.js";
import "./chunk-7K3IQTKT.js";

// node_modules/@abp/ng.setting-management/fesm2022/abp-ng.setting-management.mjs
function SettingManagementComponent_ng_container_8_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 11);
    ɵɵlistener("click", function SettingManagementComponent_ng_container_8_li_1_Template_li_click_0_listener() {
      ɵɵrestoreView(_r1);
      const setting_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.selected = setting_r2);
    });
    ɵɵelementStart(1, "a", 12);
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const setting_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("active", setting_r2.name === ctx_r2.selected.name);
    ɵɵproperty("id", setting_r2.name + "-tab");
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 4, setting_r2.name));
  }
}
function SettingManagementComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SettingManagementComponent_ng_container_8_li_1_Template, 4, 6, "li", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const setting_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("abpPermission", setting_r2.requiredPolicy);
  }
}
function SettingManagementComponent_Conditional_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SettingManagementComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9)(1, "div", 13);
    ɵɵtemplate(2, SettingManagementComponent_Conditional_10_ng_container_2_Template, 1, 0, "ng-container", 14);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("id", ctx_r2.selected.name + "-tab");
    ɵɵadvance();
    ɵɵproperty("ngComponentOutlet", ctx_r2.selected.component);
  }
}
var _SettingManagementComponent = class _SettingManagementComponent {
  constructor() {
    this.settingTabsService = inject(SettingTabsService);
    this.subscription = new Subscription();
    this.settings = [];
    this.trackByFn = (_, item) => item.name;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    this.subscription.add(this.settingTabsService.visible$.subscribe((settings) => {
      this.settings = settings;
      if (!this.selected) this.selected = this.settings[0];
    }));
  }
};
_SettingManagementComponent.ɵfac = function SettingManagementComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingManagementComponent)();
};
_SettingManagementComponent.ɵcmp = ɵɵdefineComponent({
  type: _SettingManagementComponent,
  selectors: [["abp-setting-management"]],
  decls: 11,
  vars: 6,
  consts: [[3, "title"], ["id", "SettingManagementWrapper"], [1, "card"], [1, "card-body"], [1, "row"], [1, "col-12", "col-md-3", "mb-2", "mb-md-0"], ["id", "nav-tab", "role", "tablist", 1, "nav", "flex-column", "nav-pills"], [4, "abpFor", "abpForOf", "abpForTrackBy"], [1, "col-12", "col-md-9"], [1, "tab-content", "pt-0"], ["class", "nav-item pointer", 3, "click", 4, "abpPermission"], [1, "nav-item", "pointer", 3, "click"], ["role", "tab", 1, "nav-link", 3, "id"], ["role", "tabpanel", 1, "tab-pane", "fade", "show", "active", 3, "id"], [4, "ngComponentOutlet"]],
  template: function SettingManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "abp-page", 0);
      ɵɵpipe(1, "abpLocalization");
      ɵɵelementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "ul", 6);
      ɵɵtemplate(8, SettingManagementComponent_ng_container_8_Template, 2, 1, "ng-container", 7);
      ɵɵelementEnd()();
      ɵɵelementStart(9, "div", 8);
      ɵɵconditionalCreate(10, SettingManagementComponent_Conditional_10_Template, 3, 2, "div", 9);
      ɵɵelementEnd()()()()()();
    }
    if (rf & 2) {
      ɵɵproperty("title", ɵɵpipeBind1(1, 4, "AbpSettingManagement::Settings"));
      ɵɵadvance(8);
      ɵɵproperty("abpForOf", ctx.settings)("abpForTrackBy", ctx.trackByFn);
      ɵɵadvance(2);
      ɵɵconditional(ctx.settings.length ? 10 : -1);
    }
  },
  dependencies: [CommonModule, NgComponentOutlet, PageComponent, LocalizationPipe, PermissionDirective, ForDirective],
  encapsulation: 2
});
var SettingManagementComponent = _SettingManagementComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingManagementComponent, [{
    type: Component,
    args: [{
      selector: "abp-setting-management",
      imports: [CommonModule, PageComponent, LocalizationPipe, PermissionDirective, ForDirective],
      template: `<abp-page [title]="'AbpSettingManagement::Settings' | abpLocalization">\r
  <div id="SettingManagementWrapper">\r
    <div class="card">\r
      <div class="card-body">\r
        <div class="row">\r
          <div class="col-12 col-md-3 mb-2 mb-md-0">\r
            <ul class="nav flex-column nav-pills" id="nav-tab" role="tablist">\r
              <ng-container *abpFor="let setting of settings; trackBy: trackByFn">\r
                <li\r
                  (click)="selected = setting"\r
                  class="nav-item pointer"\r
                  *abpPermission="setting.requiredPolicy"\r
                >\r
                  <a\r
                    class="nav-link"\r
                    [id]="setting.name + '-tab'"\r
                    role="tab"\r
                    [class.active]="setting.name === selected.name"\r
                    >{{ setting.name | abpLocalization }}</a\r
                  >\r
                </li>\r
              </ng-container>\r
            </ul>\r
          </div>\r
          <div class="col-12 col-md-9">\r
            @if (settings.length) {\r
              <div class="tab-content pt-0">\r
                <div\r
                  class="tab-pane fade show active"\r
                  [id]="selected.name + '-tab'"\r
                  role="tabpanel"\r
                >\r
                  <ng-container *ngComponentOutlet="selected.component" />\r
                </div>\r
              </div>\r
            }\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</abp-page>\r
`
    }]
  }], null, null);
})();
var routes = [{
  path: "",
  component: RouterOutletComponent,
  canActivate: [authGuard],
  children: [{
    path: "",
    component: ReplaceableRouteContainerComponent,
    data: {
      requiredPolicy: "AbpAccount.SettingManagement",
      replaceableComponent: {
        key: "SettingManagement.SettingManagementComponent",
        defaultComponent: SettingManagementComponent
      }
    }
  }],
  title: "AbpSettingManagement::Settings"
}];
var _SettingManagementRoutingModule = class _SettingManagementRoutingModule {
};
_SettingManagementRoutingModule.ɵfac = function SettingManagementRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingManagementRoutingModule)();
};
_SettingManagementRoutingModule.ɵmod = ɵɵdefineNgModule({
  type: _SettingManagementRoutingModule,
  imports: [RouterModule],
  exports: [RouterModule]
});
_SettingManagementRoutingModule.ɵinj = ɵɵdefineInjector({
  imports: [RouterModule.forChild(routes), RouterModule]
});
var SettingManagementRoutingModule = _SettingManagementRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingManagementRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();
var SETTING_MANAGEMENT_MODULE_EXPORTS = [SettingManagementComponent];
var _SettingManagementModule = class _SettingManagementModule {
  static forChild() {
    return {
      ngModule: _SettingManagementModule,
      providers: []
    };
  }
  /**
   * @deprecated `SettingManagementModule.forLazy()` is deprecated. You can use `createRoutes` **function** instead.
   */
  static forLazy() {
    return new LazyModuleFactory(_SettingManagementModule.forChild());
  }
};
_SettingManagementModule.ɵfac = function SettingManagementModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingManagementModule)();
};
_SettingManagementModule.ɵmod = ɵɵdefineNgModule({
  type: _SettingManagementModule,
  imports: [SettingManagementRoutingModule, SettingManagementComponent]
});
_SettingManagementModule.ɵinj = ɵɵdefineInjector({
  imports: [SettingManagementRoutingModule, SETTING_MANAGEMENT_MODULE_EXPORTS]
});
var SettingManagementModule = _SettingManagementModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingManagementModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      exports: [],
      imports: [SettingManagementRoutingModule, ...SETTING_MANAGEMENT_MODULE_EXPORTS]
    }]
  }], null, null);
})();
function provideSettingManagement() {
  return [];
}
var createRoutes = () => [{
  path: "",
  component: RouterOutletComponent,
  canActivate: [authGuard],
  providers: provideSettingManagement(),
  children: [{
    path: "",
    component: ReplaceableRouteContainerComponent,
    data: {
      requiredPolicy: "AbpAccount.SettingManagement",
      replaceableComponent: {
        key: "SettingManagement.SettingManagementComponent",
        defaultComponent: SettingManagementComponent
      }
    }
  }],
  title: "AbpSettingManagement::Settings"
}];
export {
  SETTING_MANAGEMENT_MODULE_EXPORTS,
  SettingManagementComponent,
  SettingManagementModule,
  createRoutes,
  provideSettingManagement
};
//# sourceMappingURL=@abp_ng__setting-management.js.map
