// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// nodestrap components:
import Icon from '@nodestrap/icon';
import { useCurrentActive, } from '@nodestrap/nav-button';
import { ListItem, ListSeparatorItem, List, } from '@nodestrap/list';
export { useCurrentActive };
export function NavItem(props) {
    // rest props:
    const { 
    // accessibilities:
    active, ...restProps } = props;
    // fn props:
    const activeDn = useCurrentActive(props);
    const activeFn = active ?? activeDn;
    // jsx:
    return (React.createElement(ListItem, { ...restProps, "aria-current": props['aria-current'] ?? (activeFn ? 'page' : undefined), 
        // accessibilities:
        active: activeFn }));
}
NavItem.prototype = ListItem.prototype; // mark as ListItem compatible
export { NavItem as Item };
export function NavPrevItem(props) {
    // jsx:
    return (React.createElement(NavItem, { ...props, "aria-label": props['aria-label'] ?? 'Previous' }, props.children
        ??
            React.createElement(Icon
            // appearances:
            , { 
                // appearances:
                icon: 'prev', 
                // variants:
                size: '1em' })));
}
export function NavNextItem(props) {
    // jsx:
    return (React.createElement(NavItem, { ...props, "aria-label": props['aria-label'] ?? 'Next' }, props.children
        ??
            React.createElement(Icon
            // appearances:
            , { 
                // appearances:
                icon: 'next', 
                // variants:
                size: '1em' })));
}
NavPrevItem.prototype = NavItem.prototype; // mark as NavItem compatible
NavNextItem.prototype = NavItem.prototype; // mark as NavItem compatible
export { NavPrevItem as PrevItem, NavPrevItem as PrevPage, NavNextItem as NextItem, NavNextItem as NextPage, };
// ListSeparatorItem => NavSeparatorItem
export { ListSeparatorItem, ListSeparatorItem as NavSeparatorItem, ListSeparatorItem as SeparatorItem };
export function Nav(props) {
    // rest props:
    const { 
    // accessibilities:
    label, ...restProps } = props;
    // jsx:
    return (React.createElement(List, { ...restProps, 
        // semantics:
        semanticTag: props.semanticTag ?? 'nav', semanticRole: props.semanticRole ?? 'navigation', 
        // behaviors:
        actionCtrl: props.actionCtrl ?? true }, props.children));
}
Nav.prototype = List.prototype; // mark as List compatible
export { Nav as default };
