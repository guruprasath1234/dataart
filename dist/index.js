var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchEvents } from "./fetchers";
import { renderTimeline } from "./renderer";
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode", themeToggle.checked);
    });
    const events = yield fetchEvents();
    renderTimeline(events);
}));
//# sourceMappingURL=index.js.map