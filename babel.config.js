module.exports = {
    dev_client: {
        presets: ["env", "stage-0", "react"],
        plugins: [["import", {
            "libraryName": "@component",
            "libraryDirectory": "",
            "style": (name, file) => {
                return `${name}/index.css`;
            }
        }]],
        cacheDirectory: true
    }
}
