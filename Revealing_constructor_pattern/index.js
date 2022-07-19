import { ImmutableBuffer } from "./Revealing_constructor.immutableBuffer";

const hello = 'hello'
const immutable = new ImmutableBuffer(hello.length, ({ write }) => {
    write(hello)
})

console.log(String.fromCharCode(immutable.readInt8(0)))
// readInt8과 같이 버퍼를 변경하지 않는 함수들은 공개하지만 버퍼의 내용을 변경하는 함수는 노출하지 않는다.