export class $$n0 {
  constructor() {
    this.jobs = [];
  }
  async enqueue(e) {
    this.jobs.push(e);
    this.worker || (this.worker = this.start());
    await this.worker;
    this.worker = void 0;
  }
  isComplete() {
    return !this.worker;
  }
  get length() {
    return this.jobs.length;
  }
  waitForCompletion() {
    return this.worker ? this.worker : Promise.resolve();
  }
  async start() {
    let e = this.jobs.shift();
    for (; e;) {
      await e();
      e = this.jobs.shift();
    }
  }
}
export const O = $$n0;