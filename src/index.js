import dva from 'dva';
// import './index.css';
import createHashHistory from 'history/createHashHistory';

// 1. Initialize
const app = dva({
  history: createHashHistory(),

  onError(e) {
    console.log(`%c ↓↓↓↓↓↓↓↓↓↓↓↓↓请查看错误信息↓↓↓↓↓↓↓↓↓↓↓↓↓`,'color:red');
    console.log(e);
    console.log(`%c ↑↑↑↑↑↑↑↑↑↑↑↑↑请查看错误信息↑↑↑↑↑↑↑↑↑↑↑↑↑`,'color:red');
  },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/index'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
window.app = app;
