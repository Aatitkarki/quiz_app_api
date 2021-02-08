const router = require("express").Router();
const controller = require('./test_controller')
const errorHandler = require('../../helpers/error_handlers');

router.get("/test",errorHandler(controller.readAll));
router.post('/test',errorHandler(controller.store));
router.delete('/test/:id',errorHandler(controller.delete));
router.patch('/test/:id',errorHandler(controller.update));

module.exports = router;