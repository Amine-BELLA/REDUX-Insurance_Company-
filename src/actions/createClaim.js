function createClaim(name, amountofMoneyToDemand) {
    return {
        type : 'CREATE_CLAIM',
        payload : {
            name : name,
            amountofMoneyToDemand : amountofMoneyToDemand
        }
    }
}

export default createClaim;