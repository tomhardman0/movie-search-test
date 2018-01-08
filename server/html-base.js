module.exports = ({ title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/assets/index.css" />
      </head>

      <body>
        <div id="root"></div>
      </body>

      <script src="/assets/index.js"></script>
    </html>
  `;
};
