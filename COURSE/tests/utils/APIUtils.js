class APIUtils
{
    //constructor
    constructor(apiContext){
        this.apiContext = apiContext;
    }

    getToken = async () => 
    {
    //LOGIN API
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                headers:
                {
                    'Accept': "application/json",
                    'Content-Type': "application/json",
                    'Connection': "keep-alive"
                },
                data: 
                {
                    userEmail: "anshika@gmail.com",
                    userPassword: "Iamking@000"
                }
            })
        
        let token = await(await(loginResponse.json())).token;
        return token;
    }


    createOrder = async () =>
    {
        //ORDER API
        const orderResponse = await (this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
            headers:
            {
                'Accept': "application/json",
                'Authorization': await this.getToken(),
                'Content-Type': "application/json",
                'Connection': "keep-alive"
            },
            data: 
            {
                orders: 
                [
                    {
                        country: "Brazil", 
                        productOrderedId: "6262e9d9e26b7e1a10e89c04"                 
                    }
                ]
            }
        }))


        console.log(await(orderResponse.json()));
        let order_id = await(await(orderResponse.json())).orders[0];
        console.log(order_id);

        return order_id;
    }


}

module.exports = {APIUtils};