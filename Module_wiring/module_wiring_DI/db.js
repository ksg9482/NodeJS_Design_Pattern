import sqlite3 from 'sqlite3'

export function createDb (dbFile) {
    return new sqlite3.Database(dbFile)
} 

//createDb()라는 팩토리 함수를 제공하여 실행시 데이터베이스의 새 인터페이스를 만들수 있다.
//또한 필요시 다른 파일에 데이터를 쓸 수 있는 독립적인 인스턴스를 만들기 위해 생성시 데이터베이스 파일 경로를 전달 할 수 있다.
