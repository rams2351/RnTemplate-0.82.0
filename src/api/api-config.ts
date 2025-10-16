import NetInfo from "@react-native-community/netinfo";
import { MMKVStorage } from '@services/StorageService';
import axios, { AxiosInstance, AxiosRequestHeaders, AxiosResponse, InternalAxiosRequestConfig, Method } from 'axios';
import Config from 'react-native-config';
import { APIResponse } from 'types';


interface header {
    "Content-Type"?: string;
    Accept?: string;
    Authorization?: string,
}


class API {
    #api: AxiosInstance = axios.create({
        baseURL: Config.API_URL,
        timeout: 1000,
        // headers: { 'X-Custom-Header': 'foobar' }
    });

    isTokenExpired = false;


    constructor() {
        this.#api.interceptors.request.use(this.requestInterceptor);

        this.#api.interceptors.response.use(this.responseInterceptor, (error) => {
            if (error?.code === 'ERR_NETWORK') {
                NetInfo.refresh()
            }

            return this.responseInterceptor(error?.response) // Handles error response
        },);
    }



    protected request = (url: string, method?: Method, body?: any, accessToken = MMKVStorage.getItem('accessToken')): Promise<APIResponse> => {

        console.log('API REQ', url, method, body)
        const isMultipart = !!(body && body instanceof FormData);
        const header: header = {
            "Content-Type": isMultipart ? "multipart/form-data" : "application/json",
            Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
        }
        return this.#api.request({
            method: method,
            url: url,
            data: body,
            headers: header as unknown as AxiosRequestHeaders,
        });
    }



    requestInterceptor = async (requestConfig: InternalAxiosRequestConfig<any>) => {
        try {

        } catch {

        } finally {
            return requestConfig
        }
    };


    responseInterceptor = async (response: AxiosResponse<any>): Promise<any> => {
        if ((response.status === 0)) {
            NetInfo.refresh()
        }

        try {
            if (response?.data && (JSON.stringify(response?.data).startsWith("<") || JSON.stringify(response?.data).startsWith("\"<"))) {
                setTimeout(() => {
                    // _showErrorMessage("Internal Server Error")
                }, 500);
            } else if (response?.status == 401 || response?.data?.status == 401) {
                if (!this.isTokenExpired) {
                    this.isTokenExpired = true
                    // _showErrorMessage(response?.data?.message)
                    // if (Database.isLogin) {
                    //   store.dispatch(actions.callTokenExpired(false))
                    // } else NavigationService.resetStack("Login")
                }
            } else if (response?.status == 419 || response?.data?.status == 419) {
                //   if (!this.isOldVersion) {
                //     this.isOldVersion = true


                //     Alert.alert("Update Available", response?.data?.message || 'An app update is available', [{
                //       text: "Update", async onPress() {
                //         if (config.APP_TYPE != 'production' && Platform.OS === 'ios') {
                //           return RNExitApp.exitApp()
                //         }
                //         await Linking.openURL(config.STORE_URL)
                //         await sleep(200)

                //         RNExitApp.exitApp()

                //       }
                //     }], { cancelable: false })
                //   }
            } else {
                console.log(JSON.stringify(response?.data));
                return response?.data;
            }
        } finally {
        }
    }
}


export default API;