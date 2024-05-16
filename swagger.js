const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Emotional modifier toolkit",
      version: "1.0.0",
      description:
        "The emotional management toolkit provides endpoints for managing emotional entities and their emotions. This toolkit allows developers to integrate emotion detection and analysis into their applications. Emotional entities are based on the emotional models of Paul Ekman and James A. Russell (PAD)." +
        "\n" +
        "\nAll endpoints of this API follow the same validation, normalization and response standards:" +
        "\n- Emotional entity lists must contain only positive integers or zero." +
        "\n- Emotional entity lists must have a length of 6 positions for the Paul Ekman model or 9 positions for the PAD model." +
        "\n- All mutation amounts (e.g., happiness_amount, pleasure_amount) must be integers." +
        "\n- Emotional values are normalized to ensure they are within the range [0, 100]." +
        "\n- PAD values are normalized to ensure they are within the range [0, 100].",
    },
    servers: [
      {
        url: "https://sgzan1udv6.execute-api.us-east-2.amazonaws.com/emotionModifier",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api-docs.json", (req, res) => {
    res.setHeader("Content type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Version 1 Docs are available at http://localhost:${port}/api-docs`
  );
};

module.exports = { swaggerDocs };
