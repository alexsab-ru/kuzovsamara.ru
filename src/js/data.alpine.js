import Alpine from "alpinejs";

document.addEventListener("alpine:init", () => {
	Alpine.data("header", () => ({
		open: false,
        init() {
			document.addEventListener("scroll", (e) => this.open = false);
		},
	}));
});
window.Alpine = Alpine;
Alpine.start();
