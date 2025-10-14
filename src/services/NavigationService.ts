import {
    NavigationContainerRef,
    Route,
    StackActions,
} from '@react-navigation/native';
import DebounceService from '@services/DebounceService';

class Service {
    navRef: NavigationContainerRef<ReactNavigation.RootParamList> | null = null;

    init = (ref: NavigationContainerRef<ReactNavigation.RootParamList> | null) => {
        (this.navRef = ref)
    }

    push = (name: string, params: any = {}) =>
        DebounceService.debounce(() =>
            this.navRef?.dispatch(StackActions.push(name, params)),
        );

    closeAndPush = (name: string, params: any = {}) => {
        // console.log("navigationRef?.current??", params, navigationRef?.current?.getCurrentRoute())
        const currentName = this.navRef?.getCurrentRoute()?.name;

        if (currentName == name) {
            this.goBack();
        }
        DebounceService.debounce(() =>
            this.navRef?.dispatch(StackActions.push(name, params)),
        );
    };

    getCurrentScreen = (): Route<string, any> => {
        return this.navRef?.getCurrentRoute() as Route<string, any>;
    };

    replace = (name: string, params: any = {}) => {
        DebounceService.debounce(() =>
            this.navRef?.dispatch(StackActions.replace(name, params)),
        );
    };

    resetStack = (name: string, params: any = {}) => {
        DebounceService.debounce(() =>
            this.navRef?.reset({
                index: 0,
                routes: [{ name }],
            }),
        );
    };

    logout = (name: string, params: any = {}) => {
        this.navRef?.dispatch(StackActions.popToTop());
        this.replace(name);
    };
    goBack = () => {
        try {
            this.navRef?.goBack();
        } catch (e) {
            console.log(e);
        }
    };

    navigate = (name: string, params: any = {}, merge: boolean = true) => {
        // @ts-ignore
        this.navRef?.navigate(name, params);
    };

}

const NavigationService = new Service();
export default NavigationService;
