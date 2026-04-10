import {
  FeatureManagementComponent
} from "./chunk-YANSALK6.js";
import "./chunk-T4P7JVT4.js";
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
  ModalCloseDirective,
  ModalComponent,
  ToasterService,
  getPasswordValidators
} from "./chunk-ECZD44PI.js";
import "./chunk-VKRTUYJS.js";
import "./chunk-G7KX2FVW.js";
import {
  LazyModuleFactory,
  ListService,
  LocalizationPipe,
  NgxValidateCoreModule,
  ReplaceableRouteContainerComponent,
  ReplaceableTemplateDirective,
  RestService,
  RouterOutletComponent,
  ValidationGroupDirective,
  authGuard,
  permissionGuard
} from "./chunk-DOR275RM.js";
import {
  RouterModule
} from "./chunk-5IKKBTZJ.js";
import {
  DefaultValueAccessor,
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
import "./chunk-6NN5GPUG.js";
import {
  Component,
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  finalize,
  inject,
  map,
  setClassMetadata,
  tap,
  ɵɵProvidersFeature,
  ɵɵadvance,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
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

// node_modules/@abp/ng.tenant-management/fesm2022/abp-ng.tenant-management-proxy.mjs
var _TenantService = class _TenantService {
  constructor(restService) {
    this.restService = restService;
    this.apiName = "AbpTenantManagement";
    this.create = (input) => this.restService.request({
      method: "POST",
      url: "/api/multi-tenancy/tenants",
      body: input
    }, {
      apiName: this.apiName
    });
    this.delete = (id) => this.restService.request({
      method: "DELETE",
      url: `/api/multi-tenancy/tenants/${id}`
    }, {
      apiName: this.apiName
    });
    this.deleteDefaultConnectionString = (id) => this.restService.request({
      method: "DELETE",
      url: `/api/multi-tenancy/tenants/${id}/default-connection-string`
    }, {
      apiName: this.apiName
    });
    this.get = (id) => this.restService.request({
      method: "GET",
      url: `/api/multi-tenancy/tenants/${id}`
    }, {
      apiName: this.apiName
    });
    this.getDefaultConnectionString = (id) => this.restService.request({
      method: "GET",
      responseType: "text",
      url: `/api/multi-tenancy/tenants/${id}/default-connection-string`
    }, {
      apiName: this.apiName
    });
    this.getList = (input) => this.restService.request({
      method: "GET",
      url: "/api/multi-tenancy/tenants",
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
      url: `/api/multi-tenancy/tenants/${id}`,
      body: input
    }, {
      apiName: this.apiName
    });
    this.updateDefaultConnectionString = (id, defaultConnectionString) => this.restService.request({
      method: "PUT",
      url: `/api/multi-tenancy/tenants/${id}/default-connection-string`,
      params: {
        defaultConnectionString
      }
    }, {
      apiName: this.apiName
    });
  }
};
_TenantService.ɵfac = function TenantService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TenantService)(ɵɵinject(RestService));
};
_TenantService.ɵprov = ɵɵdefineInjectable({
  token: _TenantService,
  factory: _TenantService.ɵfac,
  providedIn: "root"
});
var TenantService = _TenantService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TenantService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RestService
  }], null);
})();

