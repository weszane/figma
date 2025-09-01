let $$n4 = {
  shouldHandle: e => e.startsWith("/me-"),
  parseChannelArgs: () => ({})
};
let $$r2 = {
  shouldHandle: e => e.startsWith("/team-members-"),
  parseChannelArgs: e => {
    let [t, i] = e.split("/team-members-");
    return i;
  }
};
let $$a5 = {
  shouldHandle: e => e.startsWith("/file-"),
  parseChannelArgs: e => {
    let [t, i] = e.split("/file-");
    return i;
  }
};
let $$s1 = {
  shouldHandle: e => e.startsWith("/folder-"),
  parseChannelArgs: e => {
    let [t, i] = e.split("/folder-");
    return i;
  }
};
let $$o0 = {
  shouldHandle: e => e.startsWith("/file_repo-"),
  parseChannelArgs: e => {
    let [t, i] = e.split("/file_repo-");
    return i;
  }
};
let $$l3 = {
  shouldHandle: e => e.startsWith("/org-members-"),
  parseChannelArgs: e => {
    let [t, i] = e.split("/org-members-");
    return i;
  }
};
export const Ut = $$o0;
export const aj = $$s1;
export const fJ = $$r2;
export const uf = $$l3;
export const uu = $$n4;
export const w7 = $$a5;