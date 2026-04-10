import {
  PageComponent
} from "./chunk-QJ372M7U.js";
import {
  EXTENSIONS_IDENTIFIER,
  EntityAction,
  EntityProp,
  ExtensibleFormComponent,
  ExtensibleTableComponent,
  ExtensionsService,
  FormProp,
  FormPropData,
  ToolbarAction,
  generateFormFromProps,
  getObjectExtensionEntitiesFromStore,
  mapEntitiesToContributors,
  mergeWithDefaultActions,
  mergeWithDefaultProps
} from "./chunk-7LSFAQQI.js";
import {
  ButtonComponent,
  Confirmation,
  ConfirmationService,
  FormCheckboxComponent,
  ModalCloseDirective,
  ModalComponent,
  NgbDropdownModule,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavModule,
  NgbNavOutlet,
  ToasterService,
  eFormComponets,
  getPasswordValidators
} from "./chunk-ECZD44PI.js";
import "./chunk-VKRTUYJS.js";
import "./chunk-G7KX2FVW.js";
import {
  ConfigStateService,
  InitDirective,
  LazyModuleFactory,
  ListService,
  LocalizationPipe,
  LocalizationService,
  NgxValidateCoreModule,
  ReplaceableRouteContainerComponent,
  ReplaceableTemplateDirective,
  RestService,
  RouterOutletComponent,
  ValidationDirective,
  ValidationGroupDirective,
  authGuard,
  escapeHtmlChars,
  permissionGuard
} from "./chunk-DOR275RM.js";
import {
  RouterModule
} from "./chunk-5IKKBTZJ.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControlDirective,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  ɵNgNoValidate
} from "./chunk-XC2BQRUA.js";
import "./chunk-TH3T7PKV.js";
import "./chunk-UMUGP7NI.js";
import {
  CommonModule,
  NgStyle
} from "./chunk-6NN5GPUG.js";
import {
  Component,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewChildren,
  computed,
  concat,
  finalize,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  switchMap,
  take,
  tap,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
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
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-O2RWE6FT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7K3IQTKT.js";

// node_modules/@abp/ng.identity/fesm2022/abp-ng.identity-proxy.mjs
var _IdentityRoleService = class _IdentityRoleService {
  constructor(restService) {
    this.restService = restService;
    this.apiName = "AbpIdentity";
    this.create = (input) => this.restService.request({
      method: "POST",
      url: "/api/identity/roles",
      body: input
    }, {
      apiName: this.apiName
    });
    this.delete = (id) => this.restService.request({
      method: "DELETE",
      url: `/api/identity/roles/${id}`
    }, {
      apiName: this.apiName
    });
    this.get = (id) => this.restService.request({
      method: "GET",
      url: `/api/identity/roles/${id}`
    }, {
      apiName: this.apiName
    });
    this.getAllList = () => this.restService.request({
      method: "GET",
      url: "/api/identity/roles/all"
    }, {
      apiName: this.apiName
    });
    this.getList = (input) => this.restService.request({
      method: "GET",
      url: "/api/identity/roles",
      params: {
        filter: input.filter,
        sorting: input.sorting,
        skipCount: input.skipCount,
        maxResultCount: input.maxResultCount
      }
    }, {
      apiName: this.apiName
    });
    this.update = (id, input) => this.restService.request({
      method: "PUT",
      url: `/api/identity/roles/${id}`,
      body: input
    }, {
      apiName: this.apiName
    });
  }
};
_IdentityRoleService.ɵfac = function IdentityRoleService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IdentityRoleService)(ɵɵinject(RestService));
};
_IdentityRoleService.ɵprov = ɵɵdefineInjectable({
  token: _IdentityRoleService,
  factory: _IdentityRoleService.ɵfac,
  providedIn: "root"
});
var IdentityRoleService = _IdentityRoleService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IdentityRoleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RestService
  }], null);
})();
var _IdentityUserLookupService = class _IdentityUserLookupService {
  constructor(restService) {
    this.restService = restService;
    this.apiName = "AbpIdentity";
    this.findById = (id) => this.restService.request({
      method: "GET",
      url: `/api/identity/users/lookup/${id}`
    }, {
      apiName: this.apiName
    });
    this.findByUserName = (userName) => this.restService.request({
      method: "GET",
      url: `/api/identity/users/lookup/by-username/${userName}`
    }, {
      apiName: this.apiName
    });
    this.getCount = (input) => this.restService.request({
      method: "GET",
      url: "/api/identity/users/lookup/count",
      params: {
        filter: input.filter
      }
    }, {
      apiName: this.apiName
    });
    this.search = (input) => this.restService.request({
      method: "GET",
      url: "/api/identity/users/lookup/search",
      params: {
        filter: input.filter,
        sorting: input.sorting,
        skipCount: input.skipCount,
        maxResultCount: input.maxResultCount
      }
    }, {
      apiName: this.apiName
    });
  }
};
_IdentityUserLookupService.ɵfac = function IdentityUserLookupService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IdentityUserLookupService)(ɵɵinject(RestService));
};
_IdentityUserLookupService.ɵprov = ɵɵdefineInjectable({
  token: _IdentityUserLookupService,
  factory: _IdentityUserLookupService.ɵfac,
  providedIn: "root"
});
var IdentityUserLookupService = _IdentityUserLookupService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IdentityUserLookupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RestService
  }], null);
})();
var _IdentityUserService = class _IdentityUserService {
  constructor(restService) {
    this.restService = restService;
    this.apiName = "AbpIdentity";
    this.create = (input) => this.restService.request({
      method: "POST",
      url: "/api/identity/users",
      body: input
    }, {
      apiName: this.apiName
    });
    this.delete = (id) => this.restService.request({
      method: "DELETE",
      url: `/api/identity/users/${id}`
    }, {
      apiName: this.apiName
    });
    this.findByEmail = (email) => this.restService.request({
      method: "GET",
      url: `/api/identity/users/by-email/${email}`
    }, {
      apiName: this.apiName
    });
    this.findByUsername = (userName) => this.restService.request({
      method: "GET",
      url: `/api/identity/users/by-username/${userName}`
    }, {
      apiName: this.apiName
    });
    this.get = (id) => this.restService.request({
      method: "GET",
      url: `/api/identity/users/${id}`
    }, {
      apiName: this.apiName
    });
    this.getAssignableRoles = () => this.restService.request({
      method: "GET",
      url: "/api/identity/users/assignable-roles"
    }, {
      apiName: this.apiName
    });
    this.getList = (input) => this.restService.request({
      method: "GET",
      url: "/api/identity/users",
      params: {
        filter: input.filter,
        sorting: input.sorting,
        skipCount: input.skipCount,
        maxResultCount: input.maxResultCount
      }
    }, {
      apiName: this.apiName
    });
    this.getRoles = (id) => this.restService.request({
      method: "GET",
      url: `/api/identity/users/${id}/roles`
    }, {
      apiName: this.apiName
    });
    this.update = (id, input) => this.restService.request({
      method: "PUT",
      url: `/api/identity/users/${id}`,
      body: input
    }, {
      apiName: this.apiName
    });
    this.updateRoles = (id, input) => this.restService.request({
      method: "PUT",
      url: `/api/identity/users/${id}/roles`,
      body: input
    }, {
      apiName: this.apiName
    });
  }
};
_IdentityUserService.ɵfac = function IdentityUserService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IdentityUserService)(ɵɵinject(RestService));
};
_IdentityUserService.ɵprov = ɵɵdefineInjectable({
  token: _IdentityUserService,
  factory: _IdentityUserService.ɵfac,
  providedIn: "root"
});
var IdentityUserService = _IdentityUserService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IdentityUserService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RestService
  }], null);
})();

// node_modules/@abp/ng.permission-management/fesm2022/abp-ng.permission-management-proxy.mjs
var _PermissionsService = class _PermissionsService {
  constructor(restService) {
    this.restService = restService;
    this.apiName = "AbpPermissionManagement";
    this.get = (providerName, providerKey) => this.restService.request({
      method: "GET",
      url: "/api/permission-management/permissions",
      params: {
        providerName,
        providerKey
      }
    }, {
      apiName: this.apiName
    });
    this.update = (providerName, providerKey, input) => this.restService.request({
      method: "PUT",
      url: "/api/permission-management/permissions",
      params: {
        providerName,
        providerKey
      },
      body: input
    }, {
      apiName: this.apiName
    });
  }
};
_PermissionsService.ɵfac = function PermissionsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PermissionsService)(ɵɵinject(RestService));
};
_PermissionsService.ɵprov = ɵɵdefineInjectable({
  token: _PermissionsService,
  factory: _PermissionsService.ɵfac,
  providedIn: "root"
});
var PermissionsService = _PermissionsService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RestService
  }], null);
})();

