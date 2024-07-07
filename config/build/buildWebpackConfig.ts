import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolves";
import { BuildOptions } from "./types/config";
import webpack from "webpack";
import path from "path";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].ts",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        devtool: 'inline-source-map',
        devServer: buildDevServer(options),
    }
}