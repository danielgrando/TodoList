import BD from '../BD.js'

class TodoController {
    create(req, res) {
        try {
            const BDIds = BD.map((item) => {
                return item.id
            })

            const idTodo = BDIds.pop() + 1

            req.body.id = idTodo ? idTodo : 1

            BD.push(req.body)

            return res.status(201).json(BD)
        } catch (error) {
            throw new Error(error)
        }
    }

    index(req, res) {
        try {
            return res.json(BD)
        } catch (error) {
            throw new Error(error)
        }
    }

    show(req, res) {
        try {
            const { todoId } = req.params

            const isInBD = BD.find((item) => item.id === Number(todoId))

            if (!isInBD) {
                return res.status(404).send({ status: 404, message: 'Resource not found!' })
            }

            return res.json(isInBD)
        } catch (error) {
            throw new Error(error)
        }
    }

    update(req, res) {
        try {
            const { todoId } = req.params
            const { name, completed } = req.body

            const isInBD = BD.find((item) => item.id === Number(todoId))

            if (!isInBD) {
                return res.status(404).send({ status: 404, message: 'Resource not found!' })
            }

            isInBD.name = name
            isInBD.completed = completed

            return res.json(isInBD)
        } catch (error) {
            throw new Error(error)
        }
    }


    delete(req, res) {
        try {
            const { todoId } = req.params

            const IdsInBD = BD.map((item) => {
                return item.id
            })

            const index = IdsInBD.indexOf(Number(todoId));

            if (index !== -1) {
                BD.splice(index, 1);
            } else {
                return res.status(404).send({ status: 404, message: 'Resource not found!' })
            }

            return res.status(200).send({ status: 200, message: 'sucess' })
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new TodoController()
