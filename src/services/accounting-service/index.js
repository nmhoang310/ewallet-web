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

export const getListTransactionByWalletId =  async (walletId) => {
    try {
        const res = await request.get(`/accounting/transaction/${walletId}`)
        // console.log("======")
        // console.log(res)
        // return res.data;
        return res;
    } catch (error) {
        console.log(error)
    }
}
