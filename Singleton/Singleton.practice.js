//Node.JS에서 싱글톤 패턴을 올바르게 구현하는 법에 대해 혼란스러워 할 수도 있지만 
//모듈에서 인스턴스를 익스포트 하는 것만으로도 이미 싱글톤 패턴과 유사하다.

import { Database } from './database.js' //Database파일은 생략

export const dbInstance = new Database('my-app-db', {
    url:'localhost:1234',
    username:'user',
    password:'pass'
})

// import { dbInstance } from '해당 디렉토리'로 임포트하면
// dbInstance 모듈의 공유된 인스턴스를 쉽게 얻을 수 있다.