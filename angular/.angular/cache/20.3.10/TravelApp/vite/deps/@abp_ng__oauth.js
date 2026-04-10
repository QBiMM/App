import {
  OAuthErrorEvent,
  OAuthInfoEvent,
  OAuthModule,
  OAuthService,
  OAuthStorage
} from "./chunk-JRVZSIZ4.js";
import {
  AbpLocalStorageService,
  AbpWindowService,
  AbstractAuthErrorFilter,
  ApiInterceptor,
  AuthErrorFilterService,
  AuthGuard,
  AuthService,
  CHECK_AUTHENTICATION_STATE_FN_KEY,
  CORE_OPTIONS,
  ConfigStateService,
  EnvironmentService,
  HttpErrorReporterService,
  HttpWaitService,
  IS_EXTERNAL_REQUEST,
  NAVIGATE_TO_MANAGE_PROFILE,
  PIPE_TO_LOGIN_FN_KEY,
  SessionStateService,
  TENANT_KEY,
  authGuard,
  collectionCompare,
  noop
} from "./chunk-DOR275RM.js";
import {
  Router
} from "./chunk-5IKKBTZJ.js";
import "./chunk-XC2BQRUA.js";
import {
  HTTP_INTERCEPTORS,
  HttpHeaders
} from "./chunk-TH3T7PKV.js";
import "./chunk-UMUGP7NI.js";
import "./chunk-6NN5GPUG.js";
import {
  EMPTY,
  Inject,
  Injectable,
  Injector,
  NgModule,
  filter,
  finalize,
  from,
  inject,
  lastValueFrom,
  makeEnvironmentProviders,
  map,
  of,
  pipe,
  provideAppInitializer,
  setClassMetadata,
  signal,
  switchMap,
  take,
  tap,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory,
  ɵɵinject
} from "./chunk-O2RWE6FT.js";
import {
  __async,
  __privateAdd,
  __privateGet,
  __privateSet,
  __spreadValues,
  __superGet
} from "./chunk-7K3IQTKT.js";

