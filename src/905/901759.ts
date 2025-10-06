import dompurify from "dompurify";
import { reportError } from "../905/11";
import { createModalConfig, registerModal } from "../905/102752";
import { sha1BytesFromHex, sha1Hex } from "../905/125019";
import { hideModalHandler, showModalHandler } from "../905/156213";
import { ServiceCategories } from "../905/165054";
import { VisualBellActions } from "../905/302958";
import { getI18nString } from "../905/303541";
import { debugState } from "../905/407919";
import { trackEventAnalytics } from "../905/449184";
import { VisualBellIcon } from "../905/576487";
import { Timer } from "../905/609396";
import { FileBrowser } from "../905/658244";
import { logError, logInfo } from "../905/714362";
import { isAllowedOrgAtom } from "../905/758526";
import { getWhiteboardImportErrorMessage } from "../905/813637";
import { atomStoreManager } from "../figma_app/27355";
import { imageProcessor } from "../figma_app/291892";
import { throwTypeError } from "../figma_app/465776";
import { eg as _$$eg, a4 } from "../figma_app/576669";
import { Fullscreen, LogToConsoleMode, PerfResult, WhiteboardIntegrationType } from "../figma_app/763686";
let modalType: any | null = null;
export let pdfImportManagerInstance: PdfImportManager | null = null;
let C = "image/png";
// Original function name: T
/**
 * Converts a blob to a Uint8Array by reading its array buffer.
 * @param blob - The blob to convert.
 * @returns A promise that resolves to a Uint8Array.
 */
async function convertBlobToUint8Array(blob: Blob): Promise<Uint8Array> {
  return new Uint8Array(await blob.arrayBuffer());
}

// Original function name: k
/**
 * Fetches a blob from a URL if it starts with "blob:".
 * @param url - The URL to fetch from.
 * @returns A promise that resolves to the blob or null if not a blob URL or fetch fails.
 */
async function fetchBlobFromUrl(url: string): Promise<Blob | null> {
  if (!url.startsWith("blob:")) {
    return null;
  }
  const response = await fetch(url);
  return response.ok ? response.blob() : null;
}

// Original function name: R
/**
 * Processes and compresses a PDF image blob.
 * @param blob - The image blob.
 * @param width - The width of the image.
 * @param height - The height of the image.
 * @returns A promise that resolves to the compressed image bytes or null on error.
 */
async function processAndCompressImage(blob: Blob, width: number, height: number): Promise<Uint8Array | null> {
  const bytes = await convertBlobToUint8Array(blob);
  if (blob.type !== C) {
    logError("pdf", `PDF image type was: '${blob.type}', expected ${C}`);
    return null;
  }
  const rgba = (await imageProcessor.decodeAsync(bytes, blob.type, width, height, false)).rgba;
  if (!rgba) {
    logError("pdf", "Decoded PDF image returned no rgba data.");
    return null;
  }
  return imageProcessor.encodeInPlace(width, height, rgba, false, 1, false);
}

// Original function name: N
/**
 * Processes an SVG image element by fetching its blob, compressing it, and preparing image data.
 * @param imageElement - The SVG image element to process.
 * @returns A promise that resolves to the processed image data or null on error.
 */
async function processSvgImageElement(imageElement: SVGImageElement): Promise<any> {
  const href = imageElement.href.baseVal;
  const blob = await fetchBlobFromUrl(href);
  if (!blob) {
    return null;
  }
  const width = imageElement.width.baseVal.value;
  const height = imageElement.height.baseVal.value;
  const compressedBytes = await processAndCompressImage(blob, width, height);
  if (!compressedBytes) {
    throw new Error("Couldn't compress!!");
  }
  const sha1Hash = sha1Hex(compressedBytes);
  imageElement.removeAttribute("href");
  imageElement.removeAttribute("xlink:href");
  imageElement.setAttribute("imageHash", sha1Hash);
  const sha1Bytes = sha1BytesFromHex(sha1Hash);
  return {
    name: "Image",
    bytes: compressedBytes,
    sha1Hash,
    sha1Bytes
  };
}

// Original function name: P
/**
 * Extracts and processes all image elements from an SVG element.
 * @param svgElement - The SVG element containing images.
 * @returns A promise that resolves to an object with images array and error flag.
 */
