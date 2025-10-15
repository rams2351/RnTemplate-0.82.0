
import ApiProvider from "@/api/ApiProvider";
import { _showErrorMessage, _showSuccessMessage } from "@/utils/helpers";
import { Action } from "@types";
import { call, put, takeLatest } from "redux-saga/effects";
import { actions } from "../slices/reducer";

function* callLogin({ type, payload, }: Action): Generator<any, any, any> {

    yield put(actions.setLoading(true));
    try {
        const res = (yield call(ApiProvider.callLogin, payload));
        if (res.status == 200) {
            yield put(actions.doLogin(res.data))
            _showSuccessMessage("Login successfully!")
        } else {
            _showErrorMessage(res.message);
        }
        yield put(actions.setLoading(false));
    }
    catch (error) {
        console.log("Catch Error", error);
        yield put(actions.setLoading(false));
    }
}




export default function* watchAuth() {
    yield takeLatest(actions.callLogin.toString(), callLogin);
}