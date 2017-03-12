module.exports = {
    entry: "./src/entry.tsx",
    output: {
        filename: "./dist/bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [ {loader: "ts-loader"} ]
            }
        ]
    }
};
