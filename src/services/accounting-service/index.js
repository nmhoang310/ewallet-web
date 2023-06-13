import * as request from "@/utils/accountingRequest"


// export const getListTransactionByWalletId = async (walletId) => {
//     var params = new FormData();
//     params.append('userId', userId);
//     params.append('amount', amount);
//     try {
//         const res = await request.post('/payment/top-up',  params)
//         // console.log("======")
//         // console.log(res)
//         // return res.data;
//         return res;
//     } catch (error) {
//         console.log(error)
//     }
// }



export const getListTransactionByWalletId =  async (walletId, token) => {
    try {
        const res = await request.get(`/accounting/transaction/${walletId}`, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
        // console.log("======")
        // console.log(res)
        // return res.data;
        
        return res;
    } catch (error) {
        console.log(error)
    }
}

export const getListTransactionByDate =  async (startDate, endDate, walletId,token) => {
    // var params = new FormData();
    // params.append('start', startDate);
    // params.append('end', endDate);
    // params.append('walletId', walletId);
    try {
        const res = await request.get('/accounting/transaction/filter', {
            headers: {
                'Authorization': 'Bearer ' + token,
            },
            params: {
                start: startDate,
                end: endDate,
                walletId: walletId,
            },
        })
        // console.log("======")
        // console.log(res)
        // return res.data;
        
        return res;
    } catch (error) {
        console.log(error)
    }
}
