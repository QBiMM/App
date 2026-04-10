import {
  RoutesService
} from "./chunk-DOR275RM.js";
import "./chunk-5IKKBTZJ.js";
import "./chunk-XC2BQRUA.js";
import "./chunk-TH3T7PKV.js";
import "./chunk-UMUGP7NI.js";
import "./chunk-6NN5GPUG.js";
import {
  NgModule,
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-O2RWE6FT.js";
import "./chunk-7K3IQTKT.js";

// node_modules/@abp/ng.identity/fesm2022/abp-ng.identity-config.mjs
var IDENTITY_ROUTE_PROVIDERS = [provideAppInitializer(() => {
  configureRoutes();
})];
function configureRoutes() {
  const routesService = inject(RoutesService);
  routesService.add([{
    path: void 0,
    name: "AbpIdentity::Menu:IdentityManagement",
    parentName: "AbpUiNavigation::Menu:Administration",
    requiredPolicy: "AbpIdentity.Roles || AbpIdentity.Users",
    iconClass: "fa fa-id-card-o",
    layout: "application",
    order: 1
  }, {
    path: "/identity/roles",
    name: "AbpIdentity::Roles",
    parentName: "AbpIdentity::Menu:IdentityManagement",
    requiredPolicy: "AbpIdentity.Roles",
    order: 1
  }, {
    path: "/identity/users",
    name: "AbpIdentity::Users",
    parentName: "AbpIdentity::Menu:IdentityManagement",
    requiredPolicy: "AbpIdentity.Users",
    order: 2
  }]);
}
function provideIdentityConfig() {
  return makeEnvironmentProviders([IDENTITY_ROUTE_PROVIDERS]);
}
var _IdentityConfigModule = class _IdentityConfigModule {
  static forRoot() {
    return {
      ngModule: _IdentityConfigModule,
      providers: [provideIdentityConfig()]
    };
  }
};
_IdentityConfigModule.ɵfac = function IdentityConfigModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IdentityConfigModule)();
};
_IdentityConfigModule.ɵmod = ɵɵdefineNgModule({
  type: _IdentityConfigModule
});
_IdentityConfigModule.ɵinj = ɵɵdefineInjector({});
var IdentityConfigModule = _IdentityConfigModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IdentityConfigModule, [{
    type: NgModule
  }], null, null);
})();
export {
  IDENTITY_ROUTE_PROVIDERS,
  IdentityConfigModule,
  configureRoutes,
  provideIdentityConfig
};
//# sourceMappingURL=@abp_ng__identity_config.js.map
