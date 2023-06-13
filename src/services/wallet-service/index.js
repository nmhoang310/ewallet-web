import * as request from "@/utils/walletRequest"

export const addNewCard = async (body, token) => {
    try {
        const res = await request.post('/wallet/add-new-card', body, {
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

export const getBalance = async (userId, token) => {
    try {
        const res = await request.get(`/wallet/balance/${userId}`, {
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

export const getWalletId = async (userId, token) => {
    try {
        const res = await request.get(`/wallet/get-wallet-id/${userId}`, {
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
