import { Router } from "express";
import TodoController from "./controllers/TodoController.js";


const routes = Router()


routes.get('/', TodoController.index)
routes.post('/', TodoController.create)
routes.put('/:todoId', TodoController.update)
routes.get('/:todoId', TodoController.show)
routes.delete('/:todoId', TodoController.delete)


export default routes