// node_modules/@abp/ng.tenant-management/fesm2022/abp-ng.tenant-management.mjs
var _c0 = () => [];
var _c1 = () => ({
  value: "T"
});
var _c2 = (a0) => ({
  value: a0
});
var _c3 = (a0) => ({
  value: a0,
  twoWay: true
});
var _c4 = (a0, a1, a2) => ({
  providerName: a0,
  providerKey: a1,
  visible: a2
});
var _c5 = (a0) => ({
  visibleChange: a0
});
var _c6 = (a0, a1, a2) => ({
  inputs: a0,
  outputs: a1,
  componentKey: a2
});
function TenantsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h3");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, (ctx_r1.selected == null ? null : ctx_r1.selected.id) ? "AbpTenantManagement::Edit" : "AbpTenantManagement::NewTenant"), " ");
  }
}
function TenantsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 12);
    ɵɵlistener("ngSubmit", function TenantsComponent_ng_template_12_Template_form_ngSubmit_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.save());
    });
    ɵɵelement(1, "abp-extensible-form", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.tenantForm)("validateOnSubmit", true);
    ɵɵadvance();
    ɵɵproperty("selectedRecord", ctx_r1.selected);
  }
}
function TenantsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 14);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵelementStart(3, "abp-button", 15);
    ɵɵlistener("click", function TenantsComponent_ng_template_14_Template_abp_button_click_3_listener() {
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
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, "AbpTenantManagement::Cancel"), " ");
    ɵɵadvance(2);
    ɵɵproperty("disabled", ctx_r1.tenantForm == null ? null : ctx_r1.tenantForm.invalid);
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 5, "AbpTenantManagement::Save"));
  }
}
function TenantsComponent_abp_feature_management_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "abp-feature-management", 16);
    ɵɵtwoWayListener("visibleChange", function TenantsComponent_abp_feature_management_16_Template_abp_feature_management_visibleChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.visibleFeatures, $event) || (ctx_r1.visibleFeatures = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵtwoWayProperty("visible", ctx_r1.visibleFeatures);
    ɵɵproperty("providerKey", ctx_r1.providerKey);
  }
}
var _TenantsComponent = class _TenantsComponent {
  constructor() {
    this.list = inject(ListService);
    this.confirmationService = inject(ConfirmationService);
    this.service = inject(TenantService);
    this.toasterService = inject(ToasterService);
    this.fb = inject(UntypedFormBuilder);
    this.injector = inject(Injector);
    this.data = {
      items: [],
      totalCount: 0
    };
    this.visibleFeatures = false;
    this.modalBusy = false;
    this.featureManagementKey = "FeatureManagement.FeatureManagementComponent";
    this.onVisibleFeaturesChange = (value) => {
      this.visibleFeatures = value;
    };
  }
  get hasSelectedTenant() {
    return Boolean(this.selected.id);
  }
  ngOnInit() {
    this.hookToQuery();
  }
  createTenantForm() {
    const data = new FormPropData(this.injector, this.selected);
    this.tenantForm = generateFormFromProps(data);
  }
  addTenant() {
    this.selected = {};
    this.createTenantForm();
    this.isModalVisible = true;
  }
  editTenant(id) {
    this.service.get(id).subscribe((res) => {
      this.selected = res;
      this.createTenantForm();
      this.isModalVisible = true;
    });
  }
  save() {
    if (!this.tenantForm.valid || this.modalBusy) return;
    this.modalBusy = true;
    const {
      id
    } = this.selected;
    (id ? this.service.update(id, __spreadValues(__spreadValues({}, this.selected), this.tenantForm.value)) : this.service.create(this.tenantForm.value)).pipe(finalize(() => this.modalBusy = false)).subscribe(() => {
      this.isModalVisible = false;
      this.toasterService.success("AbpUi::SavedSuccessfully");
      this.list.get();
    });
  }
  delete(id, name) {
    this.confirmationService.warn("AbpTenantManagement::TenantDeletionConfirmationMessage", "AbpTenantManagement::AreYouSure", {
      messageLocalizationParams: [name]
    }).subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.toasterService.success("AbpUi::DeletedSuccessfully");
        this.service.delete(id).subscribe(() => this.list.get());
      }
    });
  }
  hookToQuery() {
    this.list.hookToQuery((query) => this.service.getList(query)).subscribe((res) => {
      this.data = res;
    });
  }
  onSharedDatabaseChange(value) {
    if (!value) {
      setTimeout(() => {
        const defaultConnectionString = document.getElementById("defaultConnectionString");
        if (defaultConnectionString) {
          defaultConnectionString.focus();
        }
      }, 0);
    }
  }
  openFeaturesModal(providerKey) {
    this.providerKey = providerKey;
    setTimeout(() => {
      this.visibleFeatures = true;
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
_TenantsComponent.ɵfac = function TenantsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TenantsComponent)();
};
_TenantsComponent.ɵcmp = ɵɵdefineComponent({
  type: _TenantsComponent,
  selectors: [["abp-tenants"]],
  features: [ɵɵProvidersFeature([ListService, {
    provide: EXTENSIONS_IDENTIFIER,
    useValue: "TenantManagement.TenantsComponent"
    /* eTenantManagementComponents.Tenants */
  }])],
  decls: 17,
  vars: 30,
  consts: [["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], [3, "title", "toolbar"], ["id", "wrapper", 1, "card"], [1, "card-body"], ["id", "data-tables-table-filter", 1, "data-tables-filter", "mb-3"], [1, "input-group"], ["type", "search", 1, "form-control", 3, "ngModelChange", "placeholder", "ngModel"], [3, "data", "recordsTotal", "list"], [3, "visibleChange", "visible", "busy"], ["providerName", "T", 3, "visible", "providerKey", "visibleChange", 4, "abpReplaceableTemplate"], [3, "ngSubmit", "formGroup", "validateOnSubmit"], [3, "selectedRecord"], ["abpClose", "", "type", "button", 1, "btn", "btn-outline-primary"], ["iconClass", "fa fa-check", 3, "click", "disabled"], ["providerName", "T", 3, "visibleChange", "visible", "providerKey"]],
  template: function TenantsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "abp-page", 3);
      ɵɵpipe(1, "abpLocalization");
      ɵɵelementStart(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "input", 8);
      ɵɵpipe(7, "abpLocalization");
      ɵɵtwoWayListener("ngModelChange", function TenantsComponent_Template_input_ngModelChange_6_listener($event) {
        ɵɵrestoreView(_r1);
        ɵɵtwoWayBindingSet(ctx.list.filter, $event) || (ctx.list.filter = $event);
        return ɵɵresetView($event);
      });
      ɵɵelementEnd()()();
      ɵɵelement(8, "abp-extensible-table", 9);
      ɵɵelementEnd()();
      ɵɵelementStart(9, "abp-modal", 10);
      ɵɵtwoWayListener("visibleChange", function TenantsComponent_Template_abp_modal_visibleChange_9_listener($event) {
        ɵɵrestoreView(_r1);
        ɵɵtwoWayBindingSet(ctx.isModalVisible, $event) || (ctx.isModalVisible = $event);
        return ɵɵresetView($event);
      });
      ɵɵtemplate(10, TenantsComponent_ng_template_10_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor)(12, TenantsComponent_ng_template_12_Template, 2, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor)(14, TenantsComponent_ng_template_14_Template, 6, 7, "ng-template", null, 2, ɵɵtemplateRefExtractor);
      ɵɵelementEnd();
      ɵɵtemplate(16, TenantsComponent_abp_feature_management_16_Template, 1, 2, "abp-feature-management", 11);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("title", ɵɵpipeBind1(1, 10, "AbpTenantManagement::Tenants"))("toolbar", ctx.data.items);
      ɵɵadvance(6);
      ɵɵproperty("placeholder", ɵɵpipeBind1(7, 12, "AbpUi::PagerSearch"));
      ɵɵtwoWayProperty("ngModel", ctx.list.filter);
      ɵɵadvance(2);
      ɵɵproperty("data", ctx.data.items || ɵɵpureFunction0(14, _c0))("recordsTotal", ctx.data.totalCount || 0)("list", ctx.list);
      ɵɵadvance();
      ɵɵtwoWayProperty("visible", ctx.isModalVisible);
      ɵɵproperty("busy", ctx.modalBusy);
      ɵɵadvance(7);
      ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction3(26, _c6, ɵɵpureFunction3(20, _c4, ɵɵpureFunction0(15, _c1), ɵɵpureFunction1(16, _c2, ctx.providerKey), ɵɵpureFunction1(18, _c3, ctx.visibleFeatures)), ɵɵpureFunction1(24, _c5, ctx.onVisibleFeaturesChange), ctx.featureManagementKey));
    }
  },
  dependencies: [FormsModule, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, PageComponent, LocalizationPipe, ExtensibleTableComponent, ModalComponent, FeatureManagementComponent, ButtonComponent, ReplaceableTemplateDirective, ExtensibleFormComponent, ModalCloseDirective, NgxValidateCoreModule, ValidationGroupDirective],
  encapsulation: 2
});
var TenantsComponent = _TenantsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TenantsComponent, [{
    type: Component,
    args: [{
      selector: "abp-tenants",
      providers: [ListService, {
        provide: EXTENSIONS_IDENTIFIER,
        useValue: "TenantManagement.TenantsComponent"
        /* eTenantManagementComponents.Tenants */
      }],
      imports: [FormsModule, ReactiveFormsModule, PageComponent, LocalizationPipe, ExtensibleTableComponent, ModalComponent, FeatureManagementComponent, ButtonComponent, ReplaceableTemplateDirective, ExtensibleFormComponent, ModalCloseDirective, NgxValidateCoreModule],
      template: `<abp-page [title]="'AbpTenantManagement::Tenants' | abpLocalization" [toolbar]="data.items">\r
  <div id="wrapper" class="card">\r
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
        [data]="data.items || []"\r
        [recordsTotal]="data.totalCount || 0"\r
        [list]="list"\r
      ></abp-extensible-table>\r
    </div>\r
  </div>\r
\r
  <abp-modal [(visible)]="isModalVisible" [busy]="modalBusy">\r
    <ng-template #abpHeader>\r
      <h3>\r
        {{\r
          (selected?.id ? 'AbpTenantManagement::Edit' : 'AbpTenantManagement::NewTenant')\r
            | abpLocalization\r
        }}\r
      </h3>\r
    </ng-template>\r
\r
    <ng-template #abpBody>\r
      <form [formGroup]="tenantForm" (ngSubmit)="save()" [validateOnSubmit]="true">\r
        <abp-extensible-form [selectedRecord]="selected"></abp-extensible-form>\r
      </form>\r
    </ng-template>\r
\r
    <ng-template #abpFooter>\r
      <button abpClose type="button" class="btn btn-outline-primary">\r
        {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r
      </button>\r
      <abp-button iconClass="fa fa-check" (click)="save()" [disabled]="tenantForm?.invalid">{{\r
        'AbpTenantManagement::Save' | abpLocalization\r
      }}</abp-button>\r
    </ng-template>\r
  </abp-modal>\r
\r
  <abp-feature-management\r
    *abpReplaceableTemplate="{\r
      inputs: {\r
        providerName: { value: 'T' },\r
        providerKey: { value: providerKey },\r
        visible: { value: visibleFeatures, twoWay: true }\r
      },\r
      outputs: { visibleChange: $any(onVisibleFeaturesChange) },\r
      componentKey: featureManagementKey\r
    }"\r
    [(visible)]="visibleFeatures"\r
    providerName="T"\r
    [providerKey]="providerKey"\r
  >\r
  </abp-feature-management>\r
</abp-page>\r
`
    }]
  }], null, null);
})();
var DEFAULT_TENANTS_ENTITY_ACTIONS = EntityAction.createMany([{
  text: "AbpTenantManagement::Edit",
  action: (data) => {
    const component = data.getInjected(TenantsComponent);
    component.editTenant(data.record.id);
  },
  permission: "AbpTenantManagement.Tenants.Update"
}, {
  text: "AbpTenantManagement::Permission:ManageFeatures",
  action: (data) => {
    const component = data.getInjected(TenantsComponent);
    component.openFeaturesModal(data.record.id);
  },
  permission: "AbpTenantManagement.Tenants.ManageFeatures"
}, {
  text: "AbpTenantManagement::Delete",
  action: (data) => {
    const component = data.getInjected(TenantsComponent);
    component.delete(data.record.id, data.record.name);
  },
  permission: "AbpTenantManagement.Tenants.Delete"
}]);
var DEFAULT_TENANTS_ENTITY_PROPS = EntityProp.createMany([{
  type: "string",
  name: "name",
  displayName: "AbpTenantManagement::TenantName",
  sortable: true
}]);
var DEFAULT_TENANTS_CREATE_FORM_PROPS = FormProp.createMany([{
  type: "string",
  name: "name",
  id: "name",
  displayName: "AbpTenantManagement::TenantName",
  validators: () => [Validators.required, Validators.maxLength(256)]
}, {
  type: "email",
  name: "adminEmailAddress",
  displayName: "AbpTenantManagement::DisplayName:AdminEmailAddress",
  id: "admin-email-address",
  validators: () => [Validators.required, Validators.maxLength(256), Validators.email]
}, {
  type: "passwordinputgroup",
  name: "adminPassword",
  displayName: "AbpTenantManagement::DisplayName:AdminPassword",
  id: "admin-password",
  autocomplete: "new-password",
  validators: (data) => [Validators.required, ...getPasswordValidators({
    get: data.getInjected
  })]
}]);
var DEFAULT_TENANTS_EDIT_FORM_PROPS = DEFAULT_TENANTS_CREATE_FORM_PROPS.slice(0, 1);
var DEFAULT_TENANTS_TOOLBAR_ACTIONS = ToolbarAction.createMany([{
  text: "AbpTenantManagement::NewTenant",
  action: (data) => {
    const component = data.getInjected(TenantsComponent);
    component.addTenant();
  },
  permission: "AbpTenantManagement.Tenants.Create",
  icon: "fa fa-plus"
}]);
var DEFAULT_TENANT_MANAGEMENT_ENTITY_ACTIONS = {
  [
    "TenantManagement.TenantsComponent"
    /* eTenantManagementComponents.Tenants */
  ]: DEFAULT_TENANTS_ENTITY_ACTIONS
};
var DEFAULT_TENANT_MANAGEMENT_TOOLBAR_ACTIONS = {
  [
    "TenantManagement.TenantsComponent"
    /* eTenantManagementComponents.Tenants */
  ]: DEFAULT_TENANTS_TOOLBAR_ACTIONS
};
var DEFAULT_TENANT_MANAGEMENT_ENTITY_PROPS = {
  [
    "TenantManagement.TenantsComponent"
    /* eTenantManagementComponents.Tenants */
  ]: DEFAULT_TENANTS_ENTITY_PROPS
};
var DEFAULT_TENANT_MANAGEMENT_CREATE_FORM_PROPS = {
  [
    "TenantManagement.TenantsComponent"
    /* eTenantManagementComponents.Tenants */
  ]: DEFAULT_TENANTS_CREATE_FORM_PROPS
};
var DEFAULT_TENANT_MANAGEMENT_EDIT_FORM_PROPS = {
  [
    "TenantManagement.TenantsComponent"
    /* eTenantManagementComponents.Tenants */
  ]: DEFAULT_TENANTS_EDIT_FORM_PROPS
};
var TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS = new InjectionToken("TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS");
var TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS = new InjectionToken("TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS");
var TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS = new InjectionToken("TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS");
var TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS = new InjectionToken("TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS");
var TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS = new InjectionToken("TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS");
var _TenantManagementExtensionsGuard = class _TenantManagementExtensionsGuard {
  constructor() {
    this.injector = inject(Injector);
    this.extensions = inject(ExtensionsService);
  }
  canActivate() {
    const config = {
      optional: true
    };
    const actionContributors = inject(TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS, config) || {};
    const toolbarContributors = inject(TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS, config) || {};
    const propContributors = inject(TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS, config) || {};
    const createFormContributors = inject(TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS, config) || {};
    const editFormContributors = inject(TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS, config) || {};
    return getObjectExtensionEntitiesFromStore(this.injector, "TenantManagement").pipe(map((entities) => ({
      [
        "TenantManagement.TenantsComponent"
        /* eTenantManagementComponents.Tenants */
      ]: entities.Tenant
    })), mapEntitiesToContributors(this.injector, "TenantManagement"), tap((objectExtensionContributors) => {
      mergeWithDefaultActions(this.extensions.entityActions, DEFAULT_TENANT_MANAGEMENT_ENTITY_ACTIONS, actionContributors);
      mergeWithDefaultActions(this.extensions.toolbarActions, DEFAULT_TENANT_MANAGEMENT_TOOLBAR_ACTIONS, toolbarContributors);
      mergeWithDefaultProps(this.extensions.entityProps, DEFAULT_TENANT_MANAGEMENT_ENTITY_PROPS, objectExtensionContributors.prop, propContributors);
      mergeWithDefaultProps(this.extensions.createFormProps, DEFAULT_TENANT_MANAGEMENT_CREATE_FORM_PROPS, objectExtensionContributors.createForm, createFormContributors);
      mergeWithDefaultProps(this.extensions.editFormProps, DEFAULT_TENANT_MANAGEMENT_EDIT_FORM_PROPS, objectExtensionContributors.editForm, editFormContributors);
    }), map(() => true));
  }
};
_TenantManagementExtensionsGuard.ɵfac = function TenantManagementExtensionsGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TenantManagementExtensionsGuard)();
};
_TenantManagementExtensionsGuard.ɵprov = ɵɵdefineInjectable({
  token: _TenantManagementExtensionsGuard,
  factory: _TenantManagementExtensionsGuard.ɵfac
});
var TenantManagementExtensionsGuard = _TenantManagementExtensionsGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TenantManagementExtensionsGuard, [{
    type: Injectable
  }], null, null);
})();
var tenantManagementExtensionsResolver = () => {
  const injector = inject(Injector);
  const extensions = inject(ExtensionsService);
  const config = {
    optional: true
  };
  const actionContributors = inject(TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS, config) || {};
  const toolbarContributors = inject(TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS, config) || {};
  const propContributors = inject(TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS, config) || {};
  const createFormContributors = inject(TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS, config) || {};
  const editFormContributors = inject(TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS, config) || {};
  return getObjectExtensionEntitiesFromStore(injector, "TenantManagement").pipe(map((entities) => ({
    [
      "TenantManagement.TenantsComponent"
      /* eTenantManagementComponents.Tenants */
    ]: entities.Tenant
  })), mapEntitiesToContributors(injector, "TenantManagement"), tap((objectExtensionContributors) => {
    mergeWithDefaultActions(extensions.entityActions, DEFAULT_TENANT_MANAGEMENT_ENTITY_ACTIONS, actionContributors);
    mergeWithDefaultActions(extensions.toolbarActions, DEFAULT_TENANT_MANAGEMENT_TOOLBAR_ACTIONS, toolbarContributors);
    mergeWithDefaultProps(extensions.entityProps, DEFAULT_TENANT_MANAGEMENT_ENTITY_PROPS, objectExtensionContributors.prop, propContributors);
    mergeWithDefaultProps(extensions.createFormProps, DEFAULT_TENANT_MANAGEMENT_CREATE_FORM_PROPS, objectExtensionContributors.createForm, createFormContributors);
    mergeWithDefaultProps(extensions.editFormProps, DEFAULT_TENANT_MANAGEMENT_EDIT_FORM_PROPS, objectExtensionContributors.editForm, editFormContributors);
  }));
};
var routes = [{
  path: "",
  redirectTo: "tenants",
  pathMatch: "full"
}, {
  path: "",
  component: RouterOutletComponent,
  canActivate: [authGuard, permissionGuard],
  resolve: [tenantManagementExtensionsResolver],
  children: [{
    path: "tenants",
    component: ReplaceableRouteContainerComponent,
    data: {
      requiredPolicy: "AbpTenantManagement.Tenants",
      replaceableComponent: {
        key: "TenantManagement.TenantsComponent",
        defaultComponent: TenantsComponent
      }
    },
    title: "AbpTenantManagement::Tenants"
  }]
}];
var _TenantManagementRoutingModule = class _TenantManagementRoutingModule {
};
_TenantManagementRoutingModule.ɵfac = function TenantManagementRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TenantManagementRoutingModule)();
};
_TenantManagementRoutingModule.ɵmod = ɵɵdefineNgModule({
  type: _TenantManagementRoutingModule,
  imports: [RouterModule],
  exports: [RouterModule]
});
_TenantManagementRoutingModule.ɵinj = ɵɵdefineInjector({
  imports: [RouterModule.forChild(routes), RouterModule]
});
var TenantManagementRoutingModule = _TenantManagementRoutingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TenantManagementRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();
var _TenantManagementModule = class _TenantManagementModule {
  static forChild(options = {}) {
    return {
      ngModule: _TenantManagementModule,
      providers: [{
        provide: TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS,
        useValue: options.entityActionContributors
      }, {
        provide: TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS,
        useValue: options.toolbarActionContributors
      }, {
        provide: TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS,
        useValue: options.entityPropContributors
      }, {
        provide: TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS,
        useValue: options.createFormPropContributors
      }, {
        provide: TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS,
        useValue: options.editFormPropContributors
      }, TenantManagementExtensionsGuard]
    };
  }
  /**
   * @deprecated `TenantManagementModule.forLazy()` is deprecated. You can use `createRoutes` **function** instead.
   */
  static forLazy(options = {}) {
    return new LazyModuleFactory(_TenantManagementModule.forChild(options));
  }
};
_TenantManagementModule.ɵfac = function TenantManagementModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TenantManagementModule)();
};
_TenantManagementModule.ɵmod = ɵɵdefineNgModule({
  type: _TenantManagementModule,
  imports: [TenantManagementRoutingModule, TenantsComponent]
});
_TenantManagementModule.ɵinj = ɵɵdefineInjector({
  imports: [TenantManagementRoutingModule, TenantsComponent]
});
var TenantManagementModule = _TenantManagementModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TenantManagementModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      exports: [],
      imports: [TenantManagementRoutingModule, TenantsComponent]
    }]
  }], null, null);
})();
function provideTenantManagement(options = {}) {
  return [{
    provide: TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS,
    useValue: options.entityActionContributors
  }, {
    provide: TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS,
    useValue: options.toolbarActionContributors
  }, {
    provide: TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS,
    useValue: options.entityPropContributors
  }, {
    provide: TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS,
    useValue: options.createFormPropContributors
  }, {
    provide: TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS,
    useValue: options.editFormPropContributors
  }];
}
var createRoutes = (options = {}) => [{
  path: "",
  component: RouterOutletComponent,
  canActivate: [authGuard, permissionGuard],
  resolve: [tenantManagementExtensionsResolver],
  providers: provideTenantManagement(options),
  children: [{
    path: "",
    redirectTo: "tenants",
    pathMatch: "full"
  }, {
    path: "tenants",
    component: ReplaceableRouteContainerComponent,
    data: {
      requiredPolicy: "AbpTenantManagement.Tenants",
      replaceableComponent: {
        key: "TenantManagement.TenantsComponent",
        defaultComponent: TenantsComponent
      }
    },
    title: "AbpTenantManagement::Tenants"
  }]
}];
export {
  DEFAULT_TENANT_MANAGEMENT_CREATE_FORM_PROPS,
  DEFAULT_TENANT_MANAGEMENT_EDIT_FORM_PROPS,
  DEFAULT_TENANT_MANAGEMENT_ENTITY_ACTIONS,
  DEFAULT_TENANT_MANAGEMENT_ENTITY_PROPS,
  DEFAULT_TENANT_MANAGEMENT_TOOLBAR_ACTIONS,
  TENANT_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS,
  TENANT_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS,
  TENANT_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS,
  TENANT_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS,
  TENANT_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS,
  TenantManagementExtensionsGuard,
  TenantManagementModule,
  TenantsComponent,
  createRoutes,
  provideTenantManagement,
  tenantManagementExtensionsResolver
};
//# sourceMappingURL=@abp_ng__tenant-management.js.map
