
import ApiProvider from "@api/api-provider";
import { call, takeLatest } from "redux-saga/effects";
import { Action } from "types";
import { actions } from "../reducer";


function* callLogin({ type, payload, }: Action): Generator<any, any, any> {
    try {
        const res = (yield call(ApiProvider.doLogin, payload));
        console.log('RES', res)
        // if (res.status == 200) {
        // yield put(actions.doLogin(res.data))
        // _showSuccessMessage("Login successfully!")
        // } else {
        // _showErrorMessage(res.message);
        // }
        // yield put(actions.setLoading(false));
    }
    catch (error) {
        console.log("Catch Error", error);
        // yield put(actions.setLoading(false));
    }
}




export default function* watchAuth() {
    yield takeLatest(actions.callLogin.toString(), callLogin);
}