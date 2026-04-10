import {
  SettingTabsService
} from "./chunk-T4P7JVT4.js";
import {
  ButtonComponent,
  Confirmation,
  ConfirmationService,
  ModalCloseDirective,
  ModalComponent,
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavModule,
  NgbNavOutlet,
  ToasterService
} from "./chunk-ECZD44PI.js";
import {
  ConfigStateService,
  LocalizationPipe,
  ReplaceableTemplateDirective,
  RestService,
  TrackByService
} from "./chunk-DOR275RM.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-XC2BQRUA.js";
import {
  CommonModule,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-6NN5GPUG.js";
import {
  Component,
  Directive,
  EventEmitter,
  HostBinding,
  Injectable,
  Input,
  NgModule,
  Output,
  finalize,
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
  setClassMetadata,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
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
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
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
  __spreadProps,
  __spreadValues
} from "./chunk-7K3IQTKT.js";

// node_modules/@abp/ng.feature-management/fesm2022/abp-ng.feature-management-proxy.mjs
var _FeaturesService = class _FeaturesService {
  constructor(restService) {
    this.restService = restService;
    this.apiName = "AbpFeatureManagement";
    this.delete = (providerName, providerKey) => this.restService.request({
      method: "DELETE",
      url: "/api/feature-management/features",
      params: {
        providerName,
        providerKey
      }
    }, {
      apiName: this.apiName
    });
    this.get = (providerName, providerKey) => this.restService.request({
      method: "GET",
      url: "/api/feature-management/features",
      params: {
        providerName,
        providerKey
      }
    }, {
      apiName: this.apiName
    });
    this.update = (providerName, providerKey, input) => this.restService.request({
      method: "PUT",
      url: "/api/feature-management/features",
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
_FeaturesService.ɵfac = function FeaturesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FeaturesService)(ɵɵinject(RestService));
};
_FeaturesService.ɵprov = ɵɵdefineInjectable({
  token: _FeaturesService,
  factory: _FeaturesService.ɵfac,
  providedIn: "root"
});
var FeaturesService = _FeaturesService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeaturesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RestService
  }], null);
})();
var index = Object.freeze({
  __proto__: null
});

