module.exports = {
  paths: {
    "/create": {
      post: {
        tags: {
          task: "Create a task",
        },
        description: "Create task",
        operationId: "createUser",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
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
        operationId: "createUser",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
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
        operationId: "createUser",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
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
      delete: {
        tags: {
          task: "delete a task",
        },
        description: "delete a task",
        operationId: "createUser",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
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
