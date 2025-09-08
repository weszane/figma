import { reportError } from '../905/11';
import { ServiceCategories as _$$e } from '../905/165054';
import { W6 } from '../905/327522';
import { trackEventAnalytics } from '../905/449184';
import { logInfo, logWarning } from '../905/714362';
import { LogToConsoleMode } from '../figma_app/763686';
import { getFalseValue } from '../figma_app/897289';
import { P2 } from '../vendor/390973';
let $$u15 = 'node-changes';
let $$p3 = 'saved-images';
let $$m16 = 'referenced-nodes';
let $$h8 = 'editor-sessions';
let $$g6 = 'new-files';
let $$f13 = 'activity-log';
let $$_7 = 'session-index';
let A = 4;
let y = null;
function b() {
  let e;
  if (y) return y;
  if (A > 100) return y = Promise.reject('Trying to open autosave with unsupported DB version');
  let t = new Promise((e, t) => {
    setTimeout(() => {
      logInfo('Autosave', 'Timeout when opening IDB');
      t(new Error('[Autosave] Timeout when opening IDB.'));
    }, 6e3);
  });
  let i = e => {};
  let n = new Promise((e, t) => {
    i = t;
  });
  try {
    e = P2('figma-autosave-v3', A, {
      upgrade(e, t, i, n) {
        logInfo('Autosave', 'Upgrading autosave DB', {
          oldVersion: t,
          newVersion: i
        });
        t >= 1 && trackEventAnalytics('autosave db upgrade', {
          oldVersion: t,
          newVersion: i
        });
        t < 1 && i && i >= 1 && (e.createObjectStore($$h8, {
          keyPath: 'id',
          autoIncrement: !0
        }).createIndex($$_7, ['userID', 'fileKey', 'sessionID'], {
          unique: !0
        }), e.createObjectStore($$u15, {
          keyPath: ['editorSessionID', 'nodeID']
        }), e.createObjectStore($$p3, {
          keyPath: ['editorSessionID', 'hash']
        }), e.createObjectStore($$m16, {
          keyPath: ['editorSessionID', 'nodeID']
        }));
        t < 3 && i && i >= 3 && e.createObjectStore($$g6, {
          keyPath: ['userID', 'fileKey']
        });
        t < 4 && i && i >= 4 && e.createObjectStore($$f13, {
          keyPath: 'id',
          autoIncrement: !0
        });
      },
      terminated() {
        logWarning('Autosave', 'DB closed unexpectedly');
        y = null;
      },
      blocked() {
        i(new Error('[Autosave] IDB blocked from opening by existing tab.'));
      }
    }).then(e => (e.addEventListener('versionchange', t => {
      t.oldVersion !== A && t.newVersion !== A && W6('Unexpected oldVersion when upgrading DB');
      logInfo('Autosave', `DB version change requested from ${t.oldVersion} to ${t.newVersion} for tab with DB version ${A}`, void 0, {
        logToConsole: LogToConsoleMode.ALWAYS
      });
      trackEventAnalytics('autosave db version change', {
        oldVersion: t.oldVersion,
        newVersion: t.newVersion,
        currentVersion: A
      });
      t.newVersion && (A = t.newVersion);
      e.close();
      y = null;
    }), e));
  } catch (i) {
    let t = new Error('Call to openDB failed');
    t.cause = i;
    e = Promise.reject(t);
  }
  (y = Promise.race([e, t, n])).catch(() => {
    logInfo('Autosave', 'Unable to open IDB. Resetting dbPromise.');
    y = null;
  });
  return y;
}
export async function $$v4() {
  let e = 0;
  let t = null;
  for (; e < 5;) {
    e++;
    try {
      return await b();
    } catch (i) {
      logWarning('Autosave', 'Failed to open autosave DB', {
        attempt: e,
        error: i.message
      });
      t = i;
    }
  }
  throw t;
}
export function $$I9() {
  return $$v4().catch(e => (!function () {
    let {
      name,
      message
    } = e;
    return !!(/A mutation operation was attempted on a database that did not allow mutations/.test(message) || /QuotaExceededError/.test(message) || /Encountered full disk while opening backing store for indexedDB.open/.test(message) || /Failed to openDatabase in database because not enough space for domain/.test(message) || /Timeout when opening IDB/.test(message) || /Internal error opening backing store for indexedDB.open/.test(message) || /DataError/.test(message) || /Internal error retrieving bucket data directory/.test(message)) || name === 'UnknownError' && message === 'Internal error.';
  }(e) && reportError(_$$e.SCENEGRAPH_AND_SYNC, e), null));
}
export async function $$E2(e, t, i) {
  let n = 0;
  let r = null;
  for (; n < 5;) {
    n++;
    try {
      let n = (await b()).transaction(e, i);
      let r = await t(n);
      await n.done;
      return r;
    } catch (e) {
      r = e;
    }
  }
  throw r;
}
export function $$x11(e) {
  return IDBKeyRange.bound([e, ''], [e, '~']);
}
export function $$S10(e, t) {
  return IDBKeyRange.bound([e, t], [e, t, 1 / 0]);
}
export function $$w14(e) {
  return IDBKeyRange.bound([e, ''], [e + 1, '']);
}
export function $$C1() {
  return IDBKeyRange.bound([0], [1 / 0]);
}
export function $$T5() {
  return IDBKeyRange.bound([0], [1 / 0]);
}
export function $$k0() {
  return IDBKeyRange.bound([0], [1 / 0]);
}
export function $$R12(e) {
  'commit' in e && e.commit();
}
getFalseValue() || b().catch(() => {});
export const Ab = $$k0;
export const BE = $$C1;
export const DB = $$E2;
export const DV = $$p3;
export const Fy = $$v4;
export const IE = $$T5;
export const JR = $$g6;
export const SW = $$_7;
export const Sp = $$h8;
export const Z4 = $$I9;
export const Zt = $$S10;
export const cu = $$x11;
export const dU = $$R12;
export const h5 = $$f13;
export const iM = $$w14;
export const jP = $$u15;
export const w8 = $$m16;