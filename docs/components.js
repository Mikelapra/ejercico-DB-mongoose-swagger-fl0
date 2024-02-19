module.exports = {
    components:{
        schemas:{
            User:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"Task identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"title to register",
                        example:"John"
                    },
                    completed:{
                        type:'Boolean',
                        description:"Indicate if the task is completed",
                        example:"True"
                    },
                }
            }
        }
    }
}
