import {
  ButtonComponent,
  ModalCloseDirective,
  ModalComponent,
  ToasterService,
  collapse
} from "./chunk-ECZD44PI.js";
import {
  AbstractNavTreeService,
  ConfigStateService,
  LocalizationPipe,
  LocalizationService,
  NgxValidateCoreModule,
  PermissionDirective,
  RestService,
  RoutesService,
  ValidationDirective,
  ValidationGroupDirective,
  featuresFactory,
  toSignal
} from "./chunk-DOR275RM.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  ɵNgNoValidate
} from "./chunk-XC2BQRUA.js";
import {
  CommonModule
} from "./chunk-6NN5GPUG.js";
import {
  Component,
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  combineLatest,
  debounceTime,
  finalize,
  inject,
  makeEnvironmentProviders,
  map,
  provideAppInitializer,
  setClassMetadata,
  ɵɵadvance,
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
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-O2RWE6FT.js";
import {
  __spreadValues
} from "./chunk-7K3IQTKT.js";

// node_modules/@abp/ng.setting-management/fesm2022/abp-ng.setting-management-proxy.mjs
var index$1 = Object.freeze({
  __proto__: null
});
var index = Object.freeze({
  __proto__: null,
  Abp: index$1
});
var _EmailSettingsService = class _EmailSettingsService {
  constructor(restService) {
    this.restService = restService;
    this.apiName = "SettingManagement";
    this.get = (config) => this.restService.request({
      method: "GET",
      url: "/api/setting-management/emailing"
    }, __spreadValues({
      apiName: this.apiName
    }, config));
    this.sendTestEmail = (input, config) => this.restService.request({
      method: "POST",
      url: "/api/setting-management/emailing/send-test-email",
      body: input
    }, __spreadValues({
      apiName: this.apiName
    }, config));
    this.update = (input, config) => this.restService.request({
      method: "POST",
      url: "/api/setting-management/emailing",
      body: input
    }, __spreadValues({
      apiName: this.apiName
    }, config));
  }
};
_EmailSettingsService.ɵfac = function EmailSettingsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmailSettingsService)(ɵɵinject(RestService));
};
_EmailSettingsService.ɵprov = ɵɵdefineInjectable({
  token: _EmailSettingsService,
  factory: _EmailSettingsService.ɵfac,
  providedIn: "root"
});
var EmailSettingsService = _EmailSettingsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailSettingsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RestService
  }], null);
})();
var _TimeZoneSettingsService = class _TimeZoneSettingsService {
  constructor(restService) {
    this.restService = restService;
    this.apiName = "SettingManagement";
    this.get = (config) => this.restService.request({
      method: "GET",
      responseType: "text",
      url: "/api/setting-management/timezone"
    }, __spreadValues({
      apiName: this.apiName
    }, config));
    this.getTimezones = (config) => this.restService.request({
      method: "GET",
      url: "/api/setting-management/timezone/timezones"
    }, __spreadValues({
      apiName: this.apiName
    }, config));
    this.update = (timezone, config) => this.restService.request({
      method: "POST",
      url: "/api/setting-management/timezone",
      params: {
        timezone
      }
    }, __spreadValues({
      apiName: this.apiName
    }, config));
  }
};
_TimeZoneSettingsService.ɵfac = function TimeZoneSettingsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TimeZoneSettingsService)(ɵɵinject(RestService));
};
_TimeZoneSettingsService.ɵprov = ɵɵdefineInjectable({
  token: _TimeZoneSettingsService,
  factory: _TimeZoneSettingsService.ɵfac,
  providedIn: "root"
});
var TimeZoneSettingsService = _TimeZoneSettingsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeZoneSettingsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RestService
  }], null);
})();

