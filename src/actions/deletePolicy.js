function deletePolicy(name) {
    return { 
        type : 'DELETE_POLICY',
        payload : {
            name : name
        }
    }
}

export default deletePolicy;