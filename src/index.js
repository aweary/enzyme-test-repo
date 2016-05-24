import React from 'react';

export function enhance(ComposedComponent) {
    class Enhancer extends React.Component {
        render() {
            const newProps = Object.assign({}, this.props, {
                someAdditionalProp: true
            });
            return React.createElement(ComposedComponent, newProps);
        }
    }
    return Enhancer;
}

export class Foo extends React.Component {
    render() {
        return (<div>Bla bla</div>);
    }
}

export const FooEnhanced = Foo;