// node_modules/@abp/ng.permission-management/fesm2022/abp-ng.permission-management.mjs
var _c0 = ["selectAllInThisTabsRef"];
var _c1 = ["selectAllInAllTabsRef"];
var _c2 = () => ({
  size: "lg",
  scrollable: false
});
var _c3 = (a0) => ({
  assignedCount: a0
});
function PermissionManagementComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h4");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, "AbpPermissionManagement::Permissions"), " - ", ctx_r0.entityDisplayName || ctx_r0.data.entityDisplayName, " ");
  }
}
function PermissionManagementComponent_Conditional_1_ng_template_2_For_22_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const count_r5 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1("(", count_r5.assignedCount, ")");
  }
}
function PermissionManagementComponent_Conditional_1_ng_template_2_For_22_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 27);
    ɵɵlistener("click", function PermissionManagementComponent_Conditional_1_ng_template_2_For_22_Conditional_1_Template_a_click_0_listener() {
      ɵɵrestoreView(_r3);
      const group_r4 = ɵɵnextContext().$implicit;
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.onChangeGroup(group_r4));
    })("select", function PermissionManagementComponent_Conditional_1_ng_template_2_For_22_Conditional_1_Template_a_select_0_listener() {
      ɵɵrestoreView(_r3);
      const group_r4 = ɵɵnextContext().$implicit;
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.setDisabled(group_r4.permissions));
    });
    ɵɵelementStart(1, "div");
    ɵɵtext(2);
    ɵɵconditionalCreate(3, PermissionManagementComponent_Conditional_1_ng_template_2_For_22_Conditional_1_Conditional_3_Template, 2, 1, "span");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const count_r5 = ctx;
    const group_r4 = ɵɵnextContext().$implicit;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassProp("active", (ctx_r0.selectedGroup == null ? null : ctx_r0.selectedGroup.name) === (group_r4 == null ? null : group_r4.name));
    ɵɵadvance();
    ɵɵclassProp("font-weight-bold", count_r5.assignedCount);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", group_r4 == null ? null : group_r4.displayName, " ");
    ɵɵadvance();
    ɵɵconditional(count_r5.assignedCount > 0 ? 3 : -1);
  }
}
function PermissionManagementComponent_Conditional_1_ng_template_2_For_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 23);
    ɵɵconditionalCreate(1, PermissionManagementComponent_Conditional_1_ng_template_2_For_22_Conditional_1_Template, 4, 6, "a", 26);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    const group_r4 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵconditional((tmp_16_0 = ɵɵpureFunction1(1, _c3, ctx_r0.getAssignedCount(group_r4.name))) ? 1 : -1, tmp_16_0);
  }
}
function PermissionManagementComponent_Conditional_1_ng_template_2_Conditional_25_For_8_Conditional_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 34);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const provider_r10 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate2("", provider_r10.providerName, ": ", provider_r10.providerKey);
  }
}
function PermissionManagementComponent_Conditional_1_ng_template_2_Conditional_25_For_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, PermissionManagementComponent_Conditional_1_ng_template_2_Conditional_25_For_8_Conditional_5_For_1_Template, 2, 2, "span", 34, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const permission_r8 = ɵɵnextContext().$implicit;
    ɵɵrepeater(permission_r8.grantedProviders);
  }
}
function PermissionManagementComponent_Conditional_1_ng_template_2_Conditional_25_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 31)(1, "input", 32, 5);
    ɵɵlistener("click", function PermissionManagementComponent_Conditional_1_ng_template_2_Conditional_25_For_8_Template_input_click_1_listener() {
      const permission_r8 = ɵɵrestoreView(_r7).$implicit;
      const permissionCheckbox_r9 = ɵɵreference(2);
      const ctx_r0 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r0.onClickCheckbox(permission_r8, permissionCheckbox_r9.value));
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "label", 33);
    ɵɵtext(4);
    ɵɵconditionalCreate(5, PermissionManagementComponent_Conditional_1_ng_template_2_Conditional_25_For_8_Conditional_5_Template, 2, 0);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const permission_r8 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵproperty("ngStyle", permission_r8.style);
    ɵɵadvance();
    ɵɵproperty("checked", ctx_r0.getChecked(permission_r8.name))("value", ctx_r0.getChecked(permission_r8.name))("disabled", ctx_r0.isGrantedByOtherProviderName(permission_r8.grantedProviders));
    ɵɵattribute("id", permission_r8.name);
    ɵɵadvance(2);
    ɵɵattribute("for", permission_r8.name);
    ɵɵadvance();
    ɵɵtextInterpolate1("", permission_r8.displayName, " ");
    ɵɵadvance();
    ɵɵconditional(!ctx_r0.hideBadges ? 5 : -1);
  }
}
function PermissionManagementComponent_Conditional_1_ng_template_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 14)(1, "input", 28, 4);
    ɵɵtwoWayListener("ngModelChange", function PermissionManagementComponent_Conditional_1_ng_template_2_Conditional_25_Template_input_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r0 = ɵɵnextContext(3);
      ɵɵtwoWayBindingSet(ctx_r0.selectThisTab, $event) || (ctx_r0.selectThisTab = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("click", function PermissionManagementComponent_Conditional_1_ng_template_2_Conditional_25_Template_input_click_1_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.onClickSelectThisTab());
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "label", 29);
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd()();
    ɵɵelement(6, "hr", 30);
    ɵɵrepeaterCreate(7, PermissionManagementComponent_Conditional_1_ng_template_2_Conditional_25_For_8_Template, 6, 8, "div", 31, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtwoWayProperty("ngModel", ctx_r0.selectThisTab);
    ɵɵproperty("disabled", ctx_r0.disableSelectAllTab);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 3, "AbpPermissionManagement::SelectAllInThisTab"));
    ɵɵadvance(3);
    ɵɵrepeater(ctx_r0.selectedGroupPermissions);
  }
}
function PermissionManagementComponent_Conditional_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "span", 10);
    ɵɵelement(4, "i", 11);
    ɵɵelementEnd();
    ɵɵelementStart(5, "input", 12);
    ɵɵlistener("ngModelChange", function PermissionManagementComponent_Conditional_1_ng_template_2_Template_input_ngModelChange_5_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.filter.set($event));
    });
    ɵɵelementEnd()()();
    ɵɵelementStart(6, "div", 13)(7, "div", 14)(8, "input", 15, 3);
    ɵɵtwoWayListener("ngModelChange", function PermissionManagementComponent_Conditional_1_ng_template_2_Template_input_ngModelChange_8_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r0.selectAllTab, $event) || (ctx_r0.selectAllTab = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("click", function PermissionManagementComponent_Conditional_1_ng_template_2_Template_input_click_8_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onClickSelectAll());
    });
    ɵɵelementEnd();
    ɵɵelementStart(10, "label", 16);
    ɵɵtext(11);
    ɵɵpipe(12, "abpLocalization");
    ɵɵelementEnd()()()();
    ɵɵelementStart(13, "fieldset", 17)(14, "legend", 18);
    ɵɵtext(15);
    ɵɵpipe(16, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(17, "div", 19)(18, "div", 20)(19, "div", 21)(20, "ul", 22);
    ɵɵrepeaterCreate(21, PermissionManagementComponent_Conditional_1_ng_template_2_For_22_Template, 2, 3, "li", 23, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd()()();
    ɵɵelementStart(23, "div", 24)(24, "div", 25);
    ɵɵconditionalCreate(25, PermissionManagementComponent_Conditional_1_ng_template_2_Conditional_25_Template, 9, 5);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(5);
    ɵɵproperty("ngModel", ctx_r0.filter());
    ɵɵadvance(3);
    ɵɵtwoWayProperty("ngModel", ctx_r0.selectAllTab);
    ɵɵproperty("disabled", ctx_r0.disabledSelectAllInAllTabs);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(12, 6, "AbpPermissionManagement::SelectAllInAllTabs"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(16, 8, "AbpPermissionManagement::PermissionGroup"), " ");
    ɵɵadvance(6);
    ɵɵrepeater(ctx_r0.permissionGroups());
    ɵɵadvance(4);
    ɵɵconditional(ctx_r0.selectedGroupPermissions.length ? 25 : -1);
  }
}
function PermissionManagementComponent_Conditional_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 35);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(3, "abp-button", 36);
    ɵɵlistener("click", function PermissionManagementComponent_Conditional_1_ng_template_4_Template_abp_button_click_3_listener() {
      ɵɵrestoreView(_r11);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.submit());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "AbpIdentity::Cancel"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 4, "AbpIdentity::Save"));
  }
}
function PermissionManagementComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PermissionManagementComponent_Conditional_1_ng_template_0_Template, 3, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, PermissionManagementComponent_Conditional_1_ng_template_2_Template, 26, 10, "ng-template", null, 1, ɵɵtemplateRefExtractor)(4, PermissionManagementComponent_Conditional_1_ng_template_4_Template, 6, 6, "ng-template", null, 2, ɵɵtemplateRefExtractor);
  }
}
var _PermissionManagementComponent = class _PermissionManagementComponent {
  constructor() {
    this.service = inject(PermissionsService);
    this.configState = inject(ConfigStateService);
    this.toasterService = inject(ToasterService);
    this.hideBadges = false;
    this._visible = false;
    this.visibleChange = new EventEmitter();
    this.data = {
      groups: [],
      entityDisplayName: ""
    };
    this.permissions = [];
    this.selectThisTab = false;
    this.selectAllTab = false;
    this.disableSelectAllTab = false;
    this.disabledSelectAllInAllTabs = false;
    this.modalBusy = false;
    this.filter = signal("");
    this.selectedGroupPermissions = [];
    this.permissionGroupSignal = signal([]);
    this.permissionGroups = computed(() => {
      const search = this.filter().toLowerCase().trim();
      let groups = this.permissionGroupSignal();
      if (!search) {
        this.setSelectedGroup(groups[0]);
        return groups;
      }
      const includesSearch = (text) => text.toLowerCase().includes(search);
      groups = groups.filter((group) => group.permissions.some((permission) => includesSearch(permission.displayName) || includesSearch(group.displayName)));
      if (groups.length) {
        this.setSelectedGroup(groups[0]);
      } else {
        this.selectedGroupPermissions = [];
      }
      return groups;
    });
    this.trackByFn = (_, item) => item.name;
  }
  get visible() {
    return this._visible;
  }
  set visible(value) {
    if (value === this._visible) {
      return;
    }
    if (value) {
      this.openModal().subscribe(() => {
        this._visible = true;
        this.visibleChange.emit(true);
        concat(this.selectAllInAllTabsRef.changes, this.selectAllInThisTabsRef.changes).pipe(take(1)).subscribe(() => {
          this.initModal();
        });
      });
    } else {
      this.setSelectedGroup(null);
      this._visible = false;
      this.visibleChange.emit(false);
      this.filter.set("");
    }
  }
  getChecked(name) {
    return (this.permissions.find((per) => per.name === name) || {
      isGranted: false
    }).isGranted;
  }
  setSelectedGroup(group) {
    this.selectedGroup = group;
    if (!this.selectedGroup) {
      this.selectedGroupPermissions = [];
      return;
    }
    const margin = `margin-${document.body.dir === "rtl" ? "right" : "left"}.px`;
    const permissions = (this.data.groups.find((group2) => group2.name === this.selectedGroup?.name) || {}).permissions || [];
    this.selectedGroupPermissions = permissions.map((permission) => __spreadProps(__spreadValues({}, permission), {
      style: {
        [margin]: findMargin(permissions, permission)
      },
      isGranted: (this.permissions.find((per) => per.name === permission.name) || {}).isGranted
    }));
  }
  setDisabled(permissions) {
    if (permissions.length) {
      this.disableSelectAllTab = permissions.every((permission) => permission.isGranted && permission.grantedProviders?.every((p) => p.providerName !== this.providerName));
    } else {
      this.disableSelectAllTab = false;
    }
  }
  isGrantedByOtherProviderName(grantedProviders) {
    if (grantedProviders.length) {
      return grantedProviders.findIndex((p) => p.providerName !== this.providerName) > -1;
    }
    return false;
  }
  onClickCheckbox(clickedPermission) {
    const {
      isGranted,
      grantedProviders
    } = clickedPermission;
    if (isGranted && this.isGrantedByOtherProviderName(grantedProviders)) {
      return;
    }
    this.setSelectedGroup(this.selectedGroup);
    setTimeout(() => {
      this.updatePermissionStatus(clickedPermission);
      this.updateSelectedGroupPermissions(clickedPermission);
      this.setParentClicked(clickedPermission);
      this.setTabCheckboxState();
      this.setGrantCheckboxState();
    }, 0);
  }
  updatePermissionStatus(clickedPermission) {
    this.permissions = this.permissions.map((permission) => {
      const isExactMatch = clickedPermission.name == permission.name;
      const isParentOfPermission = clickedPermission.parentName === permission.name;
      const isChildOfPermission = clickedPermission.name === permission.parentName;
      if (isExactMatch) {
        return __spreadProps(__spreadValues({}, permission), {
          isGranted: !permission.isGranted
        });
      }
      if (isChildOfPermission && permission.isGranted) {
        return __spreadProps(__spreadValues({}, permission), {
          isGranted: false
        });
      }
      if (isParentOfPermission && !permission.isGranted) {
        return __spreadProps(__spreadValues({}, permission), {
          isGranted: true
        });
      }
      return permission;
    });
  }
  setParentClicked(clickedPermission) {
    if (clickedPermission.parentName) {
      const parentPermissions = findParentPermissions(this.permissions, clickedPermission);
      if (parentPermissions.length > 0) {
        const parentNames = new Set(parentPermissions.map((parent) => parent.name));
        this.permissions = this.permissions.map((per) => {
          let updatedIsGranted = per.isGranted;
          if (per.parentName === clickedPermission.name && !clickedPermission.isGranted) {
            updatedIsGranted = false;
          }
          if (parentNames.has(per.name)) {
            updatedIsGranted = true;
          }
          return __spreadProps(__spreadValues({}, per), {
            isGranted: updatedIsGranted
          });
        });
      }
      return;
    }
    this.permissions = this.permissions.map((per) => {
      const parents = findParentPermissions(this.permissions, per);
      if (parents.length > 0) {
        const rootParent = parents[parents.length - 1];
        if (rootParent.name === clickedPermission.name && !rootParent.isGranted) {
          return __spreadProps(__spreadValues({}, per), {
            isGranted: false
          });
        }
      }
      return per;
    });
  }
  updateSelectedGroupPermissions(clickedPermissions) {
    this.selectedGroupPermissions = this.selectedGroupPermissions.map((per) => {
      if (per.name === clickedPermissions.name) {
        per.isGranted = !per.isGranted;
      }
      return per;
    });
  }
  setTabCheckboxState() {
    const selectablePermissions = this.selectedGroupPermissions.filter((per) => per.grantedProviders.every((p) => p.providerName === this.providerName));
    const selectedPermissions = selectablePermissions.filter((per) => per.isGranted);
    const element = document.querySelector("#select-all-in-this-tabs");
    if (!element) {
      return;
    }
    if (selectedPermissions.length === selectablePermissions.length) {
      element.indeterminate = false;
      this.selectThisTab = true;
    } else if (selectedPermissions.length === 0) {
      element.indeterminate = false;
      this.selectThisTab = false;
    } else {
      element.indeterminate = true;
    }
  }
  setGrantCheckboxState() {
    const selectablePermissions = this.permissions.filter((per) => per.grantedProviders.every((p) => p.providerName === this.providerName));
    const selectedAllPermissions = selectablePermissions.filter((per) => per.isGranted);
    const checkboxElement = document.querySelector("#select-all-in-all-tabs");
    if (selectedAllPermissions.length === selectablePermissions.length) {
      checkboxElement.indeterminate = false;
      this.selectAllTab = true;
    } else if (selectedAllPermissions.length === 0) {
      checkboxElement.indeterminate = false;
      this.selectAllTab = false;
    } else {
      checkboxElement.indeterminate = true;
    }
  }
  onClickSelectThisTab() {
    this.selectedGroupPermissions.forEach((permission) => {
      if (permission.isGranted && this.isGrantedByOtherProviderName(permission.grantedProviders)) return;
      const index = this.permissions.findIndex((per) => per.name === permission.name);
      this.permissions = [...this.permissions.slice(0, index), __spreadProps(__spreadValues({}, this.permissions[index]), {
        isGranted: !this.selectThisTab
      }), ...this.permissions.slice(index + 1)];
    });
    this.setGrantCheckboxState();
  }
  onClickSelectAll() {
    if (this.filter()) {
      this.filter.set("");
    }
    this.permissions = this.permissions.map((permission) => __spreadProps(__spreadValues({}, permission), {
      isGranted: this.isGrantedByOtherProviderName(permission.grantedProviders) || !this.selectAllTab
    }));
    if (!this.disableSelectAllTab) {
      this.selectThisTab = !this.selectAllTab;
      this.setTabCheckboxState();
      if (this.filter()) {
        this.setGrantCheckboxState();
      }
    }
    this.onChangeGroup(this.selectedGroup);
  }
  onChangeGroup(group) {
    this.setDisabled(group.permissions);
    this.setSelectedGroup(group);
    this.setTabCheckboxState();
  }
  submit() {
    const unchangedPermissions = getPermissions(this.data.groups);
    const changedPermissions = this.permissions.filter((per) => (unchangedPermissions.find((unchanged) => unchanged.name === per.name) || {}).isGranted === per.isGranted ? false : true).map(({
      name,
      isGranted
    }) => ({
      name,
      isGranted
    }));
    if (!changedPermissions.length) {
      this.visible = false;
      return;
    }
    this.modalBusy = true;
    this.service.update(this.providerName, this.providerKey, {
      permissions: changedPermissions
    }).pipe(switchMap(() => this.shouldFetchAppConfig() ? this.configState.refreshAppState() : of(null)), finalize(() => this.modalBusy = false)).subscribe(() => {
      this.visible = false;
      this.toasterService.success("AbpUi::SavedSuccessfully");
    });
  }
  openModal() {
    if (!this.providerKey || !this.providerName) {
      throw new Error("Provider Key and Provider Name are required.");
    }
    return this.service.get(this.providerName, this.providerKey).pipe(tap((permissionRes) => {
      const {
        groups
      } = permissionRes || {};
      this.data = permissionRes;
      this.permissionGroupSignal.set(groups);
      this.permissions = getPermissions(groups);
      this.setSelectedGroup(groups[0]);
      this.disabledSelectAllInAllTabs = this.permissions.every((per) => per.isGranted && per.grantedProviders.every((provider) => provider.providerName !== this.providerName));
    }));
  }
  initModal() {
    setTimeout(() => {
      this.setDisabled(this.selectedGroup?.permissions || []);
      this.setTabCheckboxState();
      this.setGrantCheckboxState();
    });
  }
  getAssignedCount(groupName) {
    return this.permissions.reduce((acc, val) => val.groupName === groupName && val.isGranted ? acc + 1 : acc, 0);
  }
  shouldFetchAppConfig() {
    const currentUser = this.configState.getOne("currentUser");
    if (this.providerName === "R") return currentUser.roles.some((role) => role === this.providerKey);
    if (this.providerName === "U") return currentUser.id === this.providerKey;
    return false;
  }
};
_PermissionManagementComponent.ɵfac = function PermissionManagementComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PermissionManagementComponent)();
};
_PermissionManagementComponent.ɵcmp = ɵɵdefineComponent({
  type: _PermissionManagementComponent,
  selectors: [["abp-permission-management"]],
  viewQuery: function PermissionManagementComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
      ɵɵviewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.selectAllInThisTabsRef = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.selectAllInAllTabsRef = _t);
    }
  },
  inputs: {
    providerName: "providerName",
    providerKey: "providerKey",
    hideBadges: "hideBadges",
    entityDisplayName: "entityDisplayName",
    visible: "visible"
  },
  outputs: {
    visibleChange: "visibleChange"
  },
  exportAs: ["abpPermissionManagement"],
  decls: 2,
  vars: 5,
  consts: [["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], ["selectAllInAllTabsRef", ""], ["selectAllInThisTabsRef", ""], ["permissionCheckbox", ""], [3, "visibleChange", "visible", "busy", "options"], [1, "row", "d-flex", "align-items-center", "mb-2"], [1, "col"], [1, "input-group", "mb-2"], ["id", "basic-addon1", 1, "input-group-text"], [1, "bi", "bi-search"], ["type", "text", "id", "permission-search", "placeholder", "Filter", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-auto"], [1, "form-check", "mb-2"], ["type", "checkbox", "id", "select-all-in-all-tabs", "name", "select-all-in-all-tabs", 1, "form-check-input", 3, "ngModelChange", "click", "ngModel", "disabled"], ["for", "select-all-in-all-tabs", 1, "form-check-label"], [1, "border", "rounded-4", "p-3"], [1, "px-1", "h5", "mb-0"], [1, "row"], [1, "col-md-4"], [1, "overflow-auto", "lpx-scroll-pills-container", "scroll-in-modal"], [1, "nav", "nav-pills", "flex-column"], [1, "border", "nav-item"], [1, "col-md-8", "scroll-in-modal"], [1, "ps-1"], [1, "nav-link", "pointer", 3, "active"], [1, "nav-link", "pointer", 3, "click", "select"], ["type", "checkbox", "id", "select-all-in-this-tabs", "name", "select-all-in-this-tabs", 1, "form-check-input", 3, "ngModelChange", "click", "ngModel", "disabled"], ["for", "select-all-in-this-tabs", 1, "form-check-label"], [1, "my-2"], [1, "form-check", "mb-2", 3, "ngStyle"], ["type", "checkbox", 1, "form-check-input", 3, "click", "checked", "value", "disabled"], [1, "form-check-label"], [1, "badge", "bg-primary", "text-dark"], ["type", "button", "abpClose", "", 1, "btn", "btn-outline-primary"], ["iconClass", "fa fa-check", 3, "click"]],
  template: function PermissionManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "abp-modal", 6);
      ɵɵtwoWayListener("visibleChange", function PermissionManagementComponent_Template_abp_modal_visibleChange_0_listener($event) {
        ɵɵtwoWayBindingSet(ctx.visible, $event) || (ctx.visible = $event);
        return $event;
      });
      ɵɵconditionalCreate(1, PermissionManagementComponent_Conditional_1_Template, 6, 0);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵtwoWayProperty("visible", ctx.visible);
      ɵɵproperty("busy", ctx.modalBusy)("options", ɵɵpureFunction0(4, _c2));
      ɵɵadvance();
      ɵɵconditional(ctx.data.entityDisplayName || ctx.entityDisplayName ? 1 : -1);
    }
  },
  dependencies: [FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, CommonModule, NgStyle, ModalComponent, LocalizationPipe, ButtonComponent, ModalCloseDirective],
  styles: [".scroll-in-modal[_ngcontent-%COMP%]{overflow:auto;max-height:calc(100vh - 23.1rem)}.lpx-scroll-pills-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:block;overflow-y:auto}@media(max-width:768px){.scroll-in-modal[_ngcontent-%COMP%]{max-height:calc(100vh - 15rem)}.lpx-scroll-pills-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{max-height:500px}}fieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{float:none;width:auto}.lpx-scroll-pills-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]{padding-top:0!important;padding-bottom:0!important}.lpx-scroll-pills-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:10px;border-radius:10px}.lpx-scroll-pills-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#fff!important;border-color:#6c5dd3!important;background-color:#6c5dd3!important}"]
});
var PermissionManagementComponent = _PermissionManagementComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionManagementComponent, [{
    type: Component,
    args: [{
      selector: "abp-permission-management",
      exportAs: "abpPermissionManagement",
      imports: [FormsModule, CommonModule, ModalComponent, LocalizationPipe, ButtonComponent, ModalCloseDirective],
      template: `<abp-modal [(visible)]="visible" [busy]="modalBusy" [options]="{ size: 'lg', scrollable: false }">\r
  @if (data.entityDisplayName || entityDisplayName) {\r
    <ng-template #abpHeader>\r
      <h4>\r
        {{ 'AbpPermissionManagement::Permissions' | abpLocalization }} -\r
        {{ entityDisplayName || data.entityDisplayName }}\r
      </h4>\r
    </ng-template>\r
    <ng-template #abpBody>\r
      <div class="row d-flex align-items-center mb-2">\r
        <div class="col">\r
          <div class="input-group mb-2">\r
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>\r
            <input\r
              type="text"\r
              class="form-control"\r
              id="permission-search"\r
              placeholder="Filter"\r
              [ngModel]="filter()"\r
              (ngModelChange)="filter.set($event)"\r
            />\r
          </div>\r
        </div>\r
        <div class="col-auto">\r
          <div class="form-check mb-2">\r
            <input\r
              #selectAllInAllTabsRef\r
              type="checkbox"\r
              id="select-all-in-all-tabs"\r
              name="select-all-in-all-tabs"\r
              class="form-check-input"\r
              [(ngModel)]="selectAllTab"\r
              (click)="onClickSelectAll()"\r
              [disabled]="disabledSelectAllInAllTabs"\r
            />\r
            <label class="form-check-label" for="select-all-in-all-tabs">{{\r
              'AbpPermissionManagement::SelectAllInAllTabs' | abpLocalization\r
            }}</label>\r
          </div>\r
        </div>\r
      </div>\r
      <fieldset class="border rounded-4 p-3">\r
        <legend class="px-1 h5 mb-0">\r
          {{ 'AbpPermissionManagement::PermissionGroup' | abpLocalization }}\r
        </legend>\r
        <div class="row">\r
          <div class="col-md-4">\r
            <div class="overflow-auto lpx-scroll-pills-container scroll-in-modal">\r
              <ul class="nav nav-pills flex-column">\r
                @for (group of permissionGroups(); track $index) {\r
                  <li class="border nav-item">\r
                    @if ({ assignedCount: getAssignedCount(group.name) }; as count) {\r
                      <a\r
                        class="nav-link pointer"\r
                        [class.active]="selectedGroup?.name === group?.name"\r
                        (click)="onChangeGroup(group)"\r
                        (select)="setDisabled(group.permissions)"\r
                      >\r
                        <div [class.font-weight-bold]="count.assignedCount">\r
                          {{ group?.displayName }}\r
                          @if (count.assignedCount > 0) {\r
                            <span>({{ count.assignedCount }})</span>\r
                          }\r
                        </div>\r
                      </a>\r
                    }\r
                  </li>\r
                }\r
              </ul>\r
            </div>\r
          </div>\r
\r
          <div class="col-md-8 scroll-in-modal">\r
            <div class="ps-1">\r
              @if (selectedGroupPermissions.length) {\r
                <div class="form-check mb-2">\r
                  <input\r
                    #selectAllInThisTabsRef\r
                    type="checkbox"\r
                    id="select-all-in-this-tabs"\r
                    name="select-all-in-this-tabs"\r
                    class="form-check-input"\r
                    [(ngModel)]="selectThisTab"\r
                    [disabled]="disableSelectAllTab"\r
                    (click)="onClickSelectThisTab()"\r
                  />\r
                  <label class="form-check-label" for="select-all-in-this-tabs">{{\r
                    'AbpPermissionManagement::SelectAllInThisTab' | abpLocalization\r
                  }}</label>\r
                </div>\r
                <hr class="my-2" />\r
                @for (permission of selectedGroupPermissions; track $index; let i = $index) {\r
                  <div [ngStyle]="permission.style" class="form-check mb-2">\r
                    <input\r
                      #permissionCheckbox\r
                      type="checkbox"\r
                      [checked]="getChecked(permission.name)"\r
                      [value]="getChecked(permission.name)"\r
                      [attr.id]="permission.name"\r
                      class="form-check-input"\r
                      [disabled]="isGrantedByOtherProviderName(permission.grantedProviders)"\r
                      (click)="onClickCheckbox(permission, permissionCheckbox.value)"\r
                    />\r
                    <label class="form-check-label" [attr.for]="permission.name"\r
                      >{{ permission.displayName }}\r
                      @if (!hideBadges) {\r
                        @for (provider of permission.grantedProviders; track $index) {\r
                          <span class="badge bg-primary text-dark"\r
                            >{{ provider.providerName }}: {{ provider.providerKey }}</span\r
                          >\r
                        }\r
                      }\r
                    </label>\r
                  </div>\r
                }\r
              }\r
            </div>\r
          </div>\r
        </div>\r
      </fieldset>\r
    </ng-template>\r
    <ng-template #abpFooter>\r
      <button type="button" class="btn btn-outline-primary" abpClose>\r
        {{ 'AbpIdentity::Cancel' | abpLocalization }}\r
      </button>\r
      <abp-button iconClass="fa fa-check" (click)="submit()">{{\r
        'AbpIdentity::Save' | abpLocalization\r
      }}</abp-button>\r
    </ng-template>\r
  }\r
</abp-modal>\r
`,
      styles: [".scroll-in-modal{overflow:auto;max-height:calc(100vh - 23.1rem)}.lpx-scroll-pills-container ul{display:block;overflow-y:auto}@media(max-width:768px){.scroll-in-modal{max-height:calc(100vh - 15rem)}.lpx-scroll-pills-container ul{max-height:500px}}fieldset legend{float:none;width:auto}.lpx-scroll-pills-container .tab-content{padding-top:0!important;padding-bottom:0!important}.lpx-scroll-pills-container ul li{margin-bottom:10px;border-radius:10px}.lpx-scroll-pills-container ul li a.active{color:#fff!important;border-color:#6c5dd3!important;background-color:#6c5dd3!important}\n"]
    }]
  }], null, {
    providerName: [{
      type: Input
    }],
    providerKey: [{
      type: Input
    }],
    hideBadges: [{
      type: Input
    }],
    entityDisplayName: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    visibleChange: [{
      type: Output
    }],
    selectAllInThisTabsRef: [{
      type: ViewChildren,
      args: ["selectAllInThisTabsRef"]
    }],
    selectAllInAllTabsRef: [{
      type: ViewChildren,
      args: ["selectAllInAllTabsRef"]
    }]
  });
})();
function findParentPermissions(permissions, permission) {
  const permissionMap = new Map(permissions.map((p) => [p.name, p]));
  let currentPermission = permissionMap.get(permission.name) ?? null;
  const parentPermissions = [];
  while (currentPermission && currentPermission.parentName) {
    const parentPermission = permissionMap.get(currentPermission.parentName);
    if (!parentPermission) {
      break;
    }
    parentPermissions.push(parentPermission);
    currentPermission = parentPermission;
  }
  return parentPermissions;
}
function findMargin(permissions, permission) {
  const parentPermission = permissions.find((per) => per.name === permission.parentName);
  if (parentPermission && parentPermission.parentName) {
    let margin = 20;
    return margin += findMargin(permissions, parentPermission);
  }
  return parentPermission ? 20 : 0;
}
function getPermissions(groups) {
  return groups.reduce((acc, val) => [...acc, ...val.permissions.map((p) => __spreadProps(__spreadValues({}, p), {
    groupName: val.name || ""
  }))], []);
}
var _PermissionManagementModule = class _PermissionManagementModule {
};
_PermissionManagementModule.ɵfac = function PermissionManagementModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PermissionManagementModule)();
};
_PermissionManagementModule.ɵmod = ɵɵdefineNgModule({
  type: _PermissionManagementModule,
  imports: [PermissionManagementComponent],
  exports: [PermissionManagementComponent]
});
_PermissionManagementModule.ɵinj = ɵɵdefineInjector({
  imports: [PermissionManagementComponent]
});
var PermissionManagementModule = _PermissionManagementModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionManagementModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [PermissionManagementComponent],
      exports: [PermissionManagementComponent]
    }]
  }], null, null);
})();

