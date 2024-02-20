module.exports = {
  paths: {
    "/create": {
      post: {
        tags: {
          task: "Create a task",
        },
        description: "Create task",
        operationId: "createTask",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
              },
            },
          },
        },
        responses: {
          500: {
            description: "Server error",
          },
        },
      }
    },"/": {
      get: {
        tags: {
          task: "get a task",
        },
        description: "get task",
        operationId: "getTask",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
              },
            },
          },
        },
        responses: {
          201: {
            description: "User created successfully",
          },
          500: {
            description: "Server error",
          },
        },
      }
    },"/id/:_id": {
      put: {
        tags: {
          task: "update a task title",
        },
        description: "update a task title",
        operationId: "updateTask",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
              },
            },
          },
        },
        responses: {
          201: {
            description: "User created successfully",
          },
          500: {
            description: "Server error",
          },
        },
      },delete: {
        tags: {
          task: "delete a task",
        },
        description: "delete a task",
        operationId: "deleteTask",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Task",
              },
            },
          },
        },
        responses: {
          500: {
            description: "There was a problem trying to delete a task",
          },
        },
      }
    },







  },
}
