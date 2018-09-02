import React from 'react';
import store from './store';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/containers/App';
import './index.css';

const supportsHistory = 'pushState' in window.history;
// 브라우저가 HTML5 history API를 지원하지 않는다면 전체 페이지를 리프레쉬 하는 방식으로 네비게이션을 제공함

render(
    <Provider store={ store }>
      <BrowserRouter forceRefresh={!supportsHistory}>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
