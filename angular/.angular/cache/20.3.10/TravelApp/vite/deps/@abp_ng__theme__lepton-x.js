import {
  AbpNavbarService,
  AbpToolbarService,
  LpxModule,
  provideLeptonXAbpCore,
  provideLpxLite,
  withLiteOptions
} from "./chunk-PABHTWFD.js";
import {
  LPX_TRANSLATE_SERVICE_TOKEN,
  LanguageService,
  UserProfileService
} from "./chunk-TTFFSOBY.js";
import "./chunk-QJ372M7U.js";
import "./chunk-7LSFAQQI.js";
import {
  UserMenuService
} from "./chunk-ECZD44PI.js";
import "./chunk-VKRTUYJS.js";
import "./chunk-G7KX2FVW.js";
import {
  AuthService,
  ConfigStateService,
  CoreModule,
  LocalizationPipe,
  LocalizationService,
  NAVIGATE_TO_MANAGE_PROFILE,
  NgxValidateCoreModule,
  SessionStateService,
  VALIDATION_ERROR_TEMPLATE,
  VALIDATION_INVALID_CLASSES,
  VALIDATION_TARGET_SELECTOR,
  ValidationErrorComponent,
  getLocaleDirection
} from "./chunk-DOR275RM.js";
import "./chunk-5IKKBTZJ.js";
import "./chunk-XC2BQRUA.js";
import "./chunk-TH3T7PKV.js";
import "./chunk-UMUGP7NI.js";
import {
  CommonModule
} from "./chunk-6NN5GPUG.js";
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injectable,
  NgModule,
  ViewEncapsulation,
  combineLatest,
  filter,
  inject,
  makeEnvironmentProviders,
  of,
  provideAppInitializer,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-O2RWE6FT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7K3IQTKT.js";

