function claims(listOfClaims = [], action) {
    switch (action.type) {
        case 'CREATE_CLAIM' : {
            return [...listOfClaims, action.payload];
        }
    }
}

export default claims;