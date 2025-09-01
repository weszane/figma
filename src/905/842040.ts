export class $$n1 {
  constructor() {
    this.type = "Entity";
    this.id = Math.random().toString();
    this.position = {
      x: 0,
      y: 0
    };
    this.rotation = 0;
    this.scale = 1;
    this.age = 0;
    this.lifetime = 1;
    this.sortOrder = 0;
    this.customData = {};
  }
  update(e) {
    this.age += e;
    return this.age <= this.lifetime;
  }
}
export class $$r0 {
  constructor() {
    this._entities = [];
    this._entitiesToAdd = [];
    this.lastUpdateTime = 0;
    this.addEntity = e => {
      this._entitiesToAdd.push(e);
    };
  }
  getDeltaTime() {
    let e = performance.now();
    let t = e - this.lastUpdateTime;
    this.lastUpdateTime = e;
    return t / 1e3;
  }
  update(e) {
    let t = "number" == typeof e ? e : this.getDeltaTime();
    this._entities = this._entities.filter(e => e.update(t));
    this._entitiesToAdd.length && (this._entities = this._entities.concat(this._entitiesToAdd).sort((e, t) => e.sortOrder - t.sortOrder), this._entitiesToAdd = []);
  }
  getEntities() {
    return this._entities;
  }
}
export const L = $$r0;
export const w = $$n1;