async function extractImagesFromSvg(svgElement: SVGElement): Promise<{
  images: any[];
  hadImageError: boolean;
}> {
  const imageElements = Array.from(svgElement.querySelectorAll("image"));
  const results = await Promise.all(imageElements.map(processSvgImageElement));
  return results.reduce((acc, result) => {
    if (result !== null) {
      return {
        ...acc,
        images: [...acc.images, result]
      };
    } else {
      return {
        ...acc,
        hadImageError: true
      };
    }
  }, {
    images: [],
    hadImageError: false
  });
}
let O = {
  328: "\u015E",
  329: "\u015F",
  330: "\u0162",
  331: "\u0163",
  364: "f",
  365: "i",
  366: "l",
  367: "fi",
  368: "fl",
  369: "f",
  370: "g",
  371: "j"
};
let D = {
  156: "\u015E",
  163: "\u0162",
  276: "i",
  359: "\u015F",
  365: "\u0163",
  407: "a",
  408: "o",
  419: "0",
  420: "1",
  421: "2",
  422: "3",
  423: "4",
  425: "1/2",
  426: "1/4",
  446: "\xB7",
  447: "\xB7",
  550: "\u0308",
  551: "\u0307",
  552: "\u012C",
  553: "\u012D",
  554: "\u030B",
  555: "\u0302",
  556: "\u030C",
  557: "\u0306",
  558: "\u030A",
  559: "\u012F",
  560: "\u0304",
  561: "\u0135",
  562: "\u030F",
  564: "\u031B",
  565: "\u0143",
  566: "\u0324",
  567: "\u0326",
  568: "\u0327",
  569: "\u0328",
  570: "\u032E",
  571: "\u0331"
};
let L = {
  427: "f",
  428: "i",
  429: "l",
  430: "fi",
  431: "fl",
  432: "a",
  433: "b",
  434: "b",
  435: "e",
  436: "g",
  437: "h",
  438: "h",
  439: "i",
  440: "i",
  441: "l",
  442: "l",
  443: "m",
  444: "n",
  445: "p",
  446: "p",
  447: "r",
  448: "s",
  449: "t",
  450: "t",
  451: "u",
  452: "u",
  453: "v",
  454: "v",
  455: "w",
  456: "x",
  457: "x",
  458: "y",
  459: "z",
  460: "z",
  461: "j",
  462: "f",
  463: "f",
  464: "B",
  465: "C",
  466: "D",
  467: "F",
  468: "G",
  469: "H",
  470: "I",
  471: "J",
  472: "K",
  473: "P",
  474: "Q",
  475: "T",
  476: "U",
  477: "V",
  478: "W",
  479: "X",
  480: "Y",
  481: "q",
  482: "q",
  483: "c",
  484: "a",
  485: "c",
  486: "j",
  487: "w",
  488: "y",
  489: "n",
  490: "o",
  491: "o",
  492: "s",
  493: "e",
  494: "r",
  495: "d",
  496: "d",
  497: "m",
  498: "g",
  499: "k",
  500: "k",
  501: "t",
  502: "H",
  503: "C",
  504: "D",
  505: "Q",
  506: "U",
  507: "V",
  508: "X",
  509: "Y",
  510: "E",
  511: "A",
  512: "A",
  513: "B",
  514: "E",
  515: "T",
  516: "F",
  517: "G",
  518: "I",
  519: "J",
  520: "K",
  521: "L",
  522: "L",
  523: "M",
  524: "M",
  525: "N",
  526: "N",
  527: "O",
  528: "O",
  529: "P",
  530: "R",
  531: "R",
  532: "S",
  533: "S",
  534: "W",
  535: "Z",
  536: "Z"
};
let F = {
  211: "f",
  212: "i",
  213: "l",
  214: "fi",
  215: "t"
};
let M = {
  228: "i",
  240: "j",
  669: "0",
  670: "1",
  671: "2",
  672: "3",
  673: "4",
  674: "5",
  675: "6",
  676: "7",
  677: "8",
  678: "9",
  679: "0",
  680: "1",
  681: "2",
  682: "3",
  683: "4",
  684: "5",
  685: "6",
  686: "7",
  687: "8",
  688: "9",
  689: "1/2",
  690: "1/3",
  691: "1/3",
  692: "1/4",
  693: "1/4",
  694: "1/5",
  695: "1/5",
  696: "1/5",
  697: "1/5",
  698: "1/6",
  699: "1/6",
  700: "1/7",
  701: "1/8",
  702: "1/8",
  703: "1/8",
  704: "1/8",
  705: "1/9",
  764: "\u0326",
  765: "\u030C",
  771: "\u0301",
  772: "\u0300",
  773: "\u0309",
  774: "\u0303",
  775: "\u0301",
  776: "\u030C",
  777: "\u0300",
  778: "\u0301",
  779: "\u0306",
  780: "\u0300",
  781: "\u0309",
  782: "\u0304",
  783: "\u0303",
  798: "\u0309",
  799: "\u0301",
  800: "\u0300",
  801: "\u0309",
  802: "\u0303",
  803: "\u0301",
  804: "\u030C",
  805: "\u0300",
  806: "\u0301",
  807: "\u0306",
  808: "\u0300",
  809: "\u0309",
  810: "\u0304",
  811: "\u0303"
};
let j = {
  103: "/",
  228: "i",
  240: "j",
  649: "0",
  650: "1",
  651: "2",
  652: "3",
  653: "4",
  654: "5",
  655: "6",
  656: "7",
  657: "8",
  658: "9",
  659: "\u2070",
  660: "\xB9",
  661: "\xB2",
  662: "\xB3",
  663: "\u2074",
  664: "\u2075",
  665: "\u2076",
  666: "\u2077",
  667: "\u2078",
  668: "\u2079",
  744: "\u0326",
  745: "\u030C",
  751: "\u0301",
  752: "\u0300",
  753: "\u0309",
  754: "\u0303",
  755: "\u0301",
  756: "\u030C",
  757: "\u0300",
  758: "\u0301",
  759: "\u0306",
  760: "\u0300",
  761: "\u0309",
  762: "\u0304",
  763: "\u0303",
  778: "\u0309",
  779: "\u0301",
  780: "\u0300",
  781: "\u0309",
  782: "\u0303",
  783: "\u0301",
  784: "\u030C",
  785: "\u0300",
  786: "\u0301",
  787: "\u0306",
  788: "\u0300",
  789: "\u0309",
  790: "\u0304",
  791: "\u0303"
};
let U = {
  103: "1/",
  170: "i",
  171: "l",
  228: "i",
  240: "j",
  649: "0",
  650: "1",
  651: "2",
  652: "3",
  653: "4",
  654: "5",
  655: "6",
  656: "7",
  657: "8",
  658: "9",
  659: "\u2070",
  660: "\xB9",
  661: "\xB2",
  662: "\xB3",
  663: "\u2074",
  664: "\u2075",
  665: "\u2076",
  666: "\u2077",
  667: "\u2078",
  668: "\u2079",
  744: "\u0326",
  745: "\u030C",
  751: "\u0301",
  752: "\u0300",
  753: "\u0309",
  754: "\u0303",
  755: "\u0301",
  756: "\u030C",
  757: "\u0300",
  758: "\u0301",
  759: "\u0306",
  760: "\u0300",
  761: "\u0309",
  762: "\u0304",
  763: "\u0303",
  778: "\u0309",
  779: "\u0301",
  780: "\u0300",
  781: "\u0309",
  782: "\u0303",
  783: "\u0301",
  784: "\u030C",
  785: "\u0300",
  786: "\u0301",
  787: "\u0306",
  788: "\u0300",
  789: "\u0309",
  790: "\u0304",
  791: "\u0303"
};
let B = {
  108: "a",
  116: "2",
  117: "3",
  123: "1",
  124: "o",
  126: "1/4",
  127: "1/2",
  282: "\u015E",
  283: "\u015F",
  404: "4",
  419: "t",
  422: "o",
  423: "h"
};
let V = {
  243: "i",
  567: "j",
  1539: "\u0268",
  2191: "\u02E5\u02E6",
  2192: "\u02E5\u02E7",
  2193: "\u02E5\u02E8",
  2194: "\u02E5\u02E9",
  2195: "\u02E6\u02E5",
  2196: "\u02E6\u02E6",
  2197: "\u02E6\u02E7",
  2198: "\u02E6\u02E8",
  2199: "\u02E6\u02E9",
  2200: "\u02E6",
  2201: "\u02E7\u02E5",
  2202: "\u02E7\u02E6",
  2203: "\u02E7\u02E7",
  2204: "\u02E7\u02E8",
  2205: "\u02E7\u02E9",
  2206: "\u02E7",
  2207: "\u02E8\u02E5",
  2208: "\u02E8\u02E6",
  2209: "\u02E8\u02E7",
  2210: "\u02E8\u02E8",
  2211: "\u02E8\u02E9",
  2212: "\u02E8",
  2213: "\u02E9\u02E5",
  2214: "\u02E9\u02E6",
  2215: "\u02E9\u02E7",
  2216: "\u02E9\u02E8",
  2217: "\u02E9\u02E9",
  2218: "\u02E9",
  2219: "\u02E5\u02E5",
  2220: "\u02E5\u02E6",
  2221: "\u02E5\u02E7",
  2222: "\u02E5\u02E8",
  2223: "\u02E5\u02E9",
  2224: "\u02E5",
  2225: "\u02E6\u02E5",
  2226: "\u02E6\u02E7",
  2227: "\u02E6\u02E8",
  2228: "\u02E6\u02E9",
  2229: "\u02E7\u02E5",
  2230: "\u02E7\u02E6",
  2231: "\u02E7\u02E7",
  2232: "\u02E7\u02E8",
  2233: "\u02E7\u02E9",
  2234: "\u02E7",
  2235: "\u02E8\u02E5",
  2236: "\u02E8\u02E6",
  2237: "\u02E8\u02E7",
  2238: "\u02E8\u02E8",
  2239: "\u02E8\u02E9",
  2240: "\u02E8",
  2241: "\u02E9\u02E5",
  2242: "\u02E9\u02E6",
  2243: "\u02E9\u02E7",
  2244: "\u02E9\u02E8",
  2245: "\u02E9\u02E9",
  2246: "\u02E9",
  2247: "\u02E5\u02E5",
  2248: "\u02E5\u02E6",
  2249: "\u02E5\u02E7",
  2250: "\u02E5\u02E8",
  2251: "\u02E5\u02E9",
  2252: "\u02E5",
  2253: "\u02E6\u02E5",
  2254: "\u02E6\u02E6",
  2255: "\u02E6\u02E7",
  2256: "\u02E6\u02E8",
  2257: "\u02E6\u02E9",
  2258: "\u02E6",
  2259: "\u02E7\u02E5",
  2260: "\u02E7\u02E6",
  2261: "\u02E7\u02E8",
  2262: "\u02E7\u02E9",
  2263: "\u02E8\u02E5",
  2264: "\u02E8\u02E6",
  2265: "\u02E8\u02E7",
  2266: "\u02E8\u02E8",
  2267: "\u02E8\u02E9",
  2268: "\u02E8",
  2269: "\u02E9\u02E5",
  2270: "\u02E9\u02E6",
  2271: "\u02E9\u02E7",
  2272: "\u02E9\u02E8",
  2273: "\u02E9\u02E9",
  2274: "\u02E9",
  2275: "\u02E5\u02E5",
  2276: "\u02E5\u02E6",
  2277: "\u02E5\u02E7",
  2278: "\u02E5\u02E8",
  2279: "\u02E5\u02E9",
  2280: "\u02E5",
  2281: "\u02E6\u02E5",
  2282: "\u02E6\u02E6",
  2283: "\u02E6\u02E7",
  2284: "\u02E6\u02E8",
  2285: "\u02E6\u02E9",
  2286: "\u02E6",
  2287: "\u02E7\u02E5",
  2288: "\u02E7\u02E6",
  2289: "\u02E7\u02E7",
  2290: "\u02E7\u02E8",
  2291: "\u02E7\u02E9",
  2292: "\u02E7",
  2293: "\u02E8\u02E5",
  2294: "\u02E8\u02E6",
  2295: "\u02E8\u02E7",
  2296: "\u02E8\u02E9",
  2297: "\u02E9\u02E5",
  2298: "\u02E9\u02E6",
  2299: "\u02E9\u02E7",
  2300: "\u02E9\u02E8",
  2301: "\u02E9\u02E9",
  2302: "\u02E9",
  2303: "\u02E5\u02E5",
  2304: "\u02E5\u02E6",
  2305: "\u02E5\u02E7",
  2306: "\u02E5\u02E8",
  2307: "\u02E5\u02E9",
  2308: "\u02E5",
  2309: "\u02E6\u02E5",
  2310: "\u02E6\u02E6",
  2311: "\u02E6\u02E7",
  2312: "\u02E6\u02E8",
  2313: "\u02E6\u02E9",
  2314: "\u02E6",
  2315: "\u02E7\u02E5",
  2316: "\u02E7\u02E6",
  2317: "\u02E7\u02E7",
  2318: "\u02E7\u02E8",
  2319: "\u02E7\u02E9",
  2320: "\u02E7",
  2321: "\u02E8\u02E5",
  2322: "\u02E8\u02E6",
  2323: "\u02E8\u02E7",
  2324: "\u02E8\u02E8",
  2325: "\u02E8\u02E9",
  2326: "\u02E8",
  2327: "\u02E9\u02E5",
  2328: "\u02E9\u02E6",
  2329: "\u02E9\u02E7",
  2330: "\u02E9\u02E8",
  2331: "\u0304\u0313\u0300",
  2332: "\u0304\u0313\u0301",
  2333: "\u0304\u0314\u0300",
  2334: "\u0304\u0314\u0301",
  2335: "\u0306\u0313\u0300",
  2336: "\u0306\u0313\u0301",
  2337: "\u0306\u0314\u0300",
  2338: "\u0306\u0314\u0301",
  2339: "\u0304\u0313\u0300",
  2340: "\u0304\u0313\u0301",
  2341: "\u0304\u0314\u0300",
  2342: "\u0304\u0314\u0301",
  2343: "\u0306\u0313\u0300",
  2344: "\u0306\u0313\u0301",
  2345: "\u0306\u0314\u0300",
  2346: "\u0306\u0314\u0301",
  2347: "\u0304\u0313\u0300",
  2348: "\u0304\u0313\u0301",
  2349: "\u0304\u0314\u0300",
  2350: "\u0304\u0314\u0301",
  2351: "\u0306\u0313\u0300",
  2352: "\u0306\u0313\u0301",
  2353: "\u0306\u0314\u0300",
  2354: "\u0306\u0314\u0301",
  2355: "\u0308\u0304\u0300",
  2356: "\u0308\u0304\u0301",
  2357: "\u0308\u0306\u0300",
  2358: "\u0308\u0306\u0301",
  2359: "\u0308\u0304\u0300",
  2360: "\u0308\u0304\u0301",
  2361: "\u0308\u0306\u0300",
  2362: "\u0308\u0306\u0301",
  2576: "\u0942",
  2797: "\u0941",
  2798: "\u0942",
  2799: "\u0943",
  2800: "\u0944",
  2801: "\u0941",
  2802: "\u0942",
  2803: "\u0943",
  2804: "\u0944",
  2805: "\u0941",
  2806: "\u0942",
  2807: "\u0A71",
  2808: "\u0A71",
  2809: "\u0941",
  2810: "\u0942",
  2811: "\u0943",
  2812: "\u0A95",
  2813: "\u0A95",
  2814: "\u093C\u0941",
  2815: "\u093C\u0942",
  2816: "\u093C\u0943",
  2817: "\u0902",
  2818: "\u0A0F",
  2819: "\u0B1C",
  2820: "\u0902",
  2821: "\u0A0F",
  2822: "\u0B1C",
  2823: "\u0902",
  2824: "\u0A0F",
  2825: "\u0B1C",
  2826: "\u0902",
  2827: "\u0A0F",
  2828: "\u0B1C",
  2829: "\u0902",
  2830: "\u0A0F",
  2831: "\u0B1C",
  2832: "\u0902",
  2833: "\u0A0F",
  2834: "\u0B1C",
  2835: "\u0902",
  2836: "\u0A0F",
  2837: "\u0B1C",
  2838: "\u0902",
  2839: "\u0A0F",
  2840: "\u0B1C",
  2841: "\u0902",
  2842: "\u0A0F",
  2843: "\u0B1C",
  2844: "\u0902",
  2846: "\u0902",
  2856: "\u0902",
  2868: "\u091F",
  2869: "\u091F\u0942",
  2870: "\u0920",
  2871: "\u0920\u0942",
  2872: "\u092F",
  2873: "\u0920",
  2874: "\u092F",
  2875: "\u0922",
  2876: "\u0921",
  2877: "\u0921\u0942",
  2878: "\u092F",
  2879: "\u0922",
  2880: "\u092F",
  2883: "\u0918",
  2884: "\u0917",
  2885: "\u092C",
  2886: "\u092D",
  2887: "\u0935",
  2888: "\u0927",
  2889: "\u0A23\u092F",
  2890: "\u0926",
  2891: "\u092E",
  2892: "\u092F",
  2896: "\u091A",
  2897: "\u0A16",
  2898: "\u0935",
  2899: "\u0A2E",
  2900: "\u0932",
  2901: "\u0928",
  2902: "\u091F",
  2903: "\u0A61",
  2904: "\u0920",
  2905: "\u0A62",
  2906: "\u0923",
  2907: "\u0928",
  2908: "\u092E",
  2909: "\u092F",
  2910: "\u0932",
  2911: "\u0935",
  2912: "\u0932",
  2916: "\u0B60",
  2917: "\u0936",
  2933: "\u0B69",
  2934: "\u0B6A",
  2935: "\u0B6B",
  2936: "\u0B6C",
  2937: "\u0B6D",
  2938: "\u0B6E",
  2939: "\u0B6F",
  2940: "\u0B70",
  2941: "\u0B71",
  2942: "\u0B72",
  2943: "\u0B73",
  2944: "\u0B74",
  2945: "\u0B69",
  2946: "\u0B6A",
  2947: "\u0B6B",
  2948: "\u0B6C",
  2949: "\u0B6D",
  2950: "\u0B6E",
  2951: "\u0B6F",
  2952: "\u0B70",
  2953: "\u0B71",
  2954: "\u0B72",
  2955: "\u0B73",
  2956: "\u0B74",
  2957: "\u0B69",
  2958: "\u0B6A",
  2959: "\u0B6B",
  2960: "\u0B6C",
  2961: "\u0B6D",
  2962: "\u0B6E",
  2963: "\u0B6F",
  2964: "\u0B70",
  2965: "\u0B71",
  2966: "\u0B72",
  2967: "\u0B73",
  2968: "\u0B74",
  2969: "\u0902",
  2970: "\u0940",
  2971: "\u0940",
  2972: "\u0940",
  2973: "\u0B01",
  2974: "\u0B01",
  2975: "\u0B01",
  2976: "\u0B02",
  2977: "\u0B02",
  2978: "\u0B02",
  2979: "\u0B03",
  2980: "\u0B03",
  2981: "\u0B03",
  2982: "\u0941",
  2983: "\u0941",
  2985: "\u0942",
  2986: "\u0942",
  2987: "\u0943",
  2988: "\u0943",
  2989: "\u0944",
  2990: "\u0944",
  2991: "\u0962",
  2992: "\u0962",
  2993: "\u0962",
  2994: "\u0963",
  2995: "\u0963",
  2996: "\u0963",
  2997: "\u094D",
  3015: "\u0941",
  3016: "\u0941",
  3017: "\u0B99\u0941",
  3018: "\u0942",
  3019: "\u0942",
  3020: "\u0B99\u0942",
  3021: "\u0943",
  3022: "\u0943",
  3023: "\u0B99\u0943",
  3024: "\u0944",
  3025: "\u0962",
  3026: "\u0963",
  3027: "\u094D",
  3028: "\u094D",
  3029: "\u0B99\u094D",
  3030: "\u0941",
  3031: "\u0942",
  3032: "\u0943",
  3036: "\u094D",
  3040: "\u0901",
  3041: "\u0901",
  3042: "\u0901",
  3043: "\u0901",
  3044: "\u0901",
  3045: "\u0901",
  3046: "\u0901",
  3047: "\u0901",
  3048: "\u0901",
  3049: "\u0BE8",
  3050: "\u0BE8",
  3051: "\u0BE8"
};
let G = {
  19: "0",
  20: "1",
  21: "2",
  22: "3",
  23: "4",
  24: "5",
  25: "6",
  26: "7",
  27: "8",
  28: "9",
  44: "I",
  142: "\u0300",
  143: "\u0301",
  144: "\xCE",
  145: "\xEE",
  234: "\u0303",
  236: "\u0304",
  238: "\u0306",
  240: "\u012E",
  242: "\u0323",
  244: "IJ",
  288: "\u015E",
  289: "\u015F",
  346: "\u038A",
  359: "\u0399",
  375: "\u03CA",
  564: "i",
  565: "l",
  605: "fi",
  606: "fl",
  713: "\u04C0",
  728: "\u04CF",
  837: "\u1EC8",
  839: "\u1ECA",
  898: "1",
  899: "0",
  900: "1",
  901: "2",
  902: "3",
  903: "4",
  904: "5",
  905: "6",
  906: "7",
  907: "8",
  908: "9",
  909: "f",
  911: "\u0162",
  912: "\u0163",
  913: "g",
  915: "\u0306",
  916: "\u0323"
};
let z = {
  8: "\u22150",
  108: "a",
  116: "2",
  117: "3",
  123: "1",
  124: "o",
  126: "1\u22154",
  127: "1\u22152",
  128: "1\u22154",
  293: "s",
  297: "\u015E",
  298: "\u015F",
  299: "\u0162",
  300: "\u0163",
  609: "\u0301",
  631: "\u0498",
  632: "\u0499",
  633: "\u04AA",
  634: "\u04AB",
  681: "\u0492",
  682: "\u0493",
  683: "\u04AA",
  684: "\u04AB",
  699: '"',
  700: '"',
  701: '"',
  702: '"',
  703: "'",
  704: '"',
  715: "i",
  716: "l",
  717: "\u030C",
  718: "l",
  719: "1/"
};
let H = {
  8: "\u22150",
  108: "a",
  124: "o",
  126: "1\u22154",
  127: "1\u22152",
  128: "1\u22154",
  297: "\u015E",
  298: "\u015F",
  299: "\u0162",
  300: "\u0163",
  609: "\u0301",
  631: "\u0498",
  632: "\u0499",
  633: "\u04AA",
  634: "\u04AB",
  681: "\u0492",
  682: "\u0493",
  683: "\u04AA",
  684: "\u04AB",
  699: '"',
  700: '"',
  701: '"',
  702: '"',
  703: "'",
  704: '"',
  705: "1",
  715: "i",
  716: "l",
  717: "\u030C"
};
let W = {
  327: "f",
  328: "i",
  329: "l",
  330: "fi",
  331: "fl"
};
let K = {
  20: "\u025A",
  21: "\u025E",
  22: "\u0258",
  23: "\u0255",
  24: "\u0257",
  25: "\u0256",
  26: "\u025B",
  27: "\u0259",
  28: "\u025D",
  29: "\u025C",
  115: "2",
  116: "3",
  122: "1",
  444: "i",
  445: "l",
  446: "fi",
  447: "fl",
  453: "2",
  454: "1",
  455: "0",
  456: "9",
  457: "8",
  458: "7",
  459: "6",
  460: "5",
  461: "4",
  462: "3",
  463: "2",
  464: "1",
  465: "0",
  466: "z",
  467: "y",
  468: "x",
  469: "w",
  470: "v",
  471: "u",
  472: "t",
  473: "s",
  474: "r",
  475: "q",
  476: "p",
  477: "o",
  478: "n",
  479: "m",
  480: "l",
  481: "k",
  482: "j",
  483: "i",
  484: "h",
  485: "g",
  486: "f",
  487: "dollar",
  488: "sterling",
  489: "yen",
  490: "gamma",
  491: "delta",
  492: "theta",
  493: "lambda",
  494: "xi",
  495: "pi",
  496: "sigma1",
  497: "phi",
  498: "psi",
  499: "omega",
  500: "\u0452",
  501: "\u0454",
  502: "\u0459",
  503: "\u045A",
  504: "\u045B",
  505: "\u045F",
  506: "\u0431",
  507: "\u0434",
  508: "\u0436",
  509: "\u0437",
  510: "\u0438",
  511: "\u043A",
  512: "\u043B",
  513: "\u0443",
  514: "\u0446",
  515: "\u0447",
  516: "\u0448",
  517: "\u0449",
  518: "\u044A",
  519: "\u044B",
  520: "\u044C",
  521: "\u044D",
  522: "\u044E",
  523: "\u044F",
  524: "\u0493",
  525: "\u0497",
  526: "\u049B",
  527: "\u049D",
  528: "\u04A1",
  529: "\u04A9",
  530: "\u04B1",
  531: "\u04B3",
  532: "\u04B5",
  533: "\u04B9",
  534: "\u04BB",
  535: "\u04BD",
  536: "\u04D9",
  537: "\u04E1",
  538: "\u04E9",
  539: "lira",
  540: "Euro",
  541: "\u2116",
  542: "\u20BD",
  543: "3",
  544: "4",
  545: "5",
  546: "6",
  547: "7",
  548: "8",
  549: "9",
  552: "e",
  556: "K",
  557: "k",
  558: "K",
  559: "k",
  560: "d",
  561: "c",
  562: "b",
  563: "a",
  571: "\u0491",
  574: "0",
  575: "4",
  576: "5",
  577: "6",
  578: "7",
  579: "8",
  580: "9",
  581: "C",
  582: "G",
  583: "D",
  584: "O",
  585: "Q",
  586: "\u025E",
  587: "\u0258",
  588: "\u0255",
  589: "\u0257",
  590: "\u0256",
  591: "\u0259",
  594: "oe",
  595: "\u025C",
  597: "\u024C",
  598: "\u024E",
  599: "\u024D",
  600: "\u024B",
  601: "\u024F",
  602: "\u0265",
  603: "6",
  604: "\u0253",
  605: "8",
  606: "\u024A",
  607: "j",
  608: "\u0458",
  609: "i",
  611: "\u0456",
  613: "\u025A",
  614: "\u024F",
  615: "b",
  616: "c",
  617: "d",
  618: "g",
  619: "o",
  620: "p",
  621: "q",
  622: "e",
  623: "\u026A",
  624: "\u024A",
  625: "&",
  639: "\u0300",
  640: "\u0301",
  642: "\u0303",
  647: "\u0300",
  648: "\u0301",
  651: "\u0300",
  652: "\u0301",
  655: "\u0303",
  656: "\u0300",
  657: "\u0301",
  659: "\u0303",
  661: "\u0300",
  662: "\u0301",
  665: "\u0301",
  666: "\u0300",
  667: "\u0301",
  669: "\u0303",
  674: "\u0300",
  675: "\u0301",
  678: "\u0300",
  679: "\u0301",
  682: "\u0303",
  683: "\u0300",
  684: "\u0301",
  686: "\u0303",
  688: "\u0300",
  689: "\u0301",
  692: "\u0301",
  730: "\u0303",
  731: "\u0303",
  745: "\u0301",
  746: "\u0301",
  753: "\u0301",
  754: "\u0301",
  766: "\u0301",
  767: "\u0301",
  772: "\u0301",
  773: "\u0301",
  778: "\u015E",
  779: "\u015F",
  788: "\u0303",
  789: "\u0303",
  805: "\u0301",
  806: "\u0301",
  818: "\u0300",
  819: "\u0301",
  821: "\u0303",
  824: "\u0301",
  826: "\u0300",
  827: "\u0301",
  830: "\u0300",
  831: "\u0301",
  834: "\u0303",
  835: "\u0300",
  836: "\u0301",
  838: "\u0303",
  840: "\u0300",
  841: "\u0301",
  844: "\u0301",
  845: "\u0304",
  846: "\u0306",
  848: "\u0301",
  850: "\u0323",
  851: "\u030C",
  852: "\u030C",
  853: "\u0304",
  854: "\u0306",
  855: "\u0323",
  857: "\u030C",
  859: "\u0306",
  860: "\u0323",
  861: "\u0123",
  863: "\u0303",
  864: "\u0304",
  865: "\u0306",
  867: "\u0323",
  869: "\u0137",
  870: "\u0301",
  871: "\u013C",
  872: "\u030C",
  873: "\u0323",
  874: "\u0301",
  875: "\u0146",
  876: "\u030C",
  877: "\u0304",
  878: "\u0306",
  880: "\u0301",
  881: "\u0157",
  882: "\u030C",
  883: "\u0301",
  885: "\u015F",
  886: "\u030C",
  887: "\u021B",
  888: "\u030C",
  889: "\u0163",
  890: "\u0303",
  891: "\u0304",
  892: "\u0306",
  899: "\u0301",
  900: "\u0323",
  901: "\u030C",
  979: "\u0300",
  980: "\u0300",
  981: "\u0301",
  982: "\u0301",
  985: "\u0300",
  986: "\u0300",
  992: "\u0301",
  993: "\u0301",
  1054: "\u0323",
  1055: "\u0323",
  1056: "\u0309",
  1057: "\u0309",
  1078: "\u0323",
  1079: "\u0323",
  1080: "\u0309",
  1081: "\u0309",
  1082: "\u0303",
  1083: "\u0303",
  1094: "\u0309",
  1095: "\u0309",
  1096: "\u0323",
  1098: "\u0323",
  1099: "\u0323",
  1100: "\u0309",
  1101: "\u0309",
  1112: "\u0301",
  1113: "\u0301",
  1114: "\u0300",
  1115: "\u0300",
  1116: "\u0309",
  1117: "\u0309",
  1118: "\u0303",
  1119: "\u0303",
  1120: "\u0323",
  1121: "\u0323",
  1122: "\u0323",
  1123: "\u0323",
  1124: "\u0309",
  1125: "\u0309",
  1126: "\u0301",
  1127: "\u0301",
  1128: "\u0300",
  1129: "\u0300",
  1130: "\u0309",
  1131: "\u0309",
  1132: "\u0303",
  1133: "\u0303",
  1134: "\u0323",
  1135: "\u0323",
  1136: "\u0323",
  1137: "\u0323",
  1138: "\u0309",
  1139: "\u0309",
  1140: "\u0303",
  1141: "\u0303",
  1165: "\u024B",
  1166: "\u024C",
  1167: "\u024D",
  1168: "\u024E",
  1169: "6",
  1170: "8",
  1171: "\u0253",
  1172: "\u0265",
  1173: "\u0301",
  1175: "\u0300",
  1176: "\u0300",
  1177: "\u030F",
  1178: "\u030F",
  1179: "\u030F",
  1180: "\u030F",
  1181: "\u030F",
  1182: "\u030F",
  1183: "\u030F",
  1184: "\u030F",
  1185: "\u030F",
  1186: "\u030F",
  1187: "\u030F",
  1188: "\u030F",
  1192: "\u0323",
  1193: "\u0323",
  1194: "\uF6C3",
  1195: "\uF6C3",
  1198: "\u0301",
  1199: "\u0301",
  1200: "\u0323",
  1201: "\u0323",
  1202: "\u0323",
  1203: "\u0323",
  1204: "\u0323",
  1205: "\u0323",
  1206: "\u0323",
  1207: "\u0323",
  1208: "\u0303\u0301",
  1211: "\u0323",
  1212: "\u0323",
  1213: "\u0323",
  1214: "\u0323",
  1215: "\u0323",
  1216: "\u0323",
  1217: "\u0303\u0301",
  1218: "\u0303",
  1219: "\u0303",
  1220: "\u0323",
  1221: "\u0323",
  1222: "\u0323",
  1223: "\u0323",
  1224: "\u0323",
  1225: "\u0323",
  1234: "\u03B1",
  1235: "\u03D0",
  1236: "\u03B5",
  1237: "\u0396",
  1238: "\u0371",
  1239: "\u0196",
  1240: "\u039A",
  1241: "\u03BC",
  1242: "\u039D",
  1243: "\u039F",
  1244: "\u03C1",
  1245: "\u03C4",
  1250: "\u0451",
  1251: "\u0453",
  1252: "\u0455",
  1253: "\u0456",
  1254: "\u0457",
  1255: "\u0458",
  1256: "\u045C",
  1257: "\u045E",
  1258: "\u0430",
  1259: "\u0432",
  1260: "\u0433",
  1261: "\u0435",
  1262: "\u0439",
  1263: "\u043C",
  1264: "\u043D",
  1265: "\u043E",
  1266: "\u043F",
  1267: "\u0440",
  1268: "\u0441",
  1269: "\u0442",
  1270: "\u0445",
  1271: "\u0499",
  1272: "\u04A3",
  1273: "\u04AB",
  1274: "\u04AF",
  1275: "\u04BF",
  1276: "\u04E3",
  1277: "\u04EF",
  1278: "\u0444",
  1279: "ij",
  1280: "\u0301",
  1281: "\u0301",
  1282: "\u0219",
  1283: "\u0300",
  1284: "\u0301",
  1286: "\u0300",
  1291: "\u034F",
  1292: "\u0358",
  1293: "\u1ECB"
};
let Y = {
  413: "a",
  414: "b",
  415: "c",
  416: "d",
  417: "e",
  418: "f",
  419: "g",
  420: "h",
  421: "i",
  422: "j",
  423: "k",
  424: "l",
  425: "m",
  426: "n",
  427: "o",
  428: "q",
  429: "r",
  430: "s",
  431: "t",
  432: "u",
  433: "v",
  434: "w",
  435: "x",
  436: "y",
  437: "z",
  471: "p",
  634: "\u0163",
  668: "\u0300",
  669: "\u0301",
  671: "\u0303",
  674: "\u0301",
  676: "\u0300",
  677: "\u0301",
  680: "\u0300",
  681: "\u0301",
  684: "\u0303",
  685: "\u0300",
  686: "\u0301",
  688: "\u0303",
  690: "\u0300",
  691: "\u0301",
  694: "\u0301",
  695: "\u0304",
  696: "\u0306",
  698: "\u0301",
  701: "\u030C",
  702: "\u030C",
  703: "\u0304",
  704: "\u0306",
  705: "\u0323",
  707: "\u030C",
  709: "\u0306",
  713: "\u0303",
  714: "\u0304",
  715: "\u0306",
  720: "\u0301",
  722: "\u030C",
  723: "\u0323",
  724: "\u0301",
  726: "\u030C",
  727: "\u0304",
  728: "\u0306",
  730: "\u0301",
  732: "\u030C",
  733: "\u0301",
  735: "\u015F",
  736: "\u030C",
  738: "\u030C",
  739: "\u0303",
  740: "\u0304",
  741: "\u0306",
  748: "\u0301",
  749: "\u0323",
  750: "\u030C"
};
let q = {
  403: "i",
  404: "l",
  408: "r",
  421: "a",
  422: "b",
  423: "c",
  424: "d",
  425: "e",
  426: "f",
  427: "g",
  428: "h",
  429: "i",
  430: "j",
  431: "k",
  432: "l",
  433: "m",
  434: "n",
  435: "o",
  436: "q",
  438: "s",
  439: "t",
  440: "u",
  441: "v",
  442: "w",
  443: "x",
  444: "y",
  445: "z",
  469: "0",
  470: "1",
  471: "2",
  472: "3",
  474: "4",
  475: "5",
  476: "6",
  479: "s",
  480: "a",
  481: "c",
  482: "C",
  483: "G",
  484: "S",
  485: "O",
  486: "C",
  487: "G",
  488: "7",
  489: "8",
  490: "9",
  491: "p",
  679: "\u0300",
  680: "\u0301",
  682: "\u0303",
  685: "\u0301",
  687: "\u0300",
  688: "\u0301",
  691: "\u0300",
  692: "\u0301",
  695: "\u0303",
  696: "\u0300",
  697: "\u0301",
  699: "\u0303",
  701: "\u0300",
  702: "\u0301",
  705: "\u0301",
  706: "\u0304",
  707: "\u0306",
  709: "\u0301",
  712: "\u030C",
  713: "\u030C",
  714: "\u0304",
  715: "\u0306",
  716: "\u0323",
  718: "\u030C",
  720: "\u0306",
  724: "\u0303",
  725: "\u0304",
  726: "\u0306",
  728: "\u0323",
  731: "\u0301",
  733: "\u030C",
  734: "\u0323",
  735: "\u0301",
  737: "\u030C",
  738: "\u0304",
  739: "\u0306",
  741: "\u0301",
  743: "\u030C",
  744: "\u0301",
  746: "\u015F",
  747: "\u030C",
  748: "\u0163",
  749: "\u030C",
  750: "\u0303",
  751: "\u0304",
  752: "\u0306",
  759: "\u0301",
  760: "\u0323",
  761: "\u030C"
};
let $ = {
  282: "\u015E",
  283: "\u015F",
  284: "\u0162",
  285: "\u0163",
  394: "G",
  395: "\u0306",
  396: "\u0122",
  397: "\u0323",
  398: "Q",
  399: "a",
  400: "\u0301",
  401: "\u0306",
  404: "\u0300",
  405: "\u0304",
  408: "\u0303",
  410: "ij",
  411: "j",
  412: "eng",
  413: "t",
  415: "\u030C",
  416: "\u0163",
  417: "\u021B",
  418: "0",
  419: "2",
  420: "\u24EA",
  421: "\u2461",
  424: "at"
};
let Z = {
  7: "$",
  8: "%",
  14: "+",
  19: "0",
  20: "1",
  21: "2",
  22: "3",
  23: "4",
  24: "5",
  25: "6",
  26: "7",
  27: "8",
  28: "9",
  31: "<",
  32: "=",
  33: ">",
  101: "\xA3",
  103: "\xA5",
  113: "\xB1",
  124: "/4",
  125: "/2",
  126: "/4",
  151: "\xD7",
  183: "\xF7",
  325: "\u015E",
  326: "\u015F",
  357: "\u2030",
  361: "\u20AC",
  365: "/3",
  367: "/8",
  368: "/8",
  375: "-",
  379: "\u2245",
  380: "\u2260",
  381: "\u2264",
  382: "\u2265",
  384: "f",
  385: "i",
  386: "l",
  387: "fi",
  388: "fl",
  389: "\u0163",
  394: "a",
  395: "b",
  396: "c",
  397: "d",
  398: "e",
  399: "f",
  400: "g",
  401: "h",
  402: "i",
  403: "\u0237",
  404: "k",
  405: "l",
  406: "m",
  407: "n",
  408: "o",
  409: "p",
  410: "q",
  411: "r",
  412: "s",
  413: "t",
  414: "u",
  415: "v",
  416: "w",
  417: "x",
  418: "y",
  419: "z",
  420: "\u0301",
  421: "\u0306",
  424: "\u0300",
  425: "\u0304",
  428: "\u0301",
  429: "\u0303",
  430: "ae",
  431: "\u0301",
  432: "\u0301",
  433: "\u030C",
  436: "\u0323",
  437: "\u030C",
  439: "\u0301",
  440: "\u0306",
  441: "\u030C",
  444: "\u0323",
  445: "\u0300",
  446: "\u0304",
  449: "\u0306",
  452: "\u0323",
  455: "\u0301",
  456: "\u0306",
  459: "\u0323",
  460: "\u0300",
  461: "\u0304",
  463: "\u0303",
  464: "ij",
  467: "\u0301",
  468: "\u030C",
  470: "\u0323",
  472: "\u0301",
  473: "\u030C",
  475: "\u0303",
  477: "\u0301",
  478: "\u0306",
  481: "\u0300",
  483: "\u0304",
  485: "\u0301",
  486: "\u0303",
  487: "oe",
  488: "\u0301",
  489: "\u030C",
  491: "\u0301",
  492: "\u030C",
  493: "\u015F",
  497: "\u030C",
  499: "\u0301",
  500: "\u0306",
  503: "\u0300",
  505: "\u0304",
  508: "\u0303",
  509: "\u0301",
  511: "\u0300",
  513: "\u0301",
  516: "\u0300",
  517: "\u0301",
  518: "\u030C",
  519: "\u0323",
  520: "b",
  521: "fb",
  522: "h",
  523: "fh",
  526: "j",
  527: "fj",
  528: "k",
  529: "fk",
  530: "&",
  544: "\xA1",
  545: "\xBF",
  546: "!",
  547: "\xA1",
  548: "?",
  549: "\xBF",
  554: "/",
  555: "\\",
  558: "/",
  559: "\\",
  562: "\xB7",
  563: "\xB7",
  564: "-",
  565: "-",
  566: "-",
  567: "(",
  568: ")",
  569: "[",
  570: "]",
  571: "{",
  572: "}",
  573: "(",
  574: ")",
  575: "[",
  576: "]",
  577: "{",
  578: "}",
  579: "@",
  581: "\u20AC",
  582: "$",
  583: "\xA3",
  584: "\xA5",
  586: "\u20AC",
  587: "$",
  588: "\xA2",
  589: "\xA3",
  590: "\xA5",
  592: "\u20AC",
  593: "$",
  594: "\xA3",
  595: "\xA5",
  596: "0",
  597: "1",
  598: "2",
  599: "3",
  600: "4",
  601: "5",
  602: "6",
  603: "7",
  604: "8",
  605: "9",
  606: "0",
  607: "1",
  608: "2",
  609: "3",
  610: "4",
  611: "5",
  612: "6",
  613: "7",
  614: "8",
  615: "9",
  616: "0",
  617: "1",
  618: "2",
  619: "3",
  620: "4",
  621: "5",
  622: "6",
  623: "7",
  624: "8",
  625: "9",
  626: "%",
  627: "\u2030",
  628: "%",
  629: "\u2030",
  630: "%",
  631: "\u2030",
  632: "+",
  633: "-",
  634: "\xD7",
  635: "\xF7",
  636: "=",
  637: "<",
  638: ">",
  639: "\xB1",
  640: "\u2264",
  641: "\u2265",
  642: "\u2260",
  643: "\u2245",
  644: "+",
  645: "-",
  646: "\xD7",
  647: "\xF7",
  648: "=",
  649: "<",
  650: ">",
  651: "\xB1",
  652: "\u2264",
  653: "\u2265",
  654: "\u2260",
  655: "\u2245",
  656: "+",
  657: "-",
  658: "\xD7",
  659: "\xF7",
  660: "=",
  661: "<",
  662: ">",
  663: "\xB1",
  664: "\u2264",
  665: "\u2265",
  666: "\u2260",
  667: "\u2245",
  668: ".",
  669: ",",
  670: ":",
  671: ";",
  672: " "
};
// Q function (original name: Q)
async function convertPdfPageToSvg(e: any, t: any, i: any) {
  let fontMap: any;
  let r = await _$$eg();
  let svgGraphics = new r.SVGGraphics(e.commonObjs, e.objs);

  // Wrap SVG graphics methods to handle errors gracefully
  function isKnownError(error: Error): boolean {
    let message = error.message;
    return message.startsWith("Unknown RadialAxial type") || message.startsWith("Unknown IR type") || message === "Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.";
  }
  const errorHandlers = [{
    functionName: svgGraphics.setStrokeColorN.name,
    isErrorOfInterest: isKnownError,
    callOnFailure: () => {
      svgGraphics.current.setStrokeColorN = "#000000";
      logInfo("pdf", `Unsupported stroke, using: #000000`, void 0, {
        logToConsole: LogToConsoleMode.ALWAYS
      });
    }
  }, {
    functionName: svgGraphics.setFillColorN.name,
    isErrorOfInterest: isKnownError,
    callOnFailure: () => {
      svgGraphics.current.setFillColorN = "#000000";
      logInfo("pdf", `Unsupported fill, using: #000000`, void 0, {
        logToConsole: LogToConsoleMode.ALWAYS
      });
    }
  }, {
    functionName: svgGraphics.paintInlineImageXObject.name,
    isErrorOfInterest: (e: Error) => e.message === "invalid format",
    callOnFailure: () => {
      logInfo("pdf", "Unsupported image", void 0, {
        logToConsole: LogToConsoleMode.ALWAYS
      });
    }
  }, {
    functionName: svgGraphics.addFontStyle.name,
    isErrorOfInterest: (e: Error) => e.message.startsWith("addFontStyle: No font data available"),
    callOnFailure: () => {
      logInfo("pdf", "Unsupported font", void 0, {
        logToConsole: LogToConsoleMode.ALWAYS
      });
    }
  }];

  // Apply error handling to each method
  errorHandlers.forEach(handler => {
    wrapMethodWithErrorHandler(svgGraphics, handler);
  });
  function wrapMethodWithErrorHandler(target: any, handler: any) {
    const {
      functionName,
      isErrorOfInterest,
      callOnFailure
    } = handler;
    const originalMethod = target[functionName].bind(target);
    target[functionName] = (...args: any[]) => {
      try {
        originalMethod(...args);
      } catch (error) {
        if (isErrorOfInterest(error)) {
          callOnFailure();
        } else {
          throw error;
        }
      }
    };
  }
  let operatorList = await e.getOperatorList();
  let fontIdsToBold = new Set<string>();

  // Process operator list
  operatorList.fnArray.forEach((op: any, index: number) => {
    if (op === r.OPS.setFont) {
      let fontId = operatorList.argsArray[index][0];
      let font = svgGraphics.commonObjs.get(fontId);
      if (!font?.name) {
        return;
      }

      // Map font to character set
      fontMap = getFontCharacterMap(font.name);

      // Track bold fonts
      if (i.findFontIdsToBold) {
        let fontName = font.name;
        if (/(bold|700)/i.test(fontName)) {
          fontIdsToBold.add(font.loadedName);
        }
      }
    }

    // Process text
    if (op === r.OPS.showText) {
      operatorList.argsArray[index][0].forEach((char: any) => {
        if (typeof char === "object") {
          if (char.unicode !== "\0") {
            char.fontChar = char.unicode;
          } else if (fontMap?.[char.originalCharCode]) {
            char.fontChar = fontMap[char.originalCharCode];
          } else {
            char.fontChar = "\u25A1"; // Empty box character
          }

          // Mark spaces as in-font
          if (char.fontChar === " ") {
            char.isInFont = true;
          }
        }
      });
    }
  });

  // Remove clip paths if not preserving them
  if (!i.preserveClipPaths) {
    const isNotClipOp = (op: any) => op !== r.OPS.clip && op !== r.OPS.eoClip;
    operatorList.argsArray = operatorList.argsArray.filter((arg: any, i: number) => isNotClipOp(operatorList.fnArray[i]));
    operatorList.fnArray = operatorList.fnArray.filter(isNotClipOp);
  }
  return {
    svgElement: await svgGraphics.getSVG(operatorList, t),
    additionalData: {
      fontIdsToBold
    }
  };
}

// Helper function to get font character map
function getFontCharacterMap(fontName: string): any {
  let lowerName = fontName.toLowerCase();
  if (lowerName.includes("abril")) return O;
  if (lowerName.includes("bangers")) return D;
  if (lowerName.includes("caveat")) return L;
  if (lowerName.includes("fredoka")) return F;
  if (lowerName.includes("ibm-plex-mono")) return M;
  if (lowerName.includes("ibm-plex-sans")) return j;
  if (lowerName.includes("ibm-plex-serif")) return U;
  if (lowerName.includes("lemon-tuesday")) return B;
  if (lowerName.includes("noto-sans")) return V;
  if (lowerName.includes("open-sans")) return G;
  if (lowerName.includes("ptsans") || lowerName.includes("pt-sans")) return z;
  if (lowerName.includes("ptserif") || lowerName.includes("pt-serif")) return H;
  if (lowerName.includes("rammetto")) return W;
  if (lowerName.includes("roboto-mono")) return Y;
  if (lowerName.includes("roboto-slab")) return q;
  if (lowerName.includes("roboto")) return K;
  if (lowerName.includes("spoof")) return $;
  if (lowerName.includes("tiempos")) return Z;
  return undefined;
}

// J function (original name: J)
function markForRemoval(element: any, context: any) {
  context.pendingRemovals ??= new Set();
  context.pendingRemovals.add(element);
}

