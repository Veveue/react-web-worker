import { expose } from 'comlink'
import { runBigTask } from './big-task'

const worker = {
  runBigTask: async (int: number) => {
    const queue = Array(10).fill(fetch("https://api.wrdan.com/hitokoto"));
    console.log(queue);
    await Promise.all(queue);
    return await runBigTask(int, 'comlink-worker')
  },
}

export type ComlinkWorker = typeof worker

expose(worker)
