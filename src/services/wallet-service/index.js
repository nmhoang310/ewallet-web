import * as request from "@/utils/walletRequest"

export const addNewCard = async (body) => {
    try {
        const res = await request.post('/wallet/add-new-card', body)
        // console.log("======")
        // console.log(res)
        // return res.data;
        return res;
    } catch (error) {
        console.log(error)
    }
}

export const getBalance = async (userId) => {
    try {
        const res = await request.get(`/wallet/balance/${userId}`)
        // console.log("======")
        // console.log(res)
        // return res.data;
        return res;
    } catch (error) {
        console.log(error)
    }
}
