export default(state,action)=>{
    switch (action.type){
        case 'Delete':
            let clone=[]
            let count=0;
            for(let i=0;i<state.transactions.length;i++){
                if(state.transactions[i].id!=action.payload){
                    clone.push(state.transactions[i]);
                    state.transactions[i].id=count;
                    count++
                }
            }
            return {
                ...state,
                transactions:clone
            }
        case 'Add':
            let clone2=[...state.transactions];
            action.payload.id=clone2.length
            clone2.push(action.payload)
            return {
                ...state,
                transactions:clone2
            }
        default:
            return state;
    }
}