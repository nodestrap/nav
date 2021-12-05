/// <reference types="react" />
import { CurrentActiveProps, useCurrentActive } from '@nodestrap/nav-button';
import { OrientationName, OrientationVariant, ListStyle, ListVariant, ListItemProps, ListSeparatorItem, ListProps } from '@nodestrap/list';
export type { CurrentActiveProps };
export { useCurrentActive };
export interface NavItemProps<TElement extends HTMLElement = HTMLElement> extends ListItemProps<TElement>, CurrentActiveProps {
}
export declare function NavItem<TElement extends HTMLElement = HTMLElement>(props: NavItemProps<TElement>): JSX.Element;
export declare namespace NavItem {
    var prototype: any;
}
export type { NavItemProps as ItemProps };
export { NavItem as Item };
export declare function NavPrevItem<TElement extends HTMLElement = HTMLElement>(props: NavItemProps<TElement>): JSX.Element;
export declare namespace NavPrevItem {
    var prototype: any;
}
export declare function NavNextItem<TElement extends HTMLElement = HTMLElement>(props: NavItemProps<TElement>): JSX.Element;
export declare namespace NavNextItem {
    var prototype: any;
}
export { NavPrevItem as PrevItem, NavPrevItem as PrevPage, NavNextItem as NextItem, NavNextItem as NextPage, };
export { ListSeparatorItem, ListSeparatorItem as NavSeparatorItem, ListSeparatorItem as SeparatorItem };
export interface NavProps<TElement extends HTMLElement = HTMLElement> extends ListProps<TElement> {
    label?: string;
}
export declare function Nav<TElement extends HTMLElement = HTMLElement>(props: NavProps<TElement>): JSX.Element;
export declare namespace Nav {
    var prototype: any;
}
export { Nav as default };
export type { OrientationName, OrientationVariant };
export type { ListStyle, ListVariant };
