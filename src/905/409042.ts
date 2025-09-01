export class $$n0 {
  constructor(e) {
    this.MAX_TIMESTAMPS = 10;
    this.timestamps = e.timestamps;
    this.count = e.count;
  }
  scoreTimestamp(e) {
    let {
      hoursAgo,
      daysAgo
    } = this.timeAgo(e);
    return hoursAgo < .5 ? 100 : hoursAgo < 4 ? 70 : daysAgo < 1 ? 50 : daysAgo < 7 ? 30 : daysAgo < 30 ? 20 : daysAgo < 90 ? 10 : 0;
  }
  timeAgo(e) {
    let t = (Date.now() - e) / 1e3 / 60 / 60;
    return {
      hoursAgo: t,
      daysAgo: t / 24
    };
  }
  score() {
    if (0 === this.timestamps.length) return 0;
    let e = this.timestamps.reduce((e, t) => e + this.scoreTimestamp(t), 0);
    return this.count * (e / this.timestamps.length);
  }
  debugScore() {
    let e = this.count;
    let t = this.timestamps.map(e => {
      let {
        hoursAgo,
        daysAgo
      } = this.timeAgo(e);
      return {
        timestamp: e,
        hoursAgo,
        daysAgo,
        score: this.scoreTimestamp(e)
      };
    });
    let i = t.reduce((e, {
      score: t
    }) => e + t, 0);
    return {
      count: e,
      timestampScores: t,
      summedTimestampScores: i,
      numTimestamps: this.timestamps.length,
      actionScore: this.score()
    };
  }
  serialize() {
    return {
      timestamps: this.timestamps,
      count: this.count
    };
  }
  addUsage() {
    let e = Date.now();
    this.timestamps = [e, ...this.timestamps].slice(0, this.MAX_TIMESTAMPS);
    this.count += 1;
  }
}
export const s = $$n0;