// node_modules/@abp/ng.identity/fesm2022/abp-ng.identity.mjs
var _c02 = () => ({
  value: "R"
});
var _c12 = (a0) => ({
  value: a0
});
var _c22 = (a0) => ({
  value: a0,
  twoWay: true
});
var _c32 = () => ({
  value: true
});
var _c4 = (a0, a1, a2, a3) => ({
  providerName: a0,
  providerKey: a1,
  visible: a2,
  hideBadges: a3
});
var _c5 = (a0) => ({
  visibleChange: a0
});
var _c6 = (a0, a1, a2) => ({
  inputs: a0,
  outputs: a1,
  componentKey: a2
});
function RolesComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h3");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, (ctx_r1.selected == null ? null : ctx_r1.selected.id) ? "AbpIdentity::Edit" : "AbpIdentity::NewRole"));
  }
}
function RolesComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 10);
    ɵɵlistener("ngSubmit", function RolesComponent_ng_template_8_Template_form_ngSubmit_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.save());
    });
    ɵɵelement(1, "abp-extensible-form", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.form)("validateOnSubmit", true);
    ɵɵadvance();
    ɵɵproperty("selectedRecord", ctx_r1.selected);
  }
}
function RolesComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(3, "abp-button", 13);
    ɵɵlistener("click", function RolesComponent_ng_template_10_Template_abp_button_click_3_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.save());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, "AbpIdentity::Cancel"), " ");
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r1.form == null ? null : ctx_r1.form.invalid);
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 5, "AbpIdentity::Save"));
  }
}
function RolesComponent_abp_permission_management_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "abp-permission-management", 14, 3);
    ɵɵlistener("abpInit", function RolesComponent_abp_permission_management_12_Template_abp_permission_management_abpInit_0_listener() {
      const init_r6 = ɵɵrestoreView(_r5).initTemplate;
      const abpPermissionManagement_r7 = ɵɵreference(1);
      return ɵɵresetView(init_r6(abpPermissionManagement_r7));
    });
    ɵɵelementEnd();
  }
}
var _c7 = ["modalContent"];
var _c8 = () => ({
  value: "U"
});
var _c9 = (a0, a1, a2) => ({
  providerName: a0,
  providerKey: a1,
  visible: a2
});
var _c10 = (a0, a1, a2) => ({
  checkboxId: a0,
  label: a1,
  formControl: a2
});
var _c11 = (a0, a1) => ({
  inputs: a0,
  componentKey: a1
});
function UsersComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h3");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, (ctx_r1.selected == null ? null : ctx_r1.selected.id) ? "AbpIdentity::Edit" : "AbpIdentity::NewUser"));
  }
}
function UsersComponent_ng_template_12_Conditional_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "abp-extensible-form", 22);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("selectedRecord", ctx_r1.selected);
  }
}
function UsersComponent_ng_template_12_Conditional_0_ng_template_12_For_1_abp_checkbox_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "abp-checkbox", 25);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    const roleGroup_r5 = ctx_r3.$implicit;
    const ɵ$index_50_r6 = ctx_r3.$index;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("checkboxId", "roles-" + ɵ$index_50_r6)("formControl", roleGroup_r5.controls[ctx_r1.roles[ɵ$index_50_r6].name])("label", ctx_r1.roles[ɵ$index_50_r6].name);
  }
}
function UsersComponent_ng_template_12_Conditional_0_ng_template_12_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 23);
    ɵɵtemplate(1, UsersComponent_ng_template_12_Conditional_0_ng_template_12_For_1_abp_checkbox_1_Template, 1, 3, "abp-checkbox", 24);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const roleGroup_r5 = ctx.$implicit;
    const ɵ$index_50_r6 = ctx.$index;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction2(5, _c11, ɵɵpureFunction3(1, _c10, "roles-" + ɵ$index_50_r6, ctx_r1.roles[ɵ$index_50_r6].name, roleGroup_r5.controls[ctx_r1.roles[ɵ$index_50_r6].name]), ctx_r1.inputKey));
  }
}
function UsersComponent_ng_template_12_Conditional_0_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, UsersComponent_ng_template_12_Conditional_0_ng_template_12_For_1_Template, 2, 8, "div", 23, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵrepeater(ctx_r1.roleGroups);
  }
}
function UsersComponent_ng_template_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 16);
    ɵɵlistener("ngSubmit", function UsersComponent_ng_template_12_Conditional_0_Template_form_ngSubmit_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.save());
    });
    ɵɵelementStart(1, "ul", 17, 3)(3, "li", 18)(4, "a", 19);
    ɵɵtext(5);
    ɵɵpipe(6, "abpLocalization");
    ɵɵelementEnd();
    ɵɵtemplate(7, UsersComponent_ng_template_12_Conditional_0_ng_template_7_Template, 1, 1, "ng-template", 20);
    ɵɵelementEnd();
    ɵɵelementStart(8, "li", 18)(9, "a", 19);
    ɵɵtext(10);
    ɵɵpipe(11, "abpLocalization");
    ɵɵelementEnd();
    ɵɵtemplate(12, UsersComponent_ng_template_12_Conditional_0_ng_template_12_Template, 2, 0, "ng-template", 20);
    ɵɵelementEnd()();
    ɵɵelement(13, "div", 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const nav_r7 = ɵɵreference(2);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("formGroup", ctx_r1.form);
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 4, "AbpIdentity::UserInformations"));
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(11, 6, "AbpIdentity::Roles"));
    ɵɵadvance(3);
    ɵɵproperty("ngbNavOutlet", nav_r7);
  }
}
function UsersComponent_ng_template_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵelement(1, "i", 26);
    ɵɵelementEnd();
  }
}
function UsersComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, UsersComponent_ng_template_12_Conditional_0_Template, 14, 8, "form", 14)(1, UsersComponent_ng_template_12_Conditional_1_Template, 2, 0, "div", 15);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(ctx_r1.form ? 0 : 1);
  }
}
function UsersComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 27);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(3, "abp-button", 28);
    ɵɵlistener("click", function UsersComponent_ng_template_14_Template_abp_button_click_3_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.save());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, "AbpIdentity::Cancel"), " ");
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r1.form == null ? null : ctx_r1.form.invalid);
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 5, "AbpIdentity::Save"));
  }
}
function UsersComponent_abp_permission_management_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "abp-permission-management", 29, 4);
    ɵɵlistener("abpInit", function UsersComponent_abp_permission_management_16_Template_abp_permission_management_abpInit_0_listener() {
      const init_r10 = ɵɵrestoreView(_r9).initTemplate;
      const abpPermissionManagement_r11 = ɵɵreference(1);
      return ɵɵresetView(init_r10(abpPermissionManagement_r11));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("entityDisplayName", ctx_r1.entityDisplayName);
  }
}
var _RolesComponent = class _RolesComponent {
  constructor() {
    this.list = inject(ListService);
    this.confirmationService = inject(ConfirmationService);
    this.toasterService = inject(ToasterService);
    this.injector = inject(Injector);
    this.service = inject(IdentityRoleService);
    this.data = {
      items: [],
      totalCount: 0
    };
    this.visiblePermissions = false;
    this.modalBusy = false;
    this.permissionManagementKey = "PermissionManagement.PermissionManagementComponent";
    this.onVisiblePermissionChange = (event) => {
      this.visiblePermissions = event;
    };
  }
  ngOnInit() {
    this.hookToQuery();
  }
  buildForm() {
    const data = new FormPropData(this.injector, this.selected);
    this.form = generateFormFromProps(data);
  }
  openModal() {
    this.buildForm();
    this.isModalVisible = true;
  }
  add() {
    this.selected = {};
    this.openModal();
  }
  edit(id) {
    this.service.get(id).subscribe((res) => {
      this.selected = res;
      this.openModal();
    });
  }
  save() {
    if (!this.form.valid) return;
    this.modalBusy = true;
    const {
      id
    } = this.selected || {};
    (id ? this.service.update(id, __spreadValues(__spreadValues({}, this.selected), this.form.value)) : this.service.create(this.form.value)).pipe(finalize(() => this.modalBusy = false)).subscribe(() => {
      this.isModalVisible = false;
      this.toasterService.success("AbpUi::SavedSuccessfully");
      this.list.get();
    });
  }
  delete(id, name) {
    this.confirmationService.warn("AbpIdentity::RoleDeletionConfirmationMessage", "AbpIdentity::AreYouSure", {
      messageLocalizationParams: [name]
    }).subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.toasterService.success("AbpUi::DeletedSuccessfully");
        this.service.delete(id).subscribe(() => this.list.get());
      }
    });
  }
  hookToQuery() {
    this.list.hookToQuery((query) => this.service.getList(query)).subscribe((res) => this.data = res);
  }
  openPermissionsModal(providerKey) {
    this.providerKey = providerKey;
    setTimeout(() => {
      this.visiblePermissions = true;
    }, 0);
  }
  sort(data) {
    const {
      prop,
      dir
    } = data.sorts[0];
    this.list.sortKey = prop;
    this.list.sortOrder = dir;
  }
};
_RolesComponent.ɵfac = function RolesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RolesComponent)();
};
_RolesComponent.ɵcmp = ɵɵdefineComponent({
  type: _RolesComponent,
  selectors: [["abp-roles"]],
  features: [ɵɵProvidersFeature([ListService, {
    provide: EXTENSIONS_IDENTIFIER,
    useValue: "Identity.RolesComponent"
    /* eIdentityComponents.Roles */
  }])],
  decls: 13,
  vars: 27,
  consts: [["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], ["abpPermissionManagement", "abpPermissionManagement"], [3, "title", "toolbar"], ["id", "identity-roles-wrapper", 1, "card"], [1, "card-body"], [3, "data", "recordsTotal", "list"], [3, "visibleChange", "visible", "busy"], [3, "abpInit", 4, "abpReplaceableTemplate"], [3, "ngSubmit", "formGroup", "validateOnSubmit"], [3, "selectedRecord"], ["type", "button", "abpClose", "", 1, "btn", "btn-outline-primary"], ["iconClass", "fa fa-check", 3, "click", "disabled"], [3, "abpInit"]],
  template: function RolesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "abp-page", 4);
      ɵɵpipe(1, "abpLocalization");
      ɵɵelementStart(2, "div", 5)(3, "div", 6);
      ɵɵelement(4, "abp-extensible-table", 7);
      ɵɵelementEnd()();
      ɵɵelementStart(5, "abp-modal", 8);
      ɵɵtwoWayListener("visibleChange", function RolesComponent_Template_abp_modal_visibleChange_5_listener($event) {
        ɵɵrestoreView(_r1);
        ɵɵtwoWayBindingSet(ctx.isModalVisible, $event) || (ctx.isModalVisible = $event);
        return ɵɵresetView($event);
      });
      ɵɵtemplate(6, RolesComponent_ng_template_6_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor)(8, RolesComponent_ng_template_8_Template, 2, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor)(10, RolesComponent_ng_template_10_Template, 6, 7, "ng-template", null, 2, ɵɵtemplateRefExtractor);
      ɵɵelementEnd();
      ɵɵtemplate(12, RolesComponent_abp_permission_management_12_Template, 2, 0, "abp-permission-management", 9);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("title", ɵɵpipeBind1(1, 8, "AbpIdentity::Roles"))("toolbar", ctx.data.items);
      ɵɵadvance(4);
      ɵɵproperty("data", ctx.data.items)("recordsTotal", ctx.data.totalCount)("list", ctx.list);
      ɵɵadvance();
      ɵɵtwoWayProperty("visible", ctx.isModalVisible);
      ɵɵproperty("busy", ctx.modalBusy);
      ɵɵadvance(7);
      ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction3(23, _c6, ɵɵpureFunction4(16, _c4, ɵɵpureFunction0(10, _c02), ɵɵpureFunction1(11, _c12, ctx.providerKey), ɵɵpureFunction1(13, _c22, ctx.visiblePermissions), ɵɵpureFunction0(15, _c32)), ɵɵpureFunction1(21, _c5, ctx.onVisiblePermissionChange), ctx.permissionManagementKey));
    }
  },
  dependencies: [ReactiveFormsModule, ɵNgNoValidate, NgControlStatusGroup, FormGroupDirective, LocalizationPipe, ExtensibleTableComponent, ModalComponent, ButtonComponent, PageComponent, ExtensibleFormComponent, ModalCloseDirective, PermissionManagementComponent, ReplaceableTemplateDirective, NgxValidateCoreModule, ValidationGroupDirective, InitDirective],
  encapsulation: 2
});
var RolesComponent = _RolesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesComponent, [{
    type: Component,
    args: [{
      selector: "abp-roles",
      providers: [ListService, {
        provide: EXTENSIONS_IDENTIFIER,
        useValue: "Identity.RolesComponent"
        /* eIdentityComponents.Roles */
      }],
      imports: [ReactiveFormsModule, LocalizationPipe, ExtensibleTableComponent, ModalComponent, ButtonComponent, PageComponent, ExtensibleFormComponent, ModalCloseDirective, PermissionManagementComponent, ReplaceableTemplateDirective, NgxValidateCoreModule, InitDirective],
      template: `<abp-page [title]="'AbpIdentity::Roles' | abpLocalization" [toolbar]="data.items">\r
  <div id="identity-roles-wrapper" class="card">\r
    <div class="card-body">\r
      <abp-extensible-table\r
        [data]="data.items"\r
        [recordsTotal]="data.totalCount"\r
        [list]="list"\r
      ></abp-extensible-table>\r
    </div>\r
  </div>\r
\r
  <abp-modal [(visible)]="isModalVisible" [busy]="modalBusy">\r
    <ng-template #abpHeader>\r
      <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewRole') | abpLocalization }}</h3>\r
    </ng-template>\r
\r
    <ng-template #abpBody>\r
      <form [formGroup]="form" (ngSubmit)="save()" [validateOnSubmit]="true">\r
        <abp-extensible-form [selectedRecord]="selected"></abp-extensible-form>\r
      </form>\r
    </ng-template>\r
\r
    <ng-template #abpFooter>\r
      <button type="button" class="btn btn-outline-primary" abpClose>\r
        {{ 'AbpIdentity::Cancel' | abpLocalization }}\r
      </button>\r
      <abp-button iconClass="fa fa-check" [disabled]="form?.invalid" (click)="save()">{{\r
        'AbpIdentity::Save' | abpLocalization\r
        }}</abp-button>\r
    </ng-template>\r
  </abp-modal>\r
\r
  <abp-permission-management\r
    #abpPermissionManagement="abpPermissionManagement"\r
    *abpReplaceableTemplate="\r
    {\r
      inputs: {\r
        providerName: { value: 'R' },\r
        providerKey: { value: providerKey },\r
        visible: { value: visiblePermissions, twoWay: true },\r
        hideBadges: { value: true }\r
      },\r
      outputs: { visibleChange: onVisiblePermissionChange },\r
      componentKey: permissionManagementKey\r
    };\r
    let init = initTemplate\r
  "\r
    (abpInit)="init(abpPermissionManagement)"\r
  >\r
  </abp-permission-management>\r
</abp-page>\r
`
    }]
  }], null, null);
})();
var _UsersComponent = class _UsersComponent {
  constructor() {
    this.list = inject(ListService);
    this.confirmationService = inject(ConfirmationService);
    this.service = inject(IdentityUserService);
    this.toasterService = inject(ToasterService);
    this.fb = inject(UntypedFormBuilder);
    this.injector = inject(Injector);
    this.data = {
      items: [],
      totalCount: 0
    };
    this.visiblePermissions = false;
    this.modalBusy = false;
    this.permissionManagementKey = "PermissionManagement.PermissionManagementComponent";
    this.inputKey = eFormComponets.FormCheckboxComponent;
    this.trackByFn = (index, item) => Object.keys(item)[0] || index;
    this.onVisiblePermissionChange = (event) => {
      this.visiblePermissions = event;
    };
  }
  get roleGroups() {
    return this.form.get("roleNames")?.controls || [];
  }
  ngOnInit() {
    this.hookToQuery();
  }
  buildForm() {
    const data = new FormPropData(this.injector, this.selected);
    this.form = generateFormFromProps(data);
    this.service.getAssignableRoles().subscribe(({
      items
    }) => {
      this.roles = items;
      if (this.roles) {
        this.form.addControl("roleNames", this.fb.array(this.roles.map((role) => this.fb.group({
          [role.name]: [this.selected?.id ? !!this.selectedUserRoles?.find((userRole) => userRole.id === role.id) : role.isDefault]
        }))));
      }
    });
  }
  openModal() {
    this.buildForm();
    this.isModalVisible = true;
  }
  add() {
    this.selected = {};
    this.selectedUserRoles = [];
    this.openModal();
  }
  edit(id) {
    this.service.get(id).pipe(tap((user) => this.selected = user), switchMap(() => this.service.getRoles(id))).subscribe((userRole) => {
      this.selectedUserRoles = userRole.items || [];
      this.openModal();
    });
  }
  save() {
    if (!this.form.valid || this.modalBusy) return;
    this.modalBusy = true;
    const {
      roleNames = []
    } = this.form.value;
    const mappedRoleNames = roleNames.filter((role) => !!role[Object.keys(role)[0]]).map((role) => Object.keys(role)[0]) || [];
    const {
      id
    } = this.selected || {};
    (id ? this.service.update(id, __spreadProps(__spreadValues(__spreadValues({}, this.selected), this.form.value), {
      roleNames: mappedRoleNames
    })) : this.service.create(__spreadProps(__spreadValues({}, this.form.value), {
      roleNames: mappedRoleNames
    }))).pipe(finalize(() => this.modalBusy = false)).subscribe(() => {
      this.isModalVisible = false;
      this.toasterService.success("AbpUi::SavedSuccessfully");
      this.list.get();
    });
  }
  delete(id, userName) {
    this.confirmationService.warn("AbpIdentity::UserDeletionConfirmationMessage", "AbpIdentity::AreYouSure", {
      messageLocalizationParams: [userName]
    }).subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.service.delete(id).subscribe(() => {
          this.toasterService.success("AbpUi::DeletedSuccessfully");
          this.list.get();
        });
      }
    });
  }
  sort(data) {
    const {
      prop,
      dir
    } = data.sorts[0];
    this.list.sortKey = prop;
    this.list.sortOrder = dir;
  }
  hookToQuery() {
    this.list.hookToQuery((query) => this.service.getList(query)).subscribe((res) => this.data = res);
  }
  openPermissionsModal(providerKey, entityDisplayName) {
    this.providerKey = providerKey;
    this.entityDisplayName = entityDisplayName;
    setTimeout(() => {
      this.visiblePermissions = true;
    }, 0);
  }
};
_UsersComponent.ɵfac = function UsersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UsersComponent)();
};
_UsersComponent.ɵcmp = ɵɵdefineComponent({
  type: _UsersComponent,
  selectors: [["abp-users"]],
  viewQuery: function UsersComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c7, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.modalContent = _t.first);
    }
  },
  features: [ɵɵProvidersFeature([ListService, {
    provide: EXTENSIONS_IDENTIFIER,
    useValue: "Identity.UsersComponent"
    /* eIdentityComponents.Users */
  }])],
  decls: 17,
  vars: 29,
  consts: [["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], ["nav", "ngbNav"], ["abpPermissionManagement", "abpPermissionManagement"], [3, "title", "toolbar"], ["id", "identity-roles-wrapper", 1, "card"], [1, "card-body"], ["id", "data-tables-table-filter", 1, "data-tables-filter", "mb-3"], [1, "input-group"], ["type", "search", 1, "form-control", 3, "ngModelChange", "placeholder", "ngModel"], [3, "data", "recordsTotal", "list"], [3, "visibleChange", "visible", "busy"], [3, "entityDisplayName", "abpInit", 4, "abpReplaceableTemplate"], [3, "formGroup"], [1, "text-center"], [3, "ngSubmit", "formGroup"], ["ngbNav", "", 1, "nav-tabs"], ["ngbNavItem", ""], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", "fade-in-top", 3, "ngbNavOutlet"], [3, "selectedRecord"], [1, "form-check", "mb-2"], [3, "checkboxId", "formControl", "label", 4, "abpReplaceableTemplate"], [3, "checkboxId", "formControl", "label"], ["aria-hidden", "true", 1, "fa", "fa-pulse", "fa-spinner"], ["type", "button", "abpClose", "", 1, "btn", "btn-outline-primary"], ["iconClass", "fa fa-check", 3, "click", "disabled"], [3, "abpInit", "entityDisplayName"]],
  template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "abp-page", 5);
      ɵɵpipe(1, "abpLocalization");
      ɵɵelementStart(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "div", 9)(6, "input", 10);
      ɵɵpipe(7, "abpLocalization");
      ɵɵtwoWayListener("ngModelChange", function UsersComponent_Template_input_ngModelChange_6_listener($event) {
        ɵɵrestoreView(_r1);
        ɵɵtwoWayBindingSet(ctx.list.filter, $event) || (ctx.list.filter = $event);
        return ɵɵresetView($event);
      });
      ɵɵelementEnd()()();
      ɵɵelement(8, "abp-extensible-table", 11);
      ɵɵelementEnd()();
      ɵɵelementStart(9, "abp-modal", 12);
      ɵɵtwoWayListener("visibleChange", function UsersComponent_Template_abp_modal_visibleChange_9_listener($event) {
        ɵɵrestoreView(_r1);
        ɵɵtwoWayBindingSet(ctx.isModalVisible, $event) || (ctx.isModalVisible = $event);
        return ɵɵresetView($event);
      });
      ɵɵtemplate(10, UsersComponent_ng_template_10_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor)(12, UsersComponent_ng_template_12_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(14, UsersComponent_ng_template_14_Template, 6, 7, "ng-template", null, 2, ɵɵtemplateRefExtractor);
      ɵɵelementEnd();
      ɵɵtemplate(16, UsersComponent_abp_permission_management_16_Template, 2, 1, "abp-permission-management", 13);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("title", ɵɵpipeBind1(1, 10, "AbpIdentity::Users"))("toolbar", ctx.data.items);
      ɵɵadvance(6);
      ɵɵproperty("placeholder", ɵɵpipeBind1(7, 12, "AbpUi::PagerSearch"));
      ɵɵtwoWayProperty("ngModel", ctx.list.filter);
      ɵɵadvance(2);
      ɵɵproperty("data", ctx.data.items)("recordsTotal", ctx.data.totalCount)("list", ctx.list);
      ɵɵadvance();
      ɵɵtwoWayProperty("visible", ctx.isModalVisible);
      ɵɵproperty("busy", ctx.modalBusy);
      ɵɵadvance(7);
      ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction3(25, _c6, ɵɵpureFunction3(19, _c9, ɵɵpureFunction0(14, _c8), ɵɵpureFunction1(15, _c12, ctx.providerKey), ɵɵpureFunction1(17, _c22, ctx.visiblePermissions)), ɵɵpureFunction1(23, _c5, ctx.onVisiblePermissionChange), ctx.permissionManagementKey));
    }
  },
  dependencies: [ReactiveFormsModule, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormsModule, NgModel, PermissionManagementComponent, PageComponent, NgbNavModule, NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavOutlet, NgbDropdownModule, NgxValidateCoreModule, ValidationGroupDirective, ValidationDirective, LocalizationPipe, ExtensibleTableComponent, ModalComponent, ExtensibleFormComponent, FormCheckboxComponent, ButtonComponent, ReplaceableTemplateDirective, ModalCloseDirective, InitDirective],
  encapsulation: 2
});
var UsersComponent = _UsersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{
      selector: "abp-users",
      providers: [ListService, {
        provide: EXTENSIONS_IDENTIFIER,
        useValue: "Identity.UsersComponent"
        /* eIdentityComponents.Users */
      }],
      imports: [ReactiveFormsModule, FormsModule, PermissionManagementComponent, PageComponent, NgbNavModule, NgbDropdownModule, NgxValidateCoreModule, LocalizationPipe, ExtensibleTableComponent, ModalComponent, ExtensibleFormComponent, FormCheckboxComponent, ButtonComponent, ReplaceableTemplateDirective, ModalCloseDirective, InitDirective],
      template: `<abp-page [title]="'AbpIdentity::Users' | abpLocalization" [toolbar]="data.items">\r
  <div id="identity-roles-wrapper" class="card">\r
    <div class="card-body">\r
      <div id="data-tables-table-filter" class="data-tables-filter mb-3">\r
        <div class="input-group">\r
          <input\r
            type="search"\r
            class="form-control"\r
            [placeholder]="'AbpUi::PagerSearch' | abpLocalization"\r
            [(ngModel)]="list.filter"\r
          />\r
        </div>\r
      </div>\r
\r
      <abp-extensible-table\r
        [data]="data.items"\r
        [recordsTotal]="data.totalCount"\r
        [list]="list"\r
      ></abp-extensible-table>\r
    </div>\r
  </div>\r
\r
  <abp-modal [(visible)]="isModalVisible" [busy]="modalBusy">\r
    <ng-template #abpHeader>\r
      <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewUser') | abpLocalization }}</h3>\r
    </ng-template>\r
\r
    <ng-template #abpBody>\r
      @if (form) {\r
        <form [formGroup]="form" (ngSubmit)="save()">\r
          <ul ngbNav #nav="ngbNav" class="nav-tabs">\r
            <li ngbNavItem>\r
              <a ngbNavLink>{{ 'AbpIdentity::UserInformations' | abpLocalization }}</a>\r
              <ng-template ngbNavContent>\r
                <abp-extensible-form [selectedRecord]="selected"></abp-extensible-form>\r
              </ng-template>\r
            </li>\r
\r
            <li ngbNavItem>\r
              <a ngbNavLink>{{ 'AbpIdentity::Roles' | abpLocalization }}</a>\r
              <ng-template ngbNavContent>\r
                @for (roleGroup of roleGroups; track $index; let i = $index) {\r
                  <div class="form-check mb-2">\r
                    <abp-checkbox\r
                      *abpReplaceableTemplate="{\r
                        inputs: {\r
                          checkboxId: 'roles-' + i,\r
                          label: roles[i].name,\r
                          formControl: roleGroup.controls[roles[i].name]\r
                        },\r
                        componentKey: inputKey\r
                      }"\r
                      [checkboxId]="'roles-' + i"\r
                      [formControl]="roleGroup.controls[roles[i].name]"\r
                      [label]="roles[i].name"\r
                    >\r
                    </abp-checkbox>\r
                  </div>\r
                }\r
              </ng-template>\r
            </li>\r
          </ul>\r
          <div class="mt-2 fade-in-top" [ngbNavOutlet]="nav"></div>\r
        </form>\r
      } @else {\r
        <div class="text-center"><i class="fa fa-pulse fa-spinner" aria-hidden="true"></i></div>\r
      }\r
    </ng-template>\r
\r
    <ng-template #abpFooter>\r
      <button type="button" class="btn btn-outline-primary" abpClose>\r
        {{ 'AbpIdentity::Cancel' | abpLocalization }}\r
      </button>\r
      <abp-button iconClass="fa fa-check" [disabled]="form?.invalid" (click)="save()">{{\r
        'AbpIdentity::Save' | abpLocalization\r
      }}</abp-button>\r
    </ng-template>\r
  </abp-modal>\r
\r
  <abp-permission-management\r
    #abpPermissionManagement="abpPermissionManagement"\r
    *abpReplaceableTemplate="\r
      {\r
        inputs: {\r
          providerName: { value: 'U' },\r
          providerKey: { value: providerKey },\r
          visible: { value: visiblePermissions, twoWay: true }\r
        },\r
        outputs: { visibleChange: onVisiblePermissionChange },\r
        componentKey: permissionManagementKey\r
      };\r
      let init = initTemplate\r
    "\r
    [entityDisplayName]="entityDisplayName"\r
    (abpInit)="init(abpPermissionManagement)"\r
  >\r
  </abp-permission-management>\r
</abp-page>\r
`
    }]
  }], null, {
    modalContent: [{
      type: ViewChild,
      args: ["modalContent", {
        static: false
      }]
    }]
  });
})();
var DEFAULT_ROLES_ENTITY_ACTIONS = EntityAction.createMany([{
  text: "AbpIdentity::Edit",
  action: (data) => {
    const component = data.getInjected(RolesComponent);
    component.edit(data.record.id || "");
  },
  permission: "AbpIdentity.Roles.Update"
}, {
  text: "AbpIdentity::Permissions",
  action: (data) => {
    const component = data.getInjected(RolesComponent);
    component.openPermissionsModal(data.record.name || "");
  },
  permission: "AbpIdentity.Roles.ManagePermissions"
}, {
  text: "AbpIdentity::Delete",
  action: (data) => {
    const component = data.getInjected(RolesComponent);
    component.delete(data.record.id || "", data.record.name || "");
  },
  permission: "AbpIdentity.Roles.Delete",
  visible: (data) => !data?.record.isStatic
}]);
var DEFAULT_ROLES_ENTITY_PROPS = EntityProp.createMany([{
  type: "string",
  name: "name",
  displayName: "AbpIdentity::RoleName",
  sortable: true,
  valueResolver: (data) => {
    const l10n = data.getInjected(LocalizationService);
    const t = l10n.instant.bind(l10n);
    const {
      isDefault,
      isPublic,
      name
    } = data.record;
    return of(escapeHtmlChars(name) + (isDefault ? `<span class="badge rounded-pill bg-success ms-1">${t("AbpIdentity::DisplayName:IsDefault")}</span>` : "") + (isPublic ? `<span class="badge rounded-pill bg-info ms-1">${t("AbpIdentity::DisplayName:IsPublic")}</span>` : ""));
  }
}]);
var DEFAULT_ROLES_CREATE_FORM_PROPS = FormProp.createMany([{
  type: "string",
  name: "name",
  displayName: "AbpIdentity::RoleName",
  id: "role-name",
  disabled: (data) => data.record && data.record.isStatic,
  validators: () => [Validators.required]
}, {
  type: "boolean",
  name: "isDefault",
  displayName: "AbpIdentity::DisplayName:IsDefault",
  id: "role-is-default",
  defaultValue: false
}, {
  type: "boolean",
  name: "isPublic",
  displayName: "AbpIdentity::DisplayName:IsPublic",
  id: "role-is-public",
  defaultValue: false
}]);
var DEFAULT_ROLES_EDIT_FORM_PROPS = DEFAULT_ROLES_CREATE_FORM_PROPS;
var DEFAULT_ROLES_TOOLBAR_ACTIONS = ToolbarAction.createMany([{
  text: "AbpIdentity::NewRole",
  action: (data) => {
    const component = data.getInjected(RolesComponent);
    component.add();
  },
  permission: "AbpIdentity.Roles.Create",
  icon: "fa fa-plus"
}]);
var DEFAULT_USERS_ENTITY_ACTIONS = EntityAction.createMany([{
  text: "AbpIdentity::Edit",
  action: (data) => {
    const component = data.getInjected(UsersComponent);
    component.edit(data.record.id || "");
  },
  permission: "AbpIdentity.Users.Update"
}, {
  text: "AbpIdentity::Permissions",
  action: (data) => {
    const component = data.getInjected(UsersComponent);
    component.openPermissionsModal(data.record.id || "", data.record.userName);
  },
  permission: "AbpIdentity.Users.ManagePermissions"
}, {
  text: "AbpIdentity::Delete",
  action: (data) => {
    const component = data.getInjected(UsersComponent);
    component.delete(data.record.id || "", data.record.name || data.record.userName || "");
  },
  visible: (data) => {
    const userName = data?.record.userName;
    const configStateService = data?.getInjected(ConfigStateService);
    const currentUser = configStateService?.getOne("currentUser");
    return userName !== currentUser.userName;
  },
  permission: "AbpIdentity.Users.Delete"
}]);
var DEFAULT_USERS_ENTITY_PROPS = EntityProp.createMany([{
  type: "string",
  name: "userName",
  displayName: "AbpIdentity::UserName",
  sortable: true,
  columnWidth: 250,
  valueResolver: (data) => {
    const l10n = data.getInjected(LocalizationService);
    const t = l10n.instant.bind(l10n);
    const inactiveIcon = `<i title="${t("AbpIdentity::ThisUserIsNotActiveMessage")}" class="fas fa-ban text-danger me-1" aria-hidden="true"></i>`;
    return of(`
        ${!data.record.isActive ? inactiveIcon : ""}
        <span class="${!data.record.isActive ? "text-muted" : ""}">${escapeHtmlChars(data.record.userName)}</span>`);
  }
}, {
  type: "string",
  name: "email",
  displayName: "AbpIdentity::EmailAddress",
  sortable: true,
  columnWidth: 250
}, {
  type: "string",
  name: "phoneNumber",
  displayName: "AbpIdentity::PhoneNumber",
  sortable: true,
  columnWidth: 250
}]);
var DEFAULT_USERS_CREATE_FORM_PROPS = FormProp.createMany([{
  type: "string",
  name: "userName",
  displayName: "AbpIdentity::UserName",
  id: "user-name",
  validators: () => [Validators.required, Validators.maxLength(256)]
}, {
  type: "passwordinputgroup",
  name: "password",
  displayName: "AbpIdentity::Password",
  id: "password",
  autocomplete: "new-password",
  validators: (data) => [Validators.required, ...getPasswordValidators({
    get: data.getInjected
  })]
}, {
  type: "string",
  name: "name",
  displayName: "AbpIdentity::DisplayName:Name",
  id: "name",
  validators: () => [Validators.maxLength(64)]
}, {
  type: "string",
  name: "surname",
  displayName: "AbpIdentity::DisplayName:Surname",
  id: "surname",
  validators: () => [Validators.maxLength(64)]
}, {
  type: "email",
  name: "email",
  displayName: "AbpIdentity::EmailAddress",
  id: "email",
  validators: () => [Validators.required, Validators.maxLength(256), Validators.email]
}, {
  type: "string",
  name: "phoneNumber",
  displayName: "AbpIdentity::PhoneNumber",
  id: "phone-number",
  validators: () => [Validators.maxLength(16)]
}, {
  type: "boolean",
  name: "isActive",
  displayName: "AbpIdentity::DisplayName:IsActive",
  id: "active-checkbox",
  defaultValue: true
}, {
  type: "boolean",
  name: "lockoutEnabled",
  displayName: "AbpIdentity::DisplayName:LockoutEnabled",
  id: "lockout-checkbox",
  defaultValue: true
}]);
var DEFAULT_USERS_EDIT_FORM_PROPS = DEFAULT_USERS_CREATE_FORM_PROPS.map((prop) => {
  if (prop.name === "password") {
    return __spreadProps(__spreadValues({}, prop), {
      validators: (data) => [...getPasswordValidators({
        get: data.getInjected
      })]
    });
  }
  if (prop.name === "isActive") {
    return __spreadProps(__spreadValues({}, prop), {
      visible: (data) => {
        const configState = data.getInjected(ConfigStateService);
        const currentUserId = configState.getDeep("currentUser.id");
        return currentUserId !== data.record.id;
      }
    });
  }
  return prop;
});
var DEFAULT_USERS_TOOLBAR_ACTIONS = ToolbarAction.createMany([{
  text: "AbpIdentity::NewUser",
  action: (data) => {
    const component = data.getInjected(UsersComponent);
    component.add();
  },
  permission: "AbpIdentity.Users.Create",
  icon: "fa fa-plus"
}]);
var DEFAULT_IDENTITY_ENTITY_ACTIONS = {
  [
    "Identity.RolesComponent"
    /* eIdentityComponents.Roles */
  ]: DEFAULT_ROLES_ENTITY_ACTIONS,
  [
    "Identity.UsersComponent"
    /* eIdentityComponents.Users */
  ]: DEFAULT_USERS_ENTITY_ACTIONS
};
var DEFAULT_IDENTITY_TOOLBAR_ACTIONS = {
  [
    "Identity.RolesComponent"
    /* eIdentityComponents.Roles */
  ]: DEFAULT_ROLES_TOOLBAR_ACTIONS,
  [
    "Identity.UsersComponent"
    /* eIdentityComponents.Users */
  ]: DEFAULT_USERS_TOOLBAR_ACTIONS
};
var DEFAULT_IDENTITY_ENTITY_PROPS = {
  [
    "Identity.RolesComponent"
    /* eIdentityComponents.Roles */
  ]: DEFAULT_ROLES_ENTITY_PROPS,
  [
    "Identity.UsersComponent"
    /* eIdentityComponents.Users */
  ]: DEFAULT_USERS_ENTITY_PROPS
};
var DEFAULT_IDENTITY_CREATE_FORM_PROPS = {
  [
    "Identity.RolesComponent"
    /* eIdentityComponents.Roles */
  ]: DEFAULT_ROLES_CREATE_FORM_PROPS,
  [
    "Identity.UsersComponent"
    /* eIdentityComponents.Users */
  ]: DEFAULT_USERS_CREATE_FORM_PROPS
};
var DEFAULT_IDENTITY_EDIT_FORM_PROPS = {
  [
    "Identity.RolesComponent"
    /* eIdentityComponents.Roles */
  ]: DEFAULT_ROLES_EDIT_FORM_PROPS,
  [
    "Identity.UsersComponent"
    /* eIdentityComponents.Users */
  ]: DEFAULT_USERS_EDIT_FORM_PROPS
};
var IDENTITY_ENTITY_ACTION_CONTRIBUTORS = new InjectionToken("IDENTITY_ENTITY_ACTION_CONTRIBUTORS");
var IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS = new InjectionToken("IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS");
var IDENTITY_ENTITY_PROP_CONTRIBUTORS = new InjectionToken("IDENTITY_ENTITY_PROP_CONTRIBUTORS");
var IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS = new InjectionToken("IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS");
var IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS = new InjectionToken("IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS");
var _IdentityExtensionsGuard = class _IdentityExtensionsGuard {
  constructor() {
    this.injector = inject(Injector);
    this.extensions = inject(ExtensionsService);
  }
  canActivate() {
    const config = {
      optional: true
    };
    const actionContributors = inject(IDENTITY_ENTITY_ACTION_CONTRIBUTORS, config) || {};
    const toolbarContributors = inject(IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS, config) || {};
    const propContributors = inject(IDENTITY_ENTITY_PROP_CONTRIBUTORS, config) || {};
    const createFormContributors = inject(IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS, config) || {};
    const editFormContributors = inject(IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS, config) || {};
    return getObjectExtensionEntitiesFromStore(this.injector, "Identity").pipe(map((entities) => ({
      [
        "Identity.RolesComponent"
        /* eIdentityComponents.Roles */
      ]: entities.Role,
      [
        "Identity.UsersComponent"
        /* eIdentityComponents.Users */
      ]: entities.User
    })), mapEntitiesToContributors(this.injector, "AbpIdentity"), tap((objectExtensionContributors) => {
      mergeWithDefaultActions(this.extensions.entityActions, DEFAULT_IDENTITY_ENTITY_ACTIONS, actionContributors);
      mergeWithDefaultActions(this.extensions.toolbarActions, DEFAULT_IDENTITY_TOOLBAR_ACTIONS, toolbarContributors);
      mergeWithDefaultProps(this.extensions.entityProps, DEFAULT_IDENTITY_ENTITY_PROPS, objectExtensionContributors.prop, propContributors);
      mergeWithDefaultProps(this.extensions.createFormProps, DEFAULT_IDENTITY_CREATE_FORM_PROPS, objectExtensionContributors.createForm, createFormContributors);
      mergeWithDefaultProps(this.extensions.editFormProps, DEFAULT_IDENTITY_EDIT_FORM_PROPS, objectExtensionContributors.editForm, editFormContributors);
    }), map(() => true));
  }
};
_IdentityExtensionsGuard.ɵfac = function IdentityExtensionsGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IdentityExtensionsGuard)();
};
_IdentityExtensionsGuard.ɵprov = ɵɵdefineInjectable({
  token: _IdentityExtensionsGuard,
  factory: _IdentityExtensionsGuard.ɵfac
});
var IdentityExtensionsGuard = _IdentityExtensionsGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IdentityExtensionsGuard, [{
    type: Injectable
  }], null, null);
})();
var identityExtensionsResolver = () => {
  const extensions = inject(ExtensionsService);
  const config = {
    optional: true
  };
  const actionContributors = inject(IDENTITY_ENTITY_ACTION_CONTRIBUTORS, config) || {};
  const toolbarContributors = inject(IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS, config) || {};
  const propContributors = inject(IDENTITY_ENTITY_PROP_CONTRIBUTORS, config) || {};
  const createFormContributors = inject(IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS, config) || {};
  const editFormContributors = inject(IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS, config) || {};
  const injector = inject(Injector);
  return getObjectExtensionEntitiesFromStore(injector, "Identity").pipe(map((entities) => ({
    [
      "Identity.RolesComponent"
      /* eIdentityComponents.Roles */
    ]: entities.Role,
    [
      "Identity.UsersComponent"
      /* eIdentityComponents.Users */
    ]: entities.User
  })), mapEntitiesToContributors(injector, "AbpIdentity"), tap((objectExtensionContributors) => {
    mergeWithDefaultActions(extensions.entityActions, DEFAULT_IDENTITY_ENTITY_ACTIONS, actionContributors);
    mergeWithDefaultActions(extensions.toolbarActions, DEFAULT_IDENTITY_TOOLBAR_ACTIONS, toolbarContributors);
    mergeWithDefaultProps(extensions.entityProps, DEFAULT_IDENTITY_ENTITY_PROPS, objectExtensionContributors.prop, propContributors);
    mergeWithDefaultProps(extensions.createFormProps, DEFAULT_IDENTITY_CREATE_FORM_PROPS, objectExtensionContributors.createForm, createFormContributors);
    mergeWithDefaultProps(extensions.editFormProps, DEFAULT_IDENTITY_EDIT_FORM_PROPS, objectExtensionContributors.editForm, editFormContributors);
  }));
};
var routes = [{
  path: "",
  redirectTo: "roles",
  pathMatch: "full"
}, {
  path: "",
  component: RouterOutletComponent,
  canActivate: [authGuard, permissionGuard],
  resolve: [identityExtensionsResolver],
  children: [{
    path: "roles",
    component: ReplaceableRouteContainerComponent,
    data: {
      requiredPolicy: "AbpIdentity.Roles",
      replaceableComponent: {
        key: "Identity.RolesComponent",
        defaultComponent: RolesComponent
      }
    },
    title: "AbpIdentity::Roles"
  }, {
    path: "users",
    component: ReplaceableRouteContainerComponent,
    data: {
      requiredPolicy: "AbpIdentity.Users",
      replaceableComponent: {
        key: "Identity.UsersComponent",
        defaultComponent: UsersComponent
      }
    },
    title: "AbpIdentity::Users"
  }]
}];
var _IdentityRoutingModule = class _IdentityRoutingModule {
};
_IdentityRoutingModule.ɵfac = function IdentityRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IdentityRoutingModule)();
};
_IdentityRoutingModule.ɵmod = ɵɵdefineNgModule({
  type: _IdentityRoutingModule,
  imports: [RouterModule],
  exports: [RouterModule]
});
_IdentityRoutingModule.ɵinj = ɵɵdefineInjector({
  imports: [RouterModule.forChild(routes), RouterModule]
});
var IdentityRoutingModule = _IdentityRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IdentityRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();
var _IdentityModule = class _IdentityModule {
  static forChild(options = {}) {
    return {
      ngModule: _IdentityModule,
      providers: [{
        provide: IDENTITY_ENTITY_ACTION_CONTRIBUTORS,
        useValue: options.entityActionContributors
      }, {
        provide: IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS,
        useValue: options.toolbarActionContributors
      }, {
        provide: IDENTITY_ENTITY_PROP_CONTRIBUTORS,
        useValue: options.entityPropContributors
      }, {
        provide: IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS,
        useValue: options.createFormPropContributors
      }, {
        provide: IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS,
        useValue: options.editFormPropContributors
      }, IdentityExtensionsGuard]
    };
  }
  /**
   * @deprecated `IdentityModule.forLazy()` is deprecated. You can use `createRoutes` **function** instead.
   */
  static forLazy(options = {}) {
    return new LazyModuleFactory(_IdentityModule.forChild(options));
  }
};
_IdentityModule.ɵfac = function IdentityModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IdentityModule)();
};
_IdentityModule.ɵmod = ɵɵdefineNgModule({
  type: _IdentityModule,
  imports: [IdentityRoutingModule, RolesComponent, UsersComponent]
});
_IdentityModule.ɵinj = ɵɵdefineInjector({
  imports: [IdentityRoutingModule, RolesComponent, UsersComponent]
});
var IdentityModule = _IdentityModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IdentityModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      exports: [],
      imports: [IdentityRoutingModule, RolesComponent, UsersComponent]
    }]
  }], null, null);
})();
function provideIdentity(options = {}) {
  return [{
    provide: IDENTITY_ENTITY_ACTION_CONTRIBUTORS,
    useValue: options.entityActionContributors
  }, {
    provide: IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS,
    useValue: options.toolbarActionContributors
  }, {
    provide: IDENTITY_ENTITY_PROP_CONTRIBUTORS,
    useValue: options.entityPropContributors
  }, {
    provide: IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS,
    useValue: options.createFormPropContributors
  }, {
    provide: IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS,
    useValue: options.editFormPropContributors
  }];
}
var createRoutes = (options = {}) => [{
  path: "",
  component: RouterOutletComponent,
  canActivate: [authGuard, permissionGuard],
  resolve: [identityExtensionsResolver],
  providers: provideIdentity(options),
  children: [{
    path: "",
    redirectTo: "roles",
    pathMatch: "full"
  }, {
    path: "roles",
    component: ReplaceableRouteContainerComponent,
    data: {
      requiredPolicy: "AbpIdentity.Roles",
      replaceableComponent: {
        key: "Identity.RolesComponent",
        defaultComponent: RolesComponent
      }
    },
    title: "AbpIdentity::Roles"
  }, {
    path: "users",
    component: ReplaceableRouteContainerComponent,
    data: {
      requiredPolicy: "AbpIdentity.Users",
      replaceableComponent: {
        key: "Identity.UsersComponent",
        defaultComponent: UsersComponent
      }
    },
    title: "AbpIdentity::Users"
  }]
}];
export {
  DEFAULT_IDENTITY_CREATE_FORM_PROPS,
  DEFAULT_IDENTITY_EDIT_FORM_PROPS,
  DEFAULT_IDENTITY_ENTITY_ACTIONS,
  DEFAULT_IDENTITY_ENTITY_PROPS,
  DEFAULT_IDENTITY_TOOLBAR_ACTIONS,
  IDENTITY_CREATE_FORM_PROP_CONTRIBUTORS,
  IDENTITY_EDIT_FORM_PROP_CONTRIBUTORS,
  IDENTITY_ENTITY_ACTION_CONTRIBUTORS,
  IDENTITY_ENTITY_PROP_CONTRIBUTORS,
  IDENTITY_TOOLBAR_ACTION_CONTRIBUTORS,
  IdentityExtensionsGuard,
  IdentityModule,
  RolesComponent,
  UsersComponent,
  createRoutes,
  identityExtensionsResolver,
  provideIdentity
};
//# sourceMappingURL=@abp_ng__identity.js.map