// ee function (original name: ee)
function removeMarkedElements(context: any) {
  let pendingRemovals = context.pendingRemovals;
  if (pendingRemovals) {
    context.children = context.children.filter((child: any) => !pendingRemovals.has(child));
    context.pendingRemovals = void 0;
  }
}

// et function (original name: et)
function multiplyMatrices(a: number[], b: number[]): number[] {
  return [a[0] * b[0] + a[2] * b[1], a[1] * b[0] + a[3] * b[1], a[0] * b[2] + a[2] * b[3], a[1] * b[2] + a[3] * b[3], a[0] * b[4] + a[2] * b[5] + a[4], a[1] * b[4] + a[3] * b[5] + a[5]];
}

// ei function (original name: ei)
function transformPoint(matrix: number[], point: {
  x: number;
  y: number;
}): {
  x: number;
  y: number;
} {
  return {
    x: matrix[0] * point.x + matrix[2] * point.y + matrix[4],
    y: matrix[1] * point.x + matrix[3] * point.y + matrix[5]
  };
}
// en function (original name: removeInvisibleElements)
const removeInvisibleElements = {
  name: "removeInvisibleElements",
  fn: () => ({
    element: {
      exit: (element: any, context: any) => {
        removeMarkedElements(element);
        const isPath = element.name === "path";
        const hasFill = element.attributes.fill && element.attributes.fill !== "none";
        const hasStroke = element.attributes.stroke && element.attributes.stroke !== "none";
        if (isPath && !hasFill && !hasStroke) {
          markForRemoval(element, context);
        }
      }
    }
  })
};

