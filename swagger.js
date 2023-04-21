/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - fistname
 *         - lastname
 *         - email
 *         - password
 *       properties:
 *         firstname:
 *           type: string
 *           description: The firstname of user
 *         lastname:
 *           type: string
 *           description: The lastname of user
 *         email:
 *           type: string
 *           description: The email of user
 *         password:
 *           type: string
 *           description: The password of user
 *       example:
 *         fistname: Abba Sali
 *         lastname: Aboubakar Mamate
 *         email: abbasalimokolo@gmail.com
 *         password: Asw@#@2
 * @swagger
 * tags:
 *   name: User
 *   description: The auth API
 * /auth/create:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */
