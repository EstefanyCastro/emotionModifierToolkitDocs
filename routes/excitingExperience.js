const express = require("express");
const router = express.Router();

/**
 * @swagger
 * paths:
 *   /excitingExperience:
 *     post:
 *       tags:
 *         - exciting_experience
 *       description: Increases or decrease the happiness and surprise emotions in the emotional entity using Paul Ekman's emotional model individually or in combination with James A. Russell's emotional model (PAD).
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 emotional_entity:
 *                   type: array
 *                   items:
 *                     type: integer
 *                   minItems: 6
 *                   maxItems: 6
 *                   description: List of emotions of the emotional entity, which has a length of 6 positions for using the emotional model of Paul Ekman.
 *                   example: [10, 0, 0, 0, 0, 10]
 *                 happiness_amount:
 *                   type: integer
 *                   description: Amount of happiness mutation
 *                   example: 10
 *                 surprise_amount:
 *                   type: integer
 *                   description: Amount of surprise mutation
 *                   example: 20
 *       responses:
 *         200:
 *           description: A json object is returned with the mutated emotional entity
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   statusCode:
 *                     type: integer
 *                     example: 200
 *                   body:
 *                     type: array
 *                     items:
 *                       type: integer
 *                     example: [20, 0, 0, 0, 0, 30]
 *         400:
 *           $ref: "#/components/responses/BadRequest"
 *         404:
 *           $ref: "#/components/responses/NotFound"
 *         500:
 *           $ref: "#/components/responses/ServerError"
 *
 * components:
 *   responses:
 *     NotFound:
 *       description: (NotFound) Information not found
 *     BadRequest:
 *       description: (BadRequest) An error message is sent
 *     ServerError:
 *       description: Server error
 *
 *   schemas:
 *     excitingExperiencePADBody:
 *       type: object
 *       properties:
 *         emotional_entity:
 *           type: array
 *           items:
 *             type: integer
 *           minItems: 9
 *           maxItems: 9
 *           description: List of emotions of the emotional entity, which has a length of 9 positions and will use Paul Ekman's emotional model in conjunction with James A. Russell's emotional model (PAD).
 *           example: [10, 0, 0, 0, 0, 10, 20, 40, 60]
 *         happiness_amount:
 *           type: integer
 *           description: Amount of happiness mutation
 *           example: 10
 *         surprise_amount:
 *           type: integer
 *           description: Amount of surprise mutation
 *           example: 20
 *         pleasure_amount:
 *           type: integer
 *           description: Amount of pleasure mutation (PAD)
 *           example: 20
 *         dominance_amount:
 *           type: integer
 *           description: Amount of dominance mutation (PAD)
 *           example: 40
 *         activation_amount:
 *           type: integer
 *           description: Amount of activation mutation (PAD)
 *           example: 5
 *
 *     excitingExperiencePADSuccess:
 *       type: object
 *       properties:
 *         statusCode:
 *           type: integer
 *           example: 200
 *         body:
 *           type: array
 *           items:
 *             type: integer
 *           example: [20, 0, 0, 0, 0, 30, 40, 80, 65]
 */

module.exports = router;
