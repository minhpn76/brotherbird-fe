/**
 *
 * Tests for Header
 *
 *
 */
import 'regenerator-runtime/runtime'
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { createMemoryHistory } from 'history';
import store from '../../../../../../redux/store';
import Header from '../index';

describe('<Header />', () => {
const history = createMemoryHistory();

it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');

    render(
    <Provider store={store}>
        {/* <IntlProvider locale={DEFAULT_LOCALE} messages={deTranslations}> */}
        <ConnectedRouter history={history}>
            <Header />
        </ConnectedRouter>
        {/* </IntlProvider> */}
    </Provider>
    );
    expect(spy).not.toHaveBeenCalled();
});

it('Should render and match the snapshot', () => {
    const {
    container: { firstChild },
    } = render(
    <Provider store={store}>
        {/* <IntlProvider locale={DEFAULT_LOCALE} messages={deTranslations}> */}
        <ConnectedRouter history={history}>
            <Dialog {...dialogProps} />
        </ConnectedRouter>
        {/* </IntlProvider> */}
    </Provider>
    );
    expect(firstChild).toMatchSnapshot();
});
});