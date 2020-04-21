/**
 * @fileoverview added by tsickle
 * Generated from: packages/core/src/platform_core_providers.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PlatformRef, createPlatformFactory } from './application_ref';
import { PLATFORM_ID } from './application_tokens';
import { Console } from './console';
import { Injector } from './di';
import { TestabilityRegistry } from './testability/testability';
/** @type {?} */
const _CORE_PLATFORM_PROVIDERS = [
    // Set a default platform name for platforms that don't set it explicitly.
    { provide: PLATFORM_ID, useValue: 'unknown' },
    { provide: PlatformRef, deps: [Injector] },
    { provide: TestabilityRegistry, deps: [] },
    { provide: Console, deps: [] },
];
/**
 * This platform has to be included in any other platform
 *
 * \@publicApi
 * @type {?}
 */
export const platformCore = createPlatformFactory(null, 'core', _CORE_PLATFORM_PROVIDERS);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1fY29yZV9wcm92aWRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9wbGF0Zm9ybV9jb3JlX3Byb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsV0FBVyxFQUFFLHFCQUFxQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDckUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDbEMsT0FBTyxFQUFDLFFBQVEsRUFBaUIsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7O01BRXhELHdCQUF3QixHQUFxQjtJQUNqRCwwRUFBMEU7SUFDMUUsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUM7SUFDM0MsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFDO0lBQ3hDLEVBQUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7SUFDeEMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7Q0FDN0I7Ozs7Ozs7QUFPRCxNQUFNLE9BQU8sWUFBWSxHQUFHLHFCQUFxQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7UGxhdGZvcm1SZWYsIGNyZWF0ZVBsYXRmb3JtRmFjdG9yeX0gZnJvbSAnLi9hcHBsaWNhdGlvbl9yZWYnO1xuaW1wb3J0IHtQTEFURk9STV9JRH0gZnJvbSAnLi9hcHBsaWNhdGlvbl90b2tlbnMnO1xuaW1wb3J0IHtDb25zb2xlfSBmcm9tICcuL2NvbnNvbGUnO1xuaW1wb3J0IHtJbmplY3RvciwgU3RhdGljUHJvdmlkZXJ9IGZyb20gJy4vZGknO1xuaW1wb3J0IHtUZXN0YWJpbGl0eVJlZ2lzdHJ5fSBmcm9tICcuL3Rlc3RhYmlsaXR5L3Rlc3RhYmlsaXR5JztcblxuY29uc3QgX0NPUkVfUExBVEZPUk1fUFJPVklERVJTOiBTdGF0aWNQcm92aWRlcltdID0gW1xuICAvLyBTZXQgYSBkZWZhdWx0IHBsYXRmb3JtIG5hbWUgZm9yIHBsYXRmb3JtcyB0aGF0IGRvbid0IHNldCBpdCBleHBsaWNpdGx5LlxuICB7cHJvdmlkZTogUExBVEZPUk1fSUQsIHVzZVZhbHVlOiAndW5rbm93bid9LFxuICB7cHJvdmlkZTogUGxhdGZvcm1SZWYsIGRlcHM6IFtJbmplY3Rvcl19LFxuICB7cHJvdmlkZTogVGVzdGFiaWxpdHlSZWdpc3RyeSwgZGVwczogW119LFxuICB7cHJvdmlkZTogQ29uc29sZSwgZGVwczogW119LFxuXTtcblxuLyoqXG4gKiBUaGlzIHBsYXRmb3JtIGhhcyB0byBiZSBpbmNsdWRlZCBpbiBhbnkgb3RoZXIgcGxhdGZvcm1cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBwbGF0Zm9ybUNvcmUgPSBjcmVhdGVQbGF0Zm9ybUZhY3RvcnkobnVsbCwgJ2NvcmUnLCBfQ09SRV9QTEFURk9STV9QUk9WSURFUlMpO1xuIl19