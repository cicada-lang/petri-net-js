export type TaskFunction = (...inputs: Array<any>) => Promise<Array<any>>

export type Task = {
  fn: TaskFunction
}