// node_modules/@abp/ng.theme.lepton-x/fesm2022/abp-ng.theme.lepton-x.mjs
function ValidationErrorComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const error_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, error_r1.message, error_r1.interpoliteParams), " ");
  }
}
var _ValidationErrorComponent = class _ValidationErrorComponent extends ValidationErrorComponent {
  get abpErrors() {
    if (!this.errors || !this.errors.length) return [];
    return this.errors.map((error) => {
      if (!error.message) return __spreadProps(__spreadValues({}, error), {
        interpoliteParams: []
      });
      const index = error.message.indexOf("[");
      if (index > -1) {
        return __spreadProps(__spreadValues({}, error), {
          message: error.message.slice(0, index),
          interpoliteParams: error.message.slice(index + 1, error.message.length - 1).split(",")
        });
      }
      return __spreadProps(__spreadValues({}, error), {
        interpoliteParams: []
      });
    });
  }
};
_ValidationErrorComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵValidationErrorComponent_BaseFactory;
  return function ValidationErrorComponent_Factory(__ngFactoryType__) {
    return (ɵValidationErrorComponent_BaseFactory || (ɵValidationErrorComponent_BaseFactory = ɵɵgetInheritedFactory(_ValidationErrorComponent)))(__ngFactoryType__ || _ValidationErrorComponent);
  };
})();
_ValidationErrorComponent.ɵcmp = ɵɵdefineComponent({
  type: _ValidationErrorComponent,
  selectors: [["abp-validation-error"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 0,
  consts: [[1, "invalid-feedback"]],
  template: function ValidationErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵrepeaterCreate(0, ValidationErrorComponent_For_1_Template, 3, 4, "div", 0, ɵɵrepeaterTrackByIndex);
    }
    if (rf & 2) {
      ɵɵrepeater(ctx.abpErrors);
    }
  },
  dependencies: [LocalizationPipe],
  encapsulation: 2,
  changeDetection: 0
});
var ValidationErrorComponent2 = _ValidationErrorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidationErrorComponent2, [{
    type: Component,
    args: [{
      selector: "abp-validation-error",
      template: `
    @for (error of abpErrors; track $index) {
      <div class="invalid-feedback">
        {{ error.message | abpLocalization: error.interpoliteParams }}
      </div>
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [LocalizationPipe]
    }]
  }], null, null);
})();
var _AbpLanguageService = class _AbpLanguageService {
  constructor(configState, languageService, sessionState) {
    this.configState = configState;
    this.languageService = languageService;
    this.sessionState = sessionState;
    this.languages$ = this.configState.getDeep$("localization.languages");
    this.mapLang = (lang) => {
      return {
        cultureName: lang.cultureName,
        displayName: lang.displayName || "",
        selected: this.sessionState.getLanguage() === lang.cultureName,
        twoLetterISOLanguageName: lang.twoLetterISOLanguageName || "",
        //any is a workaround for the missing property in the LanguageInfo interface, if abp was updated to 7.0.2 or greater, this should be removed
        isRTL: getLocaleDirection(lang.cultureName) === "rtl"
      };
    };
  }
  subscribeLanguage() {
    this.languages$.pipe(filter(Boolean)).subscribe((langs) => {
      this.languageService.init(langs.map(this.mapLang));
    });
    this.languageService.selectedLanguage$.pipe(filter(Boolean)).subscribe((lang) => {
      this.sessionState.setLanguage(lang?.cultureName || "");
    });
  }
};
_AbpLanguageService.ɵfac = function AbpLanguageService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbpLanguageService)(ɵɵinject(ConfigStateService), ɵɵinject(LanguageService), ɵɵinject(SessionStateService));
};
_AbpLanguageService.ɵprov = ɵɵdefineInjectable({
  token: _AbpLanguageService,
  factory: _AbpLanguageService.ɵfac,
  providedIn: "root"
});
var AbpLanguageService = _AbpLanguageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpLanguageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConfigStateService
  }, {
    type: LanguageService
  }, {
    type: SessionStateService
  }], null);
})();
var LPX_LANGUAGE_PROVIDER = provideAppInitializer(() => {
  const languageService = inject(AbpLanguageService);
  languageService.subscribeLanguage();
});
var _AbpTranslateService = class _AbpTranslateService {
  constructor(localization) {
    this.localization = localization;
  }
  get(key, defaultValue) {
    const keyToTranslate = this.getKey(key);
    if (keyToTranslate) {
      return this.localization.instant({
        key: keyToTranslate,
        defaultValue
      });
    }
    return defaultValue || key;
  }
  get$(key, defaultValue) {
    const keyToTranslate = this.getKey(key);
    if (keyToTranslate) {
      return this.localization.get({
        key: keyToTranslate,
        defaultValue
      });
    }
    return of(defaultValue || key);
  }
  getKey(key) {
    return key.includes("::") ? key : void 0;
  }
};
_AbpTranslateService.ɵfac = function AbpTranslateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbpTranslateService)(ɵɵinject(LocalizationService));
};
_AbpTranslateService.ɵprov = ɵɵdefineInjectable({
  token: _AbpTranslateService,
  factory: _AbpTranslateService.ɵfac
});
var AbpTranslateService = _AbpTranslateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpTranslateService, [{
    type: Injectable
  }], () => [{
    type: LocalizationService
  }], null);
})();
var LPX_TRANSLATE_PROVIDER = {
  provide: LPX_TRANSLATE_SERVICE_TOKEN,
  useClass: AbpTranslateService
};
var _AbpUserProfileService = class _AbpUserProfileService {
  constructor(configState, userProfileService, navigateToManageProfile, userMenuService) {
    this.configState = configState;
    this.userProfileService = userProfileService;
    this.navigateToManageProfile = navigateToManageProfile;
    this.userMenuService = userMenuService;
    this.currentUser$ = this.configState.getOne$("currentUser");
  }
  subscribeUser() {
    combineLatest([this.currentUser$.pipe(filter(Boolean)), this.userMenuService.items$]).subscribe(([user, userMenuItems]) => {
      const userActionGroups = userMenuItems.reduce((acc, curr) => {
        let menuItemVisibility = () => true;
        if (typeof curr.visible === "function") {
          menuItemVisibility = (_prop, injector) => curr.visible(curr, injector);
        }
        const menuItem = {
          icon: curr.textTemplate?.icon,
          text: curr.textTemplate?.text,
          component: curr?.component,
          action: () => {
            curr.action();
            return of(true);
          },
          visible: menuItemVisibility
        };
        acc[0].push(menuItem);
        return acc;
      }, [[]]);
      this.userProfileService.setUser({
        id: user.id,
        isAuthenticated: user.isAuthenticated,
        fullName: user.name || user.userName || "",
        email: user.email || "",
        userName: user.userName || "",
        avatar: {
          type: "icon",
          source: "bi bi-person-circle"
        },
        userActionGroups
      });
    });
  }
};
_AbpUserProfileService.ɵfac = function AbpUserProfileService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbpUserProfileService)(ɵɵinject(ConfigStateService), ɵɵinject(UserProfileService), ɵɵinject(NAVIGATE_TO_MANAGE_PROFILE), ɵɵinject(UserMenuService));
};
_AbpUserProfileService.ɵprov = ɵɵdefineInjectable({
  token: _AbpUserProfileService,
  factory: _AbpUserProfileService.ɵfac,
  providedIn: "root"
});
var AbpUserProfileService = _AbpUserProfileService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpUserProfileService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConfigStateService
  }, {
    type: UserProfileService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NAVIGATE_TO_MANAGE_PROFILE]
    }]
  }, {
    type: UserMenuService
  }], null);
})();
var LPX_USER_PROVIDER = provideAppInitializer(() => {
  const userProfile = inject(AbpUserProfileService);
  userProfile.subscribeUser();
});
var eUserMenuItems;
(function(eUserMenuItems2) {
  eUserMenuItems2["MyAccount"] = "MyAccount";
  eUserMenuItems2["Logout"] = "Logout";
})(eUserMenuItems || (eUserMenuItems = {}));
var LEPTON_X_USER_MENU_PROVIDERS = [provideAppInitializer(() => {
  configureUserMenu();
})];
function configureUserMenu() {
  const userMenu = inject(UserMenuService);
  const authService = inject(AuthService);
  const navigateToManageProfile = inject(NAVIGATE_TO_MANAGE_PROFILE);
  userMenu.addItems([{
    id: eUserMenuItems.MyAccount,
    order: 100,
    textTemplate: {
      text: "AbpAccount::MyAccount"
    },
    action: () => navigateToManageProfile()
  }, {
    id: eUserMenuItems.Logout,
    order: 101,
    textTemplate: {
      text: "AbpUi::Logout"
    },
    action: () => authService.logout().subscribe()
  }]);
}
var INIT_SERVICE_PROVIDER = provideAppInitializer(() => {
  const abpToolbarService = inject(AbpToolbarService);
  const abpNavbarService = inject(AbpNavbarService);
  abpToolbarService.listenNavItems();
  abpNavbarService.initRoutes();
});
var ThemeLeptonXFeatureKind;
(function(ThemeLeptonXFeatureKind2) {
  ThemeLeptonXFeatureKind2[ThemeLeptonXFeatureKind2["Options"] = 0] = "Options";
})(ThemeLeptonXFeatureKind || (ThemeLeptonXFeatureKind = {}));
function makeThemeLeptonXFeature(kind, providers) {
  return {
    ɵkind: kind,
    ɵproviders: providers
  };
}
function withThemeLeptonXOptions(options = {}) {
  const optionsWithStyles = __spreadProps(__spreadValues({}, options), {
    styleFactory: (styles) => {
      styles.push({
        bundleName: "abp-bundle"
      });
      if (options?.styleFactory) {
        return options.styleFactory(styles);
      }
      return styles;
    }
  });
  return makeThemeLeptonXFeature(ThemeLeptonXFeatureKind.Options, [provideLpxLite(withLiteOptions(optionsWithStyles))]);
}
function provideValidationError() {
  const providers = [{
    provide: VALIDATION_ERROR_TEMPLATE,
    useValue: ValidationErrorComponent2
  }, {
    provide: VALIDATION_TARGET_SELECTOR,
    useValue: ".form-group"
  }, {
    provide: VALIDATION_INVALID_CLASSES,
    useValue: "is-invalid"
  }];
  return makeEnvironmentProviders(providers);
}
function provideThemeLeptonX(...features) {
  const providers = [LPX_USER_PROVIDER, LPX_LANGUAGE_PROVIDER, LPX_TRANSLATE_PROVIDER, LEPTON_X_USER_MENU_PROVIDERS, INIT_SERVICE_PROVIDER, provideLpxLite(), provideValidationError(), provideLeptonXAbpCore()];
  features.forEach(({
    ɵproviders
  }) => providers.push(...ɵproviders));
  return makeEnvironmentProviders(providers);
}
var _ValidationErrorModule = class _ValidationErrorModule {
  /**
   * @deprecated `ValidationErrorModule.forRoot()` is deprecated. You can use `provideValidationError` **function** instead.
   */
  static forRoot() {
    return {
      ngModule: _ValidationErrorModule,
      providers: [provideValidationError()]
    };
  }
};
_ValidationErrorModule.ɵfac = function ValidationErrorModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ValidationErrorModule)();
};
_ValidationErrorModule.ɵmod = ɵɵdefineNgModule({
  type: _ValidationErrorModule,
  imports: [CommonModule, CoreModule, NgxValidateCoreModule, ValidationErrorComponent2],
  exports: [ValidationErrorComponent2, NgxValidateCoreModule]
});
_ValidationErrorModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, CoreModule, NgxValidateCoreModule, NgxValidateCoreModule]
});
var ValidationErrorModule = _ValidationErrorModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValidationErrorModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CoreModule, NgxValidateCoreModule, ValidationErrorComponent2],
      exports: [ValidationErrorComponent2, NgxValidateCoreModule]
    }]
  }], null, null);
})();
var _ThemeLeptonXModule = class _ThemeLeptonXModule {
  /**
   * @deprecated `ThemeLeptonXModule.forRoot()` is deprecated. You can use `provideThemeLeptonX` **function** instead.
   */
  static forRoot(options) {
    return {
      ngModule: _ThemeLeptonXModule,
      providers: [provideThemeLeptonX(withThemeLeptonXOptions(options))]
    };
  }
};
_ThemeLeptonXModule.ɵfac = function ThemeLeptonXModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ThemeLeptonXModule)();
};
_ThemeLeptonXModule.ɵmod = ɵɵdefineNgModule({
  type: _ThemeLeptonXModule,
  imports: [LpxModule, ValidationErrorModule]
});
_ThemeLeptonXModule.ɵinj = ɵɵdefineInjector({
  imports: [LpxModule, ValidationErrorModule]
});
var ThemeLeptonXModule = _ThemeLeptonXModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeLeptonXModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [LpxModule, ValidationErrorModule],
      exports: []
    }]
  }], null, null);
})();
export {
  AbpLanguageService,
  AbpTranslateService,
  AbpUserProfileService,
  INIT_SERVICE_PROVIDER,
  LEPTON_X_USER_MENU_PROVIDERS,
  LPX_LANGUAGE_PROVIDER,
  LPX_TRANSLATE_PROVIDER,
  LPX_USER_PROVIDER,
  ThemeLeptonXFeatureKind,
  ThemeLeptonXModule,
  ValidationErrorComponent2 as ValidationErrorComponent,
  ValidationErrorModule,
  configureUserMenu,
  eUserMenuItems,
  provideThemeLeptonX,
  provideValidationError,
  withThemeLeptonXOptions
};
//# sourceMappingURL=@abp_ng__theme__lepton-x.js.map