// er function (original name: removeTSpanGlyphPositions)
const removeTSpanGlyphPositions = {
  name: "removeTSpanGlyphPositions",
  fn: () => ({
    element: {
      enter: (element: any) => {
        const isTSpan = element.name === "tspan";
        const hasXAttribute = element.attributes.x;
        if (isTSpan && hasXAttribute && element.attributes.x.startsWith("0 ")) {
          delete element.attributes.x;
        }
      }
    }
  })
};

// ea function (original name: combineOutlineAndFill)
const combineOutlineAndFill = {
  name: "combineOutlineAndFill",
  fn: () => ({
    element: {
      enter: (element: any) => {
        // Group paths by their 'd' attribute
        const pathGroups: Record<string, any[]> = element.children.reduce((acc: Record<string, any[]>, child: any) => {
          if (child.type === "element" && child.name === "path") {
            const pathData = child.attributes.d || "";
            if (!acc[pathData]) {
              acc[pathData] = [];
            }
            acc[pathData].push(child);
          }
          return acc;
        }, {});

        // Track elements to remove
        const elementsToRemove = new Set<any>();

        // Process each group
        Object.values(pathGroups).forEach((group: any[]) => {
          if (group.length > 1) {
            // Merge attributes from all paths in the group
            const mergedAttributes: Record<string, string> = {};
            group.forEach((pathElement, index) => {
              Object.entries(pathElement.attributes).forEach(([attrName, attrValue]) => {
                if (attrValue && attrValue !== "none") {
                  mergedAttributes[attrName] = attrValue as string;
                }
              });
              // Mark duplicate paths for removal (skip the first one)
              if (index > 0) {
                elementsToRemove.add(pathElement);
              }
            });
            // Apply merged attributes to the first path
            group[0].attributes = mergedAttributes;
          }
        });

        // Remove duplicate paths
        if (elementsToRemove.size > 0) {
          element.children = element.children.filter((child: any) => !elementsToRemove.has(child));
        }
      }
    }
  })
};

// es function (original name: combineLucidGroupedOutlineAndFill)
const combineLucidGroupedOutlineAndFill = {
  name: "combineLucidGroupedOutlineAndFill",
  fn: () => ({
    element: {
      enter: (element: any) => {
        // Only process 'g' elements
        if (element.type !== "element" || element.name !== "g") {
          return;
        }

        // Group nested 'g' elements by their transform and path 'd' attributes
        const groupMap: Record<string, any[]> = element.children.reduce((acc: Record<string, any[]>, child: any) => {
          if (child.type === "element" && child.name === "g") {
            const pathElement = child.children[0];
            if (pathElement && pathElement.type === "element" && pathElement.name === "path") {
              const key = JSON.stringify([child.attributes.transform, pathElement.attributes.d]);
              if (!acc[key]) {
                acc[key] = [];
              }
              acc[key].push(child);
            }
          }
          return acc;
        }, {});

        // Track elements to remove
        const elementsToRemove = new Set<any>();

        // Process each group
        Object.values(groupMap).forEach((group: any[]) => {
          if (group.length > 1) {
            // Merge attributes from all paths in the group
            const mergedAttributes: Record<string, string> = {};
            group.forEach((groupElement, index) => {
              Object.entries(groupElement.children[0].attributes).forEach(([attrName, attrValue]) => {
                if (attrValue && attrValue !== "none") {
                  mergedAttributes[attrName] = attrValue as string;
                }
              });
              // Mark duplicate groups for removal (skip the first one)
              if (index > 0) {
                elementsToRemove.add(groupElement);
              }
            });
            // Apply merged attributes to the first path
            group[0].children[0].attributes = mergedAttributes;
          }
        });

        // Remove duplicate groups
        if (elementsToRemove.size > 0) {
          element.children = element.children.filter((child: any) => !elementsToRemove.has(child));
        }
      }
    }
  })
};

// eo function (original name: eo)
function extractGradientId(fillAttribute: string): string | undefined {
  const match = /url\((.+)\)/.exec(fillAttribute);
  if (!match) {
    return undefined;
  }
  const id = match[1];
  // Remove quotes if present
  return "'\"".includes(id[0]) ? id.slice(1, -1) : id;
}

// el function (original name: replaceRectGradientFillsWithLastStopColor)
const replaceRectGradientFillsWithLastStopColor = {
  name: "replaceRectGradientFillsWithLastStopColor",
  fn: () => {
    // Store gradient ID to color mapping
    const gradientMap: Record<string, string> = {};
    return {
      element: {
        enter: (element: any) => {
          // Process linearGradient elements
          if (element.name === "linearGradient") {
            const lastStop = element.children[element.children.length - 1];
            if (lastStop && lastStop.type === "element" && lastStop.name === "stop") {
              const stopColor = lastStop.attributes["stop-color"];
              if (stopColor) {
                gradientMap[`#${element.attributes.id}`] = stopColor;
              }
            }
          }
          // Process rect elements with fill attributes
          else if (element.name === "rect" && element.attributes.fill) {
            const gradientId = extractGradientId(element.attributes.fill);
            if (gradientId && Object.prototype.hasOwnProperty.call(gradientMap, gradientId)) {
              element.attributes.fill = gradientMap[gradientId];
            }
          }
        }
      }
    };
  }
};

// ed function (original name: addWhitespaceToTspans)
const addWhitespaceToTspans = {
  name: "addWhitespaceToTspans",
  fn: () => ({
    element: {
      enter: (element: any) => {
        if (element.name === "tspan") {
          element.attributes["white-space"] = "pre";
        }
      }
    }
  })
};

// ec function (original name: removeWhiteMiroBackground)

const removeWhiteMiroBackground = {
  name: "removeWhiteMiroBackground",
  fn: () => {
    let svgHeight = 0;
    let svgWidth = 0;
    let transformStack: number[][] = [];
    return {
      element: {
        enter: (element: any, parent: any) => {
          // Capture SVG dimensions
          if (element.name === "svg") {
            svgHeight = parseFloat(element.attributes.height || "0");
            svgWidth = parseFloat(element.attributes.width || "0");
            return;
          }

          // Process transform attributes
          if (element.attributes.transform) {
            const matrix = parseTransform(element.attributes.transform);
            transformStack.push(matrix);
          }

          // Check if element is a background path and mark for removal
          if (isBackgroundPath(element, parent, svgHeight, svgWidth, transformStack)) {
            markForRemoval(element, parent);
          }
        },
        exit: (element: any, _context: any) => {
          removeMarkedElements(element);
          if (element.attributes.transform) {
            transformStack.pop();
          }
        }
      }
    };
  }
};

// Helper function to parse transform strings into matrices
function parseTransform(transformString: string): number[] {
  let matrix = [1, 0, 0, 1, 0, 0];
  if (!transformString || transformString.trim() === "") {
    return matrix;
  }
  const transforms = transformString.match(/(matrix|translate|scale|rotate|skewX|skewY)\s*\(([-\d\s.,e]+)\)/g);
  if (!transforms) {
    return matrix;
  }
  transforms.forEach(transform => {
    const parts = transform.split(/\s*\(\s*|\s*\)\s*/);
    const type = parts[0];
    const params = parts[1];
    if (!params) {
      return;
    }
    const values = params.split(/[\s,]+/).map(Number);
    switch (type) {
      case "matrix":
        if (values.length === 6) {
          matrix = multiplyMatrices(matrix, values);
        }
        break;
      case "translate":
        const tx = values[0] || 0;
        const ty = values[1] || 0;
        matrix = multiplyMatrices(matrix, [1, 0, 0, 1, tx, ty]);
        break;
      case "scale":
        const sx = values[0] || 1;
        const sy = values.length > 1 ? values[1] : sx;
        matrix = multiplyMatrices(matrix, [sx, 0, 0, sy, 0, 0]);
        break;
      case "rotate":
        const angle = (values[0] || 0) * Math.PI / 180;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const cx = values[1] || 0;
        const cy = values[2] || 0;
        if (cx === 0 && cy === 0) {
          matrix = multiplyMatrices(matrix, [cos, sin, -sin, cos, 0, 0]);
        } else {
          matrix = multiplyMatrices(matrix, [1, 0, 0, 1, cx, cy]);
          matrix = multiplyMatrices(matrix, [cos, sin, -sin, cos, 0, 0]);
          matrix = multiplyMatrices(matrix, [1, 0, 0, 1, -cx, -cy]);
        }
        break;
      case "skewX":
        const skewXAngle = (values[0] || 0) * Math.PI / 180;
        matrix = multiplyMatrices(matrix, [1, 0, Math.tan(skewXAngle), 1, 0, 0]);
        break;
      case "skewY":
        const skewYAngle = (values[0] || 0) * Math.PI / 180;
        matrix = multiplyMatrices(matrix, [1, Math.tan(skewYAngle), 0, 1, 0, 0]);
        break;
    }
  });
  return matrix;
}

