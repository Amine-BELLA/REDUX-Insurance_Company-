function createPolicy(name, amountOfMoneyToGive) {
    return {
        type : 'CREATE_POLICY',
        payload : {
            name : name,
            amountOfMoneyToGive : amountOfMoneyToGive
        }
    }
}

export default createPolicy;