// node_modules/@abp/ng.feature-management/fesm2022/abp-ng.feature-management.mjs
var _c0 = () => ({
  size: "lg"
});
var _c1 = (a0) => ({
  $implicit: a0
});
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.id || $index;
var _forTrack2 = ($index, $item) => $item.value;
function FeatureManagementComponent_Conditional_0_ng_template_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵtextInterpolate1(" - ", ctx_r1.providerTitle, " ");
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h3");
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵconditionalCreate(3, FeatureManagementComponent_Conditional_0_ng_template_1_Conditional_3_Template, 1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "AbpFeatureManagement::Features"), " ");
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.providerTitle ? 3 : -1);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const provider_r7 = ɵɵreadContextLet(0);
    ɵɵadvance();
    ɵɵtextInterpolate1("(", provider_r7, ")");
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 21)(1, "input", 22);
    ɵɵtwoWayListener("ngModelChange", function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_3_Template_input_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r5);
      const feature_r6 = ɵɵnextContext().$implicit;
      ɵɵtwoWayBindingSet(feature_r6.value, $event) || (feature_r6.value = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("ngModelChange", function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_3_Template_input_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r5);
      const feature_r6 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r1.onCheckboxClick($event, feature_r6));
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "label", 23);
    ɵɵtext(3);
    ɵɵconditionalCreate(4, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_3_Conditional_4_Template, 2, 1, "span");
    ɵɵelementEnd();
    ɵɵtemplate(5, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_3_ng_container_5_Template, 1, 0, "ng-container", 24);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const feature_r6 = ɵɵnextContext().$implicit;
    const isFeatureDisabled_r8 = ɵɵreadContextLet(1);
    ɵɵnextContext(3);
    const descTmp_r9 = ɵɵreference(6);
    ɵɵclassProp("px-4", !!feature_r6.parentName);
    ɵɵadvance();
    ɵɵproperty("id", feature_r6.name);
    ɵɵtwoWayProperty("ngModel", feature_r6.value);
    ɵɵproperty("disabled", isFeatureDisabled_r8);
    ɵɵadvance();
    ɵɵproperty("htmlFor", feature_r6.name);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", feature_r6.displayName, " ");
    ɵɵadvance();
    ɵɵconditional(isFeatureDisabled_r8 ? 4 : -1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", descTmp_r9)("ngTemplateOutletContext", ɵɵpureFunction1(10, _c1, feature_r6.description));
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const provider_r7 = ɵɵreadContextLet(0);
    ɵɵadvance();
    ɵɵtextInterpolate1("(", provider_r7, ")");
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 25)(1, "label", 26);
    ɵɵtext(2);
    ɵɵconditionalCreate(3, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_4_Conditional_3_Template, 2, 1, "span");
    ɵɵelementEnd();
    ɵɵelementStart(4, "input", 27);
    ɵɵtwoWayListener("ngModelChange", function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_4_Template_input_ngModelChange_4_listener($event) {
      ɵɵrestoreView(_r10);
      const feature_r6 = ɵɵnextContext().$implicit;
      ɵɵtwoWayBindingSet(feature_r6.value, $event) || (feature_r6.value = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
    ɵɵtemplate(5, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_4_ng_container_5_Template, 1, 0, "ng-container", 24);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const feature_r6 = ɵɵnextContext().$implicit;
    const isFeatureDisabled_r8 = ɵɵreadContextLet(1);
    ɵɵnextContext(3);
    const descTmp_r9 = ɵɵreference(6);
    ɵɵclassProp("px-2", !!feature_r6.parentName);
    ɵɵadvance();
    ɵɵproperty("htmlFor", feature_r6.name);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", feature_r6.displayName, " ");
    ɵɵadvance();
    ɵɵconditional(isFeatureDisabled_r8 ? 3 : -1);
    ɵɵadvance();
    ɵɵproperty("id", feature_r6.name);
    ɵɵtwoWayProperty("ngModel", feature_r6.value);
    ɵɵproperty("abpFeatureManagementFreeText", feature_r6)("disabled", isFeatureDisabled_r8);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", descTmp_r9)("ngTemplateOutletContext", ɵɵpureFunction1(11, _c1, feature_r6.description));
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_5_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(3);
    const provider_r7 = ɵɵreadContextLet(0);
    ɵɵadvance();
    ɵɵtextInterpolate1("(", provider_r7, ")");
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_5_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 29);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    ɵɵproperty("ngValue", item_r12.value);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, (item_r12.displayText == null ? null : item_r12.displayText.resourceName) + "::" + (item_r12.displayText == null ? null : item_r12.displayText.name)), " ");
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_5_Conditional_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 25)(1, "label", 26);
    ɵɵtext(2);
    ɵɵconditionalCreate(3, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_5_Conditional_0_Conditional_3_Template, 2, 1, "span");
    ɵɵelementEnd();
    ɵɵelementStart(4, "select", 28);
    ɵɵtwoWayListener("ngModelChange", function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_5_Conditional_0_Template_select_ngModelChange_4_listener($event) {
      ɵɵrestoreView(_r11);
      const feature_r6 = ɵɵnextContext(2).$implicit;
      ɵɵtwoWayBindingSet(feature_r6.value, $event) || (feature_r6.value = $event);
      return ɵɵresetView($event);
    });
    ɵɵrepeaterCreate(5, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_5_Conditional_0_For_6_Template, 3, 4, "option", 29, _forTrack2);
    ɵɵelementEnd();
    ɵɵtemplate(7, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_5_Conditional_0_ng_container_7_Template, 1, 0, "ng-container", 24);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const feature_r6 = ɵɵnextContext(2).$implicit;
    const isFeatureDisabled_r8 = ɵɵreadContextLet(1);
    ɵɵnextContext(3);
    const descTmp_r9 = ɵɵreference(6);
    ɵɵclassProp("px-2", !!feature_r6.parentName);
    ɵɵadvance();
    ɵɵproperty("htmlFor", feature_r6.name);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", feature_r6.displayName, " ");
    ɵɵadvance();
    ɵɵconditional(isFeatureDisabled_r8 ? 3 : -1);
    ɵɵadvance();
    ɵɵproperty("id", feature_r6.name);
    ɵɵtwoWayProperty("ngModel", feature_r6.value);
    ɵɵproperty("disabled", isFeatureDisabled_r8);
    ɵɵadvance();
    ɵɵrepeater(feature_r6.valueType.itemSource == null ? null : feature_r6.valueType.itemSource.items);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", descTmp_r9)("ngTemplateOutletContext", ɵɵpureFunction1(10, _c1, feature_r6.description));
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_5_Conditional_0_Template, 8, 12, "div", 20);
  }
  if (rf & 2) {
    const feature_r6 = ɵɵnextContext().$implicit;
    ɵɵconditional((feature_r6.valueType.itemSource == null ? null : feature_r6.valueType.itemSource.items == null ? null : feature_r6.valueType.itemSource.items.length) ? 0 : -1);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const feature_r6 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate1(" ", feature_r6.displayName, " ");
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵdeclareLet(0)(1);
    ɵɵelementStart(2, "div", 18);
    ɵɵlistener("keyup.enter", function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Template_div_keyup_enter_2_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r1.save());
    });
    ɵɵconditionalCreate(3, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_3_Template, 6, 12, "div", 19)(4, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_4_Template, 6, 13, "div", 20)(5, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_5_Template, 1, 1)(6, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Case_6_Template, 1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_33_0;
    const feature_r6 = ctx.$implicit;
    const group_r13 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    const provider_r14 = ɵɵstoreLet(feature_r6.provider.name);
    ɵɵadvance();
    ɵɵstoreLet(!feature_r6.parentName ? ctx_r1.isParentDisabled(feature_r6.name, group_r13.name, provider_r14) : provider_r14 !== ctx_r1.providerName && provider_r14 !== ctx_r1.defaultProviderName);
    ɵɵadvance();
    ɵɵproperty("ngStyle", feature_r6.style);
    ɵɵadvance();
    ɵɵconditional((tmp_33_0 = feature_r6.valueType == null ? null : feature_r6.valueType.name) === ctx_r1.valueTypes.ToggleStringValueType ? 3 : tmp_33_0 === ctx_r1.valueTypes.FreeTextStringValueType ? 4 : tmp_33_0 === ctx_r1.valueTypes.SelectionStringValueType ? 5 : 6);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h4");
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵelement(2, "hr", 16);
    ɵɵrepeaterCreate(3, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_For_4_Template, 7, 4, "div", 17, _forTrack1);
  }
  if (rf & 2) {
    const group_r13 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.selectedGroupDisplayName);
    ɵɵadvance(2);
    ɵɵrepeater(ctx_r1.features[group_r13.name]);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 11)(1, "a", 14);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_ng_template_3_Template, 5, 1, "ng-template", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const group_r13 = ctx.$implicit;
    ɵɵproperty("ngbNavItem", group_r13.displayName);
    ɵɵadvance(2);
    ɵɵtextInterpolate(group_r13.displayName);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_ng_template_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "small", 30);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const description_r15 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(description_r15);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_ng_template_5_Conditional_0_Template, 2, 1, "small", 30);
  }
  if (rf & 2) {
    const description_r15 = ctx.$implicit;
    ɵɵconditional(description_r15 ? 0 : -1);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9)(1, "ul", 10, 3);
    ɵɵtwoWayListener("activeIdChange", function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_Template_ul_activeIdChange_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      ɵɵtwoWayBindingSet(ctx_r1.selectedGroupDisplayName, $event) || (ctx_r1.selectedGroupDisplayName = $event);
      return ɵɵresetView($event);
    });
    ɵɵrepeaterCreate(3, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_For_4_Template, 4, 2, "li", 11, _forTrack0);
    ɵɵelementEnd()();
    ɵɵtemplate(5, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_ng_template_5_Template, 1, 1, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵelementStart(7, "div", 12);
    ɵɵelement(8, "div", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const nav_r16 = ɵɵreference(2);
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtwoWayProperty("activeId", ctx_r1.selectedGroupDisplayName);
    ɵɵadvance(2);
    ɵɵrepeater(ctx_r1.groups);
    ɵɵadvance(5);
    ɵɵproperty("ngbNavOutlet", nav_r16);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "AbpFeatureManagement::NoFeatureFoundMessage"), " ");
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵconditionalCreate(1, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_1_Template, 9, 2);
    ɵɵconditionalCreate(2, FeatureManagementComponent_Conditional_0_ng_template_3_Conditional_2_Template, 3, 3, "div", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.groups.length ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.groups.length ? 2 : -1);
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "abp-button", 34);
    ɵɵlistener("click", function FeatureManagementComponent_Conditional_0_ng_template_5_Conditional_3_Template_abp_button_click_0_listener() {
      ɵɵrestoreView(_r17);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.resetToDefault());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("disabled", ctx_r1.modalBusy);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "AbpFeatureManagement::ResetToDefault"), " ");
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "abp-button", 35);
    ɵɵlistener("click", function FeatureManagementComponent_Conditional_0_ng_template_5_Conditional_4_Template_abp_button_click_0_listener() {
      ɵɵrestoreView(_r18);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.save());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("disabled", ctx_r1.modalBusy);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "AbpFeatureManagement::Save"), " ");
  }
}
function FeatureManagementComponent_Conditional_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 31);
    ɵɵtext(1);
    ɵɵpipe(2, "abpLocalization");
    ɵɵelementEnd();
    ɵɵconditionalCreate(3, FeatureManagementComponent_Conditional_0_ng_template_5_Conditional_3_Template, 3, 4, "abp-button", 32);
    ɵɵconditionalCreate(4, FeatureManagementComponent_Conditional_0_ng_template_5_Conditional_4_Template, 3, 4, "abp-button", 33);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, "AbpFeatureManagement::Cancel"), " ");
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.groups.length ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.groups.length ? 4 : -1);
  }
}
function FeatureManagementComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "abp-modal", 6);
    ɵɵtwoWayListener("visibleChange", function FeatureManagementComponent_Conditional_0_Template_abp_modal_visibleChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.visible, $event) || (ctx_r1.visible = $event);
      return ɵɵresetView($event);
    });
    ɵɵtemplate(1, FeatureManagementComponent_Conditional_0_ng_template_1_Template, 4, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, FeatureManagementComponent_Conditional_0_ng_template_3_Template, 3, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor)(5, FeatureManagementComponent_Conditional_0_ng_template_5_Template, 5, 5, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵtwoWayProperty("visible", ctx_r1.visible);
    ɵɵproperty("busy", ctx_r1.modalBusy)("options", ɵɵpureFunction0(3, _c0));
  }
}
var _c2 = () => ({
  value: "T"
});
var _c3 = (a0) => ({
  value: a0
});
var _c4 = (a0) => ({
  value: a0,
  twoWay: true
});
var _c5 = (a0, a1, a2) => ({
  providerName: a0,
  providerKey: a1,
  visible: a2
});
var _c6 = (a0) => ({
  visibleChange: a0
});
var _c7 = (a0, a1) => ({
  inputs: a0,
  outputs: a1,
  componentKey: "FeatureManagement.FeatureManagementComponent"
});
function FeatureManagementTabComponent_Conditional_7_abp_feature_management_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "abp-feature-management", 5);
    ɵɵtwoWayListener("visibleChange", function FeatureManagementTabComponent_Conditional_7_abp_feature_management_0_Template_abp_feature_management_visibleChange_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r1.visibleFeatures, $event) || (ctx_r1.visibleFeatures = $event);
      return ɵɵresetView($event);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵtwoWayProperty("visible", ctx_r1.visibleFeatures);
    ɵɵproperty("providerKey", ctx_r1.providerKey);
  }
}
function FeatureManagementTabComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FeatureManagementTabComponent_Conditional_7_abp_feature_management_0_Template, 1, 2, "abp-feature-management", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("abpReplaceableTemplate", ɵɵpureFunction2(12, _c7, ɵɵpureFunction3(6, _c5, ɵɵpureFunction0(1, _c2), ɵɵpureFunction1(2, _c3, ctx_r1.providerKey), ɵɵpureFunction1(4, _c4, ctx_r1.visibleFeatures)), ɵɵpureFunction1(10, _c6, ctx_r1.onVisibleFeaturesChange)));
  }
}
var INPUT_TYPES = {
  numeric: "number",
  default: "text"
};
var _FreeTextInputDirective = class _FreeTextInputDirective {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  set feature(val) {
    this._feature = val;
    this.setInputType();
  }
  get feature() {
    return this._feature;
  }
  setInputType() {
    const validatorType = this.feature?.valueType?.validator?.name.toLowerCase();
    this.type = INPUT_TYPES[validatorType] ?? INPUT_TYPES.default;
  }
};
_FreeTextInputDirective.ɵfac = function FreeTextInputDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FreeTextInputDirective)();
};
_FreeTextInputDirective.ɵdir = ɵɵdefineDirective({
  type: _FreeTextInputDirective,
  selectors: [["input", "abpFeatureManagementFreeText", ""]],
  hostVars: 1,
  hostBindings: function FreeTextInputDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵdomProperty("type", ctx.type);
    }
  },
  inputs: {
    feature: [0, "abpFeatureManagementFreeText", "feature"]
  },
  exportAs: ["inputAbpFeatureManagementFreeText"]
});
var FreeTextInputDirective = _FreeTextInputDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FreeTextInputDirective, [{
    type: Directive,
    args: [{
      selector: "input[abpFeatureManagementFreeText]",
      exportAs: "inputAbpFeatureManagementFreeText"
    }]
  }], null, {
    feature: [{
      type: Input,
      args: ["abpFeatureManagementFreeText"]
    }],
    type: [{
      type: HostBinding,
      args: ["type"]
    }]
  });
})();
var ValueTypes;
(function(ValueTypes2) {
  ValueTypes2["ToggleStringValueType"] = "ToggleStringValueType";
  ValueTypes2["FreeTextStringValueType"] = "FreeTextStringValueType";
  ValueTypes2["SelectionStringValueType"] = "SelectionStringValueType";
})(ValueTypes || (ValueTypes = {}));
var DEFAULT_PROVIDER_NAME = "D";
var _FeatureManagementComponent = class _FeatureManagementComponent {
  constructor() {
    this.track = inject(TrackByService);
    this.toasterService = inject(ToasterService);
    this.service = inject(FeaturesService);
    this.configState = inject(ConfigStateService);
    this.confirmationService = inject(ConfirmationService);
    this.groups = [];
    this.valueTypes = ValueTypes;
    this.defaultProviderName = DEFAULT_PROVIDER_NAME;
    this.visibleChange = new EventEmitter();
    this.modalBusy = false;
  }
  get visible() {
    return this._visible;
  }
  set visible(value) {
    if (this._visible === value) {
      return;
    }
    this._visible = value;
    this.visibleChange.emit(value);
    if (value) {
      this.openModal();
      return;
    }
  }
  openModal() {
    if (!this.providerName) {
      throw new Error("providerName is required.");
    }
    this.getFeatures();
  }
  getFeatures() {
    this.service.get(this.providerName, this.providerKey).subscribe((res) => {
      if (!res.groups?.length) return;
      this.groups = res.groups.map(({
        name,
        displayName
      }) => ({
        name,
        displayName
      }));
      this.selectedGroupDisplayName = this.groups[0].displayName;
      this.features = res.groups.reduce((acc, val) => __spreadProps(__spreadValues({}, acc), {
        [val.name]: mapFeatures(val.features, document.body.dir)
      }), {});
    });
  }
  save() {
    if (this.modalBusy) return;
    const changedFeatures = [];
    Object.keys(this.features).forEach((key) => {
      this.features[key].forEach((feature) => {
        if (feature.value !== feature.initialValue) changedFeatures.push({
          name: feature.name,
          value: `${feature.value}`
        });
      });
    });
    if (!changedFeatures.length) {
      this.visible = false;
      return;
    }
    this.modalBusy = true;
    this.service.update(this.providerName, this.providerKey, {
      features: changedFeatures
    }).pipe(finalize(() => this.modalBusy = false)).subscribe(() => {
      this.visible = false;
      this.toasterService.success("AbpUi::SavedSuccessfully");
      if (!this.providerKey) {
        this.configState.refreshAppState().subscribe();
      }
    });
  }
  resetToDefault() {
    this.confirmationService.warn("AbpFeatureManagement::AreYouSureToResetToDefault", "AbpFeatureManagement::AreYouSure").subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.service.delete(this.providerName, this.providerKey).subscribe(() => {
          this.toasterService.success("AbpFeatureManagement::ResetedToDefault");
          this.visible = false;
          if (!this.providerKey) {
            this.configState.refreshAppState().subscribe();
          }
        });
      }
    });
  }
  onCheckboxClick(val, feature) {
    if (val) {
      this.checkToggleAncestors(feature);
    } else {
      this.uncheckToggleDescendants(feature);
    }
  }
  isParentDisabled(parentName, groupName, provider) {
    const children = this.features[groupName]?.filter((f) => f.parentName === parentName);
    if (children?.length) {
      return children.some((child) => {
        const childProvider = child.provider?.name;
        return childProvider !== this.providerName && childProvider !== this.defaultProviderName || provider !== this.providerName && provider !== this.defaultProviderName;
      });
    } else {
      return provider !== this.providerName && provider !== this.defaultProviderName;
    }
  }
  uncheckToggleDescendants(feature) {
    this.findAllDescendantsOfByType(feature, ValueTypes.ToggleStringValueType).forEach((node) => this.setFeatureValue(node, false));
  }
  checkToggleAncestors(feature) {
    this.findAllAncestorsOfByType(feature, ValueTypes.ToggleStringValueType).forEach((node) => this.setFeatureValue(node, true));
  }
  findAllAncestorsOfByType(feature, type) {
    let parent = this.findParentByType(feature, type);
    const ancestors = [];
    while (parent) {
      ancestors.push(parent);
      parent = this.findParentByType(parent, type);
    }
    return ancestors;
  }
  findAllDescendantsOfByType(feature, type) {
    const descendants = [];
    const queue = [feature];
    while (queue.length) {
      const node = queue.pop();
      const newDescendants = this.findChildrenByType(node, type);
      descendants.push(...newDescendants);
      queue.push(...newDescendants);
    }
    return descendants;
  }
  findParentByType(feature, type) {
    return this.getCurrentGroup().find((f) => f.valueType.name === type && f.name === feature.parentName);
  }
  findChildrenByType(feature, type) {
    return this.getCurrentGroup().filter((f) => f.valueType.name === type && f.parentName === feature.name);
  }
  getCurrentGroup() {
    return this.features[this.selectedGroupDisplayName] ?? [];
  }
  setFeatureValue(feature, val) {
    feature.value = val;
  }
};
_FeatureManagementComponent.ɵfac = function FeatureManagementComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FeatureManagementComponent)();
};
_FeatureManagementComponent.ɵcmp = ɵɵdefineComponent({
  type: _FeatureManagementComponent,
  selectors: [["abp-feature-management"]],
  inputs: {
    providerKey: "providerKey",
    providerName: "providerName",
    providerTitle: "providerTitle",
    visible: "visible"
  },
  outputs: {
    visibleChange: "visibleChange"
  },
  exportAs: ["abpFeatureManagement"],
  decls: 1,
  vars: 1,
  consts: [["abpHeader", ""], ["abpBody", ""], ["abpFooter", ""], ["nav", "ngbNav"], ["descTmp", ""], [3, "visible", "busy", "options"], [3, "visibleChange", "visible", "busy", "options"], [1, "row"], [1, "col"], [1, "col-md-4"], ["ngbNav", "", "orientation", "vertical", 1, "nav-pills", 3, "activeIdChange", "activeId"], [3, "ngbNavItem"], [1, "col-md-8"], [1, "py-0", 3, "ngbNavOutlet"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", "mb-3"], [1, "mt-2", 3, "ngStyle"], [1, "mt-2", 3, "keyup.enter", "ngStyle"], [1, "form-check", 3, "px-4"], [1, "mb-3", "form-group", 3, "px-2"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "id", "ngModel", "disabled"], [1, "form-check-label", 3, "htmlFor"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mb-3", "form-group"], [1, "form-label", 3, "htmlFor"], ["type", "text", 1, "form-control", 3, "ngModelChange", "id", "ngModel", "abpFeatureManagementFreeText", "disabled"], [1, "form-select", 3, "ngModelChange", "id", "ngModel", "disabled"], [3, "ngValue"], [1, "d-block", "form-text", "text-muted"], ["abpClose", "", "type", "button", 1, "btn", "btn-link"], ["buttonClass", "btn btn-outline-primary", "aria-hidden", "true", 3, "disabled"], ["iconClass", "fa fa-check", "aria-hidden", "true", 3, "disabled"], ["buttonClass", "btn btn-outline-primary", "aria-hidden", "true", 3, "click", "disabled"], ["iconClass", "fa fa-check", "aria-hidden", "true", 3, "click", "disabled"]],
  template: function FeatureManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵconditionalCreate(0, FeatureManagementComponent_Conditional_0_Template, 7, 4, "abp-modal", 5);
    }
    if (rf & 2) {
      ɵɵconditional(ctx.visible ? 0 : -1);
    }
  },
  dependencies: [CommonModule, NgTemplateOutlet, NgStyle, ButtonComponent, ModalComponent, LocalizationPipe, FormsModule, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, NgbNavModule, NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavOutlet, FreeTextInputDirective, ModalCloseDirective],
  encapsulation: 2
});
var FeatureManagementComponent = _FeatureManagementComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureManagementComponent, [{
    type: Component,
    args: [{
      selector: "abp-feature-management",
      exportAs: "abpFeatureManagement",
      imports: [CommonModule, ButtonComponent, ModalComponent, LocalizationPipe, FormsModule, NgbNavModule, FreeTextInputDirective, NgTemplateOutlet, ModalCloseDirective],
      template: `@if (visible) {\r
  <abp-modal [(visible)]="visible" [busy]="modalBusy" [options]="{ size: 'lg' }">\r
    <ng-template #abpHeader>\r
      <h3>\r
        {{ 'AbpFeatureManagement::Features' | abpLocalization }}\r
        @if (providerTitle) {\r
          - {{ providerTitle }}\r
        }\r
      </h3>\r
    </ng-template>\r
\r
    <ng-template #abpBody>\r
      <div class="row">\r
        @if (groups.length) {\r
          <div class="col-md-4">\r
            <ul\r
              ngbNav\r
              #nav="ngbNav"\r
              [(activeId)]="selectedGroupDisplayName"\r
              class="nav-pills"\r
              orientation="vertical"\r
            >\r
              @for (group of groups; track group.name) {\r
                <li [ngbNavItem]="group.displayName">\r
                  <a ngbNavLink>{{ group.displayName }}</a>\r
                  <ng-template ngbNavContent>\r
                    <h4>{{ selectedGroupDisplayName }}</h4>\r
                    <hr class="mt-2 mb-3" />\r
\r
                    @for (feature of features[group.name]; track feature.id || i; let i = $index) {\r
                      @let provider = feature.provider.name;\r
                      @let isFeatureDisabled = !feature.parentName ? isParentDisabled(feature.name, group.name, provider) :\r
                        (provider !== providerName && provider !== defaultProviderName);\r
\r
                      <div class="mt-2" [ngStyle]="feature.style" (keyup.enter)="save()">\r
                        @switch (feature.valueType?.name) {\r
                          @case (valueTypes.ToggleStringValueType) {\r
                            <div class="form-check" [class.px-4]="!!feature.parentName">\r
                              <input\r
                                class="form-check-input"\r
                                type="checkbox"\r
                                [id]="feature.name"\r
                                [(ngModel)]="feature.value"\r
                                (ngModelChange)="onCheckboxClick($event, feature)"\r
                                [disabled]="isFeatureDisabled"\r
                              />\r
\r
                              <label class="form-check-label" [htmlFor]="feature.name">\r
                                {{ feature.displayName }}\r
                                @if (isFeatureDisabled) {\r
                                  <span>({{ provider }})</span>\r
                                }\r
                              </label>\r
                              <ng-container\r
                                *ngTemplateOutlet="\r
                                  descTmp;\r
                                  context: { $implicit: feature.description }\r
                                "\r
                              ></ng-container>\r
                            </div>\r
                          }\r
                          @case (valueTypes.FreeTextStringValueType) {\r
                            <div class="mb-3 form-group" [class.px-2]="!!feature.parentName">\r
                              <label [htmlFor]="feature.name" class="form-label">\r
                                {{ feature.displayName }}\r
                                @if (isFeatureDisabled) {\r
                                  <span>({{ provider }})</span>\r
                                }\r
                              </label>\r
                              <input\r
                                class="form-control"\r
                                type="text"\r
                                [id]="feature.name"\r
                                [(ngModel)]="feature.value"\r
                                [abpFeatureManagementFreeText]="feature"\r
                                [disabled]="isFeatureDisabled"\r
                              />\r
\r
                              <ng-container\r
                                *ngTemplateOutlet="\r
                                  descTmp;\r
                                  context: { $implicit: feature.description }\r
                                "\r
                              ></ng-container>\r
                            </div>\r
                          }\r
                          @case (valueTypes.SelectionStringValueType) {\r
                            @if (feature.valueType.itemSource?.items?.length) {\r
                              <div class="mb-3 form-group" [class.px-2]="!!feature.parentName">\r
                                <label [htmlFor]="feature.name" class="form-label">\r
                                  {{ feature.displayName }}\r
                                  @if (isFeatureDisabled) {\r
                                    <span>({{ provider }})</span>\r
                                  }\r
                                </label>\r
                                <select\r
                                  class="form-select"\r
                                  [id]="feature.name"\r
                                  [(ngModel)]="feature.value"\r
                                  [disabled]="isFeatureDisabled"\r
                                >\r
                                  @for (\r
                                    item of feature.valueType.itemSource?.items;\r
                                    track item.value\r
                                  ) {\r
                                    <option [ngValue]="item.value">\r
                                      {{\r
                                        item.displayText?.resourceName +\r
                                          '::' +\r
                                          item.displayText?.name | abpLocalization\r
                                      }}\r
                                    </option>\r
                                  }\r
                                </select>\r
                                <ng-container\r
                                  *ngTemplateOutlet="\r
                                    descTmp;\r
                                    context: { $implicit: feature.description }\r
                                  "\r
                                ></ng-container>\r
                              </div>\r
                            }\r
                          }\r
                          @default {\r
                            {{ feature.displayName }}\r
                          }\r
                        }\r
                      </div>\r
                    }\r
                  </ng-template>\r
                </li>\r
              }\r
            </ul>\r
          </div>\r
\r
          <ng-template #descTmp let-description>\r
            @if (description) {\r
              <small class="d-block form-text text-muted">{{ description }}</small>\r
            }\r
          </ng-template>\r
\r
          <div class="col-md-8"><div class="py-0" [ngbNavOutlet]="nav"></div></div>\r
        }\r
\r
        @if (!groups.length) {\r
          <div class="col">\r
            {{ 'AbpFeatureManagement::NoFeatureFoundMessage' | abpLocalization }}\r
          </div>\r
        }\r
      </div>\r
    </ng-template>\r
\r
    <ng-template #abpFooter>\r
      <button abpClose type="button" class="btn btn-link">\r
        {{ 'AbpFeatureManagement::Cancel' | abpLocalization }}\r
      </button>\r
\r
      @if (groups.length) {\r
        <abp-button\r
          buttonClass="btn btn-outline-primary"\r
          [disabled]="modalBusy"\r
          (click)="resetToDefault()"\r
          aria-hidden="true"\r
        >\r
          {{ 'AbpFeatureManagement::ResetToDefault' | abpLocalization }}\r
        </abp-button>\r
      }\r
\r
      @if (groups.length) {\r
        <abp-button\r
          iconClass="fa fa-check"\r
          [disabled]="modalBusy"\r
          (click)="save()"\r
          aria-hidden="true"\r
        >\r
          {{ 'AbpFeatureManagement::Save' | abpLocalization }}\r
        </abp-button>\r
      }\r
    </ng-template>\r
  </abp-modal>\r
}\r
`
    }]
  }], null, {
    providerKey: [{
      type: Input
    }],
    providerName: [{
      type: Input
    }],
    providerTitle: [{
      type: Input,
      args: [{
        required: false
      }]
    }],
    visible: [{
      type: Input
    }],
    visibleChange: [{
      type: Output
    }]
  });
})();
function mapFeatures(features, dir) {
  const margin = `margin-${dir === "rtl" ? "right" : "left"}.px`;
  return features.map((feature) => {
    const value = feature.valueType?.name === ValueTypes.ToggleStringValueType ? (feature.value || "").toLowerCase() === "true" : feature.value;
    return __spreadProps(__spreadValues({}, feature), {
      value,
      initialValue: value,
      style: {
        [margin]: feature.depth * 20
      }
    });
  });
}
var _FeatureManagementTabComponent = class _FeatureManagementTabComponent {
  constructor() {
    this.visibleFeatures = false;
    this.onVisibleFeaturesChange = (value) => {
      this.visibleFeatures = value;
    };
  }
  openFeaturesModal() {
    this.visibleFeatures = true;
  }
};
_FeatureManagementTabComponent.ɵfac = function FeatureManagementTabComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FeatureManagementTabComponent)();
};
_FeatureManagementTabComponent.ɵcmp = ɵɵdefineComponent({
  type: _FeatureManagementTabComponent,
  selectors: [["abp-feature-management-tab"]],
  decls: 8,
  vars: 7,
  consts: [[1, "pt-2", "text-wrap"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["aria-hidden", "true", 1, "me-1", "fa", "fa-cog"], ["providerName", "T", 3, "visible", "providerKey"], ["providerName", "T", 3, "visible", "providerKey", "visibleChange", 4, "abpReplaceableTemplate"], ["providerName", "T", 3, "visibleChange", "visible", "providerKey"]],
  template: function FeatureManagementTabComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "p", 0);
      ɵɵtext(1);
      ɵɵpipe(2, "abpLocalization");
      ɵɵelementEnd();
      ɵɵelementStart(3, "button", 1);
      ɵɵlistener("click", function FeatureManagementTabComponent_Template_button_click_3_listener() {
        return ctx.openFeaturesModal();
      });
      ɵɵelement(4, "i", 2);
      ɵɵtext(5);
      ɵɵpipe(6, "abpLocalization");
      ɵɵelementEnd();
      ɵɵconditionalCreate(7, FeatureManagementTabComponent_Conditional_7_Template, 1, 15, "abp-feature-management", 3);
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵtextInterpolate(ɵɵpipeBind1(2, 3, "AbpFeatureManagement::ManageHostFeaturesText"));
      ɵɵadvance(4);
      ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 5, "AbpFeatureManagement::ManageHostFeatures"), "\n");
      ɵɵadvance(2);
      ɵɵconditional(ctx.visibleFeatures ? 7 : -1);
    }
  },
  dependencies: [ReplaceableTemplateDirective, LocalizationPipe, FeatureManagementComponent],
  encapsulation: 2
});
var FeatureManagementTabComponent = _FeatureManagementTabComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureManagementTabComponent, [{
    type: Component,
    args: [{
      selector: "abp-feature-management-tab",
      imports: [ReplaceableTemplateDirective, LocalizationPipe, FeatureManagementComponent],
      template: `<p class="pt-2 text-wrap">{{ 'AbpFeatureManagement::ManageHostFeaturesText' | abpLocalization }}</p>\r
\r
<button class="btn btn-primary" type="button" (click)="openFeaturesModal()">\r
  <i class="me-1 fa fa-cog" aria-hidden="true"></i>\r
  {{ 'AbpFeatureManagement::ManageHostFeatures' | abpLocalization }}\r
</button>\r
@if (visibleFeatures) {\r
  <abp-feature-management\r
    *abpReplaceableTemplate="{\r
      inputs: {\r
        providerName: { value: 'T' },\r
        providerKey: { value: providerKey },\r
        visible: { value: visibleFeatures, twoWay: true }\r
      },\r
      outputs: { visibleChange: onVisibleFeaturesChange },\r
      componentKey: 'FeatureManagement.FeatureManagementComponent'\r
    }"\r
    [(visible)]="visibleFeatures"\r
    providerName="T"\r
    [providerKey]="providerKey"\r
  >\r
  </abp-feature-management>\r
}\r
`
    }]
  }], null, null);
})();
var FEATURE_MANAGEMENT_SETTINGS_PROVIDERS = [provideAppInitializer(() => {
  configureSettingTabs();
})];
function configureSettingTabs() {
  const settingtabs = inject(SettingTabsService);
  settingtabs.add([{
    name: "AbpFeatureManagement::Permission:FeatureManagement",
    order: 100,
    requiredPolicy: "FeatureManagement.ManageHostFeatures",
    component: FeatureManagementTabComponent
  }]);
}
function provideFeatureManagementConfig() {
  return makeEnvironmentProviders([FEATURE_MANAGEMENT_SETTINGS_PROVIDERS]);
}
var FEATURE_MANAGEMENT_EXPORTS = [FeatureManagementComponent, FreeTextInputDirective, FeatureManagementTabComponent];
var _FeatureManagementModule = class _FeatureManagementModule {
  static forRoot() {
    return {
      ngModule: _FeatureManagementModule,
      providers: [provideFeatureManagementConfig()]
    };
  }
};
_FeatureManagementModule.ɵfac = function FeatureManagementModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FeatureManagementModule)();
};
_FeatureManagementModule.ɵmod = ɵɵdefineNgModule({
  type: _FeatureManagementModule,
  imports: [FeatureManagementComponent, FreeTextInputDirective, FeatureManagementTabComponent],
  exports: [FeatureManagementComponent, FreeTextInputDirective, FeatureManagementTabComponent]
});
_FeatureManagementModule.ɵinj = ɵɵdefineInjector({
  imports: [FeatureManagementComponent, FeatureManagementTabComponent]
});
var FeatureManagementModule = _FeatureManagementModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureManagementModule, [{
    type: NgModule,
    args: [{
      imports: [...FEATURE_MANAGEMENT_EXPORTS],
      exports: [...FEATURE_MANAGEMENT_EXPORTS]
    }]
  }], null, null);
})();

export {
  INPUT_TYPES,
  FreeTextInputDirective,
  FeatureManagementComponent,
  FeatureManagementTabComponent,
  FEATURE_MANAGEMENT_SETTINGS_PROVIDERS,
  configureSettingTabs,
  provideFeatureManagementConfig,
  FEATURE_MANAGEMENT_EXPORTS,
  FeatureManagementModule
};
//# sourceMappingURL=chunk-YANSALK6.js.map