// Helper function to determine if an element is a background path
function isBackgroundPath(element: any, parent: any, svgHeight: number, svgWidth: number, transformStack: number[][]): boolean {
  if (!svgHeight || !svgWidth || parent.type !== "element" || element.name !== "path") {
    return false;
  }
  const fill = element.attributes.fill;
  if (fill !== "#fff" && fill !== "#f2f2f2") {
    return false;
  }
  const dAttribute = element.attributes.d || "";
  const vMatch = /v(\d+)/.exec(dAttribute);
  const hMatch = /h(\d+)/.exec(dAttribute);
  const vValue = vMatch ? parseFloat(vMatch[1]) : 0;
  const hValue = hMatch ? parseFloat(hMatch[1]) : 0;
  const {
    height,
    width
  } = calculateTransformedDimensions(transformStack, hValue, vValue);
  return height > 0.9 * svgHeight && width > 0.9 * svgWidth;
}

// Helper function to calculate transformed dimensions
function calculateTransformedDimensions(transforms: number[][], hValue: number, vValue: number): {
  height: number;
  width: number;
} {
  const combinedMatrix = transforms.reduce((acc, matrix) => multiplyMatrices(acc, matrix), [1, 0, 0, 1, 0, 0]);
  const {
    x,
    y
  } = transformPoint(combinedMatrix, {
    x: 0,
    y: 0
  });
  const {
    x: x1,
    y: y1
  } = transformPoint(combinedMatrix, {
    x: hValue,
    y: 0
  });
  const {
    x: x2,
    y: y2
  } = transformPoint(combinedMatrix, {
    x: hValue,
    y: vValue
  });
  const {
    x: x3,
    y: y3
  } = transformPoint(combinedMatrix, {
    x: 0,
    y: vValue
  });
  return {
    height: Math.max(y, y1, y2, y3) - Math.min(y, y1, y2, y3),
    width: Math.max(x, x1, x2, x3) - Math.min(x, x1, x2, x3)
  };
}

// eu function (original name: removeWhiteMuralBackground)
const removeWhiteMuralBackground = {
  name: "removeWhiteMuralBackground",
  fn: () => {
    let svgHeight = 0;
    let svgWidth = 0;
    return {
      element: {
        enter: (element: any, parent: any) => {
          if (element.name === "svg") {
            svgHeight = parseFloat(element.attributes.height || "0");
            svgWidth = parseFloat(element.attributes.width || "0");
          } else {
            (function isMuralBackgroundPath(element: any, parent: any, svgHeight: number, svgWidth: number): boolean {
              if (svgHeight && svgWidth && parent.type === "element" && element.name === "path" && element.attributes.fill === "#fafafa") {
                const vValue = parseFloat(/v(\d+)/.exec(element.attributes.d || "")?.[1] || "0");
                const hValue = parseFloat(/h(\d+)/.exec(element.attributes.d || "")?.[1] || "0");
                const widthDiff = Math.abs(svgWidth - hValue / 0.75);
                if (Math.abs(svgHeight - vValue / 0.75) < 10 && widthDiff < 10) {
                  return true;
                }
              }
              return false;
            })(element, parent, svgHeight, svgWidth) && markForRemoval(element, parent);
          }
        },
        exit: (element: any, _context: any) => {
          removeMarkedElements(element);
        }
      }
    };
  }
};

// ep function (original name: repairAndBoldVectorizedTextFromMiro)
const repairAndBoldVectorizedTextFromMiro = {
  name: "repairAndBoldVectorizedTextFromMiro",
  fn: () => ({
    element: {
      enter: (element: any, parent: any) => {
        // Check if element is a path within a group that contains specific text structure
        if (element.name !== "path" || parent.type !== "element" || parent.name !== "g") {
          return;
        }
        const textElement = parent.children[1];
        if (!textElement || textElement.type !== "element" || textElement.name !== "text") {
          return;
        }
        const firstTspan = textElement.children[0];
        if (firstTspan && firstTspan.type === "element" && firstTspan.name === "tspan" && firstTspan.attributes["fill-opacity"] === "0") {
          // Mark the path for removal
          markForRemoval(element, parent);

          // Update all tspan elements
          for (const tspan of textElement.children) {
            if (tspan.type === "element" && tspan.name === "tspan") {
              tspan.attributes["fill-opacity"] = "1";
              tspan.attributes["font-weight"] = "bold";
            }
          }
        }
      },
      exit: (element: any, _context: any) => {
        removeMarkedElements(element);
      }
    }
  })
};

// em function (original name: em)
function getSVGOConfig(whiteboardType: WhiteboardIntegrationType) {
  const pathDataOptions = {
    makeArcs: false,
    curveSmoothShorthands: false
  };
  switch (whiteboardType) {
    case WhiteboardIntegrationType.LUCID:
      return {
        name: "preset-default",
        params: {
          overrides: {
            removeUnknownsAndDefaults: false,
            mergePaths: false,
            convertPathData: pathDataOptions
          }
        }
      };
    case WhiteboardIntegrationType.MIRO:
    case WhiteboardIntegrationType.MURAL:
    case WhiteboardIntegrationType.JAMBOARD:
    case WhiteboardIntegrationType.UNKNOWN:
    default:
      return {
        name: "preset-default",
        params: {
          overrides: {
            removeUnknownsAndDefaults: false,
            moveGroupAttrsToElems: false,
            collapseGroups: false,
            convertPathData: pathDataOptions
          }
        }
      };
  }
}
// PDF import messages
const PDF_IMPORT_PROGRESS_TYPE = "PDF import progress"; // eh
const PDF_IMPORT_FAILURE_TYPE = "PDF import failure"; // eg

/**
 * Loads a PDF document from byte array
 * @param pdfBytes - The PDF file as byte array
 * @returns Promise resolving to PDF document or null if invalid
 */
async function loadPdfDocument(pdfBytes: Uint8Array) {
  // ef
  const pdfLibrary = await _$$eg();
  const documentLoadingTask = pdfLibrary.getDocument({
    data: pdfBytes,
    verbosity: pdfLibrary.VerbosityLevel.ERRORS,
    isEvalSupported: false
  });
  let pdfDocument = null;
  try {
    pdfDocument = await documentLoadingTask.promise;
  } catch (error) {
    if (error instanceof pdfLibrary.InvalidPDFException) {
      // Silently handle invalid PDF exception
    } else {
      throw error;
    }
  }
  return pdfDocument;
}

/**
 * Checks if two rectangles are approximately equal within a tolerance
 * @param rect1 - First rectangle
 * @param rect2 - Second rectangle
 * @param tolerance - Tolerance for comparison (default: 1e-4)
 * @returns True if rectangles are approximately equal
 */
function areRectsEqual(rect1: any, rect2: any, tolerance = 1e-4): boolean {
  // e_
  return Math.abs(rect1.top - rect2.top) < tolerance && Math.abs(rect1.left - rect2.left) < tolerance && Math.abs(rect1.bottom - rect2.bottom) < tolerance && Math.abs(rect1.right - rect2.right) < tolerance;
}

/**
 * Checks if the first rectangle contains the second rectangle within a tolerance
 * @param outerRect - The containing rectangle
 * @param innerRect - The rectangle to check if contained
 * @param tolerance - Tolerance factor for expansion
 * @returns True if outerRect contains innerRect
 */
function doesRectContainRect(outerRect: any, innerRect: any, tolerance: number): boolean {
  // eA
  const horizontalExpansion = tolerance * Math.abs(outerRect.right - outerRect.left);
  const verticalExpansion = tolerance * Math.abs(outerRect.bottom - outerRect.top);
  return outerRect.top - verticalExpansion < innerRect.top && outerRect.left - horizontalExpansion < innerRect.left && outerRect.right + horizontalExpansion > innerRect.right && outerRect.bottom + verticalExpansion > innerRect.bottom;
}

/**
 * Finds a matching element for text positioning based on width comparison
 * @param elementData - Element data containing element and rect
 * @returns Matching element or undefined
 */
function findMatchingElement(elementData: any) {
  // ey
  const isApproximatelyEqual = (value1: number, value2: number, tolerance = 1) => Math.abs(value1 - value2) < tolerance;
  const parentElement = elementData.element.parentElement;
  const grandParentElement = parentElement?.parentElement;
  if (!grandParentElement) {
    return undefined;
  }
  const parentIndex = Array.from(grandParentElement.children).indexOf(parentElement);
  if (parentIndex <= 1) {
    return undefined;
  }
  const previousSibling = grandParentElement.children[parentIndex - 1];
  if (previousSibling.children.length !== 2) {
    return undefined;
  }
  const firstChildWidth = previousSibling.children[0].getBoundingClientRect().width;
  const secondChildWidth = previousSibling.children[1].getBoundingClientRect().width;
  const currentElementWidth = elementData.rect.width;
  if (isApproximatelyEqual(currentElementWidth, firstChildWidth) && isApproximatelyEqual(currentElementWidth, secondChildWidth)) {
    return previousSibling;
  }
  return undefined;
}

/**
 * Main function to convert PDF to SVG strings with extracted images
 * @param pdfBytes - The PDF file as byte array
 * @param whiteboardType - Type of whiteboard integration
 * @returns Object containing SVG strings and extracted images
 */
