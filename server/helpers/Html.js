import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';

const Html = props => {
  const { assets, content, store } = props;
  const head = Helmet.renderStatic();
  
  return (

    <html lang="en-US">

      <head>
        {/* (>>>>>>> META <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<) */}
        {head.base.toComponent()}
        {head.meta.toComponent()}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Election App 2018!" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Election App 2018!" />
        <meta name="theme-color" content="#1E90FF" />

        {/* (>>>>>>> TITLE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<) */}
        {head.title.toComponent()}

        {/* (>>>>>>> LINK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<) */}
        {head.link.toComponent()}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />

        {/* (>>>>>>> SCRIPT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<) */}
        {head.script.toComponent()}

        {/* (will be present only in development mode) */}
        {assets.styles && Object.keys(assets.styles).length === 0 ? (
          <style dangerouslySetInnerHTML={{ __html: '#content{display:none}' }} />
        ) : null}
      </head>
      <body>
        <div id="content" dangerouslySetInnerHTML={{ __html: content }} ></div>
        {store && (
          <script
            dangerouslySetInnerHTML={{ __html: `window.__data=${serialize(store.getState())};` }}
            charSet="UTF-8"
          ></script>
        )}
        {Object.keys(assets.javascript)
          .filter(key => key.includes('main') || key.includes('vendor') || key.includes('vendors'))
          .reverse()
          .map(key => <script key={key} src={assets.javascript[key]}></script>)}

      </body>
    </html>
  );
};

Html.propTypes = {
  assets: PropTypes.shape({
    styles: PropTypes.object,
    javascript: PropTypes.object
  }),
  content: PropTypes.string,
  store: PropTypes.shape({
    getState: PropTypes.func
  }).isRequired
};

Html.defaultProps = {
  assets: {},
  content: ''
};

export default Html;
