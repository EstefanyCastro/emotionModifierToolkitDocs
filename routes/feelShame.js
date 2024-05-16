const express = require("express");
const router = express.Router();

/**
 * @swagger
 * paths:
 *   /feelShame:
 *     post:
 *       tags:
 *         - feel_shame
 *       description: Increases or decrease the fear and disgust emotion in the emotional entity using Paul Ekman's emotional model individually or in combination with James A. Russell's emotional model (PAD).
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
 *                   example: [0, 0, 10, 0, 10, 0]
 *                 fear_amount:
 *                   type: integer
 *                   description: Amount of fear mutation
 *                   example: 10
 *                 disgust_amount:
 *                   type: integer
 *                   description: Amount of disgust mutation
 *                   example: 5
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
 *                     example: [0, 0, 20, 0, 15, 0]
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
 *     feelShamePADBody:
 *       type: object
 *       properties:
 *         emotional_entity:
 *           type: array
 *           items:
 *             type: integer
 *           minItems: 9
 *           maxItems: 9
 *           description: List of emotions of the emotional entity, which has a length of 9 positions and will use Paul Ekman's emotional model in conjunction with James A. Russell's emotional model (PAD).
 *           example: [0, 0, 10, 0, 10, 0, 20, 40, 60]
 *         fear_amount:
 *           type: integer
 *           description: Amount of fear mutation
 *           example: 10
 *         disgust_amount:
 *           type: integer
 *           description: Amount of disgust mutation
 *           example: 5
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
 *     feelShamePADSuccess:
 *       type: object
 *       properties:
 *         statusCode:
 *           type: integer
 *           example: 200
 *         body:
 *           type: array
 *           items:
 *             type: integer
 *           example: [0, 0, 20, 0, 15, 0, 40, 80, 65]
 */

module.exports = router;
