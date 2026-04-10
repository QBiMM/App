import {
  AvatarComponent,
  IconComponent,
  LPX_INITIAL_STYLES,
  LPX_LAYOUT_STYLE_FINAL,
  LPX_STYLE_FINAL,
  LanguageService,
  LpxAvatarModule,
  LpxCoreModule,
  LpxTranslateModule,
  LpxVisibleDirective,
  NavbarService,
  SafeHtmlPipe,
  ToolbarService,
  UserProfileService,
  createStyleFactory,
  provideLpxCore,
  withLpxCoreOptions
} from "./chunk-TTFFSOBY.js";
import {
  PAGE_RENDER_STRATEGY,
  PageParts
} from "./chunk-QJ372M7U.js";
import {
  DocumentDirHandlerService,
  NavItemsService,
  NgbDropdown,
  NgbDropdownButtonItem,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownModule,
  NgbDropdownToggle,
  PageAlertService,
  ThemeSharedModule
} from "./chunk-ECZD44PI.js";
import {
  CoreModule,
  LocalizationPipe,
  LocalizationService,
  PermissionService,
  ReplaceableComponentsService,
  ReplaceableTemplateDirective,
  RoutesService
} from "./chunk-DOR275RM.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-5IKKBTZJ.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgComponentOutlet
} from "./chunk-6NN5GPUG.js";
import {
  Component,
  DOCUMENT,
  Directive,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  TemplateRef,
  ViewContainerRef,
  ViewEncapsulation,
  inject,
  makeEnvironmentProviders,
  map,
  provideAppInitializer,
  setClassMetadata,
  switchMap,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-O2RWE6FT.js";

// node_modules/@volo/ngx-lepton-x.lite/fesm2022/volo-ngx-lepton-x.lite.mjs
function UserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_For_1_Conditional_1_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function UserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_For_1_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, UserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_For_1_Conditional_1_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const action_r1 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("ngComponentOutlet", action_r1.component)("ngComponentOutletInjector", ctx_r1.injector);
  }
}
function UserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, UserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_For_1_Conditional_1_Conditional_0_Template, 1, 2, "ng-container");
  }
  if (rf & 2) {
    ɵɵnextContext();
    const isVisible_r3 = ɵɵreadContextLet(0);
    ɵɵconditional(isVisible_r3 ? 0 : -1);
  }
}
function UserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_For_1_Conditional_2_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 9);
    ɵɵlistener("click", function UserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_For_1_Conditional_2_a_0_Template_a_click_0_listener() {
      ɵɵrestoreView(_r4);
      const action_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r1 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r1.onActionClick(action_r1));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r1 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("routerLink", action_r1.link);
    ɵɵadvance();
    ɵɵtextInterpolate1("", ɵɵpipeBind1(2, 2, action_r1.text || ""), " ");
  }
}
function UserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, UserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_For_1_Conditional_2_a_0_Template, 3, 4, "a", 8);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const isVisible_r3 = ɵɵreadContextLet(0);
    ɵɵproperty("lpxVisible", isVisible_r3);
  }
}
function UserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdeclareLet(0);
    ɵɵconditionalCreate(1, UserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_For_1_Conditional_1_Template, 1, 1)(2, UserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_For_1_Conditional_2_Template, 1, 1, "a", 6);
  }
  if (rf & 2) {
    const action_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵstoreLet(!action_r1.visible || action_r1.visible(action_r1, ctx_r1.injector));
    ɵɵadvance();
    ɵɵconditional(action_r1.component ? 1 : !action_r1.component ? 2 : -1);
  }
}
function UserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 5);
  }
}
function UserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, UserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_For_1_Template, 3, 2, null, null, ɵɵrepeaterTrackByIndex);
    ɵɵconditionalCreate(2, UserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_Conditional_2_Template, 1, 0, "div", 5);
  }
  if (rf & 2) {
    const actionGroup_r5 = ctx.$implicit;
    const ɵ$index_16_r6 = ctx.$index;
    const ɵ$count_16_r7 = ctx.$count;
    ɵɵrepeater(actionGroup_r5);
    ɵɵadvance(2);
    ɵɵconditional(!(ɵ$index_16_r6 === ɵ$count_16_r7 - 1) ? 2 : -1);
  }
}
function UserProfileComponent_Conditional_0_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵrepeaterCreate(1, UserProfileComponent_Conditional_0_Conditional_0_Conditional_5_For_2_Template, 3, 1, null, null, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const userProfile_r8 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵrepeater(userProfile_r8.userActionGroups);
  }
}
function UserProfileComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0)(1, "div", 1);
    ɵɵelement(2, "lpx-avatar", 2);
    ɵɵelementStart(3, "span", 3);
    ɵɵtext(4);
    ɵɵelementEnd()();
    ɵɵconditionalCreate(5, UserProfileComponent_Conditional_0_Conditional_0_Conditional_5_Template, 3, 0, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const userProfile_r8 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("avatar", userProfile_r8.avatar);
    ɵɵadvance(2);
    ɵɵtextInterpolate(userProfile_r8.fullName);
    ɵɵadvance();
    ɵɵconditional(userProfile_r8.userActionGroups ? 5 : -1);
  }
}
function UserProfileComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, UserProfileComponent_Conditional_0_Conditional_0_Template, 6, 3, "div", 0);
  }
  if (rf & 2) {
    ɵɵconditional(ctx.userName ? 0 : -1);
  }
}
var _c0 = (a0) => ({
  "text-uppercase": a0
});
function LanguageSelectionComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const val_r1 = ctx;
    ɵɵproperty("ngClass", ɵɵpureFunction1(2, _c0, !!val_r1.twoLetterISOLanguageName));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", val_r1.twoLetterISOLanguageName || val_r1.displayName, " ");
  }
}
function LanguageSelectionComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵelement(1, "lpx-icon", 3);
    ɵɵconditionalCreate(2, LanguageSelectionComponent_Conditional_1_Conditional_2_Template, 2, 4, "span", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    ɵɵadvance(2);
    ɵɵconditional((tmp_2_0 = ctx) ? 2 : -1, tmp_2_0);
  }
}
function LanguageSelectionComponent_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function LanguageSelectionComponent_Conditional_3_For_2_Template_button_click_0_listener() {
      const lang_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.onLanguageSelection(lang_r3));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const lang_r3 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", lang_r3.displayName, " ");
  }
}
function LanguageSelectionComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵrepeaterCreate(1, LanguageSelectionComponent_Conditional_3_For_2_Template, 2, 1, "button", 5, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵrepeater(ctx);
  }
}
var LPX_LITE_STYLE_TOKEN = new InjectionToken("LPX_LITE_STYLE_TOKEN");
var getLpxLiteStyleProviders = (styleFactory) => [provideAppInitializer(() => {
  inject(LPX_LITE_STYLE_TOKEN);
}), {
  provide: LPX_LITE_STYLE_TOKEN,
  deps: [LPX_INITIAL_STYLES, LPX_LAYOUT_STYLE_FINAL],
  useFactory: mergeStyles
}, {
  provide: LPX_STYLE_FINAL,
  deps: [LPX_LITE_STYLE_TOKEN],
  useFactory: createStyleFactory(styleFactory)
}];
function mergeStyles(styleList, layoutStyles) {
  styleList.push({
    bundleName: "bootstrap-dim"
  });
  styleList.push({
    bundleName: "ng-bundle"
  });
  styleList.push({
    bundleName: "font-bundle"
  });
  return [...styleList, ...layoutStyles];
}
var LpxLiteFeatureKind;
(function(LpxLiteFeatureKind2) {
  LpxLiteFeatureKind2[LpxLiteFeatureKind2["Options"] = 0] = "Options";
})(LpxLiteFeatureKind || (LpxLiteFeatureKind = {}));
function makeLpxLiteFeature(kind, providers) {
  return {
    ɵkind: kind,
    ɵproviders: providers
  };
}
function withLiteOptions(options = {}) {
  return makeLpxLiteFeature(LpxLiteFeatureKind.Options, [getLpxLiteStyleProviders(options.styleFactory), provideLpxCore(...withLpxCoreOptions(options))]);
}
function provideLpxLite(...features) {
  const providers = [];
  if (!features.length) {
    const defaultStyleFactory = (styles) => {
      styles.push({
        bundleName: "abp-bundle"
      });
      return styles;
    };
    providers.push(getLpxLiteStyleProviders(defaultStyleFactory), provideLpxCore(...withLpxCoreOptions()));
  }
  features.forEach(({
    ɵproviders
  }) => providers.push(...ɵproviders));
  return makeEnvironmentProviders(providers);
}
var _LpxModule = class _LpxModule {
  /**
   * @deprecated `LpxModule.forRoot()` is deprecated. You can use `provideLpxLite` **function** instead.
   */
  static forRoot(options) {
    return {
      ngModule: _LpxModule,
      providers: [provideLpxLite(withLiteOptions(options))]
    };
  }
};
_LpxModule.ɵfac = function LpxModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LpxModule)();
};
_LpxModule.ɵmod = ɵɵdefineNgModule({
  type: _LpxModule,
  imports: [LpxCoreModule]
});
_LpxModule.ɵinj = ɵɵdefineInjector({
  imports: [LpxCoreModule]
});
var LpxModule = _LpxModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LpxModule, [{
    type: NgModule,
    args: [{
      imports: [LpxCoreModule]
    }]
  }], null, null);
})();
var _UserProfileComponent = class _UserProfileComponent {
  constructor() {
    this.service = inject(UserProfileService);
    this.injector = inject(Injector);
    this.user$ = this.service.user$;
  }
  onActionClick(item) {
    item.action?.();
  }
};
_UserProfileComponent.ɵfac = function UserProfileComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserProfileComponent)();
};
_UserProfileComponent.ɵcmp = ɵɵdefineComponent({
  type: _UserProfileComponent,
  selectors: [["lpx-user-profile"]],
  decls: 2,
  vars: 3,
  consts: [["ngbDropdown", ""], ["ngbDropdownToggle", "", "role", "button", 1, "lpx-user-profile"], [3, "avatar"], [1, "user-full-name"], ["ngbDropdownMenu", ""], [1, "dropdown-divider"], ["ngbDropdownItem", "", 3, "routerLink"], [4, "ngComponentOutlet", "ngComponentOutletInjector"], ["ngbDropdownItem", "", 3, "routerLink", "click", 4, "lpxVisible"], ["ngbDropdownItem", "", 3, "click", "routerLink"]],
  template: function UserProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵconditionalCreate(0, UserProfileComponent_Conditional_0_Template, 1, 1);
      ɵɵpipe(1, "async");
    }
    if (rf & 2) {
      let tmp_0_0;
      ɵɵconditional((tmp_0_0 = ɵɵpipeBind1(1, 1, ctx.user$)) ? 0 : -1, tmp_0_0);
    }
  },
  dependencies: [NgbDropdown, NgbDropdownToggle, AvatarComponent, NgbDropdownMenu, NgComponentOutlet, NgbDropdownItem, LpxVisibleDirective, RouterLink, AsyncPipe, LocalizationPipe],
  encapsulation: 2
});
var UserProfileComponent = _UserProfileComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileComponent, [{
    type: Component,
    args: [{
      selector: "lpx-user-profile",
      encapsulation: ViewEncapsulation.None,
      imports: [NgbDropdown, NgbDropdownToggle, AvatarComponent, NgbDropdownMenu, NgComponentOutlet, NgbDropdownItem, LpxVisibleDirective, RouterLink, AsyncPipe, LocalizationPipe],
      template: `@if (user$ | async; as userProfile) {\r
  @if (userProfile.userName) {\r
    <div ngbDropdown>\r
      <div class="lpx-user-profile" ngbDropdownToggle role="button">\r
        <lpx-avatar [avatar]="userProfile.avatar" />\r
        <span class="user-full-name">{{ userProfile.fullName }}</span>\r
      </div>\r
      @if (userProfile.userActionGroups) {\r
        <div ngbDropdownMenu>\r
          @for (\r
            actionGroup of userProfile.userActionGroups;\r
            track $index;\r
            let last = $last\r
          ) {\r
            @for (action of actionGroup; track $index) {\r
              @let isVisible =\r
                !action.visible || action.visible(action, injector);\r
\r
              @if (action.component) {\r
                @if (isVisible) {\r
                  <ng-container\r
                    *ngComponentOutlet="action.component; injector: injector"\r
                  />\r
                }\r
              } @else if (!action.component) {\r
                <a\r
                  *lpxVisible="isVisible"\r
                  ngbDropdownItem\r
                  (click)="onActionClick(action)"\r
                  [routerLink]="action.link"\r
                  >{{ action.text || '' | abpLocalization }}\r
                </a>\r
              }\r
            }\r
            @if (!last) {\r
              <div class="dropdown-divider"></div>\r
            }\r
          }\r
        </div>\r
      }\r
    </div>\r
  }\r
}\r
`
    }]
  }], null, null);
})();
var _UserProfileModule = class _UserProfileModule {
};
_UserProfileModule.ɵfac = function UserProfileModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserProfileModule)();
};
_UserProfileModule.ɵmod = ɵɵdefineNgModule({
  type: _UserProfileModule,
  imports: [CommonModule, LpxAvatarModule, NgbDropdownModule, RouterModule, LpxTranslateModule, UserProfileComponent],
  exports: [UserProfileComponent]
});
_UserProfileModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, LpxAvatarModule, NgbDropdownModule, RouterModule, LpxTranslateModule, UserProfileComponent]
});
var UserProfileModule = _UserProfileModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, LpxAvatarModule, NgbDropdownModule, RouterModule, LpxTranslateModule, UserProfileComponent],
      exports: [UserProfileComponent]
    }]
  }], null, null);
})();
var _LanguageSelectionComponent = class _LanguageSelectionComponent {
  constructor() {
    this.service = inject(LanguageService);
    this.langs$ = this.service.languages$;
    this.selectedLanguage$ = this.service.selectedLanguage$;
  }
  onLanguageSelection(lang) {
    this.service.setSelectedLanguage(lang);
  }
};
_LanguageSelectionComponent.ɵfac = function LanguageSelectionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LanguageSelectionComponent)();
};
_LanguageSelectionComponent.ɵcmp = ɵɵdefineComponent({
  type: _LanguageSelectionComponent,
  selectors: [["lpx-language-selection"]],
  decls: 5,
  vars: 6,
  consts: [["ngbDropdown", "", 1, "lpx-language-selection"], ["ngbDropdownToggle", "", "role", "button"], ["ngbDropdownMenu", ""], ["iconClass", "bi bi-globe"], [3, "ngClass"], ["ngbDropdownItem", ""], ["ngbDropdownItem", "", 3, "click"]],
  template: function LanguageSelectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵconditionalCreate(1, LanguageSelectionComponent_Conditional_1_Template, 3, 1, "div", 1);
      ɵɵpipe(2, "async");
      ɵɵconditionalCreate(3, LanguageSelectionComponent_Conditional_3_Template, 3, 0, "div", 2);
      ɵɵpipe(4, "async");
      ɵɵelementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      ɵɵadvance();
      ɵɵconditional((tmp_0_0 = ɵɵpipeBind1(2, 2, ctx.selectedLanguage$)) ? 1 : -1, tmp_0_0);
      ɵɵadvance(2);
      ɵɵconditional((tmp_1_0 = ɵɵpipeBind1(4, 4, ctx.langs$)) ? 3 : -1, tmp_1_0);
    }
  },
  dependencies: [CommonModule, NgClass, AsyncPipe, NgbDropdownModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem, IconComponent],
  encapsulation: 2
});
var LanguageSelectionComponent = _LanguageSelectionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageSelectionComponent, [{
    type: Component,
    args: [{
      selector: "lpx-language-selection",
      imports: [CommonModule, NgbDropdownModule, IconComponent],
      encapsulation: ViewEncapsulation.None,
      template: `<div ngbDropdown class="lpx-language-selection">\r
  @if (selectedLanguage$ | async; as selectedLanguage) {\r
    <div ngbDropdownToggle role="button">\r
      <lpx-icon iconClass="bi bi-globe"></lpx-icon>\r
      @if (selectedLanguage; as val) {\r
        <span [ngClass]="{ 'text-uppercase': !!val.twoLetterISOLanguageName }">\r
          {{ val.twoLetterISOLanguageName || val.displayName }}\r
        </span>\r
      }\r
    </div>\r
  }\r
  @if (langs$ | async; as langs) {\r
    <div ngbDropdownMenu>\r
      @for (lang of langs; track $index) {\r
        <button ngbDropdownItem (click)="onLanguageSelection(lang)">\r
          {{ lang.displayName }}\r
        </button>\r
      }\r
    </div>\r
  }\r
</div>\r
`
    }]
  }], null, null);
})();
var _LanguageSelectionModule = class _LanguageSelectionModule {
};
_LanguageSelectionModule.ɵfac = function LanguageSelectionModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LanguageSelectionModule)();
};
_LanguageSelectionModule.ɵmod = ɵɵdefineNgModule({
  type: _LanguageSelectionModule,
  imports: [LanguageSelectionComponent],
  exports: [LanguageSelectionComponent]
});
_LanguageSelectionModule.ɵinj = ɵɵdefineInjector({
  imports: [LanguageSelectionComponent]
});
var LanguageSelectionModule = _LanguageSelectionModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageSelectionModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [LanguageSelectionComponent],
      exports: [LanguageSelectionComponent]
    }]
  }], null, null);
})();

