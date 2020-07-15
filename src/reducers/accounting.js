function accounting(money = 100, action) {
    switch (action.type) {
        case 'CREATE_POLICY' : {
            return money + action.payload.amountOfMoneyToGive;
        }

        case 'CREATE_CLAIM': {
            return money - action.payload.amountOfMoneyToDemand;
        }
    }
}

export default accounting;