"use strict";
import furigana from "./lib/furigana"
export default function(md, options) {
  md.inline.ruler.push("furigana", furigana(options));
};
