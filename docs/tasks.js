module.exports = {
    paths: {
      "/create": {
        post: {
          tags: {
            Tasks: "Create a user",
          },
          description: "Create User",
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
            },
            500: {
              description: "There was a problem trying to create a task",
            },
          },
        }
      },
      "/": {
        get: {
            tags: {
              Tasks: "Get task",
            },
            description: "Get Task",
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
                description: "There was a problem trying to get a task"
              },
            },
          }
      },
       "/id/:_id": {
        put: {
            tags: {
              Tasks: "Update task",
            },
            description: "Update a task",
            operationId: "Task",
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
      },
      "/id/:_id": {
        delete: {
            tags: {
              Tasks: "Delete task",
            },
            description: "Delete task",
            operationId: "Task",
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
      }
    }
  
  