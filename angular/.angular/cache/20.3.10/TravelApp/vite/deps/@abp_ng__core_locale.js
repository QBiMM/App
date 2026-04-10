import {
  differentLocales
} from "./chunk-DOR275RM.js";
import "./chunk-5IKKBTZJ.js";
import "./chunk-XC2BQRUA.js";
import "./chunk-TH3T7PKV.js";
import "./chunk-UMUGP7NI.js";
import "./chunk-6NN5GPUG.js";
import {
  isDevMode
} from "./chunk-O2RWE6FT.js";
import {
  __async,
  __spreadValues
} from "./chunk-7K3IQTKT.js";

// node_modules/@abp/ng.core/fesm2022/abp-ng.core-locale.mjs
var localeMap = {};
function loadLocale(locale) {
  const list = {
    "ar": () => import("./ar-LVYPDHSK.js"),
    "cs": () => import("./cs-TU2YY6V5.js"),
    "en": () => import("./@angular_common_locales_en.js"),
    "en-GB": () => import("./en-GB-VLYAT3SO.js"),
    "es": () => import("./@angular_common_locales_es.js"),
    "de": () => import("./de-7M6CDYY3.js"),
    "fi": () => import("./fi-N2IHBYCU.js"),
    "fr": () => import("./fr-KQBAMFHL.js"),
    "hi": () => import("./hi-S2NYI2DO.js"),
    "hu": () => import("./hu-ILFF3HRO.js"),
    "is": () => import("./is-2WUC53KZ.js"),
    "it": () => import("./it-2ZZHZVRM.js"),
    "pt": () => import("./pt-SGUUCXEK.js"),
    "tr": () => import("./tr-D3VFKCE7.js"),
    "ru": () => import("./ru-6JYQQYPT.js"),
    "ro": () => import("./ro-HLGOTORN.js"),
    "sk": () => import("./sk-4VGUXP2L.js"),
    "sl": () => import("./sl-3IQ46KUW.js"),
    "zh-Hans": () => import("./zh-Hans-HLQ6EWQH.js"),
    "zh-Hant": () => import("./zh-Hant-3Q47W5XK.js")
  };
  return list[locale]();
}
function registerLocaleForEsBuild({ cultureNameLocaleFileMap = {}, errorHandlerFn = defaultLocalErrorHandlerFn } = {}) {
  return (locale) => {
    localeMap = __spreadValues(__spreadValues({}, differentLocales), cultureNameLocaleFileMap);
    const l = localeMap[locale] || locale;
    const localeSupportList = "ar|cs|en|en-GB|es|de|fi|fr|hi|hu|is|it|pt|tr|ru|ro|sk|sl|zh-Hans|zh-Hant".split("|");
    if (localeSupportList.indexOf(l) == -1) {
      return;
    }
    return new Promise((resolve, reject) => {
      return loadLocale(l).then((val) => {
        let module = val;
        while (module.default) {
          module = module.default;
        }
        resolve({ default: module });
      }).catch((error) => {
        errorHandlerFn({
          resolve,
          reject,
          error,
          locale
        });
      });
    });
  };
}
function registerLocale({ cultureNameLocaleFileMap = {}, errorHandlerFn = defaultLocalErrorHandlerFn } = {}) {
  return (locale) => {
    localeMap = __spreadValues(__spreadValues({}, differentLocales), cultureNameLocaleFileMap);
    const localePath = `/locales/${localeMap[locale] || locale}`;
    return new Promise((resolve, reject) => {
      return import(
        /* webpackMode: "lazy-once" */
        /* webpackChunkName: "locales"*/
        /* webpackInclude: /[/\\](ar|cs|en|en-GB|es|de|fi|fr|hi|hu|is|it|pt|tr|ru|ro|sk|sl|zh-Hans|zh-Hant)\.(mjs|js)$/ */
        /* webpackExclude: /[/\\]global|extra/ */
        /* @vite-ignore */
        `@angular/common${localePath}`
      ).then((val) => {
        let module = val;
        while (module.default) {
          module = module.default;
        }
        resolve({ default: module });
      }).catch((error) => {
        errorHandlerFn({
          resolve,
          reject,
          error,
          locale
        });
      });
    });
  };
}
var extraLocales = {};
function storeLocaleData(data, localeId) {
  extraLocales[localeId] = data;
}
function defaultLocalErrorHandlerFn(_0) {
  return __async(this, arguments, function* ({ locale, resolve }) {
    if (extraLocales[locale]) {
      resolve({ default: extraLocales[localeMap[locale] || locale] });
      return;
    }
    if (isDevMode()) {
      console.error(`Cannot find the ${locale} locale file. You can check how can add new culture at https://abp.io/docs/latest/framework/ui/angular/localization#adding-a-new-culture`);
    }
    resolve();
  });
}
export {
  defaultLocalErrorHandlerFn,
  registerLocale,
  registerLocaleForEsBuild,
  storeLocaleData
};
//# sourceMappingURL=@abp_ng__core_locale.js.map
