var n = "application/x-fig-file";
var r = "application/json";
var a = "Files";
let s = "application/x-fig-file-repo";
let o = "application/x-fig-file-tile";
let l = "application/x-fig-file-proto";
export class $$d0 {
  constructor(e) {
    for (let t of (this._dataTransfer = e, this._containsType(a) && (this._type = a, this._data = this._dataTransfer.getData(a)), [r, n, s, l, o])) if (this._containsType(t) && (this._type = t, this._dataTransfer.getData(t))) try {
      this._data = JSON.parse(this._dataTransfer.getData(t));
    } catch (e) {}
  }
  _containsType(e) {
    return !!this._dataTransfer.types && -1 !== Array.from(this._dataTransfer.types).indexOf(e);
  }
  _setDataAsText() {
    this._dataTransfer.setData(this._type, JSON.stringify(this._data));
  }
  setArbitraryData(e) {
    this._type = r;
    this._data = e;
    this._setDataAsText();
  }
  setFigFilesData(e) {
    this._type = n;
    this._data = e;
    this._setDataAsText();
  }
  setReposData(e, t) {
    this._type = s;
    this._data = {
      repos: e,
      files: t
    };
    this._setDataAsText();
  }
  setPrototypesData(e) {
    this._type = l;
    this._data = e;
    this._setDataAsText();
  }
  setTilesData(e, t, i) {
    this._type = o;
    this._data = {
      files: e,
      repos: t,
      prototypes: i
    };
    this._setDataAsText();
  }
  setDragImage(e, t, i) {
    this._dataTransfer.setDragImage && this._dataTransfer.setDragImage(e, t, i);
  }
  isArbitraryData() {
    return this._type === r;
  }
  isFigFiles() {
    return this._type === n;
  }
  isFile() {
    return this._type === a;
  }
  isRepos() {
    return this._type === s;
  }
  isPrototypes() {
    return this._type === l;
  }
  isTiles() {
    return this._type === o;
  }
  getData() {
    return this._data;
  }
  getReposData() {
    return this.isRepos() ? this.getData() : null;
  }
  getTilesData() {
    return this.isTiles() ? this.getData() : null;
  }
}
export const le = $$d0;