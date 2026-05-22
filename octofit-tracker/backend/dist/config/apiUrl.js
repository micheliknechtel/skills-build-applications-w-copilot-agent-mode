"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.getApiBaseUrl = void 0;
const PORT = Number(process.env.PORT) || 8000;
exports.PORT = PORT;
const getApiBaseUrl = () => {
    const codespaceName = process.env.CODESPACE_NAME;
    return codespaceName
        ? `https://${codespaceName}-${PORT}.app.github.dev`
        : `http://localhost:${PORT}`;
};
exports.getApiBaseUrl = getApiBaseUrl;
