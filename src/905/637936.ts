let n = 0;
export class $$r0 {
  constructor() {
    this.head_ = null;
    this.tail_ = null;
  }
  isEmpty() {
    return null == this.head_;
  }
  push(e) {
    if ("object" != typeof e) throw TypeError("Task must be an Object");
    e.tq_sequence_ = n++;
    this.isEmpty() ? (e.tq_prev_ = null, this.head_ = e) : (e.tq_prev_ = this.tail_, this.tail_.tq_next_ = e);
    e.tq_next_ = null;
    this.tail_ = e;
  }
  takeNextTask() {
    if (this.isEmpty()) return null;
    let e = this.head_;
    this.remove_(e);
    return e;
  }
  merge(e, t) {
    if ("function" != typeof t) throw TypeError("Must provide a selector function.");
    if (null == e) throw Error("sourceQueue cannot be null");
    let i = this.head_;
    let n = null;
    let r = e.head_;
    for (; r;) {
      let a = r;
      if (r = r.tq_next_, t(a)) {
        for (e.remove_(a); i && i.tq_sequence_ < a.tq_sequence_;) {
          n = i;
          i = i.tq_next_;
        }
        this.insert_(a, n);
        n = a;
      }
    }
  }
  toArray() {
    let e = this.head_;
    let t = [];
    for (; null !== e;) {
      t.push(e);
      e = e.tq_next_;
    }
    return t;
  }
  insert_(e, t) {
    if (t == this.tail_) {
      this.push(e);
      return;
    }
    let i = t ? t.tq_next_ : this.head_;
    e.tq_next_ = i;
    i.tq_prev_ = e;
    e.tq_prev_ = t;
    null != t ? t.tq_next_ = e : this.head_ = e;
  }
  remove_(e) {
    if (null == e) throw Error("Expected task to be non-null");
    e === this.head_ && (this.head_ = e.tq_next_);
    e === this.tail_ && (this.tail_ = this.tail_.tq_prev_);
    e.tq_next_ && (e.tq_next_.tq_prev_ = e.tq_prev_);
    e.tq_prev_ && (e.tq_prev_.tq_next_ = e.tq_next_);
  }
}
export const C = $$r0;