
const BOUNCE_RATE = 900;

class DebounceService {
    private busy: boolean = false;

    debounce = async (callback: Function) => {
        setTimeout(() => {
            this.busy = false;
        }, BOUNCE_RATE);

        if (!this.busy) {
            this.busy = true;
            callback();
        }
    };
}

export default new DebounceService();

