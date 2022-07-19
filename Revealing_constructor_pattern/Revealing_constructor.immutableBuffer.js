// 변경 불가능한 객체와 데이터 구조는 변경 가능한 구조를 대신하여 사용하기에 이상적인 속성들을 가지고 있다.
// 변경 불가능한 객체를 사용하면 다른 라이브러리나 함수로 전달하기 전에 원본이 변하는 것을 막기 위해 복사본을 만들 필요가 없고, 수정되지 않는다는 것을 보장할 수 있다.
// 변경 불가능한 객체를 수정하는 것은 새로운 복사본을 통해서만 가능하기 때문에, 이는 값의 변경 이유를 명확하게 하여 코드의 유지보수를 쉽게 한다.
// 또한 변경을 효율적으로 감지할 수 있다. 모든 변경에 복사본이 필요하고, 복사본을 통해 수정된다면 변경을 감지하는 것은 완전 항등 연산자(===)를 사용하면 된다.

const MODIFIER_NAME = ['swap', 'write', 'fill']

export class ImmutableBuffer {
    constructor(size, executor) {  
        const buffer = Buffer.alloc(size)  // 1. 생성자의 인자에 지정된 크기의 새로운 버퍼를 할당 
        const modifiers = {}               // 2. 버퍼를 변경할 수 있는 함수들을 보관하는 객체 리터럴 생성
        for(const prop in buffer) {        // 3. 버퍼 내부의 속성들을 살펴보면서 함수가 아닌 속성을 건너 뛴다
            if(typeof buffer[prop] !== 'function') {
                continue
            }

            if(MODIFIER_NAME.some(m => prop.startsWith(m))) {  // 4. 속성이 함수이면서 이름이 MODIFIER_NAME에 있는지 확인하고, 맞다면 버퍼 인스턴스에 바인드 한 후 modifiers 객체에 추가
                modifiers[prop] = buffer[prop].bind(buffer)
            } else {
                this[prop] = buffer[prop].bind(buffer)         // 5. 함수가 modifier 함수가 아니면 현재 인스턴스(this)에 직접 추가
            }
        }

        executor(modifiers)                // 6. 생성자에서 입력으로 받은 실행 함수를 호출하면서 인자로 modifier 객체를 전달하면 실행함수가 내부 버퍼를 변경할 수 있다
    }
}

// ImmutableBuffer는 사용자와 내부 버퍼 사이에서 프록시 역할을 한다. 
// 버퍼 인스턴스의 일부 함수는 ImmutableBuffer 인터페이스를 통해 직접 호출되는 반면 다른 함수들은 실행함수(modifier 내 함수)에 전달된다. 

