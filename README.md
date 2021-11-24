# &lt;Nav&gt;&lt;/Nav&gt;
A navigation component to navigate between pages.

## Preview

```jsx
<Nav theme='primary' size='lg' gradient={true} outlined={true}>
    <Item href='/'>Home</ListItem>
    <Item href='/blogs' active={true}>Blogs</ListItem>
    <Item href='/notes' theme='success'>Notes</ListItem>
    <Item href='/about'>About</ListItem>
    // ...
</Nav>
```
Rendered to:
```html
<nav class="c1 thPrimary szLg gradient outlined">
    <div>/* ... */</div>
    <div>/* ... */</div>
    <div>/* ... */</div>
</nav>
```

## Features
* Includes all features in [`<List />`](https://www.npmjs.com/package/@nodestrap/list).
* Customizable via [`@cssfn/css-config`](https://www.npmjs.com/package/@cssfn/css-config).

## Installation

Using npm:
```
npm i @nodestrap/nav
```

## Support Us

If you feel our lib is useful for your projects,  
please make a donation to avoid our project from extinction.

We always maintain our projects as long as we're still alive.

[[Make a donation](https://ko-fi.com/heymarco)]
