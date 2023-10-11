import Alpine from "alpinejs";

document.addEventListener("alpine:init", () => {
	Alpine.data("header", () => ({
		open: false,
		scrolling: false,
        init() {
			if(document.body.getBoundingClientRect().top != 0){
				this.scrolling = true
			}
			document.addEventListener("scroll", (e) => {
				if(document.body.getBoundingClientRect().top != 0){
					this.scrolling = true
				}else{
					this.scrolling = false
				}
				this.open = false
			});
		},
	}));
});

// window.Alpine = Alpine;
// Alpine.start();