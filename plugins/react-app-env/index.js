import dotenv from "dotenv";
import webpack from "webpack";

// Load environment variables from .env and .env.local
dotenv.config();
dotenv.config({ path: [".env.local", ".env"] });

// Filter and keep only REACT_APP_* variables
const envKeys = Object.keys(process.env)
  .filter((key) => key.startsWith("REACT_APP_"))
  .reduce((prev, curr) => {
    prev[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
    return prev;
  }, {});

export default function (context, options) {
  return {
    name: "react-app-env",
    configureWebpack(config, isServer, utils) {
      return {
        plugins: [new webpack.DefinePlugin(envKeys)],
      };
    },
  };
}
