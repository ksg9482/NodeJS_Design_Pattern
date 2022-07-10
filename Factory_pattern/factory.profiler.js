//팩토리 패턴을 이용한 코드 프로파일러

class Profiler {
    constructor(label) {
        this.label = label;
        this.lastTime = null;
    };
    // start()가 호출될 때 현재시간 저장
    start () {
        this.lastTime = process.hrtime()
    };

    //end()가 호출될 때 경과 시간을 계산하여 콘솔에 출력한다.
    end () {
        const diff = process.hrtime(this.lastTime);
        console.log(
            `Timer "${this.label}" took ${diff[0]} seconds 
            and ${diff[1]} nanoseconds.`);
    };
};


// 팩토리를 사용하여 Profile 객체의 생성을 추상화 한 후 어플리케이션의 모드에 따라서 
// 동작하거나 인터페이스는 동일하나 기능은 없는 모의 객체를 반환하도록 만들 수 있다.
// procuntion에서 실행중일 경우 아무것도 수행하지 않는 noopProfiler를 반환하여 프로파일링을 비활성화 한다.
// procuntion이 아닐경우 기능을 가진 Profiler인스턴스를 만들어 반환한다.
const noopProfiler = {
    start() {},
    end() {}
};
export function createProfiler(label) { // Profiler가 아니라 팩토리를 export했다.
    if(process.env.NODE_ENV === 'production') {
        return noopProfiler;
    };

    return new Profiler(label)
}