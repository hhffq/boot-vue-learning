const path = require("path")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /{node_modules}/,
                options: {
                    presets: [
                        [
                            'env', {
                                targets: {
                                    browers: ['>1%', 'last 2 version', "not ie<=8"]
                                }
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            // {
            //     test:/\.(png | jpg | gif | jpeg)$/,
            //     use:[
            //         "file-loader",
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 1024 * 1024,
            //                 name: "img/[name]-[hash:8].[ext]"
            //             }
            //         }
            //     ]
            // }
        ]
    }
}