/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { bindingUpdated } from '../bindings';
import { RENDERER } from '../interfaces/view';
import { getLView, getSelectedTNode, getTView, nextBindingIndex } from '../state';
import { elementPropertyInternal, setInputsForProperty, storePropertyBindingMetadata } from './shared';
/**
 * Update a property on a selected element.
 *
 * Operates on the element selected by index via the {@link select} instruction.
 *
 * If the property name also exists as an input property on one of the element's directives,
 * the component property will be set instead of the element property. This check must
 * be conducted at runtime so child components that add new `@Inputs` don't have to be re-compiled
 *
 * @param propName Name of property. Because it is going to DOM, this is not subject to
 *        renaming as part of minification.
 * @param value New value to write.
 * @param sanitizer An optional function used to sanitize the value.
 * @returns This function returns itself so that it may be chained
 * (e.g. `property('name', ctx.name)('title', ctx.title)`)
 *
 * @codeGenApi
 */
export function ɵɵproperty(propName, value, sanitizer) {
    var lView = getLView();
    var bindingIndex = nextBindingIndex();
    if (bindingUpdated(lView, bindingIndex, value)) {
        var tView = getTView();
        var tNode = getSelectedTNode();
        elementPropertyInternal(tView, tNode, lView, propName, value, lView[RENDERER], sanitizer, false);
        ngDevMode && storePropertyBindingMetadata(tView.data, tNode, propName, bindingIndex);
    }
    return ɵɵproperty;
}
/**
 * Given `<div style="..." my-dir>` and `MyDir` with `@Input('style')` we need to write to
 * directive input.
 */
