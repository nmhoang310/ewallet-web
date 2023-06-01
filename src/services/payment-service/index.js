import * as request from "@/utils/paymentRequest"

export const topUp = async (userId,amount) => {
    var params = new FormData();
    params.append('userId', userId);
    params.append('amount', amount);
    try {
        const res = await request.post('/payment/top-up',  params)
        // console.log("======")
        // console.log(res)
        // return res.data;
        return res;
    } catch (error) {
        console.log(error)
    }
}

// export const getBalance = async (userId) => {
//     try {
//         const res = await request.get(`/wallet/balance/${userId}`)
//         // console.log("======")
//         // console.log(res)
//         // return res.data;
//         return res;
//     } catch (error) {
//         console.log(error)
//     }
// }