// node_modules/@abp/ng.setting-management/fesm2022/abp-ng.setting-management-config.mjs
var _c0 = () => ({
  time: "200ms",
  easing: "linear"
});
var _c1 = (a0, a1) => ({
  value: a0,
  params: a1
});
function EmailSettingGroupComponent_Conditional_0_button_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 24);
    ɵɵlistener("click", function EmailSettingGroupComponent_Conditional_0_button_57_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.openSendEmailModal());
    });
    ɵɵelement(1, "i", 25);
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "AbpSettingManagement::SendTestEmail"), " ");
  }
}
function EmailSettingGroupComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 5);
    ɵɵlistener("ngSubmit", function EmailSettingGroupComponent_Conditional_0_Template_form_ngSubmit_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.submit());
    });
    ɵɵelementStart(1, "div", 6)(2, "label", 7);
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelementStart(5, "span", 8);
    ɵɵtext(6, "*");
    ɵɵelementEnd()();
    ɵɵelement(7, "input", 9);
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 6)(9, "label", 7);
    ɵɵtext(10);
    ɵɵpipe(11, "abpLocalization");
    ɵɵelementStart(12, "span", 8);
    ɵɵtext(13, "*");
    ɵɵelementEnd()();
    ɵɵelement(14, "input", 10);
    ɵɵelementEnd();
    ɵɵelementStart(15, "div", 6)(16, "label", 7);
    ɵɵtext(17);
    ɵɵpipe(18, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(19, "input", 11);
    ɵɵelementEnd();
    ɵɵelementStart(20, "div", 6)(21, "label", 7);
    ɵɵtext(22);
    ɵɵpipe(23, "abpLocalization");
    ɵɵelementStart(24, "span", 8);
    ɵɵtext(25, "*");
    ɵɵelementEnd()();
    ɵɵelement(26, "input", 12);
    ɵɵelementEnd();
    ɵɵelementStart(27, "div", 13);
    ɵɵelement(28, "input", 14);
    ɵɵelementStart(29, "label", 15);
    ɵɵtext(30);
    ɵɵpipe(31, "abpLocalization");
    ɵɵelementEnd()();
    ɵɵelementStart(32, "div", 13);
    ɵɵelement(33, "input", 16);
    ɵɵelementStart(34, "label", 17);
    ɵɵtext(35);
    ɵɵpipe(36, "abpLocalization");
    ɵɵelementEnd()();
    ɵɵelementStart(37, "div")(38, "div", 6)(39, "label", 7);
    ɵɵtext(40);
    ɵɵpipe(41, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(42, "input", 18);
    ɵɵelementEnd();
    ɵɵelementStart(43, "div", 6)(44, "label", 7);
    ɵɵtext(45);
    ɵɵpipe(46, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(47, "input", 19);
    ɵɵelementEnd();
    ɵɵelementStart(48, "div", 20)(49, "label", 7);
    ɵɵtext(50);
    ɵɵpipe(51, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(52, "input", 21);
    ɵɵelementEnd()();
    ɵɵelement(53, "hr");
    ɵɵelementStart(54, "abp-button", 22);
    ɵɵtext(55);
    ɵɵpipe(56, "abpLocalization");
    ɵɵelementEnd();
    ɵɵtemplate(57, EmailSettingGroupComponent_Conditional_0_button_57_Template, 4, 3, "button", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r2.form)("validateOnSubmit", true);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 14, "AbpSettingManagement::DefaultFromDisplayName"));
    ɵɵadvance(7);
    ɵɵtextInterpolate(ɵɵpipeBind1(11, 16, "AbpSettingManagement::DefaultFromAddress"));
    ɵɵadvance(7);
    ɵɵtextInterpolate(ɵɵpipeBind1(18, 18, "AbpSettingManagement::SmtpHost"));
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(23, 20, "AbpSettingManagement::SmtpPort"));
    ɵɵadvance(8);
    ɵɵtextInterpolate(ɵɵpipeBind1(31, 22, "AbpSettingManagement::SmtpEnableSsl"));
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(36, 24, "AbpSettingManagement::SmtpUseDefaultCredentials"));
    ɵɵadvance(2);
    ɵɵproperty("@collapse", ɵɵpureFunction2(35, _c1, ((tmp_12_0 = ctx_r2.form.get("smtpUseDefaultCredentials")) == null ? null : tmp_12_0.value) ? "collapsed" : "expanded", ɵɵpureFunction0(34, _c0)));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(41, 26, "AbpSettingManagement::SmtpDomain"));
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(46, 28, "AbpSettingManagement::SmtpUserName"));
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(51, 30, "AbpSettingManagement::SmtpPassword"));
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(56, 32, "AbpSettingManagement::Save"), " ");
    ɵɵadvance(2);
    ɵɵproperty("abpPermission", ctx_r2.emailingPolicy);
  }
}
function EmailSettingGroupComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h3");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "AbpSettingManagement::SendTestEmail"));
  }
}
function EmailSettingGroupComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 26);
    ɵɵlistener("ngSubmit", function EmailSettingGroupComponent_ng_template_4_Template_form_ngSubmit_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.emailTestFormSubmit());
    });
    ɵɵelementStart(1, "div", 6)(2, "label", 7);
    ɵɵtext(3);
    ɵɵpipe(4, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(5, "input", 27);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 6)(7, "label", 7);
    ɵɵtext(8);
    ɵɵpipe(9, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(10, "input", 28);
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 6)(12, "label", 7);
    ɵɵtext(13);
    ɵɵpipe(14, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(15, "input", 29);
    ɵɵelementEnd();
    ɵɵelementStart(16, "div", 6)(17, "label", 7);
    ɵɵtext(18);
    ɵɵpipe(19, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelement(20, "textarea", 30);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r2.emailTestForm);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 5, "AbpSettingManagement::SenderEmailAddress"));
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(9, 7, "AbpSettingManagement::TargetEmailAddress"));
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(14, 9, "AbpSettingManagement::Subject"));
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(19, 11, "AbpSettingManagement::Body"));
  }
}
function EmailSettingGroupComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "abp-button", 31)(1, "span");
    ɵɵtext(2);
    ɵɵpipe(3, "abpLocalization");
    ɵɵelementEnd()();
    ɵɵelementStart(4, "button", 32);
    ɵɵtext(5);
    ɵɵpipe(6, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r2.emailTestForm.invalid && ctx_r2.emailTestForm.dirty);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 3, "AbpSettingManagement::Send"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 5, "AbpUi::Close"), " ");
  }
}
var {
  required,
  email
} = Validators;
var _EmailSettingGroupComponent = class _EmailSettingGroupComponent {
  constructor(emailSettingsService, fb, toasterService) {
    this.emailSettingsService = emailSettingsService;
    this.fb = fb;
    this.toasterService = toasterService;
    this.localizationService = inject(LocalizationService);
    this.configStateSevice = inject(ConfigStateService);
    this.currentUserEmail = toSignal(this.configStateSevice.getDeep$(["currentUser", "email"]));
    this.saving = false;
    this.emailingPolicy = "SettingManagement.Emailing";
    this.isEmailTestModalOpen = false;
    this.modalSize = {
      size: "lg"
    };
  }
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.emailSettingsService.get().subscribe((res) => {
      this.buildForm(res);
    });
  }
  buildForm(emailSettings) {
    this.form = this.fb.group({
      defaultFromDisplayName: [emailSettings.defaultFromDisplayName, [Validators.required]],
      defaultFromAddress: [emailSettings.defaultFromAddress, [Validators.required]],
      smtpHost: [emailSettings.smtpHost],
      smtpPort: [emailSettings.smtpPort, [Validators.required]],
      smtpEnableSsl: [emailSettings.smtpEnableSsl],
      smtpUseDefaultCredentials: [emailSettings.smtpUseDefaultCredentials],
      smtpDomain: [emailSettings.smtpDomain],
      smtpUserName: [emailSettings.smtpUserName],
      smtpPassword: [emailSettings.smtpPassword]
    });
  }
  submit() {
    if (this.saving || this.form.invalid) return;
    this.saving = true;
    this.emailSettingsService.update(this.form.value).pipe(finalize(() => this.saving = false)).subscribe(() => {
      this.toasterService.success("AbpSettingManagement::SavedSuccessfully");
      this.getData();
    });
  }
  openSendEmailModal() {
    this.buildEmailTestForm();
    this.isEmailTestModalOpen = true;
  }
  buildEmailTestForm() {
    const {
      defaultFromAddress
    } = this.form.value || {};
    const defaultSubject = this.localizationService.instant("AbpSettingManagement::TestEmailSubject", ...[Math.floor(Math.random() * 9999).toString()]);
    const defaultBody = this.localizationService.instant("AbpSettingManagement::TestEmailBody");
    this.emailTestForm = this.fb.group({
      senderEmailAddress: [defaultFromAddress || "", [required, email]],
      targetEmailAddress: [this.currentUserEmail(), [required, email]],
      subject: [defaultSubject, [required]],
      body: [defaultBody]
    });
  }
  emailTestFormSubmit() {
    if (this.emailTestForm.invalid) {
      return;
    }
    this.emailSettingsService.sendTestEmail(this.emailTestForm.value).subscribe((res) => {
      this.toasterService.success("AbpSettingManagement::SentSuccessfully");
      this.isEmailTestModalOpen = false;
    });
  }
};
_EmailSettingGroupComponent.ɵfac = function EmailSettingGroupComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmailSettingGroupComponent)(ɵɵdirectiveInject(EmailSettingsService), ɵɵdirectiveInject(UntypedFormBuilder), ɵɵdirectiveInject(ToasterService));
};
_EmailSettingGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _EmailSettingGroupComponent,
  selectors: [["abp-email-setting-group"]],
  decls: 8,
  vars: 3,
  consts: [["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], [1, "py-2", "abp-md-form", 3, "formGroup", "validateOnSubmit"], [3, "visibleChange", "visible", "options"], [1, "py-2", "abp-md-form", 3, "ngSubmit", "formGroup", "validateOnSubmit"], [1, "mb-3", "form-group"], [1, "form-label"], [1, "ms-1"], ["type", "text", "formControlName", "defaultFromDisplayName", 1, "form-control"], ["type", "text", "formControlName", "defaultFromAddress", 1, "form-control"], ["type", "text", "formControlName", "smtpHost", 1, "form-control"], ["type", "number", "formControlName", "smtpPort", 1, "form-control"], [1, "form-check", "mb-2"], ["type", "checkbox", "id", "smtp-enable-ssl", "formControlName", "smtpEnableSsl", 1, "form-check-input"], ["for", "smtp-enable-ssl", 1, "form-check-label"], ["type", "checkbox", "id", "smtp-use-default-credentials", "formControlName", "smtpUseDefaultCredentials", 1, "form-check-input"], ["for", "smtp-use-default-credentials", 1, "form-check-label"], ["type", "text", "formControlName", "smtpDomain", 1, "form-control"], ["type", "text", "formControlName", "smtpUserName", 1, "form-control"], [1, "form-group"], ["type", "password", "formControlName", "smtpPassword", 1, "form-control"], ["buttonType", "submit", "iconClass", "fa fa-save"], ["type", "button", "class", "btn btn-primary mx-2", 3, "click", 4, "abpPermission"], ["type", "button", 1, "btn", "btn-primary", "mx-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "f-send"], ["id", "emailTestForm", 3, "ngSubmit", "formGroup"], ["formControlName", "senderEmailAddress", 1, "form-control"], ["formControlName", "targetEmailAddress", 1, "form-control"], ["formControlName", "subject", 1, "form-control"], ["formControlName", "body", 1, "form-control"], ["buttonType", "submit", "iconClass", "fa fa-send", "formName", "emailTestForm", 3, "disabled"], ["type", "button", "abpClose", "", 1, "btn", "btn-secondary"]],
  template: function EmailSettingGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵconditionalCreate(0, EmailSettingGroupComponent_Conditional_0_Template, 58, 38, "form", 3);
      ɵɵelementStart(1, "abp-modal", 4);
      ɵɵtwoWayListener("visibleChange", function EmailSettingGroupComponent_Template_abp_modal_visibleChange_1_listener($event) {
        ɵɵrestoreView(_r1);
        ɵɵtwoWayBindingSet(ctx.isEmailTestModalOpen, $event) || (ctx.isEmailTestModalOpen = $event);
        return ɵɵresetView($event);
      });
      ɵɵtemplate(2, EmailSettingGroupComponent_ng_template_2_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, EmailSettingGroupComponent_ng_template_4_Template, 21, 13, "ng-template", null, 1, ɵɵtemplateRefExtractor)(6, EmailSettingGroupComponent_ng_template_6_Template, 7, 7, "ng-template", null, 2, ɵɵtemplateRefExtractor);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵconditional(ctx.form ? 0 : -1);
      ɵɵadvance();
      ɵɵtwoWayProperty("visible", ctx.isEmailTestModalOpen);
      ɵɵproperty("options", ctx.modalSize);
    }
  },
  dependencies: [ReactiveFormsModule, ɵNgNoValidate, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, LocalizationPipe, ButtonComponent, ModalComponent, ModalCloseDirective, NgxValidateCoreModule, ValidationGroupDirective, ValidationDirective, PermissionDirective],
  encapsulation: 2,
  data: {
    animation: [collapse]
  }
});
var EmailSettingGroupComponent = _EmailSettingGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailSettingGroupComponent, [{
    type: Component,
    args: [{
      selector: "abp-email-setting-group",
      animations: [collapse],
      imports: [ReactiveFormsModule, CommonModule, LocalizationPipe, ButtonComponent, ModalComponent, ModalCloseDirective, NgxValidateCoreModule, PermissionDirective],
      template: `@if (form) {\r
  <form [formGroup]="form" class="py-2 abp-md-form" (ngSubmit)="submit()" [validateOnSubmit]="true">\r
    <div class="mb-3 form-group">\r
      <label class="form-label"\r
        >{{ 'AbpSettingManagement::DefaultFromDisplayName' | abpLocalization\r
        }}<span class="ms-1">*</span></label\r
      >\r
      <input type="text" class="form-control" formControlName="defaultFromDisplayName" />\r
    </div>\r
    <div class="mb-3 form-group">\r
      <label class="form-label"\r
        >{{ 'AbpSettingManagement::DefaultFromAddress' | abpLocalization\r
        }}<span class="ms-1">*</span></label\r
      >\r
      <input type="text" class="form-control" formControlName="defaultFromAddress" />\r
    </div>\r
    <div class="mb-3 form-group">\r
      <label class="form-label">{{ 'AbpSettingManagement::SmtpHost' | abpLocalization }}</label>\r
      <input type="text" class="form-control" formControlName="smtpHost" />\r
    </div>\r
    <div class="mb-3 form-group">\r
      <label class="form-label"\r
        >{{ 'AbpSettingManagement::SmtpPort' | abpLocalization }}<span class="ms-1">*</span></label\r
      >\r
      <input type="number" class="form-control" formControlName="smtpPort" />\r
    </div>\r
\r
    <div class="form-check mb-2">\r
      <input\r
        type="checkbox"\r
        id="smtp-enable-ssl"\r
        class="form-check-input"\r
        formControlName="smtpEnableSsl"\r
      />\r
      <label class="form-check-label" for="smtp-enable-ssl">{{\r
        'AbpSettingManagement::SmtpEnableSsl' | abpLocalization\r
      }}</label>\r
    </div>\r
    <div class="form-check mb-2">\r
      <input\r
        type="checkbox"\r
        id="smtp-use-default-credentials"\r
        class="form-check-input"\r
        formControlName="smtpUseDefaultCredentials"\r
      />\r
      <label class="form-check-label" for="smtp-use-default-credentials">{{\r
        'AbpSettingManagement::SmtpUseDefaultCredentials' | abpLocalization\r
      }}</label>\r
    </div>\r
\r
    <div\r
      [@collapse]="{\r
        value: form.get('smtpUseDefaultCredentials')?.value ? 'collapsed' : 'expanded',\r
        params: { time: '200ms', easing: 'linear' },\r
      }"\r
    >\r
      <div class="mb-3 form-group">\r
        <label class="form-label">{{ 'AbpSettingManagement::SmtpDomain' | abpLocalization }}</label>\r
        <input type="text" class="form-control" formControlName="smtpDomain" />\r
      </div>\r
\r
      <div class="mb-3 form-group">\r
        <label class="form-label">{{\r
          'AbpSettingManagement::SmtpUserName' | abpLocalization\r
        }}</label>\r
        <input type="text" class="form-control" formControlName="smtpUserName" />\r
      </div>\r
\r
      <div class="form-group">\r
        <label class="form-label">{{\r
          'AbpSettingManagement::SmtpPassword' | abpLocalization\r
        }}</label>\r
        <input type="password" class="form-control" formControlName="smtpPassword" />\r
      </div>\r
    </div>\r
\r
    <hr />\r
\r
    <abp-button buttonType="submit" iconClass="fa fa-save">\r
      {{ 'AbpSettingManagement::Save' | abpLocalization }}\r
    </abp-button>\r
    <button\r
      *abpPermission="emailingPolicy"\r
      type="button"\r
      (click)="openSendEmailModal()"\r
      class="btn btn-primary mx-2"\r
    >\r
      <i class="fa f-send" aria-hidden="true"></i>\r
      {{ 'AbpSettingManagement::SendTestEmail' | abpLocalization }}\r
    </button>\r
  </form>\r
}\r
\r
<abp-modal [(visible)]="isEmailTestModalOpen" [options]="modalSize">\r
  <ng-template #abpHeader>\r
    <h3>{{ 'AbpSettingManagement::SendTestEmail' | abpLocalization }}</h3>\r
  </ng-template>\r
\r
  <ng-template #abpBody>\r
    <form [formGroup]="emailTestForm" id="emailTestForm" (ngSubmit)="emailTestFormSubmit()">\r
      <div class="mb-3 form-group">\r
        <label class="form-label">{{\r
          'AbpSettingManagement::SenderEmailAddress' | abpLocalization\r
        }}</label>\r
        <input class="form-control" formControlName="senderEmailAddress" />\r
      </div>\r
\r
      <div class="mb-3 form-group">\r
        <label class="form-label">{{\r
          'AbpSettingManagement::TargetEmailAddress' | abpLocalization\r
        }}</label>\r
        <input class="form-control" formControlName="targetEmailAddress" />\r
      </div>\r
\r
      <div class="mb-3 form-group">\r
        <label class="form-label">{{ 'AbpSettingManagement::Subject' | abpLocalization }}</label>\r
        <input class="form-control" formControlName="subject" />\r
      </div>\r
\r
      <div class="mb-3 form-group">\r
        <label class="form-label">{{ 'AbpSettingManagement::Body' | abpLocalization }}</label>\r
        <textarea class="form-control" formControlName="body"></textarea>\r
      </div>\r
    </form>\r
  </ng-template>\r
\r
  <ng-template #abpFooter>\r
    <abp-button\r
      buttonType="submit"\r
      iconClass="fa fa-send"\r
      formName="emailTestForm"\r
      [disabled]="emailTestForm.invalid && emailTestForm.dirty"\r
    >\r
      <span>{{ 'AbpSettingManagement::Send' | abpLocalization }}</span>\r
    </abp-button>\r
\r
    <button type="button" class="btn btn-secondary" abpClose>\r
      {{ 'AbpUi::Close' | abpLocalization }}\r
    </button>\r
  </ng-template>\r
</abp-modal>\r
`
    }]
  }], () => [{
    type: EmailSettingsService
  }, {
    type: UntypedFormBuilder
  }, {
    type: ToasterService
  }], null);
})();
var _SettingTabsService = class _SettingTabsService extends AbstractNavTreeService {
};
_SettingTabsService.ɵfac = /* @__PURE__ */ (() => {
  let ɵSettingTabsService_BaseFactory;
  return function SettingTabsService_Factory(__ngFactoryType__) {
    return (ɵSettingTabsService_BaseFactory || (ɵSettingTabsService_BaseFactory = ɵɵgetInheritedFactory(_SettingTabsService)))(__ngFactoryType__ || _SettingTabsService);
  };
})();
_SettingTabsService.ɵprov = ɵɵdefineInjectable({
  token: _SettingTabsService,
  factory: _SettingTabsService.ɵfac,
  providedIn: "root"
});
var SettingTabsService = _SettingTabsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingTabsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function configureRoutes() {
  const routesService = inject(RoutesService);
  routesService.add([{
    name: "AbpSettingManagement::Settings",
    path: "/setting-management",
    parentName: "AbpUiNavigation::Menu:Administration",
    layout: "application",
    order: 100,
    iconClass: "fa fa-cog"
  }]);
}
var SETTING_MANAGEMENT_HAS_SETTING = new InjectionToken("SETTING_MANAGEMENT_HAS_SETTING", {
  factory: () => {
    const settingTabsService = inject(SettingTabsService);
    return settingTabsService.visible$.pipe(debounceTime(0), map((nodes) => !!nodes.length));
  }
});
var SETTING_MANAGEMENT_ROUTE_PROVIDERS = [provideAppInitializer(() => {
  configureRoutes();
  inject(SETTING_MANAGEMENT_HAS_SETTING);
})];
var SETTING_MANAGEMENT_SETTING_TAB_PROVIDERS = [provideAppInitializer(() => {
  configureSettingTabs();
})];
function configureSettingTabs() {
  const settingTabs = inject(SettingTabsService);
  settingTabs.add([{
    name: "AbpSettingManagement::Menu:Emailing",
    order: 100,
    requiredPolicy: "SettingManagement.Emailing",
    component: EmailSettingGroupComponent
  }]);
}
var SETTING_MANAGEMENT_FEATURES = new InjectionToken("SETTING_MANAGEMENT_FEATURES", {
  providedIn: "root",
  factory: () => {
    const configState = inject(ConfigStateService);
    const featureKey = "SettingManagement.Enable";
    const mapFn = (features) => ({
      enable: features[featureKey].toLowerCase() !== "false"
    });
    return featuresFactory(configState, [featureKey], mapFn);
  }
});
var SETTING_MANAGEMENT_ROUTE_VISIBILITY = new InjectionToken("SETTING_MANAGEMENT_ROUTE_VISIBILITY", {
  providedIn: "root",
  factory: () => {
    const stream = inject(SETTING_MANAGEMENT_FEATURES);
    return stream.pipe(map((features) => features.enable));
  }
});
var SETTING_MANAGEMENT_FEATURES_PROVIDERS = [provideAppInitializer(() => {
  inject(SETTING_MANAGEMENT_ROUTE_VISIBILITY);
})];
var SETTING_MANAGEMENT_VISIBLE_PROVIDERS = [provideAppInitializer(() => {
  setSettingManagementVisibility();
})];
function setSettingManagementVisibility() {
  const injector = inject(Injector);
  const settingManagementHasSetting$ = injector.get(SETTING_MANAGEMENT_HAS_SETTING);
  const isSettingManagementFeatureEnable$ = injector.get(SETTING_MANAGEMENT_ROUTE_VISIBILITY);
  const routes = injector.get(RoutesService);
  combineLatest([settingManagementHasSetting$, isSettingManagementFeatureEnable$]).subscribe(([settingManagementHasSetting, isSettingManagementFeatureEnable]) => {
    routes.patch("AbpSettingManagement::Settings", {
      invisible: !(settingManagementHasSetting && isSettingManagementFeatureEnable)
    });
  });
}
function provideSettingManagementConfig() {
  return makeEnvironmentProviders([SETTING_MANAGEMENT_ROUTE_PROVIDERS, SETTING_MANAGEMENT_SETTING_TAB_PROVIDERS, SETTING_MANAGEMENT_FEATURES_PROVIDERS, SETTING_MANAGEMENT_VISIBLE_PROVIDERS]);
}
var _EmailSettingsService2 = class _EmailSettingsService2 {
  constructor(restService) {
    this.restService = restService;
    this.apiName = "SettingManagement";
    this.get = () => this.restService.request({
      method: "GET",
      url: "/api/setting-management/emailing"
    }, {
      apiName: this.apiName
    });
    this.sendTestEmail = (input) => this.restService.request({
      method: "POST",
      url: "/api/setting-management/emailing/send-test-email",
      body: input
    }, {
      apiName: this.apiName
    });
    this.update = (input) => this.restService.request({
      method: "POST",
      url: "/api/setting-management/emailing",
      body: input
    }, {
      apiName: this.apiName
    });
  }
};
_EmailSettingsService2.ɵfac = function EmailSettingsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmailSettingsService2)(ɵɵinject(RestService));
};
_EmailSettingsService2.ɵprov = ɵɵdefineInjectable({
  token: _EmailSettingsService2,
  factory: _EmailSettingsService2.ɵfac,
  providedIn: "root"
});
var EmailSettingsService2 = _EmailSettingsService2;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailSettingsService2, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RestService
  }], null);
})();
var _SettingManagementConfigModule = class _SettingManagementConfigModule {
  /**
   * @deprecated forRoot method is deprecated, use `provideSettingManagementConfig` *function* for config settings.
   */
  static forRoot() {
    return {
      ngModule: _SettingManagementConfigModule,
      providers: [provideSettingManagementConfig()]
    };
  }
};
_SettingManagementConfigModule.ɵfac = function SettingManagementConfigModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingManagementConfigModule)();
};
_SettingManagementConfigModule.ɵmod = ɵɵdefineNgModule({
  type: _SettingManagementConfigModule,
  imports: [EmailSettingGroupComponent],
  exports: [EmailSettingGroupComponent]
});
_SettingManagementConfigModule.ɵinj = ɵɵdefineInjector({
  imports: [EmailSettingGroupComponent]
});
var SettingManagementConfigModule = _SettingManagementConfigModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingManagementConfigModule, [{
    type: NgModule,
    args: [{
      imports: [EmailSettingGroupComponent],
      declarations: [],
      exports: [EmailSettingGroupComponent]
    }]
  }], null, null);
})();

export {
  EmailSettingGroupComponent,
  SettingTabsService,
  configureRoutes,
  SETTING_MANAGEMENT_HAS_SETTING,
  SETTING_MANAGEMENT_ROUTE_PROVIDERS,
  SETTING_MANAGEMENT_SETTING_TAB_PROVIDERS,
  configureSettingTabs,
  SETTING_MANAGEMENT_FEATURES,
  SETTING_MANAGEMENT_ROUTE_VISIBILITY,
  SETTING_MANAGEMENT_FEATURES_PROVIDERS,
  SETTING_MANAGEMENT_VISIBLE_PROVIDERS,
  setSettingManagementVisibility,
  provideSettingManagementConfig,
  EmailSettingsService2 as EmailSettingsService,
  SettingManagementConfigModule
};
//# sourceMappingURL=chunk-T4P7JVT4.js.map