// node_modules/@volo/abp.ng.lepton-x.core/fesm2022/volo-abp.ng.lepton-x.core.mjs
var _c02 = (a0) => ({
  "alert-dismissible fade show": a0
});
function PageAlertContainerComponent_ng_container_0_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "h4", 3);
    ɵɵpipe(1, "lpxSafeHtml");
    ɵɵpipe(2, "abpLocalization");
  }
  if (rf & 2) {
    const alert_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("innerHTML", ɵɵpipeBind2(2, 3, ɵɵpipeBind1(1, 1, alert_r1.title), alert_r1.titleLocalizationParams), ɵɵsanitizeHtml);
  }
}
function PageAlertContainerComponent_ng_container_0_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function PageAlertContainerComponent_ng_container_0_For_2_Conditional_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ɵ$index_5_r3 = ɵɵnextContext().$index;
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.service.remove(ɵ$index_5_r3));
    });
    ɵɵelementEnd();
  }
}
function PageAlertContainerComponent_ng_container_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵconditionalCreate(1, PageAlertContainerComponent_ng_container_0_For_2_Conditional_1_Template, 3, 6, "h4", 3);
    ɵɵelement(2, "span", 4);
    ɵɵpipe(3, "lpxSafeHtml");
    ɵɵpipe(4, "abpLocalization");
    ɵɵconditionalCreate(5, PageAlertContainerComponent_ng_container_0_For_2_Conditional_5_Template, 1, 0, "button", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    ɵɵclassMap(ɵɵinterpolate1("alert alert-", alert_r1.type, " fade show"));
    ɵɵproperty("ngClass", ɵɵpureFunction1(12, _c02, alert_r1.dismissible));
    ɵɵadvance();
    ɵɵconditional(alert_r1.title ? 1 : -1);
    ɵɵadvance();
    ɵɵproperty("innerHTML", ɵɵpipeBind2(4, 9, ɵɵpipeBind1(3, 7, alert_r1.message), alert_r1.messageLocalizationParams), ɵɵsanitizeHtml);
    ɵɵadvance(3);
    ɵɵconditional(alert_r1.dismissible ? 5 : -1);
  }
}
function PageAlertContainerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵrepeaterCreate(1, PageAlertContainerComponent_ng_container_0_For_2_Template, 6, 14, "div", 1, ɵɵrepeaterTrackByIndex);
    ɵɵpipe(3, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵrepeater(ɵɵpipeBind1(3, 0, ctx_r3.service.alerts$));
  }
}
var _IfReplaceableTemplateExistsDirective = class _IfReplaceableTemplateExistsDirective {
  constructor(view, template, replaceableComponentsService) {
    this.view = view;
    this.template = template;
    this.replaceableComponentsService = replaceableComponentsService;
  }
  ngAfterViewInit() {
    const replaceableComponentInstance = this.replaceableComponentsService.get(this.abpIfReplaceableTemplateExists);
    const isReplaceableComponentInstanceNotExits = !replaceableComponentInstance;
    if (isReplaceableComponentInstanceNotExits) {
      return;
    }
    this.view.createEmbeddedView(this.template);
  }
};
_IfReplaceableTemplateExistsDirective.ɵfac = function IfReplaceableTemplateExistsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IfReplaceableTemplateExistsDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef), ɵɵdirectiveInject(ReplaceableComponentsService));
};
_IfReplaceableTemplateExistsDirective.ɵdir = ɵɵdefineDirective({
  type: _IfReplaceableTemplateExistsDirective,
  selectors: [["", "abpIfReplaceableTemplateExists", ""]],
  inputs: {
    abpIfReplaceableTemplateExists: "abpIfReplaceableTemplateExists"
  }
});
var IfReplaceableTemplateExistsDirective = _IfReplaceableTemplateExistsDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IfReplaceableTemplateExistsDirective, [{
    type: Directive,
    args: [{
      selector: "[abpIfReplaceableTemplateExists]"
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: TemplateRef
  }, {
    type: ReplaceableComponentsService
  }], {
    abpIfReplaceableTemplateExists: [{
      type: Input
    }]
  });
})();
var _PageAlertContainerComponent = class _PageAlertContainerComponent {
  constructor() {
    this.service = inject(PageAlertService);
    this.replaceableTemplateKey = {
      componentKey: "Theme.PageAlertContainerComponent"
    };
  }
};
_PageAlertContainerComponent.ɵfac = function PageAlertContainerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PageAlertContainerComponent)();
};
_PageAlertContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: _PageAlertContainerComponent,
  selectors: [["abp-page-alert-container"]],
  decls: 1,
  vars: 1,
  consts: [[4, "abpReplaceableTemplate"], ["role", "alert", 3, "class", "ngClass"], ["role", "alert", 3, "ngClass"], [1, "alert-heading", 3, "innerHTML"], [3, "innerHTML"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "btn-close"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "btn-close", 3, "click"]],
  template: function PageAlertContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, PageAlertContainerComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("abpReplaceableTemplate", ctx.replaceableTemplateKey);
    }
  },
  dependencies: [LocalizationPipe, ReplaceableTemplateDirective, AsyncPipe, SafeHtmlPipe, NgClass],
  encapsulation: 2
});
var PageAlertContainerComponent = _PageAlertContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageAlertContainerComponent, [{
    type: Component,
    args: [{
      selector: "abp-page-alert-container",
      imports: [LocalizationPipe, ReplaceableTemplateDirective, AsyncPipe, SafeHtmlPipe, NgClass],
      template: `<ng-container *abpReplaceableTemplate="replaceableTemplateKey">\r
  @for (alert of service.alerts$ | async; track $index; let i = $index) {\r
    <div\r
      class="alert alert-{{ alert.type }} fade show"\r
      [ngClass]="{ 'alert-dismissible fade show': alert.dismissible }"\r
      role="alert"\r
    >\r
      @if (alert.title) {\r
        <h4\r
          class="alert-heading"\r
          [innerHTML]="\r
            alert.title\r
              | lpxSafeHtml\r
              | abpLocalization: alert.titleLocalizationParams\r
          "\r
        ></h4>\r
      }\r
      <span\r
        [innerHTML]="\r
          alert.message\r
            | lpxSafeHtml\r
            | abpLocalization: alert.messageLocalizationParams\r
        "\r
      ></span>\r
      @if (alert.dismissible) {\r
        <button\r
          type="button"\r
          class="btn-close"\r
          data-dismiss="alert"\r
          aria-label="Close"\r
          (click)="service.remove(i)"\r
        ></button>\r
      }\r
    </div>\r
  }\r
</ng-container>\r
`
    }]
  }], null, null);
})();
var _PageAlertContainerModule = class _PageAlertContainerModule {
};
_PageAlertContainerModule.ɵfac = function PageAlertContainerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PageAlertContainerModule)();
};
_PageAlertContainerModule.ɵmod = ɵɵdefineNgModule({
  type: _PageAlertContainerModule,
  imports: [CoreModule, ThemeSharedModule, SafeHtmlPipe, PageAlertContainerComponent],
  exports: [PageAlertContainerComponent]
});
_PageAlertContainerModule.ɵinj = ɵɵdefineInjector({
  imports: [CoreModule, ThemeSharedModule]
});
var PageAlertContainerModule = _PageAlertContainerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PageAlertContainerModule, [{
    type: NgModule,
    args: [{
      imports: [CoreModule, ThemeSharedModule, SafeHtmlPipe, PageAlertContainerComponent],
      exports: [PageAlertContainerComponent]
    }]
  }], null, null);
})();
var _DocumentDirService = class _DocumentDirService {
  constructor() {
    this.documentDirHandler = inject(DocumentDirHandlerService);
    this.document = inject(DOCUMENT);
  }
  listenDir() {
    this.documentDirHandler.dir$.subscribe((dir) => {
      this.document.documentElement.dir = dir;
    });
  }
};
_DocumentDirService.ɵfac = function DocumentDirService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DocumentDirService)();
};
_DocumentDirService.ɵprov = ɵɵdefineInjectable({
  token: _DocumentDirService,
  factory: _DocumentDirService.ɵfac,
  providedIn: "root"
});
var DocumentDirService = _DocumentDirService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentDirService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var DOCUMENT_DIR_PROVIDER = provideAppInitializer(() => {
  listenDirectionChangeFromAbp();
});
function listenDirectionChangeFromAbp() {
  const documentDirService = inject(DocumentDirService);
  documentDirService.listenDir();
}
var MOBILE_NAVBAR_ITEMS_FILTER_TOKEN = new InjectionToken("MOBILE_NAVBAR_ITEMS_FILTER_TOKEN");
var MOBILE_NAVBAR_ITEMS_FILTER_PROVIDER = {
  provide: MOBILE_NAVBAR_ITEMS_FILTER_TOKEN,
  deps: [],
  useFactory: mobileMenuItemFilterFnFactory
};
function mobileMenuItemFilterFnFactory() {
  return (route, index) => {
    return index === 0 || index === 1;
  };
}
var _LeptonXPageRenderService = class _LeptonXPageRenderService {
  shouldRender(type) {
    return type !== PageParts.breadcrumb;
  }
};
_LeptonXPageRenderService.ɵfac = function LeptonXPageRenderService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LeptonXPageRenderService)();
};
_LeptonXPageRenderService.ɵprov = ɵɵdefineInjectable({
  token: _LeptonXPageRenderService,
  factory: _LeptonXPageRenderService.ɵfac
});
var LeptonXPageRenderService = _LeptonXPageRenderService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeptonXPageRenderService, [{
    type: Injectable
  }], null, null);
})();
var PAGE_RENDER_PROVIDER = {
  provide: PAGE_RENDER_STRATEGY,
  useClass: LeptonXPageRenderService
};
function provideLeptonXAbpCore() {
  return makeEnvironmentProviders([DOCUMENT_DIR_PROVIDER, MOBILE_NAVBAR_ITEMS_FILTER_PROVIDER, PAGE_RENDER_PROVIDER]);
}
var _LeptonXAbpCoreModule = class _LeptonXAbpCoreModule {
  /**
   * @deprecated `LeptonXAbpCoreModule.forRoot()` is deprecated. You can use `provideLeptonXAbpCore` **function** instead.
   */
  static forRoot() {
    return {
      ngModule: _LeptonXAbpCoreModule,
      providers: [provideLeptonXAbpCore()]
    };
  }
};
_LeptonXAbpCoreModule.ɵfac = function LeptonXAbpCoreModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LeptonXAbpCoreModule)();
};
_LeptonXAbpCoreModule.ɵmod = ɵɵdefineNgModule({
  type: _LeptonXAbpCoreModule,
  imports: [CommonModule, PageAlertContainerModule, IfReplaceableTemplateExistsDirective],
  exports: [IfReplaceableTemplateExistsDirective, PageAlertContainerModule]
});
_LeptonXAbpCoreModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, PageAlertContainerModule, PageAlertContainerModule]
});
var LeptonXAbpCoreModule = _LeptonXAbpCoreModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeptonXAbpCoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PageAlertContainerModule, IfReplaceableTemplateExistsDirective],
      exports: [IfReplaceableTemplateExistsDirective, PageAlertContainerModule]
    }]
  }], null, null);
})();
var _AbpNavbarService = class _AbpNavbarService {
  constructor(routes, navbarService, localizationService, mobileMenuItemFilterFn) {
    this.routes = routes;
    this.navbarService = navbarService;
    this.localizationService = localizationService;
    this.mobileMenuItemFilterFn = mobileMenuItemFilterFn;
    this.mapRouteToNavItem = (route, index) => {
      const navbarItem = {
        text: this.localizationService.instant(route.name),
        link: route.children && route.children.length ? void 0 : route.path,
        icon: route.iconClass,
        children: this.getRouteChildrenAsNavItems(route.children || []),
        showOnMobileNavbar: this.mobileMenuItemFilterFn(route, index),
        group: route.group
      };
      if (route.breadcrumbText) {
        navbarItem.breadcrumbText = this.localizationService.instant(route.breadcrumbText);
      }
      return navbarItem;
    };
  }
  initRoutes() {
    this.routes.visible$.pipe(map((routes) => routes.filter((route) => route.path || route.children.length))).subscribe((routes) => {
      this.navbarService.setNavbarItems(...routes.map(this.mapRouteToNavItem));
    });
  }
  getRouteChildrenAsNavItems(children) {
    return children.map(this.mapRouteToNavItem);
  }
};
_AbpNavbarService.ɵfac = function AbpNavbarService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbpNavbarService)(ɵɵinject(RoutesService), ɵɵinject(NavbarService), ɵɵinject(LocalizationService), ɵɵinject(MOBILE_NAVBAR_ITEMS_FILTER_TOKEN));
};
_AbpNavbarService.ɵprov = ɵɵdefineInjectable({
  token: _AbpNavbarService,
  factory: _AbpNavbarService.ɵfac,
  providedIn: "root"
});
var AbpNavbarService = _AbpNavbarService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpNavbarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutesService
  }, {
    type: NavbarService
  }, {
    type: LocalizationService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MOBILE_NAVBAR_ITEMS_FILTER_TOKEN]
    }]
  }], null);
})();
var _AbpToolbarService = class _AbpToolbarService {
  constructor() {
    this.toolbar = inject(ToolbarService);
    this.navItems = inject(NavItemsService);
    this.permissionService = inject(PermissionService);
  }
  listenNavItems() {
    this.navItems.items$.pipe(switchMap((items) => this.permissionService.filterItemsByPolicy$(items))).subscribe((items) => this.toolbar.setItems(items));
  }
};
_AbpToolbarService.ɵfac = function AbpToolbarService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbpToolbarService)();
};
_AbpToolbarService.ɵprov = ɵɵdefineInjectable({
  token: _AbpToolbarService,
  factory: _AbpToolbarService.ɵfac,
  providedIn: "root"
});
var AbpToolbarService = _AbpToolbarService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpToolbarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  withLiteOptions,
  provideLpxLite,
  LpxModule,
  UserProfileComponent,
  UserProfileModule,
  LanguageSelectionComponent,
  LanguageSelectionModule,
  IfReplaceableTemplateExistsDirective,
  PageAlertContainerComponent,
  provideLeptonXAbpCore,
  LeptonXAbpCoreModule,
  AbpNavbarService,
  AbpToolbarService
};
//# sourceMappingURL=chunk-PABHTWFD.js.map