async function convertPdfToSvgStrings(pdfBytes: Uint8Array, whiteboardType: WhiteboardIntegrationType) {
  // eb
  const [pdfLibrary, svgoLibrary] = await Promise.all([_$$eg(), a4()]);
  const pdfDocument = await loadPdfDocument(pdfBytes);
  if (!pdfDocument) {
    return {
      svgStrings: [],
      extractedImages: {
        images: [],
        hadImageError: false
      }
    };
  }
  const pageCount = pdfDocument.numPages;
  if (pageCount < 1) {
    return {
      svgStrings: [],
      extractedImages: {
        images: [],
        hadImageError: false
      }
    };
  }

  /**
   * Processes a single PDF page and converts it to SVG
   * @param pageIndex - Zero-based page index
   * @param whiteboardType - Type of whiteboard integration
   * @returns Processed page data with SVG and images
   */
  async function processPdfPage(pageIndex: number, whiteboardType: WhiteboardIntegrationType) {
    // s
    const page = await pdfDocument.getPage(pageIndex + 1);
    const scale = pdfLibrary.PixelsPerInch.PDF_TO_CSS_UNITS;
    const viewport = page.getViewport({
      scale
    });
    const isLucidIntegration = whiteboardType === WhiteboardIntegrationType.LUCID;
    const {
      svgElement,
      additionalData: {
        fontIdsToBold
      }
    } = await convertPdfPageToSvg(page, viewport, {
      preserveClipPaths: isLucidIntegration,
      findFontIdsToBold: !isLucidIntegration
    });

    // Apply whiteboard-specific fixes
    if (isLucidIntegration) {
      fixLucidSpecificImages(svgElement);
    } else if (whiteboardType === WhiteboardIntegrationType.MIRO) {
      fixMiroSpecificImages(svgElement);
    }
    const extractedImages = await extractImagesFromSvg(svgElement);

    // Analyze text elements for positioning
    document.body.prepend(svgElement);
    const textElements = Array.from(svgElement.querySelectorAll("text")).map((element: SVGTextElement) => ({
      element,
      rect: element.getBoundingClientRect(),
      matched: false
    }));
    document.body.removeChild(svgElement);

    // Apply Lucid-specific text processing
    if (isLucidIntegration) {
      processLucidTextElements(svgElement);
    }

    // Get annotations and process links
    const annotations = await page.getAnnotations();
    const linkAnnotations = extractLinkAnnotations(annotations, viewport, scale);
    const unprocessedLinks = processLinkAnnotations(svgElement, linkAnnotations, isLucidIntegration, textElements);

    // Apply additional Lucid-specific processing
    if (isLucidIntegration) {
      matchTextWithPaths(svgElement, textElements);
      removeFullPageBackgrounds(svgElement);
    }

    // Optimize SVG using SVGO
    const svgoPlugins = createSvgoPlugins(whiteboardType, fontIdsToBold);
    const {
      data: optimizedSvg
    } = svgoLibrary(normalizeSvgNamespaces(svgElement.outerHTML), {
      plugins: svgoPlugins
    });

    // Handle Mural-specific link processing
    let finalSvg = optimizedSvg;
    if (whiteboardType === WhiteboardIntegrationType.MURAL && unprocessedLinks.length > 0) {
      finalSvg = processMuralLinks(optimizedSvg, unprocessedLinks);
    }
    return {
      optimizedSVG: finalSvg,
      extractedImages
    };
  }

  /**
   * Fixes Lucid-specific image issues
   * @param svgElement - The SVG element to process
   */
  function fixLucidSpecificImages(svgElement: SVGElement) {
    svgElement.querySelectorAll("image").forEach(imageElement => {
      if (imageElement.getAttribute("width") === "154px" && imageElement.getAttribute("height") === "142px" && imageElement.getAttribute("x") === "0" && imageElement.getAttribute("y") === "-142" && imageElement.getAttribute("transform") === "scale(0.0064935065 -0.0070422535)") {
        const rectElement = document.createElement("rect");
        rectElement.setAttribute("fill", "#fff");
        imageElement.replaceWith(rectElement);
      }
    });
  }

  /**
   * Fixes Miro-specific image issues
   * @param svgElement - The SVG element to process
   */
  function fixMiroSpecificImages(svgElement: SVGElement) {
    svgElement.querySelectorAll("image").forEach(imageElement => {
      const parentGroup = imageElement.parentElement;
      const nextSiblingGroup = parentGroup?.nextElementSibling;
      const pathElement = nextSiblingGroup?.children ? nextSiblingGroup.children[0] : null;
      if (parentGroup?.nodeName === "svg:g" && nextSiblingGroup?.nodeName === "svg:g" && pathElement && pathElement.getAttribute("fill") && pathElement.getAttribute("fill-rule") && pathElement.getAttribute("fill-opacity")) {
        imageElement.remove();
        parentGroup?.remove();
        pathElement.setAttribute("nodeType", "sticky");
      }
    });
  }

  /**
   * Processes Lucid-specific text elements
   * @param svgElement - The SVG element to process
   */
  function processLucidTextElements(svgElement: SVGElement) {
    Array.from(svgElement.querySelectorAll("text")).forEach(textElement => {
      const tspanElements = Array.from(textElement.querySelectorAll("tspan"));
      if (tspanElements.length > 0) {
        const lastTspan = tspanElements[tspanElements.length - 1];
        textElement.setAttribute("font-size", lastTspan.getAttribute("font-size") || "");
        textElement.setAttribute("fill", "none");
        if (lastTspan.getAttribute("font-weight") === "bold") {
          textElement.setAttribute("font-style", "italic");
        }
        if (lastTspan.getAttribute("font-style") === "italic") {
          textElement.setAttribute("font-weight", "bold");
        }
        const combinedText = tspanElements.reduce((text, tspan) => text + (tspan.textContent || ""), "");
        textElement.textContent = combinedText;
      }
    });
  }

  /**
   * Extracts link annotations from PDF page
   * @param annotations - PDF annotations
   * @param viewport - PDF viewport
   * @param scale - Scale factor
   * @returns Array of link annotations with positions
   */
  function extractLinkAnnotations(annotations: any[], viewport: any, scale: number) {
    const linkAnnotations: any[] = [];
    annotations.filter(annotation => annotation.annotationType === 2).map(annotation => ({
      url: annotation.url,
      rect: convertPdfRectToScreenRect(annotation.rect, viewport.viewBox, scale)
    })).forEach(linkData => {
      const isDuplicate = linkAnnotations.some(existing => linkData.url === existing.url && areRectsEqual(linkData.rect, existing.rect));
      if (!isDuplicate) {
        linkAnnotations.push(linkData);
      }
    });
    return linkAnnotations;
  }

  /**
   * Converts PDF rectangle coordinates to screen coordinates
   * @param pdfRect - Rectangle in PDF coordinates
   * @param viewBox - PDF viewport box
   * @param scale - Scale factor
   * @returns Rectangle in screen coordinates
   */
  function convertPdfRectToScreenRect(pdfRect: number[], viewBox: number[], scale: number) {
    const screenCoords = [pdfRect[0], viewBox[3] - pdfRect[1] + viewBox[1], pdfRect[2], viewBox[3] - pdfRect[3] + viewBox[1]].map(coord => coord * scale);
    return {
      top: Math.min(screenCoords[1], screenCoords[3]),
      left: Math.min(screenCoords[0], screenCoords[2]),
      right: Math.max(screenCoords[0], screenCoords[2]),
      bottom: Math.max(screenCoords[1], screenCoords[3])
    };
  }

  /**
   * Processes link annotations and embeds them in SVG
   * @param svgElement - The SVG element
   * @param linkAnnotations - Array of link annotations
   * @param isLucidIntegration - Whether this is Lucid integration
   * @param textElements - Array of text elements with positioning
   * @returns Array of unprocessed links
   */
  function processLinkAnnotations(svgElement: SVGElement, linkAnnotations: any[], isLucidIntegration: boolean, textElements: any[]) {
    if (!linkAnnotations.length) {
      return [];
    }
    document.body.prepend(svgElement);
    const unprocessedLinks: any[] = [];
    const pathElements = Array.from(svgElement.querySelectorAll("path")) as any[];
    const interactiveElements = Array.from(svgElement.querySelectorAll("image")).concat(pathElements).map(element => ({
      element,
      rect: element.getBoundingClientRect()
    }));
    linkAnnotations.forEach(({
      url,
      rect: linkRect
    }) => {
      // Try to match with text elements first
      const matchingTextElement = textElements.find(textData => {
        const tolerance = isLucidIntegration ? Math.min(Math.max(textData.rect.height, textData.rect.width) / 3, 15) : 15;
        return doesRectContainTextElement(textData.rect, linkRect, tolerance);
      });
      if (matchingTextElement) {
        const linkElement = document.createElementNS("http://www.w3.org/2000/svg", "a");
        linkElement.setAttribute("href", url);
        while (matchingTextElement.element.childNodes.length > 0) {
          linkElement.appendChild(matchingTextElement.element.childNodes[0]);
        }
        matchingTextElement.element.appendChild(linkElement);
        return;
      }

      // Try to match with interactive elements
      const matchingInteractiveElement = interactiveElements.find(elementData => areRectsEqual(linkRect, elementData.rect, 5));
      if (matchingInteractiveElement) {
        const correspondingElement = findMatchingElement(matchingInteractiveElement);
        if (correspondingElement) {
          const linkElement = document.createElement("a");
          linkElement.setAttribute("href", url);
          linkElement.innerText = url;
          const textElement = document.createElement("text");
          textElement.appendChild(linkElement);
          correspondingElement.appendChild(textElement);
          return;
        }
      }
      unprocessedLinks.push({
        url,
        rect: linkRect
      });
    });
    document.body.removeChild(svgElement);
    return unprocessedLinks;
  }

  /**
   * Checks if a rectangle contains a text element within tolerance
   * @param textRect - Text element rectangle
   * @param targetRect - Target rectangle
   * @param tolerance - Tolerance for containment
   * @returns True if text is contained within target
   */
  function doesRectContainTextElement(textRect: any, targetRect: any, tolerance = 15): boolean {
    return textRect.top - tolerance < targetRect.top && textRect.left - tolerance < targetRect.left && textRect.right + tolerance > targetRect.right && textRect.bottom + tolerance > targetRect.bottom;
  }

  /**
   * Matches text elements with corresponding path elements for Lucid integration
   * @param svgElement - The SVG element
   * @param textElements - Array of text elements with positioning
   */
  function matchTextWithPaths(svgElement: SVGElement, textElements: any[]) {
    document.body.prepend(svgElement);
    const pathElements = Array.from(svgElement.querySelectorAll("path")).map(element => ({
      element,
      rect: element.getBoundingClientRect()
    }));
    document.body.removeChild(svgElement);
    let pathIndex = 0;
    while (pathIndex < pathElements.length) {
      const pathData = pathElements[pathIndex];
      const matchingText = textElements.find(({
        rect,
        matched
      }) => !matched && doesRectContainRect(rect, pathData.rect, 0.2));
      if (matchingText) {
        const textLength = matchingText.element.textContent?.replace(" ", "")?.length || 0;
        let consecutivePathCount = 1;

        // Count consecutive paths that match the text area
        for (let i = 1; i < textLength && pathIndex + i < pathElements.length; i++) {
          if (doesRectContainRect(matchingText.rect, pathElements[pathIndex + i].rect, 0.2)) {
            consecutivePathCount++;
          } else {
            break;
          }
        }
        if (consecutivePathCount !== textLength) {
          pathIndex++;
          continue;
        }
        matchingText.matched = true;
        processMatchedTextAndPaths(matchingText, pathData, pathElements, pathIndex, textLength);
        pathIndex += textLength;
      } else {
        pathIndex++;
      }
    }
  }

  /**
   * Processes matched text and path elements
   * @param matchingText - The matching text element
   * @param pathData - The path element data
   * @param pathElements - Array of all path elements
   * @param pathIndex - Current path index
   * @param textLength - Length of text
   */
  function processMatchedTextAndPaths(matchingText: any, pathData: any, pathElements: any[], pathIndex: number, textLength: number) {
    const addSpaceTspan = (textElement: any) => {
      const spaceTspan = document.createElement("tspan");
      spaceTspan.textContent = " ";
      textElement.appendChild(spaceTspan);
    };
    const parentTransform = matchingText.element.parentElement?.getAttribute("transform") || "";

    // Handle special text formatting
    if (matchingText.element.children[0]?.nodeName === "a" && matchingText.element.textContent?.endsWith(" ")) {
      addSpaceTspan(matchingText.element);
    }
    if (matchingText.element.nextSibling?.textContent === " ") {
      addSpaceTspan(matchingText.element);
      matchingText.element.nextSibling?.remove();
    }

    // Handle text with child elements
    if (matchingText.element.childElementCount) {
      const groupElement = document.createElement("g");
      groupElement.appendChild(matchingText.element);
      groupElement.setAttribute("transform", parentTransform);
      const linkElement = document.createElement("a");
      linkElement.setAttribute("href", "#");
      groupElement.appendChild(linkElement);
      pathData.element.parentElement?.insertAdjacentElement("beforebegin", groupElement);
    } else {
      matchingText.element.setAttribute("transform", `${parentTransform} ${matchingText.element.getAttribute("transform") || ""}`);
      pathData.element.parentElement?.insertAdjacentElement("beforebegin", matchingText.element);
    }

    // Apply fill color from path to text
    const pathFill = pathData.element.getAttribute("fill");
    matchingText.element.setAttribute("fill", pathFill && pathFill !== "none" ? pathFill : "#000000");

    // Remove processed path elements
    for (let i = 0; i < textLength; i++) {
      const {
        element
      } = pathElements[pathIndex + i];
      const parentElement = element.parentElement;
      if (parentElement && parentElement.parentElement) {
        parentElement.parentElement.removeChild(parentElement);
      }
    }
  }

  /**
   * Removes full-page background elements
   * @param svgElement - The SVG element
   */
  function removeFullPageBackgrounds(svgElement: SVGElement) {
    document.body.prepend(svgElement);
    const pathElements = Array.from(svgElement.querySelectorAll("path")).map(element => ({
      element,
      rect: element.getBoundingClientRect()
    }));
    const svgRect = svgElement.getBoundingClientRect();
    document.body.removeChild(svgElement);
    pathElements.forEach(({
      element,
      rect
    }) => {
      if (element.getAttribute("fill") !== "none" && !element.hasAttribute("stroke") && doesRectContainRect(rect, svgRect, 0.01) && doesRectContainRect(svgRect, rect, 0.01)) {
        element.parentElement?.removeChild(element);
      }
    });
  }

  /**
   * Creates SVGO plugins configuration based on whiteboard type
   * @param whiteboardType - Type of whiteboard integration
   * @param fontIdsToBold - Set of font IDs that should be bold
   * @returns Array of SVGO plugins
   */
  function createSvgoPlugins(whiteboardType: WhiteboardIntegrationType, fontIdsToBold: Set<string>) {
    const isLucidIntegration = whiteboardType === WhiteboardIntegrationType.LUCID;
    const isMiroIntegration = whiteboardType === WhiteboardIntegrationType.MIRO;
    const isMuralIntegration = whiteboardType === WhiteboardIntegrationType.MURAL;
    const isJamboardIntegration = whiteboardType === WhiteboardIntegrationType.JAMBOARD;
    const isUnknownIntegration = !isLucidIntegration && !isMiroIntegration && !isMuralIntegration && !isJamboardIntegration;
    const backgroundRemovalPlugins = (isMiroIntegration || isJamboardIntegration || isUnknownIntegration ? [removeWhiteMiroBackground] : []).concat(isMuralIntegration || isUnknownIntegration ? [removeWhiteMuralBackground] : []);
    const boldTextPlugins = isLucidIntegration ? [] : [{
      name: "repairBoldText",
      fn: () => ({
        element: {
          enter: (element: any) => {
            if (element.name !== "tspan") return;
            const fontFamily = element.attributes["font-family"];
            if (fontFamily && fontIdsToBold.has(fontFamily)) {
              element.attributes["font-weight"] = "bold";
            }
          }
        }
      })
    }];
    return [...(isLucidIntegration ? [] : [removeInvisibleElements]), removeTSpanGlyphPositions, isLucidIntegration ? combineLucidGroupedOutlineAndFill : combineOutlineAndFill, ...(isLucidIntegration ? [replaceRectGradientFillsWithLastStopColor] : []), getSVGOConfig(whiteboardType), addWhitespaceToTspans, ...backgroundRemovalPlugins, ...boldTextPlugins, ...(isMiroIntegration || isJamboardIntegration || isUnknownIntegration ? [repairAndBoldVectorizedTextFromMiro] : [])];
  }

  /**
   * Processes Mural-specific links by embedding them in SVG
   * @param svgData - The SVG data string
   * @param unprocessedLinks - Array of unprocessed links
   * @returns Updated SVG data with embedded links
   */
  function processMuralLinks(svgData: string, unprocessedLinks: any[]): string {
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = dompurify().sanitize(svgData, {
      ADD_ATTR: ["imageHash"]
    });

    // Fix image hash attributes
    tempContainer.querySelectorAll("image").forEach(imageElement => {
      const imageHash = imageElement.getAttribute("imagehash");
      if (imageHash) {
        imageElement.setAttribute("imageHash", imageHash);
        imageElement.removeAttribute("imagehash");
      }
    });
    const svgElement = tempContainer.firstChild as SVGElement;
    embedLinksInMuralSvg(svgElement, unprocessedLinks);
    return normalizeSvgNamespaces(svgElement.outerHTML);
  }

  /**
   * Embeds links in Mural SVG
   * @param svgElement - The SVG element
   * @param links - Array of links to embed
   */
  function embedLinksInMuralSvg(svgElement: any, links: any[]) {
    const groupElement = svgElement.querySelector("g");
    if (!groupElement) return;
    const transform = groupElement.transform.baseVal.consolidate()?.matrix;
    const scaleX = transform ? transform.a : 1;
    const scaleY = transform ? transform.d : 1;
    const translateY = transform ? transform.f : 0;
    for (const linkData of links) {
      const linkElement = document.createElement("a");
      linkElement.setAttribute("href", linkData.url);
      linkElement.innerText = linkData.url;
      const textElement = document.createElement("text");
      textElement.setAttribute("fill", "#0d99ff");
      textElement.appendChild(linkElement);
      if (scaleY < 0) {
        textElement.setAttribute("transform", "scale(1 -1)");
      }
      const containerGroup = document.createElement("g");
      const transformValue = `translate(${linkData.rect.left / scaleX}, ${translateY / Math.abs(scaleY) + linkData.rect.top / scaleY})`;
      containerGroup.setAttribute("transform", transformValue);
      containerGroup.appendChild(textElement);
      groupElement.appendChild(containerGroup);
    }
  }

  /**
   * Consolidates results from all processed pages
   * @param pageResults - Array of page processing results
   * @returns Consolidated results with SVG strings and images
   */
  function consolidatePageResults(pageResults: any[]) {
    const svgStrings: string[] = [];
    const imageMap = new Map();
    let hadImageError = false;
    pageResults.forEach(({
      optimizedSVG,
      extractedImages: {
        images,
        hadImageError: pageHadError
      }
    }) => {
      svgStrings.push(optimizedSVG);
      hadImageError = hadImageError || pageHadError;
      images.forEach((image: any) => {
        if (!imageMap.has(image.sha1Hash)) {
          imageMap.set(image.sha1Hash, image);
        }
      });
    });
    return {
      svgStrings,
      extractedImages: {
        images: [...imageMap.values()],
        hadImageError
      }
    };
  }

  // Process all pages and consolidate results
  const pageResults = await Promise.all(Array.from(Array.from({
    length: pageCount
  })).map((_, index) => processPdfPage(index, whiteboardType)));
  return consolidatePageResults(pageResults);
}

/**
 * Normalizes SVG namespace prefixes
 * @param svgString - SVG string with namespaced elements
 * @returns SVG string with normalized namespaces
 */
function normalizeSvgNamespaces(svgString: string): string {
  // ev
  return svgString.replace(/<svg:/g, "<").replace(/<\/svg:/g, "</").replace(/xlink:/g, "");
}
// Original class name: eI
/**
 * Manages PDF import operations, including source selection, conversion, and error handling.
 */
class PdfImportManager {
  getPdfSourcePromise: Promise<any> | null = null;

  /**
   * Checks if PDF imports should be blocked based on application state.
   * @returns True if PDF imports are blocked.
   */
  shouldBlockPdfImports(): boolean {
    return atomStoreManager.get(isAllowedOrgAtom);
  }

  /**
   * Retrieves the PDF source type via a modal dialog.
   * @param pdfCount - Number of PDFs to import.
   * @returns Promise resolving to PDF source data.
   */
  getPdfSource(pdfCount: number): Promise<any> {
    if (!this.getPdfSourcePromise) {
      this.getPdfSourcePromise = new Promise(resolve => {
        debugState.dispatch(showModalHandler({
          type: modalType ??= registerModal(FileBrowser.createLazyComponent(() => import('../0c62c2fd/653470').then(e => e.PdfConfirmationModal), createModalConfig("PdfConfirmationModal"))),
          data: {
            fileImportDescription: getI18nString("file_browser.file_import_view.select_pdf_source_description_within_figjam", {
              pdfCount
            }),
            onConfirm: (pdfType: any) => {
              debugState.dispatch(hideModalHandler());
              resolve({
                pdfType
              });
            },
            onCancel: () => {
              debugState.dispatch(hideModalHandler());
              resolve({
                pdfType: WhiteboardIntegrationType.UNKNOWN,
                isCanceled: true
              });
            }
          }
        }));
      });
    }
    return this.getPdfSourcePromise;
  }

  /**
   * Resets the PDF source promise to allow re-selection.
   */
  resetPdfSource(): void {
    this.getPdfSourcePromise = null;
  }

  /**
   * Populates PDF images with byte data in the fullscreen context.
   * @param images - Array of image data with node IDs.
   */
  populatePdfImagesWithImageBytes(images: any[]): void {
    const nodeImageData = images.flatMap(image => image.nodeIds.map((nodeId: any) => ({
      nodeId,
      bytes: image.bytes
    })));
    Fullscreen.populatePdfImagesWithImageBytes(nodeImageData);
  }

  /**
   * Converts PDF bytes to a scene, handling UI feedback and errors.
   * @param pdfBytes - PDF file as byte array.
   * @param pdfType - Type of PDF integration.
   * @param cursorX - Cursor X position.
   * @param cursorY - Cursor Y position.
   * @returns Conversion status.
   */
  async convertPdfToScene(pdfBytes: Uint8Array, pdfType: WhiteboardIntegrationType, cursorX?: number, cursorY?: number): Promise<any> {
    debugState.dispatch(VisualBellActions.enqueue({
      type: PDF_IMPORT_PROGRESS_TYPE,
      message: getI18nString("visual_bell.import_pdf"),
      icon: VisualBellIcon.IMAGE_BACKED_SPINNER
    }));
    const result = await this.convertPdf({
      pdfBytes,
      pdfType,
      cursorX,
      cursorY
    });
    debugState.dispatch(VisualBellActions.dequeue({
      matchType: PDF_IMPORT_PROGRESS_TYPE
    }));
    const status = result.status;
    if (status === PerfResult.SUCCESS) {
      const {
        images,
        hadImageExtractError
      } = result;
      let hadPopulationError = false;
      try {
        this.populatePdfImagesWithImageBytes(images);
      } catch (error) {
        hadPopulationError = true;
        reportError(ServiceCategories.FIGJAM, error);
      }
      if (hadImageExtractError || hadPopulationError) {
        debugState.dispatch(VisualBellActions.enqueue({
          type: PDF_IMPORT_FAILURE_TYPE,
          message: getI18nString("fullscreen.file_import.import_pdf_images_not_imported")
        }));
      }
      return status;
    }
    let errorMessage: string;
    switch (status) {
      case PerfResult.ERROR_TEXT_SIZE:
        errorMessage = getI18nString("fullscreen.file_import.file_contains_text_either_too_big_or_too_small");
        break;
      case PerfResult.TIMEOUT:
        errorMessage = getI18nString("fullscreen.file_import.file_timed_out");
        break;
      case PerfResult.ERROR_OTHER:
        errorMessage = getWhiteboardImportErrorMessage(pdfType);
        break;
      default:
        throwTypeError(status);
    }
    debugState.dispatch(VisualBellActions.enqueue({
      type: PDF_IMPORT_FAILURE_TYPE,
      message: errorMessage
    }));
    return status;
  }

  /**
   * Performs the core PDF conversion logic.
   * @param params - Conversion parameters.
   * @returns Conversion result with status and images.
   */
  async convertPdf(params: {
    pdfBytes: Uint8Array;
    pdfType: WhiteboardIntegrationType;
    cursorX?: number;
    cursorY?: number;
  }): Promise<any> {
    const {
      pdfBytes,
      pdfType,
      cursorX = 0,
      cursorY = 0
    } = params;
    const timer = new Timer();
    timer.start();
    try {
      const {
        svgStrings,
        extractedImages: {
          images,
          hadImageError
        }
      } = await convertPdfToSvgStrings(pdfBytes, pdfType);
      if (svgStrings) {
        const {
          status,
          imagesToImport
        } = Fullscreen.createSceneFromSVG(svgStrings, pdfType, cursorX, cursorY);
        if (status !== PerfResult.SUCCESS) {
          return {
            status
          };
        }
        const mappedImages = images && imagesToImport ? this.mapImagesToNodes(images, imagesToImport) : [];
        const elapsedTime = timer.getElapsedTime();
        trackEventAnalytics("PDF Import Elapsed Time", {
          elapsedTimeMs: elapsedTime
        }, {
          forwardToDatadog: true
        });
        return {
          status,
          images: mappedImages,
          hadImageExtractError: hadImageError
        };
      }
    } catch (error) {
      const errorMessage = `PDF Import Error: ${error.message}`;
      try {
        error.message = errorMessage;
        reportError(ServiceCategories.FIGJAM, error);
      } catch {
        reportError(ServiceCategories.FIGJAM, new Error(errorMessage));
      }
    }
    const unknownError = new Error("PDF Import Error: unknown issue inside convertPDFToScene");
    reportError(ServiceCategories.FIGJAM, unknownError);
    return {
      status: PerfResult.ERROR_OTHER
    };
  }

  /**
   * Maps images to their corresponding node IDs.
   * @param images - Array of image data.
   * @param imagesToImport - Array of images to import with hashes.
   * @returns Mapped image data with node IDs.
   */
  mapImagesToNodes(images: any[], imagesToImport: any[]): any[] {
    const hashToNodes = new Map<string, any[]>();
    imagesToImport.forEach(({
      nodeId,
      imageHash
    }) => {
      if (!hashToNodes.has(imageHash)) {
        hashToNodes.set(imageHash, []);
      }
      hashToNodes.get(imageHash)?.push(nodeId);
    });
    return images.map(image => ({
      ...image,
      nodeIds: hashToNodes.get(image.sha1Hash) ?? []
    }));
  }
}

// Original function name: $$eE0
/**
 * Initializes the PDF import manager singleton.
 */
export function initializePdfImportManager(): void {
  pdfImportManagerInstance = new PdfImportManager();
}

// Original export name: G_
export const G_ = initializePdfImportManager;

// Original export name: IY
export const IY = pdfImportManagerInstance;
