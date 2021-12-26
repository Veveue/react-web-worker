import { runBigTask } from './big-task'
import { set, get } from 'idb-keyval';
// import localforage from './localforage'
// https://github.com/localForage/localForage/issues/144

self.addEventListener(
  'message',
  function (event) {
    console.log(indexedDB)
    set("test", { a: 1 });
    get('test').then((val) => console.log(val, "[[[[["))
      .catch((err) => console.log('It failed!'));

    self.postMessage(runBigTask(event.data, 'vanilla-worker'))
  },
  false
)