// node_modules/@abp/ng.oauth/fesm2022/abp-ng.oauth.mjs
var NavigateToManageProfileProvider = {
  provide: NAVIGATE_TO_MANAGE_PROFILE,
  useFactory: () => {
    const environment = inject(EnvironmentService);
    return () => {
      const env = environment.getEnvironment();
      if (!env.oAuthConfig) {
        console.warn("The oAuthConfig env is missing on environment.ts");
        return;
      }
      const {
        issuer
      } = env.oAuthConfig;
      const path = issuer.endsWith("/") ? issuer : `${issuer}/`;
      window.open(`${path}Account/Manage?returnUrl=${window.location.href}`, "_self");
    };
  }
};
var _AbpOAuthGuard = class _AbpOAuthGuard {
  constructor() {
    this.oAuthService = inject(OAuthService);
    this.authService = inject(AuthService);
  }
  canActivate(route, state) {
    const hasValidAccessToken = this.oAuthService.hasValidAccessToken();
    if (hasValidAccessToken) {
      return true;
    }
    const params = {
      returnUrl: state.url
    };
    this.authService.navigateToLogin(params);
    return false;
  }
};
_AbpOAuthGuard.ɵfac = function AbpOAuthGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbpOAuthGuard)();
};
_AbpOAuthGuard.ɵprov = ɵɵdefineInjectable({
  token: _AbpOAuthGuard,
  factory: _AbpOAuthGuard.ɵfac,
  providedIn: "root"
});
var AbpOAuthGuard = _AbpOAuthGuard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpOAuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var abpOAuthGuard = (route, state) => {
  const oAuthService = inject(OAuthService);
  const authService = inject(AuthService);
  const hasValidAccessToken = oAuthService.hasValidAccessToken();
  if (hasValidAccessToken) {
    return true;
  }
  const params = {
    returnUrl: state.url
  };
  authService.navigateToLogin(params);
  return false;
};
var _OAuthConfigurationHandler = class _OAuthConfigurationHandler {
  constructor(oAuthService, environmentService, options) {
    this.oAuthService = oAuthService;
    this.environmentService = environmentService;
    this.options = options;
    this.listenToSetEnvironment();
  }
  listenToSetEnvironment() {
    this.environmentService.createOnUpdateStream((state) => state).pipe(map((environment) => environment.oAuthConfig), filter((config) => !collectionCompare(config, this.options.environment.oAuthConfig))).subscribe((config) => {
      this.oAuthService.configure(config);
    });
  }
};
_OAuthConfigurationHandler.ɵfac = function OAuthConfigurationHandler_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OAuthConfigurationHandler)(ɵɵinject(OAuthService), ɵɵinject(EnvironmentService), ɵɵinject(CORE_OPTIONS));
};
_OAuthConfigurationHandler.ɵprov = ɵɵdefineInjectable({
  token: _OAuthConfigurationHandler,
  factory: _OAuthConfigurationHandler.ɵfac,
  providedIn: "root"
});
var OAuthConfigurationHandler = _OAuthConfigurationHandler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OAuthConfigurationHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OAuthService
  }, {
    type: EnvironmentService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [CORE_OPTIONS]
    }]
  }], null);
})();
var _OAuthApiInterceptor = class _OAuthApiInterceptor {
  constructor(oAuthService, sessionState, httpWaitService, tenantKey) {
    this.oAuthService = oAuthService;
    this.sessionState = sessionState;
    this.httpWaitService = httpWaitService;
    this.tenantKey = tenantKey;
  }
  intercept(request, next) {
    this.httpWaitService.addRequest(request);
    const isExternalRequest = request.context?.get(IS_EXTERNAL_REQUEST);
    const newRequest = isExternalRequest ? request : request.clone({
      setHeaders: this.getAdditionalHeaders(request.headers)
    });
    return next.handle(newRequest).pipe(finalize(() => this.httpWaitService.deleteRequest(request)));
  }
  getAdditionalHeaders(existingHeaders) {
    const headers = {};
    const token = this.oAuthService.getAccessToken();
    if (!existingHeaders?.has("Authorization") && token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const lang = this.sessionState.getLanguage();
    if (!existingHeaders?.has("Accept-Language") && lang) {
      headers["Accept-Language"] = lang;
    }
    const tenant = this.sessionState.getTenant();
    if (!existingHeaders?.has(this.tenantKey) && tenant?.id) {
      headers[this.tenantKey] = tenant.id;
    }
    headers["X-Requested-With"] = "XMLHttpRequest";
    return headers;
  }
};
_OAuthApiInterceptor.ɵfac = function OAuthApiInterceptor_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _OAuthApiInterceptor)(ɵɵinject(OAuthService), ɵɵinject(SessionStateService), ɵɵinject(HttpWaitService), ɵɵinject(TENANT_KEY));
};
_OAuthApiInterceptor.ɵprov = ɵɵdefineInjectable({
  token: _OAuthApiInterceptor,
  factory: _OAuthApiInterceptor.ɵfac,
  providedIn: "root"
});
var OAuthApiInterceptor = _OAuthApiInterceptor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OAuthApiInterceptor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OAuthService
  }, {
    type: SessionStateService
  }, {
    type: HttpWaitService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [TENANT_KEY]
    }]
  }], null);
})();
var oAuthStorage = localStorage;
function clearOAuthStorage(storage = oAuthStorage) {
  const keys = ["access_token", "id_token", "refresh_token", "nonce", "PKCE_verifier", "expires_at", "id_token_claims_obj", "id_token_expires_at", "id_token_stored_at", "access_token_stored_at", "granted_scopes", "session_state"];
  keys.forEach((key) => storage.removeItem(key));
}
function storageFactory() {
  return oAuthStorage;
}
var _rememberMe;
var _RememberMeService = class _RememberMeService {
  constructor() {
    __privateAdd(this, _rememberMe);
    __privateSet(this, _rememberMe, "remember_me");
    this.localStorageService = inject(AbpLocalStorageService);
  }
  set(remember) {
    this.localStorageService.setItem(__privateGet(this, _rememberMe), JSON.stringify(remember));
  }
  remove() {
    this.localStorageService.removeItem(__privateGet(this, _rememberMe));
  }
  get() {
    return Boolean(JSON.parse(this.localStorageService.getItem(__privateGet(this, _rememberMe)) || "false"));
  }
  getFromToken(accessToken) {
    const tokenBody = accessToken.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    try {
      const parsedToken = JSON.parse(atob(tokenBody));
      return Boolean(parsedToken[__privateGet(this, _rememberMe)]);
    } catch {
      return false;
    }
  }
};
_rememberMe = new WeakMap();
_RememberMeService.ɵfac = function RememberMeService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RememberMeService)();
};
_RememberMeService.ɵprov = ɵɵdefineInjectable({
  token: _RememberMeService,
  factory: _RememberMeService.ɵfac,
  providedIn: "root"
});
var RememberMeService = _RememberMeService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RememberMeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var pipeToLogin = function(params, injector) {
  const configState = injector.get(ConfigStateService);
  const router = injector.get(Router);
  const rememberMeService = injector.get(RememberMeService);
  const authService = injector.get(AuthService);
  return pipe(switchMap(() => configState.refreshAppState()), tap(() => {
    rememberMeService.set(params.rememberMe || rememberMeService.get() || rememberMeService.getFromToken(authService.getAccessToken()));
    if (params.redirectUrl) router.navigate([params.redirectUrl]);
  }));
};
function isTokenExpired(expireDate) {
  const currentDate = (/* @__PURE__ */ new Date()).getTime();
  return expireDate < currentDate;
}
var checkAccessToken = function(injector) {
  const configState = injector.get(ConfigStateService);
  const oAuth = injector.get(OAuthService);
  if (oAuth.hasValidAccessToken() && !configState.getDeep("currentUser.id")) {
    clearOAuthStorage();
  }
};
var AuthFlowStrategy = class {
  constructor(injector) {
    this.injector = injector;
    this.catchError = (err) => {
      this.httpErrorReporter.reportError(err);
      return of(null);
    };
    this.httpErrorReporter = injector.get(HttpErrorReporterService);
    this.environment = injector.get(EnvironmentService);
    this.configState = injector.get(ConfigStateService);
    this.oAuthService = injector.get(OAuthService);
    this.sessionState = injector.get(SessionStateService);
    this.localStorageService = injector.get(AbpLocalStorageService);
    this.oAuthConfig = this.environment.getEnvironment().oAuthConfig || {};
    this.tenantKey = injector.get(TENANT_KEY);
    this.router = injector.get(Router);
    this.oAuthErrorFilterService = injector.get(OAuthErrorFilterService);
    this.rememberMeService = injector.get(RememberMeService);
    this.windowService = injector.get(AbpWindowService);
    this.listenToOauthErrors();
  }
  init() {
    return __async(this, null, function* () {
      if (this.oAuthConfig.clientId) {
        const shouldClear = shouldStorageClear(this.oAuthConfig.clientId, oAuthStorage);
        if (shouldClear) clearOAuthStorage(oAuthStorage);
      }
      this.oAuthService.configure(this.oAuthConfig);
      this.oAuthService.events.pipe(filter((event) => event.type === "token_refresh_error")).subscribe(() => this.navigateToLogin());
      this.navigateToPreviousUrl();
      return this.oAuthService.loadDiscoveryDocument().then(() => {
        const isTokenExpire = isTokenExpired(this.oAuthService.getAccessTokenExpiration());
        if (isTokenExpire && this.oAuthService.getRefreshToken()) {
          return this.refreshToken();
        }
        return Promise.resolve();
      }).catch(this.catchError);
    });
  }
  navigateToPreviousUrl() {
    const {
      responseType
    } = this.oAuthConfig;
    if (responseType === "code") {
      this.oAuthService.events.pipe(filter((event) => event.type === "token_received" && !!this.oAuthService.state), take(1), map(() => {
        const redirectUri = decodeURIComponent(this.oAuthService.state);
        if (redirectUri && redirectUri !== "/") {
          return redirectUri;
        }
        return "/";
      }), switchMap((redirectUri) => this.configState.getOne$("currentUser").pipe(filter((user) => !!user?.isAuthenticated), tap(() => this.router.navigateByUrl(redirectUri))))).subscribe();
    }
  }
  refreshToken() {
    return this.oAuthService.refreshToken().catch(() => clearOAuthStorage());
  }
  listenToOauthErrors() {
    this.oAuthService.events.pipe(filter((event) => event instanceof OAuthErrorEvent), tap((err) => {
      const shouldSkip = this.oAuthErrorFilterService.run(err);
      if (!shouldSkip) {
        clearOAuthStorage();
      }
    }), switchMap(() => this.configState.refreshAppState())).subscribe();
  }
};
function shouldStorageClear(clientId, storage) {
  const key = "abpOAuthClientId";
  if (!storage.getItem(key)) {
    storage.setItem(key, clientId);
    return false;
  }
  const shouldClear = storage.getItem(key) !== clientId;
  if (shouldClear) storage.setItem(key, clientId);
  return shouldClear;
}
var AuthCodeFlowStrategy = class _AuthCodeFlowStrategy extends AuthFlowStrategy {
  constructor() {
    super(...arguments);
    this.isInternalAuth = false;
  }
  init() {
    return __async(this, null, function* () {
      this.checkRememberMeOption();
      this.listenToTokenReceived();
      return __superGet(_AuthCodeFlowStrategy.prototype, this, "init").call(this).then(() => this.oAuthService.tryLogin().catch(noop)).then(() => this.oAuthService.setupAutomaticSilentRefresh());
    });
  }
  checkRememberMeOption() {
    const accessToken = this.oAuthService.getAccessToken();
    const isTokenExpire = isTokenExpired(this.oAuthService.getAccessTokenExpiration());
    let rememberMe = this.rememberMeService.get();
    if (accessToken && !rememberMe) {
      const rememberMeValue = this.rememberMeService.getFromToken(accessToken);
      this.rememberMeService.set(!!rememberMeValue);
    }
    rememberMe = this.rememberMeService.get();
    if (accessToken && isTokenExpire && !rememberMe) {
      this.rememberMeService.remove();
      this.oAuthService.logOut();
    }
  }
  getCultureParams(queryParams) {
    const lang = this.sessionState.getLanguage();
    const culture = {
      culture: lang,
      "ui-culture": lang
    };
    return __spreadValues(__spreadValues({}, lang && culture), queryParams);
  }
  setUICulture() {
    const urlParams = new URLSearchParams(window.location.search);
    this.configState.uiCultureFromAuthCodeFlow = urlParams.get("ui-culture");
  }
  replaceURLParams() {
    const location = this.windowService.window.location;
    const history = this.windowService.window.history;
    const query = location.search.replace(/([?&])iss=[^&]*&?/, "$1").replace(/([?&])culture=[^&]*&?/, "$1").replace(/([?&])ui-culture=[^&]*&?/, "$1").replace(/[?&]+$/, "");
    const href = location.origin + location.pathname + query + location.hash;
    history.replaceState(null, "", href);
  }
  listenToTokenReceived() {
    this.oAuthService.events.pipe(filter((event) => event.type === "token_received"), tap(() => {
      this.setUICulture();
      this.replaceURLParams();
    }), take(1)).subscribe();
  }
  navigateToLogin(queryParams) {
    let additionalState = "";
    if (queryParams?.returnUrl) {
      additionalState = queryParams.returnUrl;
    }
    const cultureParams = this.getCultureParams(queryParams);
    this.oAuthService.initCodeFlow(additionalState, cultureParams);
  }
  checkIfInternalAuth(queryParams) {
    this.oAuthService.initCodeFlow("", this.getCultureParams(queryParams));
    return false;
  }
  logout(queryParams) {
    this.rememberMeService.remove();
    if (queryParams?.noRedirectToLogoutUrl) {
      this.router.navigate(["/"]);
      return from(this.oAuthService.revokeTokenAndLogout(true));
    }
    return from(this.oAuthService.revokeTokenAndLogout(this.getCultureParams(queryParams)));
  }
  login(queryParams) {
    this.oAuthService.initCodeFlow("", this.getCultureParams(queryParams));
    return of(null);
  }
};
var AuthPasswordFlowStrategy = class _AuthPasswordFlowStrategy extends AuthFlowStrategy {
  constructor() {
    super(...arguments);
    this.isInternalAuth = true;
  }
  listenToTokenExpiration() {
    this.oAuthService.events.pipe(filter((event) => event instanceof OAuthInfoEvent && event.type === "token_expires" && event.info === "access_token")).subscribe(() => {
      if (this.oAuthService.getRefreshToken()) {
        this.refreshToken();
      } else {
        this.oAuthService.logOut();
        this.rememberMeService.remove();
        this.configState.refreshAppState().subscribe();
      }
    });
  }
  init() {
    return __async(this, null, function* () {
      this.checkRememberMeOption();
      return __superGet(_AuthPasswordFlowStrategy.prototype, this, "init").call(this).then(() => this.listenToTokenExpiration());
    });
  }
  checkRememberMeOption() {
    const accessToken = this.oAuthService.getAccessToken();
    const isTokenExpire = isTokenExpired(this.oAuthService.getAccessTokenExpiration());
    const rememberMe = this.rememberMeService.get();
    if (accessToken && isTokenExpire && !rememberMe) {
      this.rememberMeService.remove();
      this.oAuthService.logOut();
    }
  }
  navigateToLogin(queryParams) {
    const router = this.injector.get(Router);
    return router.navigate(["/account/login"], {
      queryParams
    });
  }
  checkIfInternalAuth() {
    return true;
  }
  login(params) {
    const tenant = this.sessionState.getTenant();
    return from(this.oAuthService.fetchTokenUsingPasswordFlow(params.username, params.password, new HttpHeaders(__spreadValues({}, tenant && tenant.id && {
      [this.tenantKey]: tenant.id
    })))).pipe(pipeToLogin(params, this.injector));
  }
  logout() {
    const router = this.injector.get(Router);
    const noRedirectToLogoutUrl = true;
    return from(this.oAuthService.revokeTokenAndLogout(noRedirectToLogoutUrl)).pipe(switchMap(() => this.configState.refreshAppState()), tap(() => {
      this.rememberMeService.remove();
      router.navigateByUrl("/");
    }));
  }
  refreshToken() {
    return this.oAuthService.refreshToken().catch(() => {
      clearOAuthStorage();
      this.rememberMeService.remove();
    });
  }
};
var AUTH_FLOW_STRATEGY = {
  Code(injector) {
    return new AuthCodeFlowStrategy(injector);
  },
  Password(injector) {
    return new AuthPasswordFlowStrategy(injector);
  }
};
var _AbpOAuthService = class _AbpOAuthService {
  get oidc() {
    return this.oAuthService.oidc;
  }
  set oidc(value) {
    this.oAuthService.oidc = value;
  }
  get isInternalAuth() {
    return this.strategy.isInternalAuth;
  }
  constructor(injector) {
    this.injector = injector;
    this.oAuthService = this.injector.get(OAuthService);
  }
  init() {
    return __async(this, null, function* () {
      const environmentService = this.injector.get(EnvironmentService);
      const result$ = environmentService.getEnvironment$().pipe(map((env) => env?.oAuthConfig), filter(Boolean), tap((oAuthConfig) => {
        this.strategy = oAuthConfig.responseType === "code" ? AUTH_FLOW_STRATEGY.Code(this.injector) : AUTH_FLOW_STRATEGY.Password(this.injector);
      }), switchMap(() => from(this.strategy.init())), take(1));
      return yield lastValueFrom(result$);
    });
  }
  logout(queryParams) {
    if (!this.strategy) {
      return EMPTY;
    }
    return this.strategy.logout(queryParams);
  }
  navigateToLogin(queryParams) {
    this.strategy.navigateToLogin(queryParams);
  }
  login(params) {
    return this.strategy.login(params);
  }
  get isAuthenticated() {
    return this.oAuthService.hasValidAccessToken();
  }
  loginUsingGrant(grantType, parameters, headers) {
    const {
      clientId: client_id,
      dummyClientSecret: client_secret
    } = this.oAuthService;
    const access_token = this.oAuthService.getAccessToken();
    const p = __spreadValues({
      access_token,
      grant_type: grantType,
      client_id
    }, parameters);
    if (client_secret) {
      p["client_secret"] = client_secret;
    }
    return this.oAuthService.fetchTokenUsingGrant(grantType, p, headers);
  }
  getRefreshToken() {
    return this.oAuthService.getRefreshToken();
  }
  getAccessToken() {
    return this.oAuthService.getAccessToken();
  }
  refreshToken() {
    return this.oAuthService.refreshToken();
  }
  getAccessTokenExpiration() {
    return this.oAuthService.getAccessTokenExpiration();
  }
};
_AbpOAuthService.ɵfac = function AbpOAuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbpOAuthService)(ɵɵinject(Injector));
};
_AbpOAuthService.ɵprov = ɵɵdefineInjectable({
  token: _AbpOAuthService,
  factory: _AbpOAuthService.ɵfac,
  providedIn: "root"
});
var AbpOAuthService = _AbpOAuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpOAuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Injector
  }], null);
})();
var _OAuthErrorFilterService = class _OAuthErrorFilterService extends AbstractAuthErrorFilter {
  constructor() {
    super(...arguments);
    this._filters = signal([]);
    this.filters = this._filters.asReadonly();
  }
  get(id) {
    return this._filters().find(({
      id: _id
    }) => _id === id);
  }
  add(filter2) {
    this._filters.update((items) => [...items, filter2]);
  }
  patch(item) {
    const _item = this.filters().find(({
      id
    }) => id === item.id);
    if (!_item) {
      return;
    }
    Object.assign(_item, item);
  }
  remove(id) {
    const item = this.filters().find(({
      id: _id
    }) => _id === id);
    if (!item) {
      return;
    }
    this._filters.update((items) => items.filter(({
      id: _id
    }) => _id !== id));
  }
  run(event) {
    return this.filters().filter(({
      executable
    }) => !!executable).map(({
      execute
    }) => execute(event)).some((item) => item);
  }
};
_OAuthErrorFilterService.ɵfac = /* @__PURE__ */ (() => {
  let ɵOAuthErrorFilterService_BaseFactory;
  return function OAuthErrorFilterService_Factory(__ngFactoryType__) {
    return (ɵOAuthErrorFilterService_BaseFactory || (ɵOAuthErrorFilterService_BaseFactory = ɵɵgetInheritedFactory(_OAuthErrorFilterService)))(__ngFactoryType__ || _OAuthErrorFilterService);
  };
})();
_OAuthErrorFilterService.ɵprov = ɵɵdefineInjectable({
  token: _OAuthErrorFilterService,
  factory: _OAuthErrorFilterService.ɵfac,
  providedIn: "root"
});
var OAuthErrorFilterService = _OAuthErrorFilterService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OAuthErrorFilterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function provideAbpOAuth() {
  const providers = [{
    provide: AuthService,
    useClass: AbpOAuthService
  }, {
    provide: AuthGuard,
    useClass: AbpOAuthGuard
  }, {
    provide: authGuard,
    useValue: abpOAuthGuard
  }, {
    provide: ApiInterceptor,
    useClass: OAuthApiInterceptor
  }, {
    provide: PIPE_TO_LOGIN_FN_KEY,
    useValue: pipeToLogin
  }, {
    provide: CHECK_AUTHENTICATION_STATE_FN_KEY,
    useValue: checkAccessToken
  }, {
    provide: HTTP_INTERCEPTORS,
    useExisting: ApiInterceptor,
    multi: true
  }, NavigateToManageProfileProvider, provideAppInitializer(() => {
    inject(OAuthConfigurationHandler);
  }), OAuthModule.forRoot().providers, {
    provide: OAuthStorage,
    useClass: AbpLocalStorageService
  }, {
    provide: AuthErrorFilterService,
    useExisting: OAuthErrorFilterService
  }];
  return makeEnvironmentProviders(providers);
}
var _AbpOAuthModule = class _AbpOAuthModule {
  static forRoot() {
    return {
      ngModule: _AbpOAuthModule,
      providers: [provideAbpOAuth()]
    };
  }
};
_AbpOAuthModule.ɵfac = function AbpOAuthModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AbpOAuthModule)();
};
_AbpOAuthModule.ɵmod = ɵɵdefineNgModule({
  type: _AbpOAuthModule
});
_AbpOAuthModule.ɵinj = ɵɵdefineInjector({});
var AbpOAuthModule = _AbpOAuthModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbpOAuthModule, [{
    type: NgModule
  }], null, null);
})();
export {
  AUTH_FLOW_STRATEGY,
  AbpOAuthGuard,
  AbpOAuthModule,
  AbpOAuthService,
  AuthCodeFlowStrategy,
  AuthFlowStrategy,
  AuthPasswordFlowStrategy,
  NavigateToManageProfileProvider,
  OAuthApiInterceptor,
  OAuthConfigurationHandler,
  OAuthErrorFilterService,
  RememberMeService,
  abpOAuthGuard,
  checkAccessToken,
  clearOAuthStorage,
  isTokenExpired,
  oAuthStorage,
  pipeToLogin,
  provideAbpOAuth,
  storageFactory
};
//# sourceMappingURL=@abp_ng__oauth.js.map
