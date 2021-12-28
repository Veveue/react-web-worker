import { runBigTask } from './big-task';
import localforage from 'localforage';
// https://github.com/localForage/localForage/issues/144

self.addEventListener(
  'message',
  async function (event) {
    console.log(indexedDB);
    await localforage.setItem('test1', '1111');
    const value = await localforage.getItem('test1');
    const queue = [];
    for (let i = 0; i < 10; i++) {
      queue.push(fetch('https://api.wrdan.com/hitokoto'));
    }
    console.log(queue);
    await Promise.all(queue);
    self.postMessage(runBigTask(event.data, 'vanilla-worker'));
  },
  false,
);
