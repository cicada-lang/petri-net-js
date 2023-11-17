export type TaskFunction = (...args: Array<any>) => Promise<Array<any>>

export type Task = {
  fn: TaskFunction
}
