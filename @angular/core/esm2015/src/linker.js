/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/linker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Public API for compiler
export { COMPILER_OPTIONS, Compiler, CompilerFactory, ModuleWithComponentFactories } from './linker/compiler';
export { ComponentFactory, ComponentRef } from './linker/component_factory';
export { ComponentFactoryResolver } from './linker/component_factory_resolver';
export { ElementRef } from './linker/element_ref';
export { NgModuleFactory, NgModuleRef } from './linker/ng_module_factory';
export { NgModuleFactoryLoader, getModuleFactory } from './linker/ng_module_factory_loader';
export { QueryList } from './linker/query_list';
export { SystemJsNgModuleLoader, SystemJsNgModuleLoaderConfig } from './linker/system_js_ng_module_factory_loader';
export { TemplateRef } from './linker/template_ref';
export { ViewContainerRef } from './linker/view_container_ref';
export { EmbeddedViewRef, ViewRef } from './linker/view_ref';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbGlua2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBbUIsNEJBQTRCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM3SCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDMUUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDN0UsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxlQUFlLEVBQUUsV0FBVyxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDeEUsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUYsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxzQkFBc0IsRUFBRSw0QkFBNEIsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ2pILE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsZUFBZSxFQUFFLE9BQU8sRUFBQyxNQUFNLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBQdWJsaWMgQVBJIGZvciBjb21waWxlclxuZXhwb3J0IHtDT01QSUxFUl9PUFRJT05TLCBDb21waWxlciwgQ29tcGlsZXJGYWN0b3J5LCBDb21waWxlck9wdGlvbnMsIE1vZHVsZVdpdGhDb21wb25lbnRGYWN0b3JpZXN9IGZyb20gJy4vbGlua2VyL2NvbXBpbGVyJztcbmV4cG9ydCB7Q29tcG9uZW50RmFjdG9yeSwgQ29tcG9uZW50UmVmfSBmcm9tICcuL2xpbmtlci9jb21wb25lbnRfZmFjdG9yeSc7XG5leHBvcnQge0NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcn0gZnJvbSAnLi9saW5rZXIvY29tcG9uZW50X2ZhY3RvcnlfcmVzb2x2ZXInO1xuZXhwb3J0IHtFbGVtZW50UmVmfSBmcm9tICcuL2xpbmtlci9lbGVtZW50X3JlZic7XG5leHBvcnQge05nTW9kdWxlRmFjdG9yeSwgTmdNb2R1bGVSZWZ9IGZyb20gJy4vbGlua2VyL25nX21vZHVsZV9mYWN0b3J5JztcbmV4cG9ydCB7TmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBnZXRNb2R1bGVGYWN0b3J5fSBmcm9tICcuL2xpbmtlci9uZ19tb2R1bGVfZmFjdG9yeV9sb2FkZXInO1xuZXhwb3J0IHtRdWVyeUxpc3R9IGZyb20gJy4vbGlua2VyL3F1ZXJ5X2xpc3QnO1xuZXhwb3J0IHtTeXN0ZW1Kc05nTW9kdWxlTG9hZGVyLCBTeXN0ZW1Kc05nTW9kdWxlTG9hZGVyQ29uZmlnfSBmcm9tICcuL2xpbmtlci9zeXN0ZW1fanNfbmdfbW9kdWxlX2ZhY3RvcnlfbG9hZGVyJztcbmV4cG9ydCB7VGVtcGxhdGVSZWZ9IGZyb20gJy4vbGlua2VyL3RlbXBsYXRlX3JlZic7XG5leHBvcnQge1ZpZXdDb250YWluZXJSZWZ9IGZyb20gJy4vbGlua2VyL3ZpZXdfY29udGFpbmVyX3JlZic7XG5leHBvcnQge0VtYmVkZGVkVmlld1JlZiwgVmlld1JlZn0gZnJvbSAnLi9saW5rZXIvdmlld19yZWYnO1xuIl19