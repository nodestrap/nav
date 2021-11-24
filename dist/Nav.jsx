// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// nodestrap components:
import Icon from '@nodestrap/icon';
import { ListItem, ListSeparatorItem, List, } from '@nodestrap/list';
export function NavItem(props) {
    // jsx:
    return (<ListItem 
    // other props:
    {...props} 
    // semantics:
    aria-current={props['aria-current'] ?? (props.active ? 'page' : undefined)}/>);
}
NavItem.prototype = ListItem.prototype; // mark as ListItem compatible
export { NavItem as Item };
export function NavPrevItem(props) {
    // jsx:
    return (<NavItem 
    // other props:
    {...props} 
    // semantics:
    aria-label={props['aria-label'] ?? 'Previous'}>
            {props.children
            ??
                <Icon 
                // appearances:
                icon='prev' 
                // variants:
                size='1em'/>}
        </NavItem>);
}
export function NavNextItem(props) {
    // jsx:
    return (<NavItem 
    // other props:
    {...props} 
    // semantics:
    aria-label={props['aria-label'] ?? 'Next'}>
            {props.children
            ??
                <Icon 
                // appearances:
                icon='next' 
                // variants:
                size='1em'/>}
        </NavItem>);
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
    return (<List 
    // other props:
    {...restProps} 
    // semantics:
    semanticTag={props.semanticTag ?? 'nav'} semanticRole={props.semanticRole ?? 'navigation'} 
    // layouts:
    orientation={props.orientation ?? 'inline'} 
    // behaviors:
    actionCtrl={props.actionCtrl ?? true}>
            {props.children}
        </List>);
}
Nav.prototype = List.prototype; // mark as List compatible
export { Nav as default };
