
let WINDOW = {};

if (typeof window !== "undefined") {
    // When code is on client-side. So we need to use actual methods and data.
    WINDOW = window;
} else {
    WINDOW = {
        document: {
            location: {},
        },
        localStorage: {
            getItem: () => { },
            setItem: () => { }
        },
    };
}
export default WINDOW;
