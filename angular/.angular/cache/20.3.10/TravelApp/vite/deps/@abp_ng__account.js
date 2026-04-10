import {
  EXTENSIBLE_FORM_VIEW_PROVIDER,
  EXTENSIONS_FORM_PROP,
  EXTENSIONS_IDENTIFIER,
  ExtensibleFormComponent,
  ExtensionsService,
  FormProp,
  FormPropData,
  generateFormFromProps,
  getObjectExtensionEntitiesFromStore,
  mapEntitiesToContributors,
  mergeWithDefaultProps
} from "./chunk-7LSFAQQI.js";
import {
  ButtonComponent,
  Confirmation,
  ConfirmationService,
  LoadingDirective,
  ToasterService,
  fadeIn,
  getPasswordValidators
} from "./chunk-ECZD44PI.js";
import "./chunk-VKRTUYJS.js";
import {
  transition,
  trigger,
  useAnimation
} from "./chunk-G7KX2FVW.js";
import {
  AuthService,
  AutofocusDirective,
  ConfigStateService,
  InternalStore,
  LazyModuleFactory,
  LocalizationPipe,
  NgxValidateCoreModule,
  ReplaceableRouteContainerComponent,
  ReplaceableTemplateDirective,
  RestService,
  RouterOutletComponent,
  ValidationDirective,
  ValidationGroupDirective,
  authGuard,
  comparePasswords,
  mapEnumToOptions
} from "./chunk-DOR275RM.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-5IKKBTZJ.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
  ɵNgNoValidate
} from "./chunk-XC2BQRUA.js";
import "./chunk-TH3T7PKV.js";
import "./chunk-UMUGP7NI.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass
} from "./chunk-6NN5GPUG.js";
import {
  Component,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  catchError,
  filter,
  finalize,
  inject,
  map,
  setClassMetadata,
  switchMap,
  tap,
  throwError,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-O2RWE6FT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7K3IQTKT.js";

// node_modules/@abp/ng.account.core/fesm2022/abp-ng.account.core-proxy.mjs
var LoginResultType;
(function(LoginResultType2) {
  LoginResultType2[LoginResultType2["Success"] = 1] = "Success";
  LoginResultType2[LoginResultType2["InvalidUserNameOrPassword"] = 2] = "InvalidUserNameOrPassword";
  LoginResultType2[LoginResultType2["NotAllowed"] = 3] = "NotAllowed";
  LoginResultType2[LoginResultType2["LockedOut"] = 4] = "LockedOut";
  LoginResultType2[LoginResultType2["RequiresTwoFactor"] = 5] = "RequiresTwoFactor";
})(LoginResultType || (LoginResultType = {}));
var loginResultTypeOptions = mapEnumToOptions(LoginResultType);
var index$4 = Object.freeze({
  __proto__: null,
  get LoginResultType() {
    return LoginResultType;
  },
  loginResultTypeOptions
});
var _a;
var AccountService$1 = (_a = class {
  constructor(restService) {
    this.restService = restService;
    this.apiName = "AbpAccount";
    this.checkPasswordByLogin = (login) => this.restService.request({
      method: "POST",
      url: "/api/account/check-password",
      body: login
    }, {
      apiName: this.apiName
    });
    this.loginByLogin = (login) => this.restService.request({
      method: "POST",
      url: "/api/account/login",
      body: login
    }, {
      apiName: this.apiName
    });
    this.logout = () => this.restService.request({
      method: "GET",
      url: "/api/account/logout"
    }, {
      apiName: this.apiName
    });
  }
}, _a.ɵfac = function AccountService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _a)(ɵɵinject(RestService));
}, _a.ɵprov = ɵɵdefineInjectable({
  token: _a,
  factory: _a.ɵfac,
  providedIn: "root"
}), _a);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountService$1, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RestService
  }], null);
})();
var index$3 = Object.freeze({
  __proto__: null,
  AccountService: AccountService$1,
  Models: index$4
});
var index$2 = Object.freeze({
  __proto__: null,
  Controllers: index$3
});
var index$1 = Object.freeze({
  __proto__: null,
  Account: index$2
});
var index = Object.freeze({
  __proto__: null,
  Areas: index$1
});
var _AccountService = class _AccountService {
  constructor(restService) {
    this.restService = restService;
    this.apiName = "AbpAccount";
    this.register = (input) => this.restService.request({
      method: "POST",
      url: "/api/account/register",
      body: input
    }, {
      apiName: this.apiName
    });
    this.resetPassword = (input) => this.restService.request({
      method: "POST",
      url: "/api/account/reset-password",
      body: input
    }, {
      apiName: this.apiName
    });
    this.sendPasswordResetCode = (input) => this.restService.request({
      method: "POST",
      url: "/api/account/send-password-reset-code",
      body: input
    }, {
      apiName: this.apiName
    });
  }
};
_AccountService.ɵfac = function AccountService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AccountService)(ɵɵinject(RestService));
};
_AccountService.ɵprov = ɵɵdefineInjectable({
  token: _AccountService,
  factory: _AccountService.ɵfac,
  providedIn: "root"
});
var AccountService = _AccountService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RestService
  }], null);
})();
var _ProfileService = class _ProfileService {
  constructor(restService) {
    this.restService = restService;
    this.apiName = "AbpAccount";
    this.changePassword = (input) => this.restService.request({
      method: "POST",
      url: "/api/account/my-profile/change-password",
      body: input
    }, {
      apiName: this.apiName
    });
    this.get = () => this.restService.request({
      method: "GET",
      url: "/api/account/my-profile"
    }, {
      apiName: this.apiName
    });
    this.update = (input) => this.restService.request({
      method: "PUT",
      url: "/api/account/my-profile",
      body: input
    }, {
      apiName: this.apiName
    });
  }
};
_ProfileService.ɵfac = function ProfileService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProfileService)(ɵɵinject(RestService));
};
_ProfileService.ɵprov = ɵɵdefineInjectable({
  token: _ProfileService,
  factory: _ProfileService.ɵfac,
  providedIn: "root"
});
var ProfileService = _ProfileService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RestService
  }], null);
})();

// node_modules/@abp/ng.account/fesm2022/abp-ng.account.mjs
function ChangePasswordComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1)(1, "label", 7);
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span");
    ɵɵtext(5, " * ");
    ɵɵelementEnd();
    ɵɵelement(6, "input", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 1, "AbpIdentity::DisplayName:CurrentPassword"));
  }
}
function ForgotPasswordComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 1);
    ɵɵlistener("ngSubmit", function ForgotPasswordComponent_Conditional_3_Template_form_ngSubmit_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSubmit());
    });
    ɵɵelementStart(1, "p");
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 2)(5, "label", 3);
    ɵɵtext(6);
    ɵɵpipe(7, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(8, "span");
    ɵɵtext(9, " * ");
    ɵɵelementEnd();
    ɵɵelement(10, "input", 4);
    ɵɵelementEnd();
    ɵɵelementStart(11, "abp-button", 5);
    ɵɵtext(12);
    ɵɵpipe(13, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(14, "a", 6);
    ɵɵelement(15, "i", 7);
    ɵɵtext(16);
    ɵɵpipe(17, "abpLocalization");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.form)("validateOnSubmit", true);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 8, "AbpAccount::SendPasswordResetLink_Information"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(7, 10, "AbpAccount::EmailAddress"));
    ɵɵadvance(5);
    ɵɵproperty("loading", ctx_r1.inProgress)("disabled", ctx_r1.form == null ? null : ctx_r1.form.invalid);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(13, 12, "AbpAccount::Submit"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(17, 14, "AbpAccount::Login"));
  }
}
function ForgotPasswordComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(3, "a", 6)(4, "button", 8);
    ɵɵelement(5, "i", 7);
    ɵɵtext(6);
    ɵɵpipe(7, "abpLocalization");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "AbpAccount::PasswordResetMailSentMessage"), " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 4, "AbpAccount::BackToLogin"), " ");
  }
}
function LoginComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "strong");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementStart(3, "a", 14);
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "AbpAccount::AreYouANewUser"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 4, "AbpAccount::Register"));
  }
}
function PersonalSettingsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 1);
    ɵɵlistener("ngSubmit", function PersonalSettingsComponent_Conditional_0_Template_form_ngSubmit_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.submit());
    });
    ɵɵelement(1, "abp-extensible-form", 2);
    ɵɵelementStart(2, "abp-button", 3);
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.form);
    ɵɵadvance();
    ɵɵproperty("selectedRecord", ctx_r1.selected);
    ɵɵadvance();
    ɵɵproperty("loading", ctx_r1.inProgress);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 4, "AbpIdentity::Save"));
  }
}
var _c0 = (a0) => ({
  active: a0
});
var _c1 = (a0) => ({
  componentKey: a0
});
function ManageProfileComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 10);
    ɵɵlistener("click", function ManageProfileComponent_Conditional_7_Template_li_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.selectedTab = 0);
    });
    ɵɵelementStart(1, "a", 8);
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c0, ctx_r1.selectedTab === 0));
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "AbpUi::ChangePassword"));
  }
}
function ManageProfileComponent_Conditional_13_Conditional_1_abp_change_password_form_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "abp-change-password-form");
  }
}
function ManageProfileComponent_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11)(1, "div", 12)(2, "h4");
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelement(5, "hr");
    ɵɵelementEnd();
    ɵɵtemplate(6, ManageProfileComponent_Conditional_13_Conditional_1_abp_change_password_form_6_Template, 1, 0, "abp-change-password-form", 13);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("@fadeIn", void 0);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 3, "AbpIdentity::ChangePassword"), " ");
    ɵɵadvance(3);
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(5, _c1, ctx_r1.changePasswordKey));
  }
}
function ManageProfileComponent_Conditional_13_Conditional_2_abp_personal_settings_form_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "abp-personal-settings-form");
  }
}
function ManageProfileComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11)(1, "div", 12)(2, "h4");
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelement(5, "hr");
    ɵɵelementEnd();
    ɵɵtemplate(6, ManageProfileComponent_Conditional_13_Conditional_2_abp_personal_settings_form_6_Template, 1, 0, "abp-personal-settings-form", 13);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("@fadeIn", void 0);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 3, "AbpIdentity::PersonalSettings"), " ");
    ɵɵadvance(3);
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction1(5, _c1, ctx_r1.personalSettingsKey));
  }
}
function ManageProfileComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵconditionalCreate(1, ManageProfileComponent_Conditional_13_Conditional_1_Template, 7, 7, "div", 11);
    ɵɵconditionalCreate(2, ManageProfileComponent_Conditional_13_Conditional_2_Template, 7, 7, "div", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r1.selectedTab === 0 ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.selectedTab === 1 ? 2 : -1);
  }
}
function RegisterComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 2);
    ɵɵlistener("ngSubmit", function RegisterComponent_Conditional_9_Template_form_ngSubmit_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSubmit());
    });
    ɵɵelementStart(1, "div", 3)(2, "label", 4);
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(5, "span");
    ɵɵtext(6, " * ");
    ɵɵelementEnd();
    ɵɵelement(7, "input", 5);
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 3)(9, "label", 6);
    ɵɵtext(10);
    ɵɵpipe(11, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(12, "span");
    ɵɵtext(13, " * ");
    ɵɵelementEnd();
    ɵɵelement(14, "input", 7);
    ɵɵelementEnd();
    ɵɵelementStart(15, "div", 3)(16, "label", 8);
    ɵɵtext(17);
    ɵɵpipe(18, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(19, "span");
    ɵɵtext(20, " * ");
    ɵɵelementEnd();
    ɵɵelement(21, "input", 9);
    ɵɵelementEnd();
    ɵɵelementStart(22, "abp-button", 10);
    ɵɵtext(23);
    ɵɵpipe(24, "abpLocalization");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.form);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 6, "AbpAccount::UserName"));
    ɵɵadvance(7);
    ɵɵtextInterpolate(ɵɵpipeBind1(11, 8, "AbpAccount::EmailAddress"));
    ɵɵadvance(7);
    ɵɵtextInterpolate(ɵɵpipeBind1(18, 10, "AbpAccount::Password"));
    ɵɵadvance(5);
    ɵɵproperty("loading", ctx_r1.inProgress);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(24, 12, "AbpAccount::Register"), " ");
  }
}
function ResetPasswordComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 1);
    ɵɵlistener("ngSubmit", function ResetPasswordComponent_Conditional_3_Template_form_ngSubmit_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSubmit());
    });
    ɵɵelementStart(1, "p");
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 2)(5, "label", 3);
    ɵɵtext(6);
    ɵɵpipe(7, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(8, "span");
    ɵɵtext(9, " * ");
    ɵɵelementEnd();
    ɵɵelement(10, "input", 4);
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 2)(12, "label", 5);
    ɵɵtext(13);
    ɵɵpipe(14, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(15, "span");
    ɵɵtext(16, " * ");
    ɵɵelementEnd();
    ɵɵelement(17, "input", 6);
    ɵɵelementEnd();
    ɵɵelementStart(18, "button", 7);
    ɵɵtext(19);
    ɵɵpipe(20, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(21, "abp-button", 8);
    ɵɵlistener("click", function ResetPasswordComponent_Conditional_3_Template_abp_button_click_21_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSubmit());
    });
    ɵɵtext(22);
    ɵɵpipe(23, "abpLocalization");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.form)("mapErrorsFn", ctx_r1.mapErrorsFn);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 8, "AbpAccount::ResetPassword_Information"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(7, 10, "AbpAccount::Password"));
    ɵɵadvance(7);
    ɵɵtextInterpolate(ɵɵpipeBind1(14, 12, "AbpAccount::ConfirmPassword"));
    ɵɵadvance(6);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(20, 14, "AbpAccount::Cancel"), " ");
    ɵɵadvance(2);
    ɵɵproperty("loading", ctx_r1.inProgress);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(23, 16, "AbpAccount::Submit"), " ");
  }
}
function ResetPasswordComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(3, "a", 9)(4, "button", 10);
    ɵɵtext(5);
    ɵɵpipe(6, "abpLocalization");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "AbpAccount::YourPasswordIsSuccessfullyReset"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 4, "AbpAccount::BackToLogin"), " ");
  }
}
var ACCOUNT_CONFIG_OPTIONS = new InjectionToken("ACCOUNT_CONFIG_OPTIONS");
function accountConfigOptionsFactory(options) {
  return __spreadValues({
    redirectUrl: "/"
  }, options);
}
var _AuthenticationFlowGuard = class _AuthenticationFlowGuard {
  constructor() {
    this.authService = inject(AuthService);
  }
  canActivate() {
    if (this.authService.isInternalAuth) return true;
    this.authService.navigateToLogin();
    return false;
  }
};
_AuthenticationFlowGuard.ɵfac = function AuthenticationFlowGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthenticationFlowGuard)();
};
_AuthenticationFlowGuard.ɵprov = ɵɵdefineInjectable({
  token: _AuthenticationFlowGuard,
  factory: _AuthenticationFlowGuard.ɵfac
});
var AuthenticationFlowGuard = _AuthenticationFlowGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthenticationFlowGuard, [{
    type: Injectable
  }], null, null);
})();
var authenticationFlowGuard = () => {
  const authService = inject(AuthService);
  if (authService.isInternalAuth) return true;
  authService.navigateToLogin();
  return false;
};
var RE_LOGIN_CONFIRMATION_TOKEN = new InjectionToken("RE_LOGIN_CONFIRMATION_TOKEN");
var _PersonalSettingsHalfRowComponent = class _PersonalSettingsHalfRowComponent {
  constructor(propData) {
    this.propData = propData;
    this.displayName = propData.displayName;
    this.name = propData.name;
    this.id = propData.id || "";
  }
};
_PersonalSettingsHalfRowComponent.ɵfac = function PersonalSettingsHalfRowComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PersonalSettingsHalfRowComponent)(ɵɵdirectiveInject(EXTENSIONS_FORM_PROP));
};
_PersonalSettingsHalfRowComponent.ɵcmp = ɵɵdefineComponent({
  type: _PersonalSettingsHalfRowComponent,
  selectors: [["abp-personal-settings-half-row"]],
  features: [ɵɵProvidersFeature([], [EXTENSIBLE_FORM_VIEW_PROVIDER])],
  decls: 5,
  vars: 7,
  consts: [[1, "w-50", "d-inline"], [1, "form-label"], ["type", "text", 1, "form-control", 3, "formControlName"]],
  template: function PersonalSettingsHalfRowComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "label", 1);
      ɵɵtext(2);
      ɵɵpipe(3, "abpLocalization");
      ɵɵelementEnd();
      ɵɵelement(4, "input", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵattribute("for", ctx.name);
      ɵɵadvance();
      ɵɵtextInterpolate1("", ɵɵpipeBind1(3, 5, ctx.displayName), " ");
      ɵɵadvance(2);
      ɵɵproperty("formControlName", ctx.name);
      ɵɵattribute("id", ctx.id)("name", ctx.name);
    }
  },
  dependencies: [ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlName, LocalizationPipe],
  encapsulation: 2
});
var PersonalSettingsHalfRowComponent = _PersonalSettingsHalfRowComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonalSettingsHalfRowComponent, [{
    type: Component,
    args: [{
      selector: "abp-personal-settings-half-row",
      template: ` <div class="w-50 d-inline">
    <label [attr.for]="name" class="form-label">{{ displayName | abpLocalization }} </label>
    <input
      type="text"
      [attr.id]="id"
      class="form-control"
      [attr.name]="name"
      [formControlName]="name"
    />
  </div>`,
      viewProviders: [EXTENSIBLE_FORM_VIEW_PROVIDER],
      imports: [ReactiveFormsModule, LocalizationPipe]
    }]
  }], () => [{
    type: FormProp,
    decorators: [{
      type: Inject,
      args: [EXTENSIONS_FORM_PROP]
    }]
  }], null);
})();
var {
  maxLength: maxLength$2,
  required: required$3,
  email: email$1
} = Validators;
var DEFAULT_PERSONAL_SETTINGS_UPDATE_FORM_PROPS = FormProp.createMany([{
  type: "string",
  name: "userName",
  displayName: "AbpIdentity::DisplayName:UserName",
  id: "username",
  validators: () => [required$3, maxLength$2(256)]
}, {
  type: "string",
  name: "name",
  displayName: "AbpIdentity::DisplayName:Name",
  id: "name",
  validators: () => [maxLength$2(64)],
  template: PersonalSettingsHalfRowComponent,
  className: "d-inline-block w-50"
}, {
  type: "string",
  name: "surname",
  displayName: "AbpIdentity::DisplayName:Surname",
  id: "surname",
  validators: () => [maxLength$2(64)],
  className: "d-inline-block w-50 ps-4",
  template: PersonalSettingsHalfRowComponent
}, {
  type: "string",
  name: "email",
  displayName: "AbpIdentity::DisplayName:Email",
  id: "email-address",
  validators: () => [required$3, email$1, maxLength$2(256)]
}, {
  type: "string",
  name: "phoneNumber",
  displayName: "AbpIdentity::DisplayName:PhoneNumber",
  id: "phone-number",
  validators: () => [maxLength$2(16)]
}]);
var DEFAULT_ACCOUNT_FORM_PROPS = {
  [
    "Account.PersonalSettingsComponent"
    /* eAccountComponents.PersonalSettings */
  ]: DEFAULT_PERSONAL_SETTINGS_UPDATE_FORM_PROPS
};
var ACCOUNT_EDIT_FORM_PROP_CONTRIBUTORS = new InjectionToken("ACCOUNT_EDIT_FORM_PROP_CONTRIBUTORS");
var _AccountExtensionsGuard = class _AccountExtensionsGuard {
  constructor() {
    this.injector = inject(Injector);
    this.extensions = inject(ExtensionsService);
  }
  canActivate() {
    const config = {
      optional: true
    };
    const editFormContributors = inject(ACCOUNT_EDIT_FORM_PROP_CONTRIBUTORS, config) || {};
    return getObjectExtensionEntitiesFromStore(this.injector, "Identity").pipe(map((entities) => ({
      [
        "Account.PersonalSettingsComponent"
        /* eAccountComponents.PersonalSettings */
      ]: entities.User
    })), mapEntitiesToContributors(this.injector, "AbpIdentity"), tap((objectExtensionContributors) => {
      mergeWithDefaultProps(this.extensions.editFormProps, DEFAULT_ACCOUNT_FORM_PROPS, objectExtensionContributors.editForm, editFormContributors);
    }), map(() => true));
  }
};
_AccountExtensionsGuard.ɵfac = function AccountExtensionsGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AccountExtensionsGuard)();
};
_AccountExtensionsGuard.ɵprov = ɵɵdefineInjectable({
  token: _AccountExtensionsGuard,
  factory: _AccountExtensionsGuard.ɵfac
});
var AccountExtensionsGuard = _AccountExtensionsGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountExtensionsGuard, [{
    type: Injectable
  }], null, null);
})();
var _ManageProfileStateService = class _ManageProfileStateService {
  constructor() {
    this.store = new InternalStore({});
  }
  get createOnUpdateStream() {
    return this.store.sliceUpdate;
  }
  getProfile$() {
    return this.store.sliceState((state) => state.profile);
  }
  getProfile() {
    return this.store.state.profile;
  }
  setProfile(profile) {
    this.store.patch({
      profile
    });
  }
};
_ManageProfileStateService.ɵfac = function ManageProfileStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ManageProfileStateService)();
};
_ManageProfileStateService.ɵprov = ɵɵdefineInjectable({
  token: _ManageProfileStateService,
  factory: _ManageProfileStateService.ɵfac,
  providedIn: "root"
});
var ManageProfileStateService = _ManageProfileStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManageProfileStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var {
  required: required$2
} = Validators;
var PASSWORD_FIELDS$1 = ["newPassword", "repeatNewPassword"];
var _ChangePasswordComponent = class _ChangePasswordComponent {
  constructor(fb, injector, toasterService, profileService, manageProfileState) {
    this.fb = fb;
    this.injector = injector;
    this.toasterService = toasterService;
    this.profileService = profileService;
    this.manageProfileState = manageProfileState;
    this.mapErrorsFn = (errors, groupErrors, control) => {
      if (PASSWORD_FIELDS$1.indexOf(String(control?.name)) < 0) return errors;
      return errors.concat(groupErrors.filter(({
        key
      }) => key === "passwordMismatch"));
    };
  }
  ngOnInit() {
    this.hideCurrentPassword = !this.manageProfileState.getProfile()?.hasPassword;
    const passwordValidations = getPasswordValidators(this.injector);
    this.form = this.fb.group({
      password: ["", required$2],
      newPassword: ["", {
        validators: [required$2, ...passwordValidations]
      }],
      repeatNewPassword: ["", {
        validators: [required$2, ...passwordValidations]
      }]
    }, {
      validators: [comparePasswords(PASSWORD_FIELDS$1)]
    });
    if (this.hideCurrentPassword) this.form.removeControl("password");
  }
  onSubmit() {
    if (this.form.invalid) return;
    this.inProgress = true;
    this.profileService.changePassword(__spreadProps(__spreadValues({}, !this.hideCurrentPassword && {
      currentPassword: this.form.get("password")?.value
    }), {
      newPassword: this.form.get("newPassword")?.value
    })).pipe(finalize(() => this.inProgress = false)).subscribe({
      next: () => {
        this.form.reset();
        this.toasterService.success("AbpAccount::PasswordChangedMessage", "", {
          life: 5e3
        });
        if (this.hideCurrentPassword) {
          this.hideCurrentPassword = false;
          this.form.addControl("password", new UntypedFormControl("", [required$2]));
        }
      },
      error: (err) => {
        this.toasterService.error(err.error?.error?.message || "AbpAccount::DefaultErrorMessage");
      }
    });
  }
};
_ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChangePasswordComponent)(ɵɵdirectiveInject(UntypedFormBuilder), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ToasterService), ɵɵdirectiveInject(ProfileService), ɵɵdirectiveInject(ManageProfileStateService));
};
_ChangePasswordComponent.ɵcmp = ɵɵdefineComponent({
  type: _ChangePasswordComponent,
  selectors: [["abp-change-password-form"]],
  exportAs: ["abpChangePasswordForm"],
  decls: 19,
  vars: 15,
  consts: [[1, "abp-md-form", 3, "ngSubmit", "formGroup", "mapErrorsFn", "validateOnSubmit"], [1, "mb-3", "form-group"], ["for", "new-password", 1, "form-label"], ["type", "password", "id", "new-password", "formControlName", "newPassword", "autocomplete", "new-password", 1, "form-control"], ["for", "confirm-new-password", 1, "form-label"], ["type", "password", "id", "confirm-new-password", "formControlName", "repeatNewPassword", "autocomplete", "new-password", 1, "form-control"], ["iconClass", "fa fa-check", "buttonClass", "btn btn-primary color-white", "buttonType", "submit", 3, "loading", "disabled"], ["for", "current-password", 1, "form-label"], ["type", "password", "id", "current-password", "formControlName", "password", "autofocus", "", "autocomplete", "current-password", 1, "form-control"]],
  template: function ChangePasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "form", 0);
      ɵɵlistener("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_0_listener() {
        return ctx.onSubmit();
      });
      ɵɵconditionalCreate(1, ChangePasswordComponent_Conditional_1_Template, 7, 3, "div", 1);
      ɵɵelementStart(2, "div", 1)(3, "label", 2);
      ɵɵtext(4);
      ɵɵpipe(5, "abpLocalization");
      ɵɵelementEnd();
      ɵɵelementStart(6, "span");
      ɵɵtext(7, " * ");
      ɵɵelementEnd();
      ɵɵelement(8, "input", 3);
      ɵɵelementEnd();
      ɵɵelementStart(9, "div", 1)(10, "label", 4);
      ɵɵtext(11);
      ɵɵpipe(12, "abpLocalization");
      ɵɵelementEnd();
      ɵɵelementStart(13, "span");
      ɵɵtext(14, " * ");
      ɵɵelementEnd();
      ɵɵelement(15, "input", 5);
      ɵɵelementEnd();
      ɵɵelementStart(16, "abp-button", 6);
      ɵɵtext(17);
      ɵɵpipe(18, "abpLocalization");
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("formGroup", ctx.form)("mapErrorsFn", ctx.mapErrorsFn)("validateOnSubmit", true);
      ɵɵadvance();
      ɵɵconditional(!ctx.hideCurrentPassword ? 1 : -1);
      ɵɵadvance(3);
      ɵɵtextInterpolate(ɵɵpipeBind1(5, 9, "AbpIdentity::DisplayName:NewPassword"));
      ɵɵadvance(7);
      ɵɵtextInterpolate(ɵɵpipeBind1(12, 11, "AbpIdentity::DisplayName:NewPasswordConfirm"));
      ɵɵadvance(5);
      ɵɵproperty("loading", ctx.inProgress)("disabled", ctx.form == null ? null : ctx.form.invalid);
      ɵɵadvance();
      ɵɵtextInterpolate(ɵɵpipeBind1(18, 13, "AbpIdentity::Save"));
    }
  },
  dependencies: [ReactiveFormsModule, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, LocalizationPipe, ButtonComponent, NgxValidateCoreModule, ValidationGroupDirective, ValidationDirective, AutofocusDirective],
  encapsulation: 2
});
var ChangePasswordComponent = _ChangePasswordComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangePasswordComponent, [{
    type: Component,
    args: [{
      selector: "abp-change-password-form",
      exportAs: "abpChangePasswordForm",
      imports: [ReactiveFormsModule, LocalizationPipe, ButtonComponent, NgxValidateCoreModule, AutofocusDirective],
      template: `<form [formGroup]="form" (ngSubmit)="onSubmit()" [mapErrorsFn]="mapErrorsFn" [validateOnSubmit]="true" class="abp-md-form">\r
  @if (!hideCurrentPassword) {\r
    <div class="mb-3 form-group">\r
      <label for="current-password" class="form-label">{{\r
        'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization\r
      }}</label\r
      ><span> * </span\r
      ><input\r
        type="password"\r
        id="current-password"\r
        class="form-control"\r
        formControlName="password"\r
        autofocus\r
        autocomplete="current-password"\r
      />\r
    </div>\r
  }\r
  <div class="mb-3 form-group">\r
    <label for="new-password" class="form-label">{{\r
      'AbpIdentity::DisplayName:NewPassword' | abpLocalization\r
    }}</label\r
    ><span> * </span\r
    ><input\r
      type="password"\r
      id="new-password"\r
      class="form-control"\r
      formControlName="newPassword"\r
      autocomplete="new-password"\r
    />\r
  </div>\r
  <div class="mb-3 form-group">\r
    <label for="confirm-new-password" class="form-label">{{\r
      'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization\r
    }}</label\r
    ><span> * </span\r
    ><input\r
      type="password"\r
      id="confirm-new-password"\r
      class="form-control"\r
      formControlName="repeatNewPassword"\r
      autocomplete="new-password"\r
    />\r
  </div>\r
  <abp-button\r
    iconClass="fa fa-check"\r
    buttonClass="btn btn-primary color-white"\r
    buttonType="submit"\r
    [loading]="inProgress"\r
    [disabled]="form?.invalid"\r
    >{{ 'AbpIdentity::Save' | abpLocalization }}</abp-button\r
  >\r
</form>\r
`
    }]
  }], () => [{
    type: UntypedFormBuilder
  }, {
    type: Injector
  }, {
    type: ToasterService
  }, {
    type: ProfileService
  }, {
    type: ManageProfileStateService
  }], null);
})();
var _ForgotPasswordComponent = class _ForgotPasswordComponent {
  constructor(fb, accountService) {
    this.fb = fb;
    this.accountService = accountService;
    this.isEmailSent = false;
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  onSubmit() {
    if (this.form.invalid) return;
    this.inProgress = true;
    this.accountService.sendPasswordResetCode({
      email: this.form.get("email")?.value,
      appName: "Angular"
    }).pipe(finalize(() => this.inProgress = false)).subscribe(() => {
      this.isEmailSent = true;
    });
  }
};
_ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ForgotPasswordComponent)(ɵɵdirectiveInject(UntypedFormBuilder), ɵɵdirectiveInject(AccountService));
};
_ForgotPasswordComponent.ɵcmp = ɵɵdefineComponent({
  type: _ForgotPasswordComponent,
  selectors: [["abp-forgot-password"]],
  decls: 5,
  vars: 4,
  consts: [[3, "formGroup", "validateOnSubmit"], [3, "ngSubmit", "formGroup", "validateOnSubmit"], [1, "mb-3", "form-group"], ["for", "input-email-address", 1, "form-label"], ["type", "email", "id", "input-email-address", "formControlName", "email", 1, "form-control"], ["buttonClass", "mt-2 mb-3 btn btn-primary btn-block", "buttonType", "submit", 1, "d-block", 3, "loading", "disabled"], ["routerLink", "/account/login"], ["aria-hidden", "true", 1, "fa", "fa-long-arrow-left", "me-1"], [1, "d-block", "mt-2", "mb-3", "btn", "btn-primary", "btn-block"]],
  template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "h4");
      ɵɵtext(1);
      ɵɵpipe(2, "abpLocalization");
      ɵɵelementEnd();
      ɵɵconditionalCreate(3, ForgotPasswordComponent_Conditional_3_Template, 18, 16, "form", 0)(4, ForgotPasswordComponent_Conditional_4_Template, 8, 6);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵtextInterpolate(ɵɵpipeBind1(2, 2, "AbpAccount::ForgotPassword"));
      ɵɵadvance(2);
      ɵɵconditional(!ctx.isEmailSent ? 3 : 4);
    }
  },
  dependencies: [ReactiveFormsModule, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, LocalizationPipe, ButtonComponent, NgxValidateCoreModule, ValidationGroupDirective, ValidationDirective],
  encapsulation: 2
});
var ForgotPasswordComponent = _ForgotPasswordComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{
      selector: "abp-forgot-password",
      imports: [ReactiveFormsModule, RouterModule, LocalizationPipe, ButtonComponent, NgxValidateCoreModule],
      template: `<h4>{{ 'AbpAccount::ForgotPassword' | abpLocalization }}</h4>\r
\r
@if (!isEmailSent) {\r
  <form [formGroup]="form" (ngSubmit)="onSubmit()" [validateOnSubmit]="true">\r
    <p>{{ 'AbpAccount::SendPasswordResetLink_Information' | abpLocalization }}</p>\r
    <div class="mb-3 form-group">\r
      <label for="input-email-address" class="form-label">{{\r
        'AbpAccount::EmailAddress' | abpLocalization\r
      }}</label\r
      ><span> * </span>\r
      <input type="email" id="input-email-address" class="form-control" formControlName="email" />\r
    </div>\r
    <abp-button\r
      class="d-block"\r
      buttonClass="mt-2 mb-3 btn btn-primary btn-block"\r
      [loading]="inProgress"\r
      buttonType="submit"\r
      [disabled]="form?.invalid"\r
    >\r
      {{ 'AbpAccount::Submit' | abpLocalization }}\r
    </abp-button>\r
    <a routerLink="/account/login"\r
      ><i class="fa fa-long-arrow-left me-1" aria-hidden="true"></i\r
      >{{ 'AbpAccount::Login' | abpLocalization }}</a\r
    >\r
  </form>\r
} @else {\r
  <p>\r
    {{ 'AbpAccount::PasswordResetMailSentMessage' | abpLocalization }}\r
  </p>\r
\r
  <a routerLink="/account/login">\r
    <button class="d-block mt-2 mb-3 btn btn-primary btn-block">\r
      <i class="fa fa-long-arrow-left me-1" aria-hidden="true"></i>\r
      {{ 'AbpAccount::BackToLogin' | abpLocalization }}\r
    </button>\r
  </a>\r
}\r
`
    }]
  }], () => [{
    type: UntypedFormBuilder
  }, {
    type: AccountService
  }], null);
})();
function getRedirectUrl(injector) {
  const route = injector.get(ActivatedRoute);
  const options = injector.get(ACCOUNT_CONFIG_OPTIONS);
  return route.snapshot.queryParams.returnUrl || options.redirectUrl || "/";
}
var {
  maxLength: maxLength$1,
  required: required$1
} = Validators;
var _LoginComponent = class _LoginComponent {
  constructor() {
    this.injector = inject(Injector);
    this.fb = inject(UntypedFormBuilder);
    this.toasterService = inject(ToasterService);
    this.authService = inject(AuthService);
    this.configState = inject(ConfigStateService);
    this.isSelfRegistrationEnabled = true;
    this.authWrapperKey = "Account.AuthWrapperComponent";
  }
  ngOnInit() {
    this.init();
    this.buildForm();
  }
  init() {
    this.isSelfRegistrationEnabled = (this.configState.getSetting("Abp.Account.IsSelfRegistrationEnabled") || "").toLowerCase() !== "false";
  }
  buildForm() {
    this.form = this.fb.group({
      username: ["", [required$1, maxLength$1(255)]],
      password: ["", [required$1, maxLength$1(128)]],
      rememberMe: [false]
    });
  }
  onSubmit() {
    if (this.form.invalid) return;
    this.inProgress = true;
    const {
      username,
      password,
      rememberMe
    } = this.form.value;
    const redirectUrl = getRedirectUrl(this.injector);
    this.authService.login({
      username,
      password,
      rememberMe,
      redirectUrl
    }).pipe(catchError((err) => {
      this.toasterService.error(err.error?.error_description || err.error?.error.message || "AbpAccount::DefaultErrorMessage", "", {
        life: 7e3
      });
      return throwError(err);
    }), finalize(() => this.inProgress = false)).subscribe();
  }
};
_LoginComponent.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginComponent)();
};
_LoginComponent.ɵcmp = ɵɵdefineComponent({
  type: _LoginComponent,
  selectors: [["abp-login"]],
  decls: 29,
  vars: 21,
  consts: [["validateOnSubmit", "", 1, "mt-4", 3, "ngSubmit", "formGroup"], [1, "mb-3", "form-group"], ["for", "login-input-user-name-or-email-address", 1, "form-label"], ["type", "text", "id", "login-input-user-name-or-email-address", "formControlName", "username", "autocomplete", "username", "autofocus", "", 1, "form-control"], ["for", "login-input-password", 1, "form-label"], ["type", "password", "id", "login-input-password", "formControlName", "password", "autocomplete", "current-password", 1, "form-control"], [1, "row"], [1, "col"], [1, "form-check"], ["for", "login-input-remember-me", 1, "form-check-label", "mb-2"], ["type", "checkbox", "id", "login-input-remember-me", "formControlName", "rememberMe", 1, "form-check-input"], [1, "text-end", "col"], ["routerLink", "/account/forgot-password"], ["buttonType", "submit", "name", "Action", "buttonClass", "btn-block btn-lg mt-3 btn btn-primary", 3, "loading"], ["routerLink", "/account/register", "queryParamsHandling", "preserve", 1, "text-decoration-none"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "h4");
      ɵɵtext(1);
      ɵɵpipe(2, "abpLocalization");
      ɵɵelementEnd();
      ɵɵconditionalCreate(3, LoginComponent_Conditional_3_Template, 6, 6, "strong");
      ɵɵelementStart(4, "form", 0);
      ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
        return ctx.onSubmit();
      });
      ɵɵelementStart(5, "div", 1)(6, "label", 2);
      ɵɵtext(7);
      ɵɵpipe(8, "abpLocalization");
      ɵɵelementEnd();
      ɵɵelement(9, "input", 3);
      ɵɵelementEnd();
      ɵɵelementStart(10, "div", 1)(11, "label", 4);
      ɵɵtext(12);
      ɵɵpipe(13, "abpLocalization");
      ɵɵelementEnd();
      ɵɵelement(14, "input", 5);
      ɵɵelementEnd();
      ɵɵelementStart(15, "div", 6)(16, "div", 7)(17, "div", 8)(18, "label", 9);
      ɵɵelement(19, "input", 10);
      ɵɵtext(20);
      ɵɵpipe(21, "abpLocalization");
      ɵɵelementEnd()()();
      ɵɵelementStart(22, "div", 11)(23, "a", 12);
      ɵɵtext(24);
      ɵɵpipe(25, "abpLocalization");
      ɵɵelementEnd()()();
      ɵɵelementStart(26, "abp-button", 13);
      ɵɵtext(27);
      ɵɵpipe(28, "abpLocalization");
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵtextInterpolate(ɵɵpipeBind1(2, 9, "AbpAccount::Login"));
      ɵɵadvance(2);
      ɵɵconditional(ctx.isSelfRegistrationEnabled ? 3 : -1);
      ɵɵadvance();
      ɵɵproperty("formGroup", ctx.form);
      ɵɵadvance(3);
      ɵɵtextInterpolate(ɵɵpipeBind1(8, 11, "AbpAccount::UserNameOrEmailAddress"));
      ɵɵadvance(5);
      ɵɵtextInterpolate(ɵɵpipeBind1(13, 13, "AbpAccount::Password"));
      ɵɵadvance(8);
      ɵɵtextInterpolate1(" ", ɵɵpipeBind1(21, 15, "AbpAccount::RememberMe"), " ");
      ɵɵadvance(4);
      ɵɵtextInterpolate(ɵɵpipeBind1(25, 17, "AbpAccount::ForgotPassword"));
      ɵɵadvance(2);
      ɵɵproperty("loading", ctx.inProgress);
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ɵɵpipeBind1(28, 19, "AbpAccount::Login"), " ");
    }
  },
  dependencies: [ReactiveFormsModule, ɵNgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, LocalizationPipe, ButtonComponent, NgxValidateCoreModule, ValidationGroupDirective, ValidationDirective, AutofocusDirective],
  encapsulation: 2
});
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{
      selector: "abp-login",
      imports: [ReactiveFormsModule, RouterModule, LocalizationPipe, ButtonComponent, NgxValidateCoreModule, AutofocusDirective],
      template: `<h4>{{ 'AbpAccount::Login' | abpLocalization }}</h4>\r
@if (isSelfRegistrationEnabled) {\r
  <strong>\r
    {{ 'AbpAccount::AreYouANewUser' | abpLocalization }}\r
    <a class="text-decoration-none" routerLink="/account/register" queryParamsHandling="preserve">{{\r
      'AbpAccount::Register' | abpLocalization\r
    }}</a>\r
  </strong>\r
}\r
<form [formGroup]="form" (ngSubmit)="onSubmit()" validateOnSubmit class="mt-4">\r
  <div class="mb-3 form-group">\r
    <label for="login-input-user-name-or-email-address" class="form-label">{{\r
      'AbpAccount::UserNameOrEmailAddress' | abpLocalization\r
    }}</label>\r
    <input\r
      class="form-control"\r
      type="text"\r
      id="login-input-user-name-or-email-address"\r
      formControlName="username"\r
      autocomplete="username"\r
      autofocus\r
    />\r
  </div>\r
  <div class="mb-3 form-group">\r
    <label for="login-input-password" class="form-label">{{\r
      'AbpAccount::Password' | abpLocalization\r
    }}</label>\r
    <input\r
      class="form-control"\r
      type="password"\r
      id="login-input-password"\r
      formControlName="password"\r
      autocomplete="current-password"\r
    />\r
  </div>\r
\r
  <div class="row">\r
    <div class="col">\r
      <div class="form-check">\r
        <label class="form-check-label mb-2" for="login-input-remember-me">\r
          <input\r
            class="form-check-input"\r
            type="checkbox"\r
            id="login-input-remember-me"\r
            formControlName="rememberMe"\r
          />\r
          {{ 'AbpAccount::RememberMe' | abpLocalization }}\r
        </label>\r
      </div>\r
    </div>\r
    <div class="text-end col">\r
      <a routerLink="/account/forgot-password">{{\r
        'AbpAccount::ForgotPassword' | abpLocalization\r
      }}</a>\r
    </div>\r
  </div>\r
\r
  <abp-button\r
    [loading]="inProgress"\r
    buttonType="submit"\r
    name="Action"\r
    buttonClass="btn-block btn-lg mt-3 btn btn-primary"\r
  >\r
    {{ 'AbpAccount::Login' | abpLocalization }}\r
  </abp-button>\r
</form>\r
`
    }]
  }], null, null);
})();
var _PersonalSettingsComponent = class _PersonalSettingsComponent {
  constructor() {
    this.fb = inject(UntypedFormBuilder);
    this.toasterService = inject(ToasterService);
    this.profileService = inject(ProfileService);
    this.manageProfileState = inject(ManageProfileStateService);
    this.authService = inject(AuthService);
    this.confirmationService = inject(ConfirmationService);
    this.configState = inject(ConfigStateService);
    this.isPersonalSettingsChangedConfirmationActive = inject(RE_LOGIN_CONFIRMATION_TOKEN);
    this.injector = inject(Injector);
    this.logoutConfirmation = () => {
      this.authService.logout().subscribe();
    };
  }
  buildForm() {
    this.selected = this.manageProfileState.getProfile();
    if (!this.selected) {
      return;
    }
    const data = new FormPropData(this.injector, this.selected);
    this.form = generateFormFromProps(data);
  }
  ngOnInit() {
    this.buildForm();
  }
  submit() {
    if (this.form.invalid) return;
    const isLogOutConfirmMessageVisible = this.isLogoutConfirmMessageActive();
    const isRefreshTokenExists = this.authService.getRefreshToken();
    this.inProgress = true;
    this.profileService.update(this.form.value).pipe(finalize(() => this.inProgress = false)).subscribe((profile) => {
      this.manageProfileState.setProfile(profile);
      this.configState.refreshAppState();
      this.toasterService.success("AbpAccount::PersonalSettingsSaved", "Success", {
        life: 5e3
      });
      if (isRefreshTokenExists) {
        return this.authService.refreshToken();
      }
      if (isLogOutConfirmMessageVisible) {
        this.showLogoutConfirmMessage();
      }
    });
  }
  isLogoutConfirmMessageActive() {
    return this.isPersonalSettingsChangedConfirmationActive;
  }
  showLogoutConfirmMessage() {
    this.confirmationService.info("AbpAccount::PersonalSettingsChangedConfirmationModalDescription", "AbpAccount::PersonalSettingsChangedConfirmationModalTitle").pipe(filter((status) => status === Confirmation.Status.confirm)).subscribe(this.logoutConfirmation);
  }
};
_PersonalSettingsComponent.ɵfac = function PersonalSettingsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PersonalSettingsComponent)();
};
_PersonalSettingsComponent.ɵcmp = ɵɵdefineComponent({
  type: _PersonalSettingsComponent,
  selectors: [["abp-personal-settings-form"]],
  exportAs: ["abpPersonalSettingsForm"],
  features: [ɵɵProvidersFeature([{
    provide: EXTENSIONS_IDENTIFIER,
    useValue: "Account.PersonalSettingsComponent"
    /* eAccountComponents.PersonalSettings */
  }])],
  decls: 1,
  vars: 1,
  consts: [["validateOnSubmit", "", 1, "abp-md-form", 3, "formGroup"], ["validateOnSubmit", "", 1, "abp-md-form", 3, "ngSubmit", "formGroup"], [3, "selectedRecord"], ["buttonType", "submit", "iconClass", "fa fa-check", "buttonClass", "btn btn-primary color-white", 3, "loading"]],
  template: function PersonalSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵconditionalCreate(0, PersonalSettingsComponent_Conditional_0_Template, 5, 6, "form", 0);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.form ? 0 : -1);
    }
  },
  dependencies: [ReactiveFormsModule, ɵNgNoValidate, NgControlStatusGroup, FormGroupDirective, ExtensibleFormComponent, NgxValidateCoreModule, ValidationGroupDirective, ButtonComponent, LocalizationPipe],
  encapsulation: 2
});
var PersonalSettingsComponent = _PersonalSettingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonalSettingsComponent, [{
    type: Component,
    args: [{
      selector: "abp-personal-settings-form",
      exportAs: "abpPersonalSettingsForm",
      providers: [{
        provide: EXTENSIONS_IDENTIFIER,
        useValue: "Account.PersonalSettingsComponent"
        /* eAccountComponents.PersonalSettings */
      }],
      imports: [ReactiveFormsModule, ExtensibleFormComponent, NgxValidateCoreModule, ButtonComponent, LocalizationPipe],
      template: `@if (form) {\r
  <form [formGroup]="form" (ngSubmit)="submit()" validateOnSubmit class="abp-md-form">\r
    <abp-extensible-form [selectedRecord]="selected"></abp-extensible-form>\r
  \r
    <abp-button\r
      buttonType="submit"\r
      iconClass="fa fa-check"\r
      buttonClass="btn btn-primary color-white"\r
      [loading]="inProgress"\r
    >\r
      {{ 'AbpIdentity::Save' | abpLocalization }}</abp-button\r
    >\r
  </form>\r
}\r
`
    }]
  }], null, null);
})();
var _ManageProfileComponent = class _ManageProfileComponent {
  constructor(profileService, manageProfileState) {
    this.profileService = profileService;
    this.manageProfileState = manageProfileState;
    this.selectedTab = 0;
    this.changePasswordKey = "Account.ChangePasswordComponent";
    this.personalSettingsKey = "Account.PersonalSettingsComponent";
    this.profile$ = this.manageProfileState.getProfile$();
  }
  ngOnInit() {
    this.profileService.get().subscribe((profile) => {
      this.manageProfileState.setProfile(profile);
      if (profile.isExternal) {
        this.hideChangePasswordTab = true;
        this.selectedTab = 1;
      }
    });
  }
};
_ManageProfileComponent.ɵfac = function ManageProfileComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ManageProfileComponent)(ɵɵdirectiveInject(ProfileService), ɵɵdirectiveInject(ManageProfileStateService));
};
_ManageProfileComponent.ɵcmp = ɵɵdefineComponent({
  type: _ManageProfileComponent,
  selectors: [["abp-manage-profile"]],
  decls: 15,
  vars: 15,
  consts: [["id", "AbpContentToolbar"], [1, "card", "border-0", "shadow-sm", "min-h-400", 3, "abpLoading"], [1, "card-body"], [1, "row"], [1, "col-12", "col-md-3"], ["id", "nav-tab", "role", "tablist", 1, "nav", "flex-column", "nav-pills"], [1, "nav-item"], [1, "nav-item", "mb-2", 3, "click"], ["role", "tab", "href", "javascript:void(0)", 1, "nav-link", 3, "ngClass"], [1, "col-12", "col-md-9"], [1, "nav-item", 3, "click"], [1, "tab-content"], ["role", "tabpanel", 1, "tab-pane", "active"], [4, "abpReplaceableTemplate"]],
  template: function ManageProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
      ɵɵelementStart(1, "div", 1);
      ɵɵpipe(2, "async");
      ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "ul", 5);
      ɵɵconditionalCreate(7, ManageProfileComponent_Conditional_7_Template, 4, 6, "li", 6);
      ɵɵpipe(8, "async");
      ɵɵelementStart(9, "li", 7);
      ɵɵlistener("click", function ManageProfileComponent_Template_li_click_9_listener() {
        return ctx.selectedTab = 1;
      });
      ɵɵelementStart(10, "a", 8);
      ɵɵtext(11);
      ɵɵpipe(12, "abpLocalization");
      ɵɵelementEnd()()()();
      ɵɵconditionalCreate(13, ManageProfileComponent_Conditional_13_Template, 3, 2, "div", 9);
      ɵɵpipe(14, "async");
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      ɵɵadvance();
      ɵɵproperty("abpLoading", !((tmp_0_0 = ɵɵpipeBind1(2, 5, ctx.profile$)) == null ? null : tmp_0_0.userName));
      ɵɵadvance(6);
      ɵɵconditional(!ctx.hideChangePasswordTab && ɵɵpipeBind1(8, 7, ctx.profile$) ? 7 : -1);
      ɵɵadvance(3);
      ɵɵproperty("ngClass", ɵɵpureFunction1(13, _c0, ctx.selectedTab === 1));
      ɵɵadvance();
      ɵɵtextInterpolate(ɵɵpipeBind1(12, 9, "AbpAccount::PersonalSettings"));
      ɵɵadvance(2);
      ɵɵconditional(ɵɵpipeBind1(14, 11, ctx.profile$) ? 13 : -1);
    }
  },
  dependencies: [CommonModule, NgClass, AsyncPipe, ReactiveFormsModule, PersonalSettingsComponent, ChangePasswordComponent, LocalizationPipe, ReplaceableTemplateDirective, LoadingDirective],
  styles: [".min-h-400[_ngcontent-%COMP%]{min-height:400px}"],
  data: {
    animation: [trigger("fadeIn", [transition(":enter", useAnimation(fadeIn))])]
  }
});
var ManageProfileComponent = _ManageProfileComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManageProfileComponent, [{
    type: Component,
    args: [{
      selector: "abp-manage-profile",
      animations: [trigger("fadeIn", [transition(":enter", useAnimation(fadeIn))])],
      imports: [CommonModule, ReactiveFormsModule, PersonalSettingsComponent, ChangePasswordComponent, LocalizationPipe, ReplaceableTemplateDirective, LoadingDirective],
      template: `<div id="AbpContentToolbar"></div>\r
<div class="card border-0 shadow-sm min-h-400" [abpLoading]="!(profile$ | async)?.userName">\r
  <div class="card-body">\r
    <div class="row">\r
      <div class="col-12 col-md-3">\r
        <ul class="nav flex-column nav-pills" id="nav-tab" role="tablist">\r
          @if (!hideChangePasswordTab && (profile$ | async)) {\r
            <li class="nav-item" (click)="selectedTab = 0">\r
              <a\r
                class="nav-link"\r
                [ngClass]="{ active: selectedTab === 0 }"\r
                role="tab"\r
                href="javascript:void(0)"\r
                >{{ 'AbpUi::ChangePassword' | abpLocalization }}</a\r
              >\r
            </li>\r
          }\r
          <li class="nav-item mb-2" (click)="selectedTab = 1">\r
            <a\r
              class="nav-link"\r
              [ngClass]="{ active: selectedTab === 1 }"\r
              role="tab"\r
              href="javascript:void(0)"\r
              >{{ 'AbpAccount::PersonalSettings' | abpLocalization }}</a\r
            >\r
          </li>\r
        </ul>\r
      </div>\r
      @if (profile$ | async) {\r
        <div class="col-12 col-md-9">\r
          @if (selectedTab === 0) {\r
            <div class="tab-content" [@fadeIn]>\r
              <div class="tab-pane active" role="tabpanel">\r
                <h4>\r
                  {{ 'AbpIdentity::ChangePassword' | abpLocalization }}\r
                  <hr />\r
                </h4>\r
                <abp-change-password-form\r
                  *abpReplaceableTemplate="{\r
                    componentKey: changePasswordKey\r
                  }"\r
                ></abp-change-password-form>\r
              </div>\r
            </div>\r
          }\r
          @if (selectedTab === 1) {\r
            <div class="tab-content" [@fadeIn]>\r
              <div class="tab-pane active" role="tabpanel">\r
                <h4>\r
                  {{ 'AbpIdentity::PersonalSettings' | abpLocalization }}\r
                  <hr />\r
                </h4>\r
                <abp-personal-settings-form\r
                  *abpReplaceableTemplate="{\r
                    componentKey: personalSettingsKey\r
                  }"\r
                ></abp-personal-settings-form>\r
              </div>\r
            </div>\r
          }\r
        </div>\r
      }\r
    </div>\r
  </div>\r
</div>\r
`,
      styles: [".min-h-400{min-height:400px}\n"]
    }]
  }], () => [{
    type: ProfileService
  }, {
    type: ManageProfileStateService
  }], null);
})();
var {
  maxLength,
  required,
  email
} = Validators;
var _RegisterComponent = class _RegisterComponent {
  constructor(fb, accountService, configState, toasterService, authService, injector) {
    this.fb = fb;
    this.accountService = accountService;
    this.configState = configState;
    this.toasterService = toasterService;
    this.authService = authService;
    this.injector = injector;
    this.isSelfRegistrationEnabled = true;
    this.authWrapperKey = "Account.AuthWrapperComponent";
  }
  ngOnInit() {
    this.init();
    this.buildForm();
  }
  init() {
    this.isSelfRegistrationEnabled = (this.configState.getSetting("Abp.Account.IsSelfRegistrationEnabled") || "").toLowerCase() !== "false";
    if (!this.isSelfRegistrationEnabled) {
      this.toasterService.warn({
        key: "AbpAccount::SelfRegistrationDisabledMessage",
        defaultValue: "Self registration is disabled."
      }, "", {
        life: 1e4
      });
      return;
    }
  }
  buildForm() {
    this.form = this.fb.group({
      username: ["", [required, maxLength(255)]],
      password: ["", [required, ...getPasswordValidators(this.injector)]],
      email: ["", [required, email]]
    });
  }
  onSubmit() {
    if (this.form.invalid) return;
    this.inProgress = true;
    const newUser = {
      userName: this.form.get("username")?.value,
      password: this.form.get("password")?.value,
      emailAddress: this.form.get("email")?.value,
      appName: "Angular"
    };
    this.accountService.register(newUser).pipe(switchMap(() => this.authService.login({
      username: newUser.userName,
      password: newUser.password,
      redirectUrl: getRedirectUrl(this.injector)
    })), catchError((err) => {
      this.toasterService.error(err.error?.error_description || err.error?.error.message || "AbpAccount::DefaultErrorMessage", "", {
        life: 7e3
      });
      return throwError(err);
    }), finalize(() => this.inProgress = false)).subscribe();
  }
};
_RegisterComponent.ɵfac = function RegisterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RegisterComponent)(ɵɵdirectiveInject(UntypedFormBuilder), ɵɵdirectiveInject(AccountService), ɵɵdirectiveInject(ConfigStateService), ɵɵdirectiveInject(ToasterService), ɵɵdirectiveInject(AuthService), ɵɵdirectiveInject(Injector));
};
_RegisterComponent.ɵcmp = ɵɵdefineComponent({
  type: _RegisterComponent,
  selectors: [["abp-register"]],
  decls: 10,
  vars: 10,
  consts: [["routerLink", "/account/login", 1, "text-decoration-none"], ["validateOnSubmit", "", 1, "mt-4", 3, "formGroup"], ["validateOnSubmit", "", 1, "mt-4", 3, "ngSubmit", "formGroup"], [1, "mb-3", "form-group"], ["for", "input-user-name", 1, "form-label"], ["autofocus", "", "type", "text", "id", "input-user-name", "formControlName", "username", "autocomplete", "username", 1, "form-control"], ["for", "input-email-address", 1, "form-label"], ["type", "email", "id", "input-email-address", "formControlName", "email", 1, "form-control"], ["for", "input-password", 1, "form-label"], ["type", "password", "id", "input-password", "formControlName", "password", "autocomplete", "current-password", 1, "form-control"], ["buttonType", "submit", "name", "Action", "buttonClass", "btn-block btn-lg mt-3 btn btn-primary", 3, "loading"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "h4");
      ɵɵtext(1);
      ɵɵpipe(2, "abpLocalization");
      ɵɵelementEnd();
      ɵɵelementStart(3, "strong");
      ɵɵtext(4);
      ɵɵpipe(5, "abpLocalization");
      ɵɵelementStart(6, "a", 0);
      ɵɵtext(7);
      ɵɵpipe(8, "abpLocalization");
      ɵɵelementEnd()();
      ɵɵconditionalCreate(9, RegisterComponent_Conditional_9_Template, 25, 14, "form", 1);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵtextInterpolate(ɵɵpipeBind1(2, 4, "AbpAccount::Register"));
      ɵɵadvance(3);
      ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 6, "AbpAccount::AlreadyRegistered"), " ");
      ɵɵadvance(3);
      ɵɵtextInterpolate(ɵɵpipeBind1(8, 8, "AbpAccount::Login"));
      ɵɵadvance(2);
      ɵɵconditional(ctx.isSelfRegistrationEnabled ? 9 : -1);
    }
  },
  dependencies: [ReactiveFormsModule, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, NgxValidateCoreModule, ValidationGroupDirective, ValidationDirective, LocalizationPipe, ButtonComponent, AutofocusDirective],
  encapsulation: 2
});
var RegisterComponent = _RegisterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{
      selector: "abp-register",
      imports: [ReactiveFormsModule, RouterModule, NgxValidateCoreModule, LocalizationPipe, ButtonComponent, AutofocusDirective],
      template: `<h4>{{ 'AbpAccount::Register' | abpLocalization }}</h4>\r
<strong>\r
  {{ 'AbpAccount::AlreadyRegistered' | abpLocalization }}\r
  <a class="text-decoration-none" routerLink="/account/login">{{\r
    'AbpAccount::Login' | abpLocalization\r
  }}</a>\r
</strong>\r
@if (isSelfRegistrationEnabled) {\r
  <form\r
    [formGroup]="form"\r
    (ngSubmit)="onSubmit()"\r
    validateOnSubmit\r
    class="mt-4"\r
  >\r
    <div class="mb-3 form-group">\r
      <label for="input-user-name" class="form-label">{{\r
        'AbpAccount::UserName' | abpLocalization\r
      }}</label\r
      ><span> * </span\r
      ><input\r
        autofocus\r
        type="text"\r
        id="input-user-name"\r
        class="form-control"\r
        formControlName="username"\r
        autocomplete="username"\r
      />\r
    </div>\r
    <div class="mb-3 form-group">\r
      <label for="input-email-address" class="form-label">{{\r
        'AbpAccount::EmailAddress' | abpLocalization\r
      }}</label\r
      ><span> * </span\r
      ><input type="email" id="input-email-address" class="form-control" formControlName="email" />\r
    </div>\r
    <div class="mb-3 form-group">\r
      <label for="input-password" class="form-label">{{\r
        'AbpAccount::Password' | abpLocalization\r
      }}</label\r
      ><span> * </span\r
      ><input\r
        type="password"\r
        id="input-password"\r
        class="form-control"\r
        formControlName="password"\r
        autocomplete="current-password"\r
      />\r
    </div>\r
    <abp-button\r
      [loading]="inProgress"\r
      buttonType="submit"\r
      name="Action"\r
      buttonClass="btn-block btn-lg mt-3 btn btn-primary"\r
    >\r
      {{ 'AbpAccount::Register' | abpLocalization }}\r
    </abp-button>\r
  </form>\r
}\r
`
    }]
  }], () => [{
    type: UntypedFormBuilder
  }, {
    type: AccountService
  }, {
    type: ConfigStateService
  }, {
    type: ToasterService
  }, {
    type: AuthService
  }, {
    type: Injector
  }], null);
})();
var PASSWORD_FIELDS = ["password", "confirmPassword"];
var _ResetPasswordComponent = class _ResetPasswordComponent {
  constructor(fb, accountService, route, router, injector) {
    this.fb = fb;
    this.accountService = accountService;
    this.route = route;
    this.router = router;
    this.injector = injector;
    this.inProgress = false;
    this.isPasswordReset = false;
    this.mapErrorsFn = (errors, groupErrors, control) => {
      if (PASSWORD_FIELDS.indexOf(String(control?.name)) < 0) return errors;
      return errors.concat(groupErrors.filter(({
        key
      }) => key === "passwordMismatch"));
    };
  }
  ngOnInit() {
    this.route.queryParams.subscribe(({
      userId,
      resetToken
    }) => {
      if (!userId || !resetToken) this.router.navigateByUrl("/account/login");
      this.form = this.fb.group({
        userId: [userId, [Validators.required]],
        resetToken: [resetToken, [Validators.required]],
        password: ["", [Validators.required, ...getPasswordValidators(this.injector)]],
        confirmPassword: ["", [Validators.required, ...getPasswordValidators(this.injector)]]
      }, {
        validators: [comparePasswords(PASSWORD_FIELDS)]
      });
    });
  }
  onSubmit() {
    if (this.form.invalid || this.inProgress) return;
    this.inProgress = true;
    this.accountService.resetPassword({
      userId: this.form.get("userId")?.value,
      resetToken: this.form.get("resetToken")?.value,
      password: this.form.get("password")?.value
    }).pipe(finalize(() => this.inProgress = false)).subscribe(() => {
      this.isPasswordReset = true;
    });
  }
};
_ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ResetPasswordComponent)(ɵɵdirectiveInject(UntypedFormBuilder), ɵɵdirectiveInject(AccountService), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(Injector));
};
_ResetPasswordComponent.ɵcmp = ɵɵdefineComponent({
  type: _ResetPasswordComponent,
  selectors: [["abp-reset-password"]],
  decls: 5,
  vars: 4,
  consts: [["validateOnSubmit", "", 3, "formGroup", "mapErrorsFn"], ["validateOnSubmit", "", 3, "ngSubmit", "formGroup", "mapErrorsFn"], [1, "mb-3", "form-group"], ["for", "input-password", 1, "form-label"], ["type", "password", "id", "input-password", "formControlName", "password", 1, "form-control"], ["for", "input-confirm-password", 1, "form-label"], ["type", "password", "id", "input-confirm-password", "formControlName", "confirmPassword", 1, "form-control"], ["type", "button", "routerLink", "/account/login", 1, "me-2", "btn", "btn-outline-primary"], ["buttonType", "submit", "buttonClass", "me-2 btn btn-primary", 3, "click", "loading"], ["routerLink", "/account/login"], [1, "d-block", "mt-2", "mb-3", "btn", "btn-primary"]],
  template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "h4");
      ɵɵtext(1);
      ɵɵpipe(2, "abpLocalization");
      ɵɵelementEnd();
      ɵɵconditionalCreate(3, ResetPasswordComponent_Conditional_3_Template, 24, 18, "form", 0)(4, ResetPasswordComponent_Conditional_4_Template, 7, 6);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵtextInterpolate(ɵɵpipeBind1(2, 2, "AbpAccount::ResetPassword"));
      ɵɵadvance(2);
      ɵɵconditional(!ctx.isPasswordReset ? 3 : 4);
    }
  },
  dependencies: [ReactiveFormsModule, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, NgxValidateCoreModule, ValidationGroupDirective, ValidationDirective, LocalizationPipe, ButtonComponent],
  encapsulation: 2
});
var ResetPasswordComponent = _ResetPasswordComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{
      selector: "abp-reset-password",
      imports: [ReactiveFormsModule, RouterModule, NgxValidateCoreModule, LocalizationPipe, ButtonComponent],
      template: `<h4>{{ 'AbpAccount::ResetPassword' | abpLocalization }}</h4>\r
\r
@if (!isPasswordReset) {\r
  <form [formGroup]="form" [mapErrorsFn]="mapErrorsFn" (ngSubmit)="onSubmit()" validateOnSubmit>\r
    <p>{{ 'AbpAccount::ResetPassword_Information' | abpLocalization }}</p>\r
    <div class="mb-3 form-group">\r
      <label for="input-password" class="form-label">{{\r
        'AbpAccount::Password' | abpLocalization\r
      }}</label\r
      ><span> * </span>\r
      <input type="password" id="input-password" class="form-control" formControlName="password" />\r
    </div>\r
    <div class="mb-3 form-group">\r
      <label for="input-confirm-password" class="form-label">{{\r
        'AbpAccount::ConfirmPassword' | abpLocalization\r
      }}</label\r
      ><span> * </span>\r
      <input\r
        type="password"\r
        id="input-confirm-password"\r
        class="form-control"\r
        formControlName="confirmPassword"\r
      />\r
    </div>\r
    <button class="me-2 btn btn-outline-primary" type="button" routerLink="/account/login">\r
      {{ 'AbpAccount::Cancel' | abpLocalization }}\r
    </button>\r
    <abp-button\r
      buttonType="submit"\r
      buttonClass="me-2 btn btn-primary"\r
      [loading]="inProgress"\r
      (click)="onSubmit()"\r
    >\r
      {{ 'AbpAccount::Submit' | abpLocalization }}\r
    </abp-button>\r
  </form>\r
} @else {\r
  <p>\r
    {{ 'AbpAccount::YourPasswordIsSuccessfullyReset' | abpLocalization }}\r
  </p>\r
\r
  <a routerLink="/account/login">\r
    <button class="d-block mt-2 mb-3 btn btn-primary">\r
      {{ 'AbpAccount::BackToLogin' | abpLocalization }}\r
    </button>\r
  </a>\r
}\r
`
    }]
  }], () => [{
    type: UntypedFormBuilder
  }, {
    type: AccountService
  }, {
    type: ActivatedRoute
  }, {
    type: Router
  }, {
    type: Injector
  }], null);
})();
var accountExtensionsResolver = () => {
  const injector = inject(Injector);
  const extensions = inject(ExtensionsService);
  const config = {
    optional: true
  };
  const editFormContributors = inject(ACCOUNT_EDIT_FORM_PROP_CONTRIBUTORS, config) || {};
  return getObjectExtensionEntitiesFromStore(injector, "Identity").pipe(map((entities) => ({
    [
      "Account.PersonalSettingsComponent"
      /* eAccountComponents.PersonalSettings */
    ]: entities.User
  })), mapEntitiesToContributors(injector, "AbpIdentity"), tap((objectExtensionContributors) => {
    mergeWithDefaultProps(extensions.editFormProps, DEFAULT_ACCOUNT_FORM_PROPS, objectExtensionContributors.editForm, editFormContributors);
  }));
};
var canActivate$1 = [authenticationFlowGuard];
var routes = [{
  path: "",
  pathMatch: "full",
  redirectTo: "login"
}, {
  path: "",
  component: RouterOutletComponent,
  children: [{
    path: "login",
    component: ReplaceableRouteContainerComponent,
    canActivate: canActivate$1,
    data: {
      replaceableComponent: {
        key: "Account.LoginComponent",
        defaultComponent: LoginComponent
      }
    },
    title: "AbpAccount::Login"
  }, {
    path: "register",
    component: ReplaceableRouteContainerComponent,
    canActivate: canActivate$1,
    data: {
      replaceableComponent: {
        key: "Account.RegisterComponent",
        defaultComponent: RegisterComponent
      }
    },
    title: "AbpAccount::Register"
  }, {
    path: "forgot-password",
    component: ReplaceableRouteContainerComponent,
    canActivate: canActivate$1,
    data: {
      replaceableComponent: {
        key: "Account.ForgotPasswordComponent",
        defaultComponent: ForgotPasswordComponent
      }
    },
    title: "AbpAccount::ForgotPassword"
  }, {
    path: "reset-password",
    component: ReplaceableRouteContainerComponent,
    canActivate: [],
    data: {
      tenantBoxVisible: false,
      replaceableComponent: {
        key: "Account.ResetPasswordComponent",
        defaultComponent: ResetPasswordComponent
      }
    },
    title: "AbpAccount::ResetPassword"
  }, {
    path: "manage",
    component: ReplaceableRouteContainerComponent,
    canActivate: [authGuard],
    resolve: [accountExtensionsResolver],
    data: {
      replaceableComponent: {
        key: "Account.ManageProfileComponent",
        defaultComponent: ManageProfileComponent
      }
    },
    title: "AbpAccount::MyAccount"
  }]
}];
var _AccountRoutingModule = class _AccountRoutingModule {
};
_AccountRoutingModule.ɵfac = function AccountRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AccountRoutingModule)();
};
_AccountRoutingModule.ɵmod = ɵɵdefineNgModule({
  type: _AccountRoutingModule,
  imports: [RouterModule],
  exports: [RouterModule]
});
_AccountRoutingModule.ɵinj = ɵɵdefineInjector({
  imports: [RouterModule.forChild(routes), RouterModule]
});
var AccountRoutingModule = _AccountRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();
var _AccountModule = class _AccountModule {
  static forChild(options = {}) {
    return {
      ngModule: _AccountModule,
      providers: [AuthenticationFlowGuard, {
        provide: ACCOUNT_CONFIG_OPTIONS,
        useValue: options
      }, {
        provide: "ACCOUNT_OPTIONS",
        useFactory: accountConfigOptionsFactory,
        deps: [ACCOUNT_CONFIG_OPTIONS]
      }, {
        provide: RE_LOGIN_CONFIRMATION_TOKEN,
        useValue: options.isPersonalSettingsChangedConfirmationActive ?? true
      }, {
        provide: ACCOUNT_EDIT_FORM_PROP_CONTRIBUTORS,
        useValue: options.editFormPropContributors
      }, AccountExtensionsGuard]
    };
  }
  /**
   * @deprecated `AccountModule.forLazy()` is deprecated. You can use `createRoutes` **function** instead.
   */
  static forLazy(options = {}) {
    return new LazyModuleFactory(_AccountModule.forChild(options));
  }
};
_AccountModule.ɵfac = function AccountModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AccountModule)();
};
_AccountModule.ɵmod = ɵɵdefineNgModule({
  type: _AccountModule,
  imports: [LoginComponent, RegisterComponent, ForgotPasswordComponent, ResetPasswordComponent, ManageProfileComponent, AccountRoutingModule]
});
_AccountModule.ɵinj = ɵɵdefineInjector({
  imports: [LoginComponent, RegisterComponent, ForgotPasswordComponent, ResetPasswordComponent, ManageProfileComponent, AccountRoutingModule]
});
var AccountModule = _AccountModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [LoginComponent, RegisterComponent, ForgotPasswordComponent, ResetPasswordComponent, ManageProfileComponent, AccountRoutingModule],
      exports: []
    }]
  }], null, null);
})();
function provideAccount(options = {}) {
  return [{
    provide: ACCOUNT_CONFIG_OPTIONS,
    useValue: options
  }, {
    provide: "ACCOUNT_OPTIONS",
    useFactory: accountConfigOptionsFactory,
    deps: [ACCOUNT_CONFIG_OPTIONS]
  }, {
    provide: RE_LOGIN_CONFIRMATION_TOKEN,
    useValue: options.isPersonalSettingsChangedConfirmationActive ?? true
  }, {
    provide: ACCOUNT_EDIT_FORM_PROP_CONTRIBUTORS,
    useValue: options.editFormPropContributors
  }];
}
var canActivate = [authenticationFlowGuard];
var createRoutes = (options = {}) => [{
  path: "",
  component: RouterOutletComponent,
  providers: provideAccount(options),
  children: [{
    path: "",
    pathMatch: "full",
    redirectTo: "login"
  }, {
    path: "login",
    component: ReplaceableRouteContainerComponent,
    canActivate,
    data: {
      replaceableComponent: {
        key: "Account.LoginComponent",
        defaultComponent: LoginComponent
      }
    },
    title: "AbpAccount::Login"
  }, {
    path: "register",
    component: ReplaceableRouteContainerComponent,
    canActivate,
    data: {
      replaceableComponent: {
        key: "Account.RegisterComponent",
        defaultComponent: RegisterComponent
      }
    },
    title: "AbpAccount::Register"
  }, {
    path: "forgot-password",
    component: ReplaceableRouteContainerComponent,
    canActivate,
    data: {
      replaceableComponent: {
        key: "Account.ForgotPasswordComponent",
        defaultComponent: ForgotPasswordComponent
      }
    },
    title: "AbpAccount::ForgotPassword"
  }, {
    path: "reset-password",
    component: ReplaceableRouteContainerComponent,
    canActivate: [],
    data: {
      tenantBoxVisible: false,
      replaceableComponent: {
        key: "Account.ResetPasswordComponent",
        defaultComponent: ResetPasswordComponent
      }
    },
    title: "AbpAccount::ResetPassword"
  }, {
    path: "manage",
    component: ReplaceableRouteContainerComponent,
    canActivate: [authGuard],
    resolve: [accountExtensionsResolver],
    data: {
      replaceableComponent: {
        key: "Account.ManageProfileComponent",
        defaultComponent: ManageProfileComponent
      }
    },
    title: "AbpAccount::MyAccount"
  }]
}];
export {
  ACCOUNT_CONFIG_OPTIONS,
  ACCOUNT_EDIT_FORM_PROP_CONTRIBUTORS,
  AccountExtensionsGuard,
  AccountModule,
  AuthenticationFlowGuard,
  ChangePasswordComponent,
  DEFAULT_ACCOUNT_FORM_PROPS,
  ForgotPasswordComponent,
  LoginComponent,
  ManageProfileComponent,
  ManageProfileStateService,
  PersonalSettingsComponent,
  PersonalSettingsHalfRowComponent,
  RE_LOGIN_CONFIRMATION_TOKEN,
  RegisterComponent,
  ResetPasswordComponent,
  accountConfigOptionsFactory,
  accountExtensionsResolver,
  authenticationFlowGuard,
  createRoutes,
  getRedirectUrl,
  provideAccount
};
//# sourceMappingURL=@abp_ng__account.js.map
