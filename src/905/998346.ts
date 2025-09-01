import { id } from "../905/648693";
import { Hd, Qe, kn } from "../905/791403";
function a(e, t) {
  return id(t) ? t : {
    type: e,
    props: {
      className: "w-1 h-1"
    },
    children: []
  };
}
function s(e, t) {
  return t && Array.isArray(t) ? t.map(t => a(e, t)) : [];
}
function o({
  type: e,
  props: t
}) {
  let {
    header,
    mainContent,
    footer
  } = t;
  return {
    type: e,
    props: {
      className: "w-[1440px] min-h-[900px] px-12 flex flex-col",
      sharedPluginData: {
        type: "VStack",
        isLayoutNode: "true"
      }
    },
    children: [a(e, header), {
      type: e,
      props: {
        className: "w-full flex py-12",
        sharedPluginData: {
          type: "HStack"
        },
        overflow: "visible",
        name: "Container"
      },
      children: [{
        type: e,
        props: {
          className: "w-full flex flex-col",
          sharedPluginData: {
            type: "VStack"
          },
          overflow: "visible",
          name: "Main Content"
        },
        children: s(e, mainContent)
      }]
    }, a(e, footer)]
  };
}
export function $$l1({
  props: e,
  children: t
}) {
  return o({
    type: Hd,
    props: e,
    children: t
  });
}
export function $$d5({
  props: e,
  children: t
}) {
  return o({
    type: Qe,
    props: e,
    children: t
  });
}
function c({
  type: e,
  props: t
}) {
  let {
    header,
    mainContent,
    footer
  } = t;
  return {
    type: e,
    props: {
      className: "w-[393px] min-h-[852px] flex flex-col",
      sharedPluginData: {
        type: "VStack",
        isLayoutNode: "true"
      }
    },
    children: [a(e, header), {
      type: e,
      props: {
        className: "w-full flex flex-col",
        sharedPluginData: {
          type: "VStack",
          fillContainerHeight: "true"
        },
        overflow: "visible",
        name: "Main Content"
      },
      children: s(e, mainContent)
    }, a(e, footer)]
  };
}
export function $$u4({
  props: e,
  children: t
}) {
  return c({
    type: Hd,
    props: e,
    children: t
  });
}
export function $$p7({
  props: e,
  children: t
}) {
  return c({
    type: Qe,
    props: e,
    children: t
  });
}
function m({
  type: e,
  props: t
}) {
  let {
    header,
    mainContent,
    sidebarContent,
    sidebarWidth,
    footer
  } = t;
  let c = kn(sidebarWidth);
  return {
    type: e,
    props: {
      className: "w-[1440px] min-h-[900px] px-12 flex flex-col",
      sharedPluginData: {
        type: "VStack",
        isLayoutNode: "true"
      }
    },
    children: [a(e, header), {
      type: e,
      props: {
        className: "w-full flex gap-12",
        sharedPluginData: {
          type: "HStack"
        },
        name: "Container"
      },
      children: [{
        type: e,
        props: {
          className: "w-full flex flex-col",
          sharedPluginData: {
            type: "VStack"
          },
          name: "Main Content"
        },
        children: s(e, mainContent),
        overflow: "hidden"
      }, {
        type: e,
        props: {
          className: c,
          sharedPluginData: {
            type: "VStack"
          },
          overflow: "hidden",
          name: "Sidebar"
        },
        children: s(e, sidebarContent)
      }]
    }, a(e, footer)]
  };
}
export function $$h6({
  props: e,
  children: t
}) {
  return m({
    type: Hd,
    props: e,
    children: t
  });
}
export function $$g2({
  props: e,
  children: t
}) {
  return m({
    type: Qe,
    props: e,
    children: t
  });
}
function f({
  type: e,
  props: t
}) {
  let {
    header,
    sidebarContent,
    sidebarWidth,
    mainContent,
    footer
  } = t;
  let c = kn(sidebarWidth);
  return {
    type: e,
    props: {
      className: "w-[1440px] min-h-[900px] px-12 flex flex-col",
      sharedPluginData: {
        type: "VStack",
        isLayoutNode: "true"
      }
    },
    children: [a(e, header), {
      type: e,
      props: {
        className: "w-full flex gap-12",
        sharedPluginData: {
          type: "HStack"
        },
        name: "Container"
      },
      children: [{
        type: e,
        props: {
          className: c,
          sharedPluginData: {
            type: "VStack"
          },
          overflow: "hidden",
          name: "Sidebar"
        },
        children: s(e, sidebarContent)
      }, {
        type: e,
        props: {
          className: "w-full flex flex-col",
          sharedPluginData: {
            type: "VStack"
          },
          overflow: "hidden",
          name: "Main Content"
        },
        children: s(e, mainContent)
      }]
    }, a(e, footer)]
  };
}
export function $$_3({
  props: e,
  children: t
}) {
  return f({
    type: Hd,
    props: e,
    children: t
  });
}
export function $$A0({
  props: e,
  children: t
}) {
  return f({
    type: Qe,
    props: e,
    children: t
  });
}
export const Fj = $$A0;
export const Ls = $$l1;
export const O5 = $$g2;
export const W7 = $$_3;
export const Xo = $$u4;
export const _A = $$d5;
export const jJ = $$h6;
export const wv = $$p7;