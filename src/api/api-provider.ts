import API from "@api/api-config";

class APIProvider extends API {

    doLogin = (body: any) => {
        console.log("---------- doLogin Api Call ---------------")
        return this.request('auth/login', "POST", body);
    }


}

export default new APIProvider()