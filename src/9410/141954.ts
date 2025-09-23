import { ServiceCategories } from "../905/165054";
import { parseHex } from "../figma_app/191804";
import { reportError } from "../905/11";
import { GS, u7 } from "../figma_app/846140";
import { Xy, Ne } from "../figma_app/702372";
import { lH } from "../figma_app/18582";
import { qO } from "../figma_app/234690";
let c = {
  [GS.DEFAULT]: [{
    "font/title/bold": {
      fontName: {
        family: "Plus Jakarta Sans",
        style: "Bold"
      },
      letterSpacing: {
        units: "PERCENT",
        value: -2
      }
    },
    "font/title/regular": {
      fontName: {
        family: "Plus Jakarta Sans",
        style: "Regular"
      },
      letterSpacing: {
        units: "PERCENT",
        value: -2
      }
    },
    "font/body/bold": {
      fontName: {
        family: "Plus Jakarta Sans",
        style: "Bold"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    },
    "font/body/medium": {
      fontName: {
        family: "Plus Jakarta Sans",
        style: "SemiBold"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    },
    "font/body/regular": {
      fontName: {
        family: "Plus Jakarta Sans",
        style: "Regular"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    },
    "font/label/medium": {
      fontName: {
        family: "Plus Jakarta Sans",
        style: "Medium"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    },
    "font/label/regular": {
      fontName: {
        family: "Plus Jakarta Sans",
        style: "Medium"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    }
  }, {
    "font/title/bold": {
      fontName: {
        family: "Outfit",
        style: "SemiBold"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    },
    "font/title/regular": {
      fontName: {
        family: "Outfit",
        style: "Regular"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    },
    "font/body/bold": {
      fontName: {
        family: "Outfit",
        style: "SemiBold"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    },
    "font/body/medium": {
      fontName: {
        family: "Outfit",
        style: "Medium"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    },
    "font/body/regular": {
      fontName: {
        family: "Outfit",
        style: "Regular"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    },
    "font/label/medium": {
      fontName: {
        family: "Outfit",
        style: "Medium"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    },
    "font/label/regular": {
      fontName: {
        family: "Outfit",
        style: "Regular"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    }
  }, {
    "font/title/bold": {
      fontName: {
        family: "Inter",
        style: "Semi Bold"
      },
      letterSpacing: {
        units: "PERCENT",
        value: -2.5
      }
    },
    "font/title/regular": {
      fontName: {
        family: "Inter",
        style: "Regular"
      },
      letterSpacing: {
        units: "PERCENT",
        value: -2.5
      }
    },
    "font/body/bold": {
      fontName: {
        family: "Inter",
        style: "Semi Bold"
      },
      letterSpacing: {
        units: "PERCENT",
        value: -.5
      }
    },
    "font/body/medium": {
      fontName: {
        family: "Inter",
        style: "Medium"
      },
      letterSpacing: {
        units: "PERCENT",
        value: -.5
      }
    },
    "font/body/regular": {
      fontName: {
        family: "Inter",
        style: "Regular"
      },
      letterSpacing: {
        units: "PERCENT",
        value: -.5
      }
    },
    "font/label/medium": {
      fontName: {
        family: "Inter",
        style: "Medium"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    },
    "font/label/regular": {
      fontName: {
        family: "Inter",
        style: "Regular"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    }
  }, {
    "font/title/bold": {
      fontName: {
        family: "Public Sans",
        style: "Bold"
      },
      letterSpacing: {
        units: "PERCENT",
        value: -2
      }
    },
    "font/title/regular": {
      fontName: {
        family: "Public Sans",
        style: "Regular"
      },
      letterSpacing: {
        units: "PERCENT",
        value: -2
      }
    },
    "font/body/bold": {
      fontName: {
        family: "Public Sans",
        style: "Bold"
      },
      letterSpacing: {
        units: "PERCENT",
        value: -.5
      }
    },
    "font/body/medium": {
      fontName: {
        family: "Public Sans",
        style: "SemiBold"
      },
      letterSpacing: {
        units: "PERCENT",
        value: -.5
      }
    },
    "font/body/regular": {
      fontName: {
        family: "Public Sans",
        style: "Regular"
      },
      letterSpacing: {
        units: "PERCENT",
        value: -.5
      }
    },
    "font/label/medium": {
      fontName: {
        family: "Public Sans",
        style: "Medium"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    },
    "font/label/regular": {
      fontName: {
        family: "Public Sans",
        style: "Regular"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    }
  }],
  [GS.SERIF]: [{
    "font/title/bold": {
      fontName: {
        family: "Domine",
        style: "Bold"
      },
      letterSpacing: {
        units: "PERCENT",
        value: -2
      }
    },
    "font/title/regular": {
      fontName: {
        family: "Domine",
        style: "Regular"
      },
      letterSpacing: {
        units: "PERCENT",
        value: -2
      }
    },
    "font/body/bold": {
      fontName: {
        family: "Outfit",
        style: "SemiBold"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    },
    "font/body/medium": {
      fontName: {
        family: "Outfit",
        style: "Medium"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    },
    "font/body/regular": {
      fontName: {
        family: "Outfit",
        style: "Regular"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    },
    "font/label/medium": {
      fontName: {
        family: "Outfit",
        style: "Medium"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    },
    "font/label/regular": {
      fontName: {
        family: "Outfit",
        style: "Regular"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    }
  }, {
    "font/title/bold": {
      fontName: {
        family: "Roboto Serif",
        style: "Bold"
      },
      letterSpacing: {
        units: "PERCENT",
        value: -2
      }
    },
    "font/title/regular": {
      fontName: {
        family: "Roboto Serif",
        style: "Regular"
      },
      letterSpacing: {
        units: "PERCENT",
        value: -2
      }
    },
    "font/body/bold": {
      fontName: {
        family: "Public Sans",
        style: "Bold"
      },
      letterSpacing: {
        units: "PERCENT",
        value: -.5
      }
    },
    "font/body/medium": {
      fontName: {
        family: "Public Sans",
        style: "SemiBold"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    },
    "font/body/regular": {
      fontName: {
        family: "Public Sans",
        style: "Regular"
      },
      letterSpacing: {
        units: "PERCENT",
        value: -.5
      }
    },
    "font/label/medium": {
      fontName: {
        family: "Public Sans",
        style: "Medium"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    },
    "font/label/regular": {
      fontName: {
        family: "Public Sans",
        style: "Regular"
      },
      letterSpacing: {
        units: "PERCENT",
        value: 0
      }
    }
  }]
};
function u(e) {
  return e[Math.floor(Math.random() * e.length)];
}
export function $$p1(e) {
  let t = {
    numberVariableMap: {},
    colorVariableMap: {}
  };
  let i = "true" === e[u7.DARK_MODE];
  for (let [r, a] of Object.entries(e || {})) switch (r.split("/")[0]) {
    case u7.COLOR:
      let e = parseHex(a);
      if (!e) continue;
      t.colorVariableMap[r] = qO(e, i ? lH.DARK : lH.LIGHT);
      break;
    case u7.CORNER_RADIUS:
    case u7.SPACING:
      let p = parseFloat(a);
      !isNaN(p) && p >= Xy && p <= Ne && (t.numberVariableMap[r] = p);
      break;
    case u7.FONT:
      switch (a) {
        case GS.SERIF:
        case GS.DEFAULT:
          t.fontVariableMap = u(c[a]);
          break;
        default:
          t.fontVariableMap = u(c[GS.DEFAULT]);
      }
  }
  return {
    darkMode: i,
    variableMaps: t
  };
}
export function $$h0(e, t) {
  try {
    return $$p1(e);
  } catch (i) {
    i instanceof Error && reportError(ServiceCategories.AI_GENERATION, Error(`[First Draft theme] Error parsing theme from output: ${i.message}`), {
      extra: {
        ...t,
        theme: JSON.stringify(e),
        error: i
      }
    });
    return {};
  }
}
export const t_ = $$h0;
export const Vx = $$p1;
