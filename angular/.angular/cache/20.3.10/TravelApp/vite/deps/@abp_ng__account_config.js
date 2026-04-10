import {
  NAVIGATE_TO_MANAGE_PROFILE,
  RoutesService
} from "./chunk-DOR275RM.js";
import {
  Router
} from "./chunk-5IKKBTZJ.js";
import "./chunk-XC2BQRUA.js";
import "./chunk-TH3T7PKV.js";
import "./chunk-UMUGP7NI.js";
import "./chunk-6NN5GPUG.js";
import {
  Injector,
  NgModule,
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-O2RWE6FT.js";
import "./chunk-7K3IQTKT.js";

// node_modules/@abp/ng.account/fesm2022/abp-ng.account-config.mjs
var ACCOUNT_ROUTE_PROVIDERS = [provideAppInitializer(() => {
  configureRoutes();
})];
function configureRoutes() {
  const routes = inject(RoutesService);
  routes.add([{
    path: void 0,
    name: "AbpAccount::Menu:Account",
    invisible: true,
    layout: "account",
    breadcrumbText: "AbpAccount::Menu:Account",
    iconClass: "bi bi-person-fill-gear",
    order: 1
  }, {
    path: "/account/login",
    name: "AbpAccount::Login",
    parentName: "AbpAccount::Menu:Account",
    layout: "account",
    order: 1
  }, {
    path: "/account/register",
    name: "AbpAccount::Register",
    parentName: "AbpAccount::Menu:Account",
    layout: "account",
    order: 2
  }, {
    path: "/account/manage",
    name: "AbpAccount::MyAccount",
    parentName: "AbpAccount::Menu:Account",
    layout: "application",
    breadcrumbText: "AbpAccount::Manage",
    iconClass: "bi bi-kanban-fill",
    order: 3
  }, {
    path: "/account/forgot-password",
    parentName: "AbpAccount::Menu:Account",
    name: "AbpAccount::ForgotPassword",
    layout: "account",
    invisible: true
  }, {
    path: "/account/reset-password",
    parentName: "AbpAccount::Menu:Account",
    name: "AbpAccount::ResetPassword",
    layout: "account",
    invisible: true
  }]);
}
function navigateToManageProfileFactory(injector) {
  return () => {
    const router = injector.get(Router);
    const routes = injector.get(RoutesService);
    const {
      path
    } = routes.find(
      (item) => item.name === "AbpAccount::MyAccount"
      /* eAccountRouteNames.ManageProfile */
    );
    router.navigateByUrl(path);
  };
}
function provideAccountConfig() {
  return makeEnvironmentProviders([ACCOUNT_ROUTE_PROVIDERS, {
    provide: NAVIGATE_TO_MANAGE_PROFILE,
    useFactory: navigateToManageProfileFactory,
    deps: [Injector]
  }]);
}
var _AccountConfigModule = class _AccountConfigModule {
  static forRoot() {
    return {
      ngModule: _AccountConfigModule,
      providers: [provideAccountConfig()]
    };
  }
};
_AccountConfigModule.ɵfac = function AccountConfigModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AccountConfigModule)();
};
_AccountConfigModule.ɵmod = ɵɵdefineNgModule({
  type: _AccountConfigModule
});
_AccountConfigModule.ɵinj = ɵɵdefineInjector({});
var AccountConfigModule = _AccountConfigModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccountConfigModule, [{
    type: NgModule
  }], null, null);
})();
export {
  ACCOUNT_ROUTE_PROVIDERS,
  AccountConfigModule,
  configureRoutes,
  navigateToManageProfileFactory,
  provideAccountConfig
};
//# sourceMappingURL=@abp_ng__account_config.js.map
