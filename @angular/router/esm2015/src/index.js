/**
 * @fileoverview added by tsickle
 * Generated from: packages/router/src/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export { RouterLink, RouterLinkWithHref } from './directives/router_link';
export { RouterLinkActive } from './directives/router_link_active';
export { RouterOutlet } from './directives/router_outlet';
export { ActivationEnd, ActivationStart, ChildActivationEnd, ChildActivationStart, GuardsCheckEnd, GuardsCheckStart, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, ResolveEnd, ResolveStart, RouteConfigLoadEnd, RouteConfigLoadStart, RouterEvent, RoutesRecognized, Scroll } from './events';
export { RouteReuseStrategy } from './route_reuse_strategy';
export { Router } from './router';
export { ROUTES } from './router_config_loader';
export { ROUTER_CONFIGURATION, ROUTER_INITIALIZER, RouterModule, provideRoutes } from './router_module';
export { ChildrenOutletContexts, OutletContext } from './router_outlet_context';
export { NoPreloading, PreloadAllModules, PreloadingStrategy, RouterPreloader } from './router_preloader';
export { ActivatedRoute, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from './router_state';
export { PRIMARY_OUTLET, convertToParamMap } from './shared';
export { UrlHandlingStrategy } from './url_handling_strategy';
export { DefaultUrlSerializer, UrlSegment, UrlSegmentGroup, UrlSerializer, UrlTree } from './url_tree';
export { VERSION } from './version';
export { ɵEmptyOutletComponent, ɵROUTER_PROVIDERS, ɵflatten } from './private_export';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9yb3V0ZXIvc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBQyxVQUFVLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQVMsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUV6VCxPQUFPLEVBQXNCLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0UsT0FBTyxFQUErQixNQUFNLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDOUQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzlDLE9BQU8sRUFBa0Msb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZJLE9BQU8sRUFBQyxzQkFBc0IsRUFBRSxhQUFhLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RSxPQUFPLEVBQUMsWUFBWSxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hHLE9BQU8sRUFBQyxjQUFjLEVBQUUsc0JBQXNCLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEcsT0FBTyxFQUFDLGNBQWMsRUFBb0IsaUJBQWlCLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDN0UsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLG9CQUFvQixFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBQyxNQUFNLFlBQVksQ0FBQztBQUNyRyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBRWxDLG1FQUFjLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmV4cG9ydCB7RGF0YSwgRGVwcmVjYXRlZExvYWRDaGlsZHJlbiwgTG9hZENoaWxkcmVuLCBMb2FkQ2hpbGRyZW5DYWxsYmFjaywgUXVlcnlQYXJhbXNIYW5kbGluZywgUmVzb2x2ZURhdGEsIFJvdXRlLCBSb3V0ZXMsIFJ1bkd1YXJkc0FuZFJlc29sdmVycywgVXJsTWF0Y2hSZXN1bHQsIFVybE1hdGNoZXJ9IGZyb20gJy4vY29uZmlnJztcbmV4cG9ydCB7Um91dGVyTGluaywgUm91dGVyTGlua1dpdGhIcmVmfSBmcm9tICcuL2RpcmVjdGl2ZXMvcm91dGVyX2xpbmsnO1xuZXhwb3J0IHtSb3V0ZXJMaW5rQWN0aXZlfSBmcm9tICcuL2RpcmVjdGl2ZXMvcm91dGVyX2xpbmtfYWN0aXZlJztcbmV4cG9ydCB7Um91dGVyT3V0bGV0fSBmcm9tICcuL2RpcmVjdGl2ZXMvcm91dGVyX291dGxldCc7XG5leHBvcnQge0FjdGl2YXRpb25FbmQsIEFjdGl2YXRpb25TdGFydCwgQ2hpbGRBY3RpdmF0aW9uRW5kLCBDaGlsZEFjdGl2YXRpb25TdGFydCwgRXZlbnQsIEd1YXJkc0NoZWNrRW5kLCBHdWFyZHNDaGVja1N0YXJ0LCBOYXZpZ2F0aW9uQ2FuY2VsLCBOYXZpZ2F0aW9uRW5kLCBOYXZpZ2F0aW9uRXJyb3IsIE5hdmlnYXRpb25TdGFydCwgUmVzb2x2ZUVuZCwgUmVzb2x2ZVN0YXJ0LCBSb3V0ZUNvbmZpZ0xvYWRFbmQsIFJvdXRlQ29uZmlnTG9hZFN0YXJ0LCBSb3V0ZXJFdmVudCwgUm91dGVzUmVjb2duaXplZCwgU2Nyb2xsfSBmcm9tICcuL2V2ZW50cyc7XG5leHBvcnQge0NhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5EZWFjdGl2YXRlLCBDYW5Mb2FkLCBSZXNvbHZlfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuZXhwb3J0IHtEZXRhY2hlZFJvdXRlSGFuZGxlLCBSb3V0ZVJldXNlU3RyYXRlZ3l9IGZyb20gJy4vcm91dGVfcmV1c2Vfc3RyYXRlZ3knO1xuZXhwb3J0IHtOYXZpZ2F0aW9uLCBOYXZpZ2F0aW9uRXh0cmFzLCBSb3V0ZXJ9IGZyb20gJy4vcm91dGVyJztcbmV4cG9ydCB7Uk9VVEVTfSBmcm9tICcuL3JvdXRlcl9jb25maWdfbG9hZGVyJztcbmV4cG9ydCB7RXh0cmFPcHRpb25zLCBJbml0aWFsTmF2aWdhdGlvbiwgUk9VVEVSX0NPTkZJR1VSQVRJT04sIFJPVVRFUl9JTklUSUFMSVpFUiwgUm91dGVyTW9kdWxlLCBwcm92aWRlUm91dGVzfSBmcm9tICcuL3JvdXRlcl9tb2R1bGUnO1xuZXhwb3J0IHtDaGlsZHJlbk91dGxldENvbnRleHRzLCBPdXRsZXRDb250ZXh0fSBmcm9tICcuL3JvdXRlcl9vdXRsZXRfY29udGV4dCc7XG5leHBvcnQge05vUHJlbG9hZGluZywgUHJlbG9hZEFsbE1vZHVsZXMsIFByZWxvYWRpbmdTdHJhdGVneSwgUm91dGVyUHJlbG9hZGVyfSBmcm9tICcuL3JvdXRlcl9wcmVsb2FkZXInO1xuZXhwb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGUsIFJvdXRlclN0YXRlU25hcHNob3R9IGZyb20gJy4vcm91dGVyX3N0YXRlJztcbmV4cG9ydCB7UFJJTUFSWV9PVVRMRVQsIFBhcmFtTWFwLCBQYXJhbXMsIGNvbnZlcnRUb1BhcmFtTWFwfSBmcm9tICcuL3NoYXJlZCc7XG5leHBvcnQge1VybEhhbmRsaW5nU3RyYXRlZ3l9IGZyb20gJy4vdXJsX2hhbmRsaW5nX3N0cmF0ZWd5JztcbmV4cG9ydCB7RGVmYXVsdFVybFNlcmlhbGl6ZXIsIFVybFNlZ21lbnQsIFVybFNlZ21lbnRHcm91cCwgVXJsU2VyaWFsaXplciwgVXJsVHJlZX0gZnJvbSAnLi91cmxfdHJlZSc7XG5leHBvcnQge1ZFUlNJT059IGZyb20gJy4vdmVyc2lvbic7XG5cbmV4cG9ydCAqIGZyb20gJy4vcHJpdmF0ZV9leHBvcnQnO1xuIl19