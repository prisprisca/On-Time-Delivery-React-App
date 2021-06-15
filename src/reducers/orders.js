const { Switch } = require("@material-ui/core")

export default (orders = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return orders;
        case 'CREATE':    
            return orders;
        default:
            return orders;    
    }
}