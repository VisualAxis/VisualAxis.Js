class Chart {
    private element: HTMLElement;
    constructor(element: HTMLElement) {
        this.element = element;
    }

    public render() {
        this.element.innerHTML = `<h1>Hello World!</h1>`;
    }
}

// Expose the Chart class globally
if (typeof globalThis !== 'undefined') {
    (globalThis as any).Chart = Chart;
}