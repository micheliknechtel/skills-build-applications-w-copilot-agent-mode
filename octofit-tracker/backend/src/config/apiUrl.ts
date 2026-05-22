const PORT = Number(process.env.PORT) || 8000;

export const getApiBaseUrl = (): string => {
  const codespaceName = process.env.CODESPACE_NAME;

  return codespaceName
    ? `https://${codespaceName}-${PORT}.app.github.dev`
    : `http://localhost:${PORT}`;
};

export { PORT };
