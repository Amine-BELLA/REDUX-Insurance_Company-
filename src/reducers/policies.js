function policies(listOfPolicies = [], action) {
    switch(action.type) {
        case 'CREATE_POLICY' : {
            return [...listOfPolicies, action.payload];
        }

        case 'DELETE_POLICY' : {
            return listOfPolicies.filter(policy => policy.payload.name !== action.payload.name);
        }
    }
}

export default policies;