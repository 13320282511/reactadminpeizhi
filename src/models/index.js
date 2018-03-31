export default {

  namespace: 'index',

  state: {
    activeIndex: 0,
  },


  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
      history.listen(location => {
        dispatch({
          type: 'updateActiveIndex',
          payload: location.pathname
        });
      });
    },
  },

  effects: {
    * fetch({payload}, {call, put}) {  // eslint-disable-line
      yield put({type: 'save'});
    },
  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    },
    updateActiveIndex(state, action) {
      let pathname = action.payload;
      let activeIndex = 0;
      if (/order/.test(pathname)) {
        activeIndex = 1;
        // sessionStorage.setItem('routeOpenKey', '');
        sessionStorage.setItem('routeKey', 'order');
      } else if (/home/.test(pathname)) {
        // sessionStorage.setItem('routeOpenKey', '');
        sessionStorage.setItem('routeKey', 'home');
        activeIndex = 2;
      } else if (/stock/.test(pathname)) {
        activeIndex = 3;
      } else if (/funds/.test(pathname)) {
        activeIndex = 4;
      } else if (/manage/.test(pathname)) {
        // sessionStorage.setItem('routeOpenKey', 'manage');
        activeIndex = 5;
      } else if (/supplier/.test(pathname)) {
        sessionStorage.setItem('routeKey', 'supplier');
        activeIndex = 5;
      }else if (/custer/.test(pathname)) {
        sessionStorage.setItem('routeKey', 'custer');
        activeIndex = 6;
      } else {
        activeIndex = 0;
      }
      return {...state, activeIndex: activeIndex};
    }
  },

};
