module.exports = {
    entry: "./app/app.js",
    output:{
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        alias: {
            HomePage: 'app/components/HomePage.js',
            Account: "app/comp/Account.js",
            Main: "app/comp/Main.js",
            Nav: "app/comp/Nav.js",
            Transaction: "app/comp/Transaction.js",
            SignIn: "app/comp/SignIn.js",
            AccountInfo: "app/comp/AccountInfo.js",
            Notification: "app/comp/Notification.js"
        },
        extensions: ['*','.js','.jsx']
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query:{
                    presets: [
                        "react", "es2015", "stage-2"
                    ]
                },
                test: /\.jsx?$/,
                exclude: /node_module/
            }
        ]
    }
}