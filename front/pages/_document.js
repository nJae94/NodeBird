import React from 'react';
import Documnet, {Main, NextScript} from 'next/document';
import {Helmet} from 'react-helmet';
import PropTypes from 'prop-types';

class MyDocument extends Documnet {
    static getInitialProps(context) {
        const page = context.renderPage((App)=> (props)=> <App {...props}/>)
        return {...page, helmet: Helmet.renderStatic()};
    }

    render() {

        const {htmlAttributes, bodyAttributes,...helmet} = this.props.helmet;
        const htmlAttrs = htmlAttributes.toComponent();
        const bodyAttrs = bodyAttributes.toComponent();

        return (
            <html {...htmlAttrs}>
                <head>
                    {Object.values(helmet).map(el=>el.toComponent())}
                </head>
                <body {...bodyAttrs}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

MyDocument.propTypes = {
    helmet: PropTypes.object.isRequired,
  };

  
export default MyDocument;