export function setDirectiveInputsWhichShadowsStyling(tView, tNode, lView, value, isClassBased) {
    var inputs = tNode.inputs;
    var property = isClassBased ? 'class' : 'style';
    // We support both 'class' and `className` hence the fallback.
    setInputsForProperty(tView, lView, inputs[property], property, value);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2luc3RydWN0aW9ucy9wcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRzNDLE9BQU8sRUFBUSxRQUFRLEVBQVEsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUVoRixPQUFPLEVBQUMsdUJBQXVCLEVBQUUsb0JBQW9CLEVBQUUsNEJBQTRCLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFHckc7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHO0FBQ0gsTUFBTSxVQUFVLFVBQVUsQ0FDdEIsUUFBZ0IsRUFBRSxLQUFRLEVBQUUsU0FBOEI7SUFDNUQsSUFBTSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUM7SUFDekIsSUFBTSxZQUFZLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQztJQUN4QyxJQUFJLGNBQWMsQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzlDLElBQU0sS0FBSyxHQUFHLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLElBQU0sS0FBSyxHQUFHLGdCQUFnQixFQUFFLENBQUM7UUFDakMsdUJBQXVCLENBQ25CLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3RSxTQUFTLElBQUksNEJBQTRCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO0tBQ3RGO0lBQ0QsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxxQ0FBcUMsQ0FDakQsS0FBWSxFQUFFLEtBQVksRUFBRSxLQUFZLEVBQUUsS0FBVSxFQUFFLFlBQXFCO0lBQzdFLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFRLENBQUM7SUFDOUIsSUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUNsRCw4REFBOEQ7SUFDOUQsb0JBQW9CLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3hFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge2JpbmRpbmdVcGRhdGVkfSBmcm9tICcuLi9iaW5kaW5ncyc7XG5pbXBvcnQge1ROb2RlfSBmcm9tICcuLi9pbnRlcmZhY2VzL25vZGUnO1xuaW1wb3J0IHtTYW5pdGl6ZXJGbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zYW5pdGl6YXRpb24nO1xuaW1wb3J0IHtMVmlldywgUkVOREVSRVIsIFRWaWV3fSBmcm9tICcuLi9pbnRlcmZhY2VzL3ZpZXcnO1xuaW1wb3J0IHtnZXRMVmlldywgZ2V0U2VsZWN0ZWRUTm9kZSwgZ2V0VFZpZXcsIG5leHRCaW5kaW5nSW5kZXh9IGZyb20gJy4uL3N0YXRlJztcblxuaW1wb3J0IHtlbGVtZW50UHJvcGVydHlJbnRlcm5hbCwgc2V0SW5wdXRzRm9yUHJvcGVydHksIHN0b3JlUHJvcGVydHlCaW5kaW5nTWV0YWRhdGF9IGZyb20gJy4vc2hhcmVkJztcblxuXG4vKipcbiAqIFVwZGF0ZSBhIHByb3BlcnR5IG9uIGEgc2VsZWN0ZWQgZWxlbWVudC5cbiAqXG4gKiBPcGVyYXRlcyBvbiB0aGUgZWxlbWVudCBzZWxlY3RlZCBieSBpbmRleCB2aWEgdGhlIHtAbGluayBzZWxlY3R9IGluc3RydWN0aW9uLlxuICpcbiAqIElmIHRoZSBwcm9wZXJ0eSBuYW1lIGFsc28gZXhpc3RzIGFzIGFuIGlucHV0IHByb3BlcnR5IG9uIG9uZSBvZiB0aGUgZWxlbWVudCdzIGRpcmVjdGl2ZXMsXG4gKiB0aGUgY29tcG9uZW50IHByb3BlcnR5IHdpbGwgYmUgc2V0IGluc3RlYWQgb2YgdGhlIGVsZW1lbnQgcHJvcGVydHkuIFRoaXMgY2hlY2sgbXVzdFxuICogYmUgY29uZHVjdGVkIGF0IHJ1bnRpbWUgc28gY2hpbGQgY29tcG9uZW50cyB0aGF0IGFkZCBuZXcgYEBJbnB1dHNgIGRvbid0IGhhdmUgdG8gYmUgcmUtY29tcGlsZWRcbiAqXG4gKiBAcGFyYW0gcHJvcE5hbWUgTmFtZSBvZiBwcm9wZXJ0eS4gQmVjYXVzZSBpdCBpcyBnb2luZyB0byBET00sIHRoaXMgaXMgbm90IHN1YmplY3QgdG9cbiAqICAgICAgICByZW5hbWluZyBhcyBwYXJ0IG9mIG1pbmlmaWNhdGlvbi5cbiAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgdG8gd3JpdGUuXG4gKiBAcGFyYW0gc2FuaXRpemVyIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHVzZWQgdG8gc2FuaXRpemUgdGhlIHZhbHVlLlxuICogQHJldHVybnMgVGhpcyBmdW5jdGlvbiByZXR1cm5zIGl0c2VsZiBzbyB0aGF0IGl0IG1heSBiZSBjaGFpbmVkXG4gKiAoZS5nLiBgcHJvcGVydHkoJ25hbWUnLCBjdHgubmFtZSkoJ3RpdGxlJywgY3R4LnRpdGxlKWApXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVwcm9wZXJ0eTxUPihcbiAgICBwcm9wTmFtZTogc3RyaW5nLCB2YWx1ZTogVCwgc2FuaXRpemVyPzogU2FuaXRpemVyRm4gfCBudWxsKTogdHlwZW9mIMm1ybVwcm9wZXJ0eSB7XG4gIGNvbnN0IGxWaWV3ID0gZ2V0TFZpZXcoKTtcbiAgY29uc3QgYmluZGluZ0luZGV4ID0gbmV4dEJpbmRpbmdJbmRleCgpO1xuICBpZiAoYmluZGluZ1VwZGF0ZWQobFZpZXcsIGJpbmRpbmdJbmRleCwgdmFsdWUpKSB7XG4gICAgY29uc3QgdFZpZXcgPSBnZXRUVmlldygpO1xuICAgIGNvbnN0IHROb2RlID0gZ2V0U2VsZWN0ZWRUTm9kZSgpO1xuICAgIGVsZW1lbnRQcm9wZXJ0eUludGVybmFsKFxuICAgICAgICB0VmlldywgdE5vZGUsIGxWaWV3LCBwcm9wTmFtZSwgdmFsdWUsIGxWaWV3W1JFTkRFUkVSXSwgc2FuaXRpemVyLCBmYWxzZSk7XG4gICAgbmdEZXZNb2RlICYmIHN0b3JlUHJvcGVydHlCaW5kaW5nTWV0YWRhdGEodFZpZXcuZGF0YSwgdE5vZGUsIHByb3BOYW1lLCBiaW5kaW5nSW5kZXgpO1xuICB9XG4gIHJldHVybiDJtcm1cHJvcGVydHk7XG59XG5cbi8qKlxuICogR2l2ZW4gYDxkaXYgc3R5bGU9XCIuLi5cIiBteS1kaXI+YCBhbmQgYE15RGlyYCB3aXRoIGBASW5wdXQoJ3N0eWxlJylgIHdlIG5lZWQgdG8gd3JpdGUgdG9cbiAqIGRpcmVjdGl2ZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldERpcmVjdGl2ZUlucHV0c1doaWNoU2hhZG93c1N0eWxpbmcoXG4gICAgdFZpZXc6IFRWaWV3LCB0Tm9kZTogVE5vZGUsIGxWaWV3OiBMVmlldywgdmFsdWU6IGFueSwgaXNDbGFzc0Jhc2VkOiBib29sZWFuKSB7XG4gIGNvbnN0IGlucHV0cyA9IHROb2RlLmlucHV0cyAhO1xuICBjb25zdCBwcm9wZXJ0eSA9IGlzQ2xhc3NCYXNlZCA/ICdjbGFzcycgOiAnc3R5bGUnO1xuICAvLyBXZSBzdXBwb3J0IGJvdGggJ2NsYXNzJyBhbmQgYGNsYXNzTmFtZWAgaGVuY2UgdGhlIGZhbGxiYWNrLlxuICBzZXRJbnB1dHNGb3JQcm9wZXJ0eSh0VmlldywgbFZpZXcsIGlucHV0c1twcm9wZXJ0eV0sIHByb3BlcnR5LCB2YWx1ZSk7XG59XG4iXX0=