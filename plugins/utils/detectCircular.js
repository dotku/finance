// plugins/utils/detectCircular.js
import { stringify } from "flatted";

export default function detectCircular(obj) {
  return stringify(obj);
}
