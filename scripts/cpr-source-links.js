const sourcePattern = /(?<source>[^\s]+)(?:\s+[^\d]+(?<page>\d+))?/gm


function renderSourceLink(app) {
	app.element.find(".item-details-source").each((i, el) =>  {
		
		let newChildren = [ ...el.textContent.matchAll(sourcePattern).map((match) => {
			const substring = match[0];
			const source = match[1];
			const page = match[2];
			// Shenanigans with html, because I'm too lazy to create new dom by hand
			const tempContainer = document.createElement("div");
			// Have to mimick link from journal, because getting proper hashes is impossible 
			// with pdfpager. The "pages" seem to be created only when link is created/accessed.
			// So, instead we put link into the dom and call openPDFByCode when it's clicked instead of placing actual link.
			tempContainer.innerHTML = `<a class="content-link" draggable="true">
								<i class="fas fa-file-pdf"></i>${substring}</a>`;
			const link = tempContainer.firstChild;


			link.addEventListener("click", () => {
				if (page)
					ui.pdfpager.openPDFByCode(source, {page: Number(page)});
				else
					ui.pdfpager.openPDFByCode(source);
			})
			
			return link;
		})];
		el.replaceChildren(...newChildren);
	});
}

// Helper function to get all sources from all compendiums
async function log_sources() {
	let sources = {};
	for (const pack of game.packs.contents) {
		if (pack.documentClass.name != 'CPRItem') {
			continue;
		}
		for (const item of pack.index.contents) {
			const doc = await fromUuid(item.uuid)
			if (doc?.system?.source?.book) {
				sources[doc.system.source.book] = item.name;
			}
		}
	}
	console.dir(sources)
}

Hooks.once("ready", () => {
	if (!game.log_sources) {
		game.log_sources = log_sources
	}
})

Hooks.on("renderCPRItemSheet", (app) => {
	renderSourceLink(app);
});