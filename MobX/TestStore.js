import {observable, computed} from "mobx"

class TestStore {
    @observable counter = 0
    timer = null

    @computed 
    get value()
    {
        return this.counter;
    }
    @computed
    get doubleValue(){
        return this.counter * 2;
    }
    start(){
        this.timer = setIterval(() => {
            this.counter ++;
        },1000)
    }

    stop() {
        clearInterval(this.timer);
    }
}

export default